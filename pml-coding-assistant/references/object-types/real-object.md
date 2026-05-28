# REAL Object

The `REAL` object represents a number with integer and decimal parts. Critically in PML, a `REAL` can also represent a **physical quantity** (e.g., a distance, an angle, a weight). When a `REAL` has a dimension, it carries its units with it through calculations.

## Constructors

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Real(string)` | REAL | Creates a number from a string. If the string has a unit qualifier (e.g., `'100mm'`), the `REAL` becomes dimensioned. |
| `Real(bool)` | REAL | `True` becomes `1.0`, `False` becomes `0.0`. |
| `Real(real, unit)` | REAL | Creates a new `REAL` with the value of the first argument and the units of the second. |

## Unit & Dimension Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Value()` | REAL | Returns the raw number, stripping away any physical dimension/units. |
| `Dimension()` | MEASURE | Returns the `MEASURE` object (e.g., Distance, Angle). |
| `Units()` | UNIT | Returns the `UNIT` object associated with the value. |
| `Convert(unit)` | REAL | Returns a new `REAL` converted to the specified units. |
| `DBUnits()` | REAL | Returns the value in internal Database Units (e.g., MM for distance). |

## Math & Logical Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `ABS()` | REAL | Absolute value. |
| `INT()` | REAL | Rounds down to the nearest whole number. |
| `NINT()` | REAL | Rounds to the nearest whole number (up or down). |
| `MODULO(n)` | REAL | Returns the remainder of division by `n`. |
| `Between(a, b)` | BOOLEAN | Returns `True` if the value is within the range `[a, b]`. |
| `Cosine()`, `Sine()`| REAL | Trigonometric functions (expects `ANGLE` dimension or numeric). |
| `Sqrt()` | REAL | Square root. |

## String Formatting

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `String()` | STRING | Standard string conversion. |
| `String(format)` | STRING | Converts using a `FORMAT` object settings. |
| `Distance(bool...)` | STRING | specialized distance formatting (e.g., feet/inches). |

## Code Examples

### Unit-Aware Math
```pml
!len1 = object REAL('100mm')
!len2 = object REAL('5inch')
-- PML handles the unit conversion automatically
!total = !len1 + !len2

!totalMm = !total.Convert('MM')
$p Total length in mm: $!totalMm
```

### Rounding and Precision
```pml
!val = 10.75
-- Result: 11
!rounded = !val.NINT()
-- Result: 10
!truncated = !val.INT()

-- Result: '10.75'
!str = !val.String('D2')
```

## Best Practices
1.  **Dimension Safety**: Always check if a `REAL` has units before performing math with raw numbers. Adding a numeric `10` to a dimensioned `100mm` may result in an error or unexpected behavior.
2.  **Comparison**: Use the `.Between()` method for range checks rather than nested `if` statements for better readability.
3.  **Database Units**: When querying attributes directly (e.g., `!!CE.Plength`), the value is usually returned in current session units. Use `.DBUnits()` if you need to perform calculations in the internal system standard (Millimetres).
4.  **Trigonometry**: Ensure variables passed to `Sine()`, `Cosine()`, etc., are either purely numeric or have the `ANGLE` dimension.

