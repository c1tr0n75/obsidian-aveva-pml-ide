# Drawing-to-E3D

This folder is the second core area of the skill. It documents how engineering inputs become auditable model intent and then reviewable AVEVA E3D PML/PML2.

Use this folder when the user provides AutoCAD 2D drawings, P&IDs, PFDs, line lists, PDFs, tables, sketches, screenshots, or other structured or unstructured engineering inputs and asks the agent to help generate an E3D design model.

## LLM Navigation

1. [input-interpretation/](input-interpretation/README.md) - how to read drawing evidence, tags, tables, symbols, layers, blocks, and unstructured notes.
2. [model-intent/](model-intent/README.md) - neutral intermediate schema for equipment, pipelines, branches, instruments, supports, assumptions, missing data, confidence, and traceability.
3. [generation-recipes/](generation-recipes/README.md) - how reviewed model intent maps to PML/PML2 creation, query, DBOUTPUT, DBLISTING, and validation scripts.
4. [validation/](validation/README.md) - how to confirm generated model content using DBOUTPUT/DBLISTING, comparison reports, and optional KPI dashboards.

## Workflow

```text
engineering input
  -> extracted evidence
  -> model intent
  -> engineering review
  -> generated PML/PML2
  -> E3D execution
  -> DBOUTPUT/DBLISTING validation
  -> optional KPI report or project decision note
```

The agent must not silently invent missing engineering data. Unknown bore, spec, coordinates, service, owner, branch connection, instrument association, support relation, or tag meaning must be recorded as missing data or manual review before generating modifying PML.

## Folder Boundary

- Reusable PML/PML2 implementation patterns belong in [pml-coding-assistant/examples/pml-patterns/](../pml-coding-assistant/examples/pml-patterns/README.md).
- Generated KPI/report packages belong in [user-support/kpi-reports/](../user-support/kpi-reports/README.md), only when requested or useful for validation.
- Project standards and project-life decisions belong in [user-support/project-knowledge/](../user-support/project-knowledge/README.md).
- Core PML syntax, object methods, database attributes, and form rules remain in [SKILL.md](../SKILL.md) and [pml-coding-assistant/references/](../pml-coding-assistant/references/object-type-index.md).
