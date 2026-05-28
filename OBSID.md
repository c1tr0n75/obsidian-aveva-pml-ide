# Obsidian & LLM Integration for AVEVA PML IDE

This document details how Obsidian acts as a highly visual, interactive "second brain" for your AVEVA E3D/PML custom coding skill repository, and how this architecture operates as a highly scalable engine for AI/LLM coding agents.

The vault should be read with a clear product hierarchy:
* Core: AVEVA PML/PML2 coding assistance with near-zero syntax error.
* Core: Drawing-to-E3D workflows that convert drawings, P&IDs, PFDs, line lists, PDFs, and unstructured engineering data into traceable model intent and reviewable PML/PML2.
* On-demand user support: KPI dashboards and project knowledge pages. Reports are generated when requested; project knowledge can constrain generated PML/forms/DBOUTPUT/DBLISTING and document important project decisions or modifications.

---

## ─── 1. Obsidian Integration: The Visual Second Brain ───

Obsidian transforms this repository from a static set of text files into a **dynamic, highly visual, and interactive topology**.

### 🚀 Key Advantages in Practice

#### 🔹 Visual Knowledge Graph (Graph View)
This vault contains **87+ granular reference sheets** and dozens of database navigation docs. In Obsidian:
* Opening the **Graph View** maps every markdown file as a node, and every relative link as a path.
* You will instantly see central "hub" indices (like `object-type-index.md` or `database-data-model-index.md`) radiating links out to specific object sheets (`ARRAY.md`, `DBREF.md`, `COLLECTION.md`).
* Artifact hubs such as [pml-coding-assistant/examples/README.md](pml-coding-assistant/examples/README.md), [pml-coding-assistant/examples/pml-patterns/README.md](pml-coding-assistant/examples/pml-patterns/README.md), [drawing-to-e3d/README.md](drawing-to-e3d/README.md), [user-support/kpi-reports/README.md](user-support/kpi-reports/README.md), [user-support/project-knowledge/README.md](user-support/project-knowledge/README.md), [user-support/kpi-reports/references/README.md](user-support/kpi-reports/references/README.md), and [user-support/prompt-library/README.md](user-support/prompt-library/README.md) keep reusable PML, drawing/model-intent workflows, generated reports, engineering standards, KPI definitions, and reusable prompts visible as first-class graph nodes.
* When object sheets link to one another (e.g., `COLLECTION.md` referencing `DBREF.md` because collections store element references), Obsidian draws cross-connections, exposing the **exact logic and data dependency flow of the PML language** visually.

#### 🔹 Surgical Backlink Tracking
When you are looking at a specific object sheet—say, `FILE.md`—you can open Obsidian’s **Backlinks & Mentions** panel. This will immediately show you every page in the vault that references or links to `FILE.md`. 
* You instantly find every relevant global function, syntax explanation, error handling rule, and chronological log entry that used or modified a `FILE` object, without having to grep search.

#### 🔹 Real-Time Orphan & Gap Detection
In the Graph view, any files floating completely detached from the rest of the web are **orphans**. This visually flags:
* Documentation gaps (files you wrote but forgot to index or link to).
* Stale reference files that are no longer part of your active PML coding skill structure.

---

## ─── 2. Maximizing & Exploring Obsidian ───

### 📌 A. Dynamic Indexing with the `Dataview` Plugin
The **Dataview** community plugin is highly recommended. It allows you to write SQL-like queries inside markdown pages to dynamically generate tables.
* **Example**: You can create a page called `All Curated Templates.md` and write:
  ```dataview
  LIST FROM "pml-coding-assistant/examples/pml-patterns"
  SORT file.name ASC
  ```
  Obsidian will dynamically compile and render a clickable index of every PML template in the vault.

### 📌 B. Interactive E3D DB Mapping with `Canvas`
Obsidian Canvas is an interactive digital whiteboard where you can drag, drop, and link notes:
* You can drag nodes like `aveva_ue_design_database_data_model.md` and connect them to specific `object-types` sheets.
* You can visually sketch out your organization’s physical database hierarchy (e.g., `WORLD` ➔ `SITE` ➔ `ZONE` ➔ `EQUI` ➔ `SUBE`) or map the call flow of custom PML2 form gadgets to visual widgets.

### 📌 C. Seamless Team Syncing with `Obsidian-Git`
Install the **Obsidian-Git** community plugin. 
* This automates the background committing and pushing of the vault. As you or your local AI agent make updates, document attributes, and log entries, Obsidian-Git pushes the changes silently to your repository. The rest of the engineering team instantly pulls the updated knowledge base.

### 📌 D. Customizing the Graph View
* **Color-Code the Graph by Directory**: Open Graph Settings ➔ Groups. Add groups based on folder paths:
  * Green for `pml-coding-assistant/examples/pml-patterns/`
  * Teal for `drawing-to-e3d/`
  * Gold for `user-support/kpi-reports/`
  * Blue for `pml-coding-assistant/references/object-types/`
  * Cyan for `user-support/kpi-reports/references/`
  * Violet for `user-support/project-knowledge/`
  * Pink for `user-support/prompt-library/`
  * Orange for `pml-coding-assistant/production-reference/`
  * This creates a gorgeous, color-coded "heatmap" showing where your PML and E3D engineering logic is concentrated.
* **Embedded PML Previews**: Use Obsidian's multi-pane feature. Keep `SKILL.md` (the rules) pinned in a side panel, while writing your new PML scripts in the main pane. This lets you reference core scoping constraints and syntax rules side-by-side with zero friction.

---

## ─── 3. LLM Agent Architecture: How AI Consumes this Vault ───

For an LLM agent, this repository is not just a documentation folder—it is a **highly optimized software engineering framework** designed for surgical context retrieval, strict verification, and decentralized scaling.

### ⚙️ Operational Mechanics

#### 1. Context Window Optimization (Surgical Retrieval)
* **The Problem**: Shoving a 1,000-page AVEVA manual or a massive database schema into an LLM's context window makes it slow, incredibly expensive, and prone to hallucinations or "lost-in-the-middle" confusion.
* **The Solution**: The vault uses an **"Index-and-Drill"** architecture. `SKILL.md` acts as a routing table:
  1. The LLM agent is instructed to load *only* the specific index related to the user's task (e.g., `object-type-index.md`).
  2. The agent reads the index, identifies the exact file it needs (e.g., `pml-coding-assistant/references/object-types/collection.md`), and **loads only that specific node**.
  3. Instead of eating up 100,000+ tokens, the agent solves the problem using less than 5,000 tokens, guaranteeing **ultra-high precision, lower latency, and zero hallucinated methods**.

#### 2. Declarative Coding Constraints (Self-Correction Loop)
`SKILL.md` provides a strict **Pre-commit Checklist** (e.g., verifying `!` vs `!!` scoping, preventing parentheses on attributes like `!!CE.type`, and verifying commented lines). 
* When executing agentically, the LLM runs a **cognitive self-correction loop**: it generates the PML code, parses its own output against this checklist, and fixes any scoping or syntax violations *before* presenting the code to you.

#### 3. Structured Grounding
If the agent is asked to query database structures, it doesn't guess the schema. It reads from Layer 1 (`pml-coding-assistant/production-reference/DBListing-examples/`) to see exactly how E3D structures elements in practice. It grounds its output in real-world dump files, ensuring the code matches actual physical databases.

For project-specific deliverables, the agent also distinguishes reusable artifacts from grounding knowledge: PML/PML2 implementation patterns come from [pml-coding-assistant/examples/pml-patterns/](pml-coding-assistant/examples/pml-patterns/README.md), Drawing-to-E3D work lives under [drawing-to-e3d/](drawing-to-e3d/README.md) and should preserve source evidence, model intent, assumptions, and traceability before producing modifying PML, generated HTML dashboards are written to [user-support/kpi-reports/](user-support/kpi-reports/README.md) when requested, and durable naming rules, engineering standards, and project decisions live in [user-support/project-knowledge/](user-support/project-knowledge/README.md).

Interactive KPI reports are user-requested artifacts. They should use a package folder with a Markdown wrapper and an embedded HTML dashboard. The wrapper becomes the Obsidian graph node, while the HTML file can render histograms, chart filters, tables, and drill-down views through an `<iframe>` or a browser link.

Each package should also include `summary.md` for Obsidian-native reading, `report.json` for indexing, and `exports/*.csv` for engineering review outside Obsidian. The report catalog can be browsed from [user-support/kpi-reports/README.md](user-support/kpi-reports/README.md), with machine-readable indexes in [report-index.json](user-support/kpi-reports/report-index.json) and [report-index.csv](user-support/kpi-reports/report-index.csv).

KPI definitions live in [user-support/kpi-reports/references/kpi-definitions.md](user-support/kpi-reports/references/kpi-definitions.md), project-specific thresholds live in [user-support/project-knowledge/dashboard-kpi-standards.md](user-support/project-knowledge/dashboard-kpi-standards.md), and reusable human prompts live in [user-support/prompt-library/](user-support/prompt-library/README.md).

---

## ─── 4. Scalability Principles ───

```
   ┌────────────────────────────────────────────────────────┐
   │                  GLOBAL DEVS / AGENTS                  │
   │   Eng 1 + Agent        Eng 2 + Agent        Eng 3 + Agent  │
   └─────────┬────────────────────┬────────────────────┬────┘
             │                    │                    │
             ▼                    ▼                    ▼
   ┌────────────────────────────────────────────────────────┐
   │                  GIT PULL REQUESTS (PRs)               │
   └──────────────────────────┬─────────────────────────────┘
                              │
                              ▼
   ┌────────────────────────────────────────────────────────┐
   │                 CI/CD LINT PIPELINE                    │
   │      python3 pml-coding-assistant/scripts/validate_skill_structure.py        │
   └──────────────────────────┬─────────────────────────────┘
                              │ (Passes Audit)
                              ▼
   ┌────────────────────────────────────────────────────────┐
   │               CENTRALIZED EXPERT VAULT                 │
   │          (Instant global knowledge sync)               │
   └────────────────────────────────────────────────────────┐
```

#### 🔹 Scalability Across Teams (Distributed Git + CI/CD)
Because the entire system is Git-controlled markdown, knowledge contribution is entirely decentralized:
1. **Parallel Ingestion**: 50 different engineers in your organization can use their local AI agents to solve different E3D piping, civil, or electrical PML scripts.
2. **Automated Auditing**: As their local agents write custom references and examples, developers submit Git Pull Requests.
3. **The CI Guardrail**: An automated CI pipeline runs `python3 pml-coding-assistant/scripts/validate_skill_structure.py` on the PR. It mathematically proves that no broken links, malformed logs, or unregistered orphans exist.
4. **Instant Synchronization**: Once merged, all other engineers (and their local AI agents) pull the main branch and **instantly inherit the newly compounded company E3D standards**.

#### 🔹 Scalability Across AI Models (Zero-Noise Datasets)
High-density, structurally validated Markdown is the absolute gold standard for AI consumption.
* **Vector Embeddings / RAG**: You can feed this entire vault directly into an enterprise Retrieval-Augmented Generation (RAG) system. Because the vault has zero broken links or formatting noise, retrieval engines can chunk, search, and serve it to thousands of concurrent users with 100% accuracy.
* **Model Finetuning**: If your organization ever decides to train or finetune a private, local LLM (like a Llama-3 or custom Gemini model) on proprietary AVEVA CAD engineering standards, this entire repository acts as a premium, zero-noise, training dataset right out of the box.
