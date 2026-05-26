# OPTION Gadget

The `OPTION` gadget (often called a "combo box" or "drop-down") allows users to select a single value from a list. It is more compact than a `LIST` gadget as it only shows the selected item until clicked.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Val` | REAL | The index of the selected item (1-based). `0` if no selection. |
| `Count` | REAL | (Read-only) The total number of items in the drop-down. |
| `DText` | ARRAY | The array of displayed strings in the option list. |
| `RText` | ARRAY | The array of replacement (hidden) strings for logic/queries. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Add(dtext, [rtext])`| NO RESULT | Appends a new item to the drop-down. |
| `Clear()` | NO RESULT | Removes all items from the gadget. |
| `ClearSelection()`| NO RESULT | Returns selection to the default (usually the first item). |
| `Select(type, val)`| NO RESULT | Selects an item by matching `DText` or `RText`. |
| `Selection([type])`| STRING | Returns the `RText` (default) or `DText` of the selected item. |
| `DisplayText()` | STRING | Returns the text currently visible in the collapsed gadget. |

## Code Examples

### Initializing an Option Gadget
```pml
option .size 'Bore:' width 10
-- ...
!this.size.DText = split('50mm|80mm|100mm|150mm', '|')
!this.size.RText = split('50|80|100|150', '|')
-- Select '100mm' by default
!this.size.Val = 3
```

### Handling Selection Changes
```pml
define method .OnSizeChange(!gadget is GADGET, !action is STRING)
    -- Gets the RText
    !val = !gadget.Selection()
    if (!val.Unset()) return
    
    $p User selected bore: $!val
endmethod
```

## Best Practices
1.  **DText/RText Separation**: Use `DText` for descriptive labels (e.g., `'Standard Pipe'`) and `RText` for the actual database values (e.g., `'PIPE'`).
2.  **Constructor Population**: Populate the `DText` and `RText` arrays in the form's constructor or `InitCall` to ensure the gadget is ready before the user sees it.
3.  **ZeroSelection**: If you need to allow "No selection," include the `zeroSelection` keyword in the gadget definition. Otherwise, the gadget will always have at least one item selected.
4.  **NoReselect**: Use the `noReselect` keyword if you want to prevent the callback from firing if the user clicks on the item that is already selected.

