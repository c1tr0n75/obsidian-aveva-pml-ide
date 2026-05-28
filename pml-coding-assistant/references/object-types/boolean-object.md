# BOOLEAN Object

The `BOOLEAN` object represents a truth value: `TRUE` or `FALSE`.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Boolean(value)` | BOOLEAN | Constructor. Creates from REAL (non-zero = TRUE) or STRING ('TRUE'/'YES' = TRUE). |
| `AND(other)` | BOOLEAN | Logical AND operation. |
| `OR(other)` | BOOLEAN | Logical OR operation. |
| `NOT()` | BOOLEAN | Logical NOT operation. |
| `Real()` | REAL | Returns `1.0` if TRUE, `0.0` if FALSE. |
| `String()` | STRING | Returns `'TRUE'` or `'FALSE'`. |

## Code Examples

### Logical Operations
```pml
!a = TRUE
!b = FALSE

-- returns FALSE
!result = !a.AND(!b)
-- returns TRUE
!result = !a.OR(!b)
-- returns FALSE
!result = !a.NOT()
```

### Conversion from Real/String
```pml
-- returns TRUE
!b1 = object BOOLEAN(1)
-- returns TRUE
!b2 = object BOOLEAN('YES')
-- returns FALSE
!b3 = object BOOLEAN(0)
```

## Best Practices
1.  **Direct Assignment**: In PML2, you can usually assign `TRUE` or `FALSE` directly to a variable without using the `object BOOLEAN()` constructor explicitly.
2.  **String Comparisons**: When comparing strings that represent booleans, using `.Boolean()` is safer than manual string matching as it handles various formats ('Y', 'YES', 'T', 'TRUE').
3.  **Real Conversion**: When interfacing with systems that use 0/1 for booleans, use `.Real()` to convert the PML boolean back to a number.

