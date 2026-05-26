# PROFILE Object

The `PROFILE` object represents a 2D boundary (a loop) in 3D space. It is composed of a series of connected edges (lines and arcs) and is primarily used for defining plate shapes, extrusion boundaries, and negative primitives (holes).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Position` | POSITION | The origin/anchor point of the profile. |
| `Orientation` | ORIENTATION | The plane in which the profile edges are defined. |
| `Pointer` | POINTER | Internal pointer to the geometric definition. |

## Methods

### Constructors & Database Interaction
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Profile(edgesArray)`| PROFILE | Creates a profile from an array of `LINE` and `ARC` objects. |
| `Profile(dbref)` | PROFILE | Extracts a profile from a `LOOP`, `PLOO`, or `SPINE` element. |
| `dbWrite(dbref)` | PROFILE | Writes the profile geometry back to a database element (e.g., `PLOO`). |

### Analysis
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `IsClosed()` | BOOLEAN | Returns `True` if the start of the first edge matches the end of the last. |
| `Area()` | REAL | Returns the enclosed area (requires the profile to be closed). |
| `Length()` | REAL | Returns the total perimeter length. |
| `Sense()` | BOOLEAN | `True` for anti-clockwise, `False` for clockwise. |
| `Edges()` | ARRAY | Returns an array of the `LINE` and `ARC` objects forming the profile. |

### Transformations & Boolean Operations
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Translate(x, y)` | PROFILE | Shifts the profile within its own plane. |
| `Rotate(angle, pos)`| PROFILE | Rotates the profile around a point on its plane. |
| `Union(other)` | ARRAY | Returns the combined boundary of two overlapping profiles. |
| `Intersect(other)` | ARRAY | Returns the area common to both profiles. |
| `Difference(other)` | ARRAY | Subtracts the `other` profile from the original. |

## Code Examples

### Creating a Circular Hole Profile
```pml
!pos = object POSITION(0, 0, 0)
!ori = object ORIENTATION(0, 0)
-- 50mm radius circle
!arc = object ARC(!pos, !ori, 50, 0, 360, TRUE)

!edges = object ARRAY()
!edges.Append(!arc)

!holeProfile = object PROFILE(!pos, !ori, !edges)
if (!holeProfile.IsClosed()) then
    $p Profile is valid for database write.
endif
```

### Calculating Plate Area
```pml
!plate = /PLATE-1
-- Assuming it's a PLOO
!loop = !plate.FirstChild
!prof = object PROFILE(!loop)

!area = !prof.Area()
$p Plate surface area: $!area mm2
```

## Best Practices
1.  **Closing Profiles**: Always call `.IsClosed()` before attempting to write a profile to a database element or calculating `.Area()`. Use the `.Close()` method to automatically bridge small gaps.
2.  **Sense Consistency**: In AVEVA E3D, outer boundaries are typically anti-clockwise (`Sense = True`), while inner holes are clockwise. Boolean operations (`Union`, `Difference`) rely on this consistency.
3.  **Planarity**: While a `PROFILE` has a 3D position and orientation, its edges must be coplanar. If you provide non-coplanar geometry to the constructor, PML will attempt to project it onto a best-fit plane.
4.  **Tolerance**: Use `.MergePoints(tolerance)` to clean up profiles generated from noisy external data (like DXF imports) to remove tiny redundant segments that might cause boolean failures.

