# ViewFinder Object

The `ViewFinder` object is a specialized tool used in **AVEVA Draw** (and E3D Design/Draw integration) to visualize the 2D view frame within the 3D model environment. It allows designers to manipulate the drawing view boundaries, rotation, and clipping planes by interacting with a physical frame in the 3D view.

## Methods

### Setup & Control
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `ViewFinder(viewRef)` | ViewFinder | Constructor. Creates a frame based on a Draw View (`VIEW`) element. |
| `Show()` / `Hide()` | NO RESULT | Toggles the visibility of the frame in 3D. |
| `Update3d()` | NO RESULT | Syncs the 3D frame representation with the current 2D view parameters. |
| `Lock(bool)` | NO RESULT | If `True`, prevents the user from manually moving the frame in 3D. |
| `Dynamic(bool)` | NO RESULT | If `True`, changes in 3D are automatically pushed to the 2D view. |
| `Align()` | NO RESULT | Aligns the viewfinder frame with the current 3D camera direction. |

### Visual Properties
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Colour(real)` | NO RESULT | Sets the frame color (AVEVA color index). |
| `Translucency(bool)`| NO RESULT | Toggles translucent shading for the viewfinder box. |
| `Redraw()` | NO RESULT | Forces a graphical refresh of the viewfinder. |

### Query Methods
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Valid()` | BOOLEAN | Returns `True` if the viewfinder is linked to a valid View. |
| `Position()` | POSITION | Returns the 3D coordinate of the center of the frame. |
| `Direction()` | DIRECTION | Returns the look-direction of the associated view. |
| `Size()` | REAL ARRAY | Returns the frame dimensions as `[Width, Height]`. |

## Code Examples

### Initializing a ViewFinder
```pml
!viewRef = /MY_SECTION_VIEW
!vf = object ViewFinder(!viewRef)

if (!vf.Valid()) then
    -- Set to red
    !vf.Colour(2)
    !vf.Show()
    !vf.Dynamic(TRUE)
endif
```

### Syncing After Manual 3D Manipulation
```pml
-- If not in dynamic mode, manually push 3D changes to 2D
!vf.Update3d()
$p 2D View updated from 3D ViewFinder position.
```

## Best Practices
1.  **Dynamic Mode**: Enable `Dynamic(TRUE)` for the most intuitive user experience, allowing them to see the 2D view content update in real-time as they drag the 3D frame.
2.  **Locking**: Lock the viewfinder once the desired clipping and orientation are achieved to prevent accidental changes during navigation.
3.  **Visual Feedback**: Use a distinct color (e.g., Yellow or Red) for the viewfinder frame so it doesn't blend in with the model geometry.
4.  **Context**: The `ViewFinder` only works when a valid 2D `VIEW` element is selected and the Draw-Design integration is active.

