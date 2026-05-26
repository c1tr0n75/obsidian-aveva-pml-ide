# USER Object

The `USER` object represents an AVEVA project user. It provides details about the user's identity, description, and administrative access levels.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Name` | STRING | The name of the user (max 32 chars). |
| `Description`| STRING | The user's description/full name (max 120 chars). |
| `Access` | STRING | Access rights level: `'FREE'`, `'GENERAL'`, or `'RESTRICTED'`. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `User(id)` | USER | Constructor. Returns a `USER` object for the given name or RefNo. |
| `Teamlist()` | ARRAY | Returns an array of `TEAM` objects that the user belongs to. |

## Code Examples

### Querying the Current User
```pml
var !me user
!user = object user(!me)
!userDesc = !user.Description
!userAccess = !user.Access
$p Welcome, $!userDesc
$p Your access level is: $!userAccess
```

### Checking User Team Membership
```pml
var !me user
!user = object user (!me)
!myTeams = !user.Teamlist()

```

## Best Practices
1.  **Access Control**: Use the `.Access` member to conditionally enable or disable UI features based on the user's project-wide permissions.
2.  **Descriptions**: Many projects use the `.Description` field to store the user's full name or department. Use this for more friendly UI messages than the raw `.Name` (which is often a login ID).
3.  **Admin Scripts**: When writing administrative scripts, use the `.Teams()` method to verify that the user belongs to an appropriate "Master" or "Admin" team before allowing destructive operations.

