# VIEW Gadget: AREA View

The `AREA VIEW` is a 2D graphical gadget used within PML forms to display 2D geometry, schematics, or interactive overlays. It is distinct from the 3D `VOLUME` view and the file-based `PLOT` view, focusing on direct 2D coordinate manipulation.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Limits` | REAL ARRAY | Get/Set the view boundaries `[x1, y1, x2, y2]`. |
| `Background` | STRING/REAL | Get/Set the background color (Name or ID). |
| `Highlight` | STRING/REAL | Get/Set the color used for highlighting selected 2D elements. |
| `Borders` | BOOLEAN | Toggles the display of borders around the area. |
| `Defcall` | STRING | Get/Set the default callback function for mouse interactions. |
| `Height` | REAL | (Read-only) Returns the height of the gadget. |
| `Width` | REAL | (Read-only) Returns the width of the gadget. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Background()` | STRING | Returns the background color as a name string. |
| `Refresh()` | NO RESULT | Forces a redraw of the 2D area. |
| `SetSize(w, h)` | NO RESULT | Sets the pixel dimensions of the gadget. |

## Code Examples

### Creating an Interactive 2D Map
```pml
setup form !!MapForm
    -- Define a 2D area view
    view .mapArea AREA width 50 height 50
exit

define method .MapForm()
    !this.mapArea.Background = 'LIGHTGREY'
    !this.mapArea.Limits = [0, 0, 1000, 1000]
    !this.mapArea.Defcall = '!this.onMapClick()'
endmethod

define method .onMapClick(!args is ARRAY)
    -- Logic for handling 2D coordinate clicks
endmethod
```

## Best Practices
1.  **Coordinate System**: Clearly define the 2D coordinate system used in the `.Limits` property to match the data you intend to display.
2.  **Interaction**: Use `Defcall` to capture user input. The callback typically receives an array containing the `X` and `Y` coordinates of the click.
3.  **Visual Clarity**: Use high-contrast background and highlight colors to ensure 2D overlays are easily distinguishable from the form background.
4.  **Resizing**: Like other view gadgets, ensure the `AREA` view is placed in a layout that handles window resizing appropriately to maintain the aspect ratio of the 2D data.

