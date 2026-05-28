# VIEW Gadget: PLOT View

The `PLOT VIEW` is a gadget used to display and interact with 2D plot files within a PML form. It is commonly used for viewing drawing previews, schematics, or reports generated as plot files.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Background` | STRING/REAL | Get/Set the background color (Name or ID). |
| `Borders` | BOOLEAN | Toggles the display of borders around the plot. |
| `Height` | REAL | (Read-only) Returns the height of the gadget. |
| `Width` | REAL | (Read-only) Returns the width of the gadget. |
| `Highlight` | STRING/REAL | Get/Set the color used for highlighting elements in the plot. |
| `Defcall` | STRING | Get/Set the default callback function for interactions. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Add(filename)` | NO RESULT | Loads and displays a plot file. Replaces the current content. |
| `Clear()` | NO RESULT | Removes the current plot from the view. |
| `Refresh()` | NO RESULT | Forces a redraw of the gadget. |
| `SetSize(w, h)` | NO RESULT | Sets the pixel dimensions of the view gadget. |
| `SaveView(num)` | NO RESULT | Saves the current zoom/pan state (1-4). |
| `RestoreView(num)`| NO RESULT | Restores a saved zoom/pan state. |

## Code Examples

### Loading a Drawing Preview
```pml
setup form !!PlotPreview
    -- Define a plot view
    view .plotArea PLOT width 60 height 40
exit

define method .PlotPreview()
    !this.plotArea.Background = 'WHITE'
    !this.plotArea.Add('C:\TEMP\DRAWING_001.plt')
endmethod
```

### Managing Zoom States
```pml
define method .ZoomToRegion()
    -- Save original
    !this.plotArea.SaveView(1)
    -- Logic to zoom to a specific area...
endmethod

define method .ResetZoom()
    !this.plotArea.RestoreView(1)
endmethod
```

## Best Practices
1.  **File Format**: Ensure the file being passed to `.Add()` is a valid AVEVA plot file or a supported 2D format.
2.  **Clearance**: Use `.Clear()` before loading a new file if you want to avoid visual "ghosting" or ensuring a clean transition.
3.  **Callbacks**: Use `Defcall` to handle user clicks within the plot (e.g., to identify an element or show a popup).
4.  **Layout**: Plot views should typically have `dock fill` or be placed in a resizable container to accommodate different plot aspect ratios.

