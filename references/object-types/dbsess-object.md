# DBSESS Object

The `DBSESS` object represents a specific save-session within a database, providing details about when data was saved, by whom, and any associated comments.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Number` | REAL | The unique session number (incremental). |
| `Date` | DATETIME | The date and time when the session was created (Save Work). |
| `Author` | STRING | The name of the user who performed the Save Work. |
| `User` | STRING | Alias for `Author`. |
| `Comment` | STRING | The comment entered by the user during the Save Work operation. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `String()` | STRING | Returns a summarized string of the session details. |

## Code Examples

### Listing Sessions for a Database
```pml
!db = object DB(/*1/101)
!sessions = !db.Sessions()

do !s values !sessions
    !sessNum = !s.Number
    !sessAuth = !s.Author
    !sessDate = !s.Date
    $p Session #$!sessNum by $!sessAuth on $!sessDate
    if (!s.Comment.Length() > 0) then
        !sessComm = !s.Comment
        $p   Comment: $!sessComm
    endif
enddo
```

### Checking the Last User to Modify an Element
```pml
!ce = !!CE
!db = !ce.Db()
!lastSess = !db.Lastsession()

!ceName = !ce.name
!lastUser = !lastSess.User
$p The database containing $!ceName was last saved by $!lastUser
```

## Best Practices
1.  **Auditing**: Use `DBSESS` to track changes over time. However, note that sessions only record *when* the database was saved, not specifically which elements were changed in that session (unless compared against previous sessions).
2.  **Date Handling**: The `.Date` member is a `DATETIME` object. Use a `DATEFORMAT` if you need to present this date in a specific regional format.
3.  **Comments**: Encourage users to provide meaningful comments during Save Work to make the `DBSESS` information more valuable for project auditing.

