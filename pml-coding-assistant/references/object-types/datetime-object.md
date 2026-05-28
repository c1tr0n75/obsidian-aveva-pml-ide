# DATETIME Object

The `DATETIME` object represents a specific point in time, handling both Local and UTC (Universal Coordinated Time) zones.

## Methods

### Constructors
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `DateTime()` | DATETIME | Creates a new object with the current system date and time. |
| `DateTime(isUtc)` | DATETIME | Creates current date/time as Local (`FALSE`) or UTC (`TRUE`). |
| `DateTime(string)` | DATETIME | Creates from string (e.g., `'12:00 1 May 2023'`). Add `' UTC'` suffix for UTC. |
| `DateTime(y, m, d, [h, min, s, isUtc])`| DATETIME | Creates from numeric components. `m` can be REAL (1-12) or STRING ('Jan'). |

### Property Accessors
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Year()` | REAL | Returns the 4-digit year. |
| `Month()` | REAL | Returns the month number (1-12). |
| `MonthString()` | STRING | Returns the full month name (e.g., `'January'`). |
| `Date()` | REAL | Returns the day of the month (1-31). |
| `Hour()` | REAL | Returns the hour (0-23). |
| `Minute()` | REAL | Returns the minute (0-59). |
| `Second()` | REAL | Returns the second (0-59). |

### Zone & Comparison
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `IsUTC()` | BOOLEAN | Returns TRUE if the object is in UTC. |
| `ToUTC()` | DATETIME | Returns a new `DATETIME` converted to UTC. |
| `ToLocal()` | DATETIME | Returns a new `DATETIME` converted to Local time. |
| `EQ/GT/GEQ/LT/LEQ(other)`| BOOLEAN | Chronological comparisons. Correctly handles Local vs UTC. |
| `String()` | STRING | Returns a default string representation including seconds. |

## Code Examples

### Working with Current Time
```pml
!now = object DATETIME()
!h = !now.Hour()
!m = !now.Minute()
$p Current time is $!h : $!m
```

### Parsing and Comparing Dates
```pml
!deadline = object DATETIME('17:00 31 Dec 2023')
!current = object DATETIME()

if (!current.GT(!deadline)) then
    !!Alert.Warning('The deadline has passed!')
endif
```

### UTC Conversion
```pml
!local = object DATETIME()
!utc = !local.ToUTC()
$p Local time: $!local
$p UTC time:   $!utc
```

## Best Practices
1.  **Comparisons**: Use the built-in comparison methods (`GT`, `LT`, etc.) rather than converting to strings and comparing, as the methods are time-zone aware.
2.  **UTC for Persistence**: When storing timestamps in a database or external file, it is best practice to convert them to UTC first to avoid issues with Daylight Savings or different server time zones.
3.  **Parsing**: When creating from a string, use the most unambiguous format possible (e.g., `'1 May 2023'`) to avoid regional date format confusion (MM/DD vs DD/MM).

