# NETGRIDCONTROL Object

## Purpose

`NETGRIDCONTROL` is the PML-facing AVEVA C# Grid Control API. The grid can be hosted on a PML form through the PML `CONTAINER` gadget, and see the `PMLGridExample` sample for a grid hosted on a PML form.

The grid supports database-backed data, non-database row/column data, Excel/CSV import, sorting, filtering, row and column operations, cell operations, event handling, printing, and Excel export.

## Hosting Context

A .NET control can be hosted in a PML form using a container gadget:

```pml
container .exampleContainer PmlNetControl 'example' dock fill width 30 height 20
```

For a control instance, the pattern is:

```pml
using namespace 'Aveva.Pdms.Presentation'
!this.exampleControl = object PMLNetExampleControl()
!this.exampleContainer.control = !this.exampleControl.handle()
```

For the grid, use your installation's `PMLGridExample` sample to confirm the exact constructor/import details.

## Data Source Methods / Constructors

| Signature | Purpose |
|---|---|
| `BindToDataSource(NetDataSource)` | Bind the grid to a `NetDataSource`. |
| `NetDataSource(STRING tableName, ARRAY attributes, ARRAY attributeTitles, ARRAY elements)` | Data source for database attributes and elements; column titles are supplied by `attributeTitles`. |
| `NetDataSource(STRING tableName, ARRAY attributes, ARRAY elements)` | Data source for database attributes and elements. |
| `NetDataSource(STRING tableName, ARRAY attributes, ARRAY elements, STRING tooltips)` | Data source for database attributes/elements with tooltips. |
| `NetDataSource(STRING tableName, ARRAY columns, ARRAY rows)` | Non-database data source using column headings and row data. |
| `NetDataSource(STRING tableName, ARRAY columns, ARRAY rows, STRING tooltips)` | Non-database data source using column headings, row data, and tooltips. |
| `NetDataSource(STRING tableName, STRING pathName)` | Import data from an Excel XLS or CSV file. |

## General Grid Methods

| Signature | Returns | Purpose |
|---|---:|---|
| `allGridEvents(BOOLEAN)` | No result | Switch grid events on or off. |
| `AllowDropInGrid(BOOLEAN)` | No result | Allow drag/drop in the grid. |
| `BulkEditableGrid(BOOLEAN)` | No result | Allow/disallow bulk editing. |
| `ClearGrid()` | No result | Remove data and column headings. |
| `ClearGridData()` | No result | Remove all row data. |
| `ColumnExcelFilter(BOOLEAN)` | No result | Allow/disallow Excel-style filtering. |
| `ColumnSummaries(BOOLEAN)` | No result | Allow/disallow average/count summaries on numeric columns. |
| `CreateValueList(STRING name, ARRAY list)` | No result | Create a value list for the grid. |
| `DisplayNulrefAs(STRING)` | STRING / No result | Nominate or query text used for `Nulref` reference data. |
| `DisplayUnsetAs(STRING)` | STRING / No result | Nominate or query text used for unset attribute data. |
| `EditableGrid(BOOLEAN)` | No result | Allow/disallow editing of existing cells. Database write-back is not automatic. |
| `ErrorIcon(BOOLEAN)` | No result | Allow/disallow red error icon for invalid/uncomputed values. |
| `FeedbackFailColor(STRING)` | STRING / No result | Nominate or query failed-edit highlight colour. |
| `FeedbackSuccessColor(STRING)` | STRING / No result | Nominate or query successful-edit highlight colour. |
| `FixedHeaders(BOOLEAN)` | No result | Allow/disallow fixed headers. |
| `FixedRows(BOOLEAN)` | No result | Allow/disallow fixed rows. |
| `getDataSource()` | `NetDataSource` | Return the current data source. |
| `GridHeight()` | `REAL` | Query row height. |
| `GridHeight(REAL)` | No result | Set row height. |
| `HeaderSort(BOOLEAN)` | No result | Allow/disallow sorting by column header. |
| `HideGroupByBox(BOOLEAN)` | No result | Hide/show the group-by box. |
| `loadLayoutFromXml(STRING)` | No result | Load a stored grid layout. |
| `OutlookGroupStyle(BOOLEAN)` | No result | Allow/disallow Outlook-style grouping. |
| `PrintPreview()` | No result | Open print preview for the grid. |
| `ReadOnlyCellColor(STRING)` | STRING / No result | Nominate or query read-only cell colour. |
| `RefreshTable()` | No result | Recalculate every cell for Dabacon-backed data. |
| `RefreshVisibleRegion()` | No result | Recalculate visible cells for Dabacon-backed data. |
| `resetCellFeedback()` | No result | Reset edit feedback highlighting and tooltip text. |
| `ResetColumnProperties()` | No result | Reset column layout. |
| `saveGridToExcel(STRING excelFile, STRING worksheet, STRING header)` | No result | Save data to worksheet with custom first-row header. |
| `SaveGridToExcel(STRING excelFile)` | No result | Save grid data to Excel, retaining grouping/layout. |
| `SaveGridToExcel(STRING excelFile, STRING worksheet)` | No result | Save grid data to a named worksheet. |
| `SaveLayoutToXml(STRING)` | No result | Save grid layout, not data, to XML. |
| `setAlternateRowColor(REAL red, REAL green, REAL blue)` | No result | Set alternate-row colour using RGB. |
| `setAlternateRowColor(STRING colour)` | No result | Set alternate-row colour using a named colour. |
| `setLabelVisibility(BOOLEAN)` | No result | Show/hide the row-count label. |
| `SingleRowSelection(BOOLEAN)` | No result | Enable single-row selection. |
| `SplitGrid(BOOLEAN)` | No result | Allow/disallow horizontal and vertical split. |
| `SyntaxErrorColor(STRING)` | STRING / No result | Nominate or query syntax-error cell colour. |

## Row Methods

| Signature | Returns | Purpose |
|---|---:|---|
| `addRow(ARRAY)` | No result | Add one row. For database grids, first array element is read; otherwise array values are cell data. |
| `clearRowSelection()` | No result | Clear row selection. |
| `deleteRows(ARRAY)` | No result | Delete rows by row tag. |
| `deleteSelectedRows()` | No result | Delete selected rows. |
| `GetFilteredInRows()` | `ARRAY` | Return rows included by current filter. |
| `GetFilteredOutRows()` | `ARRAY` | Return rows excluded by current filter. |
| `getNumberRows()` | `REAL` | Return row count. |
| `GetRow(STRING row)` | `ARRAY` | Return cells in a row by row tag. |
| `GetRows()` | `ARRAY OF ARRAY` | Return all row data. |
| `GetSelectedRows()` | `ARRAY OF ARRAY` | Return selected rows. |
| `GetSelectedRowTags()` | `ARRAY` | Return selected row tags. |
| `MoveSelectedRowsDown()` | No result | Move selected rows down. |
| `MoveSelectedRowsUp()` | No result | Move selected rows up. |
| `RowAddDeleteGrid(BOOLEAN)` | No result | Enable/disable row addition and deletion. |
| `scrollSelectedRowToView(BOOLEAN)` | No result | Scroll selected row into view. |
| `SelectAllRows()` | No result | Select all rows. |
| `SetRowColor(STRING rowTag, STRING colour)` | No result | Set row colour using a named colour. |
| `SetRowColor(STRING rowTag, REAL red, REAL green, REAL blue)` | No result | Set row colour using RGB. |
| `setRowTooltip(STRING row, STRING tooltip)` | No result | Set a row tooltip. |
| `setSelectedRowTags(ARRAY)` | No result | Programmatically select row tags. |

## Column Methods

| Signature | Returns | Purpose |
|---|---:|---|
| `AutoFitColumns()` | No result | Resize columns to fit widest text. |
| `ColumnsInGroupByBox()` | `BOOLEAN` | TRUE if at least one column is in group-by mode. |
| `ExtendLastColumn(BOOLEAN)` | No result | Extend last column. |
| `FixedHeaderOnColumns(STRING column, BOOLEAN)` | No result | Fix header on the column. |
| `GetColumn(STRING column)` | `ARRAY` | Return cells in a column by tag. |
| `GetColumnPosition(STRING column)` | `REAL` | Return column position. |
| `GetColumnTitle(STRING column)` | `STRING` | Return column title. |
| `GetColumns()` | `ARRAY OF STRING` | Return grid columns. |
| `GetTitles()` | `ARRAY OF STRING` | Return grid titles. |
| `GetNumberColumns()` | `REAL` | Return number of columns. |
| `IsColumnVisible(STRING column)` | `BOOLEAN` | Query column visibility. |
| `ResetColumnFilters()` | No result | Reset all column filters. |
| `ResizeAllColumns()` | No result | Resize columns to available width. |
| `setColumnColor(STRING column, STRING colour)` | No result | Set column colour using a named colour. |
| `SetColumnPosition(STRING column, REAL position)` | No result | Set column position. |
| `SetColumnTextAlignment(STRING column, STRING alignment)` | No result | Set column alignment to `CENTRE`, `CENTER`, `LEFT`, or `RIGHT`. |
| `SetColumnVisibility(STRING column, BOOLEAN)` | No result | Show/hide column. |
| `SetColumnWidth(STRING column, REAL width)` | No result | Set column width. |
| `setNameColumnImage()` | No result | Display standard icons in a `NAME` attribute column for database elements. |
| `SortColumnAscending(STRING column)` | No result | Sort one column ascending. |
| `SortColumnsAscending(ARRAY columns)` | No result | Sort multiple columns ascending. |
| `SortedColumnCollection()` | `ARRAY` | Return sorted columns. |

## Cell Methods

| Signature | Returns | Purpose |
|---|---:|---|
| `DoDabaconCellUpdate(ARRAY args)` | No result | Support `BeforeCellUpdate` by updating the Dabacon element/attribute. Sets `args[3]` and `args[4]` when update cannot be performed. |
| `GetCell(STRING rowTag, STRING columnTag)` | `STRING` | Return content of a cell. |
| `SetCellColor(STRING rowTag, STRING columnTag, STRING colour)` | No result | Set cell colour using a named colour. |
| `SetCellColor(STRING rowTag, STRING columnTag, REAL red, REAL green, REAL blue)` | No result | Set cell colour using RGB. |
| `SetCellTextAlignment(STRING rowTag, STRING columnTag, STRING alignment)` | No result | Set text alignment to `CENTRE`, `CENTER`, `LEFT`, or `RIGHT`. |
| `setCellValue(STRING rowTag, STRING columnTag, STRING value)` | No result | Set cell value. |
| `setEditableCell(STRING rowTag, STRING columnTag, BOOLEAN editable)` | No result | Enable/disable editing for a cell. |

## Events

| Event | Arguments | Purpose |
|---|---|---|
| `AfterCellUpdate` | None | Cell updated. |
| `AfterCellPosChanged` | None | Column dragged, resized, fixed, or unfixed. |
| `AfterCellSelectChange` | None | Cell selection changed. |
| `AfterRowsDeleted` | None | Rows deleted. |
| `AfterRowFilterChanged` | `Array[0]` column tag | Column filter changed. |
| `AfterRowInsert` | None | Row inserted. |
| `AfterRowUpdate` | None | Row updated. |
| `AfterSelectChange` | `Array[0]` selected row IDs | Row selection changed. |
| `BeforeCellActivate` | `Array[0]` row tag, `Array[1]` column tag | Before a cell is activated. |
| `BeforeCellUpdate` | `Array[0]` new value, `Array[1]` row tag, `Array[2]` column tag, `Array[3]` allow boolean, `Array[4]` rejection reason | Validate/synchronise an edit before committing it. |
| `BeforeRowsDeleted` | `Array[0]` rows, `Array[1]` allow boolean, `Array[2]` rejection reason | Validate row deletion. |
| `BeforeRowInsert` | `Array[0]` allow boolean, `Array[1]` rejection reason | Validate row insertion. |
| `BeforeRowUpdate` | `Array[0]` allow boolean, `Array[1]` rejection reason | Validate row update. |
| `CellChange` | `Array[0]` row tag, `Array[1]` column tag | Cell value changed. |
| `ColumnsChanged` | None | Column layout changed. |
| `ColumnsInGroupByMode` | `Array[0]` boolean | Group-by mode changed/query event. |
| `CopyKeyPressed` | `Array[0]` allow boolean, `Array[1]` rejection reason | Validate copy. |
| `CutKeyPressed` | `Array[0]` allow boolean, `Array[1]` rejection reason | Validate cut. |
| `DeleteKeyPressed` | `Array[0]` allow boolean, `Array[1]` rejection reason | Validate delete key. |
| `LayoutChanged` | None | Grid layout changed. |
| `OnPopup` | `Array[0]` x, `Array[1]` y, `Array[2]` selected row IDs | Context menu request. |
| `OnDragDropCopy` | `Array[0]` copied row tag, `Array[1]` drop index, `Array[2]` allow boolean, `Array[3]` rejection reason | Validate drag/drop copy. |
| `OnDragDropMove` | `Array[0]` moved row tag, `Array[1]` drop index, `Array[2]` allow boolean, `Array[3]` rejection reason | Validate drag/drop move. |
| `PasteKeyPressed` | `Array[0]` allow boolean, `Array[1]` rejection reason | Validate paste. |

## Example: PML Menu Entry to Open a Grid Addin

Many menus/toolbars are still defined in PML. The following is an example addition to `appdesmain.pmlfrm`:

```pml
!menu.add('TOGGLE', 'New Addin', '', 'New Addin')
```

## Example: BeforeCellUpdate Validation Pattern

```pml
define method .BeforeCellUpdate(!args is ARRAY)
    -- args[0] = new value
    -- args[1] = row tag
    -- args[2] = column tag
    -- args[3] = allow boolean
    -- args[4] = rejection reason

    if (!args[0] EQ '') then
        !args[3] = FALSE
        !args[4] = 'Empty value is not allowed'
        return
    endif

    -- For Dabacon-backed data, delegate the database synchronisation to the grid.
    !this.Grid.DoDabaconCellUpdate(!args)
endmethod
```

## Example: Non-Database Data Pattern

This pattern follows the documented `NetDataSource` signatures. Confirm exact constructor names/imports with the installed `PMLGridExample` sample.

```pml
using namespace 'Aveva.Pdms.Presentation'

!columns = object ARRAY()
!columns[1] = 'Name'
!columns[2] = 'Type'
!columns[3] = 'Owner'

!row1 = object ARRAY()
!row1[1] = '/E1301'
!row1[2] = 'EQUI'
!row1[3] = '/EQUIP'

!rows = object ARRAY()
!rows[1] = !row1

!source = object NetDataSource('Equipment', !columns, !rows)
!this.Grid.BindToDataSource(!source)
```

## Input Mask Characters

The following lists input mask characters for constrained cell entry. Common examples:

| Mask | Meaning |
|---|---|
| `#` | Required digit. |
| `9` | Optional digit. |
| `A` | Required alphanumeric character. |
| `a` | Optional alphanumeric character. |
| `?` | Optional letter. |
| `>` | Convert following characters to uppercase. |
| `<` | Convert following characters to lowercase. |
| `mm/dd/yyyy` | Date mask. |
| `hh:mm:ss` | Time mask. |

## Notes for PML Code Generation

- Editing a grid cell does not automatically write back to the database. Use `BeforeCellUpdate` and `DoDabaconCellUpdate()` for Dabacon-backed grids.
- For exact PML hosting syntax, prefer the installed `PMLGridExample` sample over inferred constructor code.
- Use `OnPopup` for context menus and pass the event coordinates to the container's `showPopup()` method.
- Use `SaveGridToExcel()` for Excel export and `PrintPreview()` for printing.

