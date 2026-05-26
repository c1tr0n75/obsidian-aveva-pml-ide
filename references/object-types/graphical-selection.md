# Selection Object (Graphical Selection)

The `Selection` object (often referred to as the Graphical Selection) allows PML scripts to interact with the set of elements currently highlighted/selected in the 3D graphical views.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Add(dbref)` | NO RESULT | Adds a specific database element to the current selection set. |
| `Remove(dbref)` | NO RESULT | Removes a specific element from the selection set. |
| `Clear()` | NO RESULT | Deselects all elements in the current selection set. |
| `Results()` | ARRAY | Returns an array of `DBREF` objects representing all selected elements. |
| `Size()` | REAL | Returns the number of elements currently selected. |

## Code Examples

### Querying the Current 3D Selection
```pml
!sel = object SELECTION()
!items = !sel.Results()

if (!items.Size() EQ 0) then
    !!Alert.Message('Please select something in the 3D view first.')
    return
endif

do !ref values !items
    !refName = !ref.name
    $p Selected item: $!refName
enddo
```

### Programmatically Selecting Elements
```pml
!sel = object SELECTION()
-- Start fresh
!sel.Clear()

!myPipe = /PIPE-01
-- Highlight the pipe in 3D
!sel.Add(!myPipe)
```

## Best Practices
1.  **Context Awareness**: Use the `Selection` object to create tools that act on "what the user is looking at," making scripts feel integrated with the core AVEVA E3D/Design workflow.
2.  **Performance**: If working with very large selection sets (thousands of elements), be aware that retrieving `.Results()` and iterating can be slow.
3.  **Visual Feedback**: Remember that `Add()` and `Remove()` provide immediate visual feedback to the user in the 3D canvas. Use `Clear()` if you want to ensure no "leftover" selections interfere with your script's logic.
4.  **Sync with CE**: The "Current Element" (`!!CE`) is not always the same as the "Graphical Selection". A user might select multiple items in 3D, but only one is the "Current Element" for command-line purposes.

