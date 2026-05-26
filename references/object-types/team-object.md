# TEAM Object

The `TEAM` object represents a project team within AVEVA Administration. It defines ownership of databases and access permissions for users.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Name` | STRING | The name of the team (max 32 chars). |
| `Description`| STRING | A descriptive text for the team (max 120 chars). |
| `Refno` | STRING | The database reference number of the team element. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Team(id)` | TEAM | Constructor. Returns a `TEAM` object for the given name or RefNo. |
| `Users()` | ARRAY | Returns an array of `USER` objects belonging to this team. |
| `Databases()` | ARRAY | Returns an array of `DB` objects owned by this team. |

## Code Examples

### Querying Team Information
```pml
!team = object TEAM('PIPING')
!teamName = !team.Name
!teamDesc = !team.Description
$p Team Name: $!teamName
$p Description: $!teamDesc
```

### Listing Databases Owned by a Team
```pml
!team = object TEAM('STRUCTURE')
!dbs = !team.Databases()
do !db values !dbs
    !dbName = !db.Name
    !dbType = !db.Type
    $p Database: $!dbName ($!dbType)
enddo
```

## Best Practices
1.  **Administrative Checks**: Use the `TEAM` object to verify if a user has the authority to perform certain actions (e.g., if they belong to the team that owns the current database).
2.  **Global vs Local**: In a Global project, teams might be location-specific or global. Use the `Project` object to query team availability across locations.
3.  **Naming Consistency**: Team names are often used as part of database naming conventions. Ensure your scripts handle these names consistently with the project's standards.

