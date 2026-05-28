# ARC Object

The `ARC` object represents a circular arc or full circle in 3D space, defined by a center position, orientation, radius, and angular span.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Orientation` | ORIENTATION | Get/Set the orientation of the arc. |
| `Position` | POSITION | Get/Set the origin/center of the arc. |
| `Radius` | REAL | Get/Set the radius of the arc. |
| `StartAngle` | REAL | Get/Set the angle from the X-axis to the start of the arc. |
| `EndAngle` | REAL | Get/Set the angle from the X-axis to the end of the arc. |
| `Sense` | BOOLEAN | Get/Set the arc sense: `0` for clockwise, `1` for anti-clockwise. |

## Methods

### Constructors & Core
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Arc(pos, ori, r, start, end, sense)` | ARC | Creates a new arc with specified parameters. |
| `String()` | STRING | Returns the arc definition as a string. |

### Methods Returning ARCs
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Circle([sense])` | ARC | Returns a full circle based on the arc. `sense=TRUE` for anti-clockwise. |
| `Complement()` | ARC | Returns the complementary arc (the remainder of the circle). |
| `Chord(length)` | ARC | Returns a new arc with specified chord length from the original start. |
| `ChordHeight(height)` | ARC | Returns a new arc with specified chord height. |
| `Through(pos)` | ARC | Returns a new arc where the radius passes through the given position. |
| `StartPosition(pos)` | ARC | Adjusts StartAngle to point towards the given position. |
| `EndPosition(pos)` | ARC | Adjusts EndAngle to point towards the given position. |

### Analysis Methods
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `AnglePosition(angle)` | POSITION | Returns the position at the specified angle on the arc. |
| `AngleDirection(angle)` | DIRECTION | Returns the direction from the center through the angle. |
| `StartTangent()` | DIRECTION | Returns the tangent direction at the start of the arc. |
| `EndTangent()` | DIRECTION | Returns the tangent direction at the end of the arc. |
| `Length()` | REAL | Returns the true arc length. |
| `Chord()` | REAL | Returns the chord length between start and end. |
| `ChordHeight()` | REAL | Returns the chord height. |
| `Proportion(val)` | REAL | Returns the angle at a proportion (0.0 to 1.0) along the arc. |

### Intersection & Validation
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Intersections(LINE/PLANE/ARC)`| REAL ARRAY | Returns angles of intersection points. |
| `On(pos)` | BOOLEAN | Returns TRUE if the position lies on the arc line. |
| `OnProjected(pos)` | BOOLEAN | Returns TRUE if projected position lies on the arc. |

## Code Examples

### Creating and Querying an Arc
```pml
!pos = object POSITION(0, 0, 0)
!ori = object ORIENTATION(0, 0)
!arc = object ARC(!pos, !ori, 100, 0, 90, TRUE)

!len = !arc.Length()
!startPos = !arc.AnglePosition(0)
!endPos = !arc.AnglePosition(90)

$p Arc length is $!len
```

### Finding Intersections
```pml
!line = object LINE(!pos1, !pos2)
!angles = !arc.Intersections(!line)

do !angle values !angles
    !intersectPos = !arc.AnglePosition(!angle)
    $p Intersection at $!intersectPos
enddo
```

## Best Practices
1.  **Sense Consistency**: Be careful with the `Sense` boolean; clockwise (0) vs anti-clockwise (1) affects tangent directions and arc length.
2.  **Angle Units**: Ensure your angles are in the correct units (usually degrees in PML) as expected by the constructor.
3.  **Validation**: Use `.On(pos)` to verify if a point actually lies on the arc before performing calculations that depend on it.

