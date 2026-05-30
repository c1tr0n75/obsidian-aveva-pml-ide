#!/usr/bin/env python3
"""Validates the AVEVA PML Coding Claude Skill structure."""
from pathlib import Path
import sys
import re
import json

root = Path(__file__).resolve().parents[2]

# --- Required files ---
required = [
    'SKILL.md',
    'README.md',
    'manifest.json',
    'log.md',
    'pml-coding-assistant/README.md',
    'pml-coding-assistant/references/language/pml2-language-reference.md',
    'pml-coding-assistant/references/ui/forms-ui-reference.md',
    'pml-coding-assistant/references/language/methods-available-to-all-objects.md',
    'pml-coding-assistant/references/object-type-index.md',
    'pml-coding-assistant/references/database/database-data-model-index.md',
    'pml-coding-assistant/references/database/aveva_ue_design_database_data_model.md',
    'pml-coding-assistant/references/database/aveva_introduction_to_attributes.md',
    'pml-coding-assistant/references/database/aveva_pseudo_attributes.md',
    'drawing-to-e3d/README.md',
    'drawing-to-e3d/input-interpretation/README.md',
    'drawing-to-e3d/model-intent/README.md',
    'drawing-to-e3d/generation-recipes/README.md',
    'drawing-to-e3d/validation/README.md',
    'user-support/README.md',
    'user-support/kpi-reports/README.md',
    'user-support/kpi-reports/report-index.json',
    'user-support/kpi-reports/report-index.csv',
    'user-support/kpi-reports/references/README.md',
    'user-support/kpi-reports/references/kpi-definitions.md',
    'user-support/project-knowledge/README.md',
    'user-support/project-knowledge/naming-rules.md',
    'user-support/project-knowledge/piping-good-practices.md',
    'user-support/project-knowledge/mto-rules.md',
    'user-support/project-knowledge/dashboard-kpi-standards.md',
    'user-support/project-knowledge/epc-deliverables.md',
    'user-support/project-knowledge/project-decisions.md',
    'user-support/prompt-library/README.md',
    'user-support/kpi-reports/scripts/generate_demo_kpi_reports.js',
    'user-support/kpi-reports/scripts/report-generators/README.md',
    'user-support/kpi-reports/scripts/report-generators/piping/README.md',
    'user-support/kpi-reports/scripts/report-generators/piping/compare_dboutput_piping.js',
    'user-support/kpi-reports/scripts/report-generators/vault/README.md',
    'user-support/kpi-reports/scripts/report-generators/vault/generate_vault_health.js',
    'pml-coding-assistant/scripts/validate_skill_structure.py',
    'pml-coding-assistant/scripts/lint_pml_examples.py',
    'pml-coding-assistant/examples/pml-patterns/get_equipment_creation_dates.pmlfnc',
    'pml-coding-assistant/examples/pml-patterns/safe_write_lines_to_file.pmlfnc',
]
missing = [p for p in required if not (root / p).exists()]
if missing:
    print('Missing required files:')
    for p in missing:
        print(' -', p)
    sys.exit(1)

# --- Required directories ---
required_dirs = [
    'pml-coding-assistant',
    'pml-coding-assistant/references/object-types',
    'pml-coding-assistant/references/database',
    'pml-coding-assistant/references/language',
    'pml-coding-assistant/references/ui',
    'pml-coding-assistant/references/utilities',
    'pml-coding-assistant/examples',
    'pml-coding-assistant/examples/pml-patterns',
    'pml-coding-assistant/scripts',
    'drawing-to-e3d',
    'drawing-to-e3d/input-interpretation',
    'drawing-to-e3d/model-intent',
    'drawing-to-e3d/generation-recipes',
    'drawing-to-e3d/validation',
    'user-support',
    'user-support/kpi-reports',
    'user-support/kpi-reports/references',
    'user-support/project-knowledge',
    'user-support/prompt-library',
    'user-support/kpi-reports/scripts/report-generators',
    'user-support/kpi-reports/scripts/report-generators/piping',
    'user-support/kpi-reports/scripts/report-generators/vault',
    'pml-coding-assistant/production-reference/commands',
    'pml-coding-assistant/production-reference/forms',
    'pml-coding-assistant/production-reference/functions',
    'pml-coding-assistant/production-reference/objects',
    'pml-coding-assistant/production-reference/DBListing-examples',
]
missing_dirs = [d for d in required_dirs if not (root / d).is_dir()]
if missing_dirs:
    print('Missing required directories:')
    for d in missing_dirs:
        print(' -', d)
    sys.exit(1)

# --- SKILL.md frontmatter ---
skill = (root / 'SKILL.md').read_text(encoding='utf-8')
if not skill.startswith('---') or ('name: aveva-pml-coding' not in skill and 'name: obsidian-aveva-pml-ide' not in skill) or 'description:' not in skill:
    print('SKILL.md frontmatter is invalid.')
    sys.exit(1)

# --- Scope boundary check ---
for banned in ['C# code', '.NET code', 'PMLNet code']:
    if banned in skill:
        print('Potential scope violation in SKILL.md:', banned)
        sys.exit(1)

# --- Object type reference files ---
obj_ref_root = root / 'pml-coding-assistant' / 'references'
obj_files = list((obj_ref_root / 'object-types').glob('*.md'))
if len(obj_files) < 50:
    print('Expected many split object/gadget reference files; found', len(obj_files))
    sys.exit(1)

# --- Stale references check ---
stale_files = [
    'pml-coding-assistant/references/object-type-details-full.md',
    'pml-coding-assistant/references/forms-and-menus-objects-from-pdf.md',
    'pml-coding-assistant/references/pml-coding-patterns.md',
    'pml-coding-assistant/references/pml-validation-checklist.md',
]
found_stale = [f for f in stale_files if (root / f).exists()]
if found_stale:
    print('Stale files found (should have been removed):')
    for f in found_stale:
        print(' -', f)
    sys.exit(1)

# --- Log Validation ---
log_path = root / 'log.md'
if log_path.exists():
    log_content = log_path.read_text(encoding='utf-8')
    log_lines = log_content.splitlines()
    entry_pattern = re.compile(r'^##\s+\[\d{4}-\d{2}-\d{2}\]\s+(ingest|query|lint)\s*\|')
    found_entry = False
    for line in log_lines:
        if line.startswith('## '):
            found_entry = True
            if not entry_pattern.match(line):
                print(f"Invalid log entry format in log.md: '{line}'")
                print("Must match: '## [YYYY-MM-DD] action | title' where action is ingest, query, or lint.")
                sys.exit(1)
    if not found_entry:
        print("No log entries starting with '## ' found in log.md.")
        sys.exit(1)

# --- Object-type Index Verification ---
index_path = obj_ref_root / 'object-type-index.md'
index_content = index_path.read_text(encoding='utf-8')
index_files = set(re.findall(r'\[[^\]]+?\]\(object-types\/([^)]+?)\)', index_content))

# 1. Assert all indexed files physically exist
missing_indexed = []
for f in index_files:
    if not (obj_ref_root / 'object-types' / f).exists():
        missing_indexed.append(f)

if missing_indexed:
    print("Files indexed in pml-coding-assistant/references/object-type-index.md do not exist:")
    for f in sorted(missing_indexed):
        print(f" - pml-coding-assistant/references/object-types/{f}")
    sys.exit(1)

# 2. Assert no orphaned files in pml-coding-assistant/references/object-types/
physical_files = {p.name for p in (obj_ref_root / 'object-types').glob('*.md')}
orphaned_files = physical_files - index_files
if orphaned_files:
    print("Orphaned files found in pml-coding-assistant/references/object-types/ (not registered in index):")
    for f in sorted(orphaned_files):
        print(f" - pml-coding-assistant/references/object-types/{f}")
    sys.exit(1)

# --- Markdown Link Verification ---
def verify_markdown_links(file_path):
    if not file_path.exists():
        return []
    content = file_path.read_text(encoding='utf-8')
    content = re.sub(r'```.*?```', '', content, flags=re.DOTALL)
    links = re.findall(r'\[[^\]]+?\]\(([^)]+?)\)', content)
    broken = []
    for link in links:
        if link.startswith(('http://', 'https://', '#', 'mailto:')):
            continue
        clean_path = link.split('#')[0]
        # Resolve path relative to the file's parent directory
        full_path = (file_path.parent / clean_path).resolve()
        if not full_path.exists():
            broken.append(link)
    return broken

markdown_files_to_check = [
    root / 'SKILL.md',
    root / 'README.md',
    root / 'OBSID.md',
    root / 'LLM_WIKI_CONCEPT.md',
    root / 'pml-coding-assistant' / 'README.md',
    root / 'pml-coding-assistant' / 'examples' / 'README.md',
    root / 'pml-coding-assistant' / 'examples' / 'pml-patterns' / 'README.md',
    root / 'drawing-to-e3d' / 'README.md',
    root / 'drawing-to-e3d' / 'input-interpretation' / 'README.md',
    root / 'drawing-to-e3d' / 'model-intent' / 'README.md',
    root / 'drawing-to-e3d' / 'generation-recipes' / 'README.md',
    root / 'drawing-to-e3d' / 'validation' / 'README.md',
    root / 'user-support' / 'README.md',
    root / 'user-support' / 'kpi-reports' / 'README.md',
    root / 'user-support' / 'project-knowledge' / 'README.md',
    root / 'user-support' / 'project-knowledge' / 'naming-rules.md',
    root / 'user-support' / 'project-knowledge' / 'piping-good-practices.md',
    root / 'user-support' / 'project-knowledge' / 'mto-rules.md',
    root / 'user-support' / 'project-knowledge' / 'dashboard-kpi-standards.md',
    root / 'user-support' / 'project-knowledge' / 'epc-deliverables.md',
    root / 'user-support' / 'project-knowledge' / 'project-decisions.md',
    root / 'user-support' / 'prompt-library' / 'README.md',
    root / 'user-support' / 'kpi-reports' / 'references' / 'README.md',
    root / 'user-support' / 'kpi-reports' / 'references' / 'kpi-definitions.md',
    root / 'user-support' / 'kpi-reports' / 'scripts' / 'report-generators' / 'README.md',
    root / 'user-support' / 'kpi-reports' / 'scripts' / 'report-generators' / 'piping' / 'README.md',
    root / 'user-support' / 'kpi-reports' / 'scripts' / 'report-generators' / 'vault' / 'README.md',
    root / 'pml-coding-assistant' / 'references' / 'object-type-index.md',
    root / 'pml-coding-assistant' / 'references' / 'database' / 'database-data-model-index.md',
]

kpi_root = root / 'user-support' / 'kpi-reports'
kpi_report_dirs = [
    p for p in kpi_root.iterdir()
    if p.is_dir() and not p.name.startswith('.') and (p / 'report.json').exists()
]

for report_dir in kpi_report_dirs:
    markdown_files_to_check.extend([
        report_dir / 'README.md',
        report_dir / 'summary.md',
    ])

for md_file in markdown_files_to_check:
    broken = verify_markdown_links(md_file)
    if broken:
        print(f"Broken relative links found in {md_file.relative_to(root)}:")
        for link in broken:
            print(f" - {link}")
        sys.exit(1)

# --- KPI Report Package Verification ---
kpi_package_errors = []
for report_dir in kpi_report_dirs:
    slug = report_dir.name
    required_package_files = [
        report_dir / 'README.md',
        report_dir / 'report.json',
        report_dir / f'{slug}.html',
        report_dir / f'{slug}-data.json',
        report_dir / 'summary.md',
    ]
    required_package_dirs = [
        report_dir / 'exports',
    ]
    for path_obj in required_package_files:
        if not path_obj.exists():
            kpi_package_errors.append(f"{path_obj.relative_to(root)} missing")
    for path_obj in required_package_dirs:
        if not path_obj.is_dir():
            kpi_package_errors.append(f"{path_obj.relative_to(root)} missing")
    if (report_dir / 'exports').is_dir() and not list((report_dir / 'exports').glob('*.csv')):
        kpi_package_errors.append(f"{(report_dir / 'exports').relative_to(root)} has no CSV exports")
    if (report_dir / 'report.json').exists():
        try:
            report_meta = json.loads((report_dir / 'report.json').read_text(encoding='utf-8'))
            if report_meta.get('slug') != slug:
                kpi_package_errors.append(f"{(report_dir / 'report.json').relative_to(root)} slug does not match folder name")
            for source_file in report_meta.get('sourceFiles', []):
                if not (root / source_file).exists():
                    kpi_package_errors.append(f"{(report_dir / 'report.json').relative_to(root)} references missing source {source_file}")
        except Exception as exc:
            kpi_package_errors.append(f"{(report_dir / 'report.json').relative_to(root)} invalid JSON: {exc}")

if kpi_package_errors:
    print("KPI report package errors:")
    for error in kpi_package_errors:
        print(" -", error)
    sys.exit(1)

# --- KPI Report Index Verification ---
try:
    report_index = json.loads((kpi_root / 'report-index.json').read_text(encoding='utf-8'))
except Exception as exc:
    print(f"Invalid user-support/kpi-reports/report-index.json: {exc}")
    sys.exit(1)

indexed_slugs = {entry.get('slug') for entry in report_index}
physical_slugs = {report_dir.name for report_dir in kpi_report_dirs}
if indexed_slugs != physical_slugs:
    print("KPI report index does not match physical report packages:")
    print(" - indexed:", ", ".join(sorted(str(s) for s in indexed_slugs)))
    print(" - physical:", ", ".join(sorted(physical_slugs)))
    sys.exit(1)

# --- Summary ---
pml_pattern_files = [p for p in (root / 'pml-coding-assistant' / 'examples' / 'pml-patterns').glob('*.*') if p.name != 'README.md']
kpi_report_files = list((root / 'user-support' / 'kpi-reports').glob('**/*.html'))
prompt_files = [p for p in (root / 'user-support' / 'prompt-library').glob('*.md') if p.name != 'README.md']
drawing_to_e3d_files = [p for p in (root / 'drawing-to-e3d').glob('**/*.md')]
print('Skill structure OK')
print(f'  Object/gadget reference files: {len(obj_files)}')
print(f'  PML pattern examples: {len(pml_pattern_files)}')
print(f'  Drawing-to-E3D reference files: {len(drawing_to_e3d_files)}')
print(f'  KPI report packages: {len(kpi_report_dirs)}')
print(f'  KPI HTML reports: {len(kpi_report_files)}')
print(f'  Prompt library entries: {len(prompt_files)}')
print(f'  Production reference dirs: {len([d for d in required_dirs if "production" in d])}')
