# FORM Object

The `FORM` object is the primary container for PML User Interfaces. It manages gadget layout, menus, and the window lifecycle (initialization, display, and destruction).

## Members

### Properties
| Name | Type | Purpose |
| :--- | :--- | :--- |
| `FormTitle` | STRING | The text displayed in the window title bar. |
| `Active` | BOOLEAN | (Read-only) Returns TRUE if the form is currently the active window. |
| `Shown` | BOOLEAN | (Method) Returns TRUE if the form is currently visible on screen. |
| `KeyboardFocus` | GADGET | The gadget that currently has (or will have) keyboard focus. |
| `AutoScroll` | BOOLEAN | If TRUE, scrollbars appear automatically if content exceeds window size. |
| `Maximised` | BOOLEAN | Gets or sets the maximized state of the window. |
| `Opacity` | REAL | Sets transparency (10-100). Only for non-docking dialogs. |

### Lifecycle Callbacks
| Name | Type | Purpose |
| :--- | :--- | :--- |
| `InitCall` | STRING | Executed every time the form is `Show()`n. Used for data binding. |
| `FirstShownCall`| STRING | Executed only the *first* time the form appears on screen. |
| `OkCall` | STRING | Executed when the user clicks the default OK button. |
| `CancelCall` | STRING | Executed when the user clicks Cancel or closes via [X]. |
| `QuitCall` | STRING | Executed when the user clicks [X]. Can be used to confirm exit. |
| `KillingCall` | STRING | Executed just before the form is destroyed from memory. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Show([mode, x, y])`| NO RESULT | Displays the form. Modes: `'FREE'`, `'AT'`, `'CEN'`, `'MODAL'`. |
| `Hide()` | NO RESULT | Removes the form from the screen. |
| `NewMenu(name, type)`| MENU | Creates a new `MENU` owned by the form (`'MAIN'` or `'POPUP'`). |
| `SetActive(bool)` | NO RESULT | Disables/Enables all gadgets on the form while preserving their state. |
| `SetOpacity(val)` | NO RESULT | Sets form transparency percentage. |

## Form Lifecycle
1.  **Define**: The `.pmlfrm` file is parsed.
2.  **Load**: The definition is read into memory; the **Constructor** (`setup form`) runs.
3.  **Show**: The `InitCall` is triggered; window is prepared for display.
4.  **Activate**: The window appears; `FirstShownCall` is triggered.
5.  **Hide**: The window is removed; `OkCall` or `CancelCall` is triggered.
6.  **Kill**: The `KillingCall` is triggered; the object is removed from memory.

## Code Examples

### Standard Form Definition
```pml
layout form !!MyForm
    title 'Project Manager'
    button .close 'Close' cancel
exit

-- Constructor
define method .MyForm()
    !this.InitCall = '!this.OnLoad()'
    !this.CancelCall = '!this.OnCancel()'
endmethod

define method .OnLoad()
    -- Populate data
endmethod
```

### Showing and Hiding
```pml
-- Show centered on screen
!!MyForm.Show('CEN')

if (!!MyForm.Shown()) then
    !!MyForm.Hide()
endif
```

## Best Practices
1.  **Layout Form**: Always use `layout form` (VarChars mode) instead of the legacy `setup form` for modern, dpi-aware interfaces.
2.  **Constructor Logic**: Use the constructor to assign callbacks and initialize non-UI data. Use `InitCall` for data that must refresh every time the form is opened.
3.  **Modal Dialogs**: Use `BlockingDialog` (or `Show('MODAL')`) when you need to force the user to interact with the form before returning to the main application.
4.  **Resource Cleanup**: Use `KillingCall` to unset global variables or close file handles associated with the form to prevent memory leaks.

