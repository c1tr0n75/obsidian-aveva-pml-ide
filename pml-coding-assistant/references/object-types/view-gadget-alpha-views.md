# VIEW Gadget: ALPHA View

The `ALPHA VIEW` is a gadget that embeds a command-line interface (TTY) directly onto a PML form. It is typically used to display system messages, request logs, or provide a command input area within a custom tool.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Channel` | STRING | Get/Set the I/O channel: `'COMMANDS'` or `'REQUESTS'`. |
| `Height` | REAL | (Read-only) Returns the height of the gadget. |
| `Width` | REAL | (Read-only) Returns the width of the gadget. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Clear()` | NO RESULT | Clears all text from the Alpha TTY window. |
| `Refresh()` | NO RESULT | Forces a graphical redraw of the gadget. |
| `SetFocus()` | NO RESULT | Moves keyboard focus to the Alpha gadget for command entry. |
| `RemoveRequests()`| NO RESULT | Deletes the 'requests' channel dissociation. |

## Code Examples

### Embedding a Command Log on a Form
```pml
setup form !!LogWindow
    -- Define an Alpha view to show system output
    view .log ALPHA width 80 height 20
exit

define method .LogWindow()
    !this.log.Channel = 'COMMANDS'
    !this.log.Clear()
endmethod
```

### Auto-Focusing the Command Input
```pml
define method .ShowAndFocus()
    !this.Show()
    !this.log.SetFocus()
endmethod
```

## Best Practices
1.  **Channel Selection**: Use `'COMMANDS'` if you want the view to mirror the main Command Window. Use `'REQUESTS'` for custom interaction logs.
2.  **Clean State**: Call `.Clear()` in the form's `InitCall` or constructor if you want to ensure the log starts fresh each time the form is opened.
3.  **User Experience**: Use `.SetFocus()` after showing a form if the primary purpose of the form is for the user to type commands (e.g., a custom CLI tool).
4.  **Layout**: Alpha views can be quite large. Ensure they are placed in a container or a form layout that can handle resizing gracefully.

