# DIRECTION Object

The `DIRECTION` object represents a 3D vector in space, defined relative to a specific frame of reference (World or a Database Element).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `East` | REAL | The East (X) component of the vector. |
| `North` | REAL | The North (Y) component of the vector. |
| `Up` | REAL | The Up (Z) component of the vector. |
| `Origin` | DBREF | The database element acting as the reference frame for this direction. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Direction(string)` | DIRECTION | Constructor. Accepts strings like `'N'`, `'S 45 E'`, or `'E 30 N'`. |
| `Angle(other)` | REAL | Returns the angle (in degrees) between two directions. |
| `Bisect(other)` | DIRECTION | Returns the direction that bisects the angle between two directions. |
| `Cross(other)` | DIRECTION | Returns the cross product (vector product) of two directions. |
| `Dot(other)` | REAL | Returns the dot product (scalar product) of two directions. |
| `IsParallel(other)` | BOOLEAN | Returns TRUE if the directions are parallel. |
| `WRT(dbref)` | DIRECTION | Transforms the direction to be with respect to a new reference element. |
| `EQ(other)` | BOOLEAN | Returns TRUE if two directions are identical. |
| `String([format])` | STRING | Returns the string representation of the direction. |

## Code Examples

### Creating and Comparing Directions
```pml
!d1 = object DIRECTION('NORTH')
!d2 = object DIRECTION('N 45 E')

!angle = !d1.Angle(!d2)
$p Angle is $!angle degrees
```

### Working with Coordinate Components
```pml
!dir = object DIRECTION('E 1 N 1')
!e = !dir.East
!n = !dir.North
!u = !dir.Up

$p Components: E $!e N $!n U $!u
```

### Reference Frame Transformation
```pml
!worldDir = object DIRECTION('NORTH')
-- Convert world North to be relative to a specific Equipment's local axes
!localDir = !worldDir.WRT(/EQUIP-01)
```

## Best Practices
1.  **Named Directions**: Use standard compass points (`'N'`, `'S'`, `'E'`, `'W'`, `'U'`, `'D'`) for clarity when possible.
2.  **WRT for Accuracy**: When working with equipment or structural components, always ensure you are using the correct reference frame (`WRT`) to avoid orientation errors.
3.  **Cross Product**: Use the `Cross` product to find a vector that is orthogonal (perpendicular) to two existing vectors, which is useful for defining local coordinate systems.
4.  **Normalization**: While a `DIRECTION` is a vector, it is typically treated as a unit vector (length 1) in many AVEVA operations.

