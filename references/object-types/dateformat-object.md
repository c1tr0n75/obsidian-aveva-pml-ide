# DATEFORMAT Object

The `DATEFORMAT` object defines how `DATETIME` values are represented as strings. It is also used by report objects to ensure dates are sorted chronologically rather than alphabetically.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `DateFormat(format)` | DATEFORMAT | Constructor. `format` is a template string (e.g., `'D/M/Y'`). |
| `Month(type)` | NO RESULT | Sets month format: `'INTEGER'`, `'BRIEF'` (Jan), or `'FULL'` (January). |
| `Year(digits)` | NO RESULT | Sets year digits: `2` or `4`. |
| `Separator(char)` | NO RESULT | Sets the separator character (e.g., `'/'`, `'-'`, or `' '`). |
| `String(datetime)` | STRING | Returns the formatted string representation of the given `DATETIME`. |

## Code Examples

### Standard Date Formatting
```pml
!dt = object DATETIME('2023-11-05 12:10:00')

-- Create a format: 05/11/23
!fmt1 = object DATEFORMAT('D/M/Y')
!fmt1.month('INTEGER')
!fmt1.year(2)
!formattedDate = !fmt1.string(!dt)
$p Formatted Date: $!formattedDate
```

### Word-based Month and 4-digit Year
```pml
-- Create a format: 5 November 2023
!fmt2 = object DATEFORMAT('D M Y')
!fmt2.month('FULL')
!fmt2.year(4)
!fmt2.separator(' ')
!formattedDate = !fmt2.string(!dt)
$p Formatted Date: $!formattedDate
```

## Best Practices
1.  **Sorting**: When using `TABLE` and `REPORT` objects, assign a `DATEFORMAT` to date columns to ensure they sort correctly by time rather than by the text of the formatted string.
2.  **Consistency**: Use a standard format across your application to avoid confusing the user with different date representations.
3.  **Ambiguity**: Avoid using 2-digit years if your application needs to handle historical or far-future dates, as this can lead to century ambiguity.

