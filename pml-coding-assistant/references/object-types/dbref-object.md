# DBREF Object

The `DBREF` object represents a reference to an element in the AVEVA database. It is the primary way to interact with design data, allowing attribute querying.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Dbref( STRING )` | DBREF | Creates a DBREF object with value set to the given STRING. |
| `Dbref( STRING, FORMAT )` | DBREF | As above, FORMAT argument required for consistency by Forms and Menus. |
| `Attribute(STRING Name)` | ANY | Returns the value of the named attribute. |
| `Attributes()` | ARRAY OF STRING | A DBREF appears to have the attributes of whatever DB elements it is pointing to. |
| `BadRef()` | BOOLEAN | TRUE if DBREF is not valid (cannot navigate to it). |
| `Delete()` | NO RESULT | Deletes the PML DBREF (not the database element it is pointing to). |
| `MCount()` | REAL | Count of number of members of element referenced. |
| `MCount(STRING type)` | REAL | Count of number of members of element referenced of type specified. |
| `String(FORMAT)` | STRING | Convert to STRING using settings in Global FORMAT object. |
| `Line([CUT/UNCUT])` | LINE | Returns the cut/uncut pline of a SCTN/GENSEC element as a bounded line. |
| `PPosition(REAL)` | POSITION | Returns the position of the specified ppoint of a database element. |
| `PDirection(REAL)` | DIRECTION | Returns the direction of the specified ppoint of a database element. |

## Attribute Access
`DBREF` objects support direct attribute access via dot notation:

```pml
!ref = !!CE
-- Query attribute
!name = !ref.name
-- query owner
!parent = !ref.owner
```
## Code Examples

### Querying the Current Element (CE)
```pml
!ref = !!CE
if (!ref.BadRef()) then
    return
endif

!name = !ref.name
!type = !ref.type
$p Element Name: $!name
$p Element Type: $!type
```

### Iterating through Members
```pml
!ref = !!CE
-- Returns ARRAY of DBREFs
!members = !ref.members
do !m values !members
    !mName = !m.name
    !mType = !m.type
    $p Member: $!mName ($!mType)
enddo
```

## Best Practices
**Implicit Conversion**: PML often automatically converts strings starting with `/` or `=` into `DBREF` objects when assigned to a variable of that type.

