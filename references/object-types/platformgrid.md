# PLATFORMGRID Object

The `PLATFORMGRID` object is a specialized tool used for managing complex grid patterns on `PLTFRM` (Platform) elements. Unlike the basic `PLANTGRID`, it supports boundary-aware logic, including outer profiles and inner openings (`PLOPEN`), and can calculate trimmed cell areas and geometry.

## Methods

### Lifecycle & Geometry
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Platformgrid()` | PLATFORMGRID | Constructor. Creates an empty grid. |
| `Platformgrid(dbref)`| PLATFORMGRID | Constructor. Creates a grid from a `PLTGRD` or `INTFRM` element. |
| `Position(pos)` | NO RESULT | Sets the grid origin. |
| `Orientation(ori)` | NO RESULT | Sets the grid orientation (defining the surface normal). |
| `GridAngle(deg)` | NO RESULT | Sets the rotation angle of the grid relative to the orientation. |

### Spacing & Sizing
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `GridXSpacings(arr)`| NO RESULT | Sets the array of distances along the local X-axis. |
| `GridYSpacings(arr)`| NO RESULT | Sets the array of distances along the local Y-axis. |
| `GridXYSize()` | REAL ARRAY | Returns the `[Width, Height]` of the grid bounding box. |
| `GrossArea()` | REAL | Returns the total area of the grid including openings. |
| `NetArea()` | REAL | Returns the area excluding inner boundaries (openings). |

### Boundaries & Profiles
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `OuterBoundary()` | PROFILE | Returns the `PROFILE` object defining the platform's outer edge. |
| `AddInnerBoundary(p)`| NO RESULT | Adds an opening profile to the grid. |
| `ClearInnerBoundary()`| NO RESULT | Removes all openings. |
| `InnerBoundaries()` | PROFILE ARRAY | Returns a list of all opening profiles. |

### Cell Analysis
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `GridPoint(ix, iy)` | POSITION | Returns the 3D position of the intersection at `(ix, iy)`. |
| `CellProfile(ix, iy)`| PROFILE | Returns the boundary profile of the specific grid cell. |
| `IsCellTrimmed(ix, iy)`| BOOLEAN | Returns `True` if the cell is partially cut by a boundary. |
| `TotalNumberOfCells()`| REAL | Returns the count of cells within the grid. |

## Code Examples

### Analyzing Platform Net Area
```pml
!plt = /PLT-101
!grid = object PLATFORMGRID(!plt)

!net = !grid.NetArea()
!gross = !grid.GrossArea()
!waste = !gross - !net

$p Net Walkway Area: $!net mm2
$p Area lost to openings: $!waste mm2
```

### Finding a Specific Grid Point
```pml
!grid = object PLATFORMGRID(!!CE)
-- Intersection of 3rd X and 2nd Y line
!p3_2 = !grid.GridPoint(3, 2)

/PUMP-A MOVE TO !p3_2
```

## Best Practices
1.  **DB Integration**: Always use the `object PLATFORMGRID(dbref)` constructor when working with existing platform elements to ensure the boundary and spacing data is correctly inherited from the database.
2.  **Trimming Awareness**: In platforms with complex shapes, many cells will be "trimmed" (`IsCellTrimmed`). Use `CellProfile` if you need to calculate the exact shape of a partial walkway panel.
3.  **Coordinate Systems**: Use the `PLANE()` method to get the 3D plane definition of the platform for secondary calculations or 2D projections.
4.  **Performance**: Fetching `ListOfTrimmedCells()` can be expensive for very large grids. Cache the results if you need to iterate over them multiple times.

