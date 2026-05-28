# SESSION Object

The `SESSION` object represents a user's current project login session. It provides information about the user's MDB, access modes, and connection details.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Name` | STRING | The session name. |
| `Login` | STRING | The user's login ID. |
| `Host` | STRING | The name of the machine running the session. |
| `Entered` | STRING | The time the session was started. |
| `IsCurrent` | BOOLEAN | Returns `True` if this is the user's own active session. |
| `UniqueID` | STRING | Internal unique identifier for the session. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Session(uid)` | SESSION | Constructor. Returns a `SESSION` object for the given unique ID. |
| `MDB()` | MDB | Returns the `MDB` object associated with the session. |
| `Location()` | LOCATION | Returns the `LOCATION` where the session is active. |
| `ConfirmID(pass)`| BOOLEAN | Verifies if the provided password is correct for the current user. |
| `Current()` | ARRAY | Returns an array of `DB` objects currently active in the session's MDB. |
| `Mode()` | ARRAY | Returns an array of strings (`'R'`, `'RW'`) for each database's access mode. |


## Best Practices
1.  **Identity Verification**: Use `.ConfirmID()` for high-risk operations (like bulk deletion or data export) to ensure the user at the keyboard is authorized.
2.  **Access Rights**: Always check the `.Mode()` array before attempting to write to a database. A database might be in the MDB but only available in Read ('R') mode due to licensing or claims.
3.  **Host Tracking**: In large projects, use the `.Host` property to identify which machines are consuming licenses or holding claims.
4.  **Session Context**: Remember that many properties of the `SESSION` (like the active MDB) can change during a session. Query the object fresh when needed.

