# File Back Discovery

Use this prompt when a solved issue should become durable vault knowledge.

```text
File this solved discovery back into the vault.

Choose the correct destination:
- pml-coding-assistant/references/ for durable PML API, syntax, DB, and UI knowledge
- pml-coding-assistant/examples/pml-patterns/ for runnable PML templates
- drawing-to-e3d/ for drawing interpretation, model intent, generation recipes, or validation workflows
- user-support/kpi-reports/ for generated report packages
- user-support/project-knowledge/ for project/client standards, engineering practices, and project decisions

Update any relevant index or README.
Append a log.md entry using:
## [YYYY-MM-DD] ingest | <title>

Run:
python3 pml-coding-assistant/scripts/validate_skill_structure.py
```
