# AVEVA PML Coding Skill & LLM Wiki

A premium, compounding, local-first knowledge base and Claude Skill for **AVEVA Engineering, AVEVA E3D Design, and AVEVA Unified Engineering** automation.

The skill has three separated working areas for LLM navigation:
* **Near-zero-error PML/PML2 coding assistance** — functions, objects, forms, macros, callbacks, DBOUTPUT/DBLISTING workflows, database navigation, validation, and reusable E3D automation patterns.
* **Drawing-to-E3D automation** — converting AutoCAD 2D drawings, P&IDs, PFDs, line lists, tables, PDFs, and other structured or unstructured engineering inputs into auditable model intent and then into reviewable AVEVA E3D PML/PML2.
* **On-demand KPI dashboards and project knowledge** — optional user-requested reports and project documentation. Project knowledge can also be loaded to make generated PML, forms, DBOUTPUT, DBLISTING, and Drawing-to-E3D output respect project instructions, and to document important project decisions or modifications over time.

The first two areas are the core product. The third area is available when the user asks for it or when project knowledge is needed to ground generated work.

This repository is built on **Andrej Karpathy's "LLM Wiki" paradigm**, converting static documentation into a self-compounding expert system that grows smarter as you work.

```
                  ┌─────────────────────────────────────┐
                  │          SYSTEM PROMPT              │
                  │        Output Contract (JSON)       │
                  └──────────────────┬──────────────────┘
                                     │
                                     ▼
                  ┌─────────────────────────────────────┐
                  │               SKILL.md              │
                  │       Routing & Checklist Schema    │
                  └──────────────────┬──────────────────┘
                                     │
                                     ▼
         ┌───────────────────────────┴───────────────────────────┐
         ▼                                                       ▼
┌─────────────────────────────────┐                     ┌─────────────────────────────────┐
│     pml-coding-assistant/      │                     │ drawing-to-e3d/ + user-support/ │
│  PML References, Patterns,     │                     │  Model Intent, Reports,         │
│  Production Sources, Linters   │                     │  Project Knowledge, Prompts     │
└─────────────────────────────────┘                     └─────────────────────────────────┘
```

---

## ─── 1. The LLM Wiki Three-Layer Architecture ───

Your repository implements a surgical three-layer architecture to minimize context window overhead while guaranteeing absolute fact grounding:

### 🔹 Layer 1: Raw Sources (Immutable Ground Truth)
* **`pml-coding-assistant/production-reference/`** — Real-world production PML files (`commands/`, `forms/`, `functions/`, `objects/`, `PMLUI/`) used for pattern validation.
* **`pml-coding-assistant/production-reference/DBListing-examples/`** — Real-world database listings (.txt dumps) across 9 disciplines acting as the physical structural ground truth.

### 🔹 Layer 2: The Wiki (Compounded & Interlinked Knowledge)
* **`pml-coding-assistant/references/`** — Granular, highly structured Markdown reference vaults divided into logical subdirectories:
  * `pml-coding-assistant/references/language/` — PML2 syntax, universal methods, and error handling.
  * `pml-coding-assistant/references/database/` — E3D database models, attributes, pseudo-attributes, navigation, and modification rules.
  * `user-support/kpi-reports/references/` — KPI definitions, formulas, source fields, caveats, and default severity guidance for dashboards.
  * `pml-coding-assistant/references/ui/` — E3D forms, gadget declarations, and custom UI structures.
  * `pml-coding-assistant/references/utilities/` — Command-line queries, session coordinates, and RVM exports.
* **`pml-coding-assistant/references/object-types/`** — 87 highly granular split reference sheets representing each object type (e.g. `ARRAY`, `DBREF`, `COLLECTION`, `FILE`, `MENU`).
* **Indices** — `pml-coding-assistant/references/object-type-index.md` (root references) and `pml-coding-assistant/references/database/database-data-model-index.md` enable surgical, index-and-drill retrieval.
* **`drawing-to-e3d/`** — The second core workflow area. It keeps drawing interpretation, model intent, generation recipes, and validation guidance separate from PML syntax references and generated reports.
* **`pml-coding-assistant/examples/pml-patterns/`** — Curated, runnable PML/PML2 templates and small companion outputs used as known-good implementation patterns.
* **`user-support/kpi-reports/`** — User-requested generated HTML KPI dashboards and interactive reports derived from AVEVA E3D project/database context. Each report lives in a package with a Markdown wrapper, `report.json` manifest, HTML dashboard, JSON data, static summary, and CSV exports.
* **`user-support/project-knowledge/`** — Optional project and engineering grounding material: naming rules, EPC practices, bills of materials, mechanical specifications, client standards, and project decisions that the agent should respect when generating PML or documenting significant modifications.
* **`user-support/prompt-library/`** — Reusable prompts for report generation, PML review, discovery filing, and project-standard extraction.

## ─── Skill Area Folder Map ───

```text
PML coding assistant
  SKILL.md
  pml-coding-assistant/
  pml-coding-assistant/references/
  pml-coding-assistant/examples/pml-patterns/
  pml-coding-assistant/production-reference/

Drawing-to-E3D
  drawing-to-e3d/
    input-interpretation/
    model-intent/
    generation-recipes/
    validation/

On-demand user support
  user-support/kpi-reports/
  user-support/kpi-reports/references/
  user-support/project-knowledge/
  user-support/prompt-library/
```

This separation keeps the repository easy for an LLM to navigate as a classical skill: load the core PML contract first, load Drawing-to-E3D only for drawing/model-generation tasks, and load KPI or project knowledge only when requested or needed for project-specific grounding.

### 🔹 Layer 3: The Schema (AI Rules & Constraints)
* **`SKILL.md`** — The skill entrypoint containing the file routing table, strict variable scoping rules, coordinate coordinate gadgets, and pre-commit checklists.
* **`manifest.json`** — Bundled inventory and version metadata.

---

## ─── 2. Obsidian Integration (Knowledge Graph) ───

All indices and references are connected using **standard relative Markdown relative hyperlinks**. Opening this repository folder as an **Obsidian Vault** immediately unlocks:

* **Active Graph View**: Draws a gorgeous live topology showing how your indices link directly into your 87+ object reference sheets.
* **Backlink & Mention Panels**: Instantly tracks incoming and outgoing links to see exactly where individual objects, concepts, or rules are referenced.
* **Orphan & Hub Detection**: Visually exposes gaps in documentation density or cluster relationships in real-time.

---

## ─── 3. Standard Workflows ───

### 🔄 A. The "File-Back" Ingest (Closed-Loop Growth)
Whenever you solve a complex PML bug, discover an undocumented attribute, write an elegant UI form, convert drawing evidence into a reliable E3D creation pattern, or make an important project decision:
1. **File it back**: Instruct the agent to write a new PML template under `pml-coding-assistant/examples/pml-patterns/`, document a Drawing-to-E3D interpretation rule or model-intent pattern under [drawing-to-e3d/](drawing-to-e3d/README.md), update project standards or decisions under `user-support/project-knowledge/`, create a generated KPI/report package under `user-support/kpi-reports/` when requested, or update the corresponding object file under `pml-coding-assistant/references/object-types/`.
2. **Log the change**: Append a parseable record under the today's date in `log.md` using the Unix-friendly prefix format:
   ```markdown
   ## [YYYY-MM-DD] action | title
   ```
   *(Actions: `ingest` for reference updates, `query` for conceptual summaries, `lint` for structural health checks).*

### 🛠️ B. Automated Structural Validation (Linting)
Ensure your vault is perfectly healthy and contains zero broken paths or drift. Run the extended linter command:
```bash
python3 pml-coding-assistant/scripts/validate_skill_structure.py
```
This script programmatically validates:
* **Log entry syntax** matches the chronological ledger pattern.
* **Index integrity** (asserts that every indexed object file physically exists).
* **Orphaned files** (flags files in `pml-coding-assistant/references/object-types/` not registered in the index).
* **Relative links** in core vault documentation are active and resolve to real files on disk.
* **KPI report packages** contain `README.md`, `report.json`, an HTML dashboard, JSON data, `summary.md`, and an `exports/` directory.
* **PML examples** pass the lightweight static linter:
  ```bash
  python3 pml-coding-assistant/scripts/lint_pml_examples.py
  ```

### ⚙️ C. Ingestion Automation, Triggers & Real-World Walkthrough

To understand how this closed-loop ingest system functions in practice, here is a complete walkthrough of a real-world scenario, explaining the cognitive triggers, agentic automation, and automated CI/CD guardrails:

#### 1. The Scenario & The Cognitive Trigger
Suppose you and the AI agent are pair-programming to query custom piping specifications. During this task, you discover a tricky quirk: querying the `.spec` attribute on a `BRANCH` element returns a `DBREF` object instead of a string, and trying to print it directly causes a runtime crash unless you explicitly query its `.name` or evaluate it first.

You and the agent develop a successful, safe work-around:
```pml
$* Query the spec attribute safely
!specRef = !branch.spec
!specName = !specRef.name
$P Specification name is: |!specName|
```

Once this issue is successfully resolved, a **Cognitive Trigger** in the agent's [SKILL.md](SKILL.md) is activated. The agent is explicitly instructed:
> *“Whenever you solve a complex PML bug, discover an undocumented E3D attribute behavior, or write an elegant new reusable gadget or macro: Proactively offer to file the pattern back into the repository.”*

Hearing the trigger, the agent prompts you: *“We've resolved this branching specification behavior. Should I file this discovery back into your vault?”*

#### 2. Agentic Automation (The Ingestion Process)
Once you authorize the ingestion, the AI agent automates the entire process using its file-system manipulation tools:
* **Updates Reference Sheets**: It updates [aveva_introduction_to_attributes.md](pml-coding-assistant/references/database/aveva_introduction_to_attributes.md) under the `BRANCH` attributes section to document that `.spec` returns a `DBREF` and requires `.name` for string extraction.
* **Writes Curated Template**: It creates a clean, runnable template `query_branch_spec.pmlfnc` in `pml-coding-assistant/examples/pml-patterns/`.
* **Syncs Indices**: It updates [database-data-model-index.md](pml-coding-assistant/references/database/database-data-model-index.md) to register the newly added template and documentation page.
* **Appends to Ledger (`log.md`)**: It appends a parseable entry to the repository's [log.md](log.md):
  ```markdown
  ## [YYYY-MM-DD] ingest | Documented BRANCH Spec attribute parsing
  - Updated [aveva_introduction_to_attributes.md](pml-coding-assistant/references/database/aveva_introduction_to_attributes.md) to clarify .spec output type.
  - Created runnable template `pml-coding-assistant/examples/pml-patterns/query_branch_spec.pmlfnc`.
  ```

#### 3. Programmatic Guardrail Validation
To ensure the AI agent's automated edits did not introduce any broken paths, malformed log syntaxes, or index drift:
* **Local Pre-commit**: You or the agent runs the structural validator locally:
  ```bash
  python3 pml-coding-assistant/scripts/validate_skill_structure.py
  ```
* **CI/CD Automation**: When you commit and open a Git Pull Request, a GitHub Action triggers the exact same script automatically. If the agent made an error, the build fails instantly, identifying the precise relative link or missing registration to correct.

---

## ─── 4. Repository Evolution & Growth Stages ───

Over weeks, months, and years, the `obsidian-aveva-pml-ide` repository will evolve through three distinct stages of growth, shifting from a personal tool to an indestructible piece of institutional intelligence:

### 🚀 Stage 1: Organic Compounding (Weeks 1 – 4)
* **The Workflow**: As you actively pair with your agent to write PML scripts or resolve E3D design database modifications:
  * You will inevitably uncover undocumented E3D database attributes, custom piping specifications, or quirky PML constructor behaviors.
  * Once resolved, you tell the agent: *"File this discovery under `pml-coding-assistant/references/database/` and write a clean functional script in `pml-coding-assistant/examples/pml-patterns/`."*
* **The Result**: `pml-coding-assistant/examples/pml-patterns/` gathers canonical E3D PML scripts, [drawing-to-e3d/](drawing-to-e3d/README.md) captures how engineering inputs become model intent and PML, `user-support/project-knowledge/` optionally captures engineering standards and project decisions, `user-support/kpi-reports/` stores user-requested dashboards, and your database references preserve hard-won E3D facts.

### 👥 Stage 2: Team Collaboration & CI/CD (Months 2 – 6)
Because the entire repository is standard Markdown and Git-controlled, you can scale this across a team of engineers:
* **Pull Requests (PRs)**: Different developers clone the vault. As their local AI agents make changes and additions to their vaults, they open Git PRs to merge their knowledge back to the main branch.
* **Continuous Integration (CI)**: You add a GitHub Action that automatically executes:
  ```bash
  python3 pml-coding-assistant/scripts/validate_skill_structure.py
  ```
  If a developer (or their AI agent) commits a broken path, an orphaned split file, or a malformed log entry, the CI build fails instantly and tells the contributor exactly what relative path needs to be corrected.
* **The Result**: Your team builds a unified, mathematically audited "Expert Vault" representing the absolute state-of-the-art of your organization's E3D design standards, with zero risk of documentation rot.

### 🧠 Stage 3: Deep Institutional Memory (Long-Term)
* **Legacy Migrations**: As E3D versions advance, your agent can reference the vault to safely migrate legacy PML1 `.mac` macros into modern, structured PML2 global classes according to the exact rules in `SKILL.md`.
* **Finetuning Dataset**: High-density, structurally validated Markdown is the gold-standard training data for AI models. If your organization ever decides to train or finetune a private, local LLM on custom AVEVA CAD engineering standards, this repository is 100% formatted to act as a premium, zero-noise training dataset.

### 🎯 The Ultimate Goal
Over time, the vault becomes your team's ultimate competitive advantage. The AI agent is not just a general coder; it has deep, permanent, and verified memory of every database attribute, standard form layout, and engineering rule your company has ever developed.

---

## ─── 5. Install & Recommended Prompts ───

### Install
* **Claude Code (Project-Local)**: Place the unzipped folder under `<project>/.claude/skills/obsidian-aveva-pml-ide/`.
* **Claude Code (Personal)**: Place the unzipped folder under `~/.claude/skills/obsidian-aveva-pml-ide/`.
* **Claude.ai / Claude Desktop**: Zip the repository and upload the archive via the Skills UI.

### Recommended Prompts
* *"Write a PML function that collects all EQUI elements under the current element using COLLECTION."*
* *"Review this PML2 function and find syntax and scoping errors."*
* *"Create a PML form with a list, a text input, and a run button."*
* *"Extract model intent from this P&ID line list and generate reviewable PML for E3D pipe creation."*
* *"Explain this PML code line by line, stating variable scopes and methods used."*
