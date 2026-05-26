# PMLReport Object

The `PMLReport` object provides a PML interface to the .NET Reporting system (the modern reporting engine in E3D). It allows for batch execution, parameterization, and exporting of report definitions (`.repv` files) to various formats like CSV, PDF, and Excel.

## Setup
To use this object, you must import the reporting assembly and namespace:
```pml
import 'ReportingAddin'
using namespace 'Aveva.Core.Reporting'
!reportObj = object PMLReport()
```

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `AddParameters(names, values)`| NO RESULT | Passes parameter values to a parameterized report. |
| `AddScope(ancestors, elements)`| NO RESULT | Limits the report data to specific elements or hierarchies. |
| `ExportAsCsv(repv, csv)` | NO RESULT | Generates a CSV from the report definition. |
| `ExportAsPdf(repv, pdf)` | NO RESULT | Generates a PDF from the report definition. |
| `ExportAsXlsx(repv, xlsx)` | NO RESULT | Generates an Excel (.xlsx) file from the report definition. |
| `Print(repv)` | NO RESULT | Sends the report to the system default printer. |
| `RemoveScope()` | NO RESULT | Clears any previously added scope filters. |

## Code Examples

### Batch Export to CSV with Parameters
```pml
import 'ReportingAddin'
using namespace 'Aveva.Core.Reporting'
!rep = object PMLReport()

-- Set parameters
!names = object ARRAY()
!vals = object ARRAY()
!names.Append('Disc') ; !vals.Append('PIPING')

!rep.AddParameters(!names, !vals)
!rep.AddScope('/SITE-A', '')

!rep.ExportAsCsv('C:\AVEVA\Reports\MTO.repv', 'C:\TEMP\PipeMTO.csv')
```

### Exporting to PDF
```pml
!rep = object PMLReport()
!rep.ExportAsPdf('C:\AVEVA\Reports\EquipmentList.repv', 'C:\TEMP\Equip_Report.pdf')
```

## Best Practices
1.  **File Paths**: Always use full absolute paths for both the report definition (`.repv`) and the destination file.
2.  **Namespace Management**: Ensure `import` and `using namespace` are called at the top of your macro or within the constructor of your form to avoid "Object type not found" errors.
3.  **Error Handling**: Wrap report exports in `handle ANY` blocks, as file access issues or invalid element names in the scope can cause the .NET engine to throw exceptions.
4.  **Scope**: If `elements` is left as an empty string in `AddScope`, the report will run on all elements under the specified `ancestorElements`.

