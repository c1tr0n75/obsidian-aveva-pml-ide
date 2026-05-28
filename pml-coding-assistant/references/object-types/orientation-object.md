# ORIENTATION Object

The `ORIENTATION` object defines the rotation of a frame of reference (the directions of the XYZ axes) relative to an origin database element or the World. It does not contain positional data.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Alpha` | REAL | The rotation angle around the Z-axis. |
| `Beta` | REAL | The rotation angle around the new Y-axis. |
| `Gamma` | REAL | The rotation angle around the new X-axis. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Orientation(string)`| ORIENTATION | Constructor. Parses strings like `'Y is N45E'`, `'P3'`, or `'Drip'`. |
| `WRT(dbref)` | ORIENTATION | Returns a new `ORIENTATION` converted to the coordinate system of the target element. |
| `XDir()` | DIRECTION | Returns the direction of the local X-axis as a `DIRECTION` object. |
| `YDir()` | DIRECTION | Returns the direction of the local Y-axis as a `DIRECTION` object. |
| `ZDir()` | DIRECTION | Returns the direction of the local Z-axis as a `DIRECTION` object. |
| `String([format])` | STRING | Returns the orientation as a string (e.g., `'Y IS N45E'`). |

## Code Examples

### Querying and Setting Orientation
```pml
-- Get current element orientation
!ori = !!CE.ori
!newOri = !ori
-- Rotate 90 degrees
!newOri.Alpha = !ori.Alpha + 90

!!CE.ori = !newOri
```

### Coordinate Transformation (WRT)
```pml
!worldOri = !!CE.ori
-- Convert to site-local rotation
!localOri = !worldOri.WRT(/SITE-AREA-01)
```

### Accessing Local Axes
```pml
!ori = !!CE.ori
-- Get the direction the element's local Z is pointing
!upDir = !ori.ZDir()

if (!upDir.Match('UP')) then
    $p Element is oriented vertically.
endif
```

## Best Practices
1.  **Alpha/Beta/Gamma Order**: Remember that AVEVA uses a specific Euler angle sequence. Modifying members individually can be complex; using `Orientation(string)` is often more intuitive for standard rotations.
2.  **Relative Rotation**: To rotate an element relative to its current state, use the `ROTATE` command or multiply `ORIENTATION` objects if supported in the specific E3D version context.
3.  **WRT(World)**: When comparing rotations between elements in different hierarchies, always normalize to `WRT(World)`.
4.  **Direction Matching**: Use `.XDir()`, `.YDir()`, or `.ZDir()` when you need to align another object to a specific axis of the current element.

