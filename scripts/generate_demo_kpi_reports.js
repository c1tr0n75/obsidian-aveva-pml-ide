#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const inputPath = path.join(root, 'production-reference/DBListing-examples/DBOutput_PIPING.txt');
const reportsRoot = path.join(root, 'examples/kpi-reports');

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
}

function one(value) {
  return Array.isArray(value) ? value[0] : value;
}

function parseRecords(text) {
  const lines = text.split(/\r?\n/);
  const records = [];
  let current = null;
  let pipe = '';
  let branch = '';

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i];
    const line = raw.trim();
    const newMatch = line.match(/^NEW\s+([A-Z0-9_]+)(?:\s+(\/\S+))?/);

    if (newMatch) {
      if (current) records.push(current);
      current = {
        type: newMatch[1],
        name: newMatch[2] || '',
        line: i + 1,
        attrs: {},
        pipe,
        branch,
      };
      if (current.type === 'PIPE') pipe = current.name;
      if (current.type === 'BRANCH') branch = current.name;
      current.pipe = pipe;
      current.branch = branch;
      continue;
    }

    if (!current) continue;
    const attrMatch = line.match(/^(:?[A-Za-z][A-Za-z0-9_]*)\s+(.+)$/);
    if (!attrMatch) continue;

    const key = attrMatch[1].replace(/^:/, '');
    if (['INPUT', 'ONERROR', 'END'].includes(key.toUpperCase())) continue;
    if (current.attrs[key] === undefined) {
      current.attrs[key] = attrMatch[2];
    } else if (Array.isArray(current.attrs[key])) {
      current.attrs[key].push(attrMatch[2]);
    } else {
      current.attrs[key] = [current.attrs[key], attrMatch[2]];
    }
  }

  if (current) records.push(current);
  return records;
}

function numberFrom(value, unit) {
  const source = String(one(value) || '');
  const matcher = unit
    ? new RegExp(`(-?\\d+(?:\\.\\d+)?)\\s*${unit}`, 'i')
    : /(-?\d+(?:\.\d+)?)/;
  const match = source.match(matcher);
  return match ? Number(match[1]) : null;
}

function boolFrom(value) {
  const source = String(one(value) || '').toLowerCase();
  if (source === 'true') return true;
  if (source === 'false') return false;
  return null;
}

function refTail(value) {
  const source = String(one(value) || 'unset');
  const match = source.match(/\/(\S+)$/);
  return match ? `/${match[1]}` : source.replace(/^SPCOMPONENT\s+|^SPECIFICATION\s+/, '');
}

function parsePos(value) {
  const source = String(one(value) || '');
  const re = /\b([WENSUD])\s+(-?\d+(?:\.\d+)?)\s*mm/g;
  const point = { x: null, y: null, z: null, raw: source };
  let match;

  while ((match = re.exec(source))) {
    const val = Number(match[2]);
    if (match[1] === 'E' || match[1] === 'W') point.x = val;
    if (match[1] === 'N' || match[1] === 'S') point.y = val;
    if (match[1] === 'U' || match[1] === 'D') point.z = val;
  }

  return point.x === null && point.y === null && point.z === null ? null : point;
}

function firstPosition(record) {
  return parsePos(record.attrs.POS) || parsePos(record.attrs.HPOS) || parsePos(record.attrs.TPOS);
}

function isGlobalPoint(point) {
  return point
    && Number.isFinite(point.x)
    && Number.isFinite(point.y)
    && Math.abs(point.x) > 10000
    && Math.abs(point.y) > 10000;
}

function globalPoint(record) {
  const point = firstPosition(record);
  if (!isGlobalPoint(point)) return null;
  return {
    ...point,
    type: record.type,
    name: record.name,
    pipe: record.pipe,
    branch: record.branch,
  };
}

function countBy(items, getKey) {
  const counts = new Map();
  for (const item of items) {
    const key = getKey(item) || 'unset';
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return [...counts].map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || String(a.label).localeCompare(String(b.label)));
}

function topWithOther(items, limit) {
  const head = items.slice(0, limit);
  const rest = items.slice(limit).reduce((sum, item) => sum + item.value, 0);
  return rest ? [...head, { label: 'Other', value: rest }] : head;
}

function groupBy(items, getKey) {
  const groups = new Map();
  for (const item of items) {
    const key = getKey(item) || 'unassigned';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return groups;
}

function extent(points) {
  const axis = (key) => {
    const values = points.map((point) => point[key]).filter(Number.isFinite);
    return values.length ? { min: Math.min(...values), max: Math.max(...values) } : { min: null, max: null };
  };
  const x = axis('x');
  const y = axis('y');
  const z = axis('z');
  return {
    x,
    y,
    z,
    spanX: x.min === null ? 0 : x.max - x.min,
    spanY: y.min === null ? 0 : y.max - y.min,
    spanZ: z.min === null ? 0 : z.max - z.min,
  };
}

function elevationBands(points, step = 2000) {
  const elevations = points.map((point) => point.z).filter((z) => Number.isFinite(z) && z > 10000);
  if (!elevations.length) return [];
  const min = Math.floor(Math.min(...elevations) / step) * step;
  const max = Math.ceil(Math.max(...elevations) / step) * step;
  const bins = [];

  for (let start = min; start < max; start += step) {
    bins.push({
      label: `${Math.round(start / 1000)}-${Math.round((start + step) / 1000)} m`,
      start,
      end: start + step,
      value: 0,
    });
  }

  for (const elevation of elevations) {
    const index = Math.min(bins.length - 1, Math.max(0, Math.floor((elevation - min) / step)));
    bins[index].value += 1;
  }

  return bins.filter((bin) => bin.value > 0);
}

function planScatter(points, limit = 650) {
  const bounds = extent(points);
  return points.slice(0, limit).map((point) => ({
    x: bounds.spanX ? ((point.x - bounds.x.min) / bounds.spanX) * 100 : 50,
    y: bounds.spanY ? ((point.y - bounds.y.min) / bounds.spanY) * 100 : 50,
    z: point.z,
    type: point.type,
    pipe: point.pipe || '',
    branch: point.branch || '',
    name: point.name || '',
  }));
}

function routeRows(records) {
  const branches = records.filter((record) => record.type === 'BRANCH');
  const components = records.filter((record) => !['SITE', 'ZONE', 'PIPE', 'BRANCH'].includes(record.type));
  const componentsByBranch = groupBy(components, (record) => record.branch);

  return branches.map((branch) => {
    const branchComponents = componentsByBranch.get(branch.name) || [];
    const head = parsePos(branch.attrs.HPOS);
    const tail = parsePos(branch.attrs.TPOS);
    const routeLengthMm = head && tail
      && Number.isFinite(head.x) && Number.isFinite(head.y) && Number.isFinite(head.z)
      && Number.isFinite(tail.x) && Number.isFinite(tail.y) && Number.isFinite(tail.z)
      ? Math.hypot(head.x - tail.x, head.y - tail.y, head.z - tail.z)
      : null;

    return {
      pipe: branch.pipe || '',
      branch: branch.name,
      line: branch.line,
      bore: numberFrom(branch.attrs.HBOR || branch.attrs.TBOR, 'mm'),
      spec: refTail(branch.attrs.PSPE),
      components: branchComponents.length,
      named: branchComponents.filter((component) => component.name).length,
      shopTrue: branchComponents.filter((component) => boolFrom(component.attrs.SHOP) === true).length,
      shopFalse: branchComponents.filter((component) => boolFrom(component.attrs.SHOP) === false).length,
      routeLengthMm,
    };
  }).sort((a, b) => b.components - a.components);
}

function qaRows(records, points) {
  const components = records.filter((record) => !['SITE', 'ZONE', 'PIPE', 'BRANCH'].includes(record.type));
  const rows = [];

  for (const component of components) {
    const issues = [];
    if (!firstPosition(component)) issues.push('missing position');
    if (boolFrom(component.attrs.SHOP) === null) issues.push('unset SHOP');
    if (!component.attrs.SPRE && !component.attrs.PSPE) issues.push('missing spec/reference');
    if (component.type === 'INSTRUMENT' && !component.name) issues.push('untagged instrument');
    if (issues.length) {
      rows.push({
        severity: issues.includes('missing position') ? 'warning' : 'info',
        type: component.type,
        name: component.name || '-',
        pipe: component.pipe || '-',
        branch: component.branch || '-',
        line: component.line,
        issue: issues.join('; '),
      });
    }
  }

  if (!points.length) {
    rows.push({
      severity: 'warning',
      type: 'GLOBAL',
      name: '-',
      pipe: '-',
      branch: '-',
      line: '-',
      issue: 'no global plan coordinates parsed',
    });
  }

  return rows;
}

function csvValue(value) {
  if (value === null || value === undefined) return '';
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function toCsv(rows) {
  if (!rows.length) return '';
  const keys = Object.keys(rows[0]);
  return `${keys.join(',')}\n${rows.map((row) => keys.map((key) => csvValue(row[key])).join(',')).join('\n')}\n`;
}

function metricRows(summary) {
  return Object.entries(summary).map(([metric, value]) => ({ metric, value }));
}

function makeSummaryMarkdown(report, data) {
  const metricLines = Object.entries(data.summary || {})
    .map(([key, value]) => `- ${key}: ${value}`)
    .join('\n');
  const notes = (data.tables?.notes || data.notes || []).map((note) => `- ${note}`).join('\n');
  return `# ${report.title} Summary\n\nGenerated from [DBOutput_PIPING.txt](../../../production-reference/DBListing-examples/DBOutput_PIPING.txt).\n\n## Key Metrics\n\n${metricLines}\n\n## Notes\n\n${notes}\n`;
}

function makeReadme(report) {
  return `# ${report.title}\n\n${report.description}\n\nGenerated from [DBOutput_PIPING.txt](../../../production-reference/DBListing-examples/DBOutput_PIPING.txt).\n\n[Open interactive report](${report.slug}.html)\n\n<iframe src="${report.slug}.html" width="100%" height="900"></iframe>\n\n## Package Contents\n\n- \`${report.slug}.html\` - interactive dashboard.\n- \`${report.slug}-data.json\` - parsed source data and KPI summaries.\n- [summary.md](summary.md) - static Obsidian-readable summary.\n- [report.json](report.json) - report metadata for indexing and automation.\n- \`exports/\` - CSV extracts for engineers and downstream tools.\n\n## Status\n\nDemo report package generated by [generate_demo_kpi_reports.js](../../../scripts/generate_demo_kpi_reports.js).\n`;
}

function makeReportManifest(report, data) {
  return {
    title: report.title,
    slug: report.slug,
    discipline: 'piping',
    status: 'demo',
    generatedAt: data.generatedAt,
    generator: 'scripts/generate_demo_kpi_reports.js',
    sourceFiles: [data.source.path],
    formats: ['README.md', `${report.slug}.html`, `${report.slug}-data.json`, 'summary.md', 'exports/*.csv'],
    views: report.views,
    metrics: Object.keys(data.summary || {}),
  };
}

function htmlPage(report, data, body, script) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${report.title}</title>
<style>
:root{--bg:#f5f6f1;--paper:#fffdf8;--ink:#202729;--muted:#66706e;--line:#d8ddd3;--teal:#157c78;--blue:#426fa8;--gold:#c89122;--red:#b44a4a;--green:#4f8b45;--violet:#7260a8;--shadow:0 12px 26px rgba(34,42,39,.10)}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
header{padding:28px 32px 18px;background:#fbfbf6;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:5}h1{font-size:clamp(24px,4vw,42px);line-height:1.05;margin:0 0 10px;letter-spacing:0}.sub{display:flex;gap:16px;flex-wrap:wrap;color:var(--muted);font-size:13px}
main{max-width:1500px;margin:0 auto;padding:22px 32px 44px}.toolbar{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:16px}.seg{display:inline-grid;grid-auto-flow:column;border:1px solid var(--line);border-radius:8px;overflow:hidden;background:var(--paper)}
button{border:0;background:transparent;color:var(--ink);padding:9px 13px;cursor:pointer;font-weight:700}button.active{background:#1f292b;color:white}.search{border:1px solid var(--line);background:#fff;border-radius:8px;padding:10px 12px;min-width:260px}
.cards{display:grid;grid-template-columns:repeat(8,minmax(110px,1fr));gap:12px}.card,.panel{background:var(--paper);border:1px solid var(--line);border-radius:8px;box-shadow:var(--shadow)}.card{padding:14px}.metric{font-size:28px;font-weight:850;line-height:1}.label{margin-top:5px;font-size:12px;color:var(--muted)}
.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:14px;margin-top:14px}.panel{padding:16px;min-height:250px}.span4{grid-column:span 4}.span5{grid-column:span 5}.span6{grid-column:span 6}.span7{grid-column:span 7}.span8{grid-column:span 8}.span12{grid-column:span 12}h2{font-size:16px;margin:0 0 12px}
.bars{display:grid;gap:8px}.barRow{display:grid;grid-template-columns:minmax(92px,150px) 1fr 48px;gap:10px;align-items:center;font-size:12px}.track{height:14px;background:#e9ece4;border-radius:999px;overflow:hidden}.fill{height:100%;background:var(--teal);border-radius:999px}.blue{background:var(--blue)}.gold{background:var(--gold)}.red{background:var(--red)}.green{background:var(--green)}.violet{background:var(--violet)}
.donutWrap{display:grid;grid-template-columns:180px 1fr;gap:18px;align-items:center}.donut{width:180px;height:180px;border-radius:50%;position:relative;background:conic-gradient(var(--teal) 0 100%)}.donut:after{content:"";position:absolute;inset:38px;background:var(--paper);border-radius:50%;border:1px solid var(--line)}.legend{display:grid;gap:8px;font-size:13px}.legendItem{display:flex;align-items:center;gap:8px}.dot{width:11px;height:11px;border-radius:50%;display:inline-block}
.stack{height:34px;border-radius:8px;overflow:hidden;background:#e8ece4;display:flex}.stack span{display:block;height:100%}.stackLegend{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px;color:var(--muted);font-size:12px}
.hist{display:flex;align-items:end;gap:8px;height:190px}.histCol{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0}.histBar{width:100%;border-radius:6px 6px 0 0;background:var(--blue);min-height:2px}.histLabel{font-size:10px;color:var(--muted);text-align:center}
.scatter{position:relative;height:300px;border:1px solid var(--line);border-radius:8px;background:linear-gradient(#eef2eb 1px,transparent 1px),linear-gradient(90deg,#eef2eb 1px,transparent 1px);background-size:10% 20%;overflow:hidden}.pt{position:absolute;width:7px;height:7px;border-radius:50%;background:var(--teal);transform:translate(-50%,50%);opacity:.7}
.qa{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.flag{padding:12px;border-radius:8px;border:1px solid var(--line);background:#fff}.flag b{font-size:24px}.flag.warning{border-color:#e4be67;background:#fff8e8}.flag.ok{border-color:#a8c69b;background:#f1f8ee}
.tableWrap{overflow:auto;max-height:380px;border:1px solid var(--line);border-radius:8px}table{width:100%;border-collapse:collapse;background:white;font-size:12px}th,td{padding:8px 10px;border-bottom:1px solid #e7ebe3;text-align:left;white-space:nowrap}th{position:sticky;top:0;background:#f4f6f1}.note{font-size:12px;color:var(--muted);line-height:1.45}.hidden{display:none!important}
@media(max-width:1150px){.cards{grid-template-columns:repeat(4,1fr)}.span4,.span5,.span6,.span7,.span8{grid-column:span 12}.donutWrap{grid-template-columns:1fr}.qa{grid-template-columns:repeat(2,1fr)}}@media(max-width:680px){header,main{padding-left:16px;padding-right:16px}.cards{grid-template-columns:repeat(2,1fr)}.barRow{grid-template-columns:98px 1fr 38px}.metric{font-size:23px}}
</style>
</head>
<body>
<header><h1>${report.title}</h1><div class="sub"><span>Source: DBOutput_PIPING.txt</span><span id="stamp"></span><span>${report.subtitle}</span></div></header>
<main>${body}</main>
<script id="dashboard-data" type="application/json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
<script>
const data=JSON.parse(document.getElementById('dashboard-data').textContent);const fmt=new Intl.NumberFormat();const safe=n=>Number.isFinite(Number(n))?fmt.format(Number(n)):'-';document.getElementById('stamp').textContent='Generated '+new Date(data.generatedAt).toLocaleString();
function card(label,value){return '<div class="card"><div class="metric">'+(typeof value==='number'?safe(value):String(value??'-'))+'</div><div class="label">'+label+'</div></div>'}
function bars(id,arr,cls=''){const max=Math.max(1,...arr.map(d=>Number(d.value)||0));document.getElementById(id).innerHTML=arr.map(d=>'<div class="barRow"><div title="'+d.label+'">'+d.label+'</div><div class="track"><div class="fill '+cls+'" style="width:'+((Number(d.value)||0)/max*100).toFixed(1)+'%"></div></div><b>'+safe(d.value)+'</b></div>').join('')}
function donut(id,legendId,arr){const total=arr.reduce((a,b)=>a+(Number(b.value)||0),0)||1;let pos=0;const colors=['#157c78','#426fa8','#c89122','#4f8b45','#b44a4a','#7260a8','#8a7b45'];const stops=[];arr.forEach((d,i)=>{const start=pos;pos+=(Number(d.value)||0)/total*100;stops.push(colors[i%colors.length]+' '+start.toFixed(2)+'% '+pos.toFixed(2)+'%')});document.getElementById(id).style.background='conic-gradient('+stops.join(',')+')';document.getElementById(legendId).innerHTML=arr.map((d,i)=>'<div class="legendItem"><span class="dot" style="background:'+colors[i%colors.length]+'"></span><span>'+d.label+'</span><b>'+safe(d.value)+'</b></div>').join('')}
function stack(id,legendId,obj,defs){const total=defs.reduce((a,d)=>a+(Number(obj[d.key])||0),0)||1;document.getElementById(id).innerHTML=defs.map(d=>'<span style="width:'+((Number(obj[d.key])||0)/total*100).toFixed(2)+'%;background:'+d.color+'"></span>').join('');document.getElementById(legendId).innerHTML=defs.map(d=>'<span><i class="dot" style="background:'+d.color+'"></i>'+d.label+': '+safe(obj[d.key])+'</span>').join('')}
function hist(id,arr){const max=Math.max(1,...arr.map(d=>Number(d.value)||0));document.getElementById(id).innerHTML=arr.map(d=>'<div class="histCol"><div class="histBar" style="height:'+Math.max(2,(Number(d.value)||0)/max*170)+'px" title="'+safe(d.value)+'"></div><b>'+safe(d.value)+'</b><div class="histLabel">'+d.label+'</div></div>').join('')}
function scatter(id,pts){document.getElementById(id).innerHTML=pts.map(p=>'<span class="pt" style="left:'+p.x.toFixed(2)+'%;bottom:'+p.y.toFixed(2)+'%" title="'+[p.type,p.name,p.branch].filter(Boolean).join(' | ')+'"></span>').join('')}
function table(id,rows){if(!rows.length){document.getElementById(id).innerHTML='';return}const keys=Object.keys(rows[0]);document.getElementById(id).innerHTML='<thead><tr>'+keys.map(k=>'<th>'+k+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+keys.map(k=>'<td>'+((r[k]===null||r[k]===undefined)?'-':String(r[k]))+'</td>').join('')+'</tr>').join('')+'</tbody>'}
function flags(id,arr){document.getElementById(id).innerHTML=arr.map(f=>'<div class="flag '+(f.tone||'')+'"><b>'+safe(f.value)+'</b><div class="label">'+f.label+'</div></div>').join('')}
function filterTables(){const q=document.getElementById('search')?.value?.toLowerCase()||'';document.querySelectorAll('tbody tr').forEach(tr=>tr.style.display=tr.textContent.toLowerCase().includes(q)?'':'none')}
${script}
document.getElementById('search')?.addEventListener('input',filterTables);
</script>
</body>
</html>`;
}

function baseModel(records, sourceText) {
  const components = records.filter((record) => !['SITE', 'ZONE', 'PIPE', 'BRANCH'].includes(record.type));
  const pipes = records.filter((record) => record.type === 'PIPE');
  const branches = records.filter((record) => record.type === 'BRANCH');
  const globalPoints = records.map(globalPoint).filter(Boolean);
  const routes = routeRows(records);
  const shop = {
    shop: components.filter((record) => boolFrom(record.attrs.SHOP) === true).length,
    field: components.filter((record) => boolFrom(record.attrs.SHOP) === false).length,
    unset: components.filter((record) => boolFrom(record.attrs.SHOP) === null).length,
  };
  const built = {
    built: components.filter((record) => boolFrom(record.attrs.BUIL) === true).length,
    notBuilt: components.filter((record) => boolFrom(record.attrs.BUIL) === false).length,
    unset: components.filter((record) => boolFrom(record.attrs.BUIL) === null).length,
  };
  const qa = qaRows(records, globalPoints);

  return {
    records,
    components,
    pipes,
    branches,
    globalPoints,
    routes,
    shop,
    built,
    qa,
    source: {
      label: 'DBOutput_PIPING.txt',
      path: 'production-reference/DBListing-examples/DBOutput_PIPING.txt',
      lines: sourceText.split(/\r?\n/).length,
    },
  };
}

function overviewReport(model) {
  const data = {
    generatedAt: new Date().toISOString(),
    source: model.source,
    summary: {
      records: model.records.length,
      pipes: model.pipes.length,
      branches: model.branches.length,
      components: model.components.length,
      namedItems: model.records.filter((record) => record.name).length,
      globalPoints: model.globalPoints.length,
      specCount: countBy(model.records.filter((record) => record.attrs.PSPE || record.attrs.SPRE), (record) => refTail(record.attrs.PSPE || record.attrs.SPRE)).length,
      taggedInstruments: model.components.filter((record) => record.type === 'INSTRUMENT' && record.name).length,
      shopPercent: model.components.length ? Math.round((model.shop.shop / model.components.length) * 100) : 0,
    },
    charts: {
      typeMix: topWithOther(countBy(model.records, (record) => record.type), 14),
      componentMix: topWithOther(countBy(model.components, (record) => record.type), 12),
      boreMix: countBy(model.records.filter((record) => numberFrom(record.attrs.BORE || record.attrs.HBOR || record.attrs.TBOR, 'mm') !== null), (record) => `${numberFrom(record.attrs.BORE || record.attrs.HBOR || record.attrs.TBOR, 'mm')} mm`),
      specMix: topWithOther(countBy(model.records.filter((record) => record.attrs.PSPE || record.attrs.SPRE), (record) => refTail(record.attrs.PSPE || record.attrs.SPRE)), 12),
      shop: model.shop,
      built: model.built,
      elevationBands: elevationBands(model.globalPoints),
      scatter: planScatter(model.globalPoints),
      qaFlags: [
        { label: 'Components without POS', value: model.qa.filter((row) => row.issue.includes('missing position')).length, tone: 'warning' },
        { label: 'Unset SHOP flag', value: model.qa.filter((row) => row.issue.includes('unset SHOP')).length, tone: 'info' },
        { label: 'Named instruments', value: model.summary?.taggedInstruments || model.components.filter((record) => record.type === 'INSTRUMENT' && record.name).length, tone: 'ok' },
        { label: 'Global plotted points', value: model.globalPoints.length, tone: 'ok' },
        { label: 'QA rows', value: model.qa.length, tone: 'warning' },
      ],
    },
    tables: {
      routes: model.routes.slice(0, 40),
      namedItems: model.records.filter((record) => record.name).slice(0, 60).map((record) => ({
        type: record.type,
        name: record.name,
        line: record.line,
        pipe: record.pipe || '',
        branch: record.branch || '',
        spec: refTail(record.attrs.PSPE || record.attrs.SPRE),
        bore: numberFrom(record.attrs.BORE || record.attrs.HBOR || record.attrs.TBOR, 'mm'),
      })),
      notes: [
        'Generated from DBOutput_PIPING.txt only.',
        'Plan view filters out local relative coordinates and plots only global-looking W/E + N/S coordinate pairs.',
        'Route length is a straight-line HPOS-to-TPOS branch vector, useful as a lightweight demo indicator only.',
      ],
    },
  };

  return {
    report: {
      slug: 'piping-demo',
      title: 'Piping Demo KPI Dashboard',
      subtitle: 'Interactive Obsidian HTML report',
      description: 'General-purpose piping dashboard with route, component, status, and spatial views.',
      views: ['overview', 'mix', 'routes', 'qa'],
    },
    data,
    body: `<div class="toolbar"><input id="search" class="search" placeholder="Filter tables..."></div>
<section class="cards" id="cards"></section>
<section class="grid">
  <div class="panel span4"><h2>Element Type Mix</h2><div id="typeMix" class="bars"></div></div>
  <div class="panel span4"><h2>Component Donut</h2><div class="donutWrap"><div id="donut" class="donut"></div><div id="donutLegend" class="legend"></div></div></div>
  <div class="panel span4"><h2>Bore Distribution</h2><div id="boreMix" class="bars"></div></div>
  <div class="panel span6"><h2>Spec References</h2><div id="specMix" class="bars"></div></div>
  <div class="panel span6"><h2>Fabrication Status</h2><div id="shopStack" class="stack"></div><div id="shopLegend" class="stackLegend"></div><h2 style="margin-top:24px">Built Status</h2><div id="builtStack" class="stack"></div><div id="builtLegend" class="stackLegend"></div></div>
  <div class="panel span5"><h2>Elevation Bands</h2><div id="elevation" class="hist"></div></div>
  <div class="panel span7"><h2>Plan Scatter</h2><div id="scatter" class="scatter"></div><p class="note">Only global-looking coordinate pairs are plotted.</p></div>
  <div class="panel span12"><h2>QA Signals</h2><div id="qaFlags" class="qa"></div></div>
  <div class="panel span12"><h2>Route Workload</h2><div class="tableWrap"><table id="routeTable"></table></div></div>
  <div class="panel span12"><h2>Named Items</h2><div class="tableWrap"><table id="itemTable"></table></div></div>
  <div class="panel span12"><h2>Notes</h2><div id="notes" class="note"></div></div>
</section>`,
    script: `document.getElementById('cards').innerHTML=[card('Records',data.summary.records),card('Pipes',data.summary.pipes),card('Branches',data.summary.branches),card('Components',data.summary.components),card('Named items',data.summary.namedItems),card('Global points',data.summary.globalPoints),card('Spec refs',data.summary.specCount),card('Shop %',data.summary.shopPercent+'%')].join('');
bars('typeMix',data.charts.typeMix,'blue');bars('boreMix',data.charts.boreMix,'gold');bars('specMix',data.charts.specMix,'green');donut('donut','donutLegend',data.charts.componentMix.slice(0,7));
stack('shopStack','shopLegend',data.charts.shop,[{key:'shop',label:'Shop',color:'#157c78'},{key:'field',label:'Field',color:'#426fa8'},{key:'unset',label:'Unset',color:'#c89122'}]);
stack('builtStack','builtLegend',data.charts.built,[{key:'built',label:'Built',color:'#4f8b45'},{key:'notBuilt',label:'Not built',color:'#b44a4a'},{key:'unset',label:'Unset',color:'#c89122'}]);
hist('elevation',data.charts.elevationBands);scatter('scatter',data.charts.scatter);flags('qaFlags',data.charts.qaFlags);table('routeTable',data.tables.routes);table('itemTable',data.tables.namedItems);
document.getElementById('notes').innerHTML=data.tables.notes.map(n=>'<p>'+n+'</p>').join('')+'<p>Source lines: '+safe(data.source.lines)+'</p>';`,
    exports: {
      'metrics.csv': metricRows(data.summary),
      'route-workload.csv': data.tables.routes,
      'named-items.csv': data.tables.namedItems,
      'qa-signals.csv': data.charts.qaFlags,
    },
  };
}

function healthReport(model) {
  const components = model.components;
  const missingPosition = model.qa.filter((row) => row.issue.includes('missing position'));
  const unsetShop = model.qa.filter((row) => row.issue.includes('unset SHOP'));
  const missingSpec = model.qa.filter((row) => row.issue.includes('missing spec/reference'));
  const byIssue = countBy(model.qa, (row) => row.issue.split('; ')[0]);
  const byType = topWithOther(countBy(model.qa, (row) => row.type), 12);
  const branchOutliers = model.routes.filter((route) => route.components >= 18).slice(0, 25);
  const data = {
    generatedAt: new Date().toISOString(),
    source: model.source,
    summary: {
      checkedComponents: components.length,
      qaRows: model.qa.length,
      missingPosition: missingPosition.length,
      unsetShop: unsetShop.length,
      missingSpec: missingSpec.length,
      heavyBranches: branchOutliers.length,
      globalPoints: model.globalPoints.length,
    },
    charts: {
      byIssue,
      byType,
      qaFlags: [
        { label: 'QA rows', value: model.qa.length, tone: 'warning' },
        { label: 'Missing POS', value: missingPosition.length, tone: 'warning' },
        { label: 'Unset SHOP', value: unsetShop.length, tone: 'info' },
        { label: 'Missing spec/ref', value: missingSpec.length, tone: 'warning' },
        { label: 'Heavy branches', value: branchOutliers.length, tone: 'warning' },
      ],
    },
    tables: {
      anomalies: model.qa.slice(0, 120),
      branchOutliers,
      notes: [
        'This report highlights data quality signals that are useful before MTO, construction planning, or export.',
        'Heavy branches are branches with at least 18 parsed child components in this demo rule.',
      ],
    },
  };
  return {
    report: {
      slug: 'model-health-demo',
      title: 'Model Health Demo Dashboard',
      subtitle: 'QA and anomaly scan',
      description: 'Piping model health report focused on missing positions, unset flags, missing references, and workload outliers.',
      views: ['qa', 'anomalies', 'outliers'],
    },
    data,
    body: `<div class="toolbar"><input id="search" class="search" placeholder="Filter anomaly tables..."></div>
<section class="cards" id="cards"></section>
<section class="grid">
  <div class="panel span12"><h2>QA Signals</h2><div id="qaFlags" class="qa"></div></div>
  <div class="panel span6"><h2>Issue Mix</h2><div id="issueMix" class="bars"></div></div>
  <div class="panel span6"><h2>Issue Types</h2><div id="typeMix" class="bars"></div></div>
  <div class="panel span12"><h2>Anomaly Register</h2><div class="tableWrap"><table id="anomalyTable"></table></div></div>
  <div class="panel span12"><h2>Heavy Branches</h2><div class="tableWrap"><table id="branchTable"></table></div></div>
  <div class="panel span12"><h2>Notes</h2><div id="notes" class="note"></div></div>
</section>`,
    script: `document.getElementById('cards').innerHTML=[card('Checked components',data.summary.checkedComponents),card('QA rows',data.summary.qaRows),card('Missing POS',data.summary.missingPosition),card('Unset SHOP',data.summary.unsetShop),card('Missing spec/ref',data.summary.missingSpec),card('Heavy branches',data.summary.heavyBranches),card('Global points',data.summary.globalPoints)].join('');
flags('qaFlags',data.charts.qaFlags);bars('issueMix',data.charts.byIssue,'red');bars('typeMix',data.charts.byType,'gold');table('anomalyTable',data.tables.anomalies);table('branchTable',data.tables.branchOutliers);
document.getElementById('notes').innerHTML=data.tables.notes.map(n=>'<p>'+n+'</p>').join('');`,
    exports: {
      'metrics.csv': metricRows(data.summary),
      'anomalies.csv': data.tables.anomalies,
      'heavy-branches.csv': data.tables.branchOutliers,
    },
  };
}

function readinessReport(model) {
  const components = model.components;
  const fabrication = [
    { label: 'Shop', value: model.shop.shop },
    { label: 'Field', value: model.shop.field },
    { label: 'Unset', value: model.shop.unset },
  ];
  const spoolItems = model.records.filter((record) => ['PSPOOL', 'PPLIST', 'PSLIST'].includes(record.type));
  const welds = model.components.filter((record) => record.type === 'WELD').length;
  const flanges = model.components.filter((record) => record.type === 'FLANGE').length;
  const gaskets = model.components.filter((record) => record.type === 'GASKET').length;
  const valves = model.components.filter((record) => record.type === 'VALVE').length;
  const instruments = model.components.filter((record) => record.type === 'INSTRUMENT').length;
  const readinessRows = model.routes.slice(0, 80).map((route) => ({
    ...route,
    shopRatio: route.components ? Math.round((route.shopTrue / route.components) * 100) : 0,
    fieldRatio: route.components ? Math.round((route.shopFalse / route.components) * 100) : 0,
  }));
  const data = {
    generatedAt: new Date().toISOString(),
    source: model.source,
    summary: {
      components: components.length,
      shopComponents: model.shop.shop,
      fieldComponents: model.shop.field,
      unsetShop: model.shop.unset,
      spoolRecords: spoolItems.length,
      welds,
      flanges,
      gaskets,
      valves,
      instruments,
    },
    charts: {
      fabrication,
      built: model.built,
      componentMix: topWithOther(countBy(components, (record) => record.type), 10),
      boreMix: countBy(model.records.filter((record) => numberFrom(record.attrs.BORE || record.attrs.HBOR || record.attrs.TBOR, 'mm') !== null), (record) => `${numberFrom(record.attrs.BORE || record.attrs.HBOR || record.attrs.TBOR, 'mm')} mm`),
      qaFlags: [
        { label: 'Shop components', value: model.shop.shop, tone: 'ok' },
        { label: 'Field components', value: model.shop.field, tone: 'info' },
        { label: 'Unset SHOP', value: model.shop.unset, tone: 'warning' },
        { label: 'Spool records', value: spoolItems.length, tone: 'ok' },
        { label: 'Welds', value: welds, tone: 'info' },
      ],
    },
    tables: {
      readinessRows,
      mtoSignals: [
        { signal: 'Welds', count: welds, comment: 'Potential fabrication and inspection workload.' },
        { signal: 'Flanges', count: flanges, comment: 'Joint and gasket coordination indicator.' },
        { signal: 'Gaskets', count: gaskets, comment: 'Consumable/material readiness indicator.' },
        { signal: 'Valves', count: valves, comment: 'Procurement and tagging focus.' },
        { signal: 'Instruments', count: instruments, comment: 'Hook-up and tag coordination focus.' },
      ],
      notes: [
        'This report is shaped for construction/MTO conversations rather than geometric validation.',
        'Spool records are counted from PSPOOL, PPLIST, and PSLIST entries in the DB listing.',
      ],
    },
  };
  return {
    report: {
      slug: 'mto-readiness-demo',
      title: 'MTO Readiness Demo Dashboard',
      subtitle: 'Construction and material readiness signals',
      description: 'Piping readiness dashboard focused on shop/field split, spool records, joints, valves, and material-facing signals.',
      views: ['mto', 'fabrication', 'routes'],
    },
    data,
    body: `<div class="toolbar"><input id="search" class="search" placeholder="Filter readiness tables..."></div>
<section class="cards" id="cards"></section>
<section class="grid">
  <div class="panel span12"><h2>Readiness Signals</h2><div id="qaFlags" class="qa"></div></div>
  <div class="panel span6"><h2>Fabrication Split</h2><div id="shopStack" class="stack"></div><div id="shopLegend" class="stackLegend"></div></div>
  <div class="panel span6"><h2>Built Status</h2><div id="builtStack" class="stack"></div><div id="builtLegend" class="stackLegend"></div></div>
  <div class="panel span6"><h2>Component Mix</h2><div id="componentMix" class="bars"></div></div>
  <div class="panel span6"><h2>Bore Mix</h2><div id="boreMix" class="bars"></div></div>
  <div class="panel span12"><h2>MTO Signals</h2><div class="tableWrap"><table id="mtoTable"></table></div></div>
  <div class="panel span12"><h2>Route Readiness</h2><div class="tableWrap"><table id="routeTable"></table></div></div>
  <div class="panel span12"><h2>Notes</h2><div id="notes" class="note"></div></div>
</section>`,
    script: `document.getElementById('cards').innerHTML=[card('Components',data.summary.components),card('Shop',data.summary.shopComponents),card('Field',data.summary.fieldComponents),card('Unset SHOP',data.summary.unsetShop),card('Spool records',data.summary.spoolRecords),card('Welds',data.summary.welds),card('Flanges',data.summary.flanges),card('Gaskets',data.summary.gaskets)].join('');
flags('qaFlags',data.charts.qaFlags);stack('shopStack','shopLegend',{shop:data.summary.shopComponents,field:data.summary.fieldComponents,unset:data.summary.unsetShop},[{key:'shop',label:'Shop',color:'#157c78'},{key:'field',label:'Field',color:'#426fa8'},{key:'unset',label:'Unset',color:'#c89122'}]);
stack('builtStack','builtLegend',data.charts.built,[{key:'built',label:'Built',color:'#4f8b45'},{key:'notBuilt',label:'Not built',color:'#b44a4a'},{key:'unset',label:'Unset',color:'#c89122'}]);
bars('componentMix',data.charts.componentMix,'blue');bars('boreMix',data.charts.boreMix,'gold');table('mtoTable',data.tables.mtoSignals);table('routeTable',data.tables.readinessRows);document.getElementById('notes').innerHTML=data.tables.notes.map(n=>'<p>'+n+'</p>').join('');`,
    exports: {
      'metrics.csv': metricRows(data.summary),
      'mto-signals.csv': data.tables.mtoSignals,
      'route-readiness.csv': data.tables.readinessRows,
    },
  };
}

function writePackage(pkg) {
  const { report, data, body, script, exports } = pkg;
  const dir = path.join(reportsRoot, report.slug);
  fs.mkdirSync(path.join(dir, 'exports'), { recursive: true });

  fs.writeFileSync(path.join(dir, 'README.md'), makeReadme(report));
  fs.writeFileSync(path.join(dir, 'report.json'), `${JSON.stringify(makeReportManifest(report, data), null, 2)}\n`);
  fs.writeFileSync(path.join(dir, `${report.slug}.html`), htmlPage(report, data, body, script));
  fs.writeFileSync(path.join(dir, `${report.slug}-data.json`), `${JSON.stringify(data, null, 2)}\n`);
  fs.writeFileSync(path.join(dir, 'summary.md'), makeSummaryMarkdown(report, data));

  for (const [file, rows] of Object.entries(exports)) {
    fs.writeFileSync(path.join(dir, 'exports', file), toCsv(rows));
  }
}

function writeIndex(packages) {
  const rows = packages.map(({ report, data }) => ({
    title: report.title,
    slug: report.slug,
    status: 'demo',
    discipline: 'piping',
    generatedAt: data.generatedAt,
    source: data.source.label,
  }));
  fs.writeFileSync(path.join(reportsRoot, 'report-index.json'), `${JSON.stringify(rows, null, 2)}\n`);
  fs.writeFileSync(path.join(reportsRoot, 'report-index.csv'), toCsv(rows));
}

function main() {
  const sourceText = readText(inputPath);
  const records = parseRecords(sourceText);
  const model = baseModel(records, sourceText);
  const packages = [overviewReport(model), healthReport(model), readinessReport(model)];

  for (const pkg of packages) writePackage(pkg);
  writeIndex(packages);

  console.log(JSON.stringify({
    generated: packages.map((pkg) => pkg.report.slug),
    records: records.length,
    source: path.relative(root, inputPath),
  }, null, 2));
}

main();
