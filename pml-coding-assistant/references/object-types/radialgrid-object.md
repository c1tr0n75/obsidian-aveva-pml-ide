# RADIALGRID Object

The `RADIALGRID` object represents a 2D or 3D coordinate grid based on polar coordinates (radii and angles). It is primarily used for positioning elements in circular layouts, such as vessel nozzles, circular platforms, or rotating equipment.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Position` | POSITION | The origin (center) of the radial grid. |
| `Orientation`| ORIENTATION | The orientation of the grid plane. The local Z-axis is the normal to the grid. |
| `Radii` | REAL ARRAY | A list of distances from the origin for each concentric ring. |
| `Angles` | REAL ARRAY | A list of angular positions (in degrees) from the local X-axis. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Radialgrid(pos, ori, rArr, aArr)` | RADIALGRID | Constructor. Creates a grid with specified geometry and spacing. |

## Code Examples

### Creating a Simple Circular Grid
```pml
!pos = object POSITION('E 0 N 0 U 5000')
!ori = object ORIENTATION()

-- Define 3 rings at 1m, 2m, and 3m
!radii = [1000, 2000, 3000]

-- Define 4 quadrants (0, 90, 180, 270 degrees)
!angles = [0, 90, 180, 270]

!myGrid = object RADIALGRID(!pos, !ori, !radii, !angles)
```

### Accessing Grid Points
```pml
-- While RADIALGRID doesn't have a direct 'Point(r, a)' method, 
-- you can calculate coordinates relative to the grid orientation:
!r = !myGrid.Radii[2]
!a = !myGrid.Angles[3]

!localPos = object POSITION()
!localPos.E = !r * cos(!a)
!localPos.N = !r * sin(!a)

!worldPos = !localPos.Transform(!myGrid.Orientation) + !myGrid.Position
```

## Best Practices
1.  **Local vs World**: Remember that `Angles` are measured from the local X-axis defined by the `Orientation` member.
2.  **Units**: Radii are typically handled in current distance units (e.g., MM). Angles are always in Degrees.
3.  **Visualization**: The `RADIALGRID` object is a data structure. To see it in the 3D view, you typically need to associate it with a `VIEW` or use it to generate helper geometry (like `LINE` objects).
4.  **Consistency**: When using grids for alignment, ensure the `Orientation` matches the surface or plane you are working on (e.g., the top flange of a vertical tank).

