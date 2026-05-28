# COLUMNFORMAT Object

The `COLUMNFORMAT` object is used within a `REPORT` to define the visual presentation of a specific column, including its width, alignment, and numeric precision.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `ColumnFormat()` | COLUMNFORMAT | Constructor. Initializes a new format object. |
| `Alignment(align)` | NO RESULT | Sets alignment: `'LEFT'`, `'RIGHT'`, or `'CENTRE'`. |
| `Alignment()` | STRING | Returns the current alignment. |
| `Width(chars)` | NO RESULT | Sets the column width in characters. |
| `Width()` | REAL | Returns the current column width. |
| `Precision(digits)` | NO RESULT | Sets the number of decimal places for numeric values. |
| `Precision()` | REAL | Returns the current precision. |
| `Visible(state)` | NO RESULT | Sets whether the column is visible in the report output. |

## Code Examples

### Formatting a Report
```pml
!report = object REPORT('MyReport')
!table = object TABLE('MyData')
!report.Table(!table)

-- Create a format for the first column
!fmt = object COLUMNFORMAT()
!fmt.Width(20)
!fmt.Alignment('LEFT')

-- Apply format to report column 1
!report.ColumnFormat(1, !fmt)
```

### Setting Precision for Numeric Data
```pml
!numFmt = object COLUMNFORMAT()
!numFmt.Precision(2)
!numFmt.Alignment('RIGHT')

-- Apply to column 3 (e.g., Weight or Length)
!report.ColumnFormat(3, !numFmt)
```

## Best Practices
1.  **Alignment**: Use `'RIGHT'` alignment for numeric columns (to align decimals) and `'LEFT'` for text/names.
2.  **Width**: Ensure the width is large enough for the expected data; otherwise, data may be truncated in text-based report outputs.
3.  **Separation of Concerns**: Use `COLUMN` to define *what* data is extracted and `COLUMNFORMAT` to define *how* it looks. This allows the same data table to be presented in multiple reports with different styles.

