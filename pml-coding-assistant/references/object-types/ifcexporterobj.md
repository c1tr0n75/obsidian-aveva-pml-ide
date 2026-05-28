# IFCEXPORTEROBJ Object

Source: `https://docs.aveva.com/bundle/e3d-design/page/909527.html`

The `IFCEXPORTEROBJ` provides a programmatic interface for exporting 3D model data to the Industry Foundation Classes (IFC) format. It handles data validation, level of detail (LOD) settings, and coordinate transformations via Reference Datums.

## Methods

### Configuration
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `ifcexporterobj()` | NO RESULT | Constructor. |
| `setDbSource(dbref)` | NO RESULT | Adds a database element to the export list. |
| `setDestination(path)`| NO RESULT | Sets the output file path (.ifc). |
| `setVersion(string)` | NO RESULT | Sets IFC schema version (`'IFC2x3'` or `'IFC4'`). |
| `setDataLevel(string)`| NO RESULT | Sets detail level (e.g., `'GA'` for Geometry + Attributes). |
| `setTolerance(real)` | NO RESULT | Sets facet tolerance (0.1 - 20 mm). |
| `setOverwriteFlag(bool)`| NO RESULT | Allows overwriting the destination file. |

### Execution & Results
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `export()` | STRING | Executes the export. Returns result status. |
| `getExportStatus()` | STRING | Returns a detailed status message of the last operation. |
| `getResult()` | STRING | Returns `'Success'` or `'Failure'`. |
| `clearExportItems()` | NO RESULT | Empties the current export list. |

### Transformation & Logging
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `setRefDatum(dbref)` | NO RESULT | Sets the Reference Datum for coordinate transformation. |
| `setLogFile(path)` | NO RESULT | Sets the full path for the export log file. |
| `setLogDetail(real)` | NO RESULT | Sets logging level (e.g., `1` for Brief, `2` for Full). |

## Code Example

```pml
!exporter = object IFCEXPORTEROBJ()

-- Configure export scope
!exporter.setDbSource(/ZONE-EQUIPMENT-01)
!exporter.setDestination('C:\Exports\Equipment.ifc')

-- Set IFC options
!exporter.setVersion('IFC4')
-- Geometry and Attributes
!exporter.setDataLevel('GA')
!exporter.setTolerance(5mm)
!exporter.setOverwriteFlag(true)

-- Execute
!result = !exporter.export()
if (!result.Eq('Success')) then
    !!Alert.Error(!exporter.getExportStatus())
else
    !!Alert.Message('Export completed successfully.')
endif
```

## Best Practices
1.  **GUID Validation**: Ensure all elements have unique IDs (UUIDIA) before exporting. IFC rely heavily on stable GUIDs for BIM coordination.
2.  **Reference Datums**: Always specify a Reference Datum (`setRefDatum`) if the project uses a site-specific coordinate system. This ensures the IFC model aligns correctly in external BIM viewers.
3.  **Faceting Tolerance**: Use a coarser tolerance (e.g., 10mm) for large structures and a finer one (e.g., 1mm) for complex equipment to balance file size vs. visual accuracy.
4.  **Logging**: Always specify a log file when running batch exports to capture errors that might occur on specific complex geometries.
