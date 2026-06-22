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
- Replaced monolithic `examples/aveva_dblisting_examples.md` with raw `DBListing-examples/` containing 9 text dumps under `pml-coding-assistant/production-reference/`.
- Partitioned top-level `references/` into 4 logical subdirectories: `language/`, `database/`, `ui/`, and `utilities/`.
- Updated all relative links, Routing Tables, and inventories across `SKILL.md`, `README.md`, and `manifest.json`.
- Created `.obsidian/graph.json` with premium color presets (Green for object-types, Blue for references, Orange for examples, Red for raw files, Purple for logs).
- Extended linter checks in `validate_skill_structure.py` to audit the new directories and paths.

## [2026-05-26] lint | Deployed Premium Color Configurations for Obsidian Graph View
- Configured `.obsidian/graph.json` color groups with high-contrast, premium HSL-derived RGB values.
- Mapped distinct colors to Object Types (Emerald Green), Database Data Model (Teal/Cyan), Language/UI/Utilities Core References (Vibrant Blue), Curated Examples (Vibrant Orange), Production Raw references (Crimson Red), and Meta/System Files (Vibrant Purple).
- Verified repository structure and link integrity (Linter exit code `0`).

## [2026-05-26] lint | Removed Document Page Column from Object Type Index
- Cleaned up [object-type-index.md](pml-coding-assistant/references/object-type-index.md) by completely stripping the "Document page" column and updating the header explanation.
- Maintained all relative Markdown links in clean two-column table format (`Entry` | `Reference file`).
- Verified vault integrity and ran structural validation checks (Linter exit code `0`).

## [2026-05-26] lint | Synchronized Metadata Inventory After Production File Deletions
- Audited the workspace following manual deletion of several legacy/redundant production examples under `pml-coding-assistant/production-reference/`.
- Verified that no broken links or references exist in documentation, core indexes, or Obsidian graph configs.
- Synchronized file counts in [manifest.json](manifest.json) (`commands` = 2, `forms` = 4, `functions` = 3, `objects` = 2) to reflect the pristine, curated state.
- Confirmed that the global vault test suite is 100% successful (Linter exit code `0`).

## [2026-05-26] ingest | Added Repository Evolution Roadmap to README.md
- Incorporated the three-stage roadmap ("Organic Compounding", "Team Collaboration & CI/CD", "Deep Institutional Memory") under the title `## ─── 4. Repository Evolution & Growth Stages ───` in [README.md](README.md).
- Re-aligned subsequent section index and verified formatting.
- Executed local structure tests and audited relative link pathways (Linter exit code `0`).

## [2026-05-28] ingest | Added current element DB listing export example
- Created [export_current_element_dblisting.pmlfnc](pml-coding-assistant/examples/pml-patterns/export_current_element_dblisting.pmlfnc) to prompt for a local text output path and write a DB listing for `!!CE`.
- Grounded the implementation in the production `rptoutput.pmlfrm` `PMLFILEBROWSER`, `ALPHA FILE`, `WRITEALPHAFILE`, and `OUTPUT` patterns.
- Updated [manifest.json](manifest.json) example inventory.

## [2026-05-28] ingest | Added P&ID visible equipment DBListing and nozzle CSV
- Created [pid_visible_equipment_dblisting.txt](pml-coding-assistant/examples/pml-patterns/pid_visible_equipment_dblisting.txt) for the visible `E03`, `E04`, `E06`, `E10`, `E12`, `E15`, `E16`, and `E18` equipment and their nozzles.
- Used production catalog reference `CATR SPCOMPONENT /300lb_Ansi_Flanged/AAZFBD0TT` for every nozzle.
- Created [pid_visible_equipment_nozzle_connections.csv](pml-coding-assistant/examples/pml-patterns/pid_visible_equipment_nozzle_connections.csv) with leave and arrive nozzle pairs inferred from the P&ID crop.

## [2026-05-28] lint | Split examples into patterns and generated reports
- Moved reusable PML/PML2 artifacts into [pml-coding-assistant/examples/pml-patterns/](pml-coding-assistant/examples/pml-patterns/README.md).
- Added [user-support/kpi-reports/](user-support/kpi-reports/README.md) for generated HTML KPI dashboards and interactive reports.
- Added [user-support/project-knowledge/](user-support/project-knowledge/README.md) for naming rules, EPC practices, BOM conventions, engineering specifications, and project standards.
- Updated vault documentation, validator paths, manifest metadata, and Obsidian graph color groups for the new structure.

## [2026-05-28] lint | Documented Obsidian KPI report packages
- Documented the [user-support/kpi-reports/](user-support/kpi-reports/README.md) package convention: one folder per report, with a Markdown wrapper, interactive HTML dashboard, and optional data assets.
- Updated the vault documentation to describe Obsidian iframe wrappers for histograms, filters, tables, charts, and drill-down report views.
- Updated the validator to count HTML KPI reports recursively inside report package folders.

## [2026-05-28] ingest | Added Piping KPI demo dashboard
- Created [piping-demo](user-support/kpi-reports/piping-demo/README.md), an Obsidian-wrapped HTML dashboard generated from [DBOutput_PIPING.txt](pml-coding-assistant/production-reference/DBListing-examples/DBOutput_PIPING.txt).
- Added KPI cards, component rankings, a component donut, stacked shop/built status bars, elevation bands, plan scatter, QA signals, and searchable route/item tables.
- Stored parsed KPI data in `user-support/kpi-reports/piping-demo/piping-demo-data.json` and updated `manifest.json` KPI report count.

## [2026-05-28] ingest | Added KPI report package standard and demos
- Added [generate_demo_kpi_reports.js](user-support/kpi-reports/scripts/generate_demo_kpi_reports.js) to regenerate standardized demo report packages from [DBOutput_PIPING.txt](pml-coding-assistant/production-reference/DBListing-examples/DBOutput_PIPING.txt).
- Expanded [piping-demo](user-support/kpi-reports/piping-demo/README.md) and added [model-health-demo](user-support/kpi-reports/model-health-demo/README.md) plus [mto-readiness-demo](user-support/kpi-reports/mto-readiness-demo/README.md).
- Added `report.json`, `summary.md`, and CSV exports to each demo package, plus [report-index.json](user-support/kpi-reports/report-index.json) and [report-index.csv](user-support/kpi-reports/report-index.csv).
- Updated KPI documentation, manifest counts, and structural validation to enforce report package completeness.

## [2026-05-28] ingest | Added productization layer for KPI and PML workflows
- Added [kpi-definitions.md](user-support/kpi-reports/references/kpi-definitions.md) with reusable KPI formulas, source fields, caveats, and severity guidance.
- Added project-knowledge starters for naming rules, piping practices, MTO rules, dashboard KPI standards, and EPC deliverables.
- Added [prompt-library](user-support/prompt-library/README.md) for repeatable agent-assisted workflows.
- Added [report-generators](user-support/kpi-reports/scripts/report-generators/README.md), including a piping before/after DB output diff generator.
- Added [vault-health-demo](user-support/kpi-reports/vault-health-demo/README.md) and a vault-health generator for monitoring report package completeness and knowledge cluster coverage.
- Added [lint_pml_examples.py](pml-coding-assistant/scripts/lint_pml_examples.py) for lightweight static checks of curated PML examples.

## [2026-05-28] ingest | Separated core PML, Drawing-to-E3D, and optional user support areas
- Added [drawing-to-e3d](drawing-to-e3d/README.md) with input interpretation, model intent, generation recipe, and validation guidance.
- Clarified that PML/PML2 coding and Drawing-to-E3D are the two core product outcomes.
- Clarified that KPI dashboards are user-requested generated artifacts and [project-knowledge](user-support/project-knowledge/README.md) is optional grounding plus project-life decision tracing.
- Added [project-decisions.md](user-support/project-knowledge/project-decisions.md) for important AI-agent modifications and engineering decisions.

## [2026-05-28] lint | Reorganized skill into three product folders
- Moved PML references, production examples, reusable PML patterns, and PML validators under [pml-coding-assistant](pml-coding-assistant/README.md).
- Kept Drawing-to-E3D interpretation, model intent, generation recipes, and validation workflows under [drawing-to-e3d](drawing-to-e3d/README.md).
- Moved user-requested KPI reports, KPI definitions, project knowledge, project decisions, prompts, and report generators under [user-support](user-support/README.md).
- Updated root documentation, Obsidian graph groups, generators, report metadata, and validation scripts for the new paths.

## [2026-06-02] ingest | Added IDE Deployment Instructions to README.md
- Updated [README.md](README.md) with comprehensive Windows deployment instructions.
- Documented Global Deployment steps for Antigravity IDE and VS Code under the `%USERPROFILE%\.gemini\config\skills\` path.
- Documented Workspace-Local Deployment steps for VS Code under the project `.gemini\config\skills\` folder.
- Executed local structure validator and lightweight PML linters to ensure absolute vault integrity.

## [2026-06-09] ingest | Documented dynamic gadget access syntax and false-positive fix
- Added section `5.1 Dynamic Gadget Access (Command Expansion)` to [forms-ui-reference.md](pml-coding-assistant/references/ui/forms-ui-reference.md).
- Added inline rule to [SKILL.md](SKILL.md) Forms and UI section: `!this.$!gadgetName.val` is correct PML2 for dynamic gadget access; angle-bracket form `!this.$!<gadget>.val` is documentation notation only — do not flag as syntax error.
- Fix addresses agent false-positive where dynamic gadget access with `$!variable` was incorrectly reported as invalid syntax.

## [2026-06-17] ingest | Added Event Driven Graphics demo form
- Created [edgdemo.pmlfrm](pml-coding-assistant/examples/pml-patterns/edgdemo.pmlfrm) illustrating single element selection and continuous coordinate selection using `EDGPACKET` and `!!edgCntrl`.

## [2026-06-17] ingest | Documented Event Driven Graphics objects
- Created [edgpacket-object.md](pml-coding-assistant/references/object-types/edgpacket-object.md) documenting EDGPACKET properties, methods, and callback return values.
- Created [edgcntrl-object.md](pml-coding-assistant/references/object-types/edgcntrl-object.md) documenting !!edgCntrl methods and usage.
- Registered new objects in [object-type-index.md](pml-coding-assistant/references/object-type-index.md) and updated [manifest.json](manifest.json).
