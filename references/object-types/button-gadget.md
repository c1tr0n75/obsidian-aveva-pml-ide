# BUTTON Gadget

The `BUTTON` gadget is a standard UI element that triggers a callback when pressed. It supports three subtypes: `Normal`, `Toggle`, and `Linklabel`.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Background` | REAL/STRING | Set/Get the background color (numeric or name). |
| `Val` | BOOLEAN | For `Toggle` buttons: TRUE when pressed, FALSE when not. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `AddPixmap(f1, [f2, f3])` | NO RESULT | Adds pixmaps for unselected, selected, and inactive states. |
| `FullName()` | STRING | Returns the fully qualified gadget name. |
| `Name()` | STRING | Returns the gadget's local name. |
| `Owner()` | FORM | Returns the owning form object. |
| `SetFocus()` | NO RESULT | Moves keyboard focus to this gadget. |
| `Refresh()` | NO RESULT | Refreshes the display of the gadget. |
| `SetToolTip(text)` | NO RESULT | Sets the tooltip text for the button. |
| `Shown()` | BOOLEAN | Returns TRUE if the gadget is currently shown. |
| `Type()` | STRING | Returns the gadget type (`'BUTTON'`). |
| `SetPopup(menu)` | NO RESULT | Links a popup menu to the button. |
| `GetPickedPopup()` | MENU | Returns the name of the menu picked from a popup. |

## Code Examples

### Standard Button with Callback
```pml
setup form !!MyForm
    button .btnOk 'OK' callback '!this.onOk()'
exit

define method .onOk()
    !!Alert.Message('OK Pressed')
endmethod
```

### Toggle Button Usage
```pml
setup form !!MyForm
    button .toggleBtn toggle 'Enable Feature' callback '!this.onToggle()'
exit

define method .onToggle()
    if (!this.toggleBtn.val) then
        $p Feature Enabled
    else
        $p Feature Disabled
    endif
endmethod
```

### Button with Pixmap
```pml
setup form !!MyForm
    button .imgBtn pixmap /my_icon.png
exit

define method .MyForm()
    !this.imgBtn.AddPixmap('/icons/active.png', '/icons/pressed.png', '/icons/disabled.png')
endmethod
```

## Best Practices
1.  **Subtypes**: Use `Toggle` for binary states and `Linklabel` for hyperlink-style text buttons.
2.  **Validation**: Buttons (including Linklabels) trigger form validation of modified text fields when pressed. Ensure your callbacks handle potential validation errors.
3.  **Pixmaps**: When using pixmaps, ensure they are added in the form's constructor or `setup` block to ensure they are available before the form is displayed.
4.  **Popups**: While buttons support popups via `SetPopup`, it is generally better UX to use an `OPTION` or `SELECTOR` gadget for choice selection unless the popup represents a complex menu.

