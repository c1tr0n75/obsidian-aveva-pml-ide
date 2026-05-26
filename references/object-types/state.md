# STATE Object

The `STATE` object provides an interface for querying and modifying the "Modify Mode" status within AVEVA E3D/Design. It is primarily used when running in graphical mode to toggle the user's ability to interactively move or resize elements.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `State()` | STATE | Constructor. Returns a new state object. |
| `ModifyMode()` | BOOLEAN | Returns `True` if Modify Mode is currently active. |
| `ModifyMode(bool)` | NO RESULT | Sets Modify Mode `On` or `Off`. |
| `EnableModifyMode()`| BOOLEAN | Returns `True` if Modify Mode is enabled (available to be turned on). |
| `EnableModifyMode(bool)`| BOOLEAN | Enables or disables the availability of Modify Mode. |

## Code Examples

### Toggling Modify Mode from a Form
```pml
define method .toggleModify(!gadget is GADGET, !action is STRING)
    !s = object STATE()
    !currentState = !s.ModifyMode()
    
    -- Toggle the state
    !s.ModifyMode(!currentState.Not())
    
    !mode = !s.ModifyMode()
    $p Modify Mode is now: $!mode
endmethod
```

### Safely Disabling Interactions
```pml
!s = object STATE()
if (!s.ModifyMode()) then
    -- Turn it off before running a sensitive automated routine
    !s.ModifyMode(FALSE)
endif

-- Disable the ability to turn it back on during the process
!s.EnableModifyMode(FALSE)

-- ... perform automated logic ...

!s.EnableModifyMode(TRUE)
```

## Best Practices
1.  **Graphical Mode Only**: The `STATE` object and "Modify Mode" are only relevant in graphical sessions (e.g., E3D Design). They do not function in TTY/Batch mode.
2.  **User Experience**: If your script programmatically changes `ModifyMode`, ensure you notify the user or restore their previous state afterwards to avoid confusion.
3.  **Conflict Prevention**: Use `.EnableModifyMode(FALSE)` if your tool relies on elements staying fixed in space while it performs calculations or generation tasks.
4.  **Constructor**: Always create a fresh `object STATE()` to get the most up-to-date information from the application state.

