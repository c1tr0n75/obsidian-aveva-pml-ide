# COLUMN Object

The `COLUMN` object defines the content and logic for a single column within a `TABLE` object. It specifies what data to extract (via an expression or block) and how to label it.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Column(header, logic)` | COLUMN | Constructor. `logic` can be a STRING expression or a BLOCK. |
| `Header()` | STRING | Returns the column header text. |
| `Header(text)` | NO RESULT | Sets the column header text. |
| `Expression()` | STRING | Returns the expression string used by the column. |
| `Expression(text)` | NO RESULT | Sets the expression string for the column. |
| `Description()` | STRING | Returns the column description. |
| `Description(text)` | NO RESULT | Sets the column description. |

## Code Examples

### Creating Columns for a Table
```pml
-- Create columns using simple expressions
!c1 = object COLUMN('Name', 'NAME')
!c2 = object COLUMN('Type', 'TYPE')
!c3 = object COLUMN('Owner', 'NAME OF OWNER')

-- Add them to a table
!table = object TABLE('MyData')
!table.Columns(!c1)
!table.Columns(!c2)
!table.Columns(!c3)
```

### Using a BLOCK for Complex Logic
```pml
-- Create a block for custom calculation
!blk = object BLOCK('REAL(HEIGHT) * 1.1')
!c4 = object COLUMN('Adjusted Height', !blk)
```

## Best Practices
1.  **Expression vs Block**: Use simple STRING expressions for direct attribute access (e.g., `'NAME'`, `'DESC'`). Use `BLOCK` objects for complex calculations or when you need to re-use the same logic across multiple columns or reports.
2.  **Decoupled Formatting**: Keep formatting logic (like decimal places) in a `COLUMNFORMAT` object or the final `REPORT` object rather than embedding it directly in the column's expression.
3.  **Naming**: Choose descriptive headers that will be clear to the end-user when the table is displayed in a grid or exported.

