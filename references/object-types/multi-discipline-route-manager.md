# Multi-Discipline Route Manager (MDR)

The Multi-Discipline Route Manager (MDR) provides a PML interface for managing and automating routing paths for various disciplines (Cabling, HVAC, Piping). It uses a specialized set of objects (`mdrRoute`, `mdrRoutePoint`) to represent and manipulate 3D paths.

## Key Objects

### `mdrRoute`
Represents a complete routing path composed of multiple points.
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `HeadRoutePoint()` | mdrRoutePoint | Returns the start point of the route. |
| `TailRoutePoint()` | mdrRoutePoint | Returns the end point of the route. |
| `InsertRoutePoint(pt, idx)`| NO RESULT | Inserts a route point at the specified index. |
| `Length()` | REAL | Calculates the total length of the route. |
| `dbWrite(dbref)` | BOOLEAN | Commits the route geometry to the database element. |

### `mdrRoutePoint`
Represents an individual node or vertex within an MDR route.
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Position` | POSITION | Get/Set the 3D coordinate of the point. |
| `Radius` | REAL | Get/Set the bend radius (fillet) at this point. |
| `OwningRoute()` | mdrRoute | Returns the route object this point belongs to. |
| `DbElement()` | DBREF | Returns the underlying database element (if committed). |

### `mdrBaseManager`
Global manager for creating MDR objects.
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `CreateRoutePoint(pos)`| mdrRoutePoint | Creates a transient route point at the given position. |
| `CreateRoutePoint(ref)`| mdrRoutePoint | Creates a route point from an existing database element. |

## Code Examples

### Building a Simple 3-Point Route
```pml
!mgr = object mdrBaseManager()

-- Create points
!p1 = !mgr.CreateRoutePoint(object POSITION(0, 0, 0))
!p2 = !mgr.CreateRoutePoint(object POSITION(1000, 0, 0))
!p3 = !mgr.CreateRoutePoint(object POSITION(1000, 1000, 0))

-- Create route and assemble
!route = object mdrRoute()
!route.InsertRoutePointAtTail(!p1)
!route.InsertRoutePointAtTail(!p2)
!route.InsertRoutePointAtTail(!p3)

!len = !route.Length()
$p Route length: $!len
```

### Committing to Database
```pml
!targetBranch = /MY_CABLE_WAY
if (!route.dbWrite(!targetBranch)) then
    $p Route successfully saved to database.
endif
```

## Best Practices
1.  **Transient State**: Routes and RoutePoints can exist purely in memory. Use this for "what-if" calculations (like pathfinding) before calling `.dbWrite()`.
2.  **Point Continuity**: Ensure that points added to a route are spatially logical. MDR doesn't strictly prevent "teleporting" segments, but they may cause errors during database commit.
3.  **Fillets**: Always set a `.Radius` on corner points if you intend to generate physical geometry (like tray bends or pipe elbows).
4.  **Interactive Editing**: Use `BeginInteractiveRoutePointsEditing(!route)` to hand over control to the user's mouse for manual adjustments while your script is running.

