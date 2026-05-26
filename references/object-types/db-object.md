# DB Object

The `DB` object provides metadata and session information for a specific database within an AVEVA project.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Name` | STRING | The name of the database (max 32 chars). |
| `Description` | STRING | The database description (max 120 chars). |
| `Type` | STRING | The database type (e.g., `'DESI'`, `'CATA'`, `'PCOM'`). |
| `Number` | STRING | The database number. |
| `Refno` | STRING | The internal database reference number. |
| `Access` | STRING | Access mode: `'UPDATE'`, `'MULTIWRITE'`, or `'CONTROLLED'`. |
| `Claim` | STRING | Claim mode for multi-write: `'EXPLICIT'` or `'IMPLICIT'`. |
| `File` | STRING | The physical database filename. |
| `Foreign` | STRING | Indicates if the database is `'FOREIGN'` or `'LOCAL'`. |
| `Team` | TEAM | The `TEAM` object that owns this database. |
| `Primary` | STRING | Indicates if the database is `'Primary'` or `'Secondary'` in a Global project. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `DB(dbref)` | DB | Constructor. Returns a `DB` object for the given `DBREF`. |
| `MDBList()` | ARRAY | Returns an array of MDBs that include this database. |
| `Sessions()` | ARRAY | Returns an array of `DBSESS` objects for this database. |
| `Lastsession()` | DBSESS | Returns the most recent `DBSESS` (session) for the database. |
| `Size()` | REAL | Returns the physical file size in pages. |

## Code Examples

### Querying Database Information
```pml
-- Get the current database
var !currentDatabaseName DBNAME
!currDb = object DB(!currentDatabaseName)

!dbName = !currDb.Name
!dbType = !currDb.Type
!dbTeam = !currDb.Team
!teamName = !dbTeam.Name
$p Database Name: $!dbName
$p Database Type: $!dbType
$p Owning Team:  $!teamName
```

### Checking Last Session
```pml
-- Using a DB RefNo
!db = object DB(/*1/101)
!lastSess = !db.Lastsession()

!saveDate = !lastSess.Date
!savedBy = !lastSess.User
$p Last Save Date: $!saveDate
$p Saved By:       $!savedBy
```

## Best Practices
1.  **Access Verification**: Before attempting to modify data, check the `.Access` and `.Claim` properties to ensure the current session has the necessary permissions.
2.  **Session Tracking**: Use `.Lastsession()` to audit when a database was last modified and by whom.
3.  **Global Projects**: In a Global project environment, use the `.Primary` property to determine if the database is writable at the current location.

