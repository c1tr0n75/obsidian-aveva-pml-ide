# Piping Good Practices

Use this page to collect project-specific piping modeling practices that should influence generated PML and KPI dashboards.

## Starter Practices

- Keep branch head and tail positions meaningful for review, even when detailed components are still evolving.
- Review branches with unusually high component counts for constructability and maintainability.
- Keep valves and instruments tagged consistently so they can be traced in reports and line lists.
- Preserve fabrication split data (`SHOP true` / `SHOP false`) when preparing construction and MTO dashboards.
- Treat generated route length metrics as screening signals unless the calculation is grounded in verified geometric methods.

## Report Links

Relevant report family:
- [MTO readiness reports](../kpi-reports/README.md)
- [Model health reports](../kpi-reports/README.md)
