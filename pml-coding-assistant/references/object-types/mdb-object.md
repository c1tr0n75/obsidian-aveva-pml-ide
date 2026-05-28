# MDB Object

The `MDB` (Multiple Database) object represents a collection of databases grouped together for a specific project task or discipline. It defines which databases are visible and writable during the session.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Name` | STRING | The name of the MDB (max 32 chars). |
| `Description`| STRING | A descriptive text for the MDB (max 120 chars). |
| `Refno` | STRING | The database reference number of the MDB element. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `MDB(id)` | MDB | Constructor. Returns an `MDB` object for the given name or RefNo. |
| `Current()` | ARRAY | Returns an array of `DB` objects currently active in the MDB. |
| `Deferred()` | ARRAY | Returns an array of `DB` objects defined as deferred in the MDB. |
| `Mode()` | ARRAY | Returns an array of strings (`'R'`, `'RW'`) for each current database. |

## Code Examples

### Querying the Current MDB
```pml
-- Global instance for the current MDB
var !mdb mdb
$p Working in MDB: $!mdb
```

### Listing Databases in an MDB
```pml
var !mdb mdb
!mdb = object MDB(!mdb)
!dbs = !mdb.Current()

do !db values !dbs
    !name = !db.Name
    !type = !db.Type
    $p DB: $!name (Type: $!type)
enddo
```

## Best Practices
1.  **Multiple Database (MDB) Scope**: Remember that any query (like `COLLECT` or `!!CE.Attribute`) only searches within the databases included in the current `MDB`.
2.  **Access Rights**: Use the `.Mode()` method to check if a database is writable (`'RW'`) before attempting to modify elements within it.
3.  **Deferred Databases**: Be aware of "Deferred" databases. These are part of the MDB but are not loaded into memory until specifically accessed, which can improve performance for large projects.
4.  **Global Instance**: Use `!!Mdb` to refer to the user's active MDB. Avoid switching MDBs programmatically unless absolutely necessary, as it can disrupt the user's session state.

