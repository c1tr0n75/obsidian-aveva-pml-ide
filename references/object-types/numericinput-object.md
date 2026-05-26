# NUMERICINPUT Gadget

The `NUMERICINPUT` gadget (also known as a spin box or numeric up/down) allows users to input or select a number within a specific range and step increment.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `val` | REAL | The current numeric value of the gadget. |
| `range` | ARRAY | An array defining the `[Min, Max, Step]` values. |
| `ndp` | REAL | Read-only. The number of decimal places displayed. |
| `editable`| BOOLEAN | If `True`, the user can type values directly into the field. |
| `modifiedEvents` | BOOLEAN | If `True`, the gadget triggers a callback on every change. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `SetRange(range, ndp)`| NO RESULT | Sets the `[Min, Max, Step]` array and the number of decimal places. |

## Code Examples

### Defining a Numeric Input on a Form
```pml
setup form !!myRangeForm
    title 'Parameter Input'
    
    -- Label + Numeric Input with range 0 to 100, step 5, 2 decimal places
    numericinput .thickness 'Plate Thickness: ' range 0 100 step 5 ndp 2
    
    button .apply 'Apply' call '!this.apply()'
exit

define method .apply()
    !val = !this.thickness.val
    $p Applying thickness: $!val
endmethod
```

### Dynamically Changing Range
```pml
!newRange = object ARRAY()
-- Min
!newRange.Append(10)
-- Max
!newRange.Append(500)
-- Step
!newRange.Append(0.5)

!!myRangeForm.thickness.setRange(!newRange, 1)
```

## Best Practices
1.  **Validation**: The gadget automatically rounds typed-in values to the nearest valid `Step` within the `Range`. You don't need to manually validate that the input is within bounds.
2.  **NDP (Decimal Places)**: Set `NDP 0` for integer-only inputs.
3.  **Callback Efficiency**: If your form performs heavy calculations, set `modifiedEvents` to `False` and only read the `.val` when a 'Submit' or 'Apply' button is clicked to avoid UI lag.
4.  **Enter Key**: Pressing `ENTER` in a `NUMERICINPUT` field triggers a `SELECT` event. Use this to trigger an action if the user prefers typing over clicking arrows.

