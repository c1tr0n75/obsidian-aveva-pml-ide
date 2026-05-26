# RTOGGLE Gadget (Radio Button)

The `RTOGGLE` gadget represents a single radio button. In PML, radio buttons are grouped within a `FRAME`. Only one `RTOGGLE` within a frame can be selected at a time. Selecting one automatically deselects the others in the same group.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Val` | BOOLEAN | `True` if the radio button is selected, `False` otherwise. |
| `Index` | REAL | (Read-only) The 1-based index of the button within its parent frame. |
| `onVal` | STRING | The custom value returned when the button is ON (default: `'ON'`). |
| `offVal` | STRING | The custom value returned when the button is OFF (default: `'OFF'`). |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Name()` | STRING | Returns the gadget's name. |
| `FullName()` | STRING | Returns the full path (e.g., `!!Form.Frame.Button1`). |
| `Owner()` | FORM | Returns a reference to the owning form. |
| `Shown()` | BOOLEAN | Returns true if the gadget is visible. |

## Code Examples

### Grouping Radio Buttons in a Frame
```pml
frame .grp1 'Select Mode'
    rtoggle .opt1 'Design' at x0 y0
    rtoggle .opt2 'Draft'
    rtoggle .opt3 'Review'
exit

-- Set default selection
!this.grp1.opt2.Val = true
```

### Checking the Selected Option
```pml
-- Inside a method
!mode = ''
if (!this.grp1.opt1.Val) then
    !mode = 'DESIGN'
elseif (!this.grp1.opt2.Val) then
    !mode = 'DRAFT'
else
    !mode = 'REVIEW'
endif
```

## Best Practices
1.  **Frame Dependency**: Always define `RTOGGLE` gadgets inside a `FRAME`. The frame acts as the logical container for the exclusive selection behavior.
2.  **Custom Values**: Use the `STATES` keyword in the definition to assign meaningful strings to `onVal` and `offVal`. This can simplify logic when mapping UI selections to database types.
3.  **Horizontal/Vertical Layout**: Use `AT` coordinates or the `COLUMN` keyword within the frame to align radio buttons neatly.
4.  **Callbacks**: You can assign a callback to the parent `FRAME` to handle any change in the radio group, rather than assigning individual callbacks to each `RTOGGLE`.

