# TABLE Object

The `TABLE` object holds raw data in a spreadsheet-like structure. Each row typically represents an AVEVA database element (`DBREF`), and each column contains information extracted from that element (via `COLUMN` objects).

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Table(refs, cols)` | TABLE | Constructor. Takes an array of `DBREF` (rows) and an array of `COLUMN` objects. |
| `PrimaryKey(refs)` | NO RESULT | Sets the list of elements that form the rows of the table. |
| `Columns(cols)` | NO RESULT | Sets the column definitions for the table. |
| `Evaluate()` | NO RESULT | Re-extracts data from the database for all rows and columns. |
| `Sort(colIndex)` | NO RESULT | Sorts the table based on the values in the specified column. |
| `RowCount()` | REAL | Returns the number of rows in the table. |

## Code Examples

### Building a Table from a Collection
```pml
!coll = object COLLECTION()
!coll.Scope(!!CE)
!coll.Type('PIPE')

!c1 = object COLUMN('Name', 'NAME')
!c2 = object COLUMN('Type', 'TYPE')
!cols = object ARRAY()
!cols.Append(!c1)
!cols.Append(!c2)

!table = object TABLE(!coll.Results(), !cols)
!table.Evaluate()

!rowCount = !table.RowCount()
$p Table has $!rowCount rows.
```

### Accessing Specific Cell Data
```pml
-- Returns the data from Column 1, Row 5
!val = !table.Cell(1, 5)
$p Value: $!val
```

## Best Practices
1.  **Row Mapping**: Each row in a standard `TABLE` corresponds to a `DBREF`. This allows you to easily map UI interactions (like clicking a row) back to the actual model element.
2.  **Efficiency**: Call `Evaluate()` only when the data needs to be refreshed. If the list of elements (`PrimaryKey`) changes, you must re-evaluate to populate the new rows.
3.  **Large Datasets**: For very large sets of elements, consider using a `COLLECTION` to populate the `PrimaryKey` as it is more memory-efficient than manual array construction.
4.  **Separation**: Use `TABLE` for data storage/logic and `REPORT` for presentation. Do not try to perform formatting (like padding strings) inside the `COLUMN` expressions.

