# XYPosition Object

The `XYPosition` object represents a 2D coordinate point (X, Y). It is primarily used for 2D graphics, screen-space calculations, and local coordinates on a `PLANE` or within a 2D Drawing (Draft).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `X` | REAL | The horizontal coordinate. |
| `Y` | REAL | The vertical coordinate. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `XYposition(x, y)` | XYPOSITION | Constructor. Creates a 2D point from two numbers. |
| `String()` | STRING | Returns the object as a string (e.g., `'X 10 Y 20'`). |

## Code Examples

### Projecting a 3D Point to a Plane
```pml
!pln = object PLANE(object POSITION('E 0 N 0 U 5000'), object ORIENTATION())
!pos3d = object POSITION('E 100 N 200 U 5000')

-- Assuming a method exists to get local coordinates from a plane
-- !local2d = !pln.LocalPosition(!pos3d) 
!p2d = object XYPOSITION(100, 200)

$p 2D coordinate on plane: $!p2d
```

### 2D Distance Calculation (Manual)
```pml
!p1 = object XYPOSITION(0, 0)
!p2 = object XYPOSITION(30, 40)

!dx = !p2.X - !p1.X
!dy = !p2.Y - !p1.Y
!dist = sqrt(!dx**2 + !dy**2)

$p 2D distance is $!dist
```

## Best Practices
1.  **Context Matters**: `XYPosition` is relative to whatever 2D coordinate system it was created in (e.g., a specific drawing sheet, a form canvas, or a 3D plane). Always keep track of the reference origin.
2.  **Conversion**: To use an `XYPosition` in 3D space, it must be combined with a `PLANE` or `ORIENTATION` to define its 3D location.
3.  **Drafting**: In AVEVA Draft, `XYPosition` is the standard way to define the location of notes, labels, and geometry on a sheet.
4.  **Formatting**: Use `String()` for debugging, but access `.X` and `.Y` directly for mathematical operations to avoid string parsing overhead.

