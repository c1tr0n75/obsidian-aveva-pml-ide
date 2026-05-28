# IDLIST Object

The `IDLIST` object is used to manipulate and query elements stored within an `IDLI` (ID List) database element. These are commonly used for managing sets of elements for reports, drawlists, or bulk operations.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Idlist(dbref)` | IDLIST | Constructor. `dbref` is the database `IDLI` element. |
| `Add(dbref)` | NO RESULT | Adds an element to the list. Validates that the element is "significant" (drawlist-level). |
| `Remove(dbref)` | NO RESULT | Removes an element from the list. |
| `Clear()` | NO RESULT | Removes all elements from the list. |
| `Results()` | ARRAY | Returns an array of all `DBREF` objects in the ID list. |

## Code Examples

### Managing a Project ID List
```pml
-- An IDLI element
!idli = /PROJECT_REVISION_LIST
!idList = object IDLIST(!idli)

-- Add current element to the list
!idList.Add(!!CE)

-- Print all items in the list
!items = !idList.Results()
do !m values !items
    !mName = !m.name
    $p Item in list: $!mName
enddo
```

## Best Practices
1.  **Significant Elements**: `IDLIST` only accepts elements that can be part of a drawlist. If you try to add a low-level child (like a `TUBI`), the object may automatically resolve to the parent `PIPE` or `BRAN`.
2.  **Database Persistence**: Unlike the `SELECTION` object, which is transient (session-only), an `IDLIST` is backed by a database element (`IDLI`). Changes made via the `IDLIST` object are saved to the database during a "Save Work" operation.
3.  **Drawlist Interaction**: Use `IDLIST` when you need to programmatically define what appears in a specific 3D view or report that is driven by an `IDLI` element.

