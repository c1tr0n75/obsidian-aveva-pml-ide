# PLANTGRID Object

The `PLANTGRID` object represents a standard rectangular (Cartesian) coordinate grid in 3D space. It is used for aligning structural components, piping racks, or any equipment that follows a linear modular layout.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Position` | POSITION | The origin (bottom-left start point) of the grid. |
| `Orientation`| ORIENTATION | The orientation of the grid plane. |
| `XSpacings` | REAL ARRAY | A list of distances between grid lines in the local X direction. |
| `YSpacings` | REAL ARRAY | A list of distances between grid lines in the local Y direction. |

## Methods
The `PLANTGRID` object primarily uses standard constructor and member assignment.

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Plantgrid(pos, ori, xArr, yArr)` | PLANTGRID | Constructor. Creates a rectangular grid. |

## Code Examples

### Defining a Structural Grid
```pml
!pos = object POSITION('E 0 N 0 U 0')
!ori = object ORIENTATION()

-- Define grid lines every 5 meters in X and 6 meters in Y
!xSpace = [5000, 5000, 5000, 5000]
!ySpace = [6000, 6000, 6000]

!grid = object PLANTGRID(!pos, !ori, !xSpace, !ySpace)
```

### Calculating a Grid Intersection
```pml
-- To find the world coordinate of Grid Line X3, Y2:
!lx = 0
do !i from 1 to 2
    !lx = !lx + !grid.XSpacings[!i]
enddo

!ly = 0
do !i from 1 to 1
    !ly = !ly + !grid.YSpacings[!i]
enddo

!localPos = object POSITION()
!localPos.E = !lx
!localPos.N = !ly

!worldPos = !localPos.Transform(!grid.Orientation) + !grid.Position
```

## Best Practices
1.  **Relative Spacings**: Remember that `XSpacings` and `YSpacings` are relative to the *previous* grid line, not the origin.
2.  **Naming**: In AVEVA E3D, `PLANTGRID` objects are often named according to project standards (e.g., `'GRID-A-1'`).
3.  **Coordinate Transformation**: When mapping database elements to the grid, use the `.Transform()` method of the `POSITION` object to switch between grid-local and world-global coordinates.
4.  **Grids vs. Racks**: For complex piping racks, consider using a `PLANTGRID` to define the primary support centers.

