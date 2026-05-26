# SELECTOR Gadget

The `SELECTOR` gadget is a specialized UI element used for picking one or more items from a displayed list. It is functionally similar to a `LIST` gadget but often used in different layout contexts (e.g., sidebars or toolbars).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Val` | REAL / ARRAY | The index of the selected item(s). `0` means no selection. |
| `DText` | ARRAY | The array of displayed strings in the selector. |
| `RText` | ARRAY | The array of replacement (hidden) strings for logic/queries. |
| `PickedField` | REAL | (Read-only) The index of the item that was just interactively clicked. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Add(dtext, [rtext])`| NO RESULT | Appends a new item to the selector. |
| `Clear()` | NO RESULT | Removes all items from the gadget. |
| `ClearSelection()`| NO RESULT | Deselects all items while keeping the data. |
| `Select(type, val)`| NO RESULT | Selects an item by matching `DText` or `RText`. |
| `Selection([type])`| STRING / ARRAY| Returns the `RText` (default) or `DText` of the selection. |
| `SetFocus()` | NO RESULT | Moves keyboard focus to the gadget. |

## Code Examples

### Populating a Selector
```pml
selector .mySel 'Choose Category:' width 15
-- ...
!this.mySel.DText = split('Piping|Structural|Equipment', '|')
!this.mySel.RText = split('PIPE|STRU|EQUI', '|')
```

### Handling Selection
```pml
define method .OnCategorySelect(!gadget is GADGET, !action is STRING)
    !cat = !gadget.Selection()
    if (!cat.Unset()) return
    
    !!Alert.Message('Searching for ' + !cat + ' elements...')
endmethod
```

## Best Practices
1.  **Selection Mode**: Use the `multi` keyword in the gadget definition if you need the user to select more than one item at a time.
2.  **RText usage**: Use `RText` to store the internal database types or commands, keeping `DText` for user-friendly localized strings.
3.  **Clear before Refresh**: If you are repopulating the selector dynamically based on another gadget's selection, call `.Clear()` first to ensure no stale data remains.
4.  **UI Feedback**: Use `.SetFocus()` after a form action to return the user's attention to the primary selection element.

