#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../../../../..');

function usage() {
  console.error('Usage: node user-support/kpi-reports/scripts/report-generators/piping/compare_dboutput_piping.js <before-dboutput.txt> <after-dboutput.txt> <output-dir>');
  process.exit(2);
}

const [beforeArg, afterArg, outputArg] = process.argv.slice(2);
if (!beforeArg || !afterArg || !outputArg) usage();

const beforePath = path.resolve(beforeArg);
const afterPath = path.resolve(afterArg);
const outputDir = path.resolve(outputArg);
const slug = path.basename(outputDir);

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
}

function parseRecords(text) {
  const lines = text.split(/\r?\n/);
  const records = [];
  let current = null;
  let pipe = '';
  let branch = '';

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    const newMatch = line.match(/^NEW\s+([A-Z0-9_]+)(?:\s+(\/\S+))?/);
    if (newMatch) {
      if (current) records.push(current);
      current = {
        type: newMatch[1],
        name: newMatch[2] || `${newMatch[1]}@${i + 1}`,
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
    current.attrs[key] = attrMatch[2];
  }

  if (current) records.push(current);
  return records;
}

function signature(record) {
  return [
    record.type,
    record.name,
    record.attrs.PSPE || '',
    record.attrs.SPRE || '',
    record.attrs.BORE || '',
    record.attrs.HBOR || '',
    record.attrs.TBOR || '',
    record.attrs.SHOP || '',
    record.attrs.BUIL || '',
  ].join('|');
}

function byName(records) {
  const map = new Map();
  for (const record of records) {
    if (record.name) map.set(`${record.type}:${record.name}`, record);
  }
  return map;
}

function countBy(records, getKey) {
  const map = new Map();
  for (const record of records) {
    const key = getKey(record) || 'unset';
    map.set(key, (map.get(key) || 0) + 1);
  }
  return [...map].map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || String(a.label).localeCompare(String(b.label)));
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

const beforeText = readText(beforePath);
const afterText = readText(afterPath);
const beforeRecords = parseRecords(beforeText);
const afterRecords = parseRecords(afterText);
const beforeMap = byName(beforeRecords);
const afterMap = byName(afterRecords);
const added = [];
const removed = [];
const changed = [];

for (const [key, afterRecord] of afterMap.entries()) {
  const beforeRecord = beforeMap.get(key);
  if (!beforeRecord) {
    added.push(afterRecord);
  } else if (signature(beforeRecord) !== signature(afterRecord)) {
    changed.push({
      key,
      type: afterRecord.type,
      name: afterRecord.name,
      beforeLine: beforeRecord.line,
      afterLine: afterRecord.line,
      beforeSignature: signature(beforeRecord),
      afterSignature: signature(afterRecord),
    });
  }
}

for (const [key, beforeRecord] of beforeMap.entries()) {
  if (!afterMap.has(key)) removed.push(beforeRecord);
}

const summary = {
  beforeRecords: beforeRecords.length,
  afterRecords: afterRecords.length,
  deltaRecords: afterRecords.length - beforeRecords.length,
  addedNamedItems: added.length,
  removedNamedItems: removed.length,
  changedNamedItems: changed.length,
};

const data = {
  generatedAt: new Date().toISOString(),
  source: {
    before: path.relative(root, beforePath),
    after: path.relative(root, afterPath),
  },
  summary,
  charts: {
    addedByType: countBy(added, (record) => record.type),
    removedByType: countBy(removed, (record) => record.type),
    changedByType: countBy(changed, (record) => record.type),
  },
  tables: {
    added: added.slice(0, 200).map((record) => ({ type: record.type, name: record.name, line: record.line, pipe: record.pipe, branch: record.branch })),
    removed: removed.slice(0, 200).map((record) => ({ type: record.type, name: record.name, line: record.line, pipe: record.pipe, branch: record.branch })),
    changed: changed.slice(0, 200),
  },
};

function barsScript(id, arrName, colorClass) {
  return `bars('${id}', data.charts.${arrName}, '${colorClass}');`;
}

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Piping Diff Report</title>
<style>
body{margin:0;background:#f5f6f1;color:#202729;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}header{padding:28px 32px;background:#fbfbf6;border-bottom:1px solid #d8ddd3}main{max-width:1400px;margin:0 auto;padding:22px 32px 44px}h1{margin:0 0 8px;font-size:clamp(24px,4vw,40px)}.sub{color:#66706e;font-size:13px}.cards{display:grid;grid-template-columns:repeat(6,1fr);gap:12px}.card,.panel{background:#fffdf8;border:1px solid #d8ddd3;border-radius:8px;box-shadow:0 12px 26px rgba(34,42,39,.10)}.card{padding:14px}.metric{font-size:28px;font-weight:850}.label{font-size:12px;color:#66706e}.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:14px;margin-top:14px}.panel{padding:16px}.span4{grid-column:span 4}.span12{grid-column:span 12}.bars{display:grid;gap:8px}.barRow{display:grid;grid-template-columns:120px 1fr 44px;gap:10px;align-items:center;font-size:12px}.track{height:14px;background:#e9ece4;border-radius:999px;overflow:hidden}.fill{height:100%;border-radius:999px;background:#157c78}.red{background:#b44a4a}.gold{background:#c89122}.tableWrap{overflow:auto;max-height:360px;border:1px solid #d8ddd3;border-radius:8px}table{width:100%;border-collapse:collapse;background:white;font-size:12px}th,td{padding:8px 10px;border-bottom:1px solid #e7ebe3;text-align:left;white-space:nowrap}th{position:sticky;top:0;background:#f4f6f1}@media(max-width:900px){.cards{grid-template-columns:repeat(2,1fr)}.span4{grid-column:span 12}}
</style>
</head>
<body>
<header><h1>Piping Before/After Diff Report</h1><div class="sub">Generated from two DB output listings</div></header>
<main>
<section class="cards" id="cards"></section>
<section class="grid">
<div class="panel span4"><h2>Added By Type</h2><div id="addedByType" class="bars"></div></div>
<div class="panel span4"><h2>Removed By Type</h2><div id="removedByType" class="bars"></div></div>
<div class="panel span4"><h2>Changed By Type</h2><div id="changedByType" class="bars"></div></div>
<div class="panel span12"><h2>Changed Named Items</h2><div class="tableWrap"><table id="changedTable"></table></div></div>
<div class="panel span12"><h2>Added Named Items</h2><div class="tableWrap"><table id="addedTable"></table></div></div>
<div class="panel span12"><h2>Removed Named Items</h2><div class="tableWrap"><table id="removedTable"></table></div></div>
</section>
</main>
<script id="dashboard-data" type="application/json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
<script>
const data=JSON.parse(document.getElementById('dashboard-data').textContent);const fmt=new Intl.NumberFormat();const safe=n=>Number.isFinite(Number(n))?fmt.format(Number(n)):'-';
function card(label,value){return '<div class="card"><div class="metric">'+safe(value)+'</div><div class="label">'+label+'</div></div>'}
function bars(id,arr,cls=''){const max=Math.max(1,...arr.map(d=>Number(d.value)||0));document.getElementById(id).innerHTML=arr.map(d=>'<div class="barRow"><div>'+d.label+'</div><div class="track"><div class="fill '+cls+'" style="width:'+((Number(d.value)||0)/max*100).toFixed(1)+'%"></div></div><b>'+safe(d.value)+'</b></div>').join('')}
function table(id,rows){if(!rows.length){document.getElementById(id).innerHTML='';return}const keys=Object.keys(rows[0]);document.getElementById(id).innerHTML='<thead><tr>'+keys.map(k=>'<th>'+k+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+keys.map(k=>'<td>'+((r[k]===null||r[k]===undefined)?'-':String(r[k]))+'</td>').join('')+'</tr>').join('')+'</tbody>'}
document.getElementById('cards').innerHTML=[card('Before records',data.summary.beforeRecords),card('After records',data.summary.afterRecords),card('Delta',data.summary.deltaRecords),card('Added',data.summary.addedNamedItems),card('Removed',data.summary.removedNamedItems),card('Changed',data.summary.changedNamedItems)].join('');
${barsScript('addedByType', 'addedByType', '')}${barsScript('removedByType', 'removedByType', 'red')}${barsScript('changedByType', 'changedByType', 'gold')}
table('changedTable',data.tables.changed);table('addedTable',data.tables.added);table('removedTable',data.tables.removed);
</script>
</body>
</html>`;

fs.mkdirSync(path.join(outputDir, 'exports'), { recursive: true });
fs.writeFileSync(path.join(outputDir, 'README.md'), `# Piping Diff Report\n\n[Open interactive report](${slug}.html)\n\n<iframe src="${slug}.html" width="100%" height="900"></iframe>\n\nGenerated from:\n- Before: \`${path.relative(root, beforePath)}\`\n- After: \`${path.relative(root, afterPath)}\`\n`);
fs.writeFileSync(path.join(outputDir, 'report.json'), `${JSON.stringify({
  title: 'Piping Diff Report',
  slug,
  discipline: 'piping',
  status: 'generated',
  generatedAt: data.generatedAt,
  generator: 'user-support/kpi-reports/scripts/report-generators/piping/compare_dboutput_piping.js',
  sourceFiles: [path.relative(root, beforePath), path.relative(root, afterPath)],
  formats: ['README.md', `${slug}.html`, `${slug}-data.json`, 'summary.md', 'exports/*.csv'],
  views: ['diff', 'added', 'removed', 'changed'],
  metrics: Object.keys(summary),
}, null, 2)}\n`);
fs.writeFileSync(path.join(outputDir, `${slug}.html`), html);
fs.writeFileSync(path.join(outputDir, `${slug}-data.json`), `${JSON.stringify(data, null, 2)}\n`);
fs.writeFileSync(path.join(outputDir, 'summary.md'), `# Piping Diff Report Summary\n\n- Before records: ${summary.beforeRecords}\n- After records: ${summary.afterRecords}\n- Delta records: ${summary.deltaRecords}\n- Added named items: ${summary.addedNamedItems}\n- Removed named items: ${summary.removedNamedItems}\n- Changed named items: ${summary.changedNamedItems}\n`);
fs.writeFileSync(path.join(outputDir, 'exports', 'metrics.csv'), toCsv(metricRows(summary)));
fs.writeFileSync(path.join(outputDir, 'exports', 'added.csv'), toCsv(data.tables.added));
fs.writeFileSync(path.join(outputDir, 'exports', 'removed.csv'), toCsv(data.tables.removed));
fs.writeFileSync(path.join(outputDir, 'exports', 'changed.csv'), toCsv(data.tables.changed));

console.log(JSON.stringify({ outputDir: path.relative(root, outputDir), summary }, null, 2));
