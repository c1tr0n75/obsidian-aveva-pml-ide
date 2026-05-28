# LIST Gadget

The `LIST` gadget displays a scrollable list of items. It supports single or multiple selection, and can be configured with multiple columns using TAB-separated strings or specific methods.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Val` | REAL / ARRAY | The index of the selected item(s). `0` means no selection. |
| `Count` | REAL | (Read-only) The total number of items in the list. |
| `DText` | ARRAY | The array of displayed strings in the list. |
| `RText` | ARRAY | The array of replacement (hidden) strings associated with each item. |
| `PickedField` | REAL | (Read-only) The index of the item that was just interactively clicked. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Add(dtext, [rtext])`| NO RESULT | Appends a new item to the list. |
| `Clear()` | NO RESULT | Removes all items and headings from the list. |
| `ClearSelection()`| NO RESULT | Deselects all items while keeping the list data. |
| `Select(type, val)`| NO RESULT | Selects an item by matching `DText` or `RText`. |
| `Selection([type])`| STRING / ARRAY| Returns the `RText` (default) or `DText` of the selected item(s). |
| `SetHeadings(arr)` | NO RESULT | Defines column headers (Array of Strings). |
| `SetRows(arr)` | NO RESULT | Populates the list using an Array of Arrays (rows). |

## Code Examples

### Populating a Single-Column List
```pml
list .myList 'Pick a Site:' width 20 height 10
-- ...
!items = !!collectAll('SITE')
!display = ARRAY()
!refs = ARRAY()

do !site values !items
    !display.Append(!site.name)
    !refs.Append(!site.dbref().String())
enddo

!this.myList.DText = !display
!this.myList.RText = !refs
```

### Handling Selections
```pml
define method .OnListSelect(!gadget is GADGET, !action is STRING)
    -- Returns RText
    !selectedRef = !gadget.Selection()
    if (!selectedRef.Unset()) return
    
    !!CE = !selectedRef.Dbref()
endmethod
```

## Best Practices
1.  **DText vs RText**: Use `DText` for user-friendly labels and `RText` for unique identifiers (like `DBREF` strings). This separates the UI display from the underlying data logic.
2.  **Multi-Column Alignment**: For complex grids, use the `SetHeadings` and `SetRows` methods instead of manual TAB concatenation for better performance and readability.
3.  **Zero Selection**: Use the `zeroSelection` keyword in the gadget definition if you want to allow the user to have no items selected.
4.  **Performance**: If the list has thousands of items, populating it via `.DText = !myArray` is significantly faster than calling `.Add()` in a loop.

