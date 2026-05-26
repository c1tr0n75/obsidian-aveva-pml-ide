# LOCATION Object

The `LOCATION` object represents a physical or logical location within an AVEVA Global project environment. It provides metadata about the location's identity and its status relative to the current session.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Name` | STRING | The name of the location. |
| `Description`| STRING | A descriptive text for the location (max 120 chars). |
| `Locid` | STRING | The unique location identifier. |
| `Refno` | STRING | The database reference number of the location element. |
| `IsCurrent` | BOOLEAN | Returns `True` if this is the location where the user is currently logged in. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Location(id)` | LOCATION | Constructor. Returns a `LOCATION` object for the given name or RefNo. |

## Code Examples

### Checking Location Metadata
```pml
!loc = object LOCATION('/LONDON_OFFICE')
!locDesc = !loc.Description
$p Site Description: $!locDesc
```

## Best Practices
1.  **Global Projects**: Use the `LOCATION` object to determine if the user is working at a primary or secondary hub, which may impact data writability.
2.  **Location IDs**: Prefer using `Locid` for programmatic logic as it is often more stable than the user-defined `Name`.
3.  **Null Checks**: If a project is not configured for Global, some location-related methods might return unset objects or error out. Always wrap in error handling if the project environment is unknown.

