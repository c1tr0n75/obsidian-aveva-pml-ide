# User Support

This folder is the third, optional product area of the skill.

It contains user-requested KPI dashboards/reports, reusable report prompts, and project knowledge that can constrain generated PML/forms/DBOUTPUT/DBLISTING or document important project decisions over time.

## LLM Navigation

- [kpi-reports/](kpi-reports/README.md) - user-requested generated HTML dashboards, report packages, KPI references, and report-generation scripts.
- [project-knowledge/](project-knowledge/README.md) - optional project documentation, naming rules, engineering standards, dashboard thresholds, and project decisions.
- [prompt-library/](prompt-library/README.md) - reusable prompts for reports, PML review, project-standard extraction, and file-back workflows.

## Boundary

Load this folder when the user asks for dashboards, reports, exports, project-specific grounding, or project-life decision tracing. The PML coding assistant and Drawing-to-E3D workflows should remain usable without this folder unless the task explicitly needs project context.
