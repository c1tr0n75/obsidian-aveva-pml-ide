# Change Log

All significant changes, ingests, queries, and refactoring actions are recorded chronologically in this file using the format: `## [YYYY-MM-DD] action | title`.

## [2026-05-26] ingest | Initialized LLM Wiki Integration
- Configured the three-layer architecture (Raw Sources, Wiki, Schema) within the `obsidian-aveva-pml-ide` repository.
- Initialized chronological ledger `log.md`.
- Scheduled linter updates to enforce structural reference integrity.

## [2026-05-26] ingest | Added LLM Wiki Concept Explanation
- Created `LLM_WIKI_CONCEPT.md` detailing Karpathy's LLM Wiki paradigm.
- Documented role allocation (Human vs. LLM), standard operations (Ingest, Query, Lint), and Obsidian integration benefits.
- Updated `README.md` to list the new concept sheet.

## [2026-05-26] lint | Vault Restructuring & Graph Presets
- Replaced monolithic `examples/aveva_dblisting_examples.md` with raw `DBListing-examples/` containing 9 text dumps under `production-reference/`.
- Partitioned top-level `references/` into 4 logical subdirectories: `language/`, `database/`, `ui/`, and `utilities/`.
- Updated all relative links, Routing Tables, and inventories across `SKILL.md`, `README.md`, and `manifest.json`.
- Created `.obsidian/graph.json` with premium color presets (Green for object-types, Blue for references, Orange for examples, Red for raw files, Purple for logs).
- Extended linter checks in `validate_skill_structure.py` to audit the new directories and paths.

## [2026-05-26] lint | Deployed Premium Color Configurations for Obsidian Graph View
- Configured `.obsidian/graph.json` color groups with high-contrast, premium HSL-derived RGB values.
- Mapped distinct colors to Object Types (Emerald Green), Database Data Model (Teal/Cyan), Language/UI/Utilities Core References (Vibrant Blue), Curated Examples (Vibrant Orange), Production Raw references (Crimson Red), and Meta/System Files (Vibrant Purple).
- Verified repository structure and link integrity (Linter exit code `0`).

## [2026-05-26] lint | Removed Document Page Column from Object Type Index
- Cleaned up [object-type-index.md](references/object-type-index.md) by completely stripping the "Document page" column and updating the header explanation.
- Maintained all relative Markdown links in clean two-column table format (`Entry` | `Reference file`).
- Verified vault integrity and ran structural validation checks (Linter exit code `0`).

## [2026-05-26] lint | Synchronized Metadata Inventory After Production File Deletions
- Audited the workspace following manual deletion of several legacy/redundant production examples under `production-reference/`.
- Verified that no broken links or references exist in documentation, core indexes, or Obsidian graph configs.
- Synchronized file counts in [manifest.json](manifest.json) (`commands` = 2, `forms` = 4, `functions` = 3, `objects` = 2) to reflect the pristine, curated state.
- Confirmed that the global vault test suite is 100% successful (Linter exit code `0`).

## [2026-05-26] ingest | Added Repository Evolution Roadmap to README.md
- Incorporated the three-stage roadmap ("Organic Compounding", "Team Collaboration & CI/CD", "Deep Institutional Memory") under the title `## ─── 4. Repository Evolution & Growth Stages ───` in [README.md](README.md).
- Re-aligned subsequent section index and verified formatting.
- Executed local structure tests and audited relative link pathways (Linter exit code `0`).

## [2026-05-28] ingest | Added current element DB listing export example
- Created [export_current_element_dblisting.pmlfnc](examples/pml-patterns/export_current_element_dblisting.pmlfnc) to prompt for a local text output path and write a DB listing for `!!CE`.
- Grounded the implementation in the production `rptoutput.pmlfrm` `PMLFILEBROWSER`, `ALPHA FILE`, `WRITEALPHAFILE`, and `OUTPUT` patterns.
- Updated [manifest.json](manifest.json) example inventory.

## [2026-05-28] ingest | Added P&ID visible equipment DBListing and nozzle CSV
- Created [pid_visible_equipment_dblisting.txt](examples/pml-patterns/pid_visible_equipment_dblisting.txt) for the visible `E03`, `E04`, `E06`, `E10`, `E12`, `E15`, `E16`, and `E18` equipment and their nozzles.
- Used production catalog reference `CATR SPCOMPONENT /300lb_Ansi_Flanged/AAZFBD0TT` for every nozzle.
- Created [pid_visible_equipment_nozzle_connections.csv](examples/pml-patterns/pid_visible_equipment_nozzle_connections.csv) with leave and arrive nozzle pairs inferred from the P&ID crop.

## [2026-05-28] lint | Split examples into patterns and generated reports
- Moved reusable PML/PML2 artifacts into [examples/pml-patterns/](examples/pml-patterns/README.md).
- Added [examples/kpi-reports/](examples/kpi-reports/README.md) for generated HTML KPI dashboards and interactive reports.
- Added [project-knowledge/](project-knowledge/README.md) for naming rules, EPC practices, BOM conventions, engineering specifications, and project standards.
- Updated vault documentation, validator paths, manifest metadata, and Obsidian graph color groups for the new structure.

## [2026-05-28] lint | Documented Obsidian KPI report packages
- Documented the [examples/kpi-reports/](examples/kpi-reports/README.md) package convention: one folder per report, with a Markdown wrapper, interactive HTML dashboard, and optional data assets.
- Updated the vault documentation to describe Obsidian iframe wrappers for histograms, filters, tables, charts, and drill-down report views.
- Updated the validator to count HTML KPI reports recursively inside report package folders.

## [2026-05-28] ingest | Added Piping KPI demo dashboard
- Created [piping-demo](examples/kpi-reports/piping-demo/README.md), an Obsidian-wrapped HTML dashboard generated from [DBOutput_PIPING.txt](production-reference/DBListing-examples/DBOutput_PIPING.txt).
- Added KPI cards, component rankings, a component donut, stacked shop/built status bars, elevation bands, plan scatter, QA signals, and searchable route/item tables.
- Stored parsed KPI data in `examples/kpi-reports/piping-demo/piping-demo-data.json` and updated `manifest.json` KPI report count.

## [2026-05-28] ingest | Added KPI report package standard and demos
- Added [generate_demo_kpi_reports.js](scripts/generate_demo_kpi_reports.js) to regenerate standardized demo report packages from [DBOutput_PIPING.txt](production-reference/DBListing-examples/DBOutput_PIPING.txt).
- Expanded [piping-demo](examples/kpi-reports/piping-demo/README.md) and added [model-health-demo](examples/kpi-reports/model-health-demo/README.md) plus [mto-readiness-demo](examples/kpi-reports/mto-readiness-demo/README.md).
- Added `report.json`, `summary.md`, and CSV exports to each demo package, plus [report-index.json](examples/kpi-reports/report-index.json) and [report-index.csv](examples/kpi-reports/report-index.csv).
- Updated KPI documentation, manifest counts, and structural validation to enforce report package completeness.
