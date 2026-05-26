# COLLECTION Object

Source: `https://docs.aveva.com/bundle/engineering/page/962745.html`

The `COLLECTION` object is used to extract database elements from the system using a selection filter (an `EXPRESSION` object), restrictive search types, and scope lists. It is the standard way to perform bulk database queries in PML.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Collection()` | NO RESULT | Constructor. Initializes all object settings. |
| `AddScope(DBREF)` | NO RESULT | Adds the passed DBREF to the current scope list. |
| `AddType(STRING)` | NO RESULT | Adds the passed element type to the current search types. |
| `AppendScope(ARRAY)` | NO RESULT | Appends the passed list of DBREFs to the scope list. |
| `ClearFilter()` | NO RESULT | Empties the filter expression applied to the collection. |
| `ClearScope()` | NO RESULT | Empties the current scope list. |
| `Filter(EXPRESSION)` | NO RESULT | Sets the filter expression to be applied to the collection. |
| `Index(REAL)` | DBREF | Returns the DBREF at the specified index in the results. |
| `Next()` | DBREF | Returns the next DBREF in the results. |
| `Results()` | ARRAY | Executes the collection search and returns an ARRAY of DBREFs. |
| `Scope(COLLECTION)` | NO RESULT | Empties current scope and sets it to the results of the passed Collection. |
| `Scope(DBREF)` | NO RESULT | Empties current scope and makes the passed DBREF the current scope. |
| `Scope(ARRAY)` | NO RESULT | Replaces current scope with the passed list of DBREFs. |
| `Size()` | REAL | Returns the number of elements in the collection results. |
| `Type(STRING)` | NO RESULT | Empties current scope type list and adds the passed element type (e.g., 'EQUI'). |
| `Types()` | ARRAY | Returns an array of the current element types in the collection. |

## Code Examples

### Basic Collection
Collect all Equipment (`EQUI`) within the current element's scope.

```pml
!coll = object COLLECTION()
!coll.Scope(!!CE)
!coll.type('EQUI')
!results = !coll.results()

do !ref values !results
    $p Found: $!ref
enddo
```

### Collection with Filter
Collect all Pipes (`PIPE`) where the attribute `PURP` is set to `PUMP`.

```pml
!coll = object COLLECTION()
!coll.scope(world)
!coll.type('PIPE')

-- Create an expression filter
!exprString = 'PURP EQ |PUMP|'
!filter = object EXPRESSION(!exprString)
handle any
    !!Alert.Error('Invalid expression filter')
    return
endhandle

!coll.filter(!filter)
!results = !coll.results()
!size = !coll.size()
$p Number of pumps found: $!size
```

### Using an Array as Scope
Collect elements from a pre-defined list of references.

```pml
!scopeArr = ARRAY()
!scopeArr.append(/SITE-A)
!scopeArr.append(/SITE-B)

!coll = object COLLECTION()
!coll.scope(!scopeArr)
!coll.type('ZONE')
!zones = !coll.results()
```

## Best Practices

1.  **Expression Safety**: Always wrap `object EXPRESSION()` calls in a `handle any` block to catch syntax errors in the filter string.
2.  **Performance**: Limit the scope as much as possible. Avoid using `world` scope unless absolutely necessary.
3.  **Result Validation**: Always check if the result array is `.empty()` or if the `.size()` is 0 before processing.
4.  **Constructor**: Always initialize with `object COLLECTION()`.
5.  **Type Filtering**: Use specific types (e.g., `PIPE`, `EQUI`) rather than `ALL` for better performance.
