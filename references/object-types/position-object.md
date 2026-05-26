# POSITION Object

The `POSITION` object represents a 3D coordinate point in the AVEVA E3D/Design world, defined by its East, North, and Up components relative to an origin (World or a specific element).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `East` | REAL | The coordinate in the East/West direction. |
| `North`| REAL | The coordinate in the North/South direction. |
| `Up` | REAL | The coordinate in the Up/Down direction. |
| `Origin`| DBREF | The database element that serves as the coordinate system origin. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Position(string)` | POSITION | Constructor. Parses string like `'E 100 N 50 U 0'`. |
| `WRT(dbref)` | POSITION | Returns a new POSITION object converted to the coordinate system of the target element. |
| `Distance(pos)` | REAL | Returns the linear distance to another position. |
| `MidPoint(pos)` | POSITION | Returns the point exactly halfway between two positions. |
| `String([format])` | STRING | Converts the position to a human-readable string. |
| `Angle(p1, p2)` | REAL | Returns the angle between two points about the current position. |

## Code Examples

### Querying and Moving Elements
```pml
-- Get current element position
!pos = !!CE.pos
!newPos = !pos
!newPos.East = !pos.East + 500mm

-- Move element 500mm East
!!CE.pos = !newPos
```

### Coordinate Transformation (WRT)
```pml
!worldPos = !!CE.pos
-- Convert to local Site coordinates
!sitePos = !worldPos.WRT(/SITE-AREA-01)

$p World: $!worldPos
$p Local: $!sitePos
```

### Calculating Distance
```pml
!p1 = !!CE.pos
!p2 = !!P2.pos
!dist = !p1.Distance(!p2)

if (!dist LT 1000mm) then
    !!Alert.Warning('Elements are too close!')
endif
```

## Best Practices
1.  **Always use WRT**: When comparing positions of elements in different zones or sites, use `.WRT(World)` to ensure you are comparing "apples to apples" in a common coordinate system.
2.  **Origin Awareness**: Changing the `.Origin` member does not perform a coordinate conversion; it simply reinterprets the E, N, U values relative to a new element. Use `.WRT()` for actual transformation.
3.  **Math Operations**: You can add or subtract `POSITION` and `DIRECTION` objects directly in many contexts, but using explicit members (`.East`, etc.) is often clearer for maintenance.
4.  **Format Objects**: Use `FORMAT` objects when calling `.String()` to ensure the output matches the project's preferred units (e.g., metric vs. imperial).

