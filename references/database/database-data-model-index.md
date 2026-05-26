# Design Database Data Model — Index

Quick-lookup index for [aveva_ue_design_database_data_model.md](aveva_ue_design_database_data_model.md) (727 KB, ~24,000 lines).

Use this index to find which **section and line range** to load in the full data model file. Do not load the entire file — load only the section you need.

---

## Hierarchy Overviews

| Section | Line | Description |
|---------|------|-------------|
| Design Database Hierarchy - Top Level | 8 | Top-level hierarchy (WORLD, SITE, ZONE, etc.) |
| Equipment, Piping Hierarchy | 14 | Equipment and piping hierarchy including Hangers and HVAL |
| Piping Components | 18 | All piping component types (ELBO, BEND, TEE, VALVE, etc.) |
| HVAC Components | 49 | All HVAC component types (AHU, DAMPER, GRILLE, etc.) |
| Design Primitives | 88 | Primitive shapes (CYLINDER, BOX, CONE, DISH, etc.) |
| Structural Elements Hierarchy | 120 | Top-level structural hierarchy |
| Hierarchy Under Sections | 124 | Structural sections |
| Hierarchy Under Generic Sections | 128 | Generic sections |
| Hierarchy Under Primary Nodes | 132 | Primary nodes |
| Hierarchy Under Panels | 136 | Panels |

## Element Categories (with attributes, legal owners/members)

| Category | Line | Key Element Types |
|----------|------|-------------------|
| Accommodation | 140 | ACCPNT, ACCSET, BBLOCK, BLEVEL, BNDLIN, CEILIN, CLNPNGRID, CTWALL, DETGRP, DOOR, ELFITTING, FIXTUR, FLRCOV, FPFITTING, FURNIT, ROOM, WINDOW |
| Administrative | 2289 | ARCHIV, AREADEF, AREASET, AREAWLD, SITE, WORLD, ZONE |
| Aids and Grid | 2482 | AIDARC, AIDCIRCLE, AIDGROUP, AIDLINE, AIDPOINT, AIDTEXT, GRIDAXIS, GRIDLN, GRIDSYSTEM, GRIDWLD |
| Area | 2722 | APPLDATA, APPLDWORLD, APPDAREA, VOLMODEL, SVOLMODEL |
| Assembly | 3070 | ASMBLY, ASSMBR |
| Association | 3130 | ASSDEF, ASSOC, ASSOGP, ASSOWL |
| Cabling | 3511 | CABLE, CWAY, CWBRAN, CTRAY, CTFEAT |
| Common Reference Model | 4472 | CRMCUR, CRMPNT, CURVE, various surface/geometry types |
| Dataset | 5111 | DATDEF, various DT* types |
| Equipment | 5227 | EQUIPMENT, SUBEQUIPMENT, NOZZLE, EQUCOM |
| Functional Model | 5488 | FNC* types (FNCAW, FNCCW, FNCAREA, etc.) |
| Group | 5953 | GROUP, GPSET, GPWLD, GPITEM |
| Hanger Component | 6026 | HANGER, HCOMPT, HELEMENT, and many H* sub-types (HBRACKT, HCLIP, HROD, HSHOE, etc.) |
| Hull Curved | 7335 | C* curved hull types (CPANEL, CPLATE, CSEAM, etc.) |
| Hull General | 7799 | D* hull general types, H* hull types (HPANEL, HPLATE, etc.) |
| Hull Manufacturing | 9904 | FM* fabrication types, MF*, MW* types |
| Hull Planar | 10027 | I*, P* planar hull types |
| HVAC Component | 10605 | HVAC, AHU, BATTERY, DAMPER, GRILLE, OFST, SILENCER, TAPER, THREEWAY, and HV* sub-types |
| Ladder | 12413 | LADDER, LDRCAGE, LDREXT, LDRRUN, LDRSTR |
| Laser Modelling | 12836 | LOAPOINT, various laser-related types |
| Link | 12971 | LNLINK, LNFOLD, LNDESC, REVLNK |
| Pipe Piece | 13143 | PPIECE (pipe piece with bore, length, spec attributes) |
| Piping Component | 13259 | BEND, ELBOW, TEE, VALVE, REDUCER, FLANGE, GASKET, CAP, WELD, OLET, COUPLING, INSTRUMENT, FTUBE, VENT, CLOSURE, CROSS, TRAP, UNION, LJSE, DUCTING, FILTER, FBLIND, ATTACHMENT |
| Piping Fabrication | 15393 | PSPOOL, HSPOOLSET, PSLISTS |
| Piping Major Items | 15668 | PIPE, BRANCH, FITTING |
| Point Set | 16192 | DPSET, DPLINE, DPNT, PPOINT types |
| Primitive | 16327 | BOX, CYLINDER, CONE, DISH, SNOUT, CTORUS, RTORUS, PYRAMID, SLCYLINDER, POLYHEDRON, EXTRUSION, REVOLUTION |
| Primitive Hole | 17225 | Negative primitives: NBOX, NCYLINDER, NCONE, etc. |
| Reference | 17584 | REFDAT, REFGAR, REFGLN, REFGRD |
| Router | 17800 | Router-related elements |
| Schematic Design | 17849 | SDI area limit points and links |
| Stair | 17963 | STRTWR, STRWELL, TREAD, TREADSET, RUNGSET, RAILSET |
| Stress Analysis | 18309 | Stress analysis elements |
| Structural | 18441 | STRUCTURE, FRAMEWORK, SCTN, GENSEC, PANEL, FITTING, JOINT types, NODE types, BPANEL |
| Structural Detailing | 20500 | DG*, DT* detailing types |
| System | 23108 | SYSCDA, SYSGRP, SYSMDA, SYGPAR, SYGPWL |
| Template | 23208 | TMPLATE, TMAREA, TMRPSET, TMRRELEMENT |
| Terrain | 23396 | TRN* terrain types |
| Unclassified | 23662 | Miscellaneous element types |

## Most Commonly Used Elements (Quick Reference)

| Element Type | Code | Category | Line |
|---|---|---|---|
| Site | `SITE` | Administrative | ~2289 |
| Zone | `ZONE` | Administrative | ~2289 |
| Equipment | `EQUIPMENT` | Equipment | 5227 |
| Sub-Equipment | `SUBEQUIPMENT` | Equipment | 5227 |
| Nozzle | `NOZZLE` | Equipment | 5227 |
| Pipe | `PIPE` | Piping Major Items | 15668 |
| Branch | `BRANCH` | Piping Major Items | 15668 |
| Pipe Piece | `PPIECE` | Pipe Piece | 13143 |
| Valve | `VALVE` | Piping Component | 13259 |
| Elbow | `ELBOW` | Piping Component | 13259 |
| Tee | `TEE` | Piping Component | 13259 |
| Flange | `FLANGE` | Piping Component | 13259 |
| Reducer | `REDUCER` | Piping Component | 13259 |
| Bend | `BEND` | Piping Component | 13259 |
| Instrument | `INSTRUMENT` | Piping Component | 13259 |
| Structure | `STRUCTURE` | Structural | 18441 |
| Section | `SCTN` | Structural | 18441 |
| Generic Section | `GENSEC` | Structural | 18441 |
| Panel | `PANEL` | Structural | 18441 |
| HVAC | `HVAC` | HVAC Component | 10605 |
| Cable Way | `CWAY` | Cabling | 3511 |
| Hanger | `HANGER` | Hanger Component | 6026 |
| Support | `SUPPORT` | Hanger Component | 6026 |

## Usage

To look up attributes for a specific element, search the full file (`aveva_ue_design_database_data_model.md`) for the element heading, e.g.:
- `### Pipe Element` → finds the PIPE element with its attributes table and legal owners/members
- `### Branch Element` → finds BRANCH
- `### Equipment Element` → finds EQUIPMENT
