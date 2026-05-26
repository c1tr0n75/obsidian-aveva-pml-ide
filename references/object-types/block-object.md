# BLOCK Object

The `BLOCK` object holds an expression string for deferred evaluation. It is useful for creating generic logic that can be executed against different objects later.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Block(expression)` | BLOCK | Constructor. Creates a block holding the given expression string. |
| `Evaluate()` | ANY | Evaluates the expression and returns the result. |
| `Evaluate(type)` | ANY | Evaluates the expression and checks if the result is of the specified type. |

## Code Examples

### Basic Evaluation
```pml
!expr = 'NAME OF OWNER'
!blk = object BLOCK(!expr)

-- Evaluate against current element context
!result = !blk.Evaluate()
$p Owner Name: $!result
```

### Using BLOCK with Arrays
```pml
!data = ARRAY()
!data.append(/SITE-A)
!data.append(/SITE-B)

!descriptionExpression = 'DESC OF OWNER'
!blk = object BLOCK(!descriptionExpression)
!descriptions = !data.Evaluate(!blk)

do !desc values !descriptions
    $p Description of Owner: $!desc
enddo
```

## Best Practices
1.  **Syntax Errors**: If the expression in the block has a syntax error, `Evaluate()` will throw a PML error. Wrap it in a `handle any` block.
2.  **Context**: Expressions in blocks are evaluated in the current database context (`CE`) unless the method calling the block (like `ARRAY.Evaluate()`) explicitly sets a different context for each element.
3.  **Efficiency**: For repeated evaluations of the same expression string, using a `BLOCK` object is generally more efficient than passing the string repeatedly.

