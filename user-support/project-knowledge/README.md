# Project Knowledge

This folder contains optional project, company, and engineering context that grounds the agent beyond raw PML syntax.

Use this folder when the user wants the skill to respect project documentation while generating PML functions, forms, DBOUTPUT, DBLISTING, Drawing-to-E3D model intent, reports, or explanations. The agent should not assume project knowledge exists; it should load this folder when the user asks for project-specific behavior or when a task clearly depends on stored project rules.

Use it for:
- Naming rules and tag conventions.
- Engineering good practices and EPC workflows.
- Bills of materials and material take-off conventions.
- Mechanical, piping, structural, civil, electrical, or instrumentation specifications.
- Client/project standards that should influence generated PML, reports, and explanations.
- Important project decisions, AI-agent modifications, and engineering choices that should be traced over the project life.

## Navigation

- [naming-rules.md](naming-rules.md) - project naming and tag conventions.
- [piping-good-practices.md](piping-good-practices.md) - piping engineering practices.
- [mto-rules.md](mto-rules.md) - material take-off conventions.
- [dashboard-kpi-standards.md](dashboard-kpi-standards.md) - thresholds for user-requested reports.
- [epc-deliverables.md](epc-deliverables.md) - EPC deliverable context.
- [project-decisions.md](project-decisions.md) - project-life decision and modification trace.

Keep documents focused, linked, and dated where useful. When a rule becomes executable or reusable as PML, add a runnable template under [pml-coding-assistant/examples/pml-patterns/](../../pml-coding-assistant/examples/pml-patterns/README.md). When a decision changes how models, PML, or reports should be generated, record it in [project-decisions.md](project-decisions.md).
