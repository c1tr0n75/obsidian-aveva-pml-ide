# TOGGLE Gadget (Checkbox)

The `TOGGLE` gadget represents a checkbox or a latching button. It has two states: `True` (Selected/ON) and `False` (Unselected/OFF).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Val` | BOOLEAN | Get/Set the state of the toggle. |
| `Background`| STRING | Get/Set the background color. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `AddPixmap(path, [sel, inact])`| NO RESULT| Defines images for different toggle states. |
| `SetFocus()` | NO RESULT | Moves keyboard focus to the gadget. |
| `Name()` | STRING | Returns the gadget's simple name. |
| `FullName()` | STRING | Returns the full path (e.g., `!!Form.myCheck`). |
| `Shown()` | BOOLEAN | Returns true if the gadget is currently visible. |

## Code Examples

### Basic Checkbox Usage
```pml
toggle .chkAll 'Select All Elements' at x0 y0
-- ...
if (!this.chkAll.Val) then
    !!Alert.Message('Please check the box to continue.')
    return
endif
```

### Toggle with Custom Pixmap (Latching Button)
```pml
toggle .btnLock pixmap /C:/AVEVA/Images/unlock.png width 32 height 32
-- ...
define method .OnLock(!gadget is GADGET, !action is STRING)
    if (!gadget.Val) then
        !gadget.AddPixmap('/C:/AVEVA/Images/lock.png')
    else
        !gadget.AddPixmap('/C:/AVEVA/Images/unlock.png')
    endif
endmethod
```

## Best Practices
1.  **Boolean Logic**: Use `TOGGLE` for binary settings (Yes/No, Enable/Disable). For mutually exclusive choices between 3 or more options, use `RTOGGLE` or `OPTION` gadgets.
2.  **Visual States**: If using pixmaps, ensure you provide at least two different images (or one image and a clear "depressed" button state) so the user can visually distinguish the ON and OFF states.
3.  **Labels**: Use clear, concise labels. For checkboxes, the label should describe the action or state that is "enabled" when checked.
4.  **Callbacks**: Use the toggle's callback to immediately update the state of other gadgets (e.g., disabling a text input if a "Use Defaults" toggle is checked).

