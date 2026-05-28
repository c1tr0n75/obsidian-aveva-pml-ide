# Drawing-to-E3D Validation

Validation proves that generated PML/PML2 created or queried the intended AVEVA E3D model content.

## Validation Outputs

Use validation artifacts to answer:

- What did the agent extract from the input evidence?
- What PML/PML2 did it generate?
- What did E3D actually create or return?
- Which items are missing, ambiguous, conflicting, or still manual-review only?
- Which project rules were used from [user-support/project-knowledge/](../../user-support/project-knowledge/README.md)?

## Preferred Methods

- DBOUTPUT or DBLISTING scripts generated from the reviewed model intent.
- Comparison between expected model intent and actual DBOUTPUT/DBLISTING.
- Static summaries for Obsidian review.
- Optional generated dashboards under [user-support/kpi-reports/](../../user-support/kpi-reports/README.md) when the user asks for interactive KPIs or visual reports.

## Traceability

Each validation package should preserve links between:

- Source drawing, table, note, or unstructured input.
- Extracted model intent item.
- Generated PML/PML2 file.
- Actual DBOUTPUT/DBLISTING result.
- Optional KPI/report package.
- Project decision note, if an important project choice was made.
