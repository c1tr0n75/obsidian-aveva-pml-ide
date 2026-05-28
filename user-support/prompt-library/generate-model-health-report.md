# Generate Model Health Report

Use this prompt when you want an AI agent to create a model-health KPI report package.

```text
Generate a model-health KPI report from the provided AVEVA E3D DB output listing.

Use the report package standard in user-support/kpi-reports/README.md.
Ground KPI meanings in user-support/kpi-reports/references/kpi-definitions.md.
If project-specific thresholds are needed, consult user-support/project-knowledge/dashboard-kpi-standards.md.

Deliver:
- README.md wrapper with iframe
- report.json
- interactive HTML dashboard
- parsed data JSON
- summary.md
- CSV exports for metrics and anomalies

Validate with:
- python3 pml-coding-assistant/scripts/validate_skill_structure.py
```
