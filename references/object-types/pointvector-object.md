# POINTVECTOR Object

The `POINTVECTOR` object represents a 3D point coupled with a direction. It is often used to define a ray for intersections, an axis for rotation, or a plane normal at a specific origin.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Position` | POSITION | The origin point of the vector. |
| `Direction`| DIRECTION | The direction of the vector. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Pointvector(pos, dir)`| POINTVECTOR | Constructor. Creates a point-vector from components. |
| `Offset(distance)` | POINTVECTOR | Returns a new `POINTVECTOR` moved along its direction. |
| `Towards(target)` | POINTVECTOR | Sets the direction to point from the current origin to the target. |
| `Intersection(line)`| POSITION | Returns the point where the vector (as a ray) intersects a line. |
| `Intersection(plane)`| POSITION | Returns the point where the vector intersects a plane. |
| `Plane()` | PLANE | Returns a `PLANE` with its origin at `Position` and normal `Direction`. |
| `String()` | STRING | Returns the object as a string (e.g., `'E 0 N 0 U 0 DIR U'`). |

## Code Examples

### Raycasting for Intersections
```pml
!ray = object POINTVECTOR(!!CE.pos, object DIRECTION('N'))
!wall = object PLANE(object POSITION('N 10000'), object DIRECTION('N'))

!hitPoint = !ray.Intersection(!wall)
if (!hitPoint.Unset().Not()) then
    $p Ray hit the wall at: $!hitPoint
endif
```

### Creating an Offset Plane
```pml
!pv = object POINTVECTOR(!!CE.pos, !!CE.ori.ZDir())
-- Move 500mm along the element's local Z
!offsetPV = !pv.Offset(500)
-- Create a plane at the offset position
!newPlane = !offsetPV.Plane()
```

## Best Practices
1.  **Infinite Rays**: Like `LINE` and `PLANE`, intersection methods for `POINTVECTOR` generally treat the vector as an infinite ray starting at `Position`.
2.  **Directional logic**: Use `.Towards()` to dynamically orient a vector based on model geometry (e.g., pointing from a nozzle to a tank center).
3.  **Coordinate Systems**: Ensure both `Position` and `Direction` are in the same coordinate system (usually `WRT(World)`) before performing intersections.
4.  **Math Operations**: You can think of a `POINTVECTOR` as a more robust version of a `LINE` when you care more about the direction and origin than a specific segment length.

