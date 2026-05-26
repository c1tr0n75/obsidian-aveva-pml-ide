# MEASURE Object

The `MEASURE` object defines a physical dimension (e.g., Length, Weight, Pressure) and manages unit conversions and current working units for the application.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Measure(string)` | MEASURE | Constructor. Parses string like `'MM'`, `'DISTANCE'`, or `'FINV'`. |
| `Name()` | STRING | Returns the unique name of the dimension (e.g., `'L'`, `'PARA'`). |
| `Description()` | STRING | Returns a long description of the dimension. |
| `CurrentUnits()` | UNIT | Returns the `UNIT` object currently active for this dimension. |
| `SetUnits(unit)` | BOOLEAN | Sets the working unit for this dimension. |
| `Suspend()` | BOOLEAN | Suspends unit conversion, forcing the use of raw database units. |
| `Reinstate()` | BOOLEAN | Reinstates the defined working units and clears the suspension stack. |
| `SuspendLevel()` | REAL | Returns the current depth of unit suspension. |

## Code Examples

### Querying Current Units
```pml
!lenMeasure = object MEASURE('DISTANCE')
!currentUnit = !lenMeasure.CurrentUnits()

!unitName = !currentUnit.Name
$p Current length unit: $!unitName
```

### Temporarily Suspending Units
```pml
!len = object MEASURE('L')
-- Now working in raw database units (usually MM)
!len.Suspend()

-- ... perform raw math ...

-- Back to user-defined units (e.g., Inches)
!len.Reinstate()
```

### Checking Dimension Metadata
```pml
!m = object MEASURE('Weight')
!mName = !m.Name
!mHash = !m.Hashcode()
$p Dimension Name: $!mName
$p Hashcode:       $!mHash
```

## Best Practices
1.  **Unit Awareness**: When performing mathematical calculations on attributes that have units (like `DIAM` or `POS`), always verify the current `MEASURE` state to ensure your constants match the expected units.
2.  **Global Units**: Use the global `!!Fmsys` methods (which internally use `MEASURE` objects) to change project-wide units rather than modifying individual `MEASURE` objects unless for local calculation.
3.  **Database Units**: Remember that AVEVA databases typically store values in a standard unit (e.g., MM for length). Use `.Suspend()` if you need to bypass PML's automatic conversion to working units.
4.  **Error Handling**: If an invalid string is passed to the constructor, it returns an unset object. Check for `!measure.Unset()` before calling methods.

