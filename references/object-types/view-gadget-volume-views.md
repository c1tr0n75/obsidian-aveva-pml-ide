# VIEW Gadget: VOLUME View

The `VOLUME VIEW` is the primary 3D graphical canvas in AVEVA E3D/Design. It allows for visualizing model geometry, navigating in 3D space, and interacting with elements through various mouse modes (Zoom, Pan, Rotate, Walk).

## Members

### Display & Appearance
| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Background` | STRING/REAL | Get/Set the background color (Name or ID). |
| `Highlight` | STRING/REAL | Get/Set the highlight color for selected elements. |
| `Shaded` | BOOLEAN | `True` for shaded (solid) rendering; `False` for wireline. |
| `Borders` | BOOLEAN | Shows or hides the view borders. |
| `StatusLine` | BOOLEAN | Toggles the coordinate/status line at the bottom of the view. |

### Camera & Navigation
| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Direction` | REAL ARRAY | The camera vector `[E, N, U]`. |
| `Through` | REAL ARRAY | The camera target point `[E, N, U]`. |
| `Limits` | REAL ARRAY | The view bounding box `[E1, E2, N1, N2, U1, U2]`. |
| `EyeMode` | BOOLEAN | `True` for Eye-mode (First person); `False` for Model-mode. |
| `Mousemode` | STRING | Navigation mode: `'ZOOM'`, `'PAN'`, `'ROTATE'`, `'WALK'`. |
| `Projection` | STRING | `'PERSPECTIVE'` or `'PARALLEL'`. |
| `Radius` | REAL | View radius for the "look-at" behavior. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Refresh()` | NO RESULT | Forces a graphical redraw of the view. |
| `SetSize(w, h)` | NO RESULT | Sets the pixel dimensions of the view gadget. |
| `SaveView(num)` | NO RESULT | Saves current camera state to a slot (1 to 4). |
| `RestoreView(num)`| NO RESULT | Restores the camera state from a saved slot. |

## Code Examples

### Defining a 3D View on a Form
```pml
setup form !!My3DForm
    -- Define a large 3D canvas
    view .myView volume width 100 height 50
exit

define method .My3DForm()
    !this.myView.Background = 'DARKGREY'
    !this.myView.Shaded = TRUE
    !this.myView.Mousemode = 'ROTATE'
endmethod
```

### Focusing the Camera on an Element
```pml
!ref = /P-101
-- Get bounding box
!box = !ref.Abbox()

-- Set view limits to the element's box
!this.myView.Limits = !box
!this.myView.Refresh()
```

## Best Practices
1.  **Mouse Modes**: Explicitly set the `.Mousemode` in your form constructor or toolbar callbacks to ensure the user knows what clicking/dragging will do.
2.  **Performance**: Avoid calling `.Refresh()` in tight loops. Update all camera parameters (Direction, Through, Limits) first, then call `.Refresh()` once.
3.  **Shading**: For complex models, `Shaded = TRUE` provides better depth perception, but `wireline` (`Shaded = FALSE`) can be faster for finding specific hidden components.
4.  **Save/Restore**: Use `.SaveView()` before programmatically moving the camera (e.g., for a "find" operation) so you can offer the user a "Go Back" button.
5.  **DPI Awareness**: When using `SetSize()`, be aware that grid units on a form may scale differently than pixels on the screen depending on the user's resolution settings.

