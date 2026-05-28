# Aura: Embedded E3D AI Agent & Vault-Grounded Intelligence

This document details the system architecture, prompt lifecycle, and operational workflow of **Aura**—the AI Agent embedded directly inside **AVEVA E3D Design**—and how it uses this Obsidian repository as its core knowledge graph and grounding engine.

Aura is centered on two product pillars:
* **High-precision AVEVA PML/PML2 coding assistance** for functions, forms, DBOUTPUT/DBLISTING, database navigation, and model automation.
* **Drawing-to-E3D automation** that turns AutoCAD 2D drawings, P&IDs, PFDs, line lists, PDFs, and unstructured engineering data into auditable model intent and then reviewable PML/PML2.

KPI dashboards and project knowledge pages are optional user-support areas. KPI dashboards are generated when the user asks for reports, exports, or visual status. Project knowledge is loaded when the user asks Aura to respect project documentation, when existing project rules should constrain generated PML/forms/DBOUTPUT/DBLISTING, or when important AI-assisted project decisions and modifications should be traced.

---

## ─── 1. Core Concept: Aura & The Obsidian Engine ───

Inside AVEVA E3D Design, **Aura** serves as an intelligent, conversational copilot for piping, civil, electrical, and structural CAD engineers. Its first responsibility is to write, review, and execute reliable PML/PML2; its second core responsibility is to convert engineering inputs into traceable E3D model-generation intent.

To prevent hallucinations, ensure strict compliance with E3D database structures, and output compilable PML2 syntax, Aura is decoupled from its static codebase:
* **The Codebase (Static)**: Aura's native application layer inside E3D is built using C# (.NET) and AVEVA PMLNet containers.
* **The Intelligence (Dynamic)**: Aura's actual knowledge is entirely hosted in **this Obsidian vault**.

```
                   ┌───────────────────────────────┐
                   │       AVEVA E3D Design        │
                   │  (Workstation Session Panel)  │
                   └───────────────┬───────────────┘
                                   │ (Aura UI Panel)
                                   ▼
                   ┌───────────────────────────────┐
                   │        Aura E3D Add-in        │
                   │     (C# / PMLNet Wrapper)     │
                   └───────────────┬───────────────┘
                                   │
                (1. Query Local Vault on LAN/Share)
                                   ▼
   ┌───────────────────────────────────────────────────────────────┐
   │                OBSIDIAN KNOWLEDGE BASE (VAULT)                │
   │ pml-coding-assistant/ | drawing-to-e3d/ | user-support/ │
   └───────────────────────────────┬───────────────────────────────┘
                                   │
                     (2. Assemble Grounded Prompt)
                                   ▼
                   ┌───────────────────────────────┐
                   │       LLM API Provider        │
                   │     (Gemini, Claude, GPT)     │
                   └───────────────┬───────────────┘
                                   │
                   (3. Model Intent + High-Precision PML2)
                                   ▼
                   ┌───────────────────────────────┐
                   │    Aura PML Execution Engine  │
                   │  (In-process command pipeline)│
                   └───────────────────────────────┘
```

---

## ─── 2. The Prompt Lifecycle & Vault-Based Grounding ───

Whenever a user requests an operation or query inside the E3D Design session, Aura executes the following multi-stage **Grounded Retrieval Loop**:

### Step 1: User Request & Active Context Extraction
The user prompts Aura inside E3D:
> *"Query the specification name and bore for the current active piping branch."*
1. Aura’s C# layer queries E3D’s active database context to retrieve coordinates, database references, and element types:
   * **Target element type**: `BRANCH`
   * **Active element reference**: `!!CE` (stored as `DBREF` in PML)

### Step 2: Local Vault Retrieval (Index-and-Drill)
Instead of sending this raw request directly to the LLM, Aura's local execution layer reads the vault files from a secure shared network folder:
1. **Scans Indices**: It checks [database-data-model-index.md](pml-coding-assistant/references/database/database-data-model-index.md) to locate where `BRANCH` attributes are defined.
2. **Drills Reference Sheet**: It loads the corresponding split reference files under `pml-coding-assistant/references/database/` and [aveva_introduction_to_attributes.md](pml-coding-assistant/references/database/aveva_introduction_to_attributes.md) for the `BRANCH` element type.
3. **Loads Drawing, KPI, and Project Context When Needed**: For Drawing-to-E3D requests, it loads [drawing-to-e3d/](drawing-to-e3d/README.md) to identify source evidence, extracted model intent, missing data, and traceability before generating PML. For user-requested reporting, it can load KPI definitions from [user-support/kpi-reports/references/kpi-definitions.md](user-support/kpi-reports/references/kpi-definitions.md). For project-specific PML/forms/DBOUTPUT/DBLISTING, it can load naming rules, EPC practices, BOM conventions, engineering specifications, and project decisions from [user-support/project-knowledge/](user-support/project-knowledge/README.md).
4. **Retrieves Specific Rules**: It finds that:
   * `.spec` returns a `DBREF` and requires querying its `.name` property to resolve to a string.
   * `.bore` is an attribute accessed with bare dot-notation (no parentheses `()`).

### Step 3: Payload Assembly & LLM API Call
Aura constructs the prompt payload sent to the LLM API provider. The prompt consists of:
* **Base Constraints (System Prompt)**: The entirety of [SKILL.md](SKILL.md) containing strict PML variable scoping rules (`!local` vs `!!global`), comments syntax constraints, and the pre-commit checklist.
* **Grounded Reference Context**: The specific database attribute rules extracted from Step 2.
* **Reusable Patterns, Drawing Intent, KPI Definitions, and Project Context**: Matching templates from [pml-coding-assistant/examples/pml-patterns/](pml-coding-assistant/examples/pml-patterns/README.md), Drawing-to-E3D guidance from [drawing-to-e3d/](drawing-to-e3d/README.md), KPI definitions from [user-support/kpi-reports/references/](user-support/kpi-reports/references/README.md) when reports are requested, and standards from [user-support/project-knowledge/](user-support/project-knowledge/README.md) when project grounding is needed.
* **User Input**: The user's query and the active element reference.

### Step 4: LLM Response & Execution
The LLM provider returns a high-precision, syntactically correct PML2 code snippet grounded strictly in the vault's guidelines:
```pml
$* Safe branch query
!branchSpecRef = !!CE.spec
!branchSpec    = !branchSpecRef.name
!branchBore    = !!CE.bore
$P Spec is |!branchSpec| and Bore is |!branchBore|
```
Aura's embedded execution engine runs this PML script directly inside the active AVEVA E3D session in-process, outputting the result instantly onto Aura's UI chat panel.

---

## ─── 3. Dynamic Knowledge Ingestion (Self-Compounding) ───

Aura is a **learning agent**. During pair-programming sessions inside E3D, if Aura encounters an undocumented database attribute or custom specifications:
1. Aura resolves the E3D piping or civil db conflict.
2. Aura prompts the engineer inside E3D: *"I've successfully mapped this custom piping attribute. Should I ingest this rule back into our company's shared Vault?"*
3. On approval, Aura's background file writer edits the shared Obsidian vault:
   * Updates [aveva_introduction_to_attributes.md](pml-coding-assistant/references/database/aveva_introduction_to_attributes.md) with the new mapping.
   * Adds reusable PML templates under [pml-coding-assistant/examples/pml-patterns/](pml-coding-assistant/examples/pml-patterns/README.md), Drawing-to-E3D interpretation patterns under [drawing-to-e3d/](drawing-to-e3d/README.md) when they improve model generation, generated dashboard packages under [user-support/kpi-reports/](user-support/kpi-reports/README.md) when requested, or project standards/decisions under [user-support/project-knowledge/](user-support/project-knowledge/README.md), depending on the discovery. KPI packages use a Markdown wrapper, `report.json`, an interactive HTML dashboard, JSON data, static summary, and CSV exports.
   * Appends an entry to [log.md](log.md) marking the action as `ingest`.
   * Automatically executes `python3 pml-coding-assistant/scripts/validate_skill_structure.py` to ensure the shared vault remains perfectly healthy and has zero broken paths.

---

## ─── 4. Key Enterprise Benefits ───

### 🚀 A. Zero-Compile Hotfixes
If AVEVA E3D updates its core engine, or your company adds custom user attributes (UDAs), you do not need to recompile or redeploy the C# Add-in executable. You simply edit the shared Obsidian vault. On the next API call, Aura reads the new rules and instantly updates its capabilities.

### 🛡️ B. Offline and Private Deployment
For engineering companies with strict IP requirements, the shared Obsidian vault and the LLM API provider can be hosted 100% locally. By pointing Aura to a local **Ollama** or **LM Studio** server (running an offline coding model like Qwen-2.5-Coder), Aura remains fully functional without sending a single byte of proprietary piping specifications or code outside the corporate network.

### 📊 C. Auditing & Safety
Because every script generated by Aura traces back to a specific markdown reference in the vault, engineering managers can review, edit, and restrict the knowledge base. If Aura writes an unsafe macro, editing that specific Markdown page instantly prevents Aura from generating that mistake again across the entire company.
