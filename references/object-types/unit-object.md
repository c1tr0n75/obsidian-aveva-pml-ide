# UNIT Object

The `UNIT` object represents a specific unit of measure (e.g., Millimetres, Inches, Kilograms) within a physical dimension (`MEASURE`).

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Unit(string)` | UNIT | Constructor. Creates a unit from a name, description, or hashcode (e.g., `'MM'`, `'INCH'`). |
| `Name()` | STRING | Returns the formal name of the unit used in commands. |
| `ShortName()` | STRING | Returns the abbreviated name (e.g., `'mm'`). |
| `Description()` | STRING | Returns the full descriptive name (e.g., `'Millimetres'`). |
| `Hashcode()` | STRING | Returns the internal 4-character hashcode (e.g., `'MM  '`, `'INCH'`). |
| `Factor()` | REAL | Returns the conversion factor from this unit to the internal database unit. |
| `Enum()` | REAL | Returns a unique integer identifier for the unit. |

## Code Examples

### Querying Unit Properties
```pml
!u = object UNIT('INCH')
!fullName = !u.Description()
!shortName = !u.ShortName()
!factor = !u.Factor()
$p Full Name:  $!fullName
$p Short Name: $!shortName
$p Conversion: $!factor
```

### Manual Unit Conversion
```pml
!mmVal = 25.4
!u = object UNIT('INCH')
-- Convert MM to Inches manually
!inchVal = !mmVal / !u.Factor()

$p 25.4mm is $!inchVal inches.
```

## Best Practices
1.  **Prefer MEASURE**: For most application tasks, use the `MEASURE` object or global `!!Fmsys` unit management rather than calculating conversions manually using `UNIT.Factor()`.
2.  **Ambiguity**: When creating a unit from a string, ensure the string is a valid unit name or abbreviation recognized by the current project's unit schema.
3.  **Compound Units**: Some units are "compound" (e.g., `'MM/S'`). The `.Hashcode()` for these will return `'COMPOUND'`.
4.  **Database Consistency**: Remember that the internal database unit (factor = 1.0) for length is always Millimetres, regardless of the project's default working units.

