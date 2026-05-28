# Model Intent

Model intent is the auditable bridge between engineering inputs and AVEVA E3D PML/PML2.

The agent should create or update model intent before generating modifying PML. This gives engineers a reviewable representation of what the agent understood from drawings, P&IDs, PFDs, line lists, tables, PDFs, or notes.

## Minimal Shape

```json
{
  "sourceSet": [],
  "equipment": [],
  "pipelines": [],
  "branches": [],
  "instruments": [],
  "supports": [],
  "modelActions": [],
  "assumptions": [],
  "missingData": [],
  "manualReview": [],
  "traceability": [],
  "confidence": {}
}
```

## Required Principles

- Every proposed E3D element should trace back to source evidence.
- Model intent should separate facts, assumptions, generated defaults, and missing data.
- Geometry and coordinates must be marked approximate unless supported by reliable source data.
- Modifying PML should only be generated from reviewed or clearly qualified model intent.

## Common Fields

- `sourceSet`: input files, drawings, sheets, revisions, extracts, or DBOUTPUT files used.
- `modelActions`: create, query, validate, update, or report actions proposed for E3D.
- `traceability`: links from each proposed element to source evidence and generated PML.
- `confidence`: extraction confidence by item, field, or discipline.
- `manualReview`: items that should not be automated without engineer approval.
