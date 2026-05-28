# KPI Definitions

These definitions standardize dashboard metrics used by generated report packages under [kpi-reports/](../README.md).

Each KPI should state its purpose, source fields, calculation, severity guidance, and limitations. Reports may adapt thresholds for a specific project, but any project-specific override belongs in [project-knowledge/dashboard-kpi-standards.md](../../project-knowledge/dashboard-kpi-standards.md).

## Model Health

| KPI | Purpose | Source Fields | Calculation | Default Severity |
| --- | --- | --- | --- | --- |
| Missing Position Count | Finds components that cannot be spatially reviewed. | `POS`, `HPOS`, `TPOS` | Count components without any parsed position field. | Warning when count > 0 |
| Unset SHOP Count | Finds fabrication split gaps. | `SHOP` | Count components where `SHOP` is absent or not `true`/`false`. | Info when low, warning when material |
| Missing Spec/Reference Count | Finds components with weak material traceability. | `SPRE`, `PSPE` | Count components without either reference. | Warning when count > 0 |
| Untagged Instrument Count | Finds instrument records without a visible tag. | `NEW INSTRUMENT /tag` | Count `INSTRUMENT` records with no name. | Warning when count > 0 |
| Heavy Branch Count | Finds branches that may need constructability review. | Branch child component count | Count branches above project threshold. Default demo threshold: 18 child components. | Review |

## MTO Readiness

| KPI | Purpose | Source Fields | Calculation | Default Severity |
| --- | --- | --- | --- | --- |
| Shop Component Count | Indicates fabrication workload. | `SHOP true` | Count components with `SHOP true`. | Informational |
| Field Component Count | Indicates site installation workload. | `SHOP false` | Count components with `SHOP false`. | Informational |
| Spool Record Count | Indicates spool/package presence. | `PSPOOL`, `PPLIST`, `PSLIST` | Count spool/list records. | Review if unexpectedly zero |
| Weld Count | Supports fabrication and inspection planning. | `NEW WELD` | Count weld components. | Informational |
| Flange/Gasket Count | Supports joint and consumables planning. | `NEW FLANGE`, `NEW GASKET` | Count flange and gasket components. | Review if mismatch is unexpected |
| Valve Count | Supports procurement and tagging focus. | `NEW VALVE` | Count valve components. | Informational |

## Spatial Density

| KPI | Purpose | Source Fields | Calculation | Default Severity |
| --- | --- | --- | --- | --- |
| Global Plotted Point Count | Indicates how much of the model can be shown in plan/elevation views. | `POS`, `HPOS`, `TPOS` | Count parsed global-looking coordinate pairs. | Warning if zero |
| Elevation Band Distribution | Finds high-density elevation bands. | Parsed `U`/`D` coordinate | Bin global points by elevation interval. | Review high-density bands |
| Plan Scatter Density | Finds route congestion and clustering. | Parsed `W/E` and `N/S` coordinates | Normalize global points into a plan view. | Review dense clusters |

## Route Complexity

| KPI | Purpose | Source Fields | Calculation | Default Severity |
| --- | --- | --- | --- | --- |
| Components Per Branch | Finds high-workload branches. | `NEW BRANCH`, child components | Count child components by branch context. | Review high outliers |
| Named Items Per Branch | Finds tag density. | Named child components | Count child components with explicit names. | Informational |
| Branch Vector Length | Gives a lightweight geometric proxy. | `HPOS`, `TPOS` | Straight-line distance between branch head and tail. | Not a pipe length calculation |

## Caveats

- DB listing reports are parsed from text, so they are only as complete as the listing source.
- Demo route length uses a straight-line branch vector from `HPOS` to `TPOS`; it is not a certified pipe length.
- Spatial dashboards filter out local relative points when a global plan view is needed.
- Thresholds should be reviewed with discipline leads before using report scores for formal project control.
