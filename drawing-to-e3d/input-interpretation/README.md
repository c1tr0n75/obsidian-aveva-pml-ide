# Input Interpretation

This folder describes how the agent should read source evidence before creating AVEVA E3D model intent.

## Supported Inputs

- AutoCAD 2D drawings and exported data.
- P&IDs and PFDs.
- Line lists, equipment lists, valve lists, tie-in lists, support lists, and tabular extracts.
- PDFs, scans, screenshots, sketches, and unstructured engineering notes.
- Existing DBOUTPUT/DBLISTING files used as partial model evidence.

## Extraction Targets

When reading inputs, capture evidence for:

- Equipment tags, descriptions, duties, nozzle identifiers, and approximate placement.
- Pipeline tags, service, bore, spec, insulation, pressure, temperature, and from/to relationships.
- Branches, components, valves, reducers, tees, elbows, instruments, and tie-ins.
- Support tags, support relationships, and any structural or routing constraints.
- Coordinates, elevations, grid references, areas, zones, and drawing sheet references.
- Assumptions, missing data, conflicts, and uncertainty.

## Rules

- Prefer structured drawing data over visual guessing when available: layers, blocks, attributes, coordinates, and extracted tables.
- Preserve the source location for every extracted item: drawing name, sheet, layer/block/table, row, cell, note, or visual region.
- Keep uncertain values explicit. Use `missingData`, `assumptions`, and `manualReview` fields instead of inventing engineering facts.
- If project standards exist in [user-support/project-knowledge/](../../user-support/project-knowledge/README.md), use them to interpret tags and naming conventions before generating PML.
