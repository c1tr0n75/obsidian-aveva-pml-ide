# Dashboard KPI Standards

This page records project-specific dashboard thresholds and reporting conventions.

For reusable KPI definitions, see [kpi-definitions.md](../kpi-reports/references/kpi-definitions.md).

## Default Thresholds

| Signal | Default Threshold | Action |
| --- | --- | --- |
| Missing positions | `> 0` | Review before spatial dashboard sign-off |
| Unset `SHOP` values | `> 0` | Review before MTO/construction dashboard issue |
| Missing spec/reference | `> 0` | Review for material traceability |
| Heavy branch | `>= 18` components | Review constructability |
| Global plotted points | `= 0` | Spatial view is not usable |

## Report Package Requirements

Each KPI report package should include:
- `README.md`
- `report.json`
- Interactive `.html`
- Parsed data `.json`
- `summary.md`
- `exports/*.csv`

## Audience Views

Dashboards should separate signals for:
- Executive scanning: scores, top risks, and readiness.
- Engineering review: source lines, element names, component tables.
- QA/QC: anomaly registers and suggested actions.
