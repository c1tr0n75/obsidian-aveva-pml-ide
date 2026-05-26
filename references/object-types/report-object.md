# REPORT Object

The `REPORT` object is used to format data from a `TABLE` for display or export. It separates data extraction from presentation, allowing the same table to be formatted in multiple ways using different `COLUMNFORMAT` settings.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Report(table)` | REPORT | Constructor. Associates the report with a specific `TABLE`. |
| `AddColumn(key, format, head)`| NO RESULT | Adds a table column (identified by `key`) to the report with a specific `COLUMNFORMAT` and header. |
| `Results(dText, rText)`| BOOLEAN | Evaluates the entire report. `dText` gets the formatted strings, `rText` gets the RefNo strings. |
| `NextEntries(n, dText)`| BOOLEAN | Fetches the next `n` rows of formatted data. Returns `False` if no more data. |
| `EvaluateTable()` | NO RESULT | Re-evaluates the underlying table (e.g., if the database has changed). |
| `SetCaseMatch(bool)` | NO RESULT | Sets whether row filtering (via `Match` methods) is case-sensitive. |

## Code Examples

### Generating a Simple Text Report
```pml
!table = object TABLE('PipeData')
-- ... populate table ...

!report = object REPORT(!table)
!fmt = object COLUMNFORMAT()
!fmt.Width(30)

!report.AddColumn('Name', !fmt, 'Component Name')
!report.AddColumn('Type', !fmt, 'Element Type')

!dRows = object ARRAY()
!rRefs = object ARRAY()
!ok = !report.Results(!dRows, !rRefs)

do !row values !dRows
    $p $!row
enddo
```

### Paging Through a Large Report
```pml
!report = object REPORT(!myLargeTable)
!rows = object ARRAY()
!pageSize = 50

do 
    !hasNext = !report.NextEntries(!pageSize, !rows)
    break if (not !hasNext)
    -- Display current page of 50 rows
    -- ...
    !rows.Clear() 
    -- Clear for next page
enddo
```

## Best Practices
1.  **DText vs RText**: Use `dText` (Display Text) for what the user sees. Use `rText` (Reference Text) to store the underlying element ID, allowing the user to click a report row and navigate to the element in the 3D view.
2.  **Paging**: For tables with thousands of rows, use `NextEntries()` to process or display data in chunks rather than `Results()`, which can hang the UI if the report is too large.
3.  **Column Keys**: The `key` used in `AddColumn` must match the key (usually the header or ID) defined in the underlying `TABLE` columns.
4.  **Re-evaluation**: If your report is displayed in a persistent form, call `EvaluateTable()` before refreshing to ensure the data reflects the current state of the database.

