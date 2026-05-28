# DBREF Object

The `DBREF` object represents a reference to an element in the AVEVA database. It is the primary way to interact with design data, allowing attribute querying and model navigation.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Dbref(id)` | DBREF | Constructor. `id` can be a name (e.g., `'/SITE-1'`) or a RefNo (e.g., `'=123/456'`). |
| `Attribute(name)` | ANY | Returns the value of the named attribute or pseudo-attribute. |
| `Attributes()` | ARRAY | Returns a list of all valid attribute names for the referenced element. |
| `BadRef()` | BOOLEAN | Returns TRUE if the reference is invalid or cannot be resolved. |
| `IsNull()` | BOOLEAN | Returns TRUE if the reference is `'NULREF'`. |
| `Db()` | DB | Returns the `DB` object containing the referenced element. |
| `Owner()` | DBREF | Returns the parent (owner) of the referenced element. |
| `MCount()` | REAL | Returns the number of child members of the element. |
| `String()` | STRING | Returns the string representation (Name or RefNo). |

## Navigation & Attribute Access
`DBREF` objects support direct attribute access via dot notation and relative navigation:

```pml
!ref = !!CE
-- Query attribute
!name = !ref.name
-- Navigate to owner
!parent = !ref.owner
-- Navigate to next sibling
!next = !ref.next
-- Navigate to first child
!first = !ref.first
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

### Checking for Null References
```pml
!owner = !!CE.owner
if (!owner.IsNull()) then
    $p The Current Element is at the top of the hierarchy.
endif
```

## Best Practices
1.  **Validation**: Always check `.BadRef()` or `.IsNull()` before accessing attributes to avoid runtime errors.
2.  **Performance**: Querying attributes from a `DBREF` is much faster than using global commands (like `Q NAME`). Use `DBREF` objects whenever possible for data processing.
3.  **Pseudo-attributes**: Leverage pseudo-attributes like `!!CE.db` or `!!CE.owner` for quick navigation without needing complex command syntax.
4.  **Implicit Conversion**: PML often automatically converts strings starting with `/` or `=` into `DBREF` objects when assigned to a variable of that type.

