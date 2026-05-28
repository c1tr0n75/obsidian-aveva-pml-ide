# BAR Gadget

The `BAR` gadget is used to define a menu bar at the top of a PML form. It contains a series of pull-down menus.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Add(dText, menuName)` | NO RESULT | Appends a new menu field to the bar. `menuName` must be a valid `MENU` object name. |
| `Clear()` | NO RESULT | **Deprecated**. Removes all fields from the bar. |
| `Clear(dText)` | NO RESULT | **Deprecated**. Removes all fields after and including the one with `dText`. |
| `FieldProperty(fld, prop)` | BOOLEAN | Returns the value of a property (`ACTIVE` or `VISIBLE`) for a specific field. |
| `FullName()` | STRING | Returns the fully qualified name of the gadget (e.g., `!!MyForm.bar`). |
| `InsertAfter(refFld, dText, menuName)`| NO RESULT | Inserts a new menu field immediately after the reference field. |

## Code Examples

### Defining a Menu Bar in a Form
```pml
setup form !!MyForm
    -- Define a BAR gadget
    bar .mainBar
    
    -- Define menus elsewhere or inline
    menu .fileMenu popup
        !this.fileMenu.add( 'CALLBACK', 'Open...', '!this.open()' )
        !this.fileMenu.add( 'CALLBACK', 'Exit', '!this.close()' )
    endmenu

    -- Add menus to the BAR
    !this.mainBar.add( 'File', '.fileMenu' )
exit
```

### Controlling Menu Visibility
```pml
-- Hide the 'File' menu field
!this.mainBar.active( 'File', false )
```

## Best Practices
1.  **Unique DTEXT**: Ensure the `dText` (display text) used for each field is unique within the bar to avoid ambiguity when calling methods like `InsertAfter` or `FieldProperty`.
2.  **Menu Naming**: Always use the member name (e.g., `.myMenu`) when adding menus to the bar, ensuring they are defined within the same form or globally.
3.  **Deprecation**: Avoid using the `Clear()` methods as they are deprecated; instead, define the bar structure statically within the form `setup`.

