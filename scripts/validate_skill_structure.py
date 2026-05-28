#!/usr/bin/env python3
"""Validates the AVEVA PML Coding Claude Skill structure."""
from pathlib import Path
import sys
import re

root = Path(__file__).resolve().parents[1]

# --- Required files ---
required = [
    'SKILL.md',
    'README.md',
    'manifest.json',
    'log.md',
    'references/language/pml2-language-reference.md',
    'references/ui/forms-ui-reference.md',
    'references/language/methods-available-to-all-objects.md',
    'references/object-type-index.md',
    'references/database/database-data-model-index.md',
    'references/database/aveva_ue_design_database_data_model.md',
    'references/database/aveva_introduction_to_attributes.md',
    'references/database/aveva_pseudo_attributes.md',
    'examples/README.md',
    'examples/pml-patterns/README.md',
    'examples/kpi-reports/README.md',
    'project-knowledge/README.md',
    'examples/pml-patterns/get_equipment_creation_dates.pmlfnc',
    'examples/pml-patterns/safe_write_lines_to_file.pmlfnc',
]
missing = [p for p in required if not (root / p).exists()]
if missing:
    print('Missing required files:')
    for p in missing:
        print(' -', p)
    sys.exit(1)

# --- Required directories ---
required_dirs = [
    'references/object-types',
    'examples',
    'examples/pml-patterns',
    'examples/kpi-reports',
    'project-knowledge',
    'production-reference/commands',
    'production-reference/forms',
    'production-reference/functions',
    'production-reference/objects',
    'production-reference/DBListing-examples',
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
obj_files = list((root / 'references' / 'object-types').glob('*.md'))
if len(obj_files) < 50:
    print('Expected many split object/gadget reference files; found', len(obj_files))
    sys.exit(1)

# --- Stale references check ---
stale_files = [
    'references/object-type-details-full.md',
    'references/forms-and-menus-objects-from-pdf.md',
    'references/pml-coding-patterns.md',
    'references/pml-validation-checklist.md',
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
index_path = root / 'references' / 'object-type-index.md'
index_content = index_path.read_text(encoding='utf-8')
index_files = set(re.findall(r'\[[^\]]+?\]\(object-types\/([^)]+?)\)', index_content))

# 1. Assert all indexed files physically exist
missing_indexed = []
for f in index_files:
    if not (root / 'references' / 'object-types' / f).exists():
        missing_indexed.append(f)

if missing_indexed:
    print("Files indexed in references/object-type-index.md do not exist:")
    for f in sorted(missing_indexed):
        print(f" - references/object-types/{f}")
    sys.exit(1)

# 2. Assert no orphaned files in references/object-types/
physical_files = {p.name for p in (root / 'references' / 'object-types').glob('*.md')}
orphaned_files = physical_files - index_files
if orphaned_files:
    print("Orphaned files found in references/object-types/ (not registered in index):")
    for f in sorted(orphaned_files):
        print(f" - references/object-types/{f}")
    sys.exit(1)

# --- Markdown Link Verification ---
def verify_markdown_links(file_path):
    if not file_path.exists():
        return []
    content = file_path.read_text(encoding='utf-8')
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
    root / 'AURA.md',
    root / 'OBSID.md',
    root / 'LLM_WIKI_CONCEPT.md',
    root / 'examples' / 'README.md',
    root / 'examples' / 'pml-patterns' / 'README.md',
    root / 'examples' / 'kpi-reports' / 'README.md',
    root / 'project-knowledge' / 'README.md',
    root / 'references' / 'object-type-index.md',
    root / 'references' / 'database' / 'database-data-model-index.md',
]

for md_file in markdown_files_to_check:
    broken = verify_markdown_links(md_file)
    if broken:
        print(f"Broken relative links found in {md_file.relative_to(root)}:")
        for link in broken:
            print(f" - {link}")
        sys.exit(1)

# --- Summary ---
pml_pattern_files = [p for p in (root / 'examples' / 'pml-patterns').glob('*.*') if p.name != 'README.md']
kpi_report_files = [p for p in (root / 'examples' / 'kpi-reports').glob('*.html')]
print('Skill structure OK')
print(f'  Object/gadget reference files: {len(obj_files)}')
print(f'  PML pattern examples: {len(pml_pattern_files)}')
print(f'  KPI HTML reports: {len(kpi_report_files)}')
print(f'  Production reference dirs: {len([d for d in required_dirs if "production" in d])}')
