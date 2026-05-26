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

## ─── 4. Install & Recommended Prompts ───

### Install
* **Claude Code (Project-Local)**: Place the unzipped folder under `<project>/.claude/skills/aveva-pml-coding/`.
* **Claude Code (Personal)**: Place the unzipped folder under `~.claude/skills/aveva-pml-coding/`.
* **Claude.ai / Claude Desktop**: Zip the repository and upload the archive via the Skills UI.

### Recommended Prompts
* *"Write a PML function that collects all EQUI elements under the current element using COLLECTION."*
* *"Review this PML2 function and find syntax and scoping errors."*
* *"Create a PML form with a list, a text input, and a run button."*
* *"Explain this PML code line by line, stating variable scopes and methods used."*
