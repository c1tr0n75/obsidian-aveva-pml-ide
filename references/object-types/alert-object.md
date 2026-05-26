# ALERT Object

The `ALERT` object (usually accessed via the global `!!Alert`) provides a set of blocking dialog boxes to interact with the user, display messages, and gather simple inputs.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Confirm(message, [x, y])` | STRING | Shows a CONFIRM dialog with 'YES' and 'NO'. Returns `'YES'` or `'NO'`. |
| `Error(message, [x, y])` | STRING | Shows an ERROR dialog. Returns `'YES'`. |
| `Message(message, [x, y])` | STRING | Shows an information MESSAGE dialog. Returns `'YES'`. |
| `Question(message, [x, y])` | STRING | Shows a QUESTION dialog with 'YES', 'NO', and 'CANCEL'. Returns choice. |
| `Warning(message, [x, y])` | STRING | Shows a WARNING dialog. Returns `'YES'`. |
| `Input(prompt, default, [x, y])` | STRING | Shows an INPUT dialog. Returns the entered string. |

*Note: `x` and `y` are optional screen positions.*

## Code Examples

### Simple Message and Confirmation
```pml
!!Alert.Message('Process completed successfully.')

!response = !!Alert.Confirm('Do you want to delete the selected elements?')
if (!response eq 'YES') then
    -- perform deletion
endif
```

### Gathering User Input
```pml
!name = !!Alert.Input('Please enter your name:', 'Guest')
if (!name.empty().not()) then
    $p Welcome, $!name
endif
```

### Error Handling with Alerts
```pml
handle any
    !!Alert.Error('An unexpected error occurred: ' & !!error.text)
endhandle
```

## Best Practices
1.  **Context**: Use the appropriate alert type (`Error` vs `Warning` vs `Message`) to provide the correct visual cue to the user.
2.  **Positioning**: Avoid hardcoding `x` and `y` coordinates unless necessary, as they might not work well on all screen resolutions.
3.  **Input Validation**: Always check the result of `!!Alert.Input` for empty strings or unexpected values.

