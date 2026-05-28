# FORMAT Object

The `FORMAT` object controls the precision, units, and representation (labels, fractions) when converting REAL values to STRINGs and vice versa. It is essential for handling physical dimensions (Length, Area, Volume) and coordinate data.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Dimension` | STRING | The measurement type: `'L'`, `'L2'`, `'L3'`, or `'NONE'`. |
| `DP` | REAL | Number of Decimal Places for decimal output. |
| `Fraction` | BOOLEAN | If TRUE, outputs values as Imperial fractions (e.g., `1 1/2`). |
| `Denominator` | REAL | Maximum denominator for fractions (e.g., `16`, `32`, `64`). |
| `Label` | STRING | Unit label suffix (e.g., `'mm'`, `'m'`, `'IN'`). |
| `TrailZeros` | BOOLEAN | If FALSE, removes unnecessary trailing zeros. |
| `ENU` | BOOLEAN | For positions: TRUE for `'E 100 N 200 U 300'`, FALSE for `'X 100 Y 200 Z 300'`. |
| `CompSeparator`| STRING | Separator for multi-component data (Positions/Directions). |
| `NextFormat` | STRING | Name of an alternative format to use if the value is very small. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Format([type])` | FORMAT | Constructor. `type` can be a dimension string or unit name. |
| `String(real)` | STRING | Converts a REAL value to a formatted string. |
| `Real(string)` | REAL | Parses a formatted string into a REAL value. |

## Code Examples

### Formatting Distance for Display
```pml
!fmt = object FORMAT('L')
!fmt.DP = 1
!fmt.Label = 'mm'

!val = 150.256
!res = !val.String(!fmt)
-- Outputs: "150.3mm"
$p Result: $!res
```

### Working with Imperial Units
```pml
!fmt = object FORMAT('L')
!fmt.Fraction = TRUE
!fmt.Denominator = 16
!fmt.Label = '"'

-- 1.5 inches in mm
!val = 25.4 * 1.5
!res = !val.String(!fmt)
-- Outputs: "1 1/2\""
$p Result: $!res
```

### Coordinate Formatting
```pml
!pos = !!CE.Position
!fmt = object FORMAT('NONE')
-- Use X Y Z
!fmt.ENU = FALSE
!fmt.CompSeparator = ', '

!posStr = !pos.String(!fmt)
-- Outputs: "X 1200.5, Y -500.0, Z 0.0"
$p Position: $!posStr
```

## Best Practices
1.  **System Defaults**: Access the system default format using `!!Fmsys.DefaultFormat()` to ensure consistency with the user's project settings.
2.  **Dimension Awareness**: Always set the `.Dimension` property when working with physical values to ensure the correct unit conversions are applied automatically.
3.  **Parsing Safety**: When converting strings back to reals, use a `FORMAT` object that matches the expected input style to avoid "Invalid units" errors.
4.  **Trailing Zeros**: Set `.TrailZeros = FALSE` for cleaner reports where high precision is not required for integer-like values.

