# PLANE Object

The `PLANE` object represents an infinite flat surface in 3D space, defined by a position (point on the plane) and an orientation (defining the plane's normal direction).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Position` | POSITION | A point on the plane (the origin of the plane). |
| `Orientation`| ORIENTATION | The orientation of the plane. The local Z-axis of this orientation is the plane's normal. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Plane(pos, ori)` | PLANE | Constructor. Creates a plane with given position and orientation. |
| `Towards(pos)` | NO RESULT | Rotates the plane normal so it points towards the target position. |
| `Intersection(line)`| POSITION | Returns the point where an infinite line pierces the plane. |
| `Intersection(p1, p2)`| POSITION | Returns the single point where three planes intersect. |
| `Near(pos)` | POSITION | Returns the point on the plane closest to the given 3D position. |
| `Line(length)` | LINE | Returns a line normal to the plane at its origin. |

## Code Examples

### Finding the Nearest Point on a Surface
```pml
!p1 = !!CE.pos
!pln = object PLANE(!p1, !!CE.ori)
!target = object POSITION('E 5000 N 2000 U 1000')

-- Project target point onto the plane
!onPlane = !pln.Near(!target)
```

### piercing a Plane with a Line
```pml
!start = object POSITION('E 0 N 0 U 0')
!dir = object DIRECTION('U')
!l1 = object LINE(!start, !dir, 10000)

!pln = object PLANE(object POSITION('E 0 N 0 U 5000'), object ORIENTATION())
-- Returns 'E 0 N 0 U 5000'
!hit = !pln.Intersection(!l1)
```

## Best Practices
1.  **Normal Direction**: Remember that the "Normal" to the plane is the **Z-axis** of the `Orientation` member.
2.  **Infinite Nature**: Most intersection methods treat the plane and lines as infinite, regardless of any "length" or "size" parameters in the source objects.
3.  **Stability**: Avoid calculating intersections with planes that are nearly parallel to the line/other plane, as small rounding errors in the orientation can lead to large errors in the resulting position.
4.  **XYPosition conversion**: Use `ThreeDPosition(XYPOSITION)` to convert a 2D coordinate on the plane (relative to its origin) back into a 3D World position.

