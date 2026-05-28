# The LLM Wiki Paradigm

Based on Andrej Karpathy's conceptual design, the **LLM Wiki** is a stateful, persistent, and compounding knowledge system that sits between a human explorer and an LLM agent. 

Rather than treating the AI as a stateless chatbot (re-indexing raw sources from scratch on every turn), this repository compiles and keeps knowledge active, structured, and fully interlinked.

---

## 1. The Core Split of Labor

> [!NOTE]
> **"Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase."**
> — Andrej Karpathy

To prevent wiki decay (the "bookkeeping tax" of linking, indexing, and updating pages), the paradigm splits responsibilities surgically:
* **The Human (Director)**: Handles **curation, exploration, and intent**. You import new templates, ask deep design questions, and point the agent toward raw E3D design database modifications.
* **The LLM (Editor/Maintainer)**: Handles **organization, filing, cross-referencing, and indexing**. It does all the tedious filing, linking, and contradiction-matching.

---

## 2. Standard Operations & Workflows

### Ingest (Compounding)
When a new E3D specification, PML object capability, or custom debugging solution is solved:
1. The new information is added to the vault (e.g. creating/updating files under `references/`, [examples/pml-patterns/](examples/pml-patterns/README.md), [examples/kpi-reports/](examples/kpi-reports/README.md), or [project-knowledge/](project-knowledge/README.md)).
2. The agent automatically updates active links and index tables (like `references/object-type-index.md` or `references/database-data-model-index.md`).
3. An entry is appended to [log.md](log.md) following the Unix-parseable ledger format: `## [YYYY-MM-DD] action | title`.

### Query (Surgical Precision)
When asking a complex PML question:
1. The agent consults the routing table in [SKILL.md](SKILL.md) and index tables to see where the details live.
2. It surgically loads only the required granular markdown files (avoiding huge context-window overhead and reducing response times).
3. If the final answer is an exceptionally useful or reusable E3D macro, UI gadget form, KPI dashboard, or project rule, **the agent files it back into the vault** as a permanent pattern, generated report, or knowledge page.

### Lint (Health Auditing)
Periodically, running [validate_skill_structure.py](scripts/validate_skill_structure.py) will check:
* **Orphans**: Ensuring every physical file in `references/object-types/` is cataloged in the index.
* **Broken Links**: Ensuring all standard relative links (e.g. `[text] (path.md)`) inside `SKILL.md` are active and physically exist.
* **Log Formats**: Verifying all chronological ledger entries follow strict syntax patterns.

---

## 3. Obsidian Integration

Since all knowledge is stored in **standard, local-first plaintext Markdown**, opening this repository as an Obsidian Vault immediately unlocks premium features:
* **Graph View**: Visually maps the connections between `SKILL.md`, structural indices, and your 87+ split object reference pages, showing documentation density and cluster relationships in real-time.
* **Backlink & Mention Panels**: Instantly tracks incoming and outgoing links to see exactly where individual objects, concepts, or rules are referenced.
* **Closed-Loop Development**: Watch the agent update, format, and structure files in your local workspace, and see the nodes and connections shift instantly in your Obsidian workspace.
* **Artifact Clusters**: `examples/pml-patterns/`, `examples/kpi-reports/`, and `project-knowledge/` form separate graph regions for reusable PML, generated dashboards, and durable engineering context. KPI report packages use Markdown wrappers so interactive HTML dashboards remain visible and linkable inside Obsidian.
