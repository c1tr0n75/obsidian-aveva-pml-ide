# EXPRESSION Object

The `EXPRESSION` object encapsulates a PML expression string, allowing it to be stored, passed as an argument, and evaluated against database elements or other objects.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Expression(text)` | EXPRESSION | Constructor. `text` is the PML expression string (e.g., `'NAME OF OWNER'`). |
| `Evaluate([dbref])` | ANY | Evaluates the expression against the given element (or CE if omitted). |
| `String()` | STRING | Returns the raw expression string. |

## Code Examples

### Simple Attribute Query
```pml
!expr = object EXPRESSION('NAME')
!val = !expr.Evaluate(!!CE)
$p The name is $!val
```

### Complex Logic in Expressions
```pml
-- Create an expression with logic
!expr = object EXPRESSION(|if (TYPE EQ 'EQUIP') then NAME else 'Not Equip' endif|)

!res = !expr.Evaluate(!!CE)
$p Result: $!res
```

### Filtering with Collections
```pml
!coll = object COLLECTION()
!filter = object EXPRESSION('XLEN GT 500')
!coll.Filter(!filter)
!results = !coll.Results()
```

## Best Practices
1.  **Late Evaluation**: Use `EXPRESSION` objects when you want to define logic once but evaluate it multiple times against different elements (e.g., in a loop or a report).
2.  **Performance**: For very complex logic, a `BLOCK` object may be more appropriate or faster, but `EXPRESSION` is ideal for standard attribute-based queries.
3.  **String Delimiters**: When building an expression string, be careful with nested quotes. Use escaped quotes (`''`) or (`||`)different quote types if necessary.
4.  **Error Handling**: If the expression is invalid, `Evaluate()` will raise a PML error. Consider wrapping calls in a `handle` block if the expression is user-provided.

