# FMSYS Object

The `FMSYS` object (accessible via the global `!!Fmsys`) manages the application-level form environment, including the main window, document forms, status bars, and progress indicators.

## Methods

### Application Context
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Main()` | FORM | Returns the current main application form. |
| `SetMain(form)` | NO RESULT | Sets the specified form as the main application window. |
| `CurrentDocument()` | FORM | Returns the current document-style form in the workspace. |
| `LoadForm(name)` | FORM | Force-loads a form definition and returns a reference to the form object. |
| `Refresh()` | NO RESULT | Triggers a refresh of all graphical `VIEW` gadgets in the application. |

### Status & Progress
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `SetStatusText(text)`| NO RESULT | Sets the text in the lower-left corner of the application status bar. |
| `StatusText()` | STRING | Returns the current status bar text. |
| `SetProgress(val)` | NO RESULT | Sets the progress bar percentage (0-100). `0` hides the bar. |
| `Progress()` | REAL | Returns the current progress percentage. |
| `SetProgressText(text)`| NO RESULT | Sets the qualifier text shown next to the progress bar. |

### Formatting & UI
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `DefaultFormat()` | FORMAT | Returns a copy of the system default `FORMAT` object. |
| `SetDefaultFormat(fmt)`| NO RESULT | Sets the global default format for the application. |
| `Interrupt()` | BOOLEAN | Returns TRUE if the user has triggered an interrupt (e.g., pressed Cancel). |
| `NoPMLUIbars()` | BOOLEAN | Returns TRUE if the application uses a non-PML UI (like the .NET Ribbon). |

## Code Examples

### Loading and Showing a Form
```pml
-- Force load a form by name if not already in memory
!myForm = !!Fmsys.LoadForm('MyCustomForm')
if (!myForm.Unset()) then
    !!Alert.Error('Could not load form definition.')
else
    !myForm.Show()
endif
```

### Updating Progress during Long Operations
```pml
!!Fmsys.SetProgressText('Processing elements...')
do !i from 1 to !count
    !percent = (!i / !count) * 100
    !!Fmsys.SetProgress(!percent)
    
    -- Check for user interrupt
    if (!!Fmsys.Interrupt()) then
        $p Operation cancelled by user.
        break
    endif
    
    -- Perform work...
enddo
-- Hide progress bar
!!Fmsys.SetProgress(0)
```

## Best Practices
1.  **Global Access**: Always use the global instance `!!Fmsys`.
2.  **Progress Feedback**: Use `SetProgress` and `SetStatusText` to provide feedback during long-running PML scripts to prevent the UI from appearing frozen.
3.  **Transient Status**: Status bar text is transient and can be overwritten by system messages. Do not use it for critical information that the user must read and acknowledge.
4.  **Ribbon Compatibility**: Check `NoPMLUIbars()` before attempting to modify the main menu bar, as many modern AVEVA products use a .NET-based Ribbon that does not support PML menu modifications.

