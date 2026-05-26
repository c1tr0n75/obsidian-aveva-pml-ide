# TEXT Gadget

The `TEXT` gadget is the primary input element for strings, numbers, or boolean values. It supports data validation, formatting, and restricted input (e.g., passwords).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Val` | ANY | The value currently held in the gadget (String, Real, or Boolean). |
| `Editable` | BOOLEAN | Get/Set whether the user can interactively edit the text. |
| `DataType` | STRING | (Read-only) Returns the defined data type (`'STRING'`, `'REAL'`, etc.). |
| `Format` | STRING | (Read-only) The name of the `FORMAT` object used for unit conversion. |
| `Echo` | BOOLEAN | (Read-only) Returns `False` if the gadget is in `noEcho` (password) mode. |
| `ValidateCall`| STRING | Get/Set the name of the validation callback function. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Clear()` | NO RESULT | Empties the gadget's contents. |
| `SetFocus()` | NO RESULT | Moves the keyboard cursor to this gadget. |
| `SetValue(val, [v])`| NO RESULT | Programmatically sets the value. If `v` is true, runs the validation callback. |
| `SetEditable(bool)` | NO RESULT | Toggles the editable status of the field. |
| `Name()` | STRING | Returns the gadget's name. |
| `FullName()` | STRING | Returns the full path (e.g., `!!Form.myText`). |

## Code Examples

### Defining and Using a Numeric Text Field
```pml
text .qty 'Quantity:' is REAL format !!Fmsys.Format.Number width 10
-- ...
-- Sets the value
!this.qty.Val = 15.5
-- Returns 15.5 as a REAL
!currentValue = !this.qty.Val
```

### Password Input
```pml
text .pwd 'Password:' noEcho width 20
-- ...
-- Characters shown as * but Val is the raw string
!password = !this.pwd.Val
```

### Validation Callback
```pml
-- In form setup
!this.email.ValidateCall = '!this.OnValidateEmail()'

-- In form method
define method .OnValidateEmail(!gadget is GADGET)
    !val = !gadget.Val
    if (!val.Match('*@*').Not()) then
        !!Alert.Error('Invalid email format.')
        !gadget.SetFocus()
    endif
endmethod
```

## Best Practices
1.  **Strict Typing**: Always define the data type (`is STRING`, `is REAL`) to ensure the `Val` member returns the expected object type, reducing `object.String()` or `string.Real()` conversion errors.
2.  **Format Objects**: Use `FORMAT` objects for numeric fields to handle project units (e.g., converting '1 1/2' string into a `REAL` 1.5).
3.  **Read-Only State**: Use `is REAL editable false` for display-only calculated values that need to look consistent with other input fields.
4.  **HandleModify**: Use `SetEditable('HANDLEMODIFY', 2)` if you need the callback to fire on every single keystroke instead of only when the user presses Enter or leaves the field.

