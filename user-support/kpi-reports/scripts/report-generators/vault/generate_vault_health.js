#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../../../../..');
const slug = 'vault-health-demo';
const outDir = path.join(root, 'user-support/kpi-reports', slug);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir)) {
    if (entry === '.git' || entry === '.DS_Store') continue;
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function countFiles(dir, predicate = () => true) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return 0;
  return walk(full).filter(predicate).length;
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
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

const reportIndex = fs.existsSync(path.join(root, 'user-support/kpi-reports/report-index.json'))
  ? readJson('user-support/kpi-reports/report-index.json')
  : [];
const reportDirs = fs.readdirSync(path.join(root, 'user-support/kpi-reports'))
  .filter((entry) => {
    const dir = path.join(root, 'user-support/kpi-reports', entry);
    return fs.statSync(dir).isDirectory() && fs.existsSync(path.join(dir, 'report.json'));
  });
const reportPackages = reportDirs.map((entry) => {
  const dir = path.join(root, 'user-support/kpi-reports', entry);
  return {
    slug: entry,
    hasReadme: fs.existsSync(path.join(dir, 'README.md')),
    hasManifest: fs.existsSync(path.join(dir, 'report.json')),
    hasHtml: fs.existsSync(path.join(dir, `${entry}.html`)),
    hasData: fs.existsSync(path.join(dir, `${entry}-data.json`)),
    hasSummary: fs.existsSync(path.join(dir, 'summary.md')),
    csvExports: fs.existsSync(path.join(dir, 'exports'))
      ? fs.readdirSync(path.join(dir, 'exports')).filter((file) => file.endsWith('.csv')).length
      : 0,
  };
});

const summary = {
  markdownFiles: countFiles('.', (file) => file.endsWith('.md')),
  objectTypeReferences: countFiles('pml-coding-assistant/references/object-types', (file) => file.endsWith('.md')),
  kpiReferenceFiles: countFiles('user-support/kpi-reports/references', (file) => file.endsWith('.md')),
  pmlPatternFiles: countFiles('pml-coding-assistant/examples/pml-patterns', (file) => ['.pmlfnc', '.pmlfrm', '.pmlobj', '.mac'].includes(path.extname(file))),
  kpiReportPackages: reportPackages.length,
  promptLibraryEntries: countFiles('user-support/prompt-library', (file) => file.endsWith('.md')) - 1,
  projectKnowledgePages: countFiles('user-support/project-knowledge', (file) => file.endsWith('.md')),
  drawingToE3DPages: countFiles('drawing-to-e3d', (file) => file.endsWith('.md')),
  reportIndexEntries: reportIndex.length,
};

const packageIssues = reportPackages.flatMap((pkg) => {
  const issues = [];
  if (!pkg.hasReadme) issues.push('missing README.md');
  if (!pkg.hasManifest) issues.push('missing report.json');
  if (!pkg.hasHtml) issues.push('missing HTML dashboard');
  if (!pkg.hasData) issues.push('missing data JSON');
  if (!pkg.hasSummary) issues.push('missing summary.md');
  if (!pkg.csvExports) issues.push('no CSV exports');
  return issues.map((issue) => ({ slug: pkg.slug, issue }));
});

const healthScore = Math.max(0, 100 - packageIssues.length * 8 - (summary.reportIndexEntries !== summary.kpiReportPackages ? 10 : 0));
const data = {
  generatedAt: new Date().toISOString(),
  source: { path: '.', label: 'Obsidian vault' },
  summary: { ...summary, healthScore },
  charts: {
    fileFamilies: [
      { label: 'Markdown', value: summary.markdownFiles },
      { label: 'Object refs', value: summary.objectTypeReferences },
      { label: 'PML patterns', value: summary.pmlPatternFiles },
      { label: 'KPI packages', value: summary.kpiReportPackages },
      { label: 'Prompts', value: summary.promptLibraryEntries },
      { label: 'Project pages', value: summary.projectKnowledgePages },
      { label: 'Drawing-to-E3D', value: summary.drawingToE3DPages },
    ],
    packageCompleteness: reportPackages.map((pkg) => ({
      label: pkg.slug,
      value: ['hasReadme', 'hasManifest', 'hasHtml', 'hasData', 'hasSummary'].filter((key) => pkg[key]).length + Math.min(1, pkg.csvExports),
    })),
  },
  tables: {
    reportPackages,
    packageIssues,
    notes: [
      'Vault health reports inspect the repository structure, not AVEVA model data.',
      'Structural validation remains the source of truth for pass/fail checks.',
    ],
  },
};

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Vault Health Demo Dashboard</title><style>
body{margin:0;background:#f5f6f1;color:#202729;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}header{padding:28px 32px;background:#fbfbf6;border-bottom:1px solid #d8ddd3}main{max-width:1400px;margin:0 auto;padding:22px 32px 44px}h1{margin:0 0 8px;font-size:clamp(24px,4vw,40px)}.sub{color:#66706e;font-size:13px}.cards{display:grid;grid-template-columns:repeat(8,1fr);gap:12px}.card,.panel{background:#fffdf8;border:1px solid #d8ddd3;border-radius:8px;box-shadow:0 12px 26px rgba(34,42,39,.10)}.card{padding:14px}.metric{font-size:28px;font-weight:850}.label{font-size:12px;color:#66706e}.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:14px;margin-top:14px}.panel{padding:16px}.span6{grid-column:span 6}.span12{grid-column:span 12}.bars{display:grid;gap:8px}.barRow{display:grid;grid-template-columns:150px 1fr 48px;gap:10px;align-items:center;font-size:12px}.track{height:14px;background:#e9ece4;border-radius:999px;overflow:hidden}.fill{height:100%;border-radius:999px;background:#157c78}.gold{background:#c89122}.tableWrap{overflow:auto;max-height:360px;border:1px solid #d8ddd3;border-radius:8px}table{width:100%;border-collapse:collapse;background:white;font-size:12px}th,td{padding:8px 10px;border-bottom:1px solid #e7ebe3;text-align:left;white-space:nowrap}th{position:sticky;top:0;background:#f4f6f1}@media(max-width:900px){.cards{grid-template-columns:repeat(2,1fr)}.span6{grid-column:span 12}}
</style></head><body><header><h1>Vault Health Demo Dashboard</h1><div class="sub">Repository structure, report packages, and knowledge clusters</div></header><main><section class="cards" id="cards"></section><section class="grid"><div class="panel span6"><h2>File Families</h2><div id="fileFamilies" class="bars"></div></div><div class="panel span6"><h2>Package Completeness</h2><div id="packageCompleteness" class="bars"></div></div><div class="panel span12"><h2>Report Packages</h2><div class="tableWrap"><table id="packages"></table></div></div><div class="panel span12"><h2>Package Issues</h2><div class="tableWrap"><table id="issues"></table></div></div></section></main><script id="dashboard-data" type="application/json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script><script>
const data=JSON.parse(document.getElementById('dashboard-data').textContent);const fmt=new Intl.NumberFormat();const safe=n=>Number.isFinite(Number(n))?fmt.format(Number(n)):'-';function card(l,v){return '<div class="card"><div class="metric">'+safe(v)+'</div><div class="label">'+l+'</div></div>'}function bars(id,arr,cls=''){const max=Math.max(1,...arr.map(d=>Number(d.value)||0));document.getElementById(id).innerHTML=arr.map(d=>'<div class="barRow"><div>'+d.label+'</div><div class="track"><div class="fill '+cls+'" style="width:'+((Number(d.value)||0)/max*100).toFixed(1)+'%"></div></div><b>'+safe(d.value)+'</b></div>').join('')}function table(id,rows){if(!rows.length){document.getElementById(id).innerHTML='<tbody><tr><td>No issues</td></tr></tbody>';return}const keys=Object.keys(rows[0]);document.getElementById(id).innerHTML='<thead><tr>'+keys.map(k=>'<th>'+k+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+keys.map(k=>'<td>'+String(r[k]??'-')+'</td>').join('')+'</tr>').join('')+'</tbody>'}
document.getElementById('cards').innerHTML=[card('Health score',data.summary.healthScore),card('Markdown',data.summary.markdownFiles),card('Object refs',data.summary.objectTypeReferences),card('PML patterns',data.summary.pmlPatternFiles),card('KPI packages',data.summary.kpiReportPackages),card('Prompts',data.summary.promptLibraryEntries),card('Project pages',data.summary.projectKnowledgePages),card('Index entries',data.summary.reportIndexEntries)].join('');bars('fileFamilies',data.charts.fileFamilies);bars('packageCompleteness',data.charts.packageCompleteness,'gold');table('packages',data.tables.reportPackages);table('issues',data.tables.packageIssues);
</script></body></html>`;

fs.mkdirSync(path.join(outDir, 'exports'), { recursive: true });
fs.writeFileSync(path.join(outDir, 'README.md'), `# Vault Health Demo Dashboard\n\n[Open interactive report](${slug}.html)\n\n<iframe src="${slug}.html" width="100%" height="900"></iframe>\n\nThis report inspects the vault structure and KPI report package completeness.\n`);
fs.writeFileSync(path.join(outDir, 'report.json'), `${JSON.stringify({
  title: 'Vault Health Demo Dashboard',
  slug,
  discipline: 'vault',
  status: 'demo',
  generatedAt: data.generatedAt,
  generator: 'user-support/kpi-reports/scripts/report-generators/vault/generate_vault_health.js',
  sourceFiles: ['.'],
  formats: ['README.md', `${slug}.html`, `${slug}-data.json`, 'summary.md', 'exports/*.csv'],
  views: ['vault-health', 'package-completeness'],
  metrics: Object.keys(data.summary),
}, null, 2)}\n`);
fs.writeFileSync(path.join(outDir, `${slug}.html`), html);
fs.writeFileSync(path.join(outDir, `${slug}-data.json`), `${JSON.stringify(data, null, 2)}\n`);
fs.writeFileSync(path.join(outDir, 'summary.md'), `# Vault Health Demo Dashboard Summary\n\n- Health score: ${healthScore}\n- Markdown files: ${summary.markdownFiles}\n- KPI report packages: ${summary.kpiReportPackages}\n- Prompt library entries: ${summary.promptLibraryEntries}\n- Project knowledge pages: ${summary.projectKnowledgePages}\n`);
fs.writeFileSync(path.join(outDir, 'exports', 'metrics.csv'), toCsv(Object.entries(data.summary).map(([metric, value]) => ({ metric, value }))));
fs.writeFileSync(path.join(outDir, 'exports', 'report-packages.csv'), toCsv(reportPackages));
fs.writeFileSync(path.join(outDir, 'exports', 'package-issues.csv'), toCsv(packageIssues));

console.log(JSON.stringify({ outputDir: path.relative(root, outDir), healthScore }, null, 2));
