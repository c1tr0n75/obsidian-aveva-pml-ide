# AVEVA™ Unified Engineering — Design Database Reference

> © 2015-2026 AVEVA Group Limited and its subsidiaries. All rights reserved.

---


## Design Database Hierarchy - Top Level

The Top Level hierarchy of the Design database is displayed below:

### Area Definition Element (`AREADEF`)

## Equipment, Piping Hierarchy - including Hangers and HVAL

The Equipment and Piping hierarchy of the Design database is displayed below:

## Piping Components

The Piping components of the Design database are displayed below:
ELBO
BEND
TEE
VALVE
REDUCER
FLANGE
GASKET
VENT
WELDOLET
BLIND FLANGE
FILTER
COUPLING
STANDARD HOOK-UP
THREE-WAY VALVE
CAP
WELD
FIXED TUBE LENGTH
FOUR-WAY VALVE
UNION
TRAP
LAP-JOINT STUB END
DUCTING
CROSS
CLOSURE
ATTACHMENT POINT
INSTRUMENT
GENERAL PIPE COMPONENT

## HVAC Components

The HVAC components of the Design database are displayed below:
AHU
BATTERY
Air handling unit
OFST
Offset
PLATE
BCRO
Branch connector
PLENUM
COWL
SILENCER
DAMPER
SKIRT
FLEX
Flexible bend or tube
SPLITTER
GASKET
STIFFENER
GRILLE
STRT
HACC
Access panel
TAPER
HFAN
Centrifugal fan
THREEWAY
HSADDLE
IDAM
Internal damper
Straight
TP
Test point
TRNS
Transformation
MESH

## Design Primitives

The design primitives of the Design database are displayed below.
These all have negative equivalents which can be owned by positive primitives:
CYLINDER
BOX
PYRAMID
SNOUT
CONE
DISH
CIRCULAR TORUS
RECTANGULAR TORUS
SLOPE-BOTTOMED CYLINDER
Other positive primitives
POLYHEDRON which can own
• POLYGON
EXTRUSION which can own
• LOOP which can own
• VERTEX
SOLID OF REVOLUTION which can own
• LOOP which can own
• VERTEX
Other negative primitives
EXTRUSION which can own
• LOOP which can own
• VERTEX
SOLID OF REVOLUTION which can own
• LOOP which can own
• VERTEX
Descriptions of the primitives and the workflow for creating them are in the topic Primitives. See E3D
Design>Design and Modelling>Equipment>Model Equipment.

## Structural Elements Hierarchy - Top Level

The structural elements hierarchy at the top level of the Design database is displayed below:

## Hierarchy Under Sections

The hierarchy under sections of the Design database is displayed below:

## Hierarchy Under Generic Sections

The hierarchy under generic sections of the Design database is displayed below

## Hierarchy Under Primary Nodes

The hierarchy under primary nodes of the Design database is displayed below:

## Hierarchy Under Panels

The hierarchy under panels of the Design database is displayed below:

## Elements in Accommodation Category

All data in the Design database is stored in elements in a strict hierarchy. Every element has a type and each type
determines the attributes available on the element. Refer to `references/database_navigation_query_syntax.md` for further
information on database concepts.
Categories are administrative elements which allow you to segregate particular types of design data into logical
parts of the hierarchy. For more information on Categories and associated administrative elements, refer to
Catalogs and Specifications Reference.

### Access Point Element (`ACCPNT`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Function` | Function |
| `AccType` | Access type |
| `RefLevel` | Reference Level |
| `OpnSize` | Opening size |
| `Position` | Position |
| `Orientation` | Orientation |
| `AccRef` | Reference to Access element |


### Access Point Set Element (`ACCSET`)
**Legal Members:** None


### Access Point Set Element (`ACCSET`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Function` | Function |
| `Description` | Description of the element |

**Legal Owners:** `BLEVEL`, `OPENSPACE`, `ROOM`


### Restricted Area Element (`RSTAREA`)

### Stair Tower Element (`STRTWR`)

### Stairwell Element (`STRWELL`)

### Access Point Element (`ACCPNT`)

### Building Block Element (`BBLOCK`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Number` | Number |
| `Function` | Function |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `NAngle` | North angle |
| `Position` | Position |
| `Orientation` | Orientation |
| `Heidefault` | Default Height value |
| `AreaReference` | Area reference |
| `LabOffset` | Label offset |
| `Uuidia` | Universally unique identifier |


### World Element (`WORLD`)
**Legal Members:** `AREADEF`, `BLEVEL`, `BNDLIN`, `DETGRP`, `OPENSPACE`, `RSTAREA`


### Routing Volume Element (`RUTVOLUME`)

### Stairwell Element (`STRWELL`)

### Building Level Element (`BLEVEL`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Number` | Number |
| `Function` | Function |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Heidefault` | Default Height value |
| `NAngle` | North angle |
| `Elevation` | Elevation |
| `AreaReference` | Area reference |
| `DFlRHeight` | Default Floor Height |
| `DClnHeight` | Default Ceiling Height |
| `XYOffset` | XY offset |
| `LabOffset` | Label offset |
| `Uuidia` | Universally unique identifier |


### Building Block Element (`BBLOCK`)
**Legal Members:** `ACCSET`, `AREADEF`, `BNDLIN`, `DETGRP`, `INVLST`, `OPENSPACE`, `REFDAT`, `ROOM`, `RSTAREA`, `RUTVOLUME`


### Boundary Element Set Element (`SPBSET`)

### Stairwell Element (`STRWELL`)

### Boundary Line Element (`BNDLIN`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Number` | Number |
| `Function` | Function |
| `Description` | Description of the element |
| `Level` | Drawing level |
| `Position` | Position |
| `Orientation` | Orientation |

**Legal Owners:** `BBLOCK`, `BLEVEL`, `CEILIN`, `CLNPNGRID`, `OPENSPACE`


### Room Element (`ROOM`)

### Restricted Area Element (`RSTAREA`)

### Stairwell Element (`STRWELL`)

### Loop Element (`LOOP`)

### Ceiling Element (`CEILIN`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Matref` | Material reference |
| `Position` | Position |
| `Orientation` | Orientation |
| `ClnType` | Ceiling Type |
| `ClnCode` | Ceiling Code |
| `ClnHeight` | Ceiling Height |
| `XYOffset` | XY offset |
| `AreaReference` | Area reference |
| `ClnVoid` | Ceiling Void Height |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `ColSchema` | Color Schema |
| `Knuckl` | True if knuckled |
| `LabOffset` | Label offset |


### Detail Group Element (`DETGRP`)
**Legal Members:** `AREADEF`, `BNDLIN`, `BPANEL`, `CLNPNGRID`, `ELFITTING`, `FPFITTING`, `HVACFITTING`


### Information Fitting Element (`INFITTING`)

### Panel Element (`PANEL`)

### Grid Cell Positioning Element (`CGRDCP`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `cellid` | Cell Identifier |


### Ceiling Grid Components Element (`CLNCGR`)
**Legal Members:** `ELFITTING`, `FPFITTING`


### HVAC Fitting Element (`HVACFITTING`)

### Information Fitting Element (`INFITTING`)

### Gridline Positioning Element (`CGRDLP`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `GrdLID` | Gridline Identifier |
| `GrdLXPR` | Proportion along X gridline from Gridline ID |
| `GrdLYPR` | Proportion along Y gridline from Gridline ID |


### Ceiling Grid Components Element (`CLNCGR`)
**Legal Members:** `ELFITTING`, `FPFITTING`


### HVAC Fitting Element (`HVACFITTING`)

### Information Fitting Element (`INFITTING`)

### Ceiling Grid Components Element (`CLNCGR`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### Planer Ceiling Grid Element (`CLNPNGRID`)
**Legal Members:** `CGRDCP`, `CGRDLP`, `CLNTIL`, `ELFITTING`, `FPFITTING`


### HVAC Fitting Element (`HVACFITTING`)

### Information Fitting Element (`INFITTING`)

### Ceiling Lattice Element (`CLNLATTICE`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### Planer Ceiling Grid Element (`CLNPNGRID`)

### Structural Generic Section Element (`GENSEC`)

### Planer Ceiling Grid Element (`CLNPNGRID`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `GAngle` | General Angle |
| `GXYOffset` | Grid XY Offset |
| `GrdXSpacing` | Grid X Spacing |
| `GrdYSpacing` | Grid Y Spacing |
| `ColSchema` | Color Schema |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Knuckl` | True if knuckled |
| `DCTilThk` | Default Ceiling Tile Thickness |
| `LabOffset` | Label offset |


### Ceiling Element (`CEILIN`)
**Legal Members:** `BNDLIN`, `CLNCGR`


### Ceiling Lattice Element (`CLNLATTICE`)

### Restraint Element (`RESTRAINT`)

### Ceiling Tile Element (`CLNTIL`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `cellid` | Cell Identifier |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `TAngle` | Tile Angle |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `LabOffset` | Label offset |


### Ceiling Grid Components Element (`CLNCGR`)
**Legal Members:** `ELFITTING`, `FPFITTING`, `HVACFITTING`


### Information Fitting Element (`INFITTING`)

### Template Element (`TMPLATE`)

### Constant Thickness Wall Element (`CTWALL`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Height` | Height |
| `WThickness` | Wall thickness |
| `WJusLine` | Wall Justification Line |
| `VAngle` | Angle from vertical |
| `BRadius` | Bend radius |
| `RoutReference` | Route reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `ColSchema` | Color Schema |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `HCRef` | Head connections |
| `TCRef` | Tail connections |
| `CloseFlag` | True if branch is closed |
| `Uuidia` | Universally unique identifier |


### Detail Group Element (`DETGRP`)

### Structure Element (`STRUCTURE`)
**Legal Members:** `HATTA`, `RPATH`, `TATTA`, `WLCOMPONENTS`, `WLFEAT`


### Wall Joints Element (`WLJNTS`)

### Wall Profile Set Element (`WLPRSE`)

### Detail Group Element (`DETGRP`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Number` | Number |
| `Purpose` | Description code word |
| `Function` | Function |
| `Description` | Description of the element |
| `DUnion` | DRAFT element union detail flag |

**Legal Owners:** `BBLOCK`, `BLEVEL`


### Open Space Element (`OPENSPACE`)

### Room Element (`ROOM`)

### Stairwell Element (`STRWELL`)
**Legal Members:** `CEILIN`, `CTWALL`, `DOOR`, `ELFITTING`, `FIXTUR`, `FLRCOV`, `FPFITTING`, `FURNIT`, `HANDRA`, `HVACFITTING`, `INFITTING`, `INSURQ`


### Ladder Element (`LADDER`)

### Window Element (`WINDOW`)

### Door Element (`DOOR`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `OpnSize` | Opening size |
| `WThickness` | Wall thickness |
| `ClrSize` | Clearance size |
| `Width` | Width |
| `Height` | Height |
| `HgSide` | Hinge side |
| `Swing` | Swing |
| `Leafs` | Number of door leafs |
| `LThickness` | Door leaf thickness |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `WaterTight` | Water Tight |
| `GasTight` | Gas Tight |
| `Position` | Position |
| `Orientation` | Orientation |
| `LabOffset` | Label offset |
| `Uuidia` | Universally unique identifier |


### Detail Group Element (`DETGRP`)

### Wall Openings Element (`WLOPEN`)
**Legal Members:** `DDSE`, `DPSET`


### Fixing Element (`FIXING`)

### Template Element (`TMPLATE`)

### Electrical Fitting Element (`ELFITTING`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Desparam` | Design parameters |
| `Position` | Position |
| `Orientation` | Orientation |
| `Matref` | Material reference |
| `ElRating` | Electrical Rating |
| `OpTemperature` | Operational temperature |
| `LabOffset` | Label offset |

**Legal Owners:** `CEILIN`, `CGRDCP`, `CGRDLP`, `CLNCGR`


### Ceiling Tile Element (`CLNTIL`)

### Detail Group Element (`DETGRP`)

### Wall Fittings Element (`WLFITTING`)
**Legal Members:** `DDSE`, `DPSET`


### Fixing Element (`FIXING`)

### Template Element (`TMPLATE`)

### External Framework Element (`EXTFRM`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `AssTmpReference` | Assembly Template Reference |


### Platform Element (`PLTFRM`)
**Legal Members:** `GENSEC`


### Panel Element (`PANEL`)

### Bent Plate Element (`BPANEL`)

### Floor Cover Cut Plane Element (`FCUTPLANE`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Number` | Number |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Function` | Function |
| `Position` | Position |
| `Cutplane` | Cutting plane normal |


### Floor Covering Element (`FLRCOV`)
**Legal Members:** None


### Fixture Element (`FIXTUR`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Position` | Position |
| `Orientation` | Orientation |
| `LabOffset` | Label offset |


### Detail Group Element (`DETGRP`)

### Wall Fittings Element (`WLFITTING`)
**Legal Members:** `DDSE`, `DPSET`


### Fixing Element (`FIXING`)

### Template Element (`TMPLATE`)

### Floor Covering Element (`FLRCOV`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Number` | Number |
| `Function` | Function |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `FlrType` | Floor Type |
| `FlrCode` | Floor Code |
| `ColSchema` | Color Schema |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `LabOffset` | Label offset |


### Detail Group Element (`DETGRP`)
**Legal Members:** `FCUTPLANE`


### Floor Covering Layer Element (`FLRLAY`)

### Loop Element (`LOOP`)

### Floor Covering Layer Element (`FLRLAY`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Number` | Number |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Function` | Function |
| `MatAngle` | Material Lay Angle |
| `Matref` | Material reference |
| `FllThk` | Floor layer thickness |
| `Fflext` | Edge Extension Around Floor layer |
| `MatWidth` | Material Width |
| `MatLength` | Material Length |
| `Matover` | Material Overlap |


### Floor Covering Element (`FLRCOV`)
**Legal Members:** None


### Fire Protection Fitting Element (`FPFITTING`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Spref` | Component spec reference |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Hazard` | Hazard |
| `LabOffset` | Label offset |

**Legal Owners:** `CEILIN`, `CGRDCP`, `CGRDLP`, `CLNCGR`


### Ceiling Tile Element (`CLNTIL`)

### Detail Group Element (`DETGRP`)

### Wall Fittings Element (`WLFITTING`)
**Legal Members:** `DDSE`, `FIXING`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)

### Furniture Element (`FURNIT`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Position` | Position |
| `Orientation` | Orientation |
| `LabOffset` | Label offset |


### Detail Group Element (`DETGRP`)

### Wall Fittings Element (`WLFITTING`)
**Legal Members:** `DDSE`, `DPSET`


### Fixing Element (`FIXING`)

### Template Element (`TMPLATE`)

### Grid Plane Element (`GRIDCY`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Radius` | Radius |
| `Level` | Drawing level |
| `Lvisibility` | Visibility flag |
| `IDPlane` | ID Plane |
| `Uuid` | Universally unique identifier |


### Grid Faces Element (`GRIDFACES`)

### Reference Grid Arc Element (`REFGAR`)

### Reference Grid Line Element (`REFGLN`)
XYSIZEAttributes
Name
Name of the element
Description
Description of the element
Position
Position
Orientation
Orientation
Level
Drawing level
RadiPlane
Radial plane flag
Lvisibility
Visibility flag
IDPlane
ID Plane
PLLIM
limited plane
XYSIZE
size array for grids
Uuid
Universally unique identifier

### Grid Plane Element (`GRIDPL`)
**Accommodation Element**


### Grid Elevations Element (`GRIDELEVATION`)

### Grid Faces Element (`GRIDFACES`)

### Reference Grid Arc Element (`REFGAR`)

### Reference Grid Line Element (`REFGLN`)

### Handrail Element (`HANDRA`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `RailHeight` | Heights of rails measured from path |
| `PostSpacing` | Default post spacing |
| `TangOffset` | Tangent offset |
| `EPostOffset` | End post tangent offset |
| `PostOffset` | Vertical post offset from the routing path |
| `ShowKPlate` | Show kickplate in default representation |
| `BRadius` | Bend radius |
| `RoutReference` | Route reference |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `HCRef` | Head connections |
| `TCRef` | Tail connections |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `ASLStandard` | ASL Standard Reference |
| `ASLSbStandard` | ASL Substandard Reference |
| `CloseFlag` | True if branch is closed |
| `AssTmpReference` | Assembly Template Reference |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Uuidia` | Universally unique identifier |

**Legal Owners:** `DETGRP`, `FRMWORK`, `LADDER`, `PLTFRM`, `STRFLT`


### Stair Landing Element (`STRLNG`)

### Structure Element (`STRUCTURE`)

### Subframework Element (`SBFRAMEWORK`)
**Legal Members:** `DDSE`, `HATTA`, `HRFEAT`, `HRKPSE`, `HRPNSE`, `POSTSE`, `RAILSET`


### Route Path Element (`RPATH`)

### Tail Attachment Point Element (`TATTA`)

### Height Change Node Element (`HNODE`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Spref` | Component spec reference |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `ConnReference` | References to other element |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Height` | Height |
| `SLOPEFlag` | SLOPEF (True if its a sloping wall else step change) |
| `TRIMTYPE` | CTWALL TRIM TYPE |


### Height Change Feature Element (`HTFEAT`)
**Legal Members:** None


### Handrail Features Element (`HRFEAT`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Matref` | Material reference |


### Handrail Element (`HANDRA`)

### Routing Volume Element (`RUTVOLUME`)

### Handrail Gate Element (`HRGATE`)

### Route Attachment Point Element (`RATTA`)

### Handrail Gate Element (`HRGATE`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `OpnSize` | Opening size |
| `ClrSize` | Clearance size |
| `Width` | Width |
| `Height` | Height |
| `HgSide` | Hinge side |
| `Swing` | Swing |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `HRJusLine` | Handrail Justification Line |
| `AssTmpReference` | Assembly Template Reference |
| `LabOffset` | Label offset |


### Handrail Features Element (`HRFEAT`)
**Legal Members:** `DDSE`, `DPSET`, `FIXING`


### Structural Generic Section Element (`GENSEC`)

### Template Element (`TMPLATE`)

### Kickplate Set Element (`HRKPSE`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Matref` | Material reference |


### Handrail Element (`HANDRA`)

### Routing Volume Element (`RUTVOLUME`)

### Kickplate Element (`KICKPL`)

### Handrail Panel Element (`HRPANE`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `EndPosition` | End Position |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `HRJusLine` | Handrail Justification Line |
| `PaneSize` | Panel Size |
| `LabOffset` | Label offset |
| `Bangle` | Beta angle |
| `Rise` | Tread Rise |
| `AssTmpReference` | Assembly Template Reference |


### Handrail Panel Set Element (`HRPNSE`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `FIXING`, `GENSEC`


### Panel Element (`PANEL`)

### Template Element (`TMPLATE`)

### Handrail Panel Set Element (`HRPNSE`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |


### Handrail Element (`HANDRA`)

### Routing Volume Element (`RUTVOLUME`)

### Handrail Panel Element (`HRPANE`)

### Handrail Post Element (`HRPOST`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Zoffset` | Z-offset |
| `Height` | Height |
| `PosRef` | Reference to point |
| `Pkdistance` | Proportional distance along Pline |
| `Zdistance` | Position in section |
| `Xoffset` | X-offset |
| `VertDirection` | VERTDI (true if Z axe is vertical) |
| `HRJusLine` | Handrail Justification Line |
| `Bangle` | Beta angle |
| `Length` | Length |
| `Drnstart` | Plane normal at start of SCTN/GENSEC |
| `Drnend` | Plane normal at end of SCTN/GENSEC |
| `AssTmpReference` | Assembly Template Reference |


### Post Set Element (`POSTSE`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `GENSEC`


### Panel Element (`PANEL`)

### Template Element (`TMPLATE`)

### Handrail Termination Element (`HRTERM`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Zoffset` | Z-offset |
| `Height` | Height |
| `PosRef` | Reference to point |
| `Pkdistance` | Proportional distance along Pline |
| `Zdistance` | Position in section |
| `Xoffset` | X-offset |
| `VertDirection` | VERTDI (true if Z axe is vertical) |
| `HRJusLine` | Handrail Justification Line |
| `Bangle` | Beta angle |
| `Length` | Length |
| `AssTmpReference` | Assembly Template Reference |
| `Angle` | Angle |
| `RAILTRim` | Rail Trim |


### Rail Set Element (`RAILSET`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `GENSEC`


### Panel Element (`PANEL`)

### Template Element (`TMPLATE`)

### Height Change Feature Element (`HTFEAT`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Height Change Node Element (`HNODE`)

### HVAC Fitting Element (`HVACFITTING`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Cref` | Connection reference |
| `Spref` | Component spec reference |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `OpTemperature` | Operational temperature |
| `LabOffset` | Label offset |

**Legal Owners:** `CEILIN`, `CGRDCP`, `CGRDLP`, `CLNCGR`


### Ceiling Tile Element (`CLNTIL`)

### Detail Group Element (`DETGRP`)

### Wall Fittings Element (`WLFITTING`)
**Legal Members:** `DDSE`, `DPSET`


### Fixing Element (`FIXING`)

### Template Element (`TMPLATE`)

### Information Fitting Element (`INFITTING`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Spref` | Component spec reference |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Infotext` | Infotext |
| `LabOffset` | Label offset |

**Legal Owners:** `CEILIN`, `CGRDCP`, `CGRDLP`, `CLNCGR`


### Ceiling Tile Element (`CLNTIL`)

### Detail Group Element (`DETGRP`)

### Wall Fittings Element (`WLFITTING`)
**Legal Members:** `DDSE`, `DPSET`


### Fixing Element (`FIXING`)

### Template Element (`TMPLATE`)

### Insulation Requirements Element (`INSURQ`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Number` | Number |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `InsuType` | Insulation type |
| `DINThickness` | Default insulation thickness |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Heidefault` | Default Height value |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `PinDensity` | Pin Density |
| `Matref` | Material reference |
| `Ispec` | Insulation spec reference |
| `LabOffset` | Label offset |


### Detail Group Element (`DETGRP`)

### Loop Element (`LOOP`)

### Platform Internal Framework Element (`INTFRM`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `GAngle` | General Angle |
| `GXYOffset` | Grid XY Offset |
| `Matref` | Material reference |
| `GrdXSpacing` | Grid X Spacing |
| `GrdYSpacing` | Grid Y Spacing |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `GrdPosition` | Grid Position |
| `GrdDirection` | Grid direction |
| `AssTmpReference` | Assembly Template Reference |


### Platform Element (`PLTFRM`)
**Legal Members:** `BPANEL`


### Structural Generic Section Element (`GENSEC`)

### Panel Element (`PANEL`)

### Inventory Element (`INVELEMENT`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Function` | Function |
| `SpInRef` | Reference to external inventory element |


### Inventory List Element (`INVLST`)
**Legal Members:** None


### Inventory List Element (`INVLST`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Function` | Function |
| `Description` | Description of the element |

**Legal Owners:** `BLEVEL`, `OPENSPACE`


### Room Element (`ROOM`)

### Restricted Area Element (`RSTAREA`)

### Stairwell Element (`STRWELL`)

### Inventory Element (`INVELEMENT`)

### Kickplate Element (`KICKPL`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Level` | Drawing level |
| `Bangle` | Beta angle |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `LMirror` | True if Mirroring required |
| `Jusline` | Justification Pline |
| `BendCorners` | Bend corners - true if fillet should be applied to the |
| `corners of kickplate` | Ydirection |
| `Preferred Y axis direction` | Drnstart |
| `Plane normal at start of SCTN/GENSEC` | Drnend |
| `Plane normal at end of SCTN/GENSEC` | StaRef |
| `Cable Start reference` | SPkdistance |
| `Proportional distance of start point along Pline` | Szdistance |
| `Start load point in section` | EndRef |
| `Cable End reference` | EPkdistance |
| `Proportional distance of end point along Pline` | Ezdistance |
| `End load point in section` | AssTmpReference |
| `Assembly Template Reference` |  |


### Kickplate Set Element (`HRKPSE`)
**Legal Members:** None


### Open Features Element (`OPENFE`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Platform Opening Element (`PLOPEN`)

### Route Attachment Point Element (`RATTA`)

### Open Space Element (`OPENSPACE`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Area` | Area |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Heidefault` | Default Height value |
| `NAngle` | North angle |
| `FlrHeight` | Floor Height |
| `XYOffset` | XY offset |
| `AreaReference` | Area reference |
| `Temperature` | Temperature |
| `MaxTemperature` | Maximum Temperature |
| `MinTemperature` | Minimum Temperature |
| `Humidity` | Design Humidity |
| `MaxHumidity` | Maximum Humidity |
| `MinHumidity` | Minimum Humidity |
| `MaxWater` | Maximum Water Level |
| `AirChangeRate` | Air Change Rate |
| `Occupancy` | Occupancy |
| `Lighting` | Lighting requirements |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `MaxArea` | Maximum area |
| `MinArea` | Minimum area |
| `MaxVolume` | Maximum Volume |
| `MinVolume` | Minimum Volume |
| `ColSchema` | Color Schema |
| `DFlrType` | Default Floor Type |
| `DFlrCode` | Default Floor Code |
| `LabOffset` | Label offset |


### Building Block Element (`BBLOCK`)

### Building Level Element (`BLEVEL`)

### Room Element (`ROOM`)
**Legal Members:** `ACCSET`, `AREADEF`, `BNDLIN`, `DETGRP`, `INVLST`, `REFDAT`, `RSTAREA`, `RUTVOLUME`


### Boundary Element Set Element (`SPBSET`)

### Stairwell Element (`STRWELL`)

### Platform Features Element (`PLFEAT`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Platform Element (`PLTFRM`)
**Legal Members:** `FIXING`


### Platform Opening Element (`PLOPEN`)

### Route Attachment Point Element (`RATTA`)

### Platform Opening Element (`PLOPEN`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `WJusLine` | Wall Justification Line |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |


### Platform Features Element (`PLFEAT`)

### Open Features Element (`OPENFE`)

### Route Path Element (`RPATH`)

### Platform Element (`PLTFRM`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Level` | Drawing level |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `Thickn` | Thickness |
| `Headroom` | Headroom |
| `BRadius` | Bend radius |
| `RoutReference` | Route reference |
| `Desparam` | Design parameters |
| `CloseFlag` | True if branch is closed |
| `ASLStandard` | ASL Standard Reference |
| `ASLSbStandard` | ASL Substandard Reference |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `AssTmpReference` | Assembly Template Reference |
| `LabOffset` | Label offset |


### Structure Element (`STRUCTURE`)
**Legal Members:** `DDSE`, `EXTFRM`, `HANDRA`, `INTFRM`, `PLFEAT`


### Plating Grid Element (`PLTGRD`)

### Route Path Element (`RPATH`)

### Plating Grid Element (`PLTGRD`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `GAngle` | General Angle |
| `GXYOffset` | Grid XY Offset |
| `Matref` | Material reference |
| `Xoffset` | X-offset |
| `GrdXSpacing` | Grid X Spacing |
| `GrdYSpacing` | Grid Y Spacing |
| `RadiSpacing` | Radius Spacing |
| `AnglSpacing` | ANGLE Spacing |
| `BNDOFF` | Offset from boundary |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `LabOffset` | Label offset |
| `GrdPosition` | Grid Position |
| `GrdDirection` | Grid direction |
| `AssTmpReference` | Assembly Template Reference |


### Platform Element (`PLTFRM`)
**Legal Members:** `BPANEL`


### Structural Generic Section Element (`GENSEC`)

### Panel Element (`PANEL`)

### Post Set Element (`POSTSE`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Matref` | Material reference |


### Handrail Element (`HANDRA`)

### Routing Volume Element (`RUTVOLUME`)

### Handrail Post Element (`HRPOST`)

### Rail Element (`RAIL`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Level` | Drawing level |
| `Bangle` | Beta angle |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `LMirror` | True if Mirroring required |
| `Jusline` | Justification Pline |
| `Ydirection` | Preferred Y axis direction |
| `Drnstart` | Plane normal at start of SCTN/GENSEC |
| `Drnend` | Plane normal at end of SCTN/GENSEC |
| `StaRef` | Cable Start reference |
| `SPkdistance` | Proportional distance of start point along Pline |
| `Szdistance` | Start load point in section |
| `EndRef` | Cable End reference |
| `EPkdistance` | Proportional distance of end point along Pline |
| `Ezdistance` | End load point in section |
| `Radsetflag` | Radius set flag - ignore Radius values if FALSE |
| `AssTmpReference` | Assembly Template Reference |


### Rail Set Element (`RAILSET`)
**Legal Members:** None


### Rail Set Element (`RAILSET`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Matref` | Material reference |


### Handrail Element (`HANDRA`)

### Routing Volume Element (`RUTVOLUME`)
**Legal Members:** `HRTERM`


### Rail Element (`RAIL`)

### Template Element (`TMPLATE`)

### Route Attachment Point Element (`RATTA`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `ConnReference` | References to other element |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Level` | Drawing level |

**Legal Owners:** `HRFEAT`


### Open Features Element (`OPENFE`)

### Platform Features Element (`PLFEAT`)

### Wall Features Element (`WLFEAT`)
**Legal Members:** None


### Ref Data Group Element (`REFDAT`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |

**Legal Owners:** `BLEVEL`


### Open Space Element (`OPENSPACE`)

### Ref Data Group Element (`REFDAT`)

### Room Element (`ROOM`)

### Drawn Line Element (`DRAWING`)

### Ref Data Group Element (`REFDAT`)

### Reference Grid Arc Element (`REFGAR`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Lvisibility` | Visibility flag |
| `GrdRef` | Grid reference |


### Grid Plane Element (`GRIDCY`)

### Grid Plane Element (`GRIDPL`)
**Legal Members:** None


### Reference Grid Line Element (`REFGLN`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Lvisibility` | Visibility flag |
| `GrdRef` | Grid reference |


### Grid Plane Element (`GRIDCY`)

### Grid Plane Element (`GRIDPL`)
**Legal Members:** None


### Rung Ladder Gate Element (`RLGATE`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `Number` | Number |
| `Matref` | Material reference |
| `LabOffset` | Label offset |
| `HgSide` | Hinge side |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `AssTmpReference` | Assembly Template Reference |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |


### Rung Ladder Cage Element (`RLCAGE`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `GENSEC`


### Panel Element (`PANEL`)

### Template Element (`TMPLATE`)

### Room Element (`ROOM`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Heidefault` | Default Height value |
| `NAngle` | North angle |
| `FlrHeight` | Floor Height |
| `ClnHeight` | Ceiling Height |
| `XYOffset` | XY offset |
| `OccType` | Occupancy Type |
| `AreaReference` | Area reference |
| `ColSchema` | Color Schema |
| `Temperature` | Temperature |
| `MaxTemperature` | Maximum Temperature |
| `MinTemperature` | Minimum Temperature |
| `Humidity` | Design Humidity |
| `MaxHumidity` | Maximum Humidity |
| `MinHumidity` | Minimum Humidity |
| `Pressure` | Pressure |
| `MaxPressure` | Maximum Pressure |
| `MinPressure` | Minimum Pressure |
| `MaxWater` | Maximum Water Level |
| `AirChangeRate` | Air Change Rate |
| `Occupancy` | Occupancy |
| `Lighting` | Lighting requirements |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `WaterTight` | Water Tight |
| `GasTight` | Gas Tight |
| `MaxArea` | Maximum area |
| `MinArea` | Minimum area |
| `MaxVolume` | Maximum Volume |
| `MinVolume` | Minimum Volume |
| `DDoorSill` | Default Door Sill |
| `DWinSill` | Default Window Sill |
| `DClnType` | Default Ceiling Type |
| `DClnCode` | Default Ceiling Code |
| `DFlrType` | Default Floor Type |
| `DFlrCode` | Default Floor Code |
| `RoomType` | Room Type |
| `LabOffset` | Label offset |
| `Uuidia` | Universally unique identifier |
| `Accident` | Accident level radiation |
| `Production` | Production level radiation |
| `Maintenance` | Maintenance level radiation |


### Application Data Element (`APPLDATA`)

### Building Level Element (`BLEVEL`)

### Structure Element (`STRUCTURE`)
**Legal Members:** `ACCSET`, `AREADEF`, `BNDLIN`, `DETGRP`, `INVLST`, `OPENSPACE`, `REFDAT`, `RSTAREA`, `RUTVOLUME`


### Boundary Element Set Element (`SPBSET`)

### Stairwell Element (`STRWELL`)

### Routing Segment Element (`RSEG`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Bangle` | Beta angle |
| `LMirror` | True if Mirroring required |
| `Ydirection` | Preferred Y axis direction |
| `Drnstart` | Plane normal at start of SCTN/GENSEC |
| `Drnend` | Plane normal at end of SCTN/GENSEC |
| `StaRef` | Cable Start reference |
| `EndRef` | Cable End reference |


### Sequence of Segments Element (`SEGSEQ`)
**Legal Members:** None


### Restricted Area Element (`RSTAREA`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `HazType` | Hazard Description |
| `Position` | Position |
| `Orientation` | Orientation |
| `Heidefault` | Default Height value |
| `AreaReference` | Area reference |
| `LabOffset` | Label offset |

**Legal Owners:** `BBLOCK`


### Building Level Element (`BLEVEL`)

### Open Space Element (`OPENSPACE`)

### Room Element (`ROOM`)
**Legal Members:** `ACCSET`, `AREADEF`, `BNDLIN`


### Inventory List Element (`INVLST`)

### Boundary Element Set Element (`SPBSET`)

### Routing Volume Element (`RUTVOLUME`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `LabOffset` | Label offset |
| `Matref` | Material reference |

**Legal Owners:** `BBLOCK`


### Building Level Element (`BLEVEL`)

### Open Space Element (`OPENSPACE`)

### Room Element (`ROOM`)
**Legal Members:** `HATTA`, `HRFEAT`, `HRKPSE`, `HRPNSE`, `POSTSE`, `RAILSET`


### Route Path Element (`RPATH`)

### Tail Attachment Point Element (`TATTA`)

### Sequence of Segments Element (`SEGSEQ`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Cable Branch Element (`CABLE`)

### Cable Way Branch Element (`CWBRAN`)

### Routing Segment Element (`RSEG`)

### Boundary Reference Element (`SPBOU`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Function` | Function |
| `SpBRef` | Reference to boundary element |

**Legal Members:** None


### Boundary Element Set Element (`SPBSET`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Function` | Function |
| `Description` | Description of the element |

**Legal Owners:** `BLEVEL`, `OPENSPACE`


### Room Element (`ROOM`)

### Restricted Area Element (`RSTAREA`)

### Stairwell Element (`STRWELL`)
**Legal Members:** None


### Stairwell Element (`STRWELL`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Heidefault` | Default Height value |
| `StrCon` | Stair Configuration |
| `AreaReference` | Area reference |
| `ColSchema` | Color Schema |
| `CWidth` | Clearance Width |
| `Headroom` | Headroom |
| `HeadClearance` | Head Clearance |
| `FThickness` | Stair Flight Thickness |
| `OpHeight` | Operational Height |
| `OpWidth` | Operational Width |
| `OpLength` | Operational Length |
| `AccLevels` | Access Heights for Stairwell |
| `LndLevels` | Landing levels from owning element |
| `LevRfA` | References to levels serviced by stairwell |
| `Temperature` | Temperature |
| `MaxTemperature` | Maximum Temperature |
| `MinTemperature` | Minimum Temperature |
| `Humidity` | Design Humidity |
| `MaxHumidity` | Maximum Humidity |
| `MinHumidity` | Minimum Humidity |
| `Pressure` | Pressure |
| `MaxPressure` | Maximum Pressure |
| `MinPressure` | Minimum Pressure |
| `MaxWater` | Maximum Water Level |
| `AirChangeRate` | Air Change Rate |
| `Occupancy` | Occupancy |
| `Lighting` | Lighting requirements |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `WaterTight` | Water Tight |
| `GasTight` | Gas Tight |
| `DClnType` | Default Ceiling Type |
| `DClnCode` | Default Ceiling Code |
| `DFlrType` | Default Floor Type |
| `DFlrCode` | Default Floor Code |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `LabOffset` | Label offset |

**Legal Owners:** `BBLOCK`


### Building Level Element (`BLEVEL`)

### Open Space Element (`OPENSPACE`)

### Room Element (`ROOM`)
**Legal Members:** `ACCSET`, `AREADEF`, `BNDLIN`, `DETGRP`, `DDSE`, `INVLST`, `SPBSET`, `STRLNG`, `STRTWR`


### Stair Flight Element (`STRFLT`)
Material Element

### Use Material Element (`ERIAL`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Is TRUE for the cableway branch that is meant to be |
| `dressed. If value is FALSE, then CTMRTRL cannot be` | created under CWBRAN element. |
| `Return value` | BOOLEAN |
| `Rules and Assumptions` | User is prohibited to create CTMTRL under CWBRAN |
| `element which has the attribute set to FALSE.` |  |


### Window Element (`WINDOW`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `OpnSize` | Opening size |
| `WThickness` | Wall thickness |
| `ClrSize` | Clearance size |
| `Width` | Width |
| `Height` | Height |
| `HgSide` | Hinge side |
| `Swing` | Swing |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `WaterTight` | Water Tight |
| `GasTight` | Gas Tight |
| `Position` | Position |
| `Orientation` | Orientation |
| `LabOffset` | Label offset |
| `Uuidia` | Universally unique identifier |


### Detail Group Element (`DETGRP`)

### Wall Openings Element (`WLOPEN`)
**Legal Members:** `DDSE`, `DPSET`


### Fixing Element (`FIXING`)

### Template Element (`TMPLATE`)

### Wall Components Element (`WLCOMPONENTS`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Constant Thickness Wall Element (`CTWALL`)

### Wall Panel Element (`WLPANEL`)

### Wall Features Element (`WLFEAT`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Constant Thickness Wall Element (`CTWALL`)
**Legal Members:** `RATTA`


### Wall Fittings Element (`WLFITTING`)

### Wall Openings Element (`WLOPEN`)

### Wall Fittings Element (`WLFITTING`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `WJusLine` | Wall Justification Line |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `VDistance` | Vertical Distance |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |


### Wall Features Element (`WLFEAT`)
**Legal Members:** `ELFITTING`, `FIXTUR`, `FPFITTING`, `FURNIT`


### HVAC Fitting Element (`HVACFITTING`)

### Information Fitting Element (`INFITTING`)

### Wall Joints Element (`WLJNTS`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Constant Thickness Wall Element (`CTWALL`)

### Wall Joint Element (`WLJOIN`)

### Wall Joint Element (`WLJOIN`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Level` | Drawing level |
| `WJusLine` | Wall Justification Line |
| `LMirror` | True if Mirroring required |
| `Jusline` | Justification Pline |
| `Bangle` | Beta angle |
| `PosRef` | Reference to point |
| `Pkdistance` | Proportional distance along Pline |
| `Zdistance` | Position in section |
| `SDistance` | Vertical Distance of Start |
| `EDistance` | Vertical Distance of End |
| `Drnstart` | Plane normal at start of SCTN/GENSEC |
| `Drnend` | Plane normal at end of SCTN/GENSEC |


### Wall Joints Element (`WLJNTS`)
**Legal Members:** None


### Wall Openings Element (`WLOPEN`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `WJusLine` | Wall Justification Line |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `VDistance` | Vertical Distance |
| `VertDirection` | VERTDI (true if Z axe is vertical) |
| `OpnSize` | Opening size |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |


### Wall Features Element (`WLFEAT`)
**Legal Members:** `DOOR`


### Route Path Element (`RPATH`)

### Window Element (`WINDOW`)

### Wall Panel Element (`WLPANEL`)
**Accommodation Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `WJusLine` | Wall Justification Line |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `VDistance` | Vertical Distance |


### Wall Components Element (`WLCOMPONENTS`)

### Template Element (`TMPLATE`)

### Wall Profile Element (`WLPROF`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Spref` | Component spec reference |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Level` | Drawing level |
| `Bangle` | Beta angle |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `LMirror` | True if Mirroring required |
| `Jusline` | Justification Pline |
| `WJusLine` | Wall Justification Line |
| `Ydirection` | Preferred Y axis direction |
| `Drnstart` | Plane normal at start of SCTN/GENSEC |
| `Drnend` | Plane normal at end of SCTN/GENSEC |
| `StaRef` | Cable Start reference |
| `Pkdistance` | Proportional distance along Pline |
| `Szdistance` | Start load point in section |
| `EndRef` | Cable End reference |
| `EPkdistance` | Proportional distance of end point along Pline |
| `Ezdistance` | End load point in section |


### Wall Profile Set Element (`WLPRSE`)
**Legal Members:** None


### Wall Profile Set Element (`WLPRSE`)
**Accommodation Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Zdistance` | Position in section |
| `VDistance` | Vertical Distance |


### Constant Thickness Wall Element (`CTWALL`)

### Wall Profile Element (`WLPROF`)

## Elements in Administrative Category


### Conveyor Element (`CONVEYOR`)
**Administrative Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Pspec` | Pipe specification |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `BendMacReference` | Bending Machine reference |
| `DUnion` | DRAFT element union detail flag |
| `Module` | Module |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Strrefarray` | Structure references |
| `StrLimit` | Structure limit |
| `Fstatus` | Fstatus |
| `Facode` | Facode |


### Zone Element (`ZONE`)
**Legal Members:** `AIDGROUP`, `BOUNDARY`, `BUNDLE`, `CABLE`, `RBRAN`, `CWAY`, `DATUM`, `DDSE`, `DIMGROUP`, `DPSET`, `DRAWING`, `EQUIPMENT`, `HVAC`, `PIPE`, `PTRACK`, `PVOLUME`, `RESTRAINT`, `RPLANE`, `STRUCTURE`, `SUPPORT`, `TEXT`, `TRNMOD`


### Volume Model Element (`VOLMODEL`)

### External Geometry Element (`XGEOMETRY`)

### FEMZON Element (`FEMZON`)
**Administrative Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Pspec` | Pipe specification |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `BendMacReference` | Bending Machine reference |
| `DUnion` | DRAFT element union detail flag |
| `Module` | Module |
| `Stmf` | Template selection pointer |
| `Uuidia` | Universally unique identifier |
| `Rlstored` | Array of ROUTER saved rules |
| `Fstatus` | Fstatus |
| `Facode` | Facode |
| `SpcRef` | Reference to a space element |


### Finite Element Model World Element (`FEMWLD`)

### Hull Panel Element (`UPANEL`)
Description
The SITE is one level below WORLD and is the most significant element that can be created, deleted, copied or
moved. Each SITE may represent a geographical or administrative division of the plant.

### Site Element (`SITE`)
**Administrative Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Module` | Module |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Uuidia` | Universally unique identifier |
| `Rlstored` | Array of ROUTER saved rules |


### World Element (`WORLD`)
**Legal Members:** `AIDGROUP`, `BOUNDARY`, `DDSE`, `DIMGROUP`, `DPSET`, `DRAWING`, `GRDMODEL`, `TEXT`


### Terrain Model Element (`TRNMOD`)
Status Link World Element (STLNKW) - Design - Administrative

### Zone Element (`ZONE`)
**Administrative Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `StlPos` | Status Element reference |


### World Element (`WORLD`)
**Administrative Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Stext` | S Text string |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `BOUNDARY`, `CFLOOR`, `CSCREED`, `CWALL`, `DRAWING`, `EQUIPMENT`, `FRMWORK`, `GRDMODEL`, `HVAC`, `PIPE`, `PTRACK`, `RESTRAINT`, `SBFRAMEWORK`, `SITE`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SUPPORT`, `SVOLMODEL`

**Legal Members:** `None`, `Text Element (TEXT) - Design - Administrative`, `Description`, `TEXT is a general element that can occupy most positions in the hierarchy. It can be used to store additional`, `information about an owning or adjacent element.`


### Template Element (`TMPLATE`)

### Volume Model Element (`VOLMODEL`)

### Zone Element (`ZONE`)
**Administrative Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |

**Legal Members:** `None`, `World Element (WORLD) - Design - Accomodation`, `Description`, `The WORLD is the topmost level of the database hierarchy within which all other elements exist. It cannot be`, `deleted or copied in the same way that applies to say, a ZONE or a DRWG. Its existence is controlled by the`, `ADMINISTRATION module.`, `APPLDWORLD`, `AREAWLD`, `ASDFWL`, `ASSOWL`, `ASWLD`, `BBLOCK`, `BLOCK`, `BMFWRL`, `CMTWLD`, `COMWLD`, `CONWLD`, `CURWLD`, `CYMWRL`, `DEMOWL`, `DOWLD`, `HRDREF`, `DTWRLD`, `FEMWLD`, `FMWLD`, `FNCAW`, `FNCCW`, `FSPWRL`, `GPWLD`, `GRIDWLD`, `HBLWLD`, `HCMWLD`, `HMKWLD`, `ILPWRL`, `LINKWLD`, `MOGWLD`, `MWLWLD`, `PNTWLD`, `REVLWL`, `RLWLD`, `RSOWLD`, `SITE`, `SSOWLD`, `STDWLD`, `STLNKW`, `SYGPWL`, `TPWLD`


### Terrain Model World Element (`TRNWLD`)

### Distributed Attributes World Element (`XPIWLD`)
Description
The ZONE is the administrative element at the third level down the hierarchy. It may represent a geographical or
administrative division of the plant and can directly own Equipment, Civils, and Piping elements.

### Zone Element (`ZONE`)
**Administrative Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Pspec` | Pipe specification |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `BendMacReference` | Bending Machine reference |
| `DUnion` | DRAFT element union detail flag |
| `Module` | Module |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Offsrf` | Model offset datum |
| `Uuidia` | Universally unique identifier |
| `Rlstored` | Array of ROUTER saved rules |
| `Fstatus` | Fstatus |
| `Facode` | Facode |
| `SpcRef` | Reference to a space element |


### Application Data Element (`APPLDATA`)

### Site Element (`SITE`)
**Legal Members:** `AIDGROUP`, `BOUNDARY`, `BUNDLE`, `CABLE`, `RBRAN`, `CWAY`, `CONVEYOR`, `DATUM`, `DDSE`, `DIMGROUP`, `DPSET`, `DRAWING`, `EQUIPMENT`, `HVAC`, `JNTBOX`, `PIPE`, `PTRACK`, `PULLPIT`, `PVOLUME`, `RESTRAINT`, `RPLANE`, `STRUCTURE`, `SUPPORT`, `TEXT`, `TRNMOD`, `UPANEL`


### Volume Model Element (`VOLMODEL`)

### External Geometry Element (`XGEOMETRY`)

### Zone Element (`ZONE`)

## Elements in Aids and Grid Category


### Aid Group Element (`AIDGROUP`)
**Aids and Grid Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |

**Legal Owners:** `CONVEYOR`, `EQUIPMENT`, `FRMWORK`, `JNTBOX`, `PULLPIT`, `SITE`


### Structure Element (`STRUCTURE`)

### Substructure Element (`SUBSTRUCTURE`)

### Zone Element (`ZONE`)
**Legal Members:** `AIDARC`, `AIDCIRCLE`, `AIDLINE`


### Aid Point Element (`AIDPOINT`)

### Aid Text Element (`AIDTEXT`)

### Dimension Group Element (`DIMGROUP`)
**Aids and Grid Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |

**Legal Owners:** `CONVEYOR`, `EQUIPMENT`, `FRMWORK`, `JNTBOX`, `PULLPIT`, `SITE`


### Structure Element (`STRUCTURE`)

### Substructure Element (`SUBSTRUCTURE`)

### Zone Element (`ZONE`)

### Linear Dimension Element (`LINDIMENSION`)

### MLABEL Element (`MLABEL`)

### Elevation Label Element (`ELEVLB`)
**Aids and Grid Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `GrdLbl` | Planes Label |
| `StartId` | Start ID |
| `StepID` | Step ID |
| `GRDAXE` | Grid axes |


### Id Info Element (`IDINFO`)
**Legal Members:** None


### Face Label Element (`FACELB`)
**Aids and Grid Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `GrdLbl` | Planes Label |
| `StartId` | Start ID |
| `StepID` | Step ID |
| `GRDAXE` | Grid axes |


### Id Info Element (`IDINFO`)
**Legal Members:** None


### Grid Axis Element (`GRIDAXIS`)
**Aids and Grid Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `GRDAXE` | Grid axes |
| `GrdLbl` | Planes Label |
| `Uuid` | Universally unique identifier |


### Grid System Element (`GRIDSYSTEM`)

### Grid Plane Element (`GRIDLN`)

### Grid Elevations Element (`GRIDELEVATION`)
**Aids and Grid Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `GrdLbl` | Planes Label |
| `StartId` | Start ID |
| `StepID` | Step ID |
| `GRDAXE` | Grid axes |
| `Uuid` | Universally unique identifier |


### Reference Grid Element (`REFGRD`)

### Grid Plane Element (`GRIDPL`)

### Grid Faces Element (`GRIDFACES`)
**Aids and Grid Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `GrdLbl` | Planes Label |
| `StartId` | Start ID |
| `StepID` | Step ID |
| `GRDAXE` | Grid axes |
| `Uuid` | Universally unique identifier |


### Reference Grid Element (`REFGRD`)

### Grid Plane Element (`GRIDCY`)

### Grid Plane Element (`GRIDPL`)

### Grid Plane Element (`GRIDLN`)
**Aids and Grid Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `GRDOFF` | Grid offset |
| `GRDID` | Grid plane index |
| `Uuid` | Universally unique identifier |


### Grid Axis Element (`GRIDAXIS`)
**Legal Members:** None


### Grid System Element (`GRIDSYSTEM`)
**Aids and Grid Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Skey` | Symbol key |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |


### Grid World Element (`GRIDWLD`)

### Grid Axis Element (`GRIDAXIS`)

### Grid World Element (`GRIDWLD`)
**Aids and Grid Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)
**Legal Members:** `GRIDSYSTEM`


### Id Info Element (`IDINFO`)

### Reference Grid Element (`REFGRD`)

### Id Info Element (`IDINFO`)
**Aids and Grid Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Grid World Element (`GRIDWLD`)

### Elevation Label Element (`ELEVLB`)

### Face Label Element (`FACELB`)

### Reference Grid Element (`REFGRD`)
**Aids and Grid Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Skey` | Symbol key |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |


### Grid World Element (`GRIDWLD`)

### Grid Elevations Element (`GRIDELEVATION`)

### Grid Faces Element (`GRIDFACES`)

## Elements in Area Category


### Area Box Element (`ABOX`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Xlength` | X length |
| `Ylength` | Y length |
| `Zlength` | Line length |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)
**Legal Members:** None


### Area Cone Element (`ACONE`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Dtop` | Top diameter |
| `Dbottom` | Bottom diameter |
| `Height` | Height |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)
**Legal Members:** None


### Area Circular Torus Element (`ACTORUS`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Rinside` | Inside radius |
| `Routside` | Outside radius |
| `Angle` | Angle |
| `The origin of the Area Circular Torus is at the center of the circular arcs of radii RINSI and ROUTS, and is defined` | in the X-Y plane. |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)
**Legal Members:** None


### Area Cylinder Element (`ACYLINDER`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Diameter` | Diameter |
| `Height` | Height |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)
**Legal Members:** None


### Area Dish Element (`ADISH`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Diameter` | Diameter |
| `Height` | Height |
| `Radius` | Radius |
| `The origin of the Area Dish is at the center of the base, and the Z-axis lies along the normal to the base.` |  |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)
**Legal Members:** None


### Area Extrusion Element (`AEXTRUSION`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Height` | Height |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)

### Loop Element (`LOOP`)

### Area Polyhedron Element (`APOLYHEDRON`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Function` | Function |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)

### Polyhedron Face Element (`POLFACE`)

### Polyhedron Point List Element (`POLPTLIST`)

### Area Pyramid Element (`APYRAMID`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Xbottom` | Bottom X length |
| `Ybottom` | Bottom Y length |
| `Xtop` | Top X length |
| `Ytop` | Top Y length |
| `Height` | Height |
| `Xoffset` | X-offset |
| `Yoffset` | Y-offset |
| `The origin of the Area Pyramid is at the mid-point of the line joining the mid-points of the top and bottom` | surfaces, and the Z-axis is normal to the top and bottom faces. |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)
**Legal Members:** None


### Area Definition Element (`AREADEF`)
**Area Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |

**Legal Owners:** `AREASET`, `BBLOCK`, `BLEVEL`, `CEILIN`, `OPENSPACE`


### Room Element (`ROOM`)

### Restricted Area Element (`RSTAREA`)

### Stairwell Element (`STRWELL`)
**Legal Members:** `ABOX`, `ACONE`, `ACTORUS`, `ACYLINDER`, `ADISH`, `AEXTRUSION`, `APOLYHEDRON`, `APYRAMID`, `AREVOLUTION`, `ARTORUS`


### Area Slope Bottom Cylinder Element (`ASLCYLINDER`)

### Area Snout Element (`ASNOUT`)

### Area Set Element (`AREASET`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |


### Area Set Element (`AREASET`)

### Area World Element (`AREAWLD`)

### Area Definition Element (`AREADEF`)

### Area Set Element (`AREASET`)
Description
The element is a subsidiary World that contains only AREASEs and is owned by the main WORLD element.

### Area World Element (`AREAWLD`)
**Area Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### World Element (`WORLD`)

### Area Set Element (`AREASET`)

### Area Revolution Element (`AREVOLUTION`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Angle` | Angle |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)

### Loop Element (`LOOP`)

### Area Rectangular Torus Element (`ARTORUS`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Rinside` | Inside radius |
| `Routside` | Outside radius |
| `Height` | Height |
| `Angle` | Angle |
| `The origin of the Area Rectangular Torus is at the center of the circular arcs of radii RINSI and ROUTS, and is` | defined in the X-Y plane. |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)
**Legal Members:** None


### Area Slope Bottom Cylinder Element (`ASLCYLINDER`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Diameter` | Diameter |
| `Height` | Height |
| `Xtshear` | X top shear: inclination of top face to local X axis |
| `Ytshear` | Y top shear: inclination of top face to local Y axis |
| `Xbshear` | X bottom shear: inclination of bottom face to local X |
| `axis` | Ybshear |
| `Y bottom shear: inclination of bottom face to local Y` | axis |
| `The origin of the Area Slope-bottom Cylinder is at the mid-point of the axis (mid-way between P1 and P2) and` | the default orientation is with the axis on the Z-axis. |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)
**Legal Members:** None


### Area Snout Element (`ASNOUT`)
**Area Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Dtop` | Top diameter |
| `Dbottom` | Bottom diameter |
| `Xoffset` | X-offset |
| `Yoffset` | Y-offset |
| `Height` | Height |
| `The origin of the Area Snout is at the mid-point of the line joining the centres of the top and bottom surfaces and` | the Z-axis is normal to the top and bottom surfaces. |


### Area Definition Element (`AREADEF`)

### Demolition Package Element (`DEMOPA`)
**Legal Members:** None


## Elements in Assembly Category


### Assembly Item Element (`ASITEM`)
**Assembly Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `AsiQua` | Assembly item quantity |


### Assembly Element (`ASMBLY`)
**Legal Members:** None


### Assembly Element (`ASMBLY`)
**Assembly Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `AsName` | Local assembly name |
| `Description` | Description of the element |
| `AsWLoc` | Assembly working location |
| `AsDest` | Assembly destination |
| `AsBuil` | Assembly build strategy |
| `Orientation` | Orientation |
| `AsOri` | Predefined assembly orientation |
| `AsBPan` | Assembly base panel reference |
| `AsEWei` | Assembly estimated weight |
| `AsECoG` | Assembly estimated center of gravity |
| `Position` | Position |


### Assembly Element (`ASMBLY`)

### Assembly World Element (`ASWLD`)

### Assembly Item Element (`ASITEM`)

### Assembly Element (`ASMBLY`)

### Assembly World Element (`ASWLD`)
**Assembly Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### World Element (`WORLD`)

### Assembly Element (`ASMBLY`)

## Elements in Association Category


### Association Definition Group Element (`ASDFGP`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Association Definition Group Element (`ASDFGP`)

### Association Definition World Element (`ASDFWL`)
**Legal Members:** `ASDFGP`, `ASSDEF`


### Derived Data Definition Element (`DATDEF`)

### Restriction Definition Element (`RESDEF`)

### Association Definition World Element (`ASDFWL`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### World Element (`WORLD`)

### Association Definition Group Element (`ASDFGP`)

### Association Request Element (`ASREQU`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Gtype` | Generic type |

**Legal Owners:** `ASSMBR`


### Association Element (`ASSOC`)

### Restriction Definition Element (`RESDEF`)

### Restriction Element (`RESTRIC`)
**Legal Members:** `ASTATU`


### Design Dataset Element (`DDSE`)

### Design Ppoint/Pline Set Element (`DPSET`)

### Association Definition Element (`ASSDEF`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Lcnfarray` | Array of elements with local names |


### Association Definition Group Element (`ASDFGP`)
**Legal Members:** `DATDEF`, `DERDAT`, `RESDEF`


### Restriction Group Element (`RESTGP`)

### Restriction Element (`RESTRIC`)

### Association Member Element (`ASSMBR`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Primember` | Primary member |
| `Amemrf` | Reference to a design model object |
| `Ppnumber` | Design PPoint/Port number |
| `Number` | Number |
| `Pkey` | Pline identifier key |
| `Pkdistance` | Proportional distance along Pline |
| `Tarflag` | Target reference |
| `AssTarget` | Association Target Reference |
| `Savposition` | Cached position |
| `Savdirection` | Cached direction |
| `Pmlname` | Name of Pmlobject |
| `Posxpr` | Position expression |
| `Dirxpr` | Direction expression |
| `Realxpr` | Real expression |
| `Logxpr` | Logical expression |
| `Strxpr` | String expression |
| `Ptype` | Property type |


### Association Element (`ASSOC`)

### Derived Data Element (`DERDAT`)

### Restriction Element (`RESTRIC`)
**Legal Members:** `ASREQU`


### Design Dataset Element (`DDSE`)

### Design Ppoint/Pline Set Element (`DPSET`)

### Association Element (`ASSOC`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Lcnfarray` | Array of elements with local names |
| `Desparam` | Design parameters |
| `Comboolean` | Boolean Combination |
| `Adefrf` | Reference to master ASSDEF |


### Association Instance Group Element (`ASSOGP`)
**Legal Members:** `ASREQU`, `ASSMBR`, `ASTATU`, `DATDEF`, `DDSE`, `DERDAT`, `DPSET`, `RESDEF`


### Restriction Group Element (`RESTGP`)

### Restriction Element (`RESTRIC`)

### Association Instance Group Element (`ASSOGP`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Comboolean` | Boolean Combination |


### Association Instance Group Element (`ASSOGP`)

### Association Instance World Element (`ASSOWL`)

### Association Element (`ASSOC`)

### Association Instance Group Element (`ASSOGP`)

### Association Instance World Element (`ASSOWL`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### World Element (`WORLD`)

### Association Instance Group Element (`ASSOGP`)

### Association Status Element (`ASTATU`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Gtype` | Generic type |

**Legal Owners:** `ASREQU`


### Association Element (`ASSOC`)

### Restriction Definition Element (`RESDEF`)

### Restriction Element (`RESTRIC`)
**Legal Members:** None


### Derived Data Definition Element (`DATDEF`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Lcnfarray` | Array of elements with local names |
| `Pmlname` | Name of Pmlobject |
| `Posxpr` | Position expression |
| `Dirxpr` | Direction expression |
| `Realxpr` | Real expression |
| `Strxpr` | String expression |
| `Logxpr` | Logical expression |
| `Ptype` | Property type |


### Association Definition Group Element (`ASDFGP`)

### Association Definition Element (`ASSDEF`)

### Association Element (`ASSOC`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Member Definition Element (`MBRDEF`)

### Derived Data Element (`DERDAT`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Lcnfarray` | Array of elements with local names |
| `Adefrf` | Reference to master ASSDEF |


### Association Definition Element (`ASSDEF`)

### Association Element (`ASSOC`)
**Legal Members:** `ASSMBR`, `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Mapped Member Element (`MBRMAP`)

### Member Definition Element (`MBRDEF`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Pmlname` | Name of Pmlobject |
| `Memname` | Member name |
| `Amapnme` | Local Name of Proxy actual member |
| `Primember` | Primary member |


### Derived Data Definition Element (`DATDEF`)

### Restriction Definition Element (`RESDEF`)
**Legal Members:** None


### Mapped Member Element (`MBRMAP`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Amapnme` | Local Name of Proxy actual member |
| `Ampmpnme` | Local Name of Proxy in Association |
| `Primember` | Primary member |


### Derived Data Element (`DERDAT`)

### Restriction Element (`RESTRIC`)
**Legal Members:** None


### Restriction Definition Element (`RESDEF`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Lcnfarray` | Array of elements with local names |
| `Pmlname` | Name of Pmlobject |
| `Comboolean` | Boolean Combination |
| `Testxpr` | Logical Expression |

**Legal Owners:** `ASDFGP`


### Association Definition Element (`ASSDEF`)

### Association Element (`ASSOC`)

### Restriction Group Element (`RESTGP`)
**Legal Members:** `ASREQU`, `ASTATU`, `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Member Definition Element (`MBRDEF`)

### Restriction Group Element (`RESTGP`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Comboolean` | Boolean Combination |


### Association Definition Element (`ASSDEF`)

### Association Element (`ASSOC`)

### Restriction Group Element (`RESTGP`)
**Legal Members:** `RESDEF`


### Restriction Group Element (`RESTGP`)

### Restriction Element (`RESTRIC`)

### Restriction Element (`RESTRIC`)
**Association Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Lcnfarray` | Array of elements with local names |
| `Adefrf` | Reference to master ASSDEF |
| `Comboolean` | Boolean Combination |


### Association Definition Element (`ASSDEF`)

### Association Element (`ASSOC`)

### Restriction Group Element (`RESTGP`)
**Legal Members:** `ASREQU`, `ASSMBR`, `ASTATU`


### Design Dataset Element (`DDSE`)

### Design Ppoint/Pline Set Element (`DPSET`)

### Mapped Member Element (`MBRMAP`)

## Elements in Cabling Category


### Cable Bundle Element (`BUNDLE`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `LayMod` | Bundle layout mode |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)

### Cable Branch Element (`CABLE`)

### Cable Branch Element (`CABLE`)
**Cabling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Cabtyp` | Cable Type |
| `Number` | Number |
| `Area` | Area |
| `Spref` | Component spec reference |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Desparam` | Design parameters |
| `FEQDES` | From Equipment Description |
| `TEQDES` | To Equipment Description |
| `MarkRf` | Cable Mark points |
| `RoutNd` | Cable Preliminary route point |
| `CExes` | Cable excesses |
| `StaRef` | Cable Start reference |
| `StaPoint` | Cable Start connection point |
| `EndRef` | Cable End reference |
| `EndPoint` | Cable End connection point |
| `CBSta` | Cable routing status |
| `IClass` | Interference class |
| `CabGap` | cable gap on cabletray as multiple of OUTD |
| `Rlselect` | Rule selection array |
| `Filchk` | FILCHK (true if fill level check is enabled) |
| `Ranequip` | Range of the nearest equipment |
| `Spacing` | Spacing gap |
| `Cabtouching` | Can cable touch other cables |
| `Cabswapping` | Cable swapping |
| `Inpref` | Installation point reference |


### Cable Bundle Element (`BUNDLE`)

### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Legal Members:** `CORE`, `HATTA`, `RPATH`


### Sequence of Segments Element (`SEGSEQ`)

### Tail Attachment Point Element (`TATTA`)

### Control Node Element (`CNODE`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Spref` | Component spec reference |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Legal Members:** None


### Connectivity Sequence Element (`CONSEQ`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Cable Way Branch Element (`CWBRAN`)

### Route Attachment Point Element (`RATTA`)

### Cable Core Element (`CORE`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `StaRef` | Cable Start reference |
| `StaPoint` | Cable Start connection point |
| `EndRef` | Cable End reference |
| `EndPoint` | Cable End connection point |


### Cable Branch Element (`CABLE`)
**Legal Members:** None


### Cable Tray Bend Element (`CTBEND`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `PosRef` | Reference to point |
| `Level` | Drawing level |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `Bangle` | Beta angle |
| `CTType` | Cable tray typ |
| `Radius` | Radius |
| `Angle` | Angle |
| `Alength` | Arrive length |
| `LLength` | Leave length |
| `TrayW` | Tray Width |
| `TrayH` | Tray height |
| `TierHeight` | Heights of trays measured from path |
| `SSplit` | Spool Split |


### Cable Tray Material Element (`CTMTRL`)

### Cable Tray Feature Element (`CTFEAT`)

### Cable Tray Joint Element (`CTJOIN`)

### Cable Tray Coupling Element (`CTCOUP`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `PosRef` | Reference to point |
| `Level` | Drawing level |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `Bangle` | Beta angle |
| `CTType` | Cable tray typ |
| `Olength` | Overall length |
| `GapLength` | Gap length |
| `TrayW` | Tray Width |
| `TrayH` | Tray height |
| `TierHeight` | Heights of trays measured from path |
| `SSplit` | Spool Split |


### Cable Tray Material Element (`CTMTRL`)
**Legal Members:** `CTFEAT`


### Cable Tray Joint Element (`CTJOIN`)

### Cable Tray Element (`CTRAY`)

### Cable Tray Cross Element (`CTCROS`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `PosRef` | Reference to point |
| `Level` | Drawing level |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `Bangle` | Beta angle |
| `CTType` | Cable tray typ |
| `Radius` | Radius |
| `Angle` | Angle |
| `Alength` | Arrive length |
| `LLength` | Leave length |
| `SLength` | Side length |
| `SSLength` | Second side length |
| `TrayW` | Tray Width |
| `TrayH` | Tray height |
| `TraySW` | Tray side width |
| `TrayOW` | Tray other width |
| `TierHeight` | Heights of trays measured from path |
| `SSplit` | Spool Split |


### Cable Tray Material Element (`CTMTRL`)
**Legal Members:** `CTFEAT`


### Cable Tray Joint Element (`CTJOIN`)

### Cable Tray Element (`CTRAY`)

### Cable Tray Feature Element (`CTFEAT`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `Shop` | Shop/Site flag |
| `Height` | Height |

**Legal Owners:** `CTBEND`, `CTCOUP`, `CTCROS`, `CTREDU`


### Cable Tray Riser Element (`CTRISE`)

### Cable Tray Straight Element (`CTSTRA`)

### Cable Tray Tee Element (`CTTEE`)
**Legal Members:** `DDSE`


### Structural Generic Section Element (`GENSEC`)

### Template Element (`TMPLATE`)

### Cable Tray Joint Element (`CTJOIN`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `Shop` | Shop/Site flag |
| `Height` | Height |

**Legal Owners:** `CTBEND`, `CTCOUP`, `CTCROS`, `CTREDU`


### Cable Tray Riser Element (`CTRISE`)

### Cable Tray Straight Element (`CTSTRA`)

### Cable Tray Tee Element (`CTTEE`)

### Design Dataset Element (`DDSE`)

### Template Element (`TMPLATE`)

### Cable Tray Material Element (`CTMTRL`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Desparam` | Design parameters |
| `CTSPE` | Cable tray specification |
| `TrayW` | Tray Width |
| `TrayH` | Tray height |
| `TierHeight` | Heights of trays measured from path |
| `FGap` | First offset distance |
| `IGap` | Intermediate offset distance |
| `LGap` | Last offset distance |


### Cable Way Branch Element (`CWBRAN`)
**Legal Members:** `CTBEND`, `CTCOUP`, `CTCROS`, `CTREDU`, `CTRISE`


### Cable Tray Straight Element (`CTSTRA`)

### Cable Tray Tee Element (`CTTEE`)

### Cable Tray Element (`CTRAY`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `Shop` | Shop/Site flag |
| `Height` | Height |

**Legal Owners:** `CTBEND`, `CTCOUP`, `CTCROS`, `CTREDU`


### Cable Tray Riser Element (`CTRISE`)

### Cable Tray Straight Element (`CTSTRA`)

### Cable Tray Tee Element (`CTTEE`)
**Legal Members:** `CTSUPP`


### Design Dataset Element (`DDSE`)

### Template Element (`TMPLATE`)

### Cable Tray Reducer Element (`CTREDU`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `PosRef` | Reference to point |
| `Level` | Drawing level |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `Bangle` | Beta angle |
| `CTType` | Cable tray typ |
| `OLength` | Overall length |
| `TrayW` | Tray Width |
| `TrayRW` | Tray Reduce Width |
| `TrayH` | Tray height |
| `TierHeight` | Heights of trays measured from path |
| `SSplit` | Spool Split |


### Cable Tray Material Element (`CTMTRL`)
**Legal Members:** `CTFEAT`


### Cable Tray Joint Element (`CTJOIN`)

### Cable Tray Element (`CTRAY`)

### Cable Tray Riser Element (`CTRISE`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `PosRef` | Reference to point |
| `Level` | Drawing level |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `Bangle` | Beta angle |
| `CTType` | Cable tray typ |
| `Radius` | Radius |
| `Angle` | Angle |
| `Alength` | Arrive length |
| `LLength` | Leave length |
| `TrayW` | Tray Width |
| `TrayH` | Tray height |
| `TierHeight` | Heights of trays measured from path |
| `SSplit` | Spool Split |


### Cable Tray Material Element (`CTMTRL`)
**Legal Members:** `CTFEAT`


### Cable Tray Joint Element (`CTJOIN`)

### Cable Tray Element (`CTRAY`)

### Cable Tray Straight Element (`CTSTRA`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `PosRef` | Reference to point |
| `Level` | Drawing level |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `Bangle` | Beta angle |
| `OLength` | Overall length |
| `TrayW` | Tray Width |
| `TrayH` | Tray height |
| `TierHeight` | Heights of trays measured from path |
| `SSplit` | Spool Split |


### Cable Tray Material Element (`CTMTRL`)
**Legal Members:** `CTFEAT`


### Cable Tray Joint Element (`CTJOIN`)

### Cable Tray Element (`CTRAY`)

### Cable Tray Support Element (`CTSUPP`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `Cref` | Connection reference |
| `Stext` | S Text string |
| `Shop` | Shop/Site flag |
| `Matref` | Material reference |


### Cable Tray Element (`CTRAY`)
**Legal Members:** None


### Cable Tray Tee Element (`CTTEE`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `PosRef` | Reference to point |
| `Level` | Drawing level |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Xoffset` | X-offset |
| `Zoffset` | Z-offset |
| `Bangle` | Beta angle |
| `CTType` | Cable tray typ |
| `Radius` | Radius |
| `Angle` | Angle |
| `Alength` | Arrive length |
| `LLength` | Leave length |
| `SLength` | Side length |
| `TrayW` | Tray Width |
| `TrayH` | Tray height |
| `TraySW` | Tray side width |
| `TierHeight` | Heights of trays measured from path |
| `SSplit` | Spool Split |


### Cable Tray Material Element (`CTMTRL`)
**Legal Members:** `CTFEAT`


### Cable Tray Joint Element (`CTJOIN`)

### Cable Tray Element (`CTRAY`)

### Cableway Element (`CWAY`)
**Cabling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Cablayout` | Cable layout |
| `Purpose` | Description code word |
| `Position` | Position |
| `MaxLay` | Maximum Layers |
| `MaxCab` | Maximum Number of cables |
| `Uuidia` | Universally unique identifier |
| `Underground` | Underground |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)

### Cable Way Branch Element (`CWBRAN`)

### Cable Way Branch Element (`CWBRAN`)
**Cabling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Cablayout` | Cable layout |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `MaxLay` | Maximum Layers |
| `MaxCab` | Maximum Number of cables |
| `Position` | Position |
| `Orientation` | Orientation |
| `HCRef` | Head connections |
| `TCRef` | Tail connections |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Desparam` | Design parameters |
| `Bangle` | Beta angle |
| `CloseFlag` | True if branch is closed |
| `CWJusLine` | Cable Way Justification Line |
| `BRadius` | Bend radius |
| `VHeight` | Volume height |
| `VWidth` | Volume width |
| `VShape` | Volume shape |
| `Rllogical` | Rule logical array |
| `CExs` | Percentage excess for passing cables |
| `MaxFil` | Maximum percentage fill level |
| `IClass` | Interference class |
| `Uuidia` | Universally unique identifier |
| `Resvolume` | Reserved volume |
| `AHeight` | Access height |
| `Extvolume` | Volume for material |
| `Underground` | Underground |
| `UseMaterial` | Use material |
| `Fixedb` | FIXEDB (true if bends are fixed) |
| `MatType` | Material type |


### Cableway Element (`CWAY`)
**Legal Members:** `CTMTRL`, `HATTA`, `RPATH`, `RTFEAT`


### Sequence of Segments Element (`SEGSEQ`)

### Tail Attachment Point Element (`TATTA`)

### Dimension PLine Element (`DIMPLI`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `PosRef` | Reference to point |
| `Pkey` | Pline identifier key |
| `Pkdistance` | Proportional distance along Pline |


### Linear Dimension Element (`LINDIMENSION`)

### MLABEL Element (`MLABEL`)
**Legal Members:** None


### Dimension Position Element (`DIMPOS`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |


### Linear Dimension Element (`LINDIMENSION`)

### MLABEL Element (`MLABEL`)
**Legal Members:** None


### Dimension PPoint Element (`DIMPPT`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `PosRef` | Reference to point |
| `Nppt` | Ppoint number |


### Linear Dimension Element (`LINDIMENSION`)

### MLABEL Element (`MLABEL`)
**Legal Members:** None


### External Geometry Element (`EXTGEO`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `StaRef` | Cable Start reference |
| `EndRef` | Cable End reference |
| `Xoffset` | X-offset |
| `YGap` | Y-Gap |


### Route Path Element (`RPATH`)
**Legal Members:** None


### Head Attachment Point Element (`HATTA`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |

**Legal Owners:** `CABLE`, `CTWALL`


### Cable Way Branch Element (`CWBRAN`)

### Handrail Element (`HANDRA`)

### Routing Volume Element (`RUTVOLUME`)
**Legal Members:** None


### Cable Junction Box Node Element (`JNODE`)
**Cabling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Spref` | Component spec reference |


### Cable Junction Box Element (`JNTBOX`)
**Legal Members:** None

Cabling element

### Cable Junction Box Element (`JNTBOX`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Uwmtxt` | User weight Manager text |
| `Dscode` | Design code |
| `Ptspec` | Plant specification |
| `Inschedule` | Inspection Schedule |
| `Skey` | Symbol key |
| `StlRef` | Steel Reference |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Invfarray` | Array of Inventory Items |
| `Uuidia` | Universally unique identifier |
| `Spref` | Component spec reference |
| `Fstatus` | Fstatus |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Zone Element (`ZONE`)
**Legal Members:** `AIDGROUP`, `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DIMGROUP`, `DISH`, `DPSET`, `DRAWING`, `ELCONN`, `EQUCOM`, `EXTRUSION`, `LOAPOINT`, `JNODE`, `PANEL`, `POHEDRON`, `POLYHEDRON`, `PVOLUME`, `PYRAMID`, `REVOLUTION`, `RPLANE`, `RTORUS`, `SLCYLINDER`, `SNOUT`


### Text Element (`TEXT`)

### Template Element (`TMPLATE`)

### Point On Path Element (`POINTR`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Position` | Position |
| `SIGREF` | Significant point reference |
| `PointType` | Point type |
| `Fradius` | Fillet radius |


### Route Path Element (`RPATH`)
**Legal Members:** None


### PullIing Pit Node Element (`PULLNODE`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Spref` | Component spec reference |


### Pulling Pit Element (`PULLPIT`)
**Legal Members:** None


### Pulling Pit Element (`PULLPIT`)
**Cabling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Uwmtxt` | User weight Manager text |
| `Dscode` | Design code |
| `Ptspec` | Plant specification |
| `Inschedule` | Inspection Schedule |
| `Skey` | Symbol key |
| `StlRef` | Steel Reference |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template Selection pointer |
| `Invfarray` | Array of Inventory Items |
| `Uuidia` | Universally unique identifier |
| `Spref` | Component spec reference |
| `Fstatus` | Fstatus |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Zone Element (`ZONE`)
**Legal Members:** `AIDGROUP`, `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DIMGROUP`, `DISH`, `DPSET`, `DRAWING`, `ELCONN`, `EQUCOM`, `EXTRUSION`, `LOAPOINT`, `PANEL`, `POHEDRON`, `POLYHEDRON`, `PVOLUME`, `PYRAMID`, `REVOLUTION`, `RPLANE`, `RTORUS`, `SLCYLINDER`, `SNOUT`, `TEXT`


### Template Element (`TMPLATE`)

### PullIing Pit Node Element (`PULLNODE`)

### Multidiscipline Routing Branch Element (`RBRAN`)
**Cabling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Spref` | Component spec reference |
| `Level` | Drawing level |
| `Desparam` | Design parameters |
| `Bangle` | Beta angle |
| `LMirror` | True if Mirroring required |
| `HCRef` | Head connections |
| `TCRef` | Tail connections |
| `AddSegments` | Auto creating segments flag |
| `BRadius` | Bend radius |
| `Topology` | Branch topology |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Legal Members:** `CONSEQ`, `HATTA`, `RPATH`


### Sequence of Segments Element (`SEGSEQ`)

### Tail Attachment Point Element (`TATTA`)

### Route Node Element (`RNODE`)
**Cabling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Spref` | Component spec reference |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `RNType` | RNode Type |
| `Xoffset` | X-offset |
| `Yoffset` | Y-offset |
| `Zoffset` | Z-offset |
| `Bangle` | Beta angle |
| `ConnReference` | References to other element |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Level` | Drawing level |


### Route Feature Element (`RTFEAT`)
**Legal Members:** None


### Route Path Element (`RPATH`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Ydirection` | Preferred Y axis direction |
| `Drnstart` | Plane normal at start of SCTN/GENSEC |
| `Drnend` | Plane normal at end of SCTN/GENSEC |

**Legal Owners:** `BPANEL`, `BPOPEN`, `CABLE`, `CTWALL`, `CWBRAN`, `HANDRA`, `PLOPEN`, `PLTFRM`, `RUTVOLUME`


### Stair Flight Element (`STRFLT`)

### Stair Landing Element (`STRLNG`)

### Wall Openings Element (`WLOPEN`)
**Legal Members:** `CURVE`, `EXTGEO`


### Point On Path Element (`POINTR`)

### Curve (on Spine) Element (`RSECT`)

### Curve (on Spine) Element (`RSECT`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Cposition` | conditioning position for curve geometry |
| `Zdirection` | Additional axis direction |
| `EndOff` | Offset of the end of section |
| `SctDir` | Section Direction |
| `Radius` | Radius |
| `Radsetflag` | Radius set flag - ignore Radius values if FALSE |
| `Bulgefactor` | Bulge factor |
| `CurType` | Curve type |
| `Orrf` | Origin reference (for templates) |


### Route Path Element (`RPATH`)
**Legal Members:** None


### Route Feature Element (`RTFEAT`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Cable Way Branch Element (`CWBRAN`)

### Route Node Element (`RNODE`)

### Tail Attachment Point Element (`TATTA`)
**Cabling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |

**Legal Owners:** `CABLE`, `CTWALL`


### Cable Way Branch Element (`CWBRAN`)

### Handrail Element (`HANDRA`)

### Routing Volume Element (`RUTVOLUME`)
**Legal Members:** None


## Elements in Common Reference Model Category


### Common Reference Model Curve Element (`CRMCUR`)
**Common Reference Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |


### Curve World Element (`CURWLD`)
**Legal Members:** `DCLONE`, `Common Reference Curve Definition Element (DCRCUR))`


### Common Reference Curve Instance Element (`ICRCUR`)

### Common Reference Model Point Element (`CRMPNT`)
**Common Reference Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |


### Point World Element (`PNTWLD`)
**Legal Members:** `DCLONE`


### Common Reference Point Definition Element (`DCRPNT`)

### Common Reference Point Instance Element (`ICRPNT`)

### Curve World Element (`CURWLD`)
**Common Reference Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Uuid` | Universally unique identifier |


### World Element (`WORLD`)

### Common Reference Model Curve Element (`CRMCUR`)

### Common Reference Curve Definition Element (`DCRCUR`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `COFVECTOR` | Curve Vector |
| `Uuid` | Universally unique identifier |
| `DCmpId` | Definition component identity |
| `DICmId` | Predefined instance component identities |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates.` |  |


### Common Reference Model Curve Element (`CRMCUR`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** `DBOX`, `DENDFR`, `DENDTO`, `DEPNT`, `DCLRFL`, `DINTER`


### Definition Limit Element (`DPLIM`)

### Definition CRM Curve Segment Element Element (`DSEG`)

### Common Reference Point Definition Element (`DCRPNT`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `DCmpId` | Definition component identity |
| `DICmId` | Predefined instance component identities |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates.` |  |


### Commmon Reference Model Point Element (`CRMPNT`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** `DEPNT`


### Definition CRM Curve Intersection Element Element (`DINTER`)

### Definition Location Element (`DLOCTN`)

### Definition CRM Curve Start/End Point Element Element (`DCURP`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Cdist` | CurveDistance |
| `Uuid` | Universally unique identifier |


### Definition CRM Curve Point Element Element (`DEPNT`)

### Definition Model Reference Element (`DMODRF`)

### Definition CRM Curve Point Element Element (`DEPNT`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Pretan` | Pre Tangent On a Point |
| `Postan` | Post Tangent On a Point |
| `Pntoff` | Point Offset |
| `Uuid` | Universally unique identifier |


### Common Reference Curve Definition Element (`DCRCUR`)

### Common Reference Point Definition Element (`DCRPNT`)

### Definition CRM Curve Segment Element Element (`DSEG`)

### Definition CRM Curve Start/End Point Element Element (`DCURP`)

### Definition Model Reference Element (`DMODRF`)

### Definition CRM Internal Curve Element (`DINTC`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `CurName` | Curve Name |
| `Uuid` | Universally unique identifier |


### Definition CRM Curve Segment Element Element (`DSEG`)

### Definition Model Reference Element (`DMODRF`)

### Definition CRM Curve Intersection Element Element (`DINTER`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Pretan` | Pre Tangent On a Point |
| `Postan` | Post Tangent On a Point |
| `Pntoff` | Point Offset |
| `Uuid` | Universally unique identifier |


### Common Reference Curve Definition Element (`DCRCUR`)

### Common Reference Point Definition Element (`DCRPNT`)

### Definition CRM Curve Segment Element Element (`DSEG`)
**Legal Members:** `DBOX`, `DENDFR`, `DENDTO`, `DLINE`, `DMODRF`, `DPLANE`


### Definition Point Element (`DPNT`)
Cmmon Reference Model Element

### Definition Location Reference Element (`DLOCRF`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `LocDbR` | Location Db Ref |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Definition Location Element (`DLOCTN`)
**Legal Members:** None


### Definition CRM Curve Parallel Curve Element (`DPLL`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Coff` | Offset |
| `COFVECTOR` | Curve Vector |
| `Uuid` | Universally unique identifier |


### Definition CRM Curve Segment Element Element (`DSEG`)

### Definition Model Reference Element (`DMODRF`)

### Definition CRM Curve Segment Element Element (`DSEG`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Pretan` | Pre Tangent On a Point |
| `Postan` | Post Tangent On a Point |
| `Uuid` | Universally unique identifier |
| `COFVECTOR` | Curve Vector |
| `CUSOFF` | Curve Segment Offset |
| `CUSRAD` | Curve Segment Radius |
| `CUSDIR` | Curve Segment Direction Start to End |


### Common Reference Curve Definition Element (`DCRCUR`)
**Legal Members:** `DBOX`, `DENDFR`, `DEPNT`, `DENDTO`, `DINTC`, `DINTER`


### Definition Model Reference Element (`DMODRF`)

### Definition CRM Curve Parallel Curve Element (`DPLL`)

### Envelope Data Element (`ENVDAT`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Envbmi` | Specified project envelope box min extent |
| `Envbma` | Specified project envelope box max extent |
| `Hyshna` | Ship Name |
| `Hyshtp` | Ship Type |
| `Hycstm` | Customer |
| `Hyflag` | Flag |
| `Hyofnr` | Official number |
| `Hypore` | Port of registry |
| `Hymngr` | Manager |
| `Hybuil` | Builder |
| `Hyyano` | Yard number |
| `Hyclan` | Class Number |
| `Hyclet` | Call letters |
| `Hyimo` | IMO Number |
| `Hydobu` | Date of build |
| `Hylbp` | Length between perpendiculars |
| `Hyloa` | Length over all |
| `Hylwl` | Length in water line |
| `Hybwl` | Breadth in water line |
| `Hydpth` | Depth moulded |
| `Hydesd` | Design draft moulded |
| `Hystoh` | Stern overhang |
| `Hyminz` | Min Z |
| `Hymaxz` | Max Z |
| `Hyflke` | Flat of keel |
| `Hyrflr` | Rise of floor |
| `Hybrad` | Bilge radius |
| `Hyrake` | Rake of keel |
| `Hycb` | Block coefficient |
| `Hyfrle` | Freeboard length |
| `Hyrule` | Rule length |
| `Hysepd` | Design speed |
| `Hynbdr` | Normal ballast draught |
| `Hyhbdr` | Heavy ballast draught |
| `Hysedr` | Slamming draught empty ballast at FP |
| `Hysbdr` | Slamming Draught Full Ballast at FP |
| `Hyfrty` | Freeboard type |
| `Clhull` | Hull |
| `Clmach` | Machinery |
| `Clicec` | Ice class |
| `Clsare` | Service area |
| `Cladno` | Additional notations |


### Envelope Element (`ENVLOP`)
**Legal Members:** None


### Common Reference Curve Instance Element (`ICRCUR`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Obstruction` | Obstruction level |
| `CHNGD` | Changed counter |
| `Uuid` | Universally unique identifier |
| `DefRef` | Reference to a definition element. |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates.` | Position |
| `Position` | Orientation |
| `Orientation` |  |


### Common Reference Model Curve Element (`CRMCUR`)

### Hull Panel Element (`UPANEL`)

### Curve Geometry Element (`CURGEO`)

### Common Reference Point Instance Element (`ICRPNT`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Position` | Position |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` | Orientation |
| `Orientation` |  |


### Commmon Reference Model Point Element (`CRMPNT`)

### Common Reference Point Instance Element (`ICRPNT`)

### Hull Panel Element (`UPANEL`)

### Common Reference Point Instance Element (`ICRPNT`)

### Polyface Curve Element (`PFCURV`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Edglst` | Edge list |


### Polyface Curves Element (`PFCRVS`)
**Legal Members:** None


### Face Edge Element (`PFEDGE`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `EdsRef` | Start reference |
| `EdeRef` | End reference |


### Polyface Definition Element (`PFDEFI`)
**Legal Members:** None


### Face Element (`PFFACE`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Edglst` | Edge List |


### Polyface Definition Element (`PFDEFI`)

### Inner Face Loop Element (`PFILOO`)

### Inner Face Loop Element (`PFILOO`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Edglst` | Edge List |


### Face Element (`PFFACE`)
**Legal Members:** None


### Polyface Point Element (`PFPOIN`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Pfppos` | Polyface pt pos |


### Polyface Definition Element (`PFDEFI`)
**Legal Members:** None


### Point World Element (`PNTWLD`)
**Common Reference Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Uuid` | Universally unique identifier |


### World Element (`WORLD`)

### Commmon Reference Model Point Element (`CRMPNT`)

### Raw Surface Instance Element (`RSFINS`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `RefRaw` | Raw surface reference |
| `RwsRef` | Raw surface reference |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Surface Instance Definition Element (`SRFDEF`)

### Surface Instance Reflection Element (`SRFRFL`)

### Surface Curves Element (`SCCRVS`)
**Common Reference Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Sculptured Surface Element (`SCSURF`)

### Surface Curve Element (`SCCURV`)

### Surface Curve Element (`SCCURV`)
**Common Reference Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |


### Surface Curves Element (`SCCRVS`)

### Curve Geometry Element (`CURGEO`)

### Sculptured Surface Element (`SCSURF`)
**Common Reference Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |


### Surface World Element (`SSOWLD`)

### Surface Curves Element (`SCCRVS`)

### Surface Instance Curve Group Element (`SRFCGR`)
**Common Reference Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Surface Instance Element (`SRFSUR`)

### Surface Instance Curve Element (`SRFCUR`)

### Surface Instance Curve Element (`SRFCUR`)
**Common Reference Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Obstruction` | Obstruction level |
| `CHNGD` | Changed counter |
| `Uuid` | Universally unique identifier |
| `DefRef` | Reference to a definition element |


### Surface Instance Curve Group Element (`SRFCGR`)

### Curve Geometry Element (`CURGEO`)

### Surface Instance Definition Element (`SRFDEF`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Surface Instance Element (`SRFSUR`)
**Legal Members:** `RSFINS`


### Surface Instance Limit Element (`SRFLIM`)

### Surface Instance Reflection Element (`SRFRFL`)

### Surface Instance Limit Element (`SRFLIM`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Reflim` | Reference limit |
| `Limref` | Reference limit |
| `LIMNMS` | Limit names |
| `Srfsid` | Side of surface |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Surface Instance Definition Element (`SRFDEF`)
**Legal Members:** None


### Surface Instance Reflection Element (`SRFRFL`)
**Common Reference Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `SrfPnt` | Surface orientation point |
| `SrfVec` | Vector |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Surface Instance Definition Element (`SRFDEF`)

### Raw Surface Instance Element (`RSFINS`)
**Legal Members:** None


## Elements in Dataset Category


### Attribute Rule Element (`ATTRRL`)
**Dataset Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `AttName` | Attribute Name expression for ATTRRL elements |
| `AttRule` | Attribute Rule expression for ATTRRL elements |
| `Orrf` | Origin reference (for templates) |


### Design Data Element (`DDATA`)
**Legal Members:** None


### Design Dataset Area Element (`DDAREA`)
**Dataset Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### Application Data World Element (`APPLDWORLD`)

### Template World Element (`TPWLD`)

### Design Dataset Element (`DDSE`)

### Design Data Element (`DDATA`)
**Dataset Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `Number` | Number |
| `Dkey` | Data Key |
| `Ptype` | Property type |
| `Punits` | Data Property Units |
| `Dtitle` | Data Title |
| `Ddproperty` | Design data property value |
| `Dddfault` | Default Design data value |
| `Preflag` | Pre-evaluation flag |
| `Poeflag` | Post-evaluation flag |
| `Dimpat` | Imported attribute |
| `Orrf` | Origin reference (for templates) |
| `Ldisp` | Display property flag for design datasets: True if |
| `property is shown on form` | Maxmin |
| `Maximum and minimum values of design property` | PTOLER |
| `Tolerance on a design property` |  |


### Design Dataset Element (`DDSE`)

### Attribute Rule Element (`ATTRRL`)

### Valid Value Element (`VVALUE`)

### Design Dataset Element (`DDSE`)
**Dataset Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Orrf` | Origin reference (for templates) |
| `Uuidia` | Universally unique identifier |

**Legal Owners:** `APPLDATA`, `ASREQU`, `ASSMBR`, `ASSOC`, `BOTEXT`, `CAGSEG`, `CFLOOR`, `CMFITTING`, `CMPFITTING`, `CSCREED`, `CTFEAT`, `CTJOIN`, `CTRAY`, `CWALL`, `DATDEF`, `DDAREA`, `DERDAT`, `DOOR`, `DTNODE`, `DTPLAT`, `DTPROF`, `ELCONN`, `ELFITTING`, `ENDATUM`, `EQUCOM`, `EQUIPMENT`, `FITTING`, `FIXING`, `FIXTUR`, `FLOOR`, `FPFITTING`, `FRMWORK`, `FURNIT`, `GENSEC`, `GWALL`, `HANDRA`, `HOOPSE`, `HRGATE`, `HRPANE`, `HRPOST`, `HRTERM`, `HVACFITTING`, `INFITTING`, `INTLNG`, `LADDER`, `LDRRUN`, `MFIX`, `NOZZLE`, `NXTRUSION`, `PANEL`, `PCOJOINT`, `PFITTING`, `PJOINT`, `PLDATUM`, `PLTFRM`, `PNODE`, `PTRACK`, `RESDEF`, `RESTRIC`, `RLGATE`, `RUNGSET`, `SBFITTING`, `SBFRAMEWORK`, `SCOJOINT`, `SCREED`, `SCTN`, `SITE`, `SJOINT`, `SLADDR`, `SLRAIL`, `SNODE`, `STRFLT`, `STRLNG`, `STRSTR`, `STRTWR`, `STRUCTURE`, `STRWELL`, `STWALL`, `SUBEQUIPMENT`, `SUBJOINT`, `SUBSTRUCTURE`, `SVOLMODEL`, `SYSMDA`, `TMPLATE`, `TOPEXT`, `TREAD`, `TREADSET`, `VOLMODEL`


### Wall Element (`WALL`)

### Window Element (`WINDOW`)

### Zone Element (`ZONE`)

### Design Data Element (`DDATA`)

### Valid Value Element (`VVALUE`)
**Dataset Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `ValidValue` | Valid value expression for VVALUE elements |
| `ValRule` | Valid rule expression to test VALIDV attributes of |
| `VVALUE elements` | Orrf |
| `Origin reference (for templates)` |  |


### Design Data Element (`DDATA`)
**Legal Members:** None


## Elements in Equipment Category


### Electrical Connection Element (`ELCONN`)
**Equipment Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Catref` | Catalog reference |
| `Height` | Height |
| `Angle` | Angle |
| `Radius` | Radius |
| `Ispec` | Insulation spec reference |
| `Duty` | Duty |
| `Desparam` | Design parameters |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`


### Pulling Pit Element (`PULLPIT`)

### Subequipment Element (`SUBEQUIPMENT`)

### Template Element (`TMPLATE`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)

### Equipment Component Element (`EQUCOM`)
**Equipment Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Catref` | Catalog reference |
| `Height` | Height |
| `Angle` | Angle |
| `Radius` | Radius |
| `Ispec` | Insulation spec reference |
| `Duty` | Duty |
| `Desparam` | Design parameters |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`


### Pulling Pit Element (`PULLPIT`)

### Subequipment Element (`SUBEQUIPMENT`)

### Template Element (`TMPLATE`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)
Description
The EQUIPMENT element represents process vessels, storage vessels, heat exchangers, pumps, and any other
predefined item that is part of the plant. The unique feature of this element is that it may own NOZZLEs in
addition to the normal primitive shapes. Pipework can be connected to the Nozzles, thus making EQUIPMENTs
intrinsic to the process system.

### Equipment Element (`EQUIPMENT`)
**Equipment Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Ispec` | Insulation spec reference |
| `Uwmtxt` | User weight Manager text |
| `Dscode` | Design code |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Skey` | Symbol key |
| `StlRef` | Steel Reference |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Invfarray` | Array of Inventory Items |
| `Uuidia` | Universally unique identifier |
| `Propst` | Property set reference array |
| `Spref` | Component spec reference |
| `Fstatus` | Fstatus |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Legal Members:** `AIDGROUP`, `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DIMGROUP`, `DISH`, `DPSET`, `DRAWING`, `ELCONN`, `EQUCOM`, `EXTRUSION`, `LOAPOINT`, `NOZZLE`, `PANEL`, `POHEDRON`, `POLYHEDRON`, `PVOLUME`, `PYRAMID`, `REVOLUTION`, `RPLANE`, `RTORUS`, `SLCYLINDER`, `SNOUT`, `SUBEQUIPMENT`


### Text Element (`TEXT`)

### Template Element (`TMPLATE`)
Description
NOZZles are significant to the Design because they provide the link between an EQUIPMENT (which owns them)
and a Pipe (BRANCH) which is connected to each one.

### Nozzle Element (`NOZZLE`)
**Equipment Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Temperature` | Temperature |
| `Pressure` | Pressure |
| `TPressure` | TestPressure |
| `Cref` | Connection reference |
| `Catref` | Catalog reference |
| `Height` | Height |
| `Angle` | Angle |
| `Radius` | Radius |
| `Ispec` | Insulation spec reference |
| `Duty` | Duty |
| `Desparam` | Design parameters |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `SloDirection` | Slope direction array |


### Equipment Element (`EQUIPMENT`)

### Subequipment Element (`SUBEQUIPMENT`)

### Template Element (`TMPLATE`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)
Description
The Pipe Track is a type of STRUCTURE along which pipes are to be routed. It is a special element for the
automatic pipe routing function of DESIGN; it cannot own SUBSTRUCTURES.

### Pipe Track Element (`PTRACK`)
**Equipment Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Built` | Built/Unbuilt flag |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Uwmtxt` | User weight Manager text |
| `Uuidia` | Universally unique identifier |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Legal Members:** `BPANEL`, `BOX`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DISH`, `DPSET`, `DRAWING`, `EXTRUSION`, `PANEL`, `POHEDRON`, `POLYHEDRON`, `PVOLUME`, `PYRAMID`, `REVOLUTION`, `RPLANE`, `RTORUS`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Text Element (`TEXT`)
Description
The SUBEQUIPMENT element is similar to the EQUIPMENT element, except that it is owned by an EQUIPMENT
element and cannot itself own SUBEQUIPMENT elements.

### Subequipment Element (`SUBEQUIPMENT`)
**Equipment Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Uwmtxt` | User weight Manager text |
| `Position` | Position |
| `Orientation` | Orientation |
| `Built` | Built/Unbuilt flag |
| `Ispec` | Insulation spec reference |
| `Dscode` | Design code |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Skey` | Symbol key |
| `StlRef` | Steel Reference |
| `Desparam` | Design parameters |
| `Uuidia` | Universally unique identifier |
| `Propst` | Property set reference array |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Invfarray` | Array of Inventory Items |
| `Spref` | Component spec reference |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Uuidia` | Universally unique identifier |


### Equipment Element (`EQUIPMENT`)
**Legal Members:** `BPANEL`, `BOX`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DISH`, `DPSET`, `DRAWING`, `ELCONN`, `EQUCOM`, `EXTRUSION`, `LOAPOINT`, `NOZZLE`, `PANEL`, `POHEDRON`, `POLYHEDRON`, `PVOLUME`, `PYRAMID`, `REVOLUTION`, `RPLANE`, `RTORUS`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Text Element (`TEXT`)

### Template Element (`TMPLATE`)

## Elements in Functional Model Category


### Area Arrangement Element (`FNCAAR`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Spmstp` | User defined subtype |
| `Uuid` | Universally unique identifier |
| `STRFNC` | Structural Function description |
| `Fhierarchy` | References to functional model hierarchy |


### Functional Area World Element (`FNCAW`)

### Functional Area Element (`FNCARE`)

### Functional Area Element (`FNCARE`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Spmstp` | User defined subtype |
| `Spmss` | Space state |
| `Spmvoi` | Space void marker |
| `Spmbb` | Bounding box |
| `Spmpp` | Precise properties |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |


### Area Arrangement Element (`FNCAAR`)
**Legal Members:** `FNCGSA`, `FNCISA`, `FNCLIM`, `FNCOSA`


### Container for Painting Area Attributes Element (`FNCPSA`)

### Container for Scantling Attributes Element (`FNCSSA`)

### Functional Area World Element (`FNCAW`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Faatyp` | Type of area world as enumerated |
| `Spmbb` | Bounding box |
| `Uuid` | Universally unique identifier |


### World Element (`WORLD`)

### Area Arrangement Element (`FNCAAR`)

### Functional Branch Element (`FNCBRN`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Spmstp` | User defined subtype |
| `Spmss` | Space state |
| `Spmvoi` | Space void marker |
| `Spmbb` | Bounding box |
| `Spmpp` | Precise properties |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |


### Curve Arrangement Element (`FNCCAR`)

### Limit in Functional Model Element (`FNCLIM`)

### Container for Profile Trace Attributes Element (`FNCTSA`)

### Curve Arrangement Element (`FNCCAR`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Spmstp` | User defined subtype |
| `Uuid` | Universally unique identifier |
| `Fhierarchy` | References to functional model hierarchy |


### Functional Curve World Element (`FNCCW`)

### Functional Branch Element (`FNCBRN`)

### Functional Curve World Element (`FNCCW`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Fcatyp` | Type of curve world as enumerated |
| `Spmbb` | Bounding box |
| `Uuid` | Universally unique identifier |


### World Element (`WORLD`)

### Curve Arrangement Element (`FNCCAR`)

### Container for Generic Arrangement Area Attributes Element (`FNCGSA`)
**Functional Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Uuid` | Universally unique identifier |


### Functional Area Element (`FNCARE`)
**Legal Members:** None


### Container for Insulation Attributes Element (`FNCISA`)
**Functional Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Uuid` | Universally unique identifier |
| `Ispec` | Insulation spec reference |
| `Srfsid` | Side of surface |
| `Inref` | Insulation reference |
| `Spmfcl` | Fire class |
| `MnSidE` | Main side enumerated |


### Functional Area Element (`FNCARE`)
**Legal Members:** None


### Limit in Functional Model Element (`FNCLIM`)
**Functional Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Spmstp` | User defined subtype |
| `Spmbin` | Boundary identification number |
| `Spmsfi` | Subface identification number |
| `Spmfst` | Face state |
| `Facode` | Facode |
| `Spmbb` | Bounding box |


### Functional Area Element (`FNCARE`)

### Functional Branch Element (`FNCBRN`)
**Legal Members:** None


### Container for Openings Attributes Element (`FNCOSA`)
**Functional Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Uuid` | Universally unique identifier |
| `Holdes` | Hole Designation |
| `Function` | Function |
| `FicHol` | Fictitious hole |
| `TigHol` | Tight hole |
| `CovHol` | Cover hole |
| `Bevcodes` | Bevel codes for edges |
| `InsHol` | Insert hole |
| `DouHol` | Doubling hole |


### Functional Area Element (`FNCARE`)
**Legal Members:** None


### Container for Painting Area Attributes Element (`FNCPSA`)
**Functional Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Uuid` | Universally unique identifier |
| `Facode` | Facode |
| `Sureco` | Surface exposure code |


### Functional Area Element (`FNCARE`)
**Legal Members:** None


### Container for Scantling Attributes Element (`FNCSSA`)
**Functional Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `TGHETP` | Type of Tightness code |
| `Uuid` | Universally unique identifier |
| `Thickn` | Thickness |
| `Spref` | Component spec reference |
| `MnDirE` | Main direction enumerated |
| `TplTyp` | Template type |
| `Desparam` | Design parameters |
| `STRFNC` | Structural Function description |
| `MGrade` | Material grade |
| `Matref` | Material reference |
| `MnSidE` | Main side enumerated |


### Functional Area Element (`FNCARE`)
**Legal Members:** None


### Container for Profile Trace Attributes Element (`FNCTSA`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Uuid` | Universally unique identifier |
| `TplTyp` | Template type |
| `TplPar` | Template parameters |
| `MnDirE` | Main direction enumerated |
| `MGrade` | Material grade |
| `Matref` | Material reference |


### Functional Branch Element (`FNCBRN`)
**Legal Members:** None


### Box Definition Element (`SPMBOX`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `uaxis` | uAxis |
| `vaxis` | vAxis |
| `Xlength` | X length |
| `Ylength` | Y length |
| `Zlength` | Line length |


### Context Definition Element (`SPMCON`)

### Space Management Operation Element (`SPMOPE`)
**Legal Members:** None


### Create From Boundaries Definition Element (`SPMCFB`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### Context Definition Element (`SPMCON`)

### Space Management Operation Element (`SPMOPE`)

### Definition Plane Element (`DPLANE`)

### Cone Definition Element (`SPMCNE`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `uaxis` | uAxis |
| `vaxis` | vAxis |
| `Dtop` | Top diameter |
| `Dbottom` | Bottom diameter |
| `Height` | Height |


### Context Definition Element (`SPMCON`)

### Space Management Operation Element (`SPMOPE`)
**Legal Members:** None


### Context Definition Element (`SPMCON`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |

**Legal Members:** `SPMBOX`, `SPMCFB`, `SPMCNE`, `SPMCYL`, `DBOX`, `SPMOPE`


### Space Management Identification Point Element (`SPMPOI`)

### Sphere Definition Element (`SPMSPH`)

### Cylinder Definition Element (`SPMCYL`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `uaxis` | uAxis |
| `vaxis` | vAxis |
| `Radius` | Radius |
| `Height` | Height |


### Context Definition Element (`SPMCON`)

### Space Management Operation Element (`SPMOPE`)
**Legal Members:** None


### Divider Definition Element (`SPMDIV`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### Definition Plane Element (`DPLANE`)

### Space Management Merge Definition Element (`SPMMRG`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### Space Management Identification Point Element (`SPMPOI`)

### Space Management Operation Element (`SPMOPE`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Spmotp` | Type of space management operation as enumerated |


### Context Definition Element (`SPMCON`)
**Legal Members:** `SPMBOX`, `SPMCFB`, `SPMCNE`, `SPMCYL`


### Space Management Identification Point Element (`SPMPOI`)

### Sphere Definition Element (`SPMSPH`)

### Polyface Boundary Element (`SPMPFB`)
**Functional Model Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Spmbna` | Boundary name |
| `Name` | Name of the element |
| `Spmbin` | Boundary identification number |
| `Spmpfn` | Polyface name |

**Legal Members:** None


### Space Management Identification Point Element (`SPMPOI`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Spmrsn` | Reference surface name |
| `Position` | Position |
| `Refspa` | Reference to space arrangement |


### Context Definition Element (`SPMCON`)

### Space Management Merge Definition Element (`SPMMRG`)

### Space Management Operation Element (`SPMOPE`)
**Legal Members:** None


### Space Management Purge Definition Element (`SPMPRG`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |

**Legal Members:** None


### Space Element (`SPMSPC`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Spmstp` | User defined subtype |
| `Spmss` | Space state |
| `Spmvoi` | Space void marker |
| `Spmbb` | Bounding box |
| `Spmpp` | Precise properties |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |

**Legal Members:** None


### Sphere Definition Element (`SPMSPH`)
**Functional Model Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `uaxis` | uAxis |
| `vaxis` | vAxis |
| `Radius` | Radius |


### Context Definition Element (`SPMCON`)

### Space Management Operation Element (`SPMOPE`)
**Legal Members:** None


## Elements in Group Category


### Group Item Element (`GPITEM`)
**Group Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Group Set Element (`GPSET`)
**Group Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Scosel` | Access Control scope |

**Legal Members:** `None`, `Group Set Element (GPSET) - Design - Group`


### Group Set Element (`GPSET`)

### Group World Element (`GPWLD`)

### Group Item Element (`GPITEM`)
Group World Element (GPWLD) - Design - Group
Description
The element is a subsidiary World that contains only GROUPs and is owned by the main WORLD element.

### Group Set Element (`GPSET`)
**Group Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### World Element (`WORLD`)

### Group Set Element (`GPSET`)
Group Element (GROUP) - Design - Group
Description
You may define as a GROUP any collection of elements in the database, assembling these elements as a single
GROUP unit.

### Group Element (`GROUP`)
**Group Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Orrf` | Origin reference (for templates) |


### Group World Element (`GPWLD`)
**Legal Members:** None


## Elements in Hanger Component Category


### SUPCOM Attachment Support Component Element (`ANCILLARY`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `MtoLength` | Material List Length |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Lsrod` | Leave rod specification |
| `Cref` | Connection reference |
| `CompReference` | Supported component reference |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Matref` | Material reference |
| `Orrf` | Origin reference (for templates) |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Invfarray` | Array of Inventory Items |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Stext` | S Text string |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Spkbrk` | ATTA flag to treat as a real element |
| `Loffline` | Offline flag |
| `Fstatus` | Fstatus |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)

### Supports Structure Reference Element Element (`SSREFELEMENT`)

### Beam Bolting Attachment Element (`BBOLT`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Beam Welding Attachment Element (`BWLD`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Clevis Element (`CLEVIS`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Eyenut Element (`EYENUT`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Eye Rod Element (`EYRD`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Panel Hanger Ancillary Component Element (`HANCILLARY`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Desparam` | Design parameters |
| `Lsrod` | Leave rod specification |
| `PSPReference` | Associated POINSP Reference |
| `CompReference` | Supported component reference |
| `Orrf` | Origin reference (for templates) |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Loffline` | Offline flag |
| `Spref` | Component spec reference |
| `Position` | Position |
| `Orientation` | Orientation |
| `HanICPosition` | INTERNAL HANCI cached position |
| `HanICOffset` | HANCI INTERNAL CACHED OFFSET |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Posline` | Positioning line |
| `Sjustification` | Surface justification of Panel |
| `Zoffset` | Z-offset |


### Structural Generic Section Element (`GENSEC`)

### Pipe Hanger Element (`HANGER`)
**Legal Members:** None


### Hanger Element (`HELEMENT`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Hanger Nut Element (`HNUT`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Hanger Pin Element (`HPIN`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Hanger Rod Element (`HROD`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Luancillary Element (`LUANCILLARY`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `MtoLength` | Material List Length |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Cref` | Connection reference |
| `CompReference` | Supported component reference |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Matref` | Material reference |
| `Orrf` | Origin reference (for templates) |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Invfarray` | Array of Inventory Items |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Stext` | S Text string |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Spkbrk` | ATTA flag to treat as a real element |
| `Loffline` | Offline flag |
| `Fstatus` | Fstatus |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |


### Pipe Support Component Element (`LUG`)

### Supports Structure Reference Element Element (`SSREFELEMENT`)
Description
Component for pipe clamps.

### Pipe Clamp Element (`PCLAMP`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Pipe Clip Element (`PCLIP`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Pipe Lug Element (`PLUG`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### PCLA Overstrap Element (`POST`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Rod Coupling Element (`RCPL`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None

Description
Component for all connections to supporting steelwork.

### Steel Clamp Element (`SCLAMP`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Shoe Element (`SHOE`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Steel Lug Attachment Element (`SLUG`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Snubber Element (`SNUB`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### SCLA Overstrap Element (`SOST`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Spacer Element (`SPACER`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Supports Structure Reference Element Element (`SSREFELEMENT`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Orrf` | Origin reference (for templates) |
| `Matref` | Material reference |
| `Desparam` | Design parameters |
| `Isohidden` | Isohidden flag |
| `Mtocomponent` | Material list control for components |
| `Stext` | S Text string |
| `Spref` | Component spec reference |
| `Shop` | Shop/Site flag |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |


### SUPCOM Attachment Support Component Element (`ANCILLARY`)

### Luancillary Element (`LUANCILLARY`)

### Trancillary Element (`TRANCILLARY`)
**Legal Members:** None


### Steel Section Element (`STLS`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Sway Brace Element (`SWBR`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Trancillary Element (`TRANCILLARY`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `MtoLength` | Material List Length |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Cref` | Connection reference |
| `CompReference` | Supported component reference |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Matref` | Material reference |
| `Orrf` | Origin reference (for templates) |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Invfarray` | Array of Inventory Items |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Stext` | S Text string |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Spkbrk` | ATTA flag to treat as a real element |
| `Loffline` | Offline flag |
| `Fstatus` | Fstatus |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Pipe Support Component Element (`TRUNNION`)

### Supports Structure Reference Element Element (`SSREFELEMENT`)

### Turnbuckle Element (`TRNB`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Trunnion Element (`TRNN`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Trunnion Reducer Element (`TRREDUCER`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Pipe Support Component Element (`TRUNNION`)
**Legal Members:** None


### U Bolt Element (`UBOLT`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Variable Effort Spring Hanger Element (`VSPR`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Washer Element (`WASH`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Nload` | Nominal load |
| `Crfarray` | Connection reference array |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


### Wear Pad Element (`WPAD`)
**Hanger Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lsrod` | Leave rod specification |
| `Crfarray` | Connection reference array |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Posflag` | Positioning flag |
| `Oriflag` | Orientation flag |
| `Angle` | Angle |
| `Height` | Height |
| `Nload` | Nominal load |
| `Invfarray` | Array of Inventory Items |


### Pipe Hanger Element (`HANGER`)

### Pipe Support Component Element (`SUPCOMP`)
**Legal Members:** None


## Elements in Hull Curved Category


### General Shell Curve Element (`CCURVE`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |


### Surface Element (`CSURF`)

### Surface Proxy Element (`CSURPX`)
**Legal Members:** None


### Shell Hole Element (`CHOLE`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Surface Proxy Element (`CSURPX`)
**Legal Members:** None


### Curved Panel Boundary Element (`CPANBO`)
**Hull Curved Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Curved Panel Element (`CPANEL`)

### Idealized Curved Panel Element (`HICPAN`)
**Legal Members:** None


### Curved Panel Element (`CPANEL`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |


### Block Element (`BLOCK`)
**Legal Members:** `CPANBO`


### Curved Panel Internal Seam Element (`CPNISE`)

### Shell Stiffener Element (`CSTIFF`)

### Plane Element (`CPLANE`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Cplanes Collection Element (`CPLANS`)

### Mog World Element (`MOGWLD`)
**Legal Members:** None


### Cplanes Collection Element (`CPLANS`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Purpose` | Description code word |
| `Name` | Name of the element |
| `Description` | Description of the element |


### Surface World Element (`SSOWLD`)

### Plane Element (`CPLANE`)

### Shell Plate Element (`CPLATE`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Surface Proxy Element (`CSURPX`)
**Legal Members:** None


### Curved Panel Internal Seam Element (`CPNISE`)
**Hull Curved Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Curved Panel Element (`CPANEL`)

### Idealized Curved Panel Element (`HICPAN`)
**Legal Members:** None


### Cpoints Collection Element (`CPOINS`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Purpose` | Description code word |
| `Name` | Name of the element |
| `Description` | Description of the element |


### Surface World Element (`SSOWLD`)

### Curved Hull Point Element (`CPOINT`)

### Curved Hull Point Element (`CPOINT`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Cpoints Collection Element (`CPOINS`)

### Mog World Element (`MOGWLD`)
**Legal Members:** None


### Shell Profile Cutout Element (`CPRCUT`)
**Hull Curved Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `HncKey` | Hole Notch Cutout Key |
| `TBID` | Tribon ID |


### Shell Stiffener Element (`CSTIFF`)
**Legal Members:** None


### Shell Stiffener End Element (`CPREND`)
**Hull Curved Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Shell Stiffener Element (`CSTIFF`)
**Legal Members:** None


### Shell Profile Hole Element (`CPRHOL`)
**Hull Curved Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `HncKey` | Hole Notch Cutout Key |
| `TBID` | Tribon ID |


### Shell Stiffener Element (`CSTIFF`)
**Legal Members:** None


### Shell Profile Marking Element (`CPRMRK`)
**Hull Curved Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Shell Stiffener Element (`CSTIFF`)
**Legal Members:** None


### Shell Profile Notch Element (`CPRNOT`)
**Hull Curved Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Shell Stiffener Element (`CSTIFF`)
**Legal Members:** None


### Shell Profile Element (`CPROF`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Surface Proxy Element (`CSURPX`)

### Shell Profile Trace Curve Element (`CPROTR`)

### Shell Profile Trace Curve Element (`CPROTR`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Shell Profile Element (`CPROF`)

### Shell Stiffener Element (`CSTIFF`)

### Seam Element (`CSEAM`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Surface Proxy Element (`CSURPX`)
**Legal Members:** None


### Shell Stiffener Element (`CSTIFF`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Curved Panel Element (`CPANEL`)

### Shell Profile Trace Curve Element (`CPROTR`)
**Legal Members:** `CPRCUT`, `CPREND`, `CPRHOL`


### Shell Profile Marking Element (`CPRMRK`)

### Shell Profile Notch Element (`CPRNOT`)

### Surface Element (`CSURF`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Surface World Element (`SSOWLD`)

### General Shell Curve Element (`CCURVE`)

### Surface Proxy Element (`CSURPX`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Hull Curved Model World Element (`HCMWLD`)
**Legal Members:** `CCURVE`, `CHOLE`, `CPLATE`


### Shell Profile Element (`CPROF`)

### Seam Element (`CSEAM`)

### Envelope Element (`ENVLOP`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Obstruction` | Obstruction level |
| `Uuid` | Universally unique identifier |


### Surface World Element (`SSOWLD`)

### Box Element (`BOX`)

### Envelope Data Element (`ENVDAT`)

### Polyface Surface Element (`PFACE`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |


### Surface World Element (`SSOWLD`)

### Polyface Curves Element (`PFCRVS`)

### Polyface Definition Element (`PFDEFI`)

### Polyface Curves Element (`PFCRVS`)
**Hull Curved Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Polyface Surface Element (`PFACE`)

### Polyface Curve Element (`PFCURV`)

### Polyface Definition Element (`PFDEFI`)
**Hull Curved Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Polyface Surface Element (`PFACE`)
**Legal Members:** `PFFACE`


### Face Edge Element (`PFEDGE`)

### Polyface Point Element (`PFPOIN`)

### Surface Instance Element (`SRFSUR`)
**Hull Curved Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Obstruction` | Obstruction level |
| `CHNGD` | Changed counter |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Surface World Element (`SSOWLD`)
**Legal Members:** `DBOX`


### Cloning Definition Element (`DCLONE`)

### Surface Instance Curve Group Element (`SRFCGR`)

### Surface Instance Definition Element (`SRFDEF`)

## Elements in Hull General Category


### Block Element (`BLOCK`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `CHNGD` | Changed counter |
| `Number` | Number |


### Hull Block World Element (`HBLWLD`)

### World Element (`WORLD`)

### Curved Panel Element (`CPANEL`)

### Planar Panel Element (`HPANEL`)

### Compartment World Element (`COMWLD`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)

### Exposed Compartment Element (`HCOMPT`)

### Connection Group Element (`CONGRP`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Hull Connection World Element (`CONWLD`)

### Hull Connections Element (`HULCON`)

### Hull Connection Item Element (`CONITM`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `HCNREF` | HullConnection reference |


### Hull Connections Element (`HULCON`)
**Legal Members:** None


### Hull Connection World Element (`CONWLD`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### World Element (`WORLD`)

### Connection Group Element (`CONGRP`)

### Curve Geometry Element (`CURGEO`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |


### Common Reference Curve Instance Element (`ICRCUR`)

### Surface Curve Element (`SCCURV`)

### Surface Instance Curve Element (`SRFCUR`)

### ARCHIV Element (`ARCHIV`)

### Definition Boundary Element (`DBNDRY`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `OrdLim` | Ordered limits |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Definition Plate Element (`DPLATE`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** `DBOX`, `DCTOUT`, `DCLIP`, `DLINE`, `DMODRF`, `DNOTCH`, `DPLIM`


### Definition Point Element (`DPNT`)

### Definition Seam Element (`DSEAM`)

### Definition Axis Parallel Box Element (`DBOX`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |

**Legal Owners:** `DBNDRY`, `DCRCUR`, `DFCPLA`, `DINTER`, `DPILLR`, `DPLIM`, `DSEAM`, `DSEG`, `DSTIFF`


### Context Definition Element (`SPMCON`)

### Surface Instance Element (`SRFSUR`)

### Hull Panel Element (`UPANEL`)

### Definition Point Element (`DPNT`)

### Definition Bracket Arm A Element (`DBRARA`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `MnDirE` | Main direction enumerated |
| `BrArLn` | Bracket arm length |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Definition Bracket Element (`DBRCKT`)

### Definition Model Reference Element (`DMODRF`)

### Definition Bracket Arm B Element (`DBRARB`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `MnDirE` | Main direction enumerated |
| `BrArLn` | Bracket arm length |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Definition Bracket Element (`DBRCKT`)

### Definition Model Reference Element (`DMODRF`)

### Definition Bracket Element (`DBRCKT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |

**Legal Owners:** `DFCPLA`


### Hull Panel Pillar Definition Element (`DPILLR`)

### Definition Stiffener Element (`DSTIFF`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** `DBRARA`, `DBRARB`, `DCTOUT`, `DHOLE`, `DLOCTN`, `DNOTCH`


### Definition Plate Element (`DPLATE`)

### Definition Stiffener Element (`DSTIFF`)

### Definition Clip Element (`DCLIP`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `TplTyp` | Template type |
| `TplPar` | Template parameters |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Definition Cutout Element (`DCTOUT`)

### Definition Plate Material Element (`DPLAMT`)

### Definition Plate Material Position Element (`DPLAPO`)

### Cloning Definition Element (`DCLONE`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |

**Legal Owners:** `CRMCUR`


### Commmon Reference Model Point Element (`CRMPNT`)

### Surface Instance Element (`SRFSUR`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** `DCLRFL`


### Clone Rotation Element (`DCLROT`)

### Clone Translation Element (`DCLTRA`)

### Cloning Reflection Element (`DCLRFL`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Cltrid` | Cloning transformation composition index |


### Cloning Definition Element (`DCLONE`)
**Legal Members:** `DMODRF`


### Definition Plane Element (`DPLANE`)

### Definition Point Element (`DPNT`)

### Clone Rotation Element (`DCLROT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Angle` | Angle |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Cltrid` | Cloning transformation composition index |


### Cloning Definition Element (`DCLONE`)
**Legal Members:** `DLINE`, `DMODRF`


### Definition Plane Element (`DPLANE`)

### Definition Point Element (`DPNT`)

### Clone Translation Element (`DCLTRA`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Offdistance` | Offset distance applied to repeat elements |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Cltrid` | Cloning transformation composition index |


### Cloning Definition Element (`DCLONE`)
**Legal Members:** `DCRDEX`, `DCRDGR`, `DLINE`


### Definition Model Reference Element (`DMODRF`)

### Definition Plane Element (`DPLANE`)

### Definition Coordinate Explicit Element (`DCRDEX`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `CAxisE` | Coordinate axis enumerated |
| `CVals` | Coordinate values |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |

**Legal Owners:** `DCLTRA`, `DCRDSY`, `DMODRF`, `DLINE`


### Definition Plane Element (`DPLANE`)

### Definition Point Element (`DPNT`)

### Definition Vector Element (`DVEC`)
**Legal Members:** None


### Definition Coordinate Grid Position Element (`DCRDGR`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `CAxisE` | Coordinate axis enumerated |
| `CGrPos` | Coordinate grid positions |
| `CGROFF` | Grid position offset |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |

**Legal Owners:** `DCLTRA`, `DCRDSY`


### Definition Axis Parallel Line Element (`DLINE`)

### Definition Plane Element (`DPLANE`)

### Definition Point Element (`DPNT`)
**Legal Members:** None


### Definition Coordinate System Element (`DCRDSY`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Definition Location Element (`DLOCTN`)
**Legal Members:** `DCRDEX`


### Definition Coordinate Grid Position Element (`DCRDGR`)

### Definition Point Element (`DPNT`)

### Definition Cutout Element (`DCTOUT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `TplTyp` | Template type |
| `TplPar` | Template parameters |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |

**Legal Owners:** `DBNDRY`, `DBRCKT`, `DFCPLA`, `DPILLR`


### Definition Plate Element (`DPLATE`)

### Definition Stiffener Element (`DSTIFF`)

### Hull Panel Element (`UPANEL`)

### Definition Clip Element (`DCLIP`)

### Definition Model Reference Element (`DMODRF`)

### Definition Endcut Element (`DENDCT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Ncttyp` | Type of end cut (Undefined, Sniped, Tight) |
| `Nctgap` | End cut gap or overlap |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Definition End From Element (`DENDFR`)

### Definition End To Element (`DENDTO`)

### Definition Model Reference Element (`DMODRF`)

### Definition Vector Element (`DVEC`)

### Definition End From Element (`DENDFR`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |

**Legal Owners:** `DCRCUR`, `DFCPLA`, `DINTER`, `DPILLR`


### Definition Seam Element (`DSEAM`)

### Definition CRM Curve Segment Element Element (`DSEG`)

### Definition Stiffener Element (`DSTIFF`)
**Legal Members:** `DENDCT`


### Definition Model Reference Element (`DMODRF`)

### Definition Plane Element (`DPLANE`)

### Definition End To Element (`DENDTO`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |

**Legal Owners:** `DCRCUR`, `DFCPLA`, `DINTER`, `DPILLR`


### Definition Seam Element (`DSEAM`)

### Definition CRM Curve Segment Element Element (`DSEG`)

### Definition Stiffener Element (`DSTIFF`)
**Legal Members:** `DENDCT`


### Definition Model Reference Element (`DMODRF`)

### Definition Plane Element (`DPLANE`)

### Hull Panel Face Plate Definition Element (`DFCPLA`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `MnDirE` | Main direction enumerated |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Hull Panel Element (`UPANEL`)
**Legal Members:** `DBOX`, `DBRCKT`, `DCTOUT`, `DENDFR`, `DENDTO`, `DFPPOS`, `DHOLE`, `DMODRF`, `DNOTCH`


### Definition Plate Element (`DPLATE`)

### Definition Profile Material Element (`DPROMT`)

### Face Plate Position Element (`DFPPOS`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `MnSidE` | Main side enumerated |
| `MnDirE` | Main direction enumerated |
| `MtOff` | Material offset |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Hull Panel Face Plate Definition Element (`DFCPLA`)
**Legal Members:** None


### Definition Hole Element (`DHOLE`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `TplTyp` | Template type |
| `TplPar` | Template parameters |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |

**Legal Owners:** `DBNDRY`, `DBRCKT`, `DFCPLA`, `DPILLR`


### Definition Plate Element (`DPLATE`)

### Definition Stiffener Element (`DSTIFF`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** `DLINE`


### Definition Model Reference Element (`DMODRF`)

### Definition Point Element (`DPNT`)

### Definition Axis Parallel Line Element (`DLINE`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `MnDirE` | Main direction enumerated |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |

**Legal Owners:** `DBNDRY`, `DCLROT`, `DCLTRA`, `DHOLE`


### Definition CRM Curve Intersection Element Element (`DINTER`)

### Definition Plane Element (`DPLANE`)

### Definition Plate Element (`DPLATE`)

### Definition Coordinate Explicit Element (`DCRDEX`)

### Definition Coordinate Grid Position Element (`DCRDGR`)

### Definition Location Element (`DLOCTN`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |

**Legal Owners:** `DBRCKT`, `DCRCUR`


### Common Reference Point Definition Element (`DCRPNT`)

### Definition Plate Element (`DPLATE`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** `DCRDSY`


### Definition Location Reference Element (`DLOCRF`)

### Definition Model Reference Element (`DMODRF`)

### Definition Model Reference Element (`DMODRF`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `ModDbR` | Model Db Ref |
| `ModNme` | Model name |
| `Compid` | Component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |

**Legal Owners:** `DBNDRY`, `DBRARA`, `DBRARB`, `DCLRFL`, `DCLROT`, `DCLTRA`, `DCTOUT`, `DENDCT`, `DENDFR`, `DENDTO`, `DEPNT`, `DFCPLA`, `DHOLE`, `DINTC`, `DINTER`, `DCLRFL`, `DNOTCH`, `DPILLR`, `DPLIM`, `DPLL`, `DSEAM`


### Definition Stiffener Element (`DSTIFF`)

### Definition CRM Curve Segment Element Element (`DSEG`)

### Definition Stiffener Element (`DSTIFF`)
**Legal Members:** None


### Definition Notch Element (`DNOTCH`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `TplTyp` | Template type |
| `TplPar` | Template parameters |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |

**Legal Owners:** `DBNDRY`, `DBRCKT`, `DFCPLA`, `DPILLR`


### Definition Plate Element (`DPLATE`)

### Definition Stiffener Element (`DSTIFF`)

### Hull Panel Element (`UPANEL`)

### Definition Model Reference Element (`DMODRF`)

### Definition Plane Element (`DPLANE`)

### Parallel Displacement by Point Element (`DOFSTP`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `MnDirE` | Main direction enumerated |
| `CVals` | Coordinate values |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Definition Limit Element (`DPLIM`)

### Definition Seam Element (`DSEAM`)

### Definition Stiffener Element (`DSTIFF`)

### Definition Point Element (`DPNT`)

### Hull Panel Pillar Definition Element (`DPILLR`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `MnDirE` | Main direction enumerated |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Hull Panel Element (`UPANEL`)
**Legal Members:** `DBOX`, `DBRCKT`, `DCTOUT`, `DENDFR`, `DENDTO`, `DHOLE`, `DMODRF`, `DNOTCH`, `DPIPOS`, `DPLATE`


### Definition Plane Element (`DPLANE`)

### Definition Profile Material Element (`DPROMT`)

### Face Plate Position Element (`DPIPOS`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `MnSidE` | Main side enumerated |
| `MnDirE` | Main direction enumerated |
| `Angle` | Angle |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Hull Panel Pillar Definition Element (`DPILLR`)
**Legal Members:** None


### Definition Plate Material Element (`DPLAMT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `MThick` | Material thickness |
| `MGrade` | Material grade |
| `Name` | Name of the element |
| `Matref` | Material reference |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Definition Clip Element (`DCLIP`)

### Definition Plate Element (`DPLATE`)
**Legal Members:** None


### Definition Plane Element (`DPLANE`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `PRestr` | Plane restricted |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |

**Legal Owners:** `DCLRFL`, `DCLROT`, `DCLTRA`, `DENDFR`, `DENDTO`, `DINTER`, `DNOTCH`, `DPILLR`, `DPLIM`, `DSEAM`


### Definition Stiffener Element (`DSTIFF`)

### Create From Boundaries Definition Element (`SPMCFB`)

### Divider Definition Element (`SPMDIV`)
**Legal Members:** `DBRARA`


### Definition Axis Parallel Line Element (`DLINE`)

### Definition Bracket Arm B Element (`DBRARB`)

### Definition Plate Material Position Element (`DPLAPO`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `MnSidE` | Main side enumerated |
| `MtOff` | Material offset |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Definition Clip Element (`DCLIP`)

### Definition Plate Element (`DPLATE`)
**Legal Members:** None

General Element

### Definition Plate Element (`DPLATE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |

**Legal Owners:** `DBRCKT`, `DFCPLA`, `DPLATE`


### Hull Panel Pillar Definition Element (`DPILLR`)

### Definition Stiffener Element (`DSTIFF`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** `DBNDRY`, `DCTOUT`, `DCLIP`, `DLINE`, `DNOTCH`, `DPLAMT`, `DPLAPO`, `DPLATE`, `DPNT`


### Cloning Reflection Element (`DCLRFL`)

### Definition Stiffener Element (`DSTIFF`)

### Definition Limit Element (`DPLIM`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `DICmId` | Predefined instance component identities |
| `MnSidE` | Main side enumerated |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Definition Boundary Element (`DBNDRY`)

### Common Reference Curve Definition Element (`DCRCUR`)
**Legal Members:** `DBOX`


### Definition Model Reference Element (`DMODRF`)

### Parallel Displacement by Point Element (`DOFSTP`)

### Definition Point Element (`DPNT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |

**Legal Owners:** `DBNDRY`, `DBOX`, `DCLRFL`, `DCLROT`, `DBRCKT`, `DCLIP`


### Definition CRM Curve Intersection Element Element (`DINTER`)

### Parallel Displacement by Point Element (`DOFSTP`)

### Definition Plate Element (`DPLATE`)

### Definition Bracket Arm A Element (`DBRARA`)

### Definition Bracket Arm B Element (`DBRARB`)

### Definition Profile Material Element (`DPROMT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `TplTyp` | Template type |
| `TplPar` | Template parameters |
| `MGrade` | Material grade |
| `Matref` | Material reference |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Hull Panel Face Plate Definition Element (`DFCPLA`)

### Hull Panel Pillar Definition Element (`DPILLR`)

### Definition Stiffener Element (`DSTIFF`)
**Legal Members:** None


### Definition Seam Element (`DSEAM`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `MnDirE` | Main direction enumerated |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Definition Boundary Element (`DBNDRY`)
**Legal Members:** `DBOX`, `DENDFR`, `DENDTO`, `DMODRF`


### Parallel Displacement by Point Element (`DOFSTP`)

### Definition Plane Element (`DPLANE`)

### Definition Stiffener Element (`DSTIFF`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `MnDirE` | Main direction enumerated |
| `DICmId` | Predefined instance component identities |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Definition Bracket Element (`DBRCKT`)

### Definition Plate Element (`DPLATE`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** `DBOX`, `DBRCKT`, `DCTOUT`, `DENDFR`, `DENDTO`, `DCLIP`, `DMODRF`, `DNOTCH`, `DOFSTP`, `DPLANE`, `DPLATE`


### Definition Profile Material Element (`DPROMT`)

### Definition Stiffener Position Element (`DSTIPO`)

### Definition Stiffener Position Element (`DSTIPO`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `MnSidE` | Main side enumerated |
| `MnDirE` | Main direction enumerated |
| `MtOff` | Material offset |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Definition Stiffener Element (`DSTIFF`)
**Legal Members:** None


### Definition Vector Element (`DVEC`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `DCmpId` | Definition component identity |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Definition Endcut Element (`DENDCT`)

### Definition Coordinate Explicit Element (`DCRDEX`)

### Finite Beam Element Element (`FEBEAM`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `CHNGD` | Changed counter |


### Finite Element Model Element (`FEMODL`)
**Legal Members:** None


### Finite Free Edges Element Element (`FEFRED`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `CHNGD` | Changed counter |


### Finite Element Model Element (`FEMODL`)
**Legal Members:** None


### Finite Element Model Image Element (`FEMIMG`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `CHNGD` | Changed counter |


### Finite Element Model World Element (`FEMWLD`)
**Legal Members:** None


### Finite Element Model Element (`FEMODL`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `CHNGD` | Changed counter |
| `Obstruction` | Obstruction level |


### Finite Element Model World Element (`FEMWLD`)
**Legal Members:** `FEBEAM`, `Finite Free Edges Element Element (FEFRED`


### Finite Shell Element Element (`FESHEL`)

### Finite Truss Element Element (`FETRUS`)

### Finite Element Model World Element (`FEMWLD`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)
**Legal Members:** `FEMIMG`, `FEMODL`


### FEMZON Element (`FEMZON`)

### Idealized Block Element (`HIBLO`)

### Finite Shell Element Element (`FESHEL`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `CHNGD` | Changed counter |


### Finite Element Model Element (`FEMODL`)
**Legal Members:** None


### Finite Truss Element Element (`FETRUS`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `CHNGD` | Changed counter |


### Finite Element Model Element (`FEMODL`)
**Legal Members:** None


### Hull Block World Element (`HBLWLD`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)

### Block Element (`BLOCK`)

### Hull Curved Model World Element (`HCMWLD`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)

### Surface Proxy Element (`CSURPX`)

### Exposed Compartment Element (`HCOMPT`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Compartment World Element (`COMWLD`)
**Legal Members:** None


### Idealized Planar Panel Bead Element (`HIBEA`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Block Element (`HIBLO`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `CHNGD` | Changed counter |


### Finite Element Model World Element (`FEMWLD`)

### Idealized Curved Panel Element (`HICPAN`)

### Idealized Planar Panel Element (`HIPAN`)

### Idealized Planar Panel Boundary Element (`HIBOU`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Bracket Element (`HIBRA`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Shell Hole Element (`HICHOL`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Curved Panel Element (`HICPAN`)
**Legal Members:** None


### Idealized Curved Panel Element (`HICPAN`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |


### Idealized Block Element (`HIBLO`)
**Legal Members:** `CPANBO`, `CPNISE`, `HICHOL`


### Idealized Shell Plate Element (`HICPLA`)

### Idealized Shell Stiffener Element (`HICSTI`)

### Idealized Shell Plate Element (`HICPLA`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Curved Panel Element (`HICPAN`)
**Legal Members:** None


### Idealized Shell Stiffener Element (`HICSTI`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Curved Panel Element (`HICPAN`)
**Legal Members:** None


### Idealized Planar Panel Curve Element (`HICUR`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Cutout Element (`HICUT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Doubling Plate Element (`HIDOU`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Flange Element (`HIFLA`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Hole Element (`HIHOL`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Notch Element (`HINOT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Element (`HIPAN`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |


### Idealized Block Element (`HIBLO`)
**Legal Members:** `HIBEA`, `HIBOU`, `HIBRA`, `HICUR`, `HICUT`, `HIDOU`, `HIFLA`, `HIHOL`, `HINOT`, `HIPIL`, `HIPLA`, `HIPOI`


### Idealized Planar Panel Seam Element (`HISEA`)

### Idealized Planar Panel Stiffener Element (`HISTI`)

### Idealized Planar Panel Pillar Element (`HIPIL`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Plate Element (`HIPLA`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Point Element (`HIPOI`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Seam Element (`HISEA`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Idealized Planar Panel Stiffener Element (`HISTI`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Idealized Planar Panel Element (`HIPAN`)
**Legal Members:** None


### Hull Mark World Element (`HMKWLD`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)

### Hullmark Element (`HMARK`)

### Hull Topology References Element (`HTPELE`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `HtpRef` | Topology reference |
| `Url` | URL |

**Legal Members:** None


### Hull Connections Element (`HULCON`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |


### Connection Group Element (`CONGRP`)

### Hull Connection Item Element (`CONITM`)

### Hull Panel Boundary Instance Element (`IBNDRY`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element |
| `ICmpId` | Instance component identity |
| `PlaDef` | Panel has plates |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Hull Panel Element (`UPANEL`)

### Boundary Limit Instance Element (`ILIM`)

### Hull Panel Bracket Instance Element (`IBRCKT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Hull Panel Element (`UPANEL`)
**Legal Members:** `ICLIP`, `ICTOUT`, `IHOLE`, `INOTCH`


### Hull Panel Plate Instance Element (`IPLATE`)

### Hull Panel Stiffener Instance Element (`ISTIFF`)

### Hull Panel Clip Instance Element (`ICLIP`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element. |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` | Obstruction |
| `Obstruction level` |  |


### Hull Panel Bracket Instance Element (`IBRCKT`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** None


### Hull Panel Cutout Instance Element (`ICTOUT`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element. |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Hull Panel Bracket Instance Element (`IBRCKT`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** None


### Profile End From Instance Element (`IENDFR`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Position` | Position |
| `Cutvector` | Cut plane normal |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `ICmpId` | Instance component identity |
| `DefRef` | Reference to a definition element |


### Hull Panel Face Plate Instance Element (`IFCPLA`)

### Hull Panel Pillar Instance Element (`IPILLR`)

### Hull Panel Stiffener Instance Element (`ISTIFF`)
**Legal Members:** None


### Profile End To Instance Element (`IENDTO`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Position` | Position |
| `Cutvector` | Cut plane normal |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `ICmpId` | Instance component identity |
| `DefRef` | Reference to a definition element |


### Hull Panel Face Plate Instance Element (`IFCPLA`)

### Hull Panel Pillar Instance Element (`IPILLR`)

### Hull Panel Stiffener Instance Element (`ISTIFF`)
**Legal Members:** None


### Hull Panel Face Plate Instance Element (`IFCPLA`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` | Position |
| `Position` | Orientation |
| `Orientation` | Posstart |
| `Start point position` | Posend |
| `End point position` | Obstruction |
| `Obstruction level` | TwiDis |
| `Profile twist distance` | TwiVec |
| `Profile twist orientation vector` |  |


### Hull Panel Element (`UPANEL`)

### Profile End From Instance Element (`IENDFR`)

### Profile End To Instance Element (`IENDTO`)

### Hull Panel Hole Instance Element (`IHOLE`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Hull Panel Bracket Instance Element (`IBRCKT`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** None


### Boundary Limit Instance Element (`ILIM`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Hull Panel Boundary Instance Element (`IBNDRY`)
**Legal Members:** None


### Hull Panel Notch Instance Element (`INOTCH`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element. |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Hull Panel Bracket Instance Element (`IBRCKT`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** None


### Hull Panel Pillar Instance Element (`IPILLR`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` | Position |
| `Position` | Orientation |
| `Orientation` | Posstart |
| `Start point position` | Posend |
| `End point position` | Obstruction |
| `Obstruction level` | TwiDis |
| `Profile twist distance` | TwiVec |
| `Profile twist orientation vector` |  |


### Hull Panel Element (`UPANEL`)

### Profile End From Instance Element (`IENDFR`)

### Profile End To Instance Element (`IENDTO`)

### Hull Panel Plate Instance Element (`IPLATE`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` | Obstruction |
| `Obstruction level` |  |


### Hull Panel Bracket Instance Element (`IBRCKT`)

### Hull Panel Element (`UPANEL`)
**Legal Members:** None


### Hull Panel Seam Instance Element (`ISEAM`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Uuid` | Universally unique identifier |
| `CHNGD` | Changed counter |
| `DefRef` | Reference to a definition element. |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### Hull Panel Element (`UPANEL`)
**Legal Members:** None


### Hull Panel Stiffener Instance Element (`ISTIFF`)
**Hull General Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Posstart` | Start point position |
| `Posend` | End point position |
| `Uuid` | Universally unique identifier |
| `DefRef` | Reference to a definition element |
| `TwiDis` | Profile twist distance |
| `TwiVec` | Profile twist orientation vector |
| `ICmpId` | Instance component identity |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` | Obstruction |
| `Obstruction level` |  |


### Hull Panel Bracket Instance Element (`IBRCKT`)

### Hull Panel Element (`UPANEL`)

### Profile End From Instance Element (`IENDFR`)
Mog World Element (MOGWLD) - Design - Hull General

### Profile End To Instance Element (`IENDTO`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)
**Legal Members:** `CPLANE`


### Curved Hull Point Element (`CPOINT`)

### Miscellaneous Object Element (`MOGOBJ`)

### Reference Surface World Element (`RSOWLD`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)

### Exposed Reference Surface Object Element (`HRSO`)

### Surface World Element (`SSOWLD`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `SpcRef` | Reference to a space element |
| `Uuid` | Universally unique identifier |


### World Element (`WORLD`)
**Legal Members:** `CPLANS`, `CPOINS`, `CSURF`, `ENVLOP`, `PFACE`


### Sculptured Surface Element (`SCSURF`)

### Surface Instance Element (`SRFSUR`)

### Standard World Element (`STDWLD`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)
**Legal Members:** `HBRAPN`


### Standard Bracket Element (`HSTBRA`)

### Generic Setup Info Object Element (`SUPNFO`)

### Generic Setup Info Object Element (`SUPNFO`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Standard World Element (`STDWLD`)
**Legal Members:** None


### Hull Panel Element (`UPANEL`)
**Hull General Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Uuid` | Universally unique identifier |
| `STRFNC` | Structural Function description |
| `TGHETP` | Type of Tightness code |
| `Origrf` | A reference to the element this one is cloned from |
| `Isoltd` | A flag determining whether an element is to be |
| `isolated from cloning updates` |  |


### FEMZON Element (`FEMZON`)

### Zone Element (`ZONE`)
**Legal Members:** `DBRCKT`, `DBOX`, `DPLATE`, `DLOCTN`, `DCLONE`, `DCRCUR`, `DCRPNT`, `DCTOUT`, `DFCPLA`, `DHOLE`, `DNOTCH`, `DPILLR`, `DSTIFF`, `IBNDRY`, `IBRCKT`, `ICLIP`, `ICRCUR`, `ICRPNT`, `ICTOUT`, `IFCPLA`, `IHOLE`, `INOTCH`, `IPILLR`


### Hull Panel Plate Instance Element (`IPLATE`)

### Hull Panel Seam Instance Element (`ISEAM`)

### Hull Panel Stiffener Instance Element (`ISTIFF`)

## Elements in Hull Manufacturing Category


### Generic Hull Reference Element (`HRDREF`)
**Hull Manufacturing Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `HDBREF` | Generic Hull DB Ref |

**Legal Members:** None


### Weld Element (`MWELD`)
**Hull Manufacturing Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |
| `WcAng` | Weld connection angle |
| `Wcom` | Weld comment |
| `WeSusp` | Weld end suspension |
| `WiAng` | Weld inclination angle |
| `WldPos` | Welding position |
| `Wlegl` | Weld leg length |
| `Wlen` | Weld length |
| `Wnam` | Weld name |
| `WnLay` | Number of weld layers |
| `Wproc` | Welding process |
| `WrAng` | Weld rotation angle |
| `WsProc` | Welding standard process |
| `WsSusp` | Weld start suspension |
| `Wtorch` | Weld torch vector |
| `WtProc` | Welding test procedure |
| `JntBev` | Joint part bevel code |
| `JntThk` | Joint part thickness |


### Weld Joint Element (`MWLDJT`)
**Legal Members:** None


### Weld Joint Element (`MWLDJT`)
**Hull Manufacturing Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |
| `JntCom` | Welded joint comment |
| `JntNam` | Welded joint name |
| `JnttSl` | Total welded joint suspension length |
| `JnttWl` | Total welded joint length |
| `JntTyp` | Welded joint type |


### Weld Table Element (`MWLDTB`)

### Weld Element (`MWELD`)

### Weld Joint Part Element (`MWPART`)

### Weld Table Element (`MWLDTB`)
**Hull Manufacturing Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `TsLen` | Total suspension length |
| `TwLen` | Total weld length |
| `WtCom` | Weld table comment |
| `WtStat` | Weld table status |


### Weld Table World Element (`MWLWLD`)

### Weld Joint Element (`MWLDJT`)

### Weld Table World Element (`MWLWLD`)
**Hull Manufacturing Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)

### Weld Table Element (`MWLDTB`)

### Weld Joint Part Element (`MWPART`)
**Hull Manufacturing Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |
| `ParNam` | Part name |
| `PrtIdl` | Long part id |
| `QuaTxt` | Quality |
| `Hurefl` | Reflected |


### Weld Joint Element (`MWLDJT`)
**Legal Members:** None


## Elements in Hull Planar Category


### Planar Panel Bead Element (`HBEAD`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Planar Panel Bracket Boundary Element (`HBRABO`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Bracket Element (`HBRCKT`)
**Legal Members:** None


### Bracket Panel Element (`HBRAPN`)
**Hull Planar Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Standard World Element (`STDWLD`)
**Legal Members:** None


### Planar Panel Bracket Element (`HBRCKT`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |
| `Number` | Number |
| `Modsta` | Creation Status of Models as enumerated |
| `IsChgd` | True if hull model is modified/changed |


### Planar Panel Element (`HPANEL`)
**Legal Members:** `HBRABO`


### Planar Panel Bracket Flange Element (`HBRFLA`)

### Planar Panel Bracket Stiffener Element (`HBRSTI`)

### Planar Panel Bracket Flange Element (`HBRFLA`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Bracket Element (`HBRCKT`)

### Planar Panel Profile End Element (`HPREND`)

### Planar Panel Bracket Stiffener Element (`HBRSTI`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Bracket Element (`HBRCKT`)
**Legal Members:** `HPRCUT`, `HPREND`


### Planar Panel Profile Hole Element (`HPRHOL`)

### Planar Panel Profile Notch Element (`HPRNOT`)

### Planar Panel Clip Element (`HCLIP`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |
| `Modsta` | Creation Status of Models as enumerated |


### Planar Panel Cutout Element (`HCTOUT`)
**Legal Members:** None


### Planar Panel Cutout Element (`HCTOUT`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |
| `Modsta` | Creation Status of Models as enumerated |


### Planar Panel Element (`HPANEL`)

### Planar Panel Clip Element (`HCLIP`)

### Planar Panel Curve Element (`HCURVE`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Planar Panel Doubling Plate Element (`HDOPLA`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Planar Panel Flange Element (`HFLANG`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)

### Planar Panel Profile End Element (`HPREND`)

### Planar Panel Hole Element (`HHOLE`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Hullmark Element (`HMARK`)
**Hull Planar Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Purpose` | Description code word |


### Hull Mark World Element (`HMKWLD`)
**Legal Members:** None


### Planar Panel Notch Element (`HNOTCH`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Planar Panel Boundary Interval Element (`HPANBI`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Boundary Element (`HPANBO`)
**Legal Members:** None


### Planar Panel Boundary Element (`HPANBO`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)

### Planar Panel Boundary Interval Element (`HPANBI`)

### Planar Panel Element (`HPANEL`)
**Hull Planar Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Block Element (`BLOCK`)
**Legal Members:** `HBEAD`, `HBRCKT`, `HCTOUT`, `HCURVE`, `HDOPLA`, `HFLANG`, `HHOLE`, `HNOTCH`, `HPANBO`, `HPILLR`, `HPLATE`, `HPOINT`, `HSEAM`, `HSTIFF`


### Subpanel Element (`HSUBPN`)

### Planar Panel Tap Element (`HTAP`)

### Planar Panel Pillar Element (`HPILLR`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)

### Planar Panel Profile End Element (`HPREND`)

### Planar Panel Plate Element (`HPLATE`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |
| `Number` | Number |
| `Desele` | Reference to Design Object |
| `Modsta` | Creation Status of Models as enumerated |
| `IsChgd` | True if hull model is modified/changed |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Planar Panel Point Element (`HPOINT`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Planar Panel Profile Cutout Element (`HPRCUT`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `HncKey` | Hole Notch Cutout Key |
| `TBID` | Tribon ID |


### Planar Panel Bracket Stiffener Element (`HBRSTI`)

### Planar Panel Stiffener Element (`HSTIFF`)
**Legal Members:** None


### Planar Panel Profile End Element (`HPREND`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |
| `Spref` | Component spec reference |

**Legal Owners:** `HBRFLA`, `HBRSTI`


### Planar Panel Flange Element (`HFLANG`)

### Planar Panel Pillar Element (`HPILLR`)

### Planar Panel Stiffener Element (`HSTIFF`)
**Legal Members:** None


### Planar Panel Profile Hole Element (`HPRHOL`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `HncKey` | Hole Notch Cutout Key |
| `TBID` | Tribon ID |


### Planar Panel Bracket Stiffener Element (`HBRSTI`)

### Planar Panel Stiffener Element (`HSTIFF`)
**Legal Members:** None


### Planar Panel Profile Notch Element (`HPRNOT`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Bracket Stiffener Element (`HBRSTI`)

### Planar Panel Stiffener Element (`HSTIFF`)
**Legal Members:** None


### Exposed Reference Surface Object Element (`HRSO`)
**Hull Planar Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Reference Surface World Element (`RSOWLD`)

### Exposed Reference Surface Object Face Element (`HRSOF`)

### Exposed Reference Surface Object Face Element (`HRSOF`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Exposed Reference Surface Object Element (`HRSO`)

### Exposed Reference Surface Object Limit Element (`HRSOL`)

### Exposed Reference Surface Object Limit Element (`HRSOL`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Exposed Reference Surface Object Face Element (`HRSOF`)
**Legal Members:** None


### Planar Panel Seam Element (`HSEAM`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Standard Bracket Element (`HSTBRA`)
**Hull Planar Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Standard World Element (`STDWLD`)
**Legal Members:** None


### Planar Panel Stiffener Element (`HSTIFF`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Desparam` | Design parameters |
| `Spref` | Component spec reference |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |
| `Number` | Number |
| `Desele` | Reference to Design Object |
| `Modsta` | Creation Status of Models as enumerated |
| `IsChgd` | True if hull model is modified/changed |


### Planar Panel Element (`HPANEL`)
**Legal Members:** `HPRCUT`, `HPREND`


### Planar Panel Profile Hole Element (`HPRHOL`)

### Planar Panel Profile Notch Element (`HPRNOT`)

### Subpanel Element (`HSUBPN`)
**Hull Planar Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Planar Panel Tap Element (`HTAP`)
**Hull Planar Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CHNGD` | Changed counter |
| `TBID` | Tribon ID |


### Planar Panel Element (`HPANEL`)
**Legal Members:** None


### Miscellaneous Object Element (`MOGOBJ`)
**Hull Planar Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Mog World Element (`MOGWLD`)
**Legal Members:** None


## Elements in HVAC Component Category


### Air Handling Unit Element (`AHU`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `Access Panel Element`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Battery Element (`BATTERY`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Branch Connector Element (`BRCO`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** None


### Cowl Element (`COWL`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Damper Element (`DAMPER`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Flexible Element (`FLEXIBLE`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Radius` | Radius |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** None


### Grille Element (`GRILLE`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Access Panel Element (`HACC`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Cref` | Connection reference |
| `Stext` | S Text string |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Angle` | Angle |
| `Matref` | Material reference |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |


### Branch Element (`BRANCH`)
**Legal Members:** None


### Fan Element (`HFAN`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Saddle Element (`HSADDLE`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Cref` | Connection reference |
| `Stext` | S Text string |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Angle` | Angle |
| `Matref` | Material reference |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |


### Branch Element (`BRANCH`)
**Legal Members:** None


### Branch Connector Element (`HVBRCO`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Cref` | Connection reference |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`


### Vent Element (`VENT`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Flange Element (`HVFLAN`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`


### Vent Element (`VENT`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Access Panel Element (`HVHACC`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`


### Vent Element (`VENT`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Internal Damper Element (`HVIDAM`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`, `VENT`, `VFWAY`, `VTWAY`, `Legal Members:`


### Saddle Element (`HVSADD`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`


### Vent Element (`VENT`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Weather Skirt Element (`HVSKIR`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`


### Vent Element (`VENT`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Splitter Element (`HVSPLR`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`


### Vent Element (`VENT`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Stiffener Element (`HVSTIF`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`


### Vent Element (`VENT`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Test Points Element (`HVTPPO`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`


### Vent Element (`VENT`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Internal Damper Element (`IDAM`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Cref` | Connection reference |
| `Stext` | S Text string |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Angle` | Angle |
| `Matref` | Material reference |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |


### Branch Element (`BRANCH`)
**Legal Members:** None


### Mesh Element (`MESH`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Offset Element (`OFST`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Plate Element (`PLATE`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)

### Pipe Support Component Element (`TRUNNION`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Plenum Element (`PLENUM`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Silencer Element (`SILENCER`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Skirt Element (`SKIR`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Cref` | Connection reference |
| `Stext` | S Text string |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Angle` | Angle |
| `Matref` | Material reference |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** None


### Splitter Element (`SPLR`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Cref` | Connection reference |
| `Stext` | S Text string |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Angle` | Angle |
| `Matref` | Material reference |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** None


### Straight Element (`STRT`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Sub Component Element (`SUBCOMPONENT`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Ispec` | Insulation spec reference |
| `Loose` | Loose |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Spref` | Component spec reference |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `REDUCER`, `SHU`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`, `UNION`, `VALVE`


### Vent Element (`VENT`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Taper Element (`TAPER`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Threeway Element (`THREEWAY`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `Access Panel Elemen (HVHACC)`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Test Point Element (`TP`)
**HVAC Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Cref` | Connection reference |
| `Stext` | S Text string |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Angle` | Angle |
| `Matref` | Material reference |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |


### Branch Element (`BRANCH`)
**Legal Members:** None


### Transformation Piece Element (`TRNS`)
**HVAC Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`


### Test Points Element (`HVTPPO`)

### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

## Elements in Ladder Category


### Cage Segment Element (`CAGSEG`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `ExtRef` | References to exit level |
| `StaElevation` | Start Elevation |
| `EndElevation` | End Elevation |
| `PitchOffset` | Angular offset from ladder pitch |
| `AssTmpReference` | Assembly Template Reference |
| `LabOffset` | Label offset |
| `Spref` | Component spec reference |


### Ladder Cage Element (`LDRCAGE`)

### Rung Ladder Cage Element (`RLCAGE`)
**Legal Members:** `DDSE`, `DPSET`, `GENSEC`


### Hoop Set Element (`HOOPSE`)

### Template Element (`TMPLATE`)

### Hoop Set Element (`HOOPSE`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `LabOffset` | Label offset |
| `Spref` | Component spec reference |


### Cage Segment Element (`CAGSEG`)
**Legal Members:** `DDSE`, `DPSET`


### Structural Generic Section Element (`GENSEC`)

### Template Element (`TMPLATE`)

### Ladder Element (`LADDER`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Purpose` | Description code word |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `ORise` | Overall Rising |
| `OGoing` | Overall Going |
| `Rise` | Tread Rise |
| `RWidth` | Rung Width |
| `Headroom` | Headroom |
| `UExtnsion` | Upper Extension Length |
| `HeadClearance` | Head Clearance |
| `Lowgap` | Lower Gap |
| `FootRoom` | Clear space behind each rung |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `ASLStandard` | ASL Standard Reference |
| `ASLSbStandard` | ASL Substandard Reference |
| `AssTmpReference` | Assembly Template Reference |
| `LabOffset` | Label offset |

**Legal Owners:** `DETGRP`


### Framework Element (`FRMWORK`)

### Structure Element (`STRUCTURE`)

### Subframework Element (`SBFRAMEWORK`)
**Legal Members:** `DDSE`, `HANDRA`, `LDRCAGE`, `LDREXT`, `LDRRUN`


### Ladder Stringer Element (`LDRSTR`)

### Rung Set Element (`RUNGSET`)

### Ladder Cage Element (`LDRCAGE`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `CAGOFF` | Cage Offset |
| `CAGSIZ` | Cage Size |
| `Rise` | Tread Rise |
| `ExtOff` | Exit Offset |
| `Obstruction` | Obstruction level |
| `AssTmpReference` | Assembly Template Reference |
| `LabOffset` | Label offset |
| `Spref` | Component spec reference |


### Ladder Element (`LADDER`)

### Cage Segment Element (`CAGSEG`)

### Ladder Exit Element (`LDREXT`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |
| `Description` | Description of the element |
| `Purpose` | Description code word |
| `Number` | Number |
| `Elevation` | Elevation |
| `ExtRef` | References to exit level |
| `ExtDir` | Direction of ladder exit |
| `LabOffset` | Label offset |


### Ladder Element (`LADDER`)
**Legal Members:** None


### Ladder Rung Element (`LDRRUN`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `Spref` | Component spec reference |
| `RWidth` | Rung Width |
| `Desparam` | Design parameters |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `RungSpacing` | Rung Spacing |
| `AssTmpReference` | Assembly Template Reference |
| `LabOffset` | Label offset |


### Ladder Element (`LADDER`)

### Rung Set Element (`RUNGSET`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `GENSEC`


### Panel Element (`PANEL`)

### Template Element (`TMPLATE`)

### Ladder Stringer Element (`LDRSTR`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `UExtnsion` | Upper Extension Length |
| `PitchOffset` | Angular offset from ladder pitch |
| `AssTmpReference` | Assembly Template Reference |
| `LabOffset` | Label offset |


### Ladder Element (`LADDER`)

### Rung Ladder Element (`RLADDR`)
**Legal Members:** `BPANEL`


### Structural Generic Section Element (`GENSEC`)

### Panel Element (`PANEL`)

### Rung Ladder Element (`RLADDR`)
**Ladder Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Purpose` | Description code word |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Height` | Height |
| `Width` | Width |
| `LPitch` | Ladder Pitch |
| `RungSpacing` | Rung Spacing |
| `ExWidth` | Exit Width |
| `ExHeight` | Exit Height |
| `ExDistance` | Exit Top Distance |
| `ExtDirection` | Direction of ladder exit |
| `StilExitWidth` | Stile Exit Width |
| `ObsWidth` | Obstruction Width |
| `ObsDepth` | Obstruction Depth |
| `FootRoom` | Foot Room |
| `Headroom` | Headroom |
| `BotCut` | Bottom Stile Cut Distance |
| `TopCut` | Top Stile Cut Distance |
| `OTRung` | Omit Top Rung |
| `LabOffset` | Label offset |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Obstruction` | Obstruction level |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `InstOptions` | Installation Options |
| `ASLStandard` | ASL Standard Reference |
| `ASLSbStandard` | ASL Substandard Reference |
| `AssTmpReference` | Assembly Template Reference |


### Framework Element (`FRMWORK`)

### Structure Element (`STRUCTURE`)

### Subframework Element (`SBFRAMEWORK`)
**Legal Members:** `LDRSTR`


### Rung Ladder Cage Element (`RLCAGE`)

### Rung Set Element (`RUNGSET`)

### Rung Ladder Cage Element (`RLCAGE`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Width` | Width |
| `Depth` | Depth |
| `HoopSpacing` | Hoop Spacing |
| `FlrOffset` | Flare Offset |
| `FlrEccentricity` | Flare Eccentricity |
| `ExExtension` | Exit Extension |
| `TTHOffset` | Top Tube Hoop Offset |
| `AssTmpReference` | Assembly Template Reference |
| `LabOffset` | Label offset |


### Rung Ladder Element (`RLADDR`)

### Cage Segment Element (`CAGSEG`)

### Rung Ladder Gate Element (`RLGATE`)

### Rung Set Element (`RUNGSET`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Function` | Function |
| `Description` | Description of the element |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |


### Ladder Element (`LADDER`)

### Rung Ladder Element (`RLADDR`)

### Design Dataset Element (`DDSE`)

### Ladder Rung Element (`LDRRUN`)

### Step Ladder Element (`SLADDR`)
**Ladder Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Purpose` | Description code word |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `UppRef` | References to upper exit level |
| `LowRef` | References to lower exit level |
| `FireRating` | Fire rating |
| `BotStrGap` | BOTT Stringer Gap |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Height` | Height |
| `HrClearW` | HANDRAIL CLEAR WIDTH |
| `TWidth` | Tread Width |
| `TreadDepth` | Tread Depth |
| `LPitch` | Ladder Pitch |
| `Rise` | Tread Rise |
| `LRise` | Lower Tread Rise |
| `StrSnipe` | Stringer Snipe |
| `ExDistance` | Exit Top Distance |
| `Headroom` | Headroom |
| `HeadClearance` | Head Clearance |
| `HrStartHeight` | Handrail Start Height |
| `HrOffset` | Handrail Offset |
| `HrObstruction` | Handrail Obstruction |
| `PostExtension` | Post Extension |
| `PostSpacing` | Default post spacing |
| `TPostOffset` | Top post offset |
| `TopStrGap` | TOP Stringer Gap |
| `Fradius` | Fillet radius |
| `ExHeight` | Exit Height |
| `ExExtension` | Exit Extension |
| `InstOptions` | Installation Options |
| `LabOffset` | Label offset |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Obstruction` | Obstruction level |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `ASLStandard` | ASL Standard Reference |
| `ASLSbStandard` | ASL Substandard Reference |
| `AssTmpReference` | Assembly Template Reference |
| `Uuidia` | Universally unique identifier |


### Framework Element (`FRMWORK`)

### Structure Element (`STRUCTURE`)

### Subframework Element (`SBFRAMEWORK`)
**Legal Members:** `DDSE`, `SLRAIL`, `STRSTR`


### Top Extension Element (`TOPEXT`)

### Tread Set Element (`TREADSET`)

### Step Ladder Rail Element (`SLRAIL`)
**Ladder Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Purpose` | Description code word |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `Uuidia` | Universally unique identifier |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |


### Step Ladder Element (`SLADDR`)
**Legal Members:** `BPANEL`


### Design Dataset Element (`DDSE`)

### Structural Generic Section Element (`GENSEC`)

### Panel Element (`PANEL`)

## Elements in Laser Modelling Category


### Demolition Package Element (`DEMOPA`)
**Laser Modelling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `XGMREF` | Reference to laser survey in which volumes will be |
| `demolished` | DemRdy |
| `Flag to signify the completion of demolition definition` |  |


### Demolition Set Element (`DEMOSE`)
**Legal Members:** `ABOX`, `ACONE`, `ACTORUS`, `ACYLINDER`, `ADISH`, `AEXTRUSION`, `APOLYHEDRON`, `APYRAMID`, `AREVOLUTION`, `ARTORUS`


### Area Slope Bottom Cylinder Element (`ASLCYLINDER`)

### Area Snout Element (`ASNOUT`)

### Demolition Set Element (`DEMOSE`)
**Laser Modelling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Demolition World Element (`DEMOWL`)

### Demolition Package Element (`DEMOPA`)

### Demolition World Element (`DEMOWL`)
**Laser Modelling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### World Element (`WORLD`)

### Demolition Set Element (`DEMOSE`)

### External Geometry Cell Element (`XCELL`)
**Laser Modelling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Position` | Position |
| `Xlength` | X length |
| `Ylength` | Y length |
| `Zlength` | Line length |


### External Geometry Small Cube Element (`XCELS`)
**Legal Members:** None


### External Geometry Small Cube Element (`XCELS`)
**Laser Modelling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### External Geometry Large Cube Element (`XCLTN`)

### External Geometry Cell Element (`XCELL`)

### External Geometry Large Cube Element (`XCLTN`)
**Laser Modelling Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |


### External Geometry Element (`XGEOMETRY`)

### External Geometry Small Cube Element (`XCELS`)

### External Geometry Element (`XGEOMETRY`)
**Laser Modelling Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `VenID` | Driver definition used to access external laser survey |
| `ModID` | Used by laser driver to identify external laser data |
| `DaTim` | LMI Date/time |


### Conveyor Element (`CONVEYOR`)

### Bocad Steel Detailing Job Element (`DTJOB`)

### Zone Element (`ZONE`)

### Design Ppoint/Pline Set Element (`DPSET`)

### External Geometry Large Cube Element (`XCLTN`)

## Elements in Link Category


### Document Element (`DOCU`)
**Link Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Purpose` | Description code word |
| `Name` | Name of the element |
| `Function` | Function |
| `Dfnm` | Document filename |


### Document Set Element (`DOST`)

### Sub Document Element (`SUBDOCU`)

### Document Set Element (`DOST`)
**Link Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |


### Document World Element (`DOWLD`)

### Document Element (`DOCU`)

### Document World Element (`DOWLD`)
**Link Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### World Element (`WORLD`)

### Document Set Element (`DOST`)

### Hold Element Element (`HOLDEL`)
**Link Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None


### Holds Folder Element (`HOLDFL`)
**Link Element | Link Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |

**Legal Members:** `None`, `Link Document Element (LINKWLD) - Design - Link`


### World Element (`WORLD`)
**Legal Members:** `LNCLAS`


### Link Descriptor Element (`LNDESC`)
Link Class Element (LNCLAS) - Design - Link

### Link Folder Element (`LNFOLD`)
**Link Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Link Folder Element (`LNFOLD`)

### Link Document Element (`LINKWLD`)
**Link Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `LnkPrp` | TRUE if item pointed to by descriptor should be |
| `propagated by Global` | LnkUse |
| `Link Descriptor Usage` |  |

**Legal Members:** `None`, `Link Descriptor Element (LNDESC) - Design - Link`


### Link Folder Element (`LNFOLD`)

### Link Document Element (`LINKWLD`)
Link Folder Element (LNFOLD) - Design - Link

### Link Link Element (`LNLINK`)
**Link Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Link Folder Element (`LNFOLD`)

### Link Document Element (`LINKWLD`)
**Legal Members:** `LNCLAS`


### Link Descriptor Element (`LNDESC`)
Link Link Element (LNLINK) - Design - Link

### Link Folder Element (`LNFOLD`)
**Link Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |


### Link Descriptor Element (`LNDESC`)
**Legal Members:** None


### Sub-sub Document Element (`SSBDOCU`)
**Link Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Docref` | Document reference |


### Sub Document Element (`SUBDOCU`)
**Legal Members:** None


### Sub Document Element (`SUBDOCU`)
**Link Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### Document Element (`DOCU`)

### Sub-sub Document Element (`SSBDOCU`)

## Elements in Pipe Piece Category


### HVAC Spool List Element (`HSLIST`)
**Pipe Piece Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### HVAC Element (`HVAC`)

### HVAC Spool Element (`HSPOOL`)

### HVAC Spool Element (`HSPOOL`)
**Pipe Piece Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `HSARFA` | HVACSpool arrive references |
| `HSLRFA` | HVACSpool leave references |


### HVAC Spool List Element (`HSLIST`)
**Legal Members:** None


### Pipe Piece Element (`PPIECE`)
**Pipe Piece Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `AELRFA` | Boundary components for the PipePiece |
| `BENDMC` | Bending Machine Reference |
| `MCBENT` | Machine bent |
| `BWITHF` | Bend with flow |
| `AWDARR` | Auto weld arrive flange |
| `AWDLEV` | Auto weld leave flange |
| `WELDMC` | Welding Machine Reference |
| `UAEXSS` | User Excess Arrive |
| `UEEXSS` | User End Excess |
| `BAEXSS` | Bending Excess Arrive |
| `BLEXSS` | Bending Leave Excess |
| `FEDEXS` | Feed excess values |
| `MINFED` | Minimum feed values |
| `STOCKL` | Stock Length |
| `PPMODI` | Pipe piece modified |
| `PPFMCV` | Pipe piece fabrication machines verified |
| `PPCNBD` | Pipe piece contains bends |
| `PPCutLength` | Cut Length |
| `PPFinLength` | Finished Length |
| `Leninside` | Initial tube length inside bending machine. |
| `Lenoutside` | Initial tube length outside bending machine |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |


### Pipe Piece List Element (`PPLIST`)
**Legal Members:** None


### Pipe Piece List Element (`PPLIST`)
**Pipe Piece Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `BREF` | Branch Reference |


### Pipe Element (`PIPE`)

### Pipe Piece Element (`PPIECE`)

### Pipe Spool List Element (`PSLIST`)
**Pipe Piece Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### Pipe Element (`PIPE`)

### Pipe Spool Element (`PSPOOL`)

### Pipe Spool Element (`PSPOOL`)
**Pipe Piece Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `VCKS` | Pipe Spool Volume Check Status |
| `VCKWT` | Pipe Spool Volume Checked With Tank |
| `PLANU` | Planning Unit |
| `PSTYP` | Spool Type |
| `PSPR` | Pipe Spool Previously Released |
| `PSARFA` | Pipespool arrive references |
| `PSLRFA` | Pipespool leave references |


### Pipe Spool List Element (`PSLIST`)
**Legal Members:** None


## Elements in Piping Component Category

Description
The ATTACHMENT point has three main applications:
• To allow pipe HANGARS to be connected to a point in the BRANCH.
• To indicate a special point on the BRANCH which can be dimensioned, labelled, and so on.
• To allow forces, moments, for example: to be applied to the BRANCH during pipe stressing.
The ATTA is created, selected and consistency-checked in the same way as other Components. However, it is
ignored as an in-line fitting by the CONNECT command and is ignored by the reporting utility when listing tube
lengths.

### Attachment Point Element (`ATTACHMENT`)
**Piping Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Cref` | Connection reference |
| `Stext` | S Text string |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkbrk` | ATTA flag to treat as a real element |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Fstatus` | Fstatus |
| `Angle` | Angle |
| `Matref` | Material reference |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |


### Branch Element (`BRANCH`)

### Pipe Support Component Element (`TRUNNION`)
**Legal Members:** None

Description
Used where a bend is made in tubing. As the Implied Tube must be straight, it is necessary to insert such a
"Component" where any change of direction occurs. (This element is not the same as an ELBO, which is a
separate catalog component.)

### Bend Element (`BEND`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Ncuts` | Number of cuts in a mitred bend |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `USEFED` | User defined feed excess |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `Clutch` | Bending machine insertion direction |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)

### Pipe Support Component Element (`TRUNNION`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for capping a pipe.

### Cap Element (`CAP`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for piping closure.

### Closure Element (`CLOSURE`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Height` | Height |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for full or half couplings.

### Coupling Element (`COUPLING`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Loffline` | Offline flag |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`


### Test Points Element (`HVTPPO`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Multi-way component for straight cross or reducing cross.

### Cross Element (`CROSS`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`


### Test Points Element (`HVTPPO`)

### Sub Component Element (`SUBCOMPONENT`)
Description
General component for rectangular HVAC ducting straights.

### Ducting Element (`DUCTING`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`


### Test Points Element (`HVTPPO`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for elbows and returns.

### Elbow Element (`ELBOW`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Radius` | Radius |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)

### Pipe Support Component Element (`TRUNNION`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for blind flanges.

### Blind Flange Element (`FBLIND`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for filters.

### Filter Element (`FILTER`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for all classes of flange

### Flange Element (`FLANGE`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Loose` | Loose |
| `Height` | Height |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Allowance` | Allowance |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Nomdirection` | Nominal slope direction |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)

### Pipe Support Component Element (`TRUNNION`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
This component is for stubs or tube or minimum allowed length. It is easier to specify these as Components from
a Specification where the minimum lengths are stored. However, unlike Implied Tube, the reporting utility does
not currently add these lengths when totalling Tube for a BRANCH.

### Fixed Length Tube Element (`FTUBE`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Height` | Height |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for gaskets.

### Gasket Element (`GASKET`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Height` | Height |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |


### Branch Element (`BRANCH`)
**Legal Members:** None

Description
Component for in-line instruments (for example: flow measurement).

### Instrument Element (`INSTRUMENT`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for lap-joint (or "Van Stone") flanges.

### Lap-joint Stub End Element (`LJSE`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Height` | Height |
| `Loose` | Loose |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Allowance` | Allowance |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |


### Branch Element (`BRANCH`)

### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)
Description
Component for olets of all types.

### Olet Element (`OLET`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Nomdirection` | Nominal slope direction |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `Extmref` | Extrusion machine reference. |
| `Nomdirection` | Nominal slope direction |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Element for any type of component not covered by the other classifications.

### Piping Component Element (`PCOMPONENT`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Fstatus` | Fstatus |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)

### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Dconnect` | Design PPoint connection type |
| `Bore` | Bore |
| `Desparam` | Design parameters |
| `Ddirection` | Design PPoint spherical direction |
| `Position` | Position |
| `Cref` | Connection reference |
| `Depth` | Depth |
| `Pskey` | Key for ISODRAFT |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `AHU`, `BATTERY`, `BEND`, `CLOSURE`, `COWL`, `DAMPER`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FTUBE`, `GRILLE`, `HFAN`, `INSTRUMENT`, `LJSE`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `PTAPPING`, `REDUCER`, `SILENCER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TRAP`, `TRNS`


### Valve Element (`VALVE`)

### Four Way Valve Element (`VFWAY`)

### Three Way Valve Element (`VTWAY`)
**Legal Members:** None


### Pipe Tapping Element (`PTAPPING`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Nomdirection` | Nominal slope direction |


### Branch Element (`BRANCH`)

### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)
Description
Component for all classes of reducers, swages, inserts and so on.

### Reducer Element (`REDUCER`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)

### Pipe Support Component Element (`TRUNNION`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for general usage by items not covered by the other Component types.

### Standard Hook-up Element (`SHU`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`


### Test Points Element (`HVTPPO`)

### Sub Component Element (`SUBCOMPONENT`)

### Stiffener Element (`STIFFENER`)
**Piping Component Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Cstref` | Constraint reference |
| `Laxes` | Local axes |
| `Attype` | Attachment type |
| `Lend` | Line end |
| `Cref` | Connection reference |
| `Stext` | S Text string |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoref` | Extra material list spec references |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Angle` | Angle |
| `Matref` | Material reference |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |


### Branch Element (`BRANCH`)
**Legal Members:** None

Description
Component for all classes of tee, lateral set-on branch, stub-ins, and so on.

### Tee Element (`TEE`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Loffline` | Offline flag |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Dmtype` | ISODRAFT Reference Dimension attribute |
| `Dmfarray` | ISODRAFT Reference Dimension attribute |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `Nomdirection` | Nominal slope direction |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for all classes of separators, strainers, screens and driplegs.

### Trap Element (`TRAP`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for any class of union, connector or bushing.

### Union Element (`UNION`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`


### Test Points Element (`HVTPPO`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for all classes of two-way valve.

### Valve Element (`VALVE`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for vents.

### Vent Element (`VENT`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`


### Test Points Element (`HVTPPO`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for all classes of four-way valve.

### Four Way Valve Element (`VFWAY`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Crfarray` | Connection reference array |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for all classes of three-way valve.

### Three Way Valve Element (`VTWAY`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Cref` | Connection reference |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Nwelds` | Number of attached welds on a piping component |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `SloDirection` | Slope direction array |


### Branch Element (`BRANCH`)
**Legal Members:** `HVBRCO`, `HVFLAN`, `HVHACC`, `HVIDAM`, `HVSADD`, `HVSKIR`, `HVSPLR`, `HVSTIF`, `HVTPPO`


### Piping Connection Cartesian Ppoint Element (`PIPCARTESIAN`)

### Sub Component Element (`SUBCOMPONENT`)
Description
Component for itemized welds.

### Weld Element (`WELD`)
**Piping Component Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Spref` | Component spec reference |
| `Lstube` | Leave tube reference |
| `Arrive` | Arrive Ppoint |
| `Leave` | Leave Ppoint |
| `Oriflag` | Orientation flag |
| `Posflag` | Positioning flag |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Angle` | Angle |
| `Height` | Height |
| `Allowance` | Allowance |
| `Loffline` | Offline flag |
| `Csfbreak` | Spooling marker for components |
| `Tsfbreak` | Spooling marker for leave tube |
| `Asfbreak` | Spooling marker for arrive tube |
| `Lsfbreak` | Spooling marker for leave tube |
| `Spln` | Old spooler component spool number |
| `Splt` | Old spooler tube spool number |
| `Mtoref` | Extra material list spec references |
| `Cmpx` | Comparator/Design-Manager exclusion text attribute |
| `Ptno` | Old spooler component part number |
| `Ptntube` | Old spooler tube part number |
| `Ptnbarray` | Old spooler bolt part number |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Mtocomponent` | Material list control for components |
| `Mtotube` | Material list control for components leave tube |
| `Mtoxarray` | Old spooler addition items |
| `Spsp` | Old spooler spool prefix |
| `Dpfname` | ISODRAFT dynamic detail plotfile name |
| `Dpgridref` | ISODRAFT dynamic detail grid reference attribute |
| `Wldnumber` | Weld number |
| `Wldprefix` | Weld number prefix |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bselector` | Bolt Selector |
| `MATN` | Material Note |
| `Rlock` | Branch Member Creation Status code (Router) |
| `Rlinclude` | Array of references of special rules to include |
| `Rlexclude` | Array of references of special rules to exclude |
| `Hrelative` | Branch Member Head relative flag (Router) |
| `Spkchg` | Flag to show where a spec change occurs in a branch |
| `Deldsg` | Delivery Designation flag |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `WeldType` | Weld Type |


### Branch Element (`BRANCH`)

### Pipe Support Component Element (`TRUNNION`)
**Legal Members:** None


## Elements in Piping Fabrication Category


### Fabrication Machine Bending Dimension Element (`FMBDIM`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `OD` | Outer Diameter |
| `WThickness` | Wall thickness |
| `Grip` | Minimum distance between bends |
| `MLEFlange` | Minimum length excluding flange |
| `MLIFlange` | Minimum length including flange |
| `FCMeasure` | Flange correction measure |
| `BRadius` | Bend radius |
| `AwdFln` | Bending machine accepts autowelded flanges |
| `Benpip` | Maximum tube insertion length (Plane end) |
| `Benpil` | Maximum tube insertion length (with pre-welded |
| `collar)` | Benpif |
| `Maximum tube insertion length (with pre-welded` | flange) |
| `Benpir` | Bend radius (not ratio) |
| `Benmlf` | Minimum length for the first straight tube |
| `Benmll` | Minimum length for the last straight tube |


### Fabrication Machine Bending Element (`FMBEND`)
**Legal Members:** None


### Fabrication Machine Bending Element (`FMBEND`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `STFProportional` | Proportional stretch factor |
| `STFConstant` | Constant stretch factor |
| `MaxLP` | Maximum length of pipe |
| `Compensate` | Compensate bending activities for springback |
| `AwdFln` | Bending machine accepts autowelded flanges |
| `BMClockwise` | True if bending machine bends clockwise |
| `BenRotation` | Bending machine rotation |
| `BenDirection` | Bending machine direction |
| `StepSpringback` | Stepwise springback |
| `MLLInclude` | Mll Include |


### Fabrication Machine Group Element (`FMGRP`)
**Legal Members:** `FMBDIM`, `FMBPLN`


### Fabrication Machine Bending Stepwise Springback-Stretch Factor Element (`FMSSBK`)

### Fabrication Machine Bending Springback-stretch Factor Element (`FMBSST`)

### Fabrication Machine Bending Plane Element (`FMBPLN`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `MinPlnPosition` | Minimum Plane Position |
| `MaxPlnPosition` | Maximum Plane Position |


### Fabrication Machine Bending Element (`FMBEND`)
**Legal Members:** None


### Fabrication Machine Bending Springback-stretch Factor Element (`FMBSST`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `OD` | Outer Diameter |
| `WThickness` | Wall thickness |
| `Matref` | Material reference |
| `ANGSPA` | Springback angle at 20 degrees |
| `ANGSPB` | Springback angle at 120 degrees |
| `STFProportional` | Proportional stretch factor |
| `STFConstant` | Constant stretch factor |


### Fabrication Machine Bending Element (`FMBEND`)
**Legal Members:** None


### Fabrication Machine Extrusion Dimension Element Element (`FMEDIM`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `OD` | Outer Diameter |
| `Extbod` | Extrusion branch outside diameter |
| `Matref` | Material reference |
| `WThickness` | Wall thickness |
| `Exteab` | Minimum distance from center of an extrusion to next |
| `bend` | Exteak |
| `Minimum distance from an extrusion to the pipe end` | Exteah |
| `Extrusion collar height (from the top of tube to the` | end of collar) |
| `Extehe` | Height of extrusion machine |
| `Extant` | Tolerance angle |


### Fabrication Machine Extrusion Element (`FMEXTR`)
**Legal Members:** None


### Fabrication Machine Extrusions Minimum Distance Element (`FMEDNE`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `OD` | Outer Diameter |
| `Extboa` | Extrusion branch OD A |
| `Extbob` | Extrusion branch OD B |
| `Exteaa` | Minimum distance from an extrusion to the next |
| `extrusion` |  |


### Fabrication Machine Extrusion Element (`FMEXTR`)
**Legal Members:** None


### Fabrication Machine Extrusion Element (`FMEXTR`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Fabrication Machine Group Element (`FMGRP`)

### Fabrication Machine Extrusion Dimension Element Element (`FMEDIM`)

### Fabrication Machine Extrusions Minimum Distance Element (`FMEDNE`)

### Fabrication Machine Group Element (`FMGRP`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Purpose` | Description code word |
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Fabrication Machine World Element (`FMWLD`)
**Legal Members:** `FMBEND`, `FMEXTR`

Fabrication Machine Bending Stepwise Springback-Stretch Factor Element
(FMSSBK)

### Fabrication Machine Welding Element (`FMWELD`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `OD` | Outer Diameter |
| `Matref` | Material reference |
| `WThickness` | Wall thickness |
| `BenAngle` | Bending angle |
| `SprAngle` | Springback angle |


### Fabrication Machine Bending Element (`FMBEND`)
**Legal Members:** None


### Fabrication Machine Welding Connection Types Element (`FMWCON`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `WelConection` | Welding machine connection type |


### Fabrication Machine Welding Element (`FMWELD`)
**Legal Members:** None


### Fabrication Machine Welding Dimensions Element (`FMWDIM`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `OD` | Outer Diameter |
| `WThickness` | Wall thickness |
| `Matref` | Material reference |
| `Welmanual` | Minimum tube length for manual welding |
| `Welorbital` | Minimum tube length for orbital welding |
| `Welmachine` | Minimum tube length for machine welding |


### Fabrication Machine Welding Element (`FMWELD`)
**Legal Members:** None


### Fabrication Machine Welding Element (`FMWELD`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `MinOD` | Minimum Outer Diameter |
| `MaxOD` | Maximum Outer Diameter |
| `MinLP` | Minimum length of pipe |
| `MaxLP` | Maximum length of pipe |


### Fabrication Machine Group Element (`FMGRP`)
**Legal Members:** `FMWCON`


### Fabrication Machine Welding Dimensions Element (`FMWDIM`)

### Fabrication Machine Welding Skey Element (`FMWSK`)

### Fabrication Machine World Element (`FMWLD`)
**Piping Fabrication Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)

### Fabrication Machine Group Element (`FMGRP`)

### Fabrication Machine Welding Skey Element (`FMWSK`)
**Piping Fabrication Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Skey` | Symbol key |


### Fabrication Machine Welding Element (`FMWELD`)
**Legal Members:** None


## Elements in Piping Major Items Category

Description
The BRANCH is the key element for all routed piping in the Design model. It represents a two-ended entity
whose route is defined by its Head, Tail, and the sequence of Components (Members) between. A BRANCH Head
or Tail may be connected to NOZZLEs, multi-way Components such as TEEs, or other BRANCH Heads or Tails.
Alternatively, a Head or Tail may be positioned explicitly in space. (All the commands which control the Head and
Tail attributes are described in Spooler Database.) The remaining BRANCH attributes are for:
• Functional Use
• Information storage

### Branch Element (`BRANCH`)
**Piping Major Items Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Hposition` | Head position |
| `Tposition` | Tail position |
| `Hdirection` | Head direction |
| `Tdirection` | Tail direction |
| `Href` | Head reference |
| `Tref` | Tail reference |
| `Lhead` | Logical head flag |
| `Ltail` | Logical tail flag |
| `Hbore` | Head bore |
| `Tbore` | Tail bore |
| `Hconnect` | Head connection type |
| `Tconnect` | Tail connection type |
| `HDShape` | Branch head duct shape |
| `TDShape` | Branch tail duct shape |
| `HeadWidth` | Head duct width |
| `TailWidth` | Tail duct width |
| `HeadHeight` | Head duct height |
| `TailHeight` | Tail duct height |
| `HZaxis` | head Z axis |
| `TZaxis` | tail Z axis |
| `Detail` | Detail flag |
| `Lstressed` | Stress flag |
| `Linetype` | Line type |
| `Erection` | Erection class |
| `Temperature` | Temperature |
| `Pressure` | Pressure |
| `TPressure` | TestPressure |
| `Flowdirection` | Flow direction |
| `Hstube` | Head tube specification |
| `Ccentre` | Cost center |
| `Cclass` | Cost class |
| `Safclass` | Safety class |
| `Matref` | Material reference |
| `Fluref` | Fluid reference |
| `Casref` | Case reference |
| `Pspec` | Pipe specification |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Duty` | Duty |
| `Dscode` | Design code |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Splh` | Old spooler head tube spool number |
| `Hdmtype` | ISODRAFT Reference Dimension attribute |
| `Hdmfarray` | ISODRAFT Reference Dimension attribute |
| `Tdmtype` | ISODRAFT Reference Dimension attribute |
| `Tdmfarray` | ISODRAFT Reference Dimension attribute |
| `Lissue` | True if drawing has been issued |
| `Wmaximum` | Maximum weld number in current spool drawing |
| `Pmaximum` | Maximum part number in current spool drawing |
| `Ptnhead` | Old spooler head tube part number |
| `Smaximum` | Maximum spool number in current spool drawing |
| `Jmaximum` | Maximum joint number in current spool drawing |
| `Mtohead` | Material list control for head tube |
| `Ptnbarray` | Old spooler bolt part number |
| `Drrf` | Old spooler drawing reference |
| `Spsp` | Old spooler spool prefix |
| `Jnumber` | Old spooler joint number |
| `Joiprefix` | Old spooler joint number prefix |
| `Orrf` | Origin reference (for templates) |
| `BendMacReference` | Bending Machine reference |
| `Uuidia` | Universally unique identifier |
| `Inco` | Array of integers for ROUTER internal points |
| `PLANU` | Planning Unit |
| `Bstatus` | Branch Status code (Router) |
| `Hwrf` | Head Working Point (Router) |
| `Twrf` | Tail Working Point (Router) |
| `Brlock` | Branch Positioning Status code (Router) |
| `Rlstored` | Array of ROUTER saved rules |
| `Tsfbreak` | Spooling marker for leave tube |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Sloreference` | Pipe slope reference |
| `Aexcess` | Arrive excess for leave tube |
| `Lexcess` | Leave excess for leave tube |
| `Loose` | Loose |
| `LCHKDA` | Date of last pipe fabrication consistency check |


### HVAC Element (`HVAC`)

### Pipe Element (`PIPE`)
**Legal Members:** `AHU`, `ATTACHMENT`, `BATTERY`, `BEND`, `CAP`, `CLOSURE`, `COUPLING`, `COWL`, `CROSS`, `DAMPER`, `DUCTING`, `ELBOW`, `FBLIND`, `FILTER`, `FLANGE`, `FLEXIBLE`, `FTUBE`, `GASKET`, `GRILLE`, `HACC`, `HFAN`, `HSADDLE`, `IDAM`, `INSTRUMENT`, `LJSE`, `MESH`, `OFST`, `OLET`, `PCOMPONENT`, `PLATE`, `PLENUM`, `PTAPPING`, `REDUCER`, `SHU`, `SILENCER`, `SKIR`, `SPLR`, `STIFFENER`, `STRT`, `TAPER`, `TEE`, `THREEWAY`, `TP`, `TRAP`, `TRNS`, `UNION`, `VALVE`, `VENT`, `VFWAY`


### Three Way Valve Element (`VTWAY`)

### Weld Element (`WELD`)
Description
The HANGER is a two-ended entity which is routed between a BRANCH and supporting steelwork. It is analogous
in many respects to the BRANCH element and can own Components routed between a Head and Tail. The Head
or Tail can be connected to a piping attachment point (ATTA) or positioned specifically, for example: on a
supporting member. Its attributes can be classified as follows:
• Functional and Information attributes for the complete HANGAR (described here).
• Head and Tail attributes (already described).

### Pipe Hanger Element (`HANGER`)
**Piping Major Items Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Hspec` | Hanger specification |
| `Hsrod` | Headrod specification |
| `Htype` | Hanger type |
| `Nload` | Nominal load |
| `Lhead` | Logical head flag |
| `Ltail` | Logical tail flag |
| `Hposition` | Head position |
| `Tposition` | Tail position |
| `Hdirection` | Head direction |
| `Tdirection` | Tail direction |
| `Href` | Head reference |
| `Tref` | Tail reference |
| `Hconnect` | Head connection type |
| `Tconnect` | Tail connection type |
| `Hbore` | Head bore |
| `Tbore` | Tail bore |
| `Built` | Built/Unbuilt flag |
| `Orrf` | Origin reference (for templates) |
| `Uuidia` | Universally unique identifier |
| `Invfarray` | Array of Inventory Items |


### Restraint Element (`RESTRAINT`)

### Support Element (`SUPPORT`)
**Legal Members:** `ANCILLARY`, `BBOLT`, `BWLD`, `CLEVIS`, `EYENUT`, `EYRD`, `HANCILLARY`, `HELEMENT`, `HNUT`, `HPIN`, `HROD`, `PCLAMP`, `PCLIP`, `PLUG`, `POST`, `RCPL`, `SCLAMP`, `SHOE`, `SLUG`, `SNUB`, `SOST`, `SPACER`, `STLS`, `SWBR`, `TRNB`, `TRNN`, `UBOLT`, `VSPR`


### Washer Element (`WASH`)

### Wear Pad Element (`WPAD`)

### HVAC Element (`HVAC`)
**Piping Major Items Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Stdcode` | Standard code |
| `Purpose` | Description code word |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Bore` | Bore |
| `Temperature` | Temperature |
| `Pressure` | Pressure |
| `TPressure` | TestPressure |
| `Pspec` | Pipe specification |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Matref` | Material reference |
| `Fluref` | Fluid reference |
| `Casref` | Case reference |
| `Ccentre` | Cost center |
| `Cclass` | Cost class |
| `Linetype` | Line type |
| `Erection` | Erection class |
| `Rev` | Pipe Revision number |
| `Safclass` | Safety class |
| `Duty` | Duty |
| `Dscode` | Design code |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Skey` | Symbol key |
| `Lissue` | True if drawing has been issued |
| `Wmaximum` | Maximum weld number in current spool drawing |
| `Pmaximum` | Maximum part number in current spool drawing |
| `Smaximum` | Maximum spool number in current spool drawing |
| `Jmaximum` | Maximum joint number in current spool drawing |
| `Drrf` | Old spooler drawing reference |
| `Cdrg` | Isodraft Compipe: Drawing number |
| `Cnumber` | Isodraft Compipe: Line number |
| `Carea` | Isodraft Compipe: Area |
| `Splprefix` | Spool number prefix |
| `Orrf` | Origin reference (for templates) |
| `Uuidia` | Universally unique identifier |
| `Deldsg` | Delivery Designation flag |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Legal Members:** `BRANCH`, `HSLIST`


### Restraint Element (`RESTRAINT`)

### Text Element (`TEXT`)

### Pipe Support Component Element (`LUG`)
**Piping Major Items Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Pspec` | Pipe specification |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Temperature` | Temperature |
| `Pressure` | Pressure |
| `Hstube` | Head tube specification |
| `Htype` | Hanger type |
| `Nload` | Nominal load |
| `Lhead` | Logical head flag |
| `Ltail` | Logical tail flag |
| `Hposition` | Head position |
| `Tposition` | Tail position |
| `Hdirection` | Head direction |
| `Tdirection` | Tail direction |
| `Href` | Head reference |
| `Tref` | Tail reference |
| `Hconnect` | Head connection type |
| `Tconnect` | Tail connection type |
| `Hbore` | Head bore |
| `Tbore` | Tail bore |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Deldsg` | Delivery Designation flag |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Restraint Element (`RESTRAINT`)

### Support Element (`SUPPORT`)

### Luancillary Element (`LUANCILLARY`)
Description
The PIPE is an administrative owner of one or more two-ended BRANCHes. Usually a PIPE will include a principle
BRANCH routed between two NOZZLES, with subsidiary BRANCHes for control loops, bypasses to spare pumps,
and so on. The PIPE contains functional attributes of three types:
• Those which are used directly from the PIPE element (by modules such as ISODRAFT) as a collective attribute
for all the BRANCHes in the PIPE, for example: Pipe Spec (PSPE).
• Those which have no direct significance at PIPE level, but which are cascaded downwards to member
BRANCHes (or even Components) where they perform a particular function, for example: TEMPERATURE only used by Branch for insulation, stressing, and so on.
• Information attributes that can only be reported on, for example: BUILT.

### Pipe Element (`PIPE`)
**Piping Major Items Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Isohidden` | Isohidden flag |
| `Bore` | Bore |
| `Temperature` | Temperature |
| `Pressure` | Pressure |
| `TPressure` | TestPressure |
| `Pspec` | Pipe specification |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Matref` | Material reference |
| `Fluref` | Fluid reference |
| `Casref` | Case reference |
| `Ccentre` | Cost center |
| `Cclass` | Cost class |
| `Linetype` | Line type |
| `Erection` | Erection class |
| `Rev` | Pipe Revision number |
| `Safclass` | Safety class |
| `Duty` | Duty |
| `Dscode` | Design code |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Skey` | Symbol key |
| `Lissue` | True if drawing has been issued |
| `Wmaximum` | Maximum weld number in current spool drawing |
| `Pmaximum` | Maximum part number in current spool drawing |
| `Smaximum` | Maximum spool number in current spool drawing |
| `Jmaximum` | Maximum joint number in current spool drawing |
| `Drrf` | Old spooler drawing reference |
| `Cdrg` | Isodraft Compipe: Drawing number |
| `Cnumber` | Isodraft Compipe: Line number |
| `Carea` | Isodraft Compipe: Area |
| `Splprefix` | Spool number prefix |
| `Orrf` | Origin reference (for templates) |
| `BendMacReference` | Bending Machine reference |
| `Uuidia` | Universally unique identifier |
| `Rlstored` | Array of ROUTER saved rules |
| `Deldsg` | Delivery Designation flag |
| `Farea` | Construction area |
| `Fpline` | Process line number |
| `Fdrawing` | Isometric drawing number |
| `Frevision` | Isometric drawing revision |
| `Frdrawing` | Reference drawings |
| `Fstatus` | Fstatus |
| `PLANU` | Planning Unit |
| `JNTC` | Joint Code |
| `WLDC` | Weld Code |
| `HEATT` | Heat Treatment |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Sloreference` | Pipe slope reference |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Legal Members:** `BRANCH`, `PPLIST`, `PSLIST`


### Restraint Element (`RESTRAINT`)

### Text Element (`TEXT`)
Description
The area of the hierarchy owned by the RESTRAINT element is provided to allow modelling of pipe supports and
hangers. The RESTRAINT is an administrative element which can own HANGER elements in convenient groupings.
It is analogous to the PIPE element.

### Restraint Element (`RESTRAINT`)
**Piping Major Items Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Hspec` | Hanger specification |
| `StlRef` | Steel Reference |
| `Orrf` | Origin reference (for templates) |
| `Uuidia` | Universally unique identifier |
| `Invfarray` | Array of Inventory Items |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Fstatus` | Fstatus |

**Legal Owners:** `CLNPNGRID`, `CONVEYOR`


### HVAC Element (`HVAC`)

### Pipe Element (`PIPE`)

### Zone Element (`ZONE`)
**Legal Members:** `HANGER`, `LUG`, `STRUCTURE`, `SUPCOMP`


### Text Element (`TEXT`)

### Pipe Support Component Element (`TRUNNION`)

### Pipe Support Component Element (`SUPCOMP`)
**Piping Major Items Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Hspec` | Hanger specification |
| `Hsrod` | Headrod specification |
| `Htype` | Hanger type |
| `Nload` | Nominal load |
| `Lhead` | Logical head flag |
| `Ltail` | Logical tail flag |
| `Hposition` | Head position |
| `Tposition` | Tail position |
| `Hdirection` | Head direction |
| `Tdirection` | Tail direction |
| `Href` | Head reference |
| `Tref` | Tail reference |
| `Hconnect` | Head connection type |
| `Tconnect` | Tail connection type |
| `Hbore` | Head bore |
| `Tbore` | Tail bore |
| `Built` | Built/Unbuilt flag |
| `Orrf` | Origin reference (for templates) |
| `Uuidia` | Universally unique identifier |
| `Invfarray` | Array of Inventory Items |


### Restraint Element (`RESTRAINT`)

### Support Element (`SUPPORT`)
**Legal Members:** `ANCILLARY`, `BBOLT`, `BWLD`, `CLEVIS`, `EYENUT`, `EYRD`, `HELEMENT`, `HNUT`, `HPIN`, `HROD`, `PCLAMP`, `PCLIP`, `PLUG`, `POST`, `RCPL`, `SCLAMP`, `SHOE`, `SLUG`, `SNUB`, `SOST`, `SPACER`, `STLS`, `SWBR`, `TRNB`, `TRNN`, `UBOLT`, `VSPR`


### Washer Element (`WASH`)

### Wear Pad Element (`WPAD`)

### Support Element (`SUPPORT`)
**Piping Major Items Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Hspec` | Hanger specification |
| `StlRef` | Steel Reference |
| `Orrf` | Origin reference (for templates) |
| `Uuidia` | Universally unique identifier |
| `Invfarray` | Array of Inventory Items |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Fstatus` | Fstatus |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Legal Members:** `HANGER`, `LUG`, `STRUCTURE`, `SUPCOMP`


### Text Element (`TEXT`)

### Pipe Support Component Element (`TRUNNION`)

### Pipe Support Component Element (`TRUNNION`)
**Piping Major Items Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Pspec` | Pipe specification |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Temperature` | Temperature |
| `Pressure` | Pressure |
| `Hstube` | Head tube specification |
| `Htype` | Hanger type |
| `Nload` | Nominal load |
| `Lhead` | Logical head flag |
| `Ltail` | Logical tail flag |
| `Hposition` | Head position |
| `Tposition` | Tail position |
| `Hdirection` | Head direction |
| `Tdirection` | Tail direction |
| `Href` | Head reference |
| `Tref` | Tail reference |
| `Hconnect` | Head connection type |
| `Tconnect` | Tail connection type |
| `Hbore` | Head bore |
| `Tbore` | Tail bore |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Deldsg` | Delivery Designation flag |
| `Orrf` | Origin reference (for templates) |
| `Sloreference` | Pipe slope reference |
| `Uuidia` | Universally unique identifier |
| `Invfarray` | Array of Inventory Items |


### Restraint Element (`RESTRAINT`)

### Support Element (`SUPPORT`)
**Legal Members:** `ATTACHMENT`, `BEND`, `ELBOW`, `FLANGE`, `PLATE`, `REDUCER`


### Trancillary Element (`TRANCILLARY`)

### Trunnion Reducer Element (`TRREDUCER`)

### Weld Element (`WELD`)

## Elements in Point Set Category


### Design Pointset Area Element (`DPAREA`)
**Point Set Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### Design Ppoint/Pline Set Element (`DPSET`)

### Cartesian Design Ppoint Element (`DPCARTESIAN`)
**Point Set Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Dconnect` | Design PPoint connection type |
| `Bore` | Bore |
| `Orientation` | Orientation |
| `Position` | Position |
| `Pvifilter` | PPoint/Pline visibility filter |
| `Pskey` | Key for ISODRAFT |
| `Orrf` | Origin reference (for templates) |


### Design Ppoint/Pline Set Element (`DPSET`)
**Legal Members:** None


### Cylindrical Design Ppoint Element (`DPCYLINDRICAL`)
**Point Set Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Dconnect` | Design PPoint connection type |
| `Bore` | Bore |
| `Position` | Position |
| `Orientation` | Orientation |
| `Angle` | Angle |
| `Height` | Height |
| `Radius` | Radius |
| `Pvifilter` | PPoint/Pline visibility filter |
| `Pskey` | Key for ISODRAFT |
| `Orrf` | Origin reference (for templates) |


### Design Ppoint/Pline Set Element (`DPSET`)
**Legal Members:** None


### Design Pline Element (`DPLINE`)
**Point Set Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None


### Design Ppoint/Pline Set Element (`DPSET`)
**Point Set Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Skey` | Symbol key |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `APPLDATA`, `ASREQU`, `ASSMBR`, `ASSOC`, `CAGSEG`, `CFLOOR`, `CMFITTING`, `CMPFITTING`, `CONVEYOR`, `CSCREED`, `CWALL`, `DATDEF`, `DERDAT`, `DOOR`, `DPAREA`, `ELCONN`, `ELFITTING`, `ENDATUM`, `EQUCOM`, `EQUIPMENT`, `FITTING`, `FIXING`, `FIXTUR`, `FLOOR`, `FPFITTING`, `FRMWORK`, `FURNIT`, `GENSEC`, `GWALL`, `HOOPSE`, `HRGATE`, `HRPANE`, `HRPOST`, `HRTERM`, `HVACFITTING`, `INFITTING`, `JNTBOX`, `LDRRUN`, `MFIX`, `NOZZLE`, `PANEL`, `PCOJOINT`, `PFITTING`, `PJOINT`, `PLDATUM`, `PNODE`, `PTRACK`, `PULLPIT`, `RESDEF`, `RESTRIC`, `RLGATE`, `SBFITTING`, `SBFRAMEWORK`, `SCOJOINT`, `SCREED`, `SCTN`, `SITE`, `SJOINT`, `SNODE`, `STRUCTURE`, `STWALL`, `SUBEQUIPMENT`, `SUBJOINT`, `SUBSTRUCTURE`, `SVOLMODEL`, `TMPLATE`, `TREAD`, `VOLMODEL`, `WALL`


### Window Element (`WINDOW`)

### External Geometry Element (`XGEOMETRY`)

### Zone Element (`ZONE`)
**Legal Members:** `DPCARTESIAN`


### Cylindrical Design Ppoint Element (`DPCYLINDRICAL`)

### Spherical Design Ppoint Element (`DPSPHERICAL`)

### Spherical Design Ppoint Element (`DPSPHERICAL`)
**Point Set Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Dconnect` | Design PPoint connection type |
| `Bore` | Bore |
| `Position` | Position |
| `Orientation` | Orientation |
| `Ddirection` | Design PPoint spherical direction |
| `Radius` | Radius |
| `Pvifilter` | PPoint/Pline visibility filter |
| `Pskey` | Key for ISODRAFT |
| `Orrf` | Origin reference (for templates) |


### Design Ppoint/Pline Set Element (`DPSET`)
**Legal Members:** None


## Elements in Primitive Category


### Aid Arc Element (`AIDARC`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Level` | Drawing level |
| `Position` | Position |
| `Orientation` | Orientation |
| `Radius` | Radius |
| `Stangle` | Start angle |
| `SweepAngle` | Sweep angle |


### Aid Group Element (`AIDGROUP`)
**Legal Members:** None


### Aid Circle Element (`AIDCIRCLE`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Level` | Drawing level |
| `Position` | Position |
| `Orientation` | Orientation |
| `Radius` | Radius |


### Aid Group Element (`AIDGROUP`)
**Legal Members:** None


### Aid Line Element (`AIDLINE`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Level` | Drawing level |
| `Position` | Position |
| `Orientation` | Orientation |
| `Zlength` | Line length |


### Aid Group Element (`AIDGROUP`)
**Legal Members:** None


### Aid Point Element (`AIDPOINT`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Level` | Drawing level |
| `Position` | Position |


### Aid Group Element (`AIDGROUP`)
**Legal Members:** None


### Aid Text Element (`AIDTEXT`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Level` | Drawing level |
| `Position` | Position |
| `Orientation` | Orientation |
| `Cheight` | Character height |
| `Stext` | S Text string |


### Aid Group Element (`AIDGROUP`)
**Legal Members:** None


### Box Element (`BOX`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Xlength` | X length |
| `Ylength` | Y length |
| `Zlength` | Z length |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `EQUIPMENT`, `ENVLOP`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)

### Cone Element (`CONE`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Dtop` | Top diameter |
| `Dbottom` | Bottom diameter |
| `Height` | Height |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)

### Circular Torus Element (`CTORUS`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Rinside` | Inside radius |
| `Routside` | Outside radius |
| `Angle` | Angle |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the Circular Torus is at the center of the circular arcs of radii RINSI and ROUTS, and is defined in the` | X-Y plane. |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)

### Cylinder Element (`CYLINDER`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Diameter` | Diameter |
| `Height` | Height |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)

### Dish Element (`DISH`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Diameter` | Diameter |
| `Height` | Height |
| `Radius` | Radius |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the Dish is at the center of the base, and the Z-axis lies along the normal to the base.` |  |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)
Description
DRAWING is an element which may be used to produce a symbol or shape on a drawing not normally catered for
elsewhere. If, for example, it were necessary to show a company name in large letters painted on the side of a
tank, the letters could be built up as DRAWI elements which would be members of the EQUIP containing the
tank. Commonly used to show the centerline of a beam or column.

### Drawn Line Element (`DRAWING`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Skey` | Symbol key |
| `Lissue` | True if drawing has been issued |
| `Wmaximum` | Maximum weld number in current spool drawing |
| `Pmaximum` | Maximum part number in current spool drawing |
| `Smaximum` | Maximum spool number in current spool drawing |
| `Jmaximum` | Maximum joint number in current spool drawing |
| `Rev` | Pipe Revision number |
| `Splprefix` | Spool number prefix |
| `Orrf` | Origin reference (for templates) |
| `The following graphics displays lines and curves drawn between Points(P), Tangent Points(T) and Invisible` | Points(I) for Boundaries and Drawings. |

**Legal Owners:** `CONVEYOR`, `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `REFDAT`, `SITE`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Volume Model Element (`VOLMODEL`)

### Zone Element (`ZONE`)
**Legal Members:** `IPOINT`, `POINT`


### Tangent Point Element (`TANPOINT`)

### Text Element (`TEXT`)
Description
The EXTRUSION can be used to represent any volume of uniform cross-section. It is defined by sweeping a profile
representing the extrusion's shape (LOOP) through a given distance (equivalent to the extrusion thickness).

### Extrusion Element (`EXTRUSION`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Height` | Height |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `Defining an EXTRUsion.` |  |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`


### Sub Volume Model Element (`SVOLMODEL`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Legal Members:** `LOOP`, `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)
Description
The element is positioned to allow a break in a line.

### Invisible Point Element (`IPOINT`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orrf` | Origin reference (for templates) |


### Boundaries and Roadways Element (`BOUNDARY`)

### Drawn Line Element (`DRAWING`)

### Polygon Element (`POGON`)
**Legal Members:** None


### Linear Dimension Element (`LINDIMENSION`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Level` | Drawing level |
| `Position` | Position |
| `Orientation` | Orientation |
| `Cheight` | Character height |


### Dimension Group Element (`DIMGROUP`)
**Legal Members:** `DIMPLI`


### Dimension Position Element (`DIMPOS`)

### Dimension PPoint Element (`DIMPPT`)
Description
The LOOP represents a 2D profile which defines the shape of an Extrusion or Solid of Revolution. It is defined as a
set of edges linking adjacent points represented by Vertex (VERT) elements.

### Loop Element (`LOOP`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `AEXTRUSION`, `AREVOLUTION`, `BNDLIN`, `DTPLAT`, `DTPROF`, `EXTRUSION`, `FLRCOV`, `INSURQ`


### Negative Revolution Element (`NREVOLUTION`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)

### Revolution Element (`REVOLUTION`)

### Vertex Element (`VERTEX`)
Description
A LOOPTS element holds a set of pointers to the individual Point (POIN) elements which define each vertex of a
Polyhedron Loop (POLOOP). These pointers are stored in the VXREFS attribute of the LOOPTS. The POINs
referenced are themselves stored under a Polygon Point List (POLPTL) element.
The points referenced by VXREFS must be stored under a POLPTL under the relevant POLYHE or NPOLYH. To
preserve the integrity of the primitive, points stored elsewhere will not be considered.
A POLOOP can hold multiple LOOPTS elements, each LOOPTS being limited to a maximum of 500 POINs. The
order of points round a loop is in member list order of each LOOPTS in turn.
The INVIS logical array determines the visibility of edges. The points referenced by this array correspond to those
referenced by the VXREFS array. If the INVIS pointer is set to False for any point (or, by default, is unset), the edge
between that point and the preceding point will be visible; if set to True, the edge will be invisible.

### Loop Points Element (`LOOPTS`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Orrf` | Origin reference (for templates) |
| `Vxrefs` | Vertex reference array |
| `Invisible` | Visibility state |


### Polyhedron Loop Element (`POLOOP`)
**Legal Members:** `None`, `A POIN referenced from a LOOPTS with the INVIS flag set to True behaves like an IPOIN in a POGO. For more`, `information, refer to Polygon Element (POGON).`


### MLABEL Element (`MLABEL`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Level` | Drawing level |
| `Position` | Position |
| `Orientation` | Orientation |
| `Cheight` | Character height |
| `Lframe` | Frame flag |
| `Stext` | S Text string |


### Dimension Group Element (`DIMGROUP`)
**Legal Members:** `DIMPLI`


### Dimension Position Element (`DIMPOS`)

### Dimension PPoint Element (`DIMPPT`)
Description
The element can belong to a Polyhedron (or Ground Model) and is the definition of a face of the owning volume.
The face is defined by positioning member points which define its boundary.

### Polygon Element (`POGON`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Level` | Drawing level |
| `Orrf` | Origin reference (for templates) |
| `The sequence of points in the Member List must correspond to the anticlockwise sequence of points when the` | external face of the polygon is viewed. |


### Ground Model Element (`GRDMODEL`)

### Polyhedron Element (`POHEDRON`)

### Invisible Point Element (`IPOINT`)

### Point Element (`POINT`)
Description
The free-form element can be built into any shape by assembling a number of member POLYGON (POGO)
elements.

### Polyhedron Element (`POHEDRON`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `Polyhedra must be constructed so that they have no re-entrant corners. If a polyhedron contains a re-entrant` | corner, it must be split into two or more legal polyhedra. |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `POGON`, `The POHE element does not represent a "solid" 3D entity: it simply defines a set of face planes (the POGOs)`, `which might (or might not) enclose a 3D volume. For a more versatile primitive, see the Solid Polyhedron`, `(POLYHE) element.`

Description
The element is positioned to describe a point in a line (when its owner is a BOUNDARY or DRAWING) or a vertex
on a planar shape (when its owner is a POGON or a POLPTL).

### Point Element (`POINT`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `BOUNDARY`


### Drawn Line Element (`DRAWING`)

### Polygon Element (`POGON`)

### Polyhedron Point List Element (`POLPTLIST`)
**Legal Members:** None

Description
An administrative element which holds Polyhedron Loop (POLOOP) members representing the faces of a Solid
Polyhedron (POLYHE) or Negative Polyhedron (NPOLYH). For an unbroken face, each POLFAC will normally hold
one POLOOP only, but a discontinuous face may be represented by a POLFAC comprising two or more POLOOPs.

### Polyhedron Face Element (`POLFACE`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Orrf` | Origin reference (for templates) |


### Area Polyhedron Element (`APOLYHEDRON`)

### Negative Polyhedron Element (`NPOLYHEDRON`)

### Polyhedron Element (`POLYHEDRON`)
**Legal Members:** `POLOOP`, `Polyhedron Faces (POLFACs), unlike Polygons (POGOs), are not represented in the spatial map used for clash`, `checking and so on.`

Description
The POLOOP represents a planar profile which defines all or part of the shape of a Polyhedron Face (POLFAC). It
is defined by a set of edges linking adjacent Point (POIN) elements, the latter being identified by references held
in a Loop Points element (LOOPTS) owned by the POLOOP.
The order of the vertices (that is whether they are sequenced clockwise or anticlockwise) is significant. The order
for a loop representing a positive polyhedron face is the opposite to that representing a negative polyhedron
face. The LMIRR attribute determines whether the face points are read from start to end of the list, or in reverse.
Reversing the order changes the loop from a positive outer boundary to a negative hole boundary, or vice versa.
By default, points listed anticlockwise correspond to a positive boundary.

### Polyhedron Loop Element (`POLOOP`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `LMirror` | True if Mirroring required |
| `Orrf` | Origin reference (for templates) |


### Polyhedron Face Element (`POLFACE`)
**Legal Members:** `LOOPTS`, `The directions clockwise and anticlockwise refer to the sense when looking from outside of the face into the`, `polyhedron.`

Description
An administrative element which hols Point (POIN) members defining the vertices of a Solid Polyhedron
(POLYHE) or Negative Polyhedron (NPOLYH).

### Polyhedron Point List Element (`POLPTLIST`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Orrf` | Origin reference (for templates) |


### Area Polyhedron Element (`APOLYHEDRON`)

### Negative Polyhedron Element (`NPOLYHEDRON`)

### Polyhedron Element (`POLYHEDRON`)

### Point Element (`POINT`)
Description
The element is a versatile element that represents a 3D polyhedral volume in terms of sets of points which
define the vertices, and hence the edges, of the planar faces (POLFACs) enclosing the volume.
Each POLFAC is defined by one or more planar Polyhedron Loops (POLOOP). Each POLOOP is defined by a
sequence of vertex positions which are identified by means of a Loop Points element (LOOPTS). The LOOPTS
comprises references to sets of Point (POIN) elements held by administrative Polyhedron Point List (POLPTL)
elements. Any POIN which lies on a common edge between two faces will be referenced more than once (one
reference from the LOOPTS of each POLOOP which shares that POIN).
The intended use of this element is as a means of importing 3D-shape data into DESIGN from external sources,
rather than for creating polyhedra directly within DESIGN. Such data would normally be read into DESIGN via a
macro file generated elsewhere. For this reason, there is no mechanism for creating Solid Polyhedra or their
related elements from the DESIGN applicationware.

### Polyhedron Element (`POLYHEDRON`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Function` | Function |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`, `NSNOUT`, `NXTRUSION`


### Polyhedron Face Element (`POLFACE`)

### Polyhedron Point List Element (`POLPTLIST`)

### Pyramid Element (`PYRAMID`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Xbottom` | Bottom X length |
| `Ybottom` | Bottom Y length |
| `Xtop` | Top X length |
| `Ytop` | Top Y length |
| `Height` | Height |
| `Xoffset` | X-offset |
| `Yoffset` | Y-offset |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the Pyramid is at the mid-point of the line joining the mid-points of the top and bottom surfaces,` | and the Z-axis is normal to the top and bottom faces. |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)
Description
The Solid of Revolution represents any shape which can be generated by sweeping a constant cross-section
profile thought an angle about an axis. The profile is represented by a LOOP, in the same was as for an Extrusion,
but in this case the profile is swept about an axis rather than along a linear path. The swept angle must but in the
range -360 to +360 degrees, 360 degrees, giving a solid which is axially symmetrical.

### Revolution Element (`REVOLUTION`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Angle` | Angle |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `LOOP`, `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)

### Rectangular Torus Element (`RTORUS`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Rinside` | Inside radius |
| `Routside` | Outside radius |
| `Height` | Height |
| `Angle` | Angle |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the Rectangular Torus is at the center of the circular arcs of radii RINSI and ROUTS, and is defined in` | the X-Y plane. |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)

### Slope Bottom Cylinder Element (`SLCYLINDER`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Diameter` | Diameter |
| `Height` | Height |
| `Xtshear` | X top shear: inclination of top face to local X axis |
| `Ytshear` | Y top shear: inclination of top face to local Y axis |
| `Xbshear` | X bottom shear: inclination of bottom face to local X |
| `axis` | Ybshear |
| `Y bottom shear: inclination of bottom face to local Y` | axis |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the Slope-bottom Cylinder is at the mid-point of the axis (mid-way between P1 and P2) and the` | default orientation is with the axis on the Z-axis. |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Terrain Primitive Holder Element (`TRNPRI`)

### Template Element (`TMPLATE`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)

### Snout Element (`SNOUT`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Dtop` | Top diameter |
| `Dbottom` | Bottom diameter |
| `Xoffset` | X-offset |
| `Yoffset` | Y-offset |
| `Height` | Height |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the Snout is at the mid-point of the line joining the centres of the top and bottom surfaces and the` | Z-axis is normal to the top and bottom surfaces. |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `SVOLMODEL`


### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Negative Rectangular Extrusion Element (`NXTRUSION`)
Description
The element allows a smooth curve (second order Bezier) to be drawn between two points in a line.

### Tangent Point Element (`TANPOINT`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orrf` | Origin reference (for templates) |


### Boundaries and Roadways Element (`BOUNDARY`)

### Drawn Line Element (`DRAWING`)
**Legal Members:** None

Description
A VERT element defines each vertex of a Loop.

### Vertex Element (`VERTEX`)
**Primitive Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Fradius` | Fillet radius |
| `Bulgefactor` | Bulge factor |
| `Orrf` | Origin reference (for templates) |


### Loop Element (`LOOP`)
**Legal Members:** None


## Elements in Primitive Hole Category

Primitive Hole Element

### Negative Box Element (`NBOX`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Xlength` | X length |
| `Ylength` | Y length |
| `Zlength` | Z length |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `These are as for BOX, but note that the Zlength dimension must be the penetrating dimension for a hole which` | breaks the surface of its owning primitive. |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Legal Members:** None

Primitive Hole Element

### Negative Cone Element (`NCONE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Dtop` | Top diameter |
| `Dbottom` | Bottom diameter |
| `Height` | Height |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Legal Members:** None

Primitive Hole Element

### Negative Circular Torus Element (`NCTORUS`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Rinside` | Inside radius |
| `Routside` | Outside radius |
| `Angle` | Angle |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the NCircular Torus is at the center of the circular arcs of radii RINSI and ROUTS, and is defined in` | the X-Y plane. |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Legal Members:** None

Primitive Hole Element

### Negative Cylinder Element (`NCYLINDER`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Diameter` | Diameter |
| `Height` | Height |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Legal Members:** None

Primitive Hole Element

### Negative Dish Element (`NDISH`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Diameter` | Diameter |
| `Height` | Height |
| `Radius` | Radius |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the NDish is at the center of the base, and the Z-axis lies along the normal to the base.` |  |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Function` | Function |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`

**Legal Members:** `None`, `NPOLYHEDRON`, `Primitive Hole Element`, `Description`, `Represents a 3D negative polyhedral volume in terms of sets of points which define the vertices, and hence the`, `edges, of the planar faces (POLFACs) enclosing the volume.`, `Each POLFAC is defined by one or more planar Polyhedron Loops (POLOOP). Each POLOOP is defined by a`, `sequence of vertex positions which are identified by means of a Loop Points element (LOOPTS). The LOOPTS`, `comprises references to sets of Point (POIN) elements held by administrative Polyhedron Point List (POLPTL)`, `elements.`, `The intended use of this element is as a means of importing 3D-shape data into DESIGN from external sources,`, `rather than for creating polyhedra directly within DESIGN. Such data would normally be read into DESIGN via a`, `macro file generated elsewhere. For this reason, there is no mechanism for creating Negative Polyhedra or their`, `related elements from the DESIGN applicationware.`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Legal Members:** `POLFACE`, `POLPTLIST`, `The Negative Polyhedron (NPOLYH) is identical to the Solid Polyhedron, (POLYHE; refer to Polyhedron Element`, `(POLYHEDRON)). In principle, except that it is interpreted geometrically as a hole rather than as a solid volume.`, `See the entries following the Solid Polyhedron for details of its constituent elements.`

Primitive Hole Element

### Negative Pyramid Element (`NPYRAMID`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Xbottom` | Bottom X length |
| `Ybottom` | Bottom Y length |
| `Xtop` | Top X length |
| `Ytop` | Top Y length |
| `Height` | Height |
| `Xoffset` | X-offset |
| `Yoffset` | Y-offset |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the NPyramid is at the mid-point of the line joining the mid-points of the top and bottom surfaces,` | and the Z-axis is normal to the top and bottom faces. |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `osition` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Angle` | Angle |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`

**Legal Members:** `None`, `NREVOLUTION`, `Primitive Hole Element`, `Description`, `The Negative Solid of Revolution represents any negative shape which can be generated by sweeping a constant`, `cross-section profile through an angle about an axis. The profile is represented by a LOOP, in the same way as for`, `a Negative Extrusion, but in this case the profile is swept about an axis rather than along a linear path. The swept`, `angle must be in the range -360 to +360 degrees, 360 degrees giving a volume which is axially symmetrical.`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Loop Element (`LOOP`)
Primitive Hole Element

### Negative Rectangular Torus Element (`NRTORUS`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Rinside` | Inside radius |
| `Routside` | Outside radius |
| `Height` | Height |
| `Angle` | Angle |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the NRectangular Torus is at the center of the circular arcs of radii RINSI and ROUTS, and is defined` | in the X-Y plane. |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Legal Members:** None

Primitive Hole Element

### Negative Slope Bottom Cylinder Element (`NSLCYLINDER`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Diameter` | Diameter |
| `Height` | Height |
| `Xtshear` | X top shear: inclination of top face to local X axis |
| `Ytshear` | Y top shear: inclination of top face to local Y axis |
| `Xbshear` | X bottom shear: inclination of bottom face to local X |
| `axis` | Ybshear |
| `Y bottom shear: inclination of bottom face to local Y` | axis |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the NSlope-bottom Cylinder is at the mid-point of the axis (mid-way between P1 and P2) and the` | default orientation is with the axis on the Z-axis. |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Legal Members:** None

Primitive Hole Element

### Negative Snout Element (`NSNOUT`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Dtop` | Top diameter |
| `Dbottom` | Bottom diameter |
| `Xoffset` | X-offset |
| `Yoffset` | Y-offset |
| `Height` | Height |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `The origin of the NSnout is at the mid-point of the line joining the centres of the top and bottom surfaces and` | the Z-axis is normal to the top and bottom surfaces. |

**Legal Owners:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `POLYHEDRON`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Height` | Height |
| `Orrf` | Origin reference (for templates) |
| `Number` | Number |
| `Function` | Function |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `Prodrf` | Reference to Production Object |

**Legal Owners:** `BOX`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `FLOOR`, `GWALL`, `PANEL`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SLCYLINDER`

**Legal Members:** `None`, `NXTRUSION`, `Primitive Hole Element`, `Description`, `The NEGATIVE EXTRUSION can be used to represent any negative volume of uniform cross-section. It is defined`, `by sweeping a profile representing the negative extrusions shape (LOOP) through a given distance (equivalent to`, `the extrusion thickness).`


### Snout Element (`SNOUT`)

### Template Element (`TMPLATE`)

### Terrain Primitive Holder Element (`TRNPRI`)

### Design Dataset Element (`DDSE`)

### Loop Element (`LOOP`)

## Elements in Reference Category

Boundaries and Roadways Element (BOUNDARY)
Reference Element
Description
For site layout features, such as fences and roadways, it will often be sufficient to restrict modelling to lines and
arcs laid out on a surface. The BOUNDARY element allows this method of modelling by positioning member
POINTS, IPOINTS (invisible points), and TANPOINTS (tangent points) to describe the required outlines. The
BOUNDARY can be thought of as a "high level" basic element (its identical low-level equivalent is the DRAWING,
which can belong to EQUIPMENT, STRUCTURES and so on.). The BOUNDARY has the normal drawing LEVEL
attribute of a primitive, but no OBSTRUCTION (as it is composed entirely of lines).
Attributes
Name
Name of the element
Description
Description of the element
Function
Function
Purpose
Description code word
Position
Position
Orientation
Orientation
Level
Drawing level
Orrf
Origin reference (for templates)
Legal Owners

### Conveyor Element (`CONVEYOR`)

### Site Element (`SITE`)

### Zone Element (`ZONE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Height` | Height |
| `Skey` | Symbol key |
| `Stext` | S Text string |
| `Orrf` | Origin reference (for templates) |

**Legal Members:** `IPOINT`, `POINT`, `TANPOINT`, `TEXT`, `DATUM`, `Reference Element`, `Description`, `The point can be used as a reference position against which other elements are located. It is shown as a set of`, `axes with a local North pointer.`


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Orrf` | Origin reference (for templates) |

**Legal Members:** `None`, `GRDMODEL`, `Reference Element`, `Description`, `Basic shapes and features in the site can be represented by Ground Models. These may be natural occurrences`, `like mounds or slopes. Each Ground Model element is built up in exactly the same way as a POHEDRON`, `(polyhedron) which is described elsewhere. Restrictions on the form of Ground Models mean that they are of`, `limited user.`


### Site Element (`SITE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Xlength` | X length |
| `Ylength` | Y length |
| `Zlength` | Line length |
| `Weighting` | Weighting value |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `CONVEYOR`, `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`

**Legal Members:** `POGON`, `TEXT`, `PVOLUME`, `Reference Element`, `Description`, `The element is a BOX-like volume that has a special significance to the pipe-routing function of DESIGN (see`, `Transaction Database). DESIGN can determine whether to treat a PVOL as a Preferred or Penalty Volume,`, `depending on the relative values of the WEIGHT attribute. Penalty Volumes are generally used for roads, access`, `ways, and so on.`


### Sub Volume Model Element (`SVOLMODEL`)

### Volume Model Element (`VOLMODEL`)

### Zone Element (`ZONE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Xlength` | X length |
| `Ylength` | Y length |
| `Orrf` | Origin reference (for templates) |
| `Plpposition` | Plane pipe positioning code word used by Router |
| `Plwwposition` | Plane wall to wall positioning code used by Router |
| `Plpmethod` | Plane pipe packing method - nearest or weighted |

**Legal Owners:** `CONVEYOR`, `EQUIPMENT`, `JNTBOX`, `PTRACK`, `PULLPIT`, `RPLGROUP`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`

**Legal Members:** `None`, `RPLANE`, `Reference Element`, `Description`, `The element is a planar element that has special significance in pipe routing, but may be used as a general`, `reference plane. Refer to Automatic Pipe Routing for further information about routing planes in Pipe routing.`


### Sub Volume Model Element (`SVOLMODEL`)

### Volume Model Element (`VOLMODEL`)

### Zone Element (`ZONE`)
**Legal Members:** None

Reference Element
Description
The RPLG is a grouping element whose members may be Steelwork RPLANEs (refer to Routing Plane Element
(RPLANE)), as opposed to the Piping RPLANEs.

### Routing Plane Element (`RPLGROUP`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |
| `Orrf` | Origin reference (for templates) |


### Structure Element (`STRUCTURE`)

### Routing Plane Element (`RPLANE`)
Reference Element

### Sub Volume Model Element (`SVOLMODEL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Uwmtxt` | User weight Manager text |
| `Built` | Built/Unbuilt flag |
| `Uuidia` | Universally unique identifier |
| `Propst` | Property set reference array |
| `Orrf` | Origin reference (for templates) |


### Volume Model Element (`VOLMODEL`)
**Legal Members:** `BOX`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DISH`, `DPSET`, `DRAWING`, `EXTRUSION`, `LOAPOINT`, `POHEDRON`, `POLYHEDRON`, `PVOLUME`, `PYRAMID`, `REVOLUTION`, `RPLANE`, `RTORUS`, `SLCYLINDER`, `SNOUT`


### Text Element (`TEXT`)
Reference Element

### Volume Model Element (`VOLMODEL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Uwmtxt` | User weight Manager text |
| `Built` | Built/Unbuilt flag |
| `Uuidia` | Universally unique identifier |
| `Propst` | Property set reference array |
| `Orrf` | Origin reference (for templates) |


### Conveyor Element (`CONVEYOR`)

### Zone Element (`ZONE`)
**Legal Members:** `BOX`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DISH`, `DPSET`, `DRAWING`, `EXTRUSION`, `LOAPOINT`, `POHEDRON`, `POLYHEDRON`, `PVOLUME`, `PYRAMID`, `REVOLUTION`, `RPLANE`, `RTORUS`, `SLCYLINDER`


### Snout Element (`SNOUT`)

### Sub Volume Model Element (`SVOLMODEL`)

### Text Element (`TEXT`)

## Elements in Router Category

Router Element

### General Rule Element (`GRULE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Purpose` | Description code word |
| `Name` | Name of the element |
| `Function` | Function |
| `Rlselect` | Rule selection array |
| `Rllogical` | Rule logical array |
| `Rlaction` | Rule action array |


### Rule Set Element (`RLST`)
**Legal Members:** None

Router Element

### Rule Set Element (`RLST`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Function` | Function |


### Rule World Element (`RLWLD`)

### General Rule Element (`GRULE`)
Router Element

### Rule World Element (`RLWLD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### World Element (`WORLD`)

### Rule Set Element (`RLST`)

## Elements in Schematic Design Integrator Area Limit Point Category

Schematic Design Integrator Area Limit Point Element

### Integrator Area Limit Point Group Element (`ILPGRP`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Integrator Area Limit Point Group Element (`ILPGRP`)

### Integrator Area Limit Point World Element (`ILPWRL`)
**Legal Members:** `ILPGRP`


### Integrator Area Limit Point Object Element (`ILPOBJ`)
Schematic Design Integrator Area Limit Point Element

### Integrator Area Limit Point Object Element (`ILPOBJ`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `ILPOFF` | Integrator Area Limit Point offset |
| `ILPPOI` | Integrator Area Limit Point position |
| `ILPSCH` | Integrator Area Limit Point schematic element |
| `ILPULB` | Integrator Area Limit Point upstream label |
| `ILPDLB` | Integrator Area Limit Point downstream label |


### Integrator Area Limit Point Group Element (`ILPGRP`)
**Legal Members:** None

Schematic Design Integrator Area Limit Point Element

### Integrator Area Limit Point World Element (`ILPWRL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### World Element (`WORLD`)

### Integrator Area Limit Point Group Element (`ILPGRP`)

## Elements in Schematic Design Link Category

Schematic Design Link Element

### Connectivity Link Group Element (`CYMGRP`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Connectivity Link Group Element (`CYMGRP`)

### Integrator World Element (`CYMWRL`)
**Legal Members:** `CYMGRP`


### Connectivity Schematic-design Link Element (`CYMLNK`)
Schematic Design Link Element

### Connectivity Schematic-design Link Element (`CYMLNK`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `SchLnk` | Connectivity Schematic Link |
| `DesLnk` | Connectivity Design Model Link |
| `CmpStatus` | Connectivity comparison status |
| `EngLnk` | Engineering Element Link |
| `SplLnk` | Spooler Element Link |
| `ManLnk` | Manufacturing Element Link |
| `DsxLnk` | Connectivity Extended Design Model Link |


### Connectivity Link Group Element (`CYMGRP`)

### Connectivity Schematic-design Link Element (`CYMLNK`)

### Connectivity Schematic-design Link Element (`CYMLNK`)
Schematic Design Link Element

### Integrator World Element (`CYMWRL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### World Element (`WORLD`)

### Connectivity Link Group Element (`CYMGRP`)

## Elements in Stair Category

Stair Element

### Bottom Extension Element (`BOTEXT`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `AssTmpReference` | Assembly Template Reference |


### Stair Flight Element (`STRFLT`)
**Legal Members:** `BPANEL`, `DDSE`, `GENSEC`, `PANEL`


### Template Element (`TMPLATE`)
Stair Element

### Intermediate Landing Element (`INTLNG`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `AssTmpReference` | Assembly Template Reference |


### Stair Flight Element (`STRFLT`)
**Legal Members:** `BPANEL`, `DDSE`, `GENSEC`, `PANEL`


### Template Element (`TMPLATE`)
Stair Element

### Stair Flight Element (`STRFLT`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `InstOptions` | Installation Options |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `LowRef` | References to lower exit level |
| `UppRef` | References to upper exit level |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `ORise` | Overall Rising |
| `OGoing` | Overall Going |
| `Rise` | Tread Rise |
| `LRise` | Lower Tread Rise |
| `TWidth` | Tread Width |
| `TreadOverlap` | Tread Overlap |
| `UExtnsion` | Upper Extension Length |
| `UCutDirection` | Upper Extension Cutting Direction |
| `LExtnsion` | Lower Extension Length |
| `LCutDirection` | Lower Extension Cutting Direction |
| `Headroom` | Headroom |
| `HeadClearance` | Head Clearance |
| `FThickness` | Stair Flight Thickness |
| `TODATA` | To check the mode of creation for to references |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `ASLStandard` | ASL Standard Reference |
| `ASLSbStandard` | ASL Substandard Reference |
| `STRJUSTIFICATIONLINE` | Cable Way Justification Line |
| `AssTmpReference` | Assembly Template Reference |
| `LabOffset` | Label offset |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Uuidia` | Universally unique identifier |

**Legal Owners:** `FRMWORK`, `SBFRAMEWORK`


### Stair Tower Element (`STRTWR`)

### Structure Element (`STRUCTURE`)

### Stairwell Element (`STRWELL`)
**Legal Members:** `BOTEXT`, `DDSE`, `HANDRA`, `INTLNG`, `RPATH`, `STRSTR`, `TOPEXT`


### Tread Set Element (`TREADSET`)
Stair Element

### Stair Landing Element (`STRLNG`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Matref` | Material reference |
| `Level` | Drawing level |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `Thickn` | Thickness |
| `Headroom` | Headroom |
| `BRadius` | Bend radius |
| `RoutReference` | Route reference |
| `RefLevel` | Reference Level |
| `LFADirection` | Flight A Direction |
| `LFBDirection` | Landing Flight B Direction |
| `LFAOffset` | Landing Flight A Offset |
| `LFBOffset` | Landing Flight B Offset |
| `CloseFlag` | True if branch is closed |
| `ASLStandard` | ASL Standard Reference |
| `ASLSbStandard` | ASL Substandard Reference |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `LabOffset` | Label offset |
| `AssTmpReference` | Assembly Template Reference |


### Stair Tower Element (`STRTWR`)

### Stairwell Element (`STRWELL`)
**Legal Members:** `BPANEL`, `DDSE`, `GENSEC`, `HANDRA`, `PANEL`


### Route Path Element (`RPATH`)
Stair Element

### Stair Set Element (`STRSET`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None

Stair Element

### Stair String Element (`STRSTR`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Function` | Function |
| `Description` | Description of the element |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `NosOffset` | Nosing Offset |
| `PostSpacing` | Default post spacing |
| `AssTmpReference` | Assembly Template Reference |


### Stair Flight Element (`STRFLT`)

### Step Ladder Element (`SLADDR`)
**Legal Members:** `BPANEL`, `DDSE`, `GENSEC`


### Panel Element (`PANEL`)
Stair Element

### Stair Tower Element (`STRTWR`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Area` | Area |
| `Number` | Number |
| `Matref` | Material reference |
| `Position` | Position |
| `Orientation` | Orientation |
| `StrCon` | Stair Configuration |
| `StrStd` | Stair Standard |
| `InstOptions` | Installation Options |
| `INTSEN` | Installation Sense - true if clockwise |
| `ColXSpacing` | Spacing between columns in the X direction of the |
| `tower` | ColYSpacing |
| `Spacing between columns in the Y direction of the` | tower |
| `FCLXSpacing` | Spacing between stair flights in the X direction of the |
| `tower` | FCLYSpacing |
| `Spacing between stair flights in the Y direction of the` | tower |
| `LndLevels` | Landing levels from owning element |
| `BmLevels` | Beam levels from owning element |
| `Thickn` | Thickness |
| `TWidth` | Tread Width |
| `Headroom` | Headroom |
| `HeadClearance` | Head Clearance |
| `FThickness` | Stair Flight Thickness |
| `OpHeight` | Operational Height |
| `OpWidth` | Operational Width |
| `OpLength` | Operational Length |
| `CLBaseOffset` | Column base offset |
| `ASLStandard` | ASL Standard Reference |
| `ASLSbStandard` | ASL Substandard Reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Dcrfarray` | Array of Design datasets for Design Code/Criteria |
| `LabOffset` | Label offset |
| `Uuidia` | Universally unique identifier |

**Legal Owners:** `FRMWORK`


### Subframework Element (`SBFRAMEWORK`)

### Structure Element (`STRUCTURE`)

### Stairwell Element (`STRWELL`)
**Legal Members:** `ACCSET`, `DDSE`, `STRFLT`, `STRLNG`


### Tower Steel Element (`TWRSTL`)
Stair Element

### Top Extension Element (`TOPEXT`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Function` | Function |
| `Description` | Description of the element |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `AssTmpReference` | Assembly Template Reference |


### Step Ladder Element (`SLADDR`)

### Stair Flight Element (`STRFLT`)
**Legal Members:** `BPANEL`, `DDSE`, `GENSEC`, `PANEL`


### Template Element (`TMPLATE`)
Stair Element

### Tread Element (`TREAD`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Function` | Function |
| `Description` | Description of the element |
| `Spref` | Component spec reference |
| `TWidth` | Tread Width |
| `Desparam` | Design parameters |
| `Number` | Number |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |
| `AssTmpReference` | Assembly Template Reference |


### Tread Set Element (`TREADSET`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `GENSEC`, `PANEL`


### Template Element (`TMPLATE`)
Stair Element

### Tread Set Element (`TREADSET`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Area` | Area |
| `Function` | Function |
| `Description` | Description of the element |
| `Matref` | Material reference |
| `FireRating` | Fire rating |
| `Firesistance` | Fire resistance |
| `Position` | Position |
| `Orientation` | Orientation |


### Stair Flight Element (`STRFLT`)

### Step Ladder Element (`SLADDR`)
**Legal Members:** `DDSE`


### Tread Element (`TREAD`)
Stair Element

### Tower Steel Element (`TWRSTL`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `RefLevel` | Reference Level |


### Stair Tower Element (`STRTWR`)

### Bent Plate Element (`BPANEL`)

### Structural Generic Section Element (`GENSEC`)

### Panel Element (`PANEL`)

## Elements in Stress Analysis Category

Load Case Descriptor Element (LCDESCRIPTOR)
Stress Analysis Element
Description
The LCDE element allows you to supply a detailed description of the types of loading case that are to be
considered as being applied during stress analysis of the Structure. Any element without a LCDE will be ignored
during stress analysis.
Attributes
Name
Name of the element
Lcase
Load case number
Stext
S Text string
Orrf
Origin reference (for templates)
Legal Owners

### Structure Element (`STRUCTURE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Lcase` | Load case number |
| `Laxes` | Local axes |
| `Displacement` | Translation displacements |
| `Rotn` | Rotation |
| `Description` | Description of the element |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `CMFITTING`, `ENDATUM`, `FITTING`, `JLDATUM`, `LOAPOINT`

**Legal Members:** `None`, `NODISPLACEMENT`, `Stress Analysis Element`, `Description`, `The NODI element allows you to apply directional or rotational displacement results or preconditions to a`, `Structure. The displacements are specified relative to a locally defined axis system.`


### Panel Vertex Element (`PAVERT`)

### Primary Node Element (`PNODE`)

### Secondary Node Element (`SNODE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Lcase` | Load case number |
| `Laxes` | Local axes |
| `Force` | Force vector |
| `Moment` | Moment |
| `Description` | Description of the element |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `CMFITTING`, `ENDATUM`, `FITTING`, `JLDATUM`, `LOAPOINT`

**Legal Members:** `None`, `NOLOAD`, `Stress Analysis Element`, `Description`, `The NOLO element is used to apply forces or moments to its owning Node. The forces and moments are`, `specified relative to a locally defined axis system (LAXES).`


### Panel Vertex Element (`PAVERT`)

### Primary Node Element (`PNODE`)

### Secondary Node Element (`SNODE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Nrelease` | Nodal releases |
| `Laxes` | Local axes |
| `Dflfactors` | Translational spring values |
| `Rflfactors` | Rotational spring values |
| `Description` | Description of the element |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `CMFITTING`, `ENDATUM`, `FITTING`, `JLDATUM`, `LOAPOINT`

**Legal Members:** `None`, `RELEASE`, `Stress Analysis Element`, `Description`, `The RELE element is used to define how a stressed structure may flex under the influence of applied forces or`, `moments. Its attribute settings control both directional and rotational movement at its owning Node. The`, `Release directions are specified relative to a locally defined axis system.`


### Panel Vertex Element (`PAVERT`)

### Primary Node Element (`PNODE`)

### Secondary Node Element (`SNODE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Lcase` | Load case number |
| `Szdistance` | Start load point in section |
| `Ezdistance` | End load point in section |
| `Sforce` | Start force vector component |
| `Eforce` | End force vector components |
| `Width` | Width |
| `Smoment` | Start moment component |
| `Emoment` | End moment components |
| `Description` | Description of the element |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `GENSEC`

**Legal Members:** `None`, `SDLOAD`, `Stress Analysis Element`, `Description`, `The SDLO element allows you to apply forces or moments distributed over a specified length of the Neutral Axis`, `of a Section. Stress analysis calculations assume a linear interpolation of such a force or moment over the`, `specified part of the Section. The forces and moments are specified relative to the axis system of the parent`, `Structure.`


### Panel Vertex Element (`PAVERT`)

### Structural Section Element (`SCTN`)

### Structural Wall Element (`STWALL`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Lcase` | Load case number |
| `Zdistance` | Position in section |
| `Force` | Force vector |
| `Moment` | Moment |
| `Description` | Description of the element |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `GENSEC`

**Legal Members:** `None`, `SPLOAD`, `Stress Analysis Element`, `Description`, `The SPLO element allows you to apply forces or moments at given points on the Neutral Axis of a Section. The`, `forces and moments are specified relative to the axis system of the parent Structure.`


### Panel Vertex Element (`PAVERT`)

### Structural Section Element (`SCTN`)

### Structural Wall Element (`STWALL`)
**Legal Members:** None


## Elements in Structural Category


### Bent Plate Element (`BPANEL`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `StruClassification` | Structural Classification |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Width` | Width |
| `WThickness` | Wall thickness |
| `WJusLine` | Wall Justification Line |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `PosNo` | Position number |
| `ParNam` | Part name |
| `CloseFlag` | True if branch is closed |
| `Uuidia` | Universally unique identifier |
| `Spref` | Component spec reference |

**Legal Owners:** `BOTEXT`, `CEILIN`, `CFLOOR`, `CSCREED`, `CWALL`, `EQUIPMENT`, `EXTFRM`, `FRMWORK`, `HRPANE`, `HRPOST`, `HRTERM`, `INTFRM`, `INTLNG`, `JNTBOX`, `LDRRUN`, `LDRSTR`, `PLTGRD`, `PULLPIT`, `PTRACK`, `RLGATE`, `SBFRAMEWORK`, `SLRAIL`, `STRLNG`, `STRSTR`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `TMPLATE`


### Top Extension Element (`TOPEXT`)

### Tread Element (`TREAD`)

### Tower Steel Element (`TWRSTL`)
**Legal Members:** `BPFEAT`, `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`


### Negative Snout Element (`NSNOUT`)

### Route Path Element (`RPATH`)

### Bent Plate Features Element (`BPFEAT`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Bent Plate Element (`BPANEL`)

### Bent Plate Fitting Element (`BPFITTING`)

### Bent Plate Opening Element (`BPOPEN`)

### Bent Plate Fitting Element (`BPFITTING`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `WJusLine` | Wall Justification Line |
| `Purpose` | Description code word |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Area` | Area |
| `VDistance` | Vertical Distance |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Desparam` | Design parameters |
| `Matref` | Material reference |
| `Bangle` | Beta angle |
| `Bfori` | Bent Feature Orientation |


### Bent Plate Features Element (`BPFEAT`)
**Legal Members:** None


### Bent Plate Opening Element (`BPOPEN`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `WJusLine` | Wall Justification Line |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `VDistance` | Vertical Distance |
| `VertDirection` | VERTDI (true if Z axe is vertical) |
| `OpnSize` | Opening size |
| `PosRef` | Reference to point |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |


### Bent Plate Features Element (`BPFEAT`)

### Route Path Element (`RPATH`)

### Floor Element (`CFLOOR`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Stspec` | Structural specification |
| `Matref` | Material reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `DUnion` | DRAFT element union detail flag |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Skey` | Symbol key |
| `Supref` | SUPREF |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Uuidia` | Universally unique identifier |


### Framework Element (`FRMWORK`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `FIXING`, `FLOOR`, `GENSEC`, `PALJOINT`, `PANEL`, `PNODE`, `SCREED`, `SCTN`


### Text Element (`TEXT`)

### Template Element (`TMPLATE`)
Description
A CMFI can be used to represent a penetration at which one or more elements (Pipes or Sections) pass through a
hole in a Section. The position of each individual penetrating item is represented by a Subfitting (SBFI) element
owned by the CMFI; the CMFI is primarily an administrative element used to position a group of SBFI. A CMFI is
positioned along the Z axis of its owning Section, in the same way as a Secondary Node.

### Compound Fitting Element (`CMFITTING`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Desparam` | Design parameters |
| `Gtype` | Generic type |
| `Number` | Number |
| `Zdistance` | Position in section |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Posline` | Positioning line |
| `Delposition` | D-position in structure |
| `Bangle` | Beta angle |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Matref` | Material reference |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |


### Structural Section Element (`SCTN`)

### Structural Wall Element (`STWALL`)
**Legal Members:** `DDSE`, `DPSET`, `NODISPLACEMENT`, `NOLOAD`, `RELEASE`


### Subfitting Element (`SBFITTING`)

### Template Element (`TMPLATE`)
Description
A CMPF can be used to represent a penetration at which one or more elements (Pipes or Sections) pass through
a hole in a Panel. The position of each individual penetrating item is represented by a Subfitting (SBFI) element
owned by the CMPF; the CMPF is primarily an administrative element used to position a group of SBFIs.

### Compound Panel Fitting Element (`CMPFITTING`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Bangle` | Beta angle |
| `Sjustification` | Surface justification of Panel |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Orrf` | Origin reference (for templates) |
| `Cfrarray` | Cofitting reference array for Pfittings |
| `Invfarray` | Array of Inventory Items |
| `Matref` | Material reference |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `FLOOR`


### Wall Element (`GWALL`)

### Panel Element (`PANEL`)

### Screed Element (`SCREED`)
**Legal Members:** `DDSE`, `DPSET`


### Subfitting Element (`SBFITTING`)

### Template Element (`TMPLATE`)
Description
A PANEL COFITTING is used where a fitting or penetration spans the junction between two or more panels. One
panel owns a PFIT, while the others each own a COFI. Each COFI refers back to the associated PFIT via its PFRE
(PFIT Reference attribute).

### Panel Cofitting Element (`COFITTING`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Pfref` | Pfitting reference for Cofittings |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `FLOOR`


### Wall Element (`GWALL`)

### Panel Element (`PANEL`)

### Screed Element (`SCREED`)
**Legal Members:** None


### Complementary Fitting Element (`COMFIXING`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Pfref` | Pfitting reference for Cofittings |
| `Orrf` | Origin reference (for templates) |


### Structural Generic Section Element (`GENSEC`)

### Wall Element (`WALL`)
**Legal Members:** None


### Screed Element (`CSCREED`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Stspec` | Structural specification |
| `Matref` | Material reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `DUnion` | DRAFT element union detail flag |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Skey` | Symbol key |
| `Supref` | SUPREF |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Uuidia` | Universally unique identifier |


### Framework Element (`FRMWORK`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `FIXING`, `PALJOINT`, `PANEL`, `SCREED`


### Text Element (`TEXT`)

### Template Element (`TMPLATE`)
Description
A CURVE element defines a segment of a Spine path. It defines the geometry of the Spine between the POINSPs
either side of it in the members list.

### Curve (on Spine) Element (`CURVE`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Cposition` | conditioning position for curve geometry |
| `Zdirection` | Additional axis direction |
| `Radius` | Radius |
| `Radsetflag` | Radius set flag - ignore Radius values if FALSE |
| `Bulgefactor` | Bulge factor |
| `CurType` | Curve type |
| `Orrf` | Origin reference (for templates) |


### Route Path Element (`RPATH`)

### Spine (of Gensec) Element (`SPINE`)
**Legal Members:** None


### Wall Element (`CWALL`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Stspec` | Structural specification |
| `Matref` | Material reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `DUnion` | DRAFT element union detail flag |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Skey` | Symbol key |
| `Supref` | SUPREF |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Uuidia` | Universally unique identifier |


### Framework Element (`FRMWORK`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `FIXING`, `GENSEC`, `GWALL`, `PALJOINT`, `PANEL`, `PNODE`, `SCTN`, `STWALL`, `TEXT`


### Template Element (`TMPLATE`)

### Wall Element (`WALL`)

### Detailing Graphic Measure Line Termination Data Element (`DGDLT`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None


### Detailing Graphic Line Type Data Element (`DGLTYP`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None


### Detailing Graphic 2D Point Data Element (`DGPDD`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None


### Detailing Graphic 3D Point Data Element (`DGPDDD`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None


### Detailing Graphic Text Attribute Data Element (`DGTXAT`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Owners:** `Legal Members:`


### Detailing Graphic Weld Data Element (`DGWELD`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None


### Detailing Model Extension Data Element (`DTEXT`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None


### Endatum Element (`ENDATUM`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Posline` | Positioning line |
| `Ydirection` | Preferred Y axis direction |
| `Level` | Drawing level |
| `Fixity` | Structural fixity |
| `Hpref` | Head point reference |
| `Tpref` | Tail point reference |
| `Orrf` | Origin reference (for templates) |
| `OwnReference` | ENDATUM owner reference |
| `ConReference` | References to other connected element |
| `PSPReference` | Associated POINSP Reference |
| `HanICPosition` | INTERNAL HANCI cached position |
| `HanICOffset` | HANCI INTERNAL CACHED OFFSET |
| `Zoffset` | Z-offset |


### Structural Generic Section Element (`GENSEC`)
**Legal Members:** `DDSE`, `DPSET`, `FIXING`, `NODISPLACEMENT`


### Nodal Load Element (`NOLOAD`)

### Nodal Release Element (`RELEASE`)
Description
A FITT can be used to represent any item which is attached to the Structure but which does not form an integral
part of it. It may be used to indicate such things as the presence of a connected implied load, such as a pipe
hanger attachment, or an ancillary item, such as a web stiffener or a flange plate.
A FITT is positioned along the Z axis of its owning Section, in the same way as a Secondary Node.

### Fitting Element (`FITTING`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Gtype` | Generic type |
| `Number` | Number |
| `Zdistance` | Position in section |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Posline` | Positioning line |
| `Delposition` | D-position in structure |
| `Bangle` | Beta angle |
| `Cref` | Connection reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Matref` | Material reference |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |


### Structural Section Element (`SCTN`)

### Structural Wall Element (`STWALL`)
**Legal Members:** `DDSE`, `DPSET`, `NODISPLACEMENT`, `NOLOAD`


### Nodal Release Element (`RELEASE`)

### Template Element (`TMPLATE`)
Description
A FIXING can represent any fitting or joint owned (indirectly) by a GENSEC. It serves a similar function to
elements, such as FITT, CMFI, SBFI, PCOJ, SCOJ, but in a more generalized way.

### Fixing Element (`FIXING`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Bangle` | Beta angle |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Cutback` | Cutback |
| `Cutplane` | Cutting plane normal |
| `Jline` | Joining line |
| `Jfree` | If YES attached section alignment may change |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Cref` | Connection reference |
| `Cfrarray` | Cofitting reference array for Pfittings |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `MFIXref` | Merged Fixing Reference |
| `Orrf` | Origin reference (for templates) |
| `Matref` | Material reference |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Bevcodes` | Bevel codes for edges |
| `Excess` | Excess |

**Legal Owners:** `CFLOOR`, `CSCREED`, `CWALL`, `DOOR`, `ELFITTING`, `ENDATUM`, `FIXING`, `FIXTUR`, `FPFITTING`, `FRMWORK`, `FURNIT`, `HRGATE`, `HRPANE`, `HVACFITTING`, `INFITTING`, `PLDATUM`, `PLFEAT`


### Primary Node Element (`PNODE`)

### Subframework Element (`SBFRAMEWORK`)

### Window Element (`WINDOW`)
**Legal Members:** `DDSE`, `DPSET`


### Fixing Element (`FIXING`)

### Template Element (`TMPLATE`)

### Floor Element (`FLOOR`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `StruClassification` | Structural Classification |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Spref` | Component spec reference |
| `Matref` | Material reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Uuidia` | Universally unique identifier |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `Prodrf` | Reference to Production Object |
| `Excess` | Excess |
| `Bevcodes` | Bevel codes for edges |

**Legal Owners:** `CFLOOR`


### Framework Element (`FRMWORK`)

### Subframework Element (`SBFRAMEWORK`)

### Template Element (`TMPLATE`)
**Legal Members:** `CMPFITTING`, `COFITTING`, `DDSE`, `DPSET`, `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`, `NSNOUT`, `NXTRUSION`, `PALJOINT`, `PFITTING`


### Panel Loop Element (`PLOOP`)

### Template Element (`TMPLATE`)
Description
The FRMW element provides a convenient administrative element for structural design modelling. A number of
the attributes set at FRMW level will cascade down through the design hierarchy as member elements are
created during the steelwork design process.

### Framework Element (`FRMWORK`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Stspec` | Structural specification |
| `Matref` | Material reference |
| `GrdRef` | Grid reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `DUnion` | DRAFT element union detail flag |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Skey` | Symbol key |
| `Supref` | SUPREF |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Uuidia` | Universally unique identifier |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Optblo` | Optional block name |
| `Pdname` | Production name |


### Structure Element (`STRUCTURE`)
**Legal Members:** `AIDGROUP`, `BPANEL`, `CFLOOR`, `CSCREED`, `CWALL`, `DDSE`, `DIMGROUP`, `DPSET`, `FIXING`, `FLOOR`, `GENSEC`, `GWALL`, `HANDRA`, `LADDER`, `PALJOINT`, `PANEL`, `PNODE`, `RLADDR`, `SBFRAMEWORK`, `SCREED`, `SCTN`, `SLADDR`, `STRFLT`, `STRTWR`, `STWALL`, `TEXT`


### Template Element (`TMPLATE`)

### Wall Element (`WALL`)
Description
A GENSEC can represent any component whose geometry is defined by sweeping a 2D profile along a linear or
curved path (its SPINE element). It has a uniform cross-section along its length, defined by reference to a Catalog
Profile element. In its simplest form, where the Spine is defined as a line between two fixed points, the GENSEC
can be used as an alternative to the SCTN element. In its more general form, where the Spine consists of a
sequence of straight and/or curved segments, it can represent curved beams, curved walls, and so on.

### Structural Generic Section Element (`GENSEC`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Gtype` | Generic type |
| `Number` | Number |
| `Desparam` | Design parameters |
| `StruClassification` | Structural Classification |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Bangle` | Beta angle |
| `LMirror` | True if Mirroring required |
| `Joistart` | Start joint |
| `Joiend` | End joint |
| `Jlnstart` | Joining line start |
| `Jlnend` | Joining line end |
| `Jusline` | Justification Pline |
| `Ctystart` | Start connection type |
| `Ctyend` | End connection type |
| `Srelease` | Start releases (packed) |
| `Erelease` | End releases (packed) |
| `Grade` | Steel grade |
| `Matref` | Material reference |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `WeldDp` | Welding depth |
| `PosNo` | Position number |
| `ParNam` | Part name |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Antype` | Analysis type |
| `Drgpriority` | Drawing priority (used to determine how to draw |
| `SCTN)` | Memline |
| `Member line` | Orrf |
| `Origin reference (for templates)` | Uuidia |
| `Universally unique identifier` | Position |
| `Position` | Orientation |
| `Orientation` | Purpose |
| `Description code word` | Tmrref |
| `Template Repeat Element Reference` | RepCount |
| `Rule Repeat Counter` | Prodrf |
| `Reference to Production Object` | Bevcodes |
| `Bevel codes for edges` |  |

**Legal Owners:** `BOTEXT`, `CAGSEG`, `CFLOOR`, `CLNLATTICE`, `CTFEAT`, `CWALL`, `EXTFRM`, `FRMWORK`, `HOOPSE`, `HRGATE`, `HRPANE`, `HRPOST`, `HRTERM`, `INTFRM`, `INTLNG`, `LDRRUN`, `LDRSTR`, `PLTGRD`, `RLGATE`, `SBFRAMEWORK`, `SLRAIL`, `STRLNG`, `STRSTR`, `TMPLATE`


### Top Extension Element (`TOPEXT`)

### Tread Element (`TREAD`)

### Tower Steel Element (`TWRSTL`)
**Legal Members:** `COMFIXING`, `DDSE`, `DPSET`, `ENDATUM`, `HANCILLARY`, `JLDATUM`, `SDLOAD`, `SELJOINT`, `SPINE`


### Section Point Load Element (`SPLOAD`)

### Template Element (`TMPLATE`)

### Wall Element (`GWALL`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `StruClassification` | Structural Classification |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Spref` | Component spec reference |
| `Matref` | Material reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Uuidia` | Universally unique identifier |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `Prodrf` | Reference to Production Object |
| `Excess` | Excess |
| `Bevcodes` | Bevel codes for edges |

**Legal Owners:** `CWALL`


### Framework Element (`FRMWORK`)

### Subframework Element (`SBFRAMEWORK`)

### Template Element (`TMPLATE`)
**Legal Members:** `CMPFITTING`, `COFITTING`, `DDSE`, `DPSET`, `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`, `NSNOUT`, `NXTRUSION`, `PALJOINT`, `PFITTING`


### Panel Loop Element (`PLOOP`)

### Template Element (`TMPLATE`)
Description
Defines the frame of reference for its member PLDATUM elements based on the pline system of its owning
GENSEC. (Replaces the function of the SNODE used by SCTNs.)

### Justification Line Datum Element (`JLDATUM`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Zdistance` | Position in section |
| `Pkdistance` | Proportional distance along Pline |
| `Level` | Drawing level |
| `Fixity` | Structural fixity |
| `Hpref` | Head point reference |
| `Tpref` | Tail point reference |
| `Orrf` | Origin reference (for templates) |
| `Uuidia` | Universally unique identifier |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |


### Structural Generic Section Element (`GENSEC`)

### Wall Element (`WALL`)
**Legal Members:** `NODISPLACEMENT`, `NOLOAD`


### Pline Datum Element (`PLDATUM`)

### Nodal Release Element (`RELEASE`)

### Knuckled Surface Vertex Element (`KSUSVE`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** None

Description
The Equipment LOAP element provides a link between an Equipment item and a Steelwork Structural item. The
CREF attribute of a LOAP and the CREF attribute of a Fitting may point to each other to indicate interconnection
between them.

### Equipment Load Point Element (`LOAPOINT`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Cref` | Connection reference |
| `Description` | Description of the element |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `EQUIPMENT`, `JNTBOX`, `PULLPIT`


### Subequipment Element (`SUBEQUIPMENT`)

### Sub Volume Model Element (`SVOLMODEL`)

### Volume Model Element (`VOLMODEL`)
**Legal Members:** `NODISPLACEMENT`


### Nodal Load Element (`NOLOAD`)

### Nodal Release Element (`RELEASE`)

### Merged Fixing Element (`MFIX`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Bangle` | Beta angle |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Cutback` | Cutback |
| `Cutplane` | Cutting plane normal |
| `Jline` | Joining line |
| `Jfree` | If YES attached section alignment may change |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Cref` | Connection reference |
| `Cfrarray` | Cofitting reference array for Pfittings |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Mfref` | Merged Fixing Reference Element |
| `Orrf` | Origin reference (for templates) |
| `Matref` | Material reference |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Bevcodes` | Bevel codes for edges |
| `Excess` | Excess |


### Pline Datum Element (`PLDATUM`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)
Description
A Panel Linear Joint is used to connect two Panels together. The start and end of the PALJ are defined by two
Panel Vertex (PAVE) points. Logical connections from the attached Panel are made by setting Master Vertex
(MVERT) attributes of two of the Panels PAVEs to point to the corresponding PAVEs on the linear joint.

### Panel Linear Joint Element (`PALJOINT`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Gtype` | Generic type |
| `Number` | Number |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Spref` | Component spec reference |
| `Matref` | Material reference |
| `Date` | Date |
| `Sjustification` | Surface justification for PALJs |
| `Orrf` | Origin reference (for templates) |
| `Mdsysf` | Reference Array of Model and Design Elements |

**Legal Owners:** `CFLOOR`, `CSCREED`, `CWALL`, `FLOOR`, `FRMWORK`, `GWALL`


### Panel Element (`PANEL`)

### Subframework Element (`SBFRAMEWORK`)

### Screed Element (`SCREED`)

### Panel Vertex Element (`PAVERT`)
Description
The PANEL element is used to represent sheet materials (walls, floors, decking, and so on.) used to clad the
structure. It is defined by sweeping a profile representing the panel's shape (the Panel Loop. PLOOP) through a
given distance (equivalent to the panel thickness) for more information, refer to the following figure.

### Panel Element (`PANEL`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `StruClassification` | Structural Classification |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Spref` | Component spec reference |
| `Matref` | Material reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `PosNo` | Position number |
| `ParNam` | Part name |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Uuidia` | Universally unique identifier |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `Prodrf` | Reference to Production Object |
| `Excess` | Excess |
| `Bevcodes` | Bevel codes for edges |

**Legal Owners:** `BOTEXT`, `CEILIN`, `CFLOOR`, `CSCREED`, `CWALL`, `EQUIPMENT`, `EXTFRM`, `FRMWORK`, `HRPANE`, `HRPOST`, `HRTERM`, `INTFRM`, `INTLNG`, `JNTBOX`, `LDRRUN`, `LDRSTR`, `PLTGRD`, `PTRACK`, `PULLPIT`, `RLGATE`, `SBFRAMEWORK`, `SLRAIL`, `STRLNG`, `STRSTR`, `STRUCTURE`, `SUBEQUIPMENT`, `SUBSTRUCTURE`, `TMPLATE`


### Top Extension Element (`TOPEXT`)

### Tread Element (`TREAD`)

### Tower Steel Element (`TWRSTL`)
**Legal Members:** `CMPFITTING`, `COFITTING`, `DDSE`, `DPSET`, `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`, `NSNOUT`, `NXTRUSION`, `PALJOINT`, `PFITTING`, `PLOOP`


### Structural Connection Set Element (`STCSET`)

### Template Element (`TMPLATE`)
Descriptio
A PAVE element defines each vertex of a Panel Loop or each connected end of a Panel Linear Joint.

### Panel Vertex Element (`PAVERT`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Spref` | Component spec reference |
| `Ctyattached` | Attached connection type |
| `Fradius` | Fillet radius |
| `Bulgefactor` | Bulge factor |
| `Bangle` | Beta angle |
| `Matref` | Material reference |
| `Date` | Date |
| `Mvertex` | Reference to Master Vertex |
| `Lnfarray` | Hidden Reference Array for linked Vertices |
| `Orrf` | Origin reference (for templates) |


### Panel Linear Joint Element (`PALJOINT`)

### Panel Loop Element (`PLOOP`)
**Legal Members:** `NODISPLACEMENT`, `NOLOAD`, `RELEASE`


### Section Distributed Load Element (`SDLOAD`)

### Section Point Load Element (`SPLOAD`)
Description
The Primary Compound Joint is used where two or more attached sections are connected at a common Primary
Node (representing, for example, a gusset plate). It owns a separate SubJoint for each connection.

### Primary Compound Joint Element (`PCOJOINT`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Desparam` | Design parameters |
| `Gtype` | Generic type |
| `Number` | Number |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Delposition` | D-position in structure |
| `Opdirection` | Origin plane direction |
| `Bangle` | Beta angle |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Orrf` | Origin reference (for templates) |
| `Matref` | Material reference |
| `Invfarray` | Array of Inventory Items |


### Primary Node Element (`PNODE`)
**Legal Members:** `DDSE`, `DPSET`


### Subjoint Element (`SUBJOINT`)

### Template Element (`TMPLATE`)
Description
A PANEL FITTING can be used to represent any item which is attached to a Panel. It may be used to indicate such
things as the presence of a penetrating item or an ancillary item such as an inspection cover, doorway and so on.
A PFIT is positioned relative to the origin of its owning Panel.

### Panel Fitting Element (`PFITTING`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Bangle` | Beta angle |
| `Sjustification` | Surface justification of Panel |
| `Cref` | Connection reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Cfrarray` | Cofitting reference array for Pfittings |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Matref` | Material reference |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `FLOOR`


### Wall Element (`GWALL`)

### Panel Element (`PANEL`)

### Screed Element (`SCREED`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)
Description
The PJOINT is used to make a logical connection between a Section's start or end and a Primary Node. Its
position is defined relative to that of a PNOD (cf. SJOINT element). It allows you to model indirectly, physical
connections between Sections.

### Primary Joint Element (`PJOINT`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Desparam` | Design parameters |
| `Gtype` | Generic type |
| `Number` | Number |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Delposition` | D-position in structure |
| `Opdirection` | Origin plane direction |
| `Bangle` | Beta angle |
| `Cutback` | Cutback |
| `Cutplane` | Cutting plane normal |
| `Cref` | Connection reference |
| `Jline` | Joining line |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Jfree` | If YES attached section alignment may change |
| `Matref` | Material reference |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Mdsysf` | Reference Array of Model and Design Elements |
| `Bevcodes` | Bevel codes for edges |
| `Excess` | Excess |


### Primary Node Element (`PNODE`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)
Description
Defines the frame of reference for its members based on the nominated pline (POSL) system of its owning
JLDATUM. Used to position Fixings, Joints, or Fittings along a GENSEC.

### Pline Datum Element (`PLDATUM`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `PLock` | True if element pos line is locked |
| `Number` | Number |
| `Posline` | Positioning line |
| `Ydirection` | Preferred Y axis direction |
| `Level` | Drawing level |
| `Orrf` | Origin reference (for templates) |


### Justification Line Datum Element (`JLDATUM`)
**Legal Members:** `DDSE`, `DPSET`


### Fixing Element (`FIXING`)

### Merged Fixing Element (`MFIX`)
Description
The PLOOP represents a 2D profile which defines the shape of a Panel. It is defined as a set of edges linking
adjacent points represented by Panel Vertex (PAVE) elements.

### Panel Loop Element (`PLOOP`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Height` | Height |
| `Sjustification` | Surface justification of Panel |
| `Spref` | Component spec reference |
| `Matref` | Material reference |
| `Orrf` | Origin reference (for templates) |
| `LBlind` | Blind hole flag |

**Legal Owners:** `FLOOR`


### Wall Element (`GWALL`)

### Panel Element (`PANEL`)

### Screed Element (`SCREED`)

### Panel Vertex Element (`PAVERT`)
Description
The PNODE is a fundamental "analytical" point of connection between Sections in an interconnected steelwork
structure. Its position is used to define the placing of Sections within the design model and as a reference point
for stress analytical calculations on the interconnected structure. Its position is defined relative to the coordinate
system of the parent Structure (cf. the Secondary Node element, whose position is defined relative to an owning
Section).

### Primary Node Element (`PNODE`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Nposition` | Position in owner |
| `Level` | Drawing level |
| `Fixity` | Structural fixity |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |

**Legal Owners:** `CFLOOR`, `CWALL`


### Framework Element (`FRMWORK`)

### Subframework Element (`SBFRAMEWORK`)

### Template Element (`TMPLATE`)
**Legal Members:** `DDSE`, `DPSET`, `FIXING`, `NODISPLACEMENT`, `NOLOAD`, `PCOJOINT`


### Primary Joint Element (`PJOINT`)

### Nodal Release Element (`RELEASE`)
Description
A POINSP element defines the start and end of a Spine path, and any location along the path at which there is a
change of direction.

### Point (on Spine) Element (`POINSP`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orrf` | Origin reference (for templates) |
| `Lnfarray` | Hidden Reference Array for linked Vertices |


### Spine (of Gensec) Element (`SPINE`)
**Legal Members:** None

Description
A SBFI can represent a single penetration at which a Pipe or Section passes through a hole in a Panel or Section.
Multiple penetrations are represented by a group of SBFIs (one for each penetrating item) owned by a common
Compound Fitting (CMFI) or Compound Panel Fitting (CMPF) element.

### Subfitting Element (`SBFITTING`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Gtype` | Generic type |
| `Number` | Number |
| `Desparam` | Design parameters |
| `Shop` | Shop/Site flag |
| `Built` | Built/Unbuilt flag |
| `Arrive` | Arrive Ppoint |
| `Delposition` | D-position in structure |
| `Zdirection` | Additional axis direction |
| `Bangle` | Beta angle |
| `Cref` | Connection reference |
| `Grade` | Steel grade |
| `Firesistance` | Fire resistance |
| `Ispec` | Insulation spec reference |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Orrf` | Origin reference (for templates) |
| `Matref` | Material reference |


### Compound Fitting Element (`CMFITTING`)

### Compound Panel Fitting Element (`CMPFITTING`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)
Description
The SBFR element allows you to further subdivide a FRMW into more manageable administrative portions for
structural design modelling. As for FRMW, some attribute settings will cascade down to member elements.

### Subframework Element (`SBFRAMEWORK`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Stspec` | Structural specification |
| `Matref` | Material reference |
| `GrdRef` | Grid reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `DUnion` | DRAFT element union detail flag |
| `Ptspec` | Paint specification |
| `Inschedule` | Inspection schedule |
| `Skey` | Symbol key |
| `Supref` | SUPREF |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Uuidia` | Universally unique identifier |
| `Optblo` | Optional block name |
| `Pdname` | Production name |


### Framework Element (`FRMWORK`)
**Legal Members:** `BPANEL`, `DDSE`, `DPSET`, `FIXING`, `FLOOR`, `GENSEC`, `GWALL`, `HANDRA`, `LADDER`, `PALJOINT`, `PANEL`, `PNODE`, `RLADDR`, `SCREED`, `SCTN`, `SLADDR`, `STRFLT`, `STRTWR`, `STWALL`, `TEXT`


### Template Element (`TMPLATE`)

### Wall Element (`WALL`)
Description
The Secondary Compound Joint is used where two or more attached sections are connected at a common
Secondary Node (representing, for example, a gusset plate). It owns a separate SubJoint for each connection.

### Secondary Compound Joint Element (`SCOJOINT`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Gtype` | Generic type |
| `Number` | Number |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Posline` | Positioning line |
| `Delposition` | D-position in structure |
| `Bangle` | Beta angle |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Matref` | Material reference |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |


### Secondary Node Element (`SNODE`)
**Legal Members:** `DDSE`, `DPSET`


### Subjoint Element (`SUBJOINT`)

### Template Element (`TMPLATE`)

### Screed Element (`SCREED`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `StruClassification` | Structural Classification |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Desparam` | Design parameters |
| `Level` | Drawing level |
| `Obstruction` | Obstruction level |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Spref` | Component spec reference |
| `Matref` | Material reference |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Uuidia` | Universally unique identifier |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `Prodrf` | Reference to Production Object |
| `Excess` | Excess |
| `Bevcodes` | Bevel codes for edges |

**Legal Owners:** `CFLOOR`, `CSCREED`


### Framework Element (`FRMWORK`)

### Subframework Element (`SBFRAMEWORK`)

### Template Element (`TMPLATE`)
**Legal Members:** `CMPFITTING`, `COFITTING`, `DDSE`, `DPSET`, `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`, `NSNOUT`, `NXTRUSION`, `PALJOINT`, `PFITTING`


### Panel Loop Element (`PLOOP`)

### Template Element (`TMPLATE`)
Description
A SCTN represents a linear component such as a beam, column, strut, and so on. It has a uniform cross-section
along its length, defined by reference to a Catalog PROFILE element, while its length is a derived property (not
stored in an attribute) which is determined by the Sections start and end positions.

### Structural Section Element (`SCTN`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `StruClassification` | Structural Classification |
| `Gtype` | Generic type |
| `Number` | Number |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Bangle` | Beta angle |
| `Drnstart` | Plane normal at start of SCTN/GENSEC |
| `Drnend` | Plane normal at end of SCTN/GENSEC |
| `Posstart` | Start point position |
| `Posend` | End point position |
| `Joistart` | Start joint |
| `Joiend` | End joint |
| `Jline` | Joining line |
| `Jusline` | Justification Pline |
| `Ctystart` | Start connection type |
| `Ctyend` | End connection type |
| `Srelease` | Start releases (packed) |
| `Erelease` | End releases (packed) |
| `Grade` | Steel grade |
| `Matref` | Material reference |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `WeldDp` | Welding depth |
| `PosNo` | Position number |
| `ParNam` | Part name |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Antype` | Analysis type |
| `Drgpriority` | Drawing priority (used to determine how to draw |
| `SCTN)` | Memline |
| `Member line` | Orrf |
| `Origin reference (for templates)` | Invfarray |
| `Array of Inventory Items` | Uuidia |
| `Universally unique identifier` | Tmrref |
| `Template Repeat Element Reference` | RepCount |
| `Rule Repeat Counter` | Prodrf |
| `Reference to Production Object` | Bevcodes |
| `Bevel codes for edges` |  |

**Legal Owners:** `CFLOOR`, `CWALL`


### Framework Element (`FRMWORK`)

### Subframework Element (`SBFRAMEWORK`)

### Template Element (`TMPLATE`)
**Legal Members:** `CMFITTING`, `DDSE`, `DPSET`, `FITTING`, `SDLOAD`, `SELJOINT`, `SNODE`


### Section Point Load Element (`SPLOAD`)

### Template Element (`TMPLATE`)
Description
A Section Linear Joint is used to connect a Panel to a Section. The start and end of the SELJ are defined by two
Section Vertex (SEVE) points. Logical connections from the attached Panel are made by setting Master Vertex
(MVERT) attributes of two of the Panel's PAVEs to point to the corresponding SEVEs on the linear joint.

### Section Linear Joint Element (`SELJOINT`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Gtype` | Generic type |
| `Number` | Number |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Spref` | Component spec reference |
| `Matref` | Material reference |
| `Date` | Date |
| `Orrf` | Origin reference (for templates) |

**Legal Owners:** `GENSEC`


### Structural Section Element (`SCTN`)

### Structural Wall Element (`STWALL`)

### Wall Element (`WALL`)

### Section Vertex Element (`SEVERT`)
Description
A SEVE element defines each connected end of a Section Linear Joint.

### Section Vertex Element (`SEVERT`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Gtype` | Generic type |
| `Number` | Number |
| `Desparam` | Design parameters |
| `Zdistance` | Position in section |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Spref` | Component spec reference |
| `Ctyattached` | Attached connection type |
| `Posline` | Positioning line |
| `Delposition` | D-position in structure |
| `Fradius` | Fillet radius |
| `Bulgefactor` | Bulge factor |
| `Bangle` | Beta angle |
| `Matref` | Material reference |
| `Date` | Date |
| `Mvertex` | Reference to Master Vertex |
| `Lnfarray` | Hidden Reference Array for linked Vertices |
| `Orrf` | Origin reference (for templates) |


### Section Linear Joint Element (`SELJOINT`)
**Legal Members:** None

Description
The SJOINT element is used to make a logical connection between two Sections in an interconnected steelwork
structure. Its position is defined relative to that of a SNOD (cf. PJOINT element).

### Secondary Joint Element (`SJOINT`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Gtype` | Generic type |
| `Number` | Number |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Posline` | Positioning line |
| `Delposition` | D-position in structure |
| `Bangle` | Beta angle |
| `Cutback` | Cutback |
| `Cutplane` | Cutting plane normal |
| `Cref` | Connection reference |
| `Jline` | Joining line |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Jfree` | If YES attached section alignment may change |
| `Matref` | Material reference |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Bevcodes` | Bevel codes for edges |
| `Excess` | Excess |


### Secondary Node Element (`SNODE`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)
Description
The SNODE is a fundamental "analytical" point of connection between Sections in an interconnected steelwork
structure. Its position is used to define the placing of Sections within the design model and as a reference point
for stress analytical calculations on the interconnected structure. Its position is defined relative to an owning
Section (cf. the Primary Node element, whose position is defined relative to the coordinate system of the parent
Structure).

### Secondary Node Element (`SNODE`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Zdistance` | Position in section |
| `Level` | Drawing level |
| `Fixity` | Structural fixity |
| `Orrf` | Origin reference (for templates) |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |


### Structural Section Element (`SCTN`)

### Structural Wall Element (`STWALL`)
**Legal Members:** `DDSE`, `DPSET`, `NODISPLACEMENT`, `NOLOAD`, `RELEASE`


### Secondary Compound Joint Element (`SCOJOINT`)

### Secondary Joint Element (`SJOINT`)
Description
A SPINE defines the path through which a cross-sectional Profile must be swept to generate a GENSEC. The route
of the Spine is defined by a sequence of Spine Points (POINSP): one at the start, one at the end, and one at each
change of direction. Each segment linking adjacent Spine Points can be either a straight line or an arc of a circle:
the latter is achieved by the insertion of a CURVE element, for more information on this element, refer to Curve
(on Spine) Element (CURVE).

### Spine (of Gensec) Element (`SPINE`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Orrf` | Origin reference (for templates) |
| `Drnstart` | Plane normal at start of SCTN/GENSEC |
| `Drnend` | Plane normal at end of SCTN/GENSEC |
| `Ydirection` | Preferred Y axis direction |


### Structural Generic Section Element (`GENSEC`)

### Wall Element (`WALL`)

### Curve (on Spine) Element (`CURVE`)

### Point (on Spine) Element (`POINSP`)

### Structural Connection Element (`STCONN`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Gtype` | Generic type |
| `Number` | Number |
| `Spref` | Component spec reference |
| `Matref` | Material reference |
| `Stcbnd` | Structural connection boundary condition |
| `STCALN` | Structural connection alignment |
| `Stcoff` | Structural connection offset |


### Structural Connection Set Element (`STCSET`)

### Structural Connection Vertex Element (`STCVER`)

### Structural Connection Set Element (`STCSET`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### Panel Element (`PANEL`)

### Structural Connection Element (`STCONN`)

### Structural Connection Vertex Element (`STCVER`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Gtype` | Generic type |
| `Number` | Number |
| `Position` | Position |
| `Stcref` | Structural connection reference |


### Structural Connection Element (`STCONN`)
**Legal Members:** None

Description
The structural framework of the plant (for example, buildings, pipe racks, equipment racks) can be modelled on a
simple level using the same basic set of primitive shapes available for Equipment (the main difference being that
such elements cannot own Nozzles).
The principal feature of the STRUCTURE element is its ability to own SUBSTRUCTURES as well as primitive
shapes, Routing Planes and Penalty Volumes. Enabling, say, a rack to be further divided into beams and columns.
For more information on the use of this element in designing Steelwork Structures, refer to Elements in
Structural Category.

### Structure Element (`STRUCTURE`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Position` | Position |
| `Orientation` | Orientation |
| `GrdRef` | Grid reference |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Uwmtxt` | User weight Manager text |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `DUnion` | DRAFT element union detail flag |
| `Skey` | Symbol key |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Invfarray` | Array of Inventory Items |
| `Uuidia` | Universally unique identifier |
| `Propst` | Property set reference array |
| `Fstatus` | Fstatus |
| `Inprtref` | Inside paint reference |
| `Ouprtref` | Outside paint reference |
| `Optblo` | Optional block name |
| `Pdname` | Production name |

**Legal Owners:** `CONVEYOR`


### Restraint Element (`RESTRAINT`)

### Support Element (`SUPPORT`)

### Zone Element (`ZONE`)
**Legal Members:** `AIDGROUP`, `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DIMGROUP`, `DISH`, `DPSET`, `DRAWING`, `EXTRUSION`, `FRMWORK`, `HANDRA`, `LADDER`, `LCDESCRIPTOR`, `PANEL`, `PLTFRM`, `POHEDRON`, `POLYHEDRON`, `PVOLUME`, `PYRAMID`, `REVOLUTION`, `RLADDR`, `ROOM`, `RPLANE`, `RPLGROUP`, `RTORUS`, `SLADDR`, `SLCYLINDER`, `SNOUT`, `STRFLT`, `STRTWR`, `SUBSTRUCTURE`


### Text Element (`TEXT`)

### Template Element (`TMPLATE`)

### Structural Wall Element (`STWALL`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `StruClassification` | Structural Classification |
| `Gtype` | Generic type |
| `Number` | Number |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Bangle` | Beta angle |
| `Drnstart` | Plane normal at start of SCTN/GENSEC |
| `Drnend` | Plane normal at end of SCTN/GENSEC |
| `Posstart` | Start point position |
| `Posend` | End point position |
| `Joistart` | Start joint |
| `Joiend` | End joint |
| `Jline` | Joining line |
| `Jusline` | Justification Pline |
| `Ctystart` | Start connection type |
| `Ctyend` | End connection type |
| `Srelease` | Start releases (packed) |
| `Erelease` | End releases (packed) |
| `Grade` | Steel grade |
| `Matref` | Material reference |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Antype` | Analysis type |
| `Drgpriority` | Drawing priority (used to determine how to draw |
| `SCTN)` | Memline |
| `Member line for SCTNs` | Orrf |
| `Origin reference (for templates)` | Invfarray |
| `Array of Inventory Items` | Uuidia |
| `Universally unique identifier` | Tmrref |
| `Template Repeat Element Reference` | RepCount |
| `Rule Repeat Counter` | Prodrf |
| `Reference to Production Object` | Bevcodes |
| `Bevel codes for edges` |  |

**Legal Owners:** `CWALL`


### Framework Element (`FRMWORK`)

### Subframework Element (`SBFRAMEWORK`)

### Template Element (`TMPLATE`)
**Legal Members:** `CMFITTING`, `DDSE`, `DPSET`, `FITTING`, `SDLOAD`, `SELJOINT`, `SNODE`


### Section Point Load Element (`SPLOAD`)

### Template Element (`TMPLATE`)
Description
The SUBJ is used to make a logical connection as part of a Primary or Secondary Compound Joint.

### Subjoint Element (`SUBJOINT`)
**Structural Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Gtype` | Generic type |
| `Number` | Number |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Arrive` | Arrive Ppoint |
| `Delposition` | D-position in structure |
| `Zdirection` | Additional axis direction |
| `Bangle` | Beta angle |
| `Cutback` | Cutback |
| `Cutplane` | Cutting plane normal |
| `Cref` | Connection reference |
| `Jline` | Joining line |
| `Grade` | Steel grade |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Jfree` | If YES attached section alignment may change |
| `Matref` | Material reference |
| `Orrf` | Origin reference (for templates) |
| `Bevcodes` | Bevel codes for edges |
| `Excess` | Excess |


### Primary Compound Joint Element (`PCOJOINT`)

### Secondary Compound Joint Element (`SCOJOINT`)
**Legal Members:** `DDSE`


### Design Ppoint/Pline Set Element (`DPSET`)

### Template Element (`TMPLATE`)
Description
Minor structural elements such as beams, columns, walls, ladders, and staircases can be modelled with the
standard set of basic primitive shapes within a SUBSTRUCTURE element.

### Substructure Element (`SUBSTRUCTURE`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Area` | Area |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Uwmtxt` | User weight Manager text |
| `Position` | Position |
| `Orientation` | Orientation |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Length` | Length |
| `DUnion` | DRAFT element union detail flag |
| `Prfl` | Profile |
| `Skey` | Symbol key |
| `Orrf` | Origin reference (for templates) |
| `Stmf` | Template selection pointer |
| `Invfarray` | Array of Inventory Items |
| `Uuidia` | Universally unique identifier |
| `Propst` | Property set reference array |
| `Optblo` | Optional block name |
| `Pdname` | Production name |


### Structure Element (`STRUCTURE`)
**Legal Members:** `AIDGROUP`, `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DIMGROUP`, `DISH`, `DPSET`, `DRAWING`, `EXTRUSION`, `PANEL`, `POHEDRON`, `POLYHEDRON`, `PVOLUME`, `PYRAMID`, `REVOLUTION`, `RPLANE`, `RTORUS`, `SLCYLINDER`, `SNOUT`


### Text Element (`TEXT`)

### Template Element (`TMPLATE`)

### Wall Element (`WALL`)
**Structural Element | Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `StruClassification` | Structural Classification |
| `Gtype` | Generic type |
| `Number` | Number |
| `Desparam` | Design parameters |
| `Built` | Built/Unbuilt flag |
| `Shop` | Shop/Site flag |
| `Bangle` | Beta angle |
| `LMirror` | True if Mirroring required |
| `Joistart` | Start joint |
| `Joiend` | End joint |
| `Jlnstart` | Joining line start |
| `Jlnend` | Joining line end |
| `Jusline` | Justification Pline |
| `Ctystart` | Start connection type |
| `Ctyend` | End connection type |
| `Srelease` | Start releases (packed) |
| `Erelease` | End releases (packed) |
| `Grade` | Steel grade |
| `Matref` | Material reference |
| `Ispec` | Insulation spec reference |
| `Firesistance` | Fire resistance |
| `Inref` | Insulation reference |
| `Spref` | Component spec reference |
| `Antype` | Analysis type |
| `Memline` | Member line |
| `Orrf` | Origin reference (for templates) |
| `Uuidia` | Universally unique identifier |
| `Position` | Position |
| `Orientation` | Orientation |
| `Purpose` | Description code word |
| `Tmrref` | Template Repeat Element Reference |
| `RepCount` | Rule Repeat Counter |
| `Prodrf` | Reference to Production Object |
| `Bevcodes` | Bevel codes for edges |

**Legal Owners:** `CWALL`


### Framework Element (`FRMWORK`)

### Subframework Element (`SBFRAMEWORK`)

### Template Element (`TMPLATE`)
**Legal Members:** `COMFIXING`, `DDSE`, `DPSET`, `JLDATUM`


### Section Linear Joint Element (`SELJOINT`)

### Spine (of Gensec) Element (`SPINE`)

### Template Element (`TMPLATE`)

## Elements in Structural Detailing Category

ARCHIV Element (ARCHIV) - Design - Structural Detailing
Structural Detailing Element
Attributes
Name
Name of the element
Description
Description of the element
Uuid
Universally unique identifier
Legal Owners
Advanced Bevelling Contour Element (BEVEL)
Commenting Attachment Element (CMTATT)
Commenting Capture Element (CMTCAP)
Commenting Attachment Preview Element (CMTPRE)
Curve Geometry Element (CURGEO)
Detailing Graphic Arc Data Element (DGARC)
Detailing Graphic Arc Length Data Element (DGARCL)
Detailing Graphic Elevation Data Element (DGELEV)
Detailing Graphic Measure Line Data Element (DGML)
Detailing Graphic Measure Line Angle Data Element (DGMLA)
Detailing Graphic Measure Line Triangle Data Element (DGMLTR)
Detailing Graphic Polygon Data Element (DGPOLY)
Detailing Graphic Radius Data Element (DGRAD)
Detailing Graphic Symbol Data Element (DGSSYM)
Detailing Graphic Text Data Element (DGTEXT)
Detailing Drawing Element (DTBMF)
Detailing Drawing PDF Element (DTBMFP)
Detailing Model Cut Section Definition Element (DTCSDF)
Detailing Model Feature Element (DTFEAT)

### Detailing Model Geometry Data Element (`DTGEOM`)

### Detailing Model Geometry Information Element (`DTGINF`)

### Detailing Model Shape Data Element (`DTSHAP`)
**Legal Members:** None

Structural Detailing Element

### Advanced Bevelling Contour Element (`BEVEL`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `CnType` | Contour Type Number |
| `DtPCnt` | Number of Points |
| `DtPCnO` | Number of raw Contour Points |
| `Dtsize` | Detailing Model BLOB Size |


### Detailing Model Plate Element Element (`DTPLAT`)
**Legal Members:** `ARCHIV`, `BEVSEG`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Advanced Bevelling Contour Segment Element (`BEVSEG`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DtWlRf` | Reference to Weld Element |
| `StaPoint` | Cable Start connection point |
| `EndPoint` | Cable End connection point |
| `Bevtyp` | Bevel Type Number |
| `Bevpar` | Bevelling Parameters |
| `BevPaT` | Bevelling Tool Parameters |
| `BevDfR` | Reference to Bevel Definition |
| `BevTapering` | Bevel Tapering |
| `BevRoF` | Bevel Root Face |


### Advanced Bevelling Contour Element (`BEVEL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |

**Legal Members:** `None`, `Detailing BMF World Element (BMFWRL) - Design - Structural Detailing`, `Structural Detailing Element`


### World Element (`WORLD`)

### Detailing BMF Job Element (`DTBMFJ`)
Structural Detailing Element

### Detailing Graphic Arc Data Element (`DGARC`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Dgfcol` | Detailing Graphic Fill Color |
| `Dgfltv` | Detailing Graphic Line Pattern Number |
| `Dgpaan` | Pattern Angle |
| `Dgfpad` | Pattern Repeat Factor |
| `Dgfsha` | Detailing Graphic Shading Opacity |
| `Dgltsb` | Detailing Graphic Line termination begin |
| `Dgltl` | Detailing Graphic Line termination length |
| `Dglta` | Detailing Graphic Line termination angle |
| `Dgcrty` | Detailing Graphic Attribute Creation Type |
| `Dgexet` | Detailing Graphic Polyline Attribute Type of execution |
| `Dgfill` | Detailing Graphic Fill flag |
| `Dgwfrm` | Detailing Graphic Symbol Attribute Draw with frame |
| `Dgdbst` | Detailing Graphic Symbol Attribute Drawback start |
| `type` | Dgdbsa |
| `Detailing Graphic Polyline Attribute Drawback start` | angle |
| `Dgdbsl` | Detailing Graphic Polyline Attribute Drawback start |
| `length` | Dgdbsd |
| `Drawback Start Diameter` | Dgdbet |
| `Detailing Graphic Symbol Attribute Drawback end type` | Dgdbea |
| `Detailing Graphic Polyline Attribute Drawback end` | angle |
| `Dgdbel` | Detailing Graphic Polyline Attribute Drawback end |
| `length` | Dgltse |
| `Detailing Graphic Line termination end` | Dgdbed |
| `Drawback End Diameter` | Dgtarc |
| `Detailing Graphic Arc Attribute Type of arc` | Dgpatt |
| `Detailing Graphic Line Pattern repeat factor` | Dgltvi |
| `Detailing Graphic Visible Line Type number` | Dgpvi |
| `Detailing Graphic Pen visible` | Dgradi |
| `List of radius` | Dtrtri |
| `Detailing Reference Tripod` | Dtgtri |
| `Detailing Creation Tripod` | Dtsize |
| `Detailing Model BLOB Size` | Dtedat |
| `Detailing Model Element Attributes` | Dtidat |
| `Detailing Model Attributes Integer part` | Dtrdat |
| `Detailing Model Attributes Real part` |  |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Graphic Arc Length Data Element (`DGARCL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Dgtxt` | Display Text |
| `Dgmtyp` | Detailing Graphic Angle Measure Type |
| `Dgcpop` | Detailing Graphics Arc Length Center Point Option |
| `Dganch` | Detailing Graphic Anchor Point Option |
| `Dgldop` | Detailing Graphics Leader Line Option |
| `Dgarlt` | Detailing Graphic Arc Length Dimension type |
| `Dgtxli` | Detailing Graphic Flag for the lift of the last decimal |
| `number` | Dgpvi |
| `Detailing Graphic Pen visible` | Dgltvi |
| `Detailing Graphic Visible Line Type number` | Dgpatt |
| `Detailing Graphic Line Pattern repeat factor` | Dtrtri |
| `Detailing Reference Tripod` | Dtgtri |
| `Detailing Creation Tripod` | Dtsize |
| `Detailing Model BLOB Size` | Dtedat |
| `Detailing Model Element Attributes` | Dtidat |
| `Detailing Model Attributes Integer part` | Dtrdat |
| `Detailing Model Attributes Real part` |  |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Graphic Elevation Data Element (`DGELEV`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Dgusof` | Detailing Graphic underscore offset |
| `Dglpia` | Detailing Graphic Line pitch absolute |
| `Dglpfl` | Detailing Graphic Line pitch first line |
| `Dgtxli` | Detailing Graphic Flag for the lift of the last decimal |
| `number` | Dgbast |
| `Triangle Base Line` | Dgelvt |
| `Elevation Value` | Dgcrty |
| `Detailing Graphic Attribute Creation Type` | Dgmtyp |
| `Detailing Graphic Angle Measure Type` | Dgmtxt |
| `Deatiling Graphics Measure Option Text` | Dghasl |
| `Detailing Graphic Elevation Attribute Has second line` | Dgslco |
| `Detailing Graphic Elevation Attribute Content of` | second line |
| `Dgllty` | Detailing Graphic Elevation Attribute Type of leader |
| `line values` | Dgdtdp |
| `Detailing Graphic Elevation Attribute Distance to` | dimension point |
| `Dgltvi` | Detailing Graphic Visible Line Type number |
| `Dgpatt` | Detailing Graphic Line Pattern repeat factor |
| `Dgpvi` | Detailing Graphic Pen visible |
| `Dgttom` | Detailing Graphic text position related to mark out |
| `point` | Dglvsd |
| `Level Symbol Docking` | Dglvst |
| `Level Symbol Type` | DGDTES |
| `Detailing Graphic Elevation Attribute Distance to` | elevation symbol |
| `Dgldfa` | Detailing Graphic Elevation Attribute Factor for line |
| `distance` | Dggad |
| `Detailing Graphic global angle direction` | Dgtplp |
| `Text Position on Level Point` | Dtrtri |
| `Detailing Reference Tripod` | Dtgtri |
| `Detailing Creation Tripod` | Dtsize |
| `Detailing Model BLOB Size` | Dtedat |
| `Detailing Model Element Attributes` | Dtidat |
| `Detailing Model Attributes Integer part` | Dtrdat |
| `Detailing Model Attributes Real part` |  |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Graphic Marker Data Element (`DGMARK`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |

**Legal Members:** None

Structural Detailing Element

### Detailing Graphic Measure Line Data Element (`DGML`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Dgmtyp` | Detailing Graphic Angle Measure Type |
| `Dgmbeg` | Detailing Dimensioning Origin |
| `Dgmora` | Detailing Dimensioning Start Orientation |
| `Dgmorb` | Detailing Dimensioning End Orientation |
| `Dgllin` | Detailing Graphic Multi-line Text Length |
| `Dgtxli` | Detailing Graphic Flag for the lift of the last decimal |
| `number` | Dgmtxt |
| `Deatiling Graphics Measure Option Text` | Dgorty |
| `Detailing Graphic Radius Dimension Orientation Type` | Dgoran |
| `Orientation Angle` | Dgmptd |
| `Detailing Graphic Minimum Point Distance` | Dgdlpo |
| `Detailing Graphic Radius Dimension Position on` | Dimension Line |
| `Dgmfmt` | Detailing Graphic Value Formatting Option |
| `Dgisea` | Automatic Placement |
| `Dgabre` | Detailing Graphic Measure Line Absolute relativ flag |
| `Dgldop` | Detailing Graphics Leader Line Option |
| `Dgdist` | Detailing Graphic Distance to Dimension Line |
| `Dgldty` | Detailing Graphic Leader Type |
| `Dgldle` | Detailing Graphic Leader Length |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Dtsize` | Detailing Model BLOB Size |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Graphic Measure Line Angle Data Element (`DGMLA`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Dgtxt` | Display Text |
| `Dgmtyp` | Detailing Graphic Angle Measure Type |
| `Dgmbeg` | Detailing Dimensioning Origin |
| `Dgmbas` | Detailing Dimensioning Base Point |
| `Dgmleg` | Detailing Dimensioning Leg End Point |
| `Dgtxli` | Detailing Graphic Flag for the lift of the last decimal |
| `number` | Dgpvi |
| `Detailing Graphic Pen visible` | Dgltvi |
| `Detailing Graphic Visible Line Type number` | Dgpatt |
| `Detailing Graphic Line Pattern repeat factor` | Dghllo |
| `Detailing Graphic Help Line Length Option` | Dghllv |
| `Detailing Graphic Help Line Length` | Dghlol |
| `Detailing Graphic Help Line Overlength` | Dgdolf |
| `Detailing Graphic Dimension Line Overlength (Front)` | Dgdolr |
| `Detailing Graphic Dimension Line Overlength (Rear)` | Dganch |
| `Detailing Graphic Anchor Point Option` | Dganpt |
| `Detailing Graphic Anchor Point Dx / Dy` | Dgdisl |
| `Detailing Graphic Distance to Dimension Line` | (longitudinal) |
| `Dgldty` | Detailing Graphic Leader Type |
| `Dgldan` | Detailing Graphic Leader Angle |
| `Dgldle` | Detailing Graphic Leader Length |
| `Dggonp` | Deatiling Graphics Gon Postfix |
| `Dgalti` | Deatiling Graphics Arc Length Title |
| `Dgalpr` | Deatiling Graphics Arc Length Prefix |
| `Dgalpo` | Deatiling Graphics Arc Length Postfix |
| `Dgaddm` | Detailing Graphic Additional Measure |
| `Dgaddt` | Detailing Graphic Additional Measure Type Options |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Dtsize` | Detailing Model BLOB Size |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Graphic Measure Line Triangle Data Element (`DGMLTR`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Dgllin` | Detailing Graphic Multi-line Text Length |
| `Dgpvi` | Detailing Graphic Pen visible |
| `Dgltvi` | Detailing Graphic Visible Line Type number |
| `Dgpatt` | Detailing Graphic Line Pattern repeat factor |
| `Dgmtrt` | Detailing Graphic Triangle Measure Line type |
| `Dgmtrl` | Detailing Graphic Triangle Measure Line length |
| `Dgmkdx` | Delta X |
| `Dgmkdy` | Delta Y |
| `Dgunit` | Detailing Graphics Units system |
| `Dgform` | Detailing Graphic Value Format |
| `Dgaccu` | Detailing Graphic Units Accuracy |
| `Dgtrdy` | Detailing Graphic Slope Triangle DY |
| `Dgslba` | Detailing Graphic Slope Base Value |
| `Dgorie` | Detailing Graphic Text Orientation |
| `Dgninv` | Detailing Graphic Number of invisible characters |
| `Dgmdis` | Detailing Graphic Distance to Dimension Point |
| `Dtsize` | Detailing Model BLOB Size |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Frtxta` | Free Text Attribute 1 |
| `Frtxtb` | Free Text Attribute 2 |
| `Dgmtxt` | Deatiling Graphics Measure Option Text |
| `Frtxtc` | Free Text Attribute 3 |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Graphic Polygon Data Element (`DGPOLY`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Dgpvi` | Detailing Graphic Pen visible |
| `Dgpiv` | Detailing Graphic Pen invisible |
| `Dgltvi` | Detailing Graphic Visible Line Type number |
| `Dgltiv` | Detailing Graphic Line Type invisible |
| `Dglclo` | Close Polyline |
| `Dgpaan` | Pattern Angle |
| `Dglfil` | Fill Polyline |
| `Dgptyp` | Detailing Graphic Polyline Attribute Polyline Type |
| `Dgcrty` | Detailing Graphic Attribute Creation Type |
| `DGrepr` | Detailing Graphic Symbol Attribute Representation |
| `Rule` | Dgorty |
| `Detailing Graphic Radius Dimension Orientation Type` | Dgoran |
| `Orientation Angle` | Dglen |
| `Detailing Graphic Polyline Attribute Length` | Dgexet |
| `Detailing Graphic Polyline Attribute Type of execution` | Dgwfrm |
| `Detailing Graphic Symbol Attribute Draw with frame` | Dgnosi |
| `Detailing Graphic Symbol Attribute Number of sides` | Dgiscl |
| `Detailing Graphic Symbol Attribute Is Closed` | Dgdltx |
| `Detailing Graphic Polyline Attribute Delta X` | Dgdlty |
| `Detailing Graphic Polyline Attribute Delta Y` | Dgfltv |
| `Detailing Graphic Line Pattern Number` | Dgpatt |
| `Detailing Graphic Line Pattern repeat factor` | Dgdbst |
| `Detailing Graphic Symbol Attribute Drawback start` | type |
| `Dgdbsa` | Detailing Graphic Polyline Attribute Drawback start |
| `angle` | Dgdbsl |
| `Detailing Graphic Polyline Attribute Drawback start` | length |
| `Dgdbsd` | Drawback Start Diameter |
| `Dgdbet` | Detailing Graphic Symbol Attribute Drawback end type |
| `Dgdbea` | Detailing Graphic Polyline Attribute Drawback end |
| `angle` | Dgdbel |
| `Detailing Graphic Polyline Attribute Drawback end` | length |
| `Dgdbed` | Drawback End Diameter |
| `Dgltse` | Detailing Graphic Line termination end |
| `Dgcrst` | Detailing Graphic Polyline Attribute Creation sub type |
| `Dgmode` | Detailing Graphic Polyline Attribute Mode |
| `Dgsidi` | Detailing Graphic Polyline Attribute Side displacement |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Dgshad` | Shading |
| `Dgfang` | Fill Angle Index |
| `Dgfdis` | Fill Distance Index |
| `Dgfpty` | Pattern Type |
| `Dgfpan` | Fill Pattern Angle |
| `Dgfpfa` | Fill Pattern Factor |
| `Dgwasi` | Wave Size |
| `Dgwnum` | Number of Waves |
| `Dtsize` | Detailing Model BLOB Size |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Graphic Radius Data Element (`DGRAD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Dgmtyp` | Detailing Graphic Angle Measure Type |
| `Dgllin` | Detailing Graphic Multi-line Text Length |
| `Dgrdt` | Detailing Graphic Radius dimension type |
| `Dgrdp` | Detailing Graphic Radius dimension position |
| `Dgcrad` | Detailing Graphic Circle Radius |
| `Dgtxli` | Detailing Graphic Flag for the lift of the last decimal |
| `number` | Dgltvi |
| `Detailing Graphic Visible Line Type number` | Dgpvi |
| `Detailing Graphic Pen visible` | Dgorty |
| `Detailing Graphic Radius Dimension Orientation Type` | Dgoran |
| `Orientation Angle` | Dgpick |
| `Detailing Graphic Pick Element` | Dganch |
| `Detailing Graphic Anchor Point Option` | Dgdolf |
| `Detailing Graphic Dimension Line Overlength (Front)` | Dgdolr |
| `Detailing Graphic Dimension Line Overlength (Rear)` | Dgdlpo |
| `Detailing Graphic Radius Dimension Position on` | Dimension Line |
| `Dgdist` | Detailing Graphic Distance to Dimension Line |
| `Dgdisl` | Detailing Graphic Distance to Dimension Line |
| `(longitudinal)` | Dghlpo |
| `Detailing Graphic Radius Dimension Position on Help` | Line |
| `Dghldi` | Detailing Graphic Distance to Help Line |
| `Dgdlol` | Detailing Graphic Distance Line Overlength |
| `Dgldty` | Detailing Graphic Leader Type |
| `Dgldan` | Detailing Graphic Leader Angle |
| `Dgldle` | Detailing Graphic Leader Length |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Dgpatt` | Detailing Graphic Line Pattern repeat factor |
| `Dgmtxt` | Deatiling Graphics Measure Option Text |
| `Dtsize` | Detailing Model BLOB Size |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Graphic Data Element (`DGRAPH`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |


### Detailing Model Phase Element (`DTPHSE`)
**Legal Members:** `DGARC`, `DGARCL`, `DGELEV`, `DGML`, `DGMLA`, `DGMLTR`, `DGRAD`, `DGPOLY`, `DGSSYM`, `DGTEXT`


### Detailing Graphic Weld Data Element (`DGWELD`)
Structural Detailing Element

### Detailing Graphic Symbol Data Element (`DGSSYM`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Dgltvi` | Detailing Graphic Visible Line Type number |
| `Dgpatt` | Detailing Graphic Line Pattern repeat factor |
| `Dgpvi` | Detailing Graphic Pen visible |
| `Dgones` | Detailing Graphic Symbol Attribute Text 1 selected |
| `Dgtwos` | Detailing Graphic Symbol Attribute Text 2 selected |
| `Dgonec` | Detailing Graphic Symbol Attribute Text 1 Content |
| `Dgtwoc` | Production Phase |
| `Dgcrty` | Detailing Graphic Attribute Creation Type |
| `Dgtxad` | Detailing Graphic Symbol Attribute Text Adjustment |
| `Dgform` | Detailing Graphic Value Format |
| `Diameter` | Diameter |
| `Dgsmh` | Detailing Graphic Sm_Sysm height |
| `Dgsmw` | Detailing Graphic Sm_Sysm width |
| `Dghlle` | Detailing Graphic Symbol Attribute Helpline Length |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Dtsize` | Detailing Model BLOB Size |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Graphic Text Data Element (`DGTEXT`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Purpose` | Description code word |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dttype` | Detailing model item type |
| `Dgtype` | Detailing Graphic Type |
| `Dgzart` | Detailing Graphic Drawing Type |
| `Dgsegt` | Detailing Graphic Segment Type |
| `Dgdbgn` | Detailing Graphic Group number |
| `Dgview` | Detailing Graphic View Number |
| `Dgebpa` | Detailing Graphic Flag Parallel Planes Only |
| `Dglayn` | Detailing Graphic Layer Number |
| `Dgdark` | Detailing Graphic Display Criteria |
| `Dgjoin` | Detailing parent element reference |
| `Dtpelm` | Reference to Parent element |
| `Dgjois` | Detailing child element reference |
| `Dtsrce` | Reference to Source Element |
| `Pntxy` | Detailing Graphics 2D Position |
| `Dggad` | Detailing Graphic global angle direction |
| `Dgtang` | Detailing Graphic text angle |
| `Dgtxan` | Detailing Graphic Text Anchor |
| `Dgtatb` | Detailing Graphic Text Attribute |
| `Dgpack` | Detailing Graphic Packed Word |
| `Dgllin` | Detailing Graphic Multi-line Text Length |
| `Dgmali` | Detailing Graphic mark line flag |
| `Dgmll` | Detailing Graphic Marker Line Length |
| `Dgpvi` | Detailing Graphic Pen visible |
| `Dgltvi` | Detailing Graphic Visible Line Type number |
| `Dgpatt` | Detailing Graphic Line Pattern repeat factor |
| `Dgltsb` | Detailing Graphic Line termination begin |
| `Dgltl` | Detailing Graphic Line termination length |
| `Dglta` | Detailing Graphic Line termination angle |
| `Dgwsca` | Z3 Window Scale |
| `Dglspa` | Line Spacing |
| `Dgnlin` | Number of Lines |
| `Dgolin` | Number of Lines above Marker |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Dgpxy` | Detailing Graphic 2D Points |
| `Dgpxyz` | Detailing Graphic 3D Points |
| `Frtxta` | Free Text Attribute 1 |
| `Frtxtb` | Free Text Attribute 2 |
| `Frtxtc` | Free Text Attribute 3 |
| `Frtxtd` | Free Text Attribute 4 |
| `Frtxte` | Free Text Attribute 5 |
| `Frtxtf` | Free Text Attribute 6 |
| `Frtxtg` | Free Text Attribute 7 |
| `Frtxth` | Free Text Attribute 8 |
| `Dtsize` | Detailing Model BLOB Size |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |


### Detailing Graphic Data Element (`DGRAPH`)
**Legal Members:** `ARCHIV`, `DGTXTU`


### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Textual Part of a Detailing Graphic Text Element Element (`DGTXTU`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Dgfont` | Detailing Graphic Font Number |
| `Dgtcol` | Detailing Graphic Text Color |
| `Dgfrme` | Detailing Graphic Text frame |
| `Dgbold` | Detailing Graphic Text Attribute Bold |
| `Dgital` | Detailing Graphic Text Attribute Italics |
| `Dgcent` | Detailing Graphic Flag Text centred |
| `Dghgth` | Detailing Graphic Text Height |
| `Dghwr` | Detailing Graphic Text Height-to-Width ratio |

**Legal Owners:** `DGARC`, `DGARCL`, `DGELEV`, `DGML`, `DGMLA`, `DGMLTR`, `DGRAD`


### Detailing Graphic Polygon Data Element (`DGPOLY`)

### Detailing Graphic Symbol Data Element (`DGSSYM`)

### Detailing Graphic Text Data Element (`DGTEXT`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Additional Material Element (`DTADDM`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTNAME` | Detailing Item Name |
| `Dtdesi` | Designation |
| `Dtgcnt` | Detailing Element Generated Count |
| `Dtmktx` | Mark Text |
| `Prfmat` | Detailing Item Profile Material |
| `Dtlen` | Detailing Element Length |
| `DTWGHT` | Weight |
| `Dtposn` | Detailing Element Item / Mark Number |
| `Dtarea` | Area |
| `Frtxta` | Free Text Attribute 1 |


### Detailing Model Phase Element (`DTPHSE`)

### Detailing Model Main Element Element (`DTMAIN`)

### Detailing Model Sub-Element Element (`DTSUBM`)

### Detailing Model Comment Element (`DTCMNT`)
Structural Detailing Element

### Detailing Model Address Element Element (`DTADRE`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Dtstre` | Detailing Model Street Address |
| `Dtpbox` | Detailing Model Address Post Box |
| `Dtcity` | Detailing Address City |
| `Dtzipc` | Detailing Model Address ZIP code |
| `Dtstte` | Detailing Address Element State |
| `Dtcnty` | Detailing Address Country |

**Legal Members:** None

Structural Detailing Element

### Detailing Model Assembly Element (`DTASMB`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Dtmktx` | Mark Text |
| `Dtdesi` | Designation |
| `DTNAME` | Detailing Item Name |
| `Frtxta` | Free Text Attribute 1 |
| `Frtxtb` | Free Text Attribute 2 |
| `Prfmat` | Detailing Item Profile Material |
| `Dtprin` | Initial Profile Type |
| `Frtxtc` | Free Text Attribute 3 |
| `Frtxtd` | Free Text Attribute 4 |
| `Frtxte` | Free Text Attribute 5 |
| `Dtmkin` | Initial Mark Number |
| `Dtrevi` | Revision Index |
| `Dtcola` | Primary Color |
| `Dtcolb` | External Color |
| `Dtmkpr` | Previous Mark Number |
| `Dtpref` | Mark Number Prefix |
| `Dtrevh` | Revision Index History |
| `Frtxtf` | Free Text Attribute 6 |
| `Frtxtg` | Free Text Attribute 7 |
| `Frtxth` | Free Text Attribute 8 |
| `Dtpelm` | Reference to Parent element |
| `Dtpstl` | Reference to Parent Element BOM item |
| `Dtshtr` | Reference to Shop Transformation element |
| `Dtorel` | Reference to Original Element |
| `DTRPAR` | Reference to replacement element |
| `Dtmpar` | Reference to original mirror element |
| `Dtspos` | Start number for marking |
| `Dtposn` | Detailing Element Item / Mark Number |
| `Dtopos` | Detailing Element Order Item Number |
| `Dttkmo` | Detailing Element Model ID |
| `Dtfunc` | Detailing Element Function Code |
| `Dtityp` | Detailing Element Internal Type Code |
| `Dtetyp` | Detailing Element External Type Code |
| `Dttcnt` | Detailing Element Total Count |
| `Dtgcnt` | Detailing Element Generated Count |
| `Dtlen` | Detailing Element Length |
| `Dtglen` | Detailing Element Generation Length |
| `Dtmmde` | Detailing Element Marking Status / Mode |
| `Dtmdst` | Modification Date |
| `Dtukst` | Documentation ID Date |
| `Dtmfst` | Manufacturing Status Date |
| `Dtsrce` | Reference to Source Element |
| `Dtgend` | Detailing Element Generation Date |
| `Dtmodd` | Detailing Element Modification Date |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |
| `Dtcnum` | Bocad Detailing Comment Number |
| `DTCORF` | Reference to Bocad Detailing Comment Container |
| `Relrfs` | References to DTRELA Elements |
| `Dtcoln` | Nested Drawing Reference |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |


### Detailing Model Phase Element (`DTPHSE`)

### Detailing Model Main Element Element (`DTMAIN`)

### Detailing Model Sub-Element Element (`DTSUBM`)
**Legal Members:** `DTCMNT`, `DTCSDF`, `DTGEOM`, `DTGINF`, `DTSHAP`, `DTSTEL`


### Detailing Model Structural Connection Element Element (`DTSTRC`)
Structural Detailing Element

### Detailing Bolt Definitions Element (`DTBLDS`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Detailing Model Bolt Library Element (`DTBLTL`)

### Detailing Model Bolt Master Data Element (`DTBLTD`)
Structural Detailing Element

### Detailing Bolt Sets Element (`DTBLSS`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Detailing Model Bolt Library Element (`DTBLTL`)

### Detailing Model Bolt Set Data Element (`DTBLTS`)
Structural Detailing Element

### Detailing Model Bolt Master Data Element (`DTBLTD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Chksum` | MD5 checksum |
| `Function` | Function |
| `Dttype` | Detailing model item type |
| `Boltyp` | Bolt Type Number |
| `Dtbnam` | Detailing Model Bolt Name |
| `DTBNDR` | Detailing Model Bolt Name for Drawings |
| `DTBNDB` | Detailing Model Bolt Name for Database |
| `Nomlen` | Nominal Bolt Shank Length |
| `Nomdia` | Nominal Bolt Shank Diameter |
| `DTUNIT` | Bolt Dimension Units |
| `DTPUNI` | Bolt Packing Unit |
| `DTWGHT` | Weight |
| `Dthdhe` | Bolt Header Height |
| `DTPROT` | Bolt Protrusion |
| `DTCLWA` | Bolting Washer Clearance |
| `Dtwsiz` | Bolt Header Wrench Size |
| `DTOHDD` | Outside Bolt Header Diameter |
| `Dtclho` | Bolt Hole Clearance |
| `Dttotl` | Total Bolt Length |
| `Dtadho` | Bolting: Additional hole type |
| `Dtdmat` | Clamp Length Calculation Flag |
| `Dtvidd` | Bolt always as 3D body |
| `Dtadpu` | Bolting Center Punch Type |
| `Dthoty` | Bolting Hole Type |
| `Dttape` | Tapered Washer Mode |
| `Dtscan` | Bolt Hole Investigation Flag |
| `Dtdlim` | Blind Hole Bolt |
| `Dtclip` | Clamping Length Calculation Mode |
| `Dtsmat` | Include Bolt Mounting Material |
| `Dtcsiv` | Countersunk Bolt |
| `Dtmtyp` | M3 Connection Type |
| `Dtmind` | Bolt Connection Processing Mode |
| `Dtautw` | Clamping Length Balancing Mode |
| `Dtclml` | Bolt Clamping Length (calculated) |
| `Dtvbky` | Bolt Fastener Table Key |
| `Dtclmi` | Bolt Clamping Length (minimum) |
| `DTCLMA` | Bolt Clamping Length (maximum) |
| `Stdtxt` | Standard |
| `Stdnum` | Standard Number |
| `Dtgrade` | Detailing Material Grade |
| `Dtcshd` | Sink Hole Dimension Head |
| `Dtcsnu` | Sink Hole Dimension Nut |
| `Dtcsda` | Sink Hole Diameter 1 |
| `Dtcsdb` | Sink Hole Diameter 2 |
| `Dtcsdc` | Sink Hole Diameter 3 |
| `Dtcsag` | Sink Hole Angle |
| `Dtgnif` | Bolt Hole Orientation Mode |


### Detailing Bolt Definitions Element (`DTBLDS`)

### Detailing Model Bolt Library Element (`DTBLTL`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Bolt Library Element (`DTBLTL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Detailing Job Data Element (`DTJDAT`)
**Legal Members:** `DTBLDS`, `DTBLSS`, `DTBLTD`, `DTBLTS`


### Detailing Model Bolt Set Part Element (`DTBSPT`)
Structural Detailing Element

### Detailing Model Bolt Set Data Element (`DTBLTS`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Dttype` | Detailing model item type |
| `Chksum` | MD5 checksum |
| `DTSKEY` | Bolt Standard Key |
| `Stdtxt` | Standard |
| `Stdnum` | Standard Number |
| `DTBSET` | Bolt Set Composition |
| `DTPART` | Bolt Set Component References |


### Detailing Bolt Sets Element (`DTBLSS`)

### Detailing Model Bolt Library Element (`DTBLTL`)
Detailing Drawing Element (DTBMF) - Design - Structural Detailing
Structural Detailing Element

### Detailing Model Bolt Set Part Element (`DTBSPT`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |


### Detailing Drawing Folder Element (`DTBMFL`)
**Legal Members:** `ARCHIV`, `DTBMFD`, `DTBMFP`

Detailing Drawing Data Element (DTBMFD) - Design - Structural Detailing
Structural Detailing Element

### Detailing Drawing Revision Element (`DTBMRV`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |


### Detailing Drawing Element (`DTBMF`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |

**Legal Members:** `None`, `Detailing BMF Job Element (DTBMFJ) - Design - Structural Detailing`, `Structural Detailing Element`


### Detailing BMF World Element (`BMFWRL`)
Detailing Drawing Folder Element (DTBMFL) - Design - Structural Detailing
Structural Detailing Element

### Detailing Drawing Folder Element (`DTBMFL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |


### Detailing BMF Job Element (`DTBMFJ`)

### Detailing Drawing Folder Element (`DTBMFL`)
**Legal Members:** `DTBMF`

Detailing Drawing PDF Element (DTBMFP) - Design - Structural Detailing
Structural Detailing Element

### Detailing Drawing Folder Element (`DTBMFL`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |


### Detailing Drawing Element (`DTBMF`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `None` |  |

**Legal Members:** `ARCHIV`, `Detailing Drawing Revision Element (DTBMRV) - Design - Structural`, `Detailing`, `Structural Detailing Element`


### Detailing Drawing Element (`DTBMF`)
**Legal Members:** None

Structural Detailing Element

### Detailing Bolt Element Element (`DTBOLT`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Obstruction` | Obstruction level |
| `Dttype` | Detailing model item type |
| `Dttkmo` | Detailing Element Model ID |
| `Dtposn` | Detailing Element Item / Mark Number |
| `Dtmktx` | Mark Text |
| `Prstat` | Welding Element Production Status |
| `Dtmdst` | Modification Date |
| `Dtukst` | Documentation ID Date |
| `Dtmfst` | Manufacturing Status Date |
| `Fabric` | Shop or Site fabrication status |
| `AOFCEL` | Number of connected elements |
| `Dtaobv` | Number of bolting vectors |
| `Dtbdr` | Reference to a bolt definition element |
| `Dtbsr` | Reference to a bolt set definition element |
| `Relref` | Reference to DTRELA Element |
| `Dtprfl` | Detailing Model Relation Primary Flag |
| `Dtsecs` | Reference to parts in the relation |
| `Dtsefl` | Detailing Model Relation Secondaries Flags |
| `Dtpelm` | Reference to Parent element |
| `Dtpstl` | Reference to Parent Element BOM item |
| `Dtset` | Bolt Set Flag |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |
| `Dtcnum` | Bocad Detailing Comment Number |
| `DTCORF` | Reference to Bocad Detailing Comment Container |
| `DTFEAS` | References to Feature Values |
| `Dtsrce` | Reference to Source Element |
| `Dtcoln` | Nested Drawing Reference |

**Legal Owners:** `DTMAIN`, `DTPHSE`, `DTPLAT`


### Detailing Model Profile Element Element (`DTPROF`)

### Detailing Model Generic Structural Element Element (`DTSTEL`)

### Detailing Model Sub-Element Element (`DTSUBM`)
**Legal Members:** `DTCMNT`


### Detailing Model Geometry Data Element (`DTGEOM`)
Structural Detailing Element

### Detailing Model Bolt Set Part Element (`DTBSPT`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `DTNAME` | Detailing Item Name |
| `Stdtxt` | Standard |
| `Dtgrade` | Detailing Material Grade |
| `Dtsurf` | Detailing Surface Treatment |
| `DTWGHT` | Weight |
| `DTPTSQ` | Bolt Set Part Sequence Number |
| `DTPTCN` | Bolt Set Part Count |


### Detailing Model Bolt Library Element (`DTBLTL`)

### Detailing Model Bolt Set Data Element (`DTBLTS`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Comment Element (`DTCMNT`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `DBBLOB` | Database Binary Large Object |
| `CmntID` | Detailing Comment ID |
| `Chksum` | MD5 checksum |

**Legal Owners:** `BEVEL`, `DGARC`, `DGARCL`, `DGELEV`, `DGML`, `DGMLA`, `DGMLTR`, `DGPOLY`, `DGRAD`, `DGSSYM`, `DGSSYM`, `DTADDM`, `DTASMB`, `DTBOLT`, `DTHOLE`, `DTMAIN`, `DTPLAT`, `DTPROF`, `DTSEAM`, `DTSTEL`


### Detailing Model Structural Connection Element Element (`DTSTRC`)

### Detailing Model Structural Connection Element Element (`DTSTRC`)

### Detailing Model Weld Instance Element (`DTWELD`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Cut Section Definition Element (`DTCSDF`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Dttype` | Detailing model item type |
| `Dtsize` | Detailing Model BLOB Size |
| `DTNAME` | Detailing Item Name |
| `Dtmktx` | Mark Text |
| `Dtmkin` | Initial Mark Number |
| `Dtmkpr` | Previous Mark Number |
| `Dtpref` | Mark Number Prefix |
| `Dtpelm` | Reference to Parent element |
| `Dtpstl` | Reference to Parent Element BOM item |
| `Dtorel` | Reference to Original Element |
| `Dtshtr` | Reference to Shop Transformation element |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |
| `Dtcnum` | Bocad Detailing Comment Number |
| `DTCORF` | Reference to Bocad Detailing Comment Container |
| `Dtprfl` | Detailing Model Relation Primary Flag |
| `Dtsecs` | Reference to parts in the relation |
| `Dtsefl` | Detailing Model Relation Secondaries Flags |
| `Dtsrce` | Reference to Source Element |

**Legal Owners:** `DTASMB`, `DTMAIN`, `DTPHSE`


### Detailing Model Plate Element Element (`DTPLAT`)

### Detailing Model Profile Element Element (`DTPROF`)

### Detailing Model Generic Structural Element Element (`DTSTEL`)

### ARCHIV Element (`ARCHIV`)
Structural Detailing Element

### Detailing Model Customer Element Element (`DTCSTE`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTNAME` | Detailing Item Name |
| `Dtaddr` | Detailing Job Address |
| `Dtcntc` | Detailing Job Customer Contact Person |


### Detailing Job Data Element (`DTJDAT`)
**Legal Members:** None

Structural Detailing Element

### Detailing Fabrication Related Information Element (`DTFABI`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Dtnmod` | Detailing Fabrication Item / Quantity of modification |
| `on the geometry. Notches, Cuts, Cutoffs` | Dtnico |
| `Detailing Fabrication Item / Quantity of inner contours` | Dtnsho |
| `Detailing Fabrication Item / Quantity of slotted holes` | Dtnhol |
| `Detailing Fabrication Item / Quantity of holes` | Dtnmpo |
| `Detailing Fabrication Item / Quantity of marking points` | Dtnnot |
| `Detailing Fabrication Item / Quantity of notches` | Dtnben |
| `Detailing Fabrication Item / Quantity of bends` | Dtncha |
| `Detailing Fabrication Item / Quantity of chamfers` | Dtnsel |
| `Detailing Fabrication Item / Quantity of superelevation` | Dtnwwe |
| `Detailing Fabrication Item / Quantity of welds,` | workshop |
| `Dtnswe` | Detailing Fabrication Item / Quantity of welds, site |
| `Dtcuty` | Detailing Fabrication Item / Type of cut, 0 = no, 1 = |
| `standard cuts, 2 = cutouts-notch` | Dtanwl |
| `Detailing Fabrication Item / Angle of cut - Web/Left` | DTWLWB |
| `Detailing Fabrication Item / Partial cut/cutout - angle` | Web/Left/bottom |
| `Dtwlwt` | Detailing Fabrication Item / Partial cut/cutout - angle |
| `Web/Left/top` | Dtwlxb |
| `Detailing Fabrication Item / Partial cut/cutout - x value` | Web/Left/bottom |
| `DTWLXT` | Detailing Fabrication Item / Partial cut/cutout - x value |
| `Web/Left/top` | DTANWR |
| `Detailing Fabrication Item / Angle of cut - Web/Right` | Dtwrwb |
| `Detailing Fabrication Item / Partial cut/cutout - angle` | Web/Right/bottom |
| `Dtwrwt` | Detailing Fabrication Item / Partial cut/cutout - angle |
| `Web/Right/top` | Dtwrxb |
| `Detailing Fabrication Item / Partial cut/cutout - x value` | Web/Right/bottom |
| `Dtwrxt` | Detailing Fabrication Item / Partial cut/cutout - x value |
| `Web/Right/top` | Dtanfl |
| `Detailing Fabrication Item / Angle of cut - Flange/Left` | Dtflwb |
| `Detailing Fabrication Item / Partial cut/cutout - angle` | Flange/Left/bottom |
| `Dtflwt` | Detailing Fabrication Item / Partial cut/cutout - angle |
| `Flange/Left/top` | Dtflxb |
| `Detailing Fabrication Item / Partial cut/cutout - x value` | Flange/Left/bottom |
| `Dtflxt` | Detailing Fabrication Item / Partial cut/cutout - x value |
| `Flange/Left/top` | Dtanfr |
| `Detailing Fabrication Item / Angle of cut - Flange/Right` | Dtfrwb |
| `Detailing Fabrication Item / Partial cut/cutout - angle` | Flange/Right/bottom |
| `Dtfrwt` | Detailing Fabrication Item / Partial cut/cutout - angle |
| `Flange/Right/top` | Dtfrxb |
| `Detailing Fabrication Item / Partial cut/cutout - x value` | Flange/Right/bottom |
| `Dtfrxt` | Detailing Fabrication Item / Partial cut/cutout - x value |
| `Flange/Right/top` |  |


### Detailing Model Plate Element Element (`DTPLAT`)

### Detailing Model Profile Element Element (`DTPROF`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Fabrication CSG Element (`DTFCSG`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Dttype` | Detailing model item type |
| `Sequence` | Sequence Position in Member List |
| `DtPaSi` | Side of the part (start/end) the work is applied |
| `DTRESO` | Resolution used to create a polyline to display an edge |
| `of an element as a curve` | Dtcexl |
| `Length of the extrusion cut length` | Position |
| `Position` | Dtxvec |
| `Detailing View Volume X-Axis` | Dtyvec |
| `Detailing View Volume Y-Axis` | Dtgtri |
| `Detailing Creation Tripod` | Dtrtri |
| `Detailing Reference Tripod` | Dtptar |
| `Points: [0]=x ; [1]=y ; means max 500 points` |  |


### Detailing Model Plate Element Element (`DTPLAT`)

### Detailing Model Profile Element Element (`DTPROF`)

### Detailing Model Geometry Data Element (`DTGEOM`)
Structural Detailing Element

### Detailing Model Feature Definitions Element (`DTFDEF`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Detailing Job Data Element (`DTJDAT`)
**Legal Members:** `DTFEAT`, `DTFREF`


### Detailing Model Feature Set Element (`DTFSET`)
Structural Detailing Element

### Detailing Model Feature Element (`DTFEAT`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Feanam` | Detailing Feature Name |
| `Dtsize` | Detailing Model BLOB Size |
| `Nocopy` | Detailing Feature Copy Flag |


### Detailing Model Feature Definitions Element (`DTFDEF`)

### Detailing Model Feature Set Element (`DTFSET`)

### ARCHIV Element (`ARCHIV`)
Structural Detailing Element

### Detailing Model Feature Reference Element (`DTFREF`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Dtfeag` | Reference to a Feature Group/Set |
| `Dtfear` | Reference to a Feature |
| `Dtvali` | Detailing Feature Value Index |


### Detailing Model Feature Definitions Element (`DTFDEF`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Feature Set Element (`DTFSET`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Feasnm` | Detailing Feature Set Name |
| `Nocopy` | Detailing Feature Copy Flag |


### Detailing Model Feature Definitions Element (`DTFDEF`)

### Detailing Model Feature Element (`DTFEAT`)
Structural Detailing Element

### Detailing Model Geometry Data Element (`DTGEOM`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Dtgid` | Detailing Model geoemetry ident number |
| `Dttype` | Detailing model item type |
| `Dtsize` | Detailing Model BLOB Size |
| `Obstruction` | Obstruction level |

**Legal Owners:** `DTASMB`, `DTBOLT`, `DTFCSG`, `DTHOLE`, `DTPLAT`, `DTPROF`, `DTSTEL`, `DTSTRC`


### Detailing Model Weld Instance Element (`DTWELD`)

### Detailing Factory Standard Part Definition Element (`FSPDEF`)

### Detailing Factory Standard Part Instance Element (`FSPINS`)

### ARCHIV Element (`ARCHIV`)
Structural Detailing Element

### Detailing Model Geometry Information Element (`DTGINF`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Dtclas` | Bocad Detailing Element Class |
| `Dtgtyp` | Detailing Element Geometry Type Code |
| `Dtsize` | Detailing Model BLOB Size |

**Legal Owners:** `DTASMB`


### Detailing Model Plate Element Element (`DTPLAT`)

### Detailing Model Profile Element Element (`DTPROF`)

### Detailing Model Generic Structural Element Element (`DTSTEL`)

### ARCHIV Element (`ARCHIV`)
Structural Detailing Element

### Detailing Grid System Element (`DTGRID`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTNAME` | Detailing Item Name |
| `Description` | Description of the element |
| `GrdRef` | Grid reference |
| `CPHASE` | Reference to Construction Phase |
| `GRDNUM` | grid number |
| `GRDTYP` | grid type |
| `Grdac` | Detailing Model Grid Access Mode |
| `GPENV` | pen for visible lines |
| `GPENH` | pen for hidden lines |
| `GRDVIS` | visibility of the grid |
| `GENIX` | generation information for x direction |
| `GENIY` | generation information for y direction |
| `GENIZ` | generation information for z direction |


### Bocad Steel Detailing Job Element (`DTJOB`)
**Legal Members:** None

Structural Detailing Element

### Detailing Hole Element Element (`DTHOLE`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Obstruction` | Obstruction level |
| `Dttype` | Detailing model item type |
| `Dttkmo` | Detailing Element Model ID |
| `Dtposn` | Detailing Element Item / Mark Number |
| `Dtmktx` | Mark Text |
| `Prstat` | Welding Element Production Status |
| `Dtmdst` | Modification Date |
| `Dtukst` | Documentation ID Date |
| `Dtmfst` | Manufacturing Status Date |
| `Fabric` | Shop or Site fabrication status |
| `AOFCEL` | Number of connected elements |
| `Dtaobv` | Number of bolting vectors |
| `Dtbdr` | Reference to a bolt definition element |
| `Dtbsr` | Reference to a bolt set definition element |
| `Relref` | Reference to DTRELA Element |
| `Dtprfl` | Detailing Model Relation Primary Flag |
| `Dtsecs` | Reference to parts in the relation |
| `Dtsefl` | Detailing Model Relation Secondaries Flags |
| `Dtpelm` | Reference to Parent element |
| `Dtpstl` | Reference to Parent Element BOM item |
| `Dtset` | Bolt Set Flag |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |
| `Dtcnum` | Bocad Detailing Comment Number |
| `DTCORF` | Reference to Bocad Detailing Comment Container |
| `DTFEAS` | References to Feature Values |
| `Dtsrce` | Reference to Source Element |
| `Dtcoln` | Nested Drawing Reference |

**Legal Owners:** `DTPHSE`, `DTMAIN`, `DTPLAT`


### Detailing Model Profile Element Element (`DTPROF`)

### Detailing Model Generic Structural Element Element (`DTSTEL`)

### Detailing Model Sub-Element Element (`DTSUBM`)
**Legal Members:** `DTCMNT`


### Detailing Model Geometry Data Element (`DTGEOM`)
Structural Detailing Element

### Detailing Job Data Element (`DTJDAT`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Bocad Steel Detailing Job Element (`DTJOB`)
**Legal Members:** `DTBLTL`, `DTCSTE`, `DTFDEF`, `DTLOCA`, `DTJREL`, `DTPERS`, `DTPLNE`, `DTTCON`, `DTTXTS`


### Detailing Model Welding Library Element (`DTWLDL`)
Structural Detailing Element

### Bocad Steel Detailing Job Element (`DTJOB`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dtvers` | Job Element Version Number |
| `Dtjnum` | Bocad Detailing Job Number / Name |
| `DTNAME` | Detailing Item Name |
| `Dtcust` | Detailing Job Customer |
| `Dtjdsc` | Detailing Job Description |
| `Dtjloc` | Detailing Job Location |
| `Dtpman` | Detailing Job Project Manager |
| `Dtsdte` | Detailing Start Date |
| `Dtddte` | Detailing Job Delivery Date |
| `Dtdtst` | Detailing Start Date |
| `Dtdten` | Detailing End Date |
| `Dtbcoa` | Detailing Base Coating |
| `Dtfcoa` | Detailing Final Coating |
| `Dtgalv` | Detailing Galvanization Type |
| `Dtscal` | Detailing Scalding |
| `Dtmat` | Fabrication Material |
| `Dtscst` | Detailing Job System Data / Customer |
| `Dtjrev` | Detailing Job Revision |
| `Dtbckd` | Detailing Job Backup Date |
| `Dtdbst` | Detailing Job Database State |
| `Dtfsiz` | Detailing Model Folder Sizes |
| `Dtfrea` | Bocad Detailing Free Attribute 1 |
| `Dtfreb` | Bocad Detailing Free Attribute 2 |
| `Dtfrec` | Bocad Detailing Free Attribute 3 |
| `Dtfred` | Bocad Detailing Free Attribute 4 |
| `Dtfree` | Bocad Detailing Free Attribute 5 |


### Detailing World Element (`DTWRLD`)
**Legal Members:** `DTGRID`, `DTJDAT`, `DTNODE`, `DTPHSE`, `DTSTRU`


### External Geometry Element (`XGEOMETRY`)
Structural Detailing Element

### Detailing Job Data Element (`DTJREL`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Detailing Job Data Element (`DTJDAT`)

### Detailing Model Relation Element Element (`DTRELA`)
Structural Detailing Element

### Detailing Model Location/Site Element Element (`DTLOCA`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTNAME` | Detailing Item Name |
| `Dtaddr` | Detailing Job Address |


### Detailing Job Data Element (`DTJDAT`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Main Element Element (`DTMAIN`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTNAME` | Detailing Item Name |
| `Description` | Description of the element |
| `Deselm` | References to Design Elements |
| `Dtstat` | Detailing Element Status |
| `Dtmktx` | Mark Text |
| `Dtmkin` | Initial Mark Number |
| `Dtrevi` | Revision Index |
| `Dtmkpr` | Previous Mark Number |
| `Dtpref` | Mark Number Prefix |
| `Dtrevh` | Revision Index History |
| `Dtorel` | Reference to Original Element |
| `DTRPAR` | Reference to replacement element |
| `Dtmpar` | Reference to original mirror element |
| `Dtspos` | Start number for marking |
| `Dtopos` | Detailing Element Order Item Number |
| `Dttcnt` | Detailing Element Total Count |
| `Dtlen` | Detailing Element Length |
| `Dtmmde` | Detailing Element Marking Status / Mode |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Dtlead` | Reference to Lead Part |
| `Dtuwgh` | User weight (ruberband method) |
| `Dtvolm` | Assembly volume |
| `Dtslen` | Saw Length |
| `Dtlgth` | Detailing Fabrication Element Length |
| `Dthgth` | Height |
| `Dtwdth` | Width |
| `Dtppo` | Primary painting 1 |
| `Dtppt` | Primary painting 2 |
| `Dtfpo` | Final painting 1 |
| `Dtfpt` | Final painting 2 |
| `Dtfunc` | Detailing Element Function Code |


### Detailing Model Phase Element (`DTPHSE`)
**Legal Members:** `DTADDM`, `DTASMB`, `DTBOLT`, `DTCMNT`, `DTCSDF`, `DTHOLE`, `DTPLAT`, `DTPNCH`, `DTPROF`, `DTSTEL`, `DTSTRC`, `DTSUBM`, `DTWELD`


### Detailing Factory Standard Part Instance Element (`FSPINS`)
Structural Detailing Element

### Detailing Model Node Element (`DTNODE`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Position` | Position |
| `Orientation` | Orientation |
| `Name` | Name of the element |
| `DTNAME` | Detailing Item Name |
| `DTMANA` | Macro Name |
| `Dtprim` | Reference to relation-carrying element |
| `Dtsecs` | Reference to parts in the relation |
| `DTPRTS` | References to auxiliary node elements |
| `Dtfunc` | Detailing Element Function Code |
| `Dtntyp` | Type Of Detailing Node |
| `Dtfrea` | Bocad Detailing Free Attribute 1 |
| `Dtfreb` | Bocad Detailing Free Attribute 2 |
| `Dtfrec` | Bocad Detailing Free Attribute 3 |


### Bocad Steel Detailing Job Element (`DTJOB`)

### Detailing Model Phase Element (`DTPHSE`)

### Detailing Model Structure Element (`DTSTRU`)

### Design Dataset Element (`DDSE`)
Structural Detailing Element

### Detailing Model Point Container Element (`DTPDEF`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Detailing Model Phase Element (`DTPHSE`)

### Detailing Model Point Element Element (`DTPOIN`)
Structural Detailing Element

### Detailing Model Person Element Element (`DTPERS`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTNAME` | Detailing Item Name |
| `Dtlphn` | Detailing Person Landline Phone number |
| `Dtmphn` | Detailing Person Mobile Phone number |
| `Dtfphn` | Detailing Person FAX Phone number |
| `Dtemal` | Detailing Person eMail Address |


### Detailing Job Data Element (`DTJDAT`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Phase Element (`DTPHSE`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Dtznum` | Bocad Detailing Zone Number |
| `DTNAME` | Detailing Item Name |
| `Dtcnst` | Detailing Zone/Phase Designer |
| `Dtsdte` | Detailing Start Date |
| `Dtddte` | Detailing Job Delivery Date |
| `Dtdtst` | Detailing Start Date |
| `Dtdten` | Detailing End Date |
| `Dtbcoa` | Detailing Base Coating |
| `Dtfcoa` | Detailing Final Coating |
| `Dtgalv` | Detailing Galvanization Type |
| `Dtscal` | Detailing Scalding |
| `Dtmat` | Fabrication Material |
| `Dtfrea` | Bocad Detailing Free Attribute 1 |
| `Dtfreb` | Bocad Detailing Free Attribute 2 |
| `Dtfrec` | Bocad Detailing Free Attribute 3 |
| `Dtfred` | Bocad Detailing Free Attribute 4 |
| `Dtfree` | Bocad Detailing Free Attribute 5 |
| `Dtzpln` | Detailing Zone View Volume |
| `Dtzgrd` | Detailing Zone Primary Grid |


### Bocad Steel Detailing Job Element (`DTJOB`)

### Detailing Model Structure Element (`DTSTRU`)
**Legal Members:** `DGRAPH`, `DTADDM`, `DTASMB`, `DTBOLT`, `DTCSDF`, `DTHOLE`, `DTMAIN`, `DTNODE`, `DTPDEF`, `DTPLAT`, `DTPROF`, `DTSTEL`, `DTSTRC`, `DTWELD`


### Detailing Factory Standard Part Instance Element (`FSPINS`)
Structural Detailing Element

### Detailing Model Plate Element Element (`DTPLAT`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Dtclas` | Bocad Detailing Element Class |
| `Dttype` | Detailing model item type |
| `Obstruction` | Obstruction level |
| `Dtmktx` | Mark Text |
| `Dtdesi` | Designation |
| `DTNAME` | Detailing Item Name |
| `Frtxta` | Free Text Attribute 1 |
| `Frtxtb` | Free Text Attribute 2 |
| `Prfmat` | Detailing Item Profile Material |
| `Dtprin` | Initial Profile Type |
| `Frtxtc` | Free Text Attribute 3 |
| `Frtxtd` | Free Text Attribute 4 |
| `Frtxte` | Free Text Attribute 5 |
| `Dtmkin` | Initial Mark Number |
| `Dtrevi` | Revision Index |
| `Dtcola` | Primary Color |
| `Dtcolb` | External Color |
| `Dtmkpr` | Previous Mark Number |
| `Dtpref` | Mark Number Prefix |
| `Dtrevh` | Revision Index History |
| `Frtxtf` | Free Text Attribute 6 |
| `Frtxtg` | Free Text Attribute 7 |
| `Frtxth` | Free Text Attribute 8 |
| `Dtlpdo` | Reference to Original main part |
| `Dtlpdz` | References to Additional Part |
| `Dtpelm` | Reference to Parent element |
| `Dtpstl` | Reference to Parent Element BOM item |
| `Dtorel` | Reference to Original Element |
| `Dtshtr` | Reference to Shop Transformation element |
| `Dtmdst` | Modification Date |
| `Dtulke` | Detailing Element Documentation ID |
| `Dtukst` | Documentation ID Date |
| `Dtmfke` | Detailing Element Manufacturing ID |
| `Dtmfst` | Manufacturing Status Date |
| `Dtrfpa` | Detailing Element Ref. Information 1 |
| `Dtrfpb` | Detailing Element Ref. Information 2 |
| `Dttkmo` | Detailing Element Model ID |
| `Dtfunc` | Detailing Element Function Code |
| `Dtityp` | Detailing Element Internal Type Code |
| `Dtetyp` | Detailing Element External Type Code |
| `Dtposn` | Detailing Element Item / Mark Number |
| `Dtopos` | Detailing Element Order Item Number |
| `Dttcnt` | Detailing Element Total Count |
| `Dtdinn` | Detailing Element DIN Number |
| `Dtgcnt` | Detailing Element Generated Count |
| `Dtlen` | Detailing Element Length |
| `Dtglen` | Detailing Element Generation Length |
| `Dtgend` | Detailing Element Generation Date |
| `Dtmodd` | Detailing Element Modification Date |
| `Dtspos` | Start number for marking |
| `Dtcoln` | Nested Drawing Reference |
| `Dtsnum` | Section number (cladding) |
| `Dttlnu` | Number of truck load |
| `DTRPAR` | Reference to replacement element |
| `Dtmpar` | Reference to original mirror element |
| `Dtsrce` | Reference to Source Element |
| `Catref` | Catalog reference |
| `Desele` | Reference to Design Object |
| `Dtheig` | Detailing Element Height |
| `Dtwidt` | Detailing Element Width |
| `Dtwthk` | Detailing Element Webbing Thickness |
| `Dtfthk` | Detailing Element Flange Thickness |
| `Dtrada` | Detailing Element Fillet Radius 1 |
| `Dtradb` | Detailing Element Fillet Radius 2 |
| `Dtrwhg` | Detailing Element Remaining Webbing Height |
| `Dtbdia` | Detailing Element Border Diameter |
| `Dtrooa` | Detailing Element Root Dimension 1 |
| `Dtroob` | Detailing Element Root Dimension 2 |
| `Dtrooc` | Detailing Element Root Dimension 3 |
| `Dtarea` | Area |
| `Dtrsuf` | Real Surface |
| `Dtpare` | Plane Area |
| `DTWGHT` | Weight |
| `Dtlnam` | Detailing Item Length after Marking |
| `Dtlnge` | Detailing Item generated Length |
| `Dtctln` | Detailing Item Cut Length |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |
| `Dtcogc` | Center of Gravity |
| `Dtrwgh` | REALWeight |
| `Dtcnum` | Bocad Detailing Comment Number |
| `DTCORF` | Reference to Bocad Detailing Comment Container |
| `Relrfs` | References to DTRELA Elements |
| `DTFEAS` | References to Feature Values |
| `Desparam` | Design parameters |

**Legal Owners:** `DTPHSE`


### Detailing Model Main Element Element (`DTMAIN`)

### Detailing Model Sub-Element Element (`DTSUBM`)

### Detailing Factory Standard Part Definition Element (`FSPDEF`)
**Legal Members:** `BEVEL`, `DDSE`, `DTBOLT`, `DTCMNT`, `DTCSDF`, `DTFABI`, `DTFCSG`, `DTGEOM`, `DTGINF`, `DTHOLE`, `DTSHAP`, `DTSHPI`, `DTSTEL`, `DTSTRC`, `DTWELD`


### Loop Element (`LOOP`)
Structural Detailing Element

### Detailing Model Reference Plane Element (`DTPLNE`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTNAME` | Detailing Item Name |
| `PLTYPE` | Type of Grid Plane Definition |
| `GRDNUM` | Grid number |
| `Position` | Position |
| `Orientation` | Orientation |
| `Dtxvec` | Detailing View Volume X-Axis |
| `Dtyvec` | Detailing View Volume Y-Axis |
| `Dtzvec` | Detailing View Volume Z-Axis |
| `Dtzpos` | Z Offset of the view plane |


### Detailing Job Data Element (`DTJDAT`)
**Legal Members:** None

Structural Detailing Element

### Detailing Punch Element Element (`DTPNCH`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Dtsrce` | Reference to Source Element |
| `Dtcoln` | Nested Drawing Reference |
| `Relref` | Reference to DTRELA Element |


### Detailing Model Main Element Element (`DTMAIN`)

### Detailing Model Sub-Element Element (`DTSUBM`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Point Element Element (`DTPOIN`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Position` | Position |
| `Orientation` | Orientation |
| `DTNAME` | Detailing Item Name |
| `DTPFAM` | Point Family |
| `DTADDT` | Additional Text Data |
| `Dtdvis` | Visible in base dimetry |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |


### Detailing Model Point Container Element (`DTPDEF`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Profile Element Element (`DTPROF`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Dtclas` | Bocad Detailing Element Class |
| `Dttype` | Detailing model item type |
| `Obstruction` | Obstruction level |
| `Dtmktx` | Mark Text |
| `Dtdesi` | Designation |
| `DTNAME` | Detailing Item Name |
| `Frtxta` | Free Text Attribute 1 |
| `Frtxtb` | Free Text Attribute 2 |
| `Prfmat` | Detailing Item Profile Material |
| `Dtprin` | Initial Profile Type |
| `Frtxtc` | Free Text Attribute 3 |
| `Frtxtd` | Free Text Attribute 4 |
| `Frtxte` | Free Text Attribute 5 |
| `Dtmkin` | Initial Mark Number |
| `Dtrevi` | Revision Index |
| `Dtcola` | Primary Color |
| `Dtcolb` | External Color |
| `Dtmkpr` | Previous Mark Number |
| `Dtpref` | Mark Number Prefix |
| `Dtrevh` | Revision Index History |
| `Frtxtf` | Free Text Attribute 6 |
| `Frtxtg` | Free Text Attribute 7 |
| `Frtxth` | Free Text Attribute 8 |
| `Dtpelm` | Reference to Parent element |
| `Dtpstl` | Reference to Parent Element BOM item |
| `Dtorel` | Reference to Original Element |
| `Dtshtr` | Reference to Shop Transformation element |
| `Dtmdst` | Modification Date |
| `Dtulke` | Detailing Element Documentation ID |
| `Dtukst` | Documentation ID Date |
| `Dtmfke` | Detailing Element Manufacturing ID |
| `Dtmfst` | Manufacturing Status Date |
| `Dtrfpa` | Detailing Element Ref. Information 1 |
| `Dtrfpb` | Detailing Element Ref. Information 2 |
| `Dttkmo` | Detailing Element Model ID |
| `Dtfunc` | Detailing Element Function Code |
| `Dtityp` | Detailing Element Internal Type Code |
| `Dtetyp` | Detailing Element External Type Code |
| `Dtposn` | Detailing Element Item / Mark Number |
| `Dtopos` | Detailing Element Order Item Number |
| `Dttcnt` | Detailing Element Total Count |
| `Dtdinn` | Detailing Element DIN Number |
| `Dtgcnt` | Detailing Element Generated Count |
| `Dtlen` | Detailing Element Length |
| `Dtglen` | Detailing Element Generation Length |
| `Dtgend` | Detailing Element Generation Date |
| `Dtmodd` | Detailing Element Modification Date |
| `Dtspos` | Start number for marking |
| `Dtcoln` | Nested Drawing Reference |
| `Dtsnum` | Section number (cladding) |
| `Dttlnu` | Number of truck load |
| `DTRPAR` | Reference to replacement element |
| `Dtmpar` | Reference to original mirror element |
| `Dtsrce` | Reference to Source Element |
| `Catref` | Catalog reference |
| `Desele` | Reference to Design Object |
| `Dtheig` | Detailing Element Height |
| `Dtwidt` | Detailing Element Width |
| `Dtwthk` | Detailing Element Webbing Thickness |
| `Dtfthk` | Detailing Element Flange Thickness |
| `Dtrada` | Detailing Element Fillet Radius 1 |
| `Dtradb` | Detailing Element Fillet Radius 2 |
| `Dtrwhg` | Detailing Element Remaining Webbing Height |
| `Dtbdia` | Detailing Element Border Diameter |
| `Dtrooa` | Detailing Element Root Dimension 1 |
| `Dtroob` | Detailing Element Root Dimension 2 |
| `Dtrooc` | Detailing Element Root Dimension 3 |
| `Dtarea` | Area |
| `Dtrsuf` | Real Surface |
| `Dtpare` | Plane Area |
| `DTWGHT` | Weight |
| `Dtlnam` | Detailing Item Length after Marking |
| `Dtlnge` | Detailing Item generated Length |
| `Dtctln` | Detailing Item Cut Length |
| `Dtrtri` | Detailing Reference Tripod |
| `Dtgtri` | Detailing Creation Tripod |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |
| `Dtcogc` | Center of Gravity |
| `Dtrwgh` | REALWeight |
| `Dtcnum` | Bocad Detailing Comment Number |
| `DTCORF` | Reference to Bocad Detailing Comment Container |
| `Relrfs` | References to DTRELA Elements |
| `DTFEAS` | References to Feature Values |
| `Desparam` | Design parameters |

**Legal Owners:** `DTPHSE`


### Detailing Model Main Element Element (`DTMAIN`)

### Detailing Model Sub-Element Element (`DTSUBM`)

### Detailing Factory Standard Part Definition Element (`FSPDEF`)
**Legal Members:** `DDSE`, `DTBOLT`, `DTCMNT`, `DTCSDF`, `DTFABI`, `DTFCSG`, `DTGEOM`, `DTGINF`, `DTHOLE`, `DTSEAM`, `DTSHAP`, `DTSHPI`, `DTSTEL`, `DTSTRC`, `DTWELD`


### Loop Element (`LOOP`)
Structural Detailing Element

### Detailing Model Relation Element Element (`DTRELA`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Dtreas` | Reference to element creating the relation |
| `Dtprim` | Reference to relation-carrying element |
| `Dtprfl` | Detailing Model Relation Primary Flag |
| `Dtsecs` | Reference to parts in the relation |
| `Dtsefl` | Detailing Model Relation Secondaries Flags |


### Detailing Job Data Element (`DTJREL`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Seamline Element Element (`DTSEAM`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `DtNSec` | Number of Seamline Sections |
| `DtInAx` | Seamline in Axis Direction |
| `DtAngZ` | Angle to Zero Line |


### Detailing Model Profile Element Element (`DTPROF`)
**Legal Members:** `DTCMNT`


### Detailing Model Seamline Section Element Element (`DTSSEC`)
Structural Detailing Element

### Detailing Model Shape Data Element (`DTSHAP`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Dtstyp` | Detailing Element Shape Type Code |
| `Dtsize` | Detailing Model BLOB Size |

**Legal Owners:** `DTASMB`


### Detailing Model Plate Element Element (`DTPLAT`)

### Detailing Model Profile Element Element (`DTPROF`)

### Detailing Model Generic Structural Element Element (`DTSTEL`)

### ARCHIV Element (`ARCHIV`)
Structural Detailing Element

### Detailing Shipping Related Information Element (`DTSHPI`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Dtuwgh` | User weight (ruberband method) |
| `Dtruwg` | Rough Weight |
| `Dtrusf` | Rough Surface |
| `Dtuare` | Rubber Band Area |
| `Dtenva` | Enveloping Area |
| `Dtvolm` | Assembly volume |
| `Dtvolf` | Volume3D M |
| `Dtvolr` | Volume3D R |
| `Dtslen` | Saw Length |
| `Dtlgth` | Detailing Fabrication Element Length |
| `Dthgth` | Height |
| `Dtwdth` | Width |
| `Dtgcog` | Gross Center of Gravity |
| `Dtppo` | Primary painting 1 |
| `Dtppt` | Primary painting 2 |
| `Dtfpo` | Final painting 1 |
| `Dtfpt` | Final painting 2 |


### Detailing Model Plate Element Element (`DTPLAT`)

### Detailing Model Profile Element Element (`DTPROF`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Seamline Section Element Element (`DTSSEC`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `DtSecN` | Seamline Section Number |
| `DtNSea` | Number of Seam Angles |
| `DtDisA` | Section Distance 1 |
| `DtDisB` | Section Distance 2 |
| `Dtrada` | Detailing Element Fillet Radius 1 |
| `Dtradb` | Detailing Element Fillet Radius 2 |
| `DtSAng` | Seamline Section Angles |


### Detailing Model Seamline Element Element (`DTSEAM`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Generic Structural Element Element (`DTSTEL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Dtclas` | Bocad Detailing Element Class |
| `Dttype` | Detailing model item type |
| `Dtmktx` | Mark Text |
| `Dtdesi` | Designation |
| `DTNAME` | Detailing Item Name |
| `Frtxta` | Free Text Attribute 1 |
| `Frtxtb` | Free Text Attribute 2 |
| `Prfmat` | Detailing Item Profile Material |
| `Dtprin` | Initial Profile Type |
| `Frtxtc` | Free Text Attribute 3 |
| `Frtxtd` | Free Text Attribute 4 |
| `Frtxte` | Free Text Attribute 5 |
| `Dtmkin` | Initial Mark Number |
| `Dtrevi` | Revision Index |
| `Dtcola` | Primary Color |
| `Dtcolb` | External Color |
| `Dtmkpr` | Previous Mark Number |
| `Dtpref` | Mark Number Prefix |
| `Dtrevh` | Revision Index History |
| `Frtxtf` | Free Text Attribute 6 |
| `Frtxtg` | Free Text Attribute 7 |
| `Frtxth` | Free Text Attribute 8 |
| `Dtpelm` | Reference to Parent element |
| `Dtpstl` | Reference to Parent Element BOM item |
| `Dtorel` | Reference to Original Element |
| `Dtshtr` | Reference to Shop Transformation element |
| `Catref` | Catalog reference |
| `Desele` | Reference to Design Object |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |
| `Dtcnum` | Bocad Detailing Comment Number |
| `DTCORF` | Reference to Bocad Detailing Comment Container |
| `Relref` | Reference to DTRELA Element |
| `Relrfs` | References to DTRELA Elements |
| `Dtprfl` | Detailing Model Relation Primary Flag |
| `Dtsecs` | Reference to parts in the relation |
| `Dtsefl` | Detailing Model Relation Secondaries Flags |
| `Dtsrce` | Reference to Source Element |
| `Dtcoln` | Nested Drawing Reference |

**Legal Owners:** `DTASMB`, `DTMAIN`, `DTPHSE`, `DTPLAT`


### Detailing Model Profile Element Element (`DTPROF`)

### Detailing Model Generic Structural Element Element (`DTSTEL`)

### Detailing Model Sub-Element Element (`DTSUBM`)
**Legal Members:** `DTBOLT`, `DTCMNT`, `DTCSDF`, `DTGEOM`, `DTGINF`, `DTHOLE`, `DTSHAP`, `DTSTEL`, `DTSTRC`


### Detailing Model Weld Instance Element (`DTWELD`)
Structural Detailing Element

### Detailing Model Structural Connection Element Element (`DTSTRC`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Dttype` | Detailing model item type |
| `Dtpelm` | Reference to Parent element |
| `Relref` | Reference to DTRELA Element |
| `Dtprfl` | Detailing Model Relation Primary Flag |
| `Dtsecs` | Reference to parts in the relation |
| `Dtsefl` | Detailing Model Relation Secondaries Flags |
| `Dtmdst` | Modification Date |
| `Dtfunc` | Detailing Element Function Code |
| `Dttkmo` | Detailing Element Model ID |
| `Fabric` | Shop or Site fabrication status |
| `AOFCEL` | Number of connected elements |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |
| `Dtcnum` | Bocad Detailing Comment Number |
| `DTCORF` | Reference to Bocad Detailing Comment Container |
| `DTFEAS` | References to Feature Values |
| `Dtsrce` | Reference to Source Element |
| `Dtcoln` | Nested Drawing Reference |

**Legal Owners:** `DTASMB`, `DTMAIN`, `DTPHSE`, `DTPLAT`


### Detailing Model Profile Element Element (`DTPROF`)

### Detailing Model Generic Structural Element Element (`DTSTEL`)

### Detailing Model Sub-Element Element (`DTSUBM`)
**Legal Members:** `DTCMNT`


### Detailing Model Geometry Data Element (`DTGEOM`)
Structural Detailing Element

### Detailing Model Structure Element (`DTSTRU`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTNAME` | Detailing Item Name |
| `Dtcnst` | Detailing Zone/Phase Designer |
| `Dtsdte` | Detailing Start Date |
| `Dtddte` | Detailing Job Delivery Date |
| `Dtdtst` | Detailing Start Date |
| `Dtdten` | Detailing End Date |
| `Dtbcoa` | Detailing Base Coating |
| `Dtfcoa` | Detailing Final Coating |
| `Dtgalv` | Detailing Galvanization Type |
| `Dtscal` | Detailing Scalding |
| `Dtmat` | Fabrication Material |
| `Dtfrea` | Bocad Detailing Free Attribute 1 |
| `Dtfreb` | Bocad Detailing Free Attribute 2 |
| `Dtfrec` | Bocad Detailing Free Attribute 3 |
| `Dtfred` | Bocad Detailing Free Attribute 4 |
| `Dtfree` | Bocad Detailing Free Attribute 5 |
| `Dtzpln` | Detailing Zone View Volume |
| `Dtzgrd` | Detailing Zone Primary Grid |


### Bocad Steel Detailing Job Element (`DTJOB`)
**Legal Members:** `DTNODE`


### Detailing Model Phase Element (`DTPHSE`)
Structural Detailing Element

### Detailing Model Sub-Element Element (`DTSUBM`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Deselm` | References to Design Elements |


### Detailing Model Main Element Element (`DTMAIN`)

### Detailing Model Sub-Element Element (`DTSUBM`)
**Legal Members:** `DTADDM`, `DTASMB`, `DTBOLT`, `DTCMNT`, `DTHOLE`, `DTPLAT`, `DTPNCH`, `DTPROF`, `DTSTEL`, `DTSUBM`, `DTSTRC`, `DTWELD`


### Detailing Factory Standard Part Instance Element (`FSPINS`)
Structural Detailing Element

### Detailing Model Comment Text Container Element (`DTTCON`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTCKEY` | Bocad Detailing Comment Key |
| `DTTXRF` | Bocad Detailing Text Reference |


### Detailing Job Data Element (`DTJDAT`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Text Data Bundle Element (`DTTXTS`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `DTTXNX` | Fabrication model element text sequence number |
| `Txtval` | Detailing Element Text Value |


### Detailing Job Data Element (`DTJDAT`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Weld Instance Element (`DTWELD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Obstruction` | Obstruction level |
| `Position` | Position |
| `Dttkmo` | Detailing Element Model ID |
| `Dtwldr` | Reference to a weld definition element |
| `Dtposn` | Detailing Element Item / Mark Number |
| `Dtmktx` | Mark Text |
| `Dtmdst` | Modification Date |
| `Dtukst` | Documentation ID Date |
| `Dtmfst` | Manufacturing Status Date |
| `Prstat` | Welding Element Production Status |
| `Fabric` | Shop or Site fabrication status |
| `AOFCEL` | Number of connected elements |
| `Wclos` | Closure weld |
| `Wgold` | Golden Weld |
| `Wldndt` | Welding NDT (Non-Destructive Testing) |
| `Wndtn` | Welding NDT type name |
| `Wncat` | Welding NDT Category name |
| `Wnproc` | Welding NDT process name |
| `Wndtp` | Welding NDT percentage |
| `Wuniq` | Welding Element Unique Flag |
| `WGROUP` | Weld Grouping Option |
| `Wlen` | Weld length |
| `DEFLEN` | Fixed length of the weld |
| `Relref` | Reference to DTRELA Element |
| `Dtprfl` | Detailing Model Relation Primary Flag |
| `Dtsecs` | Reference to parts in the relation |
| `Dtsefl` | Detailing Model Relation Secondaries Flags |
| `Dtpelm` | Reference to Parent element |
| `Dtpstl` | Reference to Parent Element BOM item |
| `Wpost` | Weld mark text |
| `Wcmnt` | Weld Comment |
| `Wexptx` | Welding Fish Tail: Explanation text |
| `Wfista` | Welding Fish tail: Additional Text 1 |
| `Wfistb` | Welding Fish tail: Additional Text 2 |
| `Wfistc` | Welding Fish tail: Additional Text 3 |
| `Wftxa` | Welding Free text 1 |
| `Wftxb` | Welding Free text 2 |
| `Wftxc` | Welding Free text 3 |
| `Wftxd` | Welding Free text 4 |
| `WFRDBL` | Detailing Weld Free Doubles |
| `Dtedat` | Detailing Model Element Attributes |
| `Dtidat` | Detailing Model Attributes Integer part |
| `Dtrdat` | Detailing Model Attributes Real part |
| `Dttdat` | Bocad Detailing Element Text |
| `Dtcnum` | Bocad Detailing Comment Number |
| `DTCORF` | Reference to Bocad Detailing Comment Container |
| `DTFEAS` | References to Feature Values |
| `Seampy` | Weld Seam Y Orientation |
| `Seampz` | Weld Seam Z Orientation |
| `Dtsrce` | Reference to Source Element |
| `Dtcoln` | Nested Drawing Reference |

**Legal Owners:** `DTMAIN`, `DTPHSE`, `DTPLAT`


### Detailing Model Profile Element Element (`DTPROF`)

### Detailing Model Generic Structural Element Element (`DTSTEL`)

### Detailing Model Sub-Element Element (`DTSUBM`)
**Legal Members:** `DTCMNT`


### Detailing Model Geometry Data Element (`DTGEOM`)
Structural Detailing Element

### Detailing Model Welding Master Data Element (`DTWLDD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Chksum` | MD5 checksum |
| `Dttype` | Detailing model item type |
| `Wldtyp` | Welding Element Type Number |
| `Stdtxt` | Standard |
| `Stdnum` | Standard Number |
| `Wldrnd` | Flag weld all round |
| `WLDINF` | Welding information |
| `Dtsaas` | Detailing weld throat depth (arrow side) |
| `Wldeas` | Weld thickness (arrow side) |
| `Wldzas` | Weld leg length (arrow side) |
| `Wldlas` | Weld segment length (arrow side) |
| `Wssas` | Weld penetration depth (arrow side) |
| `Wldsas` | Weld chamfer depth (arrow side) |
| `Wldras` | Weld chamfer Gap (arrow side) |
| `Wldaas` | Weld chamfer angle arrow side |
| `Wpdas` | Weld segment distance (arrow side) |
| `Wldvas` | Weld segment offset (arrow side) |
| `Wldcas` | Weld width (arrow side) |
| `Wlddas` | Weld Diameter (arrow side) |
| `Wldnas` | Number of weld segments (arrow side) |
| `Wldfas` | Welding Finish (arrow side) |
| `Wldbas` | Weld Backing (arrow side) |
| `Wldhas` | Welding Spacer (arrow side) |
| `Wldtas` | Weld process number (arrow side) |
| `Wccas` | Welding constant contour (arrow side) |
| `Wimas` | Intermittent weld (arrow side) |
| `Wgnas` | Welding symbol ID (arrow side) |
| `Wvtas` | Weld type (arrow side) |
| `Wnamas` | Weld Name (arrow side) |
| `Dtsaos` | Detailing weld throat depth other side |
| `Wldeos` | Weld thickness (other side) |
| `Wldzos` | Weld leg length (other side) |
| `Wldlos` | Weld segment length (other side) |
| `Wssos` | Weld penetration depth (other side) |
| `Wldsos` | Weld chamfer depth (other side) |
| `Wldros` | Weld chamfer Gap (other side) |
| `Wldaos` | Weld chamfer angle (other side) |
| `Wpdos` | Weld segment distance (other side) |
| `Wldvos` | Weld segment Offset (other side) |
| `Wldcos` | Weld width (other side) |
| `Wlddos` | Weld diameter (other side) |
| `Wldnos` | Number of weld segments (other side) |
| `Wldfos` | Welding Finish (other side) |
| `Wldbos` | Weld Backing (other side) |
| `Wldhos` | Welding Spacer (other side) |
| `Wldtos` | Weld process number (other side) |
| `Wccos` | Welding constant contour (other side) |
| `Wimos` | Intermittent weld (other side) |
| `Wgnos` | Welding symbol ID (other side) |
| `Wvtos` | Weld type (other side) |
| `Wnamos` | Weld Name (other side) |
| `Wldthy` | Weld material thickness (Y direction) |
| `Wldthz` | Weld material thickness (Z direction) |
| `Wisym` | Welding Process symbol number |
| `Wchar` | Detailing Weld Characteristic |
| `Wcom` | Weld comment |
| `Wnam` | Weld name |
| `Wproc` | Welding process |
| `WsProc` | Welding standard process |
| `WtProc` | Welding test procedure |
| `Windas` | Welding Index (Arrow Side) |
| `Windos` | Welding Index (Other Side) |
| `Wlegtx` | Welding legend text |


### Detailing Model Welding Library Element (`DTWLDL`)
**Legal Members:** None

Structural Detailing Element

### Detailing Model Welding Library Element (`DTWLDL`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Detailing Job Data Element (`DTJDAT`)

### Detailing Model Welding Master Data Element (`DTWLDD`)
Structural Detailing Element

### Detailing World Element (`DTWRLD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)

### Bocad Steel Detailing Job Element (`DTJOB`)
Structural Detailing Element

### Detailing Factory Standard Part Definition Element (`FSPDEF`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Cengra` | Factory Standard Part Center of Gravity |
| `DTWGHT` | Weight |
| `Dtheig` | Detailing Element Height |
| `Dtwidt` | Detailing Element Width |
| `Dtrlen` | Factory Standard Part Length |
| `Fsptxt` | Factory Standard Part Text |
| `Fspmnu` | Factory Standard Part Mark Number |
| `Dtrtri` | Detailing Reference Tripod |


### Standard Parts World Element (`FSPWRL`)
**Legal Members:** `DTGEOM`, `DTPLAT`


### Detailing Model Profile Element Element (`DTPROF`)
Structural Detailing Element

### Detailing Factory Standard Part Instance Element (`FSPINS`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Fspref` | Reference to Factory Standard Part element |
| `Relrfs` | References to DTRELA Elements |
| `Fsptxt` | Factory Standard Part Text |
| `Dtrtri` | Detailing Reference Tripod |


### Detailing Model Main Element Element (`DTMAIN`)

### Detailing Model Phase Element (`DTPHSE`)

### Detailing Model Structural Connection Element Element (`DTSTRC`)

### Detailing Model Geometry Data Element (`DTGEOM`)
Structural Detailing Element

### Standard Parts World Element (`FSPWRL`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### World Element (`WORLD`)

### Detailing Factory Standard Part Definition Element (`FSPDEF`)

## Elements in System Category

System Element

### System Group Area Element (`SYGPAR`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### System Group Area Element (`SYGPAR`)

### System Group World Element (`SYGPWL`)
**Legal Members:** `SYGPAR`


### System Group Element (`SYSGRP`)
System Element

### System Group World Element (`SYGPWL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### World Element (`WORLD`)

### System Group Area Element (`SYGPAR`)
System Element

### System Catalog Data Element (`SYSCDA`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Pspec` | Pipe specification |
| `Ispec` | Insulation spec reference |
| `Tspec` | Tracing spec reference |
| `Fluref` | Fluid reference |
| `Ptspec` | Paint specification |


### System Group Element (`SYSGRP`)
**Legal Members:** None

System Element

### System Group Element (`SYSGRP`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### System Group Element (`SYSGRP`)

### System Group Area Element (`SYGPAR`)
**Legal Members:** `SYSCDA`, `SYSGRP`


### System Dataset Element (`SYSMDA`)
System Element

### System Dataset Element (`SYSMDA`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### System Group Element (`SYSGRP`)

### Design Dataset Element (`DDSE`)

## Elements in Template Category

Template Element

### Application Data Area Element (`APPDAREA`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### Application Data Area Element (`APPDAREA`)

### Application Data World Element (`APPLDWORLD`)
**Legal Members:** `APPDAREA`


### Application Data Element (`APPLDATA`)
Template Element

### Application Data Element (`APPLDATA`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Gtype` | Generic type |
| `Ttype` | Template type |
| `Lcnfarray` | Array of elements with local names |


### Application Data Area Element (`APPDAREA`)
**Legal Members:** `DDSE`, `DPSET`, `ROOM`


### Zone Element (`ZONE`)
Template Element

### Application Data World Element (`APPLDWORLD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### World Element (`WORLD`)
**Legal Members:** `APPDAREA`


### Design Dataset Area Element (`DDAREA`)
Template Element

### Template Area Element (`TMAREA`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |
| `Daref` | Reference of associated dataset area |


### Template World Element (`TPWLD`)

### Template Element (`TMPLATE`)
Template Element

### Template Element (`TMPLATE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Gtype` | Generic type |
| `Number` | Number |
| `Usrweight` | User entered weight value |
| `Usrwweight` | User entered wet weight value |
| `Usrcogravity` | User center of gravity position |
| `Usrwcogravity` | User wet center of gravity position |
| `Uwmtxt` | User weight Manager text |
| `Position` | Position |
| `Orientation` | Orientation |
| `Ttype` | Template type |
| `Orrf` | Origin reference (for templates) |
| `Invfarray` | Array of Inventory Items |
| `Ddrfarray` | Array of default design datasets (for template) |
| `Lcnfarray` | Array of elements with local names |
| `Rseqarray` | Sequence numbers for rule execution |

**Legal Owners:** `BOTEXT`, `CAGSEG`, `CFLOOR`, `CLNTIL`, `CMFITTING`, `CMPFITTING`, `CSCREED`, `CTFEAT`, `CTJOIN`, `CTRAY`, `CWALL`, `DOOR`, `ELCONN`, `ELFITTING`, `EQUCOM`, `EQUIPMENT`, `FITTING`, `FIXING`, `FIXTUR`, `FLOOR`, `FPFITTING`, `FRMWORK`, `FURNIT`, `GENSEC`, `GWALL`, `HOOPSE`, `HRGATE`, `HRPANE`, `HRPOST`, `HRTERM`, `HVACFITTING`, `INFITTING`, `INTLNG`, `JNTBOX`, `LDRRUN`, `MFIX`, `NOZZLE`, `PANEL`, `PCOJOINT`, `PFITTING`, `PJOINT`, `PULLPIT`, `RAILSET`, `RLGATE`, `SBFITTING`, `SBFRAMEWORK`, `SCOJOINT`, `SCREED`, `SCTN`, `SJOINT`, `STRUCTURE`, `STWALL`, `SUBEQUIPMENT`, `SUBJOINT`, `SUBSTRUCTURE`, `TMAREA`, `TOPEXT`, `TREAD`


### Wall Element (`WALL`)

### Window Element (`WINDOW`)

### Wall Panel Element (`WLPANEL`)
**Legal Members:** `BOX`, `BPANEL`, `CONE`, `CTORUS`, `CYLINDER`, `DDSE`, `DISH`, `DPSET`, `DRAWING`, `ELCONN`, `EQUCOM`, `EXTRUSION`, `FLOOR`, `GENSEC`, `GWALL`, `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NOZZLE`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`, `NSNOUT`, `NXTRUSION`, `PANEL`, `PNODE`, `POHEDRON`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SCREED`, `SCTN`, `SLCYLINDER`, `SNOUT`, `STWALL`, `TEXT`, `TMRPSET`


### Wall Element (`WALL`)
Template Element

### Repeat Set Element (`TMRPSET`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Orrf` | Origin reference (for templates) |


### Template Element (`TMPLATE`)

### Rule Repeat Element (`TMRRELEMENT`)
Template Element

### Rule Repeat Element (`TMRRELEMENT`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Tmrrule` | Template Repeat Rule |
| `Tmrmaster` | Template Repeat Master Duplicate Element |
| `Tmrowner` | Template Repeat Owning Element |
| `Orrf` | Origin reference (for templates) |
| `OffType` | Offset type: DELTA, LINEAR, RADIAL |
| `DeltaEast` | Easterly Offset applied to repeat elements |
| `DeltaNorth` | Northerly Offset applied to repeat elements |
| `DeltaUp` | Vertical Offset applied to repeat elements |
| `Offdistance` | Offset distance applied to repeat elements |
| `Offdirection` | Offset direction applied to repeat |
| `DelAngle` | Angle applied to repeat elements |
| `AxiPosition` | Axis position applied to repeat |
| `Axidirection` | Axis direction applied to repeat |
| `Rorient` | True if repeat item is re-orientated upon rotation |
| `MaxRepeat` | Maximum number of Repeat items created |


### Repeat Set Element (`TMRPSET`)
**Legal Members:** None

Template Element

### Template World Element (`TPWLD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Number` | Number |


### World Element (`WORLD`)

### Design Dataset Area Element (`DDAREA`)

### Template Area Element (`TMAREA`)

## Elements in Terrain Category

Terrain Element

### Terrain Cell Collection Element (`TRNCC`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Terrain Model Element (`TRNMOD`)

### Terrain Cell Element (`TRNCEL`)
Terrain Element

### Terrain Cell Element (`TRNCEL`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Terrain Cell Collection Element (`TRNCC`)

### Curve Collection Within a Cell Element (`TRNCUC`)
Terrain Element

### Terrain Contour Line Collection Element (`TRNCLC`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Terrain Model Element (`TRNMOD`)

### Set of Contour Lines Element (`TRNCLS`)
Terrain Element

### Group of Contour Lines Element (`TRNCLG`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Elevation` | Elevation |


### Set of Contour Lines Element (`TRNCLS`)
**Legal Members:** None

Terrain Element

### Set of Contour Lines Element (`TRNCLS`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |


### Terrain Contour Line Collection Element (`TRNCLC`)

### Group of Contour Lines Element (`TRNCLG`)
Terrain Element

### Curve Collection Within a Cell Element (`TRNCUC`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Terrain Cell Element (`TRNCEL`)

### Curve Set Within a Cell Element (`TRNCUS`)
Terrain Element

### Terrain Curve Element (`TRNCURVE`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Clgref` | TRNCLG Reference |
| `Obstruction` | Obstruction level |


### Curve Set Within a Cell Element (`TRNCUS`)
**Legal Members:** None

Terrain Element

### Curve Set Within a Cell Element (`TRNCUS`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### Curve Collection Within a Cell Element (`TRNCUC`)

### Terrain Curve Element (`TRNCURVE`)
Terrain Element

### Terrain Definition Element (`TRNDEF`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `SurLnk` | Reference to a terrain surface |
| `Bothei` | Bottom height |


### Terrain Model World Element (`TRNWLD`)
**Legal Members:** `TRNPRI`, `TRNRR`


### Terrain Solid Primitive Holder Element (`TRNSLD`)
Terrain Element

### Terrain Model Element (`TRNMOD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Level` | Drawing level |
| `DefLnk` | Link to terrain definition |
| `GrdRef` | Grid reference |


### Conveyor Element (`CONVEYOR`)

### Site Element (`SITE`)

### Zone Element (`ZONE`)
**Legal Members:** `TRNCC`


### Terrain Contour Line Collection Element (`TRNCLC`)
Terrain Element

### Terrain Primitive Holder Element (`TRNPRI`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Tvol` | Terrain volume. |


### Terrain Definition Element (`TRNDEF`)
**Legal Members:** `BOX`, `CONE`, `CTORUS`, `CYLINDER`, `DISH`, `EXTRUSION`, `NBOX`, `NCONE`, `NCTORUS`, `NCYLINDER`, `NDISH`, `NPOLYHEDRON`, `NPYRAMID`, `NREVOLUTION`, `NRTORUS`, `NSLCYLINDER`, `NSNOUT`, `NXTRUSION`, `POHEDRON`, `POLYHEDRON`, `PYRAMID`, `REVOLUTION`, `RTORUS`, `SLCYLINDER`


### Snout Element (`SNOUT`)
Terrain Element

### Terrain Restriction Rectangle Element (`TRNRR`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Position` | Position |
| `Orientation` | Orientation |
| `Width` | Width |
| `Length` | Length |


### Terrain Definition Element (`TRNDEF`)
**Legal Members:** None

Terrain Element

### Terrain Solid Primitive Holder Element (`TRNSLD`)
**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Tnvol` | Terrain net volume |


### Terrain Definition Element (`TRNDEF`)
**Legal Members:** None

Terrain Element

### Terrain Surface Element (`TRNSUR`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |
| `Tdatum` | Definition of a specific point on earth |
| `NAngle` | North angle |


### Terrain Model World Element (`TRNWLD`)
**Legal Members:** None

Terrain Element

### Terrain Model World Element (`TRNWLD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Function` | Function |
| `Purpose` | Description code word |


### World Element (`WORLD`)

### Terrain Definition Element (`TRNDEF`)

### Terrain Surface Element (`TRNSUR`)

## Elements in Unclassified Category

Commenting Attachment Element (CMTATT) - Design - Unified
Primary Element
Attributes
Name
Name of the element
Description
Description of the element
CTHCTP
Commenting content type
CthAtp
Commenting attachment purpose
Legal Owners

### Commenting Post Element (`CMTPOS`)
Commenting Capture Element (CMTCAP) - Design - Unified

### ARCHIV Element (`ARCHIV`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CTHCTP` | Commenting content type |
| `CthAtp` | Commenting attachment purpose |
| `Mvmdrf` | Model view definition reference |


### Commenting Post Element (`CMTPOS`)

### ARCHIV Element (`ARCHIV`)
Commenting Folder Element (CMTFLD) - Design - Unified

### Commenting Attachment Preview Element (`CMTPRE`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Commenting Folder Element (`CMTFLD`)

### Commenting World Element (`CMTWLD`)

### Commenting Folder Element (`CMTFLD`)
Commenting Post Element (CMTPOS) - Design - Unified

### Commenting Thread Element (`CMTTHR`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CthText` | Commenting text |
| `StaUser` | Standard User |
| `StaDate` | Standard Date |


### Commenting Thread Element (`CMTTHR`)

### Commenting Attachment Element (`CMTATT`)
Commenting Attachment Preview Element (CMTPRE) - Design - Unified

### Commenting Capture Element (`CMTCAP`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `CTHCTP` | Commenting content type |
| `CthAtp` | Commenting attachment purpose |


### Commenting Capture Element (`CMTCAP`)
Commenting Thread Element (CMTTHR) - Design - Unified

### ARCHIV Element (`ARCHIV`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `StaUser` | Standard User |
| `StaDate` | Standard Date |
| `CthAtp` | Commenting attachment purpose |
| `CthState` | Commenting thread state (Open/Close) |


### Commenting Folder Element (`CMTFLD`)
Commenting World Element (CMTWLD) - Design - Unified

### Commenting Post Element (`CMTPOS`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `XRSTRT` | Distributed Attributes reference |
| `Description` | Description of the element |


### World Element (`WORLD`)
Datasheet Instance Group Element (DSIGRO) - Design - Unified

### Commenting Folder Element (`CMTFLD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Generic Hull Reference Element (`HRDREF`)
Datasheet Instance Element (DSINST) - Design - Unified

### Generic Hull Reference Element (`HRDREF`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `DSTITL` | Datasheet title |
| `DSSUBT` | Datasheet sub title |
| `DocNum` | Document Number |
| `SHTOT` | Total Sheets |
| `DSTREF` | Datasheet Template reference for Datasheet Instance |
| `DSIAST` | Datasheet Instance assigned tags reference array for |
| `Datasheet Instance` | Prmtag |
| `Associated Primary Element` | Exfile |
| `Extract file number` | Pvno |
| `Picture version number` | DSNO |
| `Datasheet number` |  |


### Generic Hull Reference Element (`HRDREF`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |

**Legal Members:** `None`, `Datasheet Instance World Element (DSIWLD) - Design - Unified`


### World Element (`WORLD`)
Revision and Issue Element (REVISS) - Design - Unclassified

### Datasheet Instance Group Element (`DSIGRO`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Rvnum` | Revision number |
| `Rvnpts` | Revision number value parts |
| `Rviss` | Issued |
| `Rvcanc` | Cancelled |
| `RVURI` | Issued object location |
| `Exfile` | Extract file number |
| `Pvno` | Picture version number |
| `Number` | Number |
| `RVFTYP` | Revision file type |
| `Stahrf` | Status History Reference |
| `DBBLOB` | Database Binary Large Object |
| `Relrev` | Related revisions |
| `DSTYPE` | Datasheet type |


### Revision Link Element Element (`REVLNK`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |

**Legal Members:** `None`, `Revision Link Elements Element (REVLKS) - Design - Unclassified`


### Revision Link Elements Element (`REVLKS`)

### Revision Links World Element (`REVLWL`)

### Revision Link Elements Element (`REVLKS`)
Revision Link Element Element (REVLNK) - Design - Unclassified

### Revision Link Element Element (`REVLNK`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `Celref` | Status Element reference |
| `Rvcon` | Revision Configuration |


### Revision Link Elements Element (`REVLKS`)
Revision Links World Element (REVLWL) - Design - Unclassified

### Revision and Issue Element (`REVISS`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Rvlpos` | Revision links reference |


### World Element (`WORLD`)
Distributed Attribute Group Element (XPIFLD) - Design - Unified

### Revision Link Elements Element (`REVLKS`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |


### Distributed Attribute Group Element (`XPIFLD`)

### Distributed Attributes World Element (`XPIWLD`)

### Distributed Attribute Group Element (`XPIFLD`)
Distributed Attribute Base Element Element (XPITEM) - Design - Unified

### Distributed Attribute Base Element Element (`XPITEM`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `XRPNTR` | Distributed Attribute reference |


### Distributed Attribute Group Element (`XPIFLD`)
**Primary Element**

**Attributes:**
| Attribute | Description |
|-----------|-------------|
| `Name` | Name of the element |
| `Description` | Description of the element |
| `XRSTRT` | Distributed Attributes reference |

**Legal Members:** `None`, `Distributed Attributes World Element (XPIWLD) - Design - Unclassified`


### World Element (`WORLD`)
**Legal Members:** `XPIFLD`