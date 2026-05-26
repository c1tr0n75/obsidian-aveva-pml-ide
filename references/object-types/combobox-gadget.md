# COMBOBOX Gadget

The `COMBOBOX` gadget combines an editable text field with a drop-down option list. It is highly versatile for selecting from a list or entering a custom value.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Val` | REAL | Get/Set the index of the selected option (1-based). `0` for no selection. |
| `DText` | ARRAY | Get/Set the entire list of display texts. |
| `DText[n]` | STRING | Get the display text of the nth option. |
| `RText` | ARRAY | Get/Set the entire list of replacement (internal) texts. |
| `RText[n]` | STRING | Get the replacement text of the nth option. |
| `Editable` | BOOLEAN | Get/Set whether the user can type custom text into the display field. |
| `Count` | REAL | Returns the number of items in the list. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Add(dtext, [rtext])` | NO RESULT | Appends an item to the list. `rtext` defaults to `dtext`. |
| `Clear()` | NO RESULT | Clears all items from the list. |
| `Clear(index/dtext)` | NO RESULT | Removes a specific item by index or display text. |
| `Select(type, value)` | NO RESULT | Selects an item. `type` is `'DTEXT'` or `'RTEXT'`, `value` is the string to match. |
| `Selection([type])` | STRING | Returns the `'RTEXT'` (default) or `'DTEXT'` of the current selection. |
| `DisplayText()` | STRING | Returns the text currently shown in the display field. |
| `SetDisplayText(text)`| NO RESULT | Sets the text in the display field (if `Editable` is TRUE). |
| `Refresh()` | NO RESULT | Refreshes the gadget display. |
| `SetFocus()` | NO RESULT | Moves keyboard focus to the gadget. |

## Code Examples

### Initializing a ComboBox
```pml
setup form !!MyForm
    combobox .myCombo 'Choose Site:' width 20 editable
exit

define method .MyForm()
    !this.myCombo.Add('Site A', '/SITE-A')
    !this.myCombo.Add('Site B', '/SITE-B')
    -- Select Site A by default
    !this.myCombo.val = 1
endmethod
```

### Handling Selection Change
```pml
-- Callback for ComboBox
define method .onComboChange()
    !selectedVal = !this.myCombo.Selection()
    $p User selected replacement text: $!selectedVal
    
    !customText = !this.myCombo.DisplayText()
    $p Custom text entered: $!customText
endmethod
```

## Best Practices
1.  **DText vs RText**: Use `DText` for user-friendly labels and `RText` for internal values like database references or IDs.
2.  **Editable Status**: If `Editable` is FALSE, the gadget behaves like a standard `OPTION` gadget. If TRUE, the user can type values not present in the list.
3.  **Zero Selection**: If the gadget was defined with `ZEROSELECTION`, you can set `.val = 0` to clear the selection. Otherwise, setting it to 0 may raise an error.
4.  **Performance**: For very large lists, consider using a `LIST` gadget or a searchable popup menu instead of a `COMBOBOX` to improve performance.

