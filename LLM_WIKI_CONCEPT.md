# The LLM Wiki Paradigm

Based on Andrej Karpathy's conceptual design, the **LLM Wiki** is a stateful, persistent, and compounding knowledge system that sits between a human explorer and an LLM agent. 

Rather than treating the AI as a stateless chatbot (re-indexing raw sources from scratch on every turn), this repository compiles and keeps knowledge active, structured, and fully interlinked.

In this vault, the LLM Wiki serves two core product outcomes:
* **PML/PML2 coding assistance with near-zero syntax error** for AVEVA functions, objects, forms, DBREF/COLLECTION usage, DBOUTPUT/DBLISTING, database navigation, and reviewable model automation.
* **AVEVA Dabacon Design database interaction** for grounded navigation, query, extraction, element/attribute interpretation, and database evidence review.
* **Drawing-to-E3D generation** where drawings, P&IDs, PFDs, line lists, tables, PDFs, and unstructured engineering inputs are converted into auditable model intent before any PML modifies the E3D database.

KPI dashboards and project knowledge are optional user-support systems. Reports are generated when requested. Project knowledge can be loaded to constrain generated PML/forms/DBOUTPUT/DBLISTING and can record important project decisions or AI-agent modifications over the project life.

---

## 1. The Core Split of Labor

> [!NOTE]
> **"Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase."**
> — Andrej Karpathy

To prevent wiki decay (the "bookkeeping tax" of linking, indexing, and updating pages), the paradigm splits responsibilities surgically:
* **The Human (Director)**: Handles **curation, exploration, and intent**. You import new templates, ask deep design questions, provide drawing or P&ID/PFD evidence, share DBOUTPUT/DBLISTING or other database context, and define the intended model/database changes.
* **The LLM (Editor/Maintainer)**: Handles **organization, filing, cross-referencing, and indexing**. It does all the tedious filing, linking, and contradiction-matching.

---

## 2. Standard Operations & Workflows

### Ingest (Compounding)
When a new E3D specification, PML object capability, drawing interpretation rule, model-intent pattern, project decision, or custom debugging solution is solved:
1. The new information is added to the correct separated folder (e.g. creating/updating files under [pml-coding-assistant/references/](pml-coding-assistant/references/object-type-index.md), [drawing-to-e3d/](drawing-to-e3d/README.md), [pml-coding-assistant/examples/pml-patterns/](pml-coding-assistant/examples/pml-patterns/README.md), [user-support/kpi-reports/](user-support/kpi-reports/README.md), [user-support/project-knowledge/](user-support/project-knowledge/README.md), or [user-support/prompt-library/](user-support/prompt-library/README.md)).
2. The agent updates the required active links and index tables (like `pml-coding-assistant/references/object-type-index.md` or `pml-coding-assistant/references/database/database-data-model-index.md`) as part of the authorized ingest workflow.
3. An entry is appended to [log.md](log.md) following the Unix-parseable ledger format: `## [YYYY-MM-DD] action | title`.

### Query (Surgical Precision)
When asking a complex PML or Drawing-to-E3D question:
1. The agent consults the routing table in [SKILL.md](SKILL.md) and index tables to see where the details live.
2. It surgically loads only the required granular markdown files (avoiding huge context-window overhead and reducing response times).
3. If the final answer is an exceptionally useful or reusable E3D macro, UI gadget form, Drawing-to-E3D interpretation pattern, KPI validation dashboard, or project rule, **the agent files it back into the vault** as a permanent pattern, generated report, or knowledge page.

### Lint (Health Auditing)
Periodically, running [validate_skill_structure.py](pml-coding-assistant/scripts/validate_skill_structure.py) will check:
* **Required Skill Shape**: Ensuring required files, directories, frontmatter, and removed/stale files are in the expected state.
* **Index Integrity**: Ensuring indexed object files physically exist and every physical object-type file is registered.
* **Orphans**: Ensuring every physical file in `pml-coding-assistant/references/object-types/` is cataloged in the index.
* **Broken Links**: Ensuring all standard relative links (e.g. `[text] (path.md)`) inside `SKILL.md` are active and physically exist.
* **Log Formats**: Verifying all chronological ledger entries follow strict syntax patterns.
* **Generated Report Packages**: Verifying KPI report package files, data, exports, manifests, and report indexes remain synchronized.

---

## 3. Obsidian Integration

Since all knowledge is stored in **standard, local-first plaintext Markdown**, opening this repository as an Obsidian Vault immediately unlocks premium features:
* **Graph View**: Visually maps the connections between `SKILL.md`, structural indices, and your 87+ split object reference pages, showing documentation density and cluster relationships in real-time.
* **Backlink & Mention Panels**: Instantly tracks incoming and outgoing links to see exactly where individual objects, concepts, or rules are referenced.
* **Closed-Loop Development**: Watch the agent update, format, and structure files in your local workspace, and see the nodes and connections shift instantly in your Obsidian workspace.
* **Artifact Clusters**: `pml-coding-assistant/examples/pml-patterns/`, `drawing-to-e3d/`, `user-support/kpi-reports/`, `user-support/kpi-reports/references/`, `user-support/project-knowledge/`, and `user-support/prompt-library/` form separate graph regions for reusable PML, Drawing-to-E3D workflows, user-requested dashboards, KPI formulas, durable project context, project decisions, and reusable agent workflows. KPI report packages use Markdown wrappers, manifests, static summaries, and CSV exports so interactive HTML dashboards remain visible, linkable, auditable, and regenerable inside Obsidian.
