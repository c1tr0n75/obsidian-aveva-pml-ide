# Aura: Embedded E3D AI Agent & Vault-Grounded Intelligence

This document details the system architecture, prompt lifecycle, and operational workflow of **Aura**—the AI Agent embedded directly inside **AVEVA E3D Design**—and how it uses this Obsidian repository as its core knowledge graph and grounding engine.

---

## ─── 1. Core Concept: Aura & The Obsidian Engine ───

Inside AVEVA E3D Design, **Aura** serves as an intelligent, conversational copilot for piping, civil, electrical, and structural CAD engineers. 

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
   │ references/ | examples/ | project-knowledge/ | SKILL.md | log.md │
   └───────────────────────────────┬───────────────────────────────┘
                                   │
                     (2. Assemble Grounded Prompt)
                                   ▼
                   ┌───────────────────────────────┐
                   │       LLM API Provider        │
                   │     (Gemini, Claude, GPT)     │
                   └───────────────┬───────────────┘
                                   │
                   (3. High-Precision PML2 Code block)
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
1. **Scans Indices**: It checks [database-data-model-index.md](references/database/database-data-model-index.md) to locate where `BRANCH` attributes are defined.
2. **Drills Reference Sheet**: It loads the corresponding split reference files under `references/database/` and [aveva_introduction_to_attributes.md](references/database/aveva_introduction_to_attributes.md) for the `BRANCH` element type.
3. **Loads Project Context When Needed**: For project-specific requests, it can also load relevant naming rules, EPC practices, BOM conventions, or engineering specifications from [project-knowledge/](project-knowledge/README.md).
4. **Retrieves Specific Rules**: It finds that:
   * `.spec` returns a `DBREF` and requires querying its `.name` property to resolve to a string.
   * `.bore` is an attribute accessed with bare dot-notation (no parentheses `()`).

### Step 3: Payload Assembly & LLM API Call
Aura constructs the prompt payload sent to the LLM API provider. The prompt consists of:
* **Base Constraints (System Prompt)**: The entirety of [SKILL.md](SKILL.md) containing strict PML variable scoping rules (`!local` vs `!!global`), comments syntax constraints, and the pre-commit checklist.
* **Grounded Reference Context**: The specific database attribute rules extracted from Step 2.
* **Reusable Patterns and Project Context**: Matching templates from [examples/pml-patterns/](examples/pml-patterns/README.md) and standards from [project-knowledge/](project-knowledge/README.md), when relevant.
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
   * Updates [aveva_introduction_to_attributes.md](references/database/aveva_introduction_to_attributes.md) with the new mapping.
   * Adds reusable PML templates under [examples/pml-patterns/](examples/pml-patterns/README.md), generated KPI dashboards under [examples/kpi-reports/](examples/kpi-reports/README.md), or project standards under [project-knowledge/](project-knowledge/README.md), depending on the discovery.
   * Appends an entry to [log.md](log.md) marking the action as `ingest`.
   * Automatically executes `python3 scripts/validate_skill_structure.py` to ensure the shared vault remains perfectly healthy and has zero broken paths.

---

## ─── 4. Key Enterprise Benefits ───

### 🚀 A. Zero-Compile Hotfixes
If AVEVA E3D updates its core engine, or your company adds custom user attributes (UDAs), you do not need to recompile or redeploy the C# Add-in executable. You simply edit the shared Obsidian vault. On the next API call, Aura reads the new rules and instantly updates its capabilities.

### 🛡️ B. Offline and Private Deployment
For engineering companies with strict IP requirements, the shared Obsidian vault and the LLM API provider can be hosted 100% locally. By pointing Aura to a local **Ollama** or **LM Studio** server (running an offline coding model like Qwen-2.5-Coder), Aura remains fully functional without sending a single byte of proprietary piping specifications or code outside the corporate network.

### 📊 C. Auditing & Safety
Because every script generated by Aura traces back to a specific markdown reference in the vault, engineering managers can review, edit, and restrict the knowledge base. If Aura writes an unsafe macro, editing that specific Markdown page instantly prevents Aura from generating that mistake again across the entire company.
