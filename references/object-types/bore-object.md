# BORE Object

The `BORE` object represents a nominal pipe size (bore). It handles conversions between different units (Metric vs Imperial) automatically.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Size` | REAL | Get/Set the bore size value. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Bore(value)` | BORE | Constructor. Creates from REAL or STRING (e.g., `'100'` or `'4IN'`). |
| `EQ(other)` | BOOLEAN | Returns TRUE if bores are equal. |
| `GT(other)` | BOOLEAN | Returns TRUE if this bore is greater than the other. |
| `GEQ(other)` | BOOLEAN | Returns TRUE if this bore is greater than or equal to the other. |
| `LT(other)` | BOOLEAN | Returns TRUE if this bore is less than the other. |
| `LEQ(other)` | BOOLEAN | Returns TRUE if this bore is less than or equal to the other. |
| `Real()` | REAL | Returns the numeric value of the bore in current units. |
| `String([format])` | STRING | Returns the bore as a formatted string. |

## Code Examples

### Creating and Comparing Bores
```pml
!b1 = object BORE(100)
!b2 = object BORE('4IN')

if (!b1.EQ(!b2)) then
    $p Bores are equivalent (100mm approx 4 inches)
endif
```

### Checking Bore Size in a Loop
```pml
!limit = object BORE('80')
do !pipe values !pipes
    !bore = !pipe.bore
    if (!bore.GT(!limit)) then
        !pipeName = !pipe.name
        $p Large pipe found: $!pipeName
    endif
enddo
```

## Best Practices
1.  **Unit Sensitivity**: Comparison methods like `EQ` and `GT` are unit-aware. Comparing `BORE(100)` (Metric) with `BORE('4IN')` (Imperial) will work correctly based on the project's bore tolerance and conversion settings.
2.  **String Formatting**: Use `.String()` to get the display value (e.g., "100" or "4NB") for reports or UI gadgets.
3.  **Member Access**: Prefer using `.Size` for direct numeric access and the comparison methods (`EQ`, `GT`, etc.) for logic to maintain unit consistency.

