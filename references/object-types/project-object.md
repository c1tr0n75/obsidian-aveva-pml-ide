# PROJECT Object

The `PROJECT` object represents the top-level AVEVA project environment. It provides access to project-wide metadata, user lists, databases, and global location settings.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Name` | STRING | The full name of the project. |
| `Evar` | STRING | The environment variable name (e.g., `'SAM000'`). |
| `Type` | REAL | Project type: `0` (Plant/E3D Design) or `1` (Marine). |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Code()` | STRING | Returns the 3-character project code (e.g., `'SAM'`). |
| `Description()` | STRING | Returns the project description. |
| `Isglobal()` | BOOLEAN | Returns `True` if the project is configured for AVEVA Global. |
| `Locations()` | ARRAY | Returns an array of `LOCATION` objects (for Global projects). |
| `UserList()` | ARRAY | Returns an array of all `USER` objects defined in the project. |
| `Dblist()` | ARRAY | Returns an array of all `DB` objects in the project. |
| `MDBList()` | ARRAY | Returns an array of all `MDB` objects at the current location. |
| `CurrentLocation()`| LOCATION | Returns the `LOCATION` object for the current session. |

## Code Examples

```pml
-- Get an array of all PROJECT objects
!projects = PROJECTS

-- Get the current project object
!currentProject = CURRENT PROJECT
```


## Best Practices
1.  **Environment Awareness**: Use `.Evar` to determine which environment variables (like `SAM000`, `ABC000`) need to be set for external system calls or file pathing.
2.  **Type Checking**: Use the `.Type` member to tailor your scripts if they need to behave differently between E3D Design (Plant) and E3D Marine environments.

