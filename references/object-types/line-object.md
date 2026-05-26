# LINE Object

The `LINE` object represents a finite 3D line segment defined by a start and end position. It is used for spatial calculations, intersections, and geometry definition in E3D.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `StartPosition` | POSITION | The start coordinate of the line. |
| `EndPosition` | POSITION | The end coordinate of the line. |

## Methods

### Definition & Transformation
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Line(p1, p2)` | LINE | Constructor. Creates a line between two positions. |
| `Direction()` | DIRECTION | Returns the vector direction of the line. |
| `Length()` | REAL | Returns the distance between start and end. |
| `ExtendEnd(val)` | LINE | Returns a new line extended by `val` at the end. |
| `Parallel(pos)` | LINE | Returns a line parallel to the original passing through `pos`. |
| `ReverseSense()` | LINE | Returns a line with start and end swapped. |

### Analysis & Intersections
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `On(pos, [bounded])`| BOOLEAN | Returns `True` if `pos` lies on the line. `bounded` checks the segment. |
| `Intersection(LINE)` | POSITION | Returns the point where two lines intersect. |
| `Intersection(PLANE)`| POSITION | Returns the point where the line intersects a plane. |
| `Near(pos)` | POSITION | Returns the point on the line closest to the given `pos`. |
| `Proportion(val)` | POSITION | Returns a point at a percentage (0.0 to 1.0) along the line. |

## Code Examples

### Finding the Midpoint of a Line
```pml
!p1 = object POSITION(0, 0, 0)
!p2 = object POSITION(100, 100, 100)
!line = object LINE(!p1, !p2)

!midPoint = !line.Proportion(0.5)
$p Midpoint: $!midPoint
```

### Checking for Interference (Nearness)
```pml
!pipeLine = object LINE(!start, !end)
!structPos = object POSITION(500, 500, 500)

!closeness = !pipeLine.Distance(!structPos)
if (!closeness < 50) then
    $p Warning: Structural clearance violation!
endif
```

## Best Practices
1.  **Unbounded vs Bounded**: Many methods (like `On()` or `Intersection()`) work on the *unbounded* line by default. Use the `bounded` boolean argument if you only care about the segment between `StartPosition` and `EndPosition`.
2.  **PointVectors**: If you only need a starting point and a direction (infinite line), consider using the `POINTVECTOR` object, which is lighter and more suitable for ray-casting.
3.  **Coordinate Systems**: Positions are usually defined in World coordinates. Ensure both positions passed to the constructor are in the same coordinate system.
4.  **Tolerance**: Due to floating-point precision, `On()` might return `False` for points that are extremely close. Use `Distance(pos)` and check against a small epsilon (e.g., `< 0.01`) for more robust logic.

