# AVEVA PML Coding Skill & LLM Wiki

A premium, compounding, local-first knowledge base and Claude Skill for **AVEVA Engineering, AVEVA E3D Design, and AVEVA Unified Engineering** PML/PML2 coding. 

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
│     references/object-types/    │                     │      examples/ & log.md         │
│  87 Granular Markdown Reference │                     │  Chronological Change Ledger    │
│  Sheets (Clickable Graph Nodes) │                     │  & Reusable Code Templates      │
└─────────────────────────────────┘                     └─────────────────────────────────┘
```

---

## ─── 1. The LLM Wiki Three-Layer Architecture ───

Your repository implements a surgical three-layer architecture to minimize context window overhead while guaranteeing absolute fact grounding:

### 🔹 Layer 1: Raw Sources (Immutable Ground Truth)
* **`production-reference/`** — Real-world production PML files (`commands/`, `forms/`, `functions/`, `objects/`, `PMLUI/`) used for pattern validation.
* **`production-reference/DBListing-examples/`** — Real-world database listings (.txt dumps) across 9 disciplines acting as the physical structural ground truth.

### 🔹 Layer 2: The Wiki (Compounded & Interlinked Knowledge)
* **`references/`** — Granular, highly structured Markdown reference vaults divided into logical subdirectories:
  * `references/language/` — PML2 syntax, universal methods, and error handling.
  * `references/database/` — E3D database models, attributes, pseudo-attributes, navigation, and modification rules.
  * `references/ui/` — E3D forms, gadget declarations, and custom UI structures.
  * `references/utilities/` — Command-line queries, session coordinates, and RVM exports.
* **`references/object-types/`** — 87 highly granular split reference sheets representing each object type (e.g. `ARRAY`, `DBREF`, `COLLECTION`, `FILE`, `MENU`).
* **Indices** — `references/object-type-index.md` (root references) and `references/database/database-data-model-index.md` enable surgical, index-and-drill retrieval.

### 🔹 Layer 3: The Schema (AI Rules & Constraints)
* **`SKILL.md`** — The skill entrypoint containing the file routing table, strict variable scoping rules, coordinate coordinate gadgets, and pre-commit checklists.
* **`SYSTEM_PROMPT.txt`** — Configures the AI agent's execution contract (JSON-only responses, Access Level escalation, error branches, and session logging).
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
Whenever you solve a complex PML bug, discover an undocumented attribute, or write an elegant new UI form:
1. **File it back**: Instruct the agent to write a new template under `examples/` or update the corresponding object file under `references/object-types/`.
2. **Log the change**: Append a parseable record under the today's date in `log.md` using the Unix-friendly prefix format:
   ```markdown
   ## [YYYY-MM-DD] action | title
   ```
   *(Actions: `ingest` for reference updates, `query` for conceptual summaries, `lint` for structural health checks).*

### 🛠️ B. Automated Structural Validation (Linting)
Ensure your vault is perfectly healthy and contains zero broken paths or drift. Run the extended linter command:
```bash
python3 scripts/validate_skill_structure.py
```
This script programmatically validates:
* **Log entry syntax** matches the chronological ledger pattern.
* **Index integrity** (asserts that every indexed object file physically exists).
* **Orphaned files** (flags files in `references/object-types/` not registered in the index).
* **Relative links** in `SKILL.md` are active and resolve to real files on disk.

---

## ─── 4. Repository Evolution & Growth Stages ───

Over weeks, months, and years, the `obsidian-aveva-pml-ide` repository will evolve through three distinct stages of growth, shifting from a personal tool to an indestructible piece of institutional intelligence:

### 🚀 Stage 1: Organic Compounding (Weeks 1 – 4)
* **The Workflow**: As you actively pair with your agent to write PML scripts or resolve E3D design database modifications:
  * You will inevitably uncover undocumented E3D database attributes, custom piping specifications, or quirky PML constructor behaviors.
  * Once resolved, you tell the agent: *"File this discovery under `references/database/` and write a clean functional script in `examples/`."*
* **The Result**: The `examples/` folder gathers a highly optimized collection of canonical, company-vetted E3D PML scripts, and your database references capture hard-won, real-world E3D facts.

### 👥 Stage 2: Team Collaboration & CI/CD (Months 2 – 6)
Because the entire repository is standard Markdown and Git-controlled, you can scale this across a team of engineers:
* **Pull Requests (PRs)**: Different developers clone the vault. As their local AI agents make changes and additions to their vaults, they open Git PRs to merge their knowledge back to the main branch.
* **Continuous Integration (CI)**: You add a GitHub Action that automatically executes:
  ```bash
  python3 scripts/validate_skill_structure.py
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
* **Claude Code (Project-Local)**: Place the unzipped folder under `<project>/.claude/skills/aveva-pml-coding/`.
* **Claude Code (Personal)**: Place the unzipped folder under `~.claude/skills/aveva-pml-coding/`.
* **Claude.ai / Claude Desktop**: Zip the repository and upload the archive via the Skills UI.

### Recommended Prompts
* *"Write a PML function that collects all EQUI elements under the current element using COLLECTION."*
* *"Review this PML2 function and find syntax and scoping errors."*
* *"Create a PML form with a list, a text input, and a run button."*
* *"Explain this PML code line by line, stating variable scopes and methods used."*

