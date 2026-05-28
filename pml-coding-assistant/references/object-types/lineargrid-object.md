# LINEARGRID Object

The `LINEARGRID` object defines a 2D rectangular grid in 3D space. It is used for snapping positions to regular intervals and calculating points within a structured coordinate system (like a building grid).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Position` | POSITION | The origin (0,0) of the grid. |
| `Orientation` | ORIENTATION | The plane in which the grid lies. |
| `XSpacing` | REAL | The distance between vertical grid lines. |
| `YSpacing` | REAL | The distance between horizontal grid lines. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Lineargrid(pos, ori, x, y)` | LINEARGRID | Constructor. Defines the grid's location, orientation, and intervals. |
| `GridPoint(xIndex, yIndex)` | POSITION | Returns the 3D position of the intersection at the specified grid indices. |
| `Snap(pos)` | POSITION | Returns the nearest intersection point on the grid to the given `pos`. |
| `SnapToCentre(pos)` | POSITION | Returns the center point of the grid cell containing the given `pos`. |
| `Plane()` | PLANE | Returns the grid as a `PLANE` object. |

## Code Examples

### Creating a Building Grid
```pml
!origin = object POSITION(0, 0, 0)
-- Flat on XY plane
!ori = object ORIENTATION(0, 0)
-- 5m intervals
!grid = object LINEARGRID(!origin, !ori, 5000, 5000)

-- Get the position of the 3rd column, 2nd row
!colPos = !grid.GridPoint(3, 2)
$p Column Position: $!colPos
```

### Snapping a Component to a Grid
```pml
!pickedPos = !!CE.position
!snappedPos = !grid.Snap(!pickedPos)

!!CE.position = !snappedPos
$p Component moved to nearest grid intersection.
```

## Best Practices
1.  **Index-Based Positioning**: Use `GridPoint()` for precise layout of structural elements (columns, beams) rather than manual coordinate math.
2.  **Orientation**: Ensure the `Orientation` correctly reflects the floor level or wall plane you are working on.
3.  **Spacing**: `XSpacing` and `YSpacing` can be different, allowing for non-square grid layouts.
4.  **Center Snapping**: `SnapToCentre()` is particularly useful for placing equipment in the middle of a room or grid cell.

