# Generate MTO Readiness Report

Use this prompt when you want an AI agent to create a construction/material readiness report.

```text
Generate an MTO readiness dashboard from the provided AVEVA E3D DB output listing.

Use KPI definitions from user-support/kpi-reports/references/kpi-definitions.md and project rules from user-support/project-knowledge/mto-rules.md.
Focus on spool records, SHOP split, welds, flanges, gaskets, valves, instruments, missing references, and route workload.

Create a complete package under user-support/kpi-reports/<slug>/:
- README.md
- report.json
- <slug>.html
- <slug>-data.json
- summary.md
- exports/metrics.csv
- exports/mto-signals.csv
- exports/route-readiness.csv
```
