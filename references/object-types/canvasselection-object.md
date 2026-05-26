# CanvasSelection Object

The `CanvasSelection` object is a generic interface for interacting with graphical selections in both 2D (AVEVA Draw) and 3D (AVEVA Model) environments. Unlike the 3D-specific `SELECTION` object, `CanvasSelection` provides Programmable Macro Language (PML) access to elements selected in the Draw canvas.

## Methods

### Setup
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `CanvasSelection()` | CanvasSelection | Constructor. Creates an empty canvas selection object. |

### Selection Queries
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `GetSelection()` | ARRAY | Returns an array of `DBREF` objects for all elements currently in the selection. |
| `InSelection(dbref)` | BOOLEAN | Returns `True` if the specified element is in the selection. |
| `Selected(dbref)` | DBREF | Returns the "highest significant parent" of the given element that is actually part of the selection. |

### Validation
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `IsSelectable(dbref)` | BOOLEAN | Returns `True` if the element can be selected within the current scope. |
| `IsModifiable(dbref)` | BOOLEAN | Returns `True` if the highest significant parent of the element is modifiable. |
| `Ancestors(dbref)` | ARRAY | Returns a list of permissible ancestors for the element within the current scope. |

## Code Examples

### Querying 2D/3D Selection
```pml
!cSel = object CanvasSelection()
!items = !cSel.GetSelection()

if (!items.Size() EQ 0) then
    !!Alert.Message('No elements selected in the canvas.')
    return
endif

do !ref values !items
    !refName = !ref.name
    $p Selected on Canvas: $!refName
enddo
```

### Checking Modifiability
```pml
!cSel = object CanvasSelection()
if (!cSel.InSelection(!!CE)) then
    if (!cSel.IsModifiable(!!CE)) then
        $p Element is selected and ready for modification.
    else
        $p Element is read-only or locked.
    endif
endif
```

## Best Practices
1.  **2D Support**: Use `CanvasSelection` instead of `SELECTION` when your tool needs to work with 2D drawings in AVEVA Draw.
2.  **Graphical Mode Only**: This object only operates in graphical mode. It will not return results or may throw errors if used in TTY (batch/command-line) mode.
3.  **Scope and Significance**: Selection behavior varies between modes (Design vs. Draw). Use `.IsSelectable()` to verify if an element is a valid candidate for selection before attempting to process it.
4.  **Sync with 3D Selection**: While `CanvasSelection` covers 3D, the standard `SELECTION` object remains more powerful for specialized 3D queries and transformations. Use `CanvasSelection` primarily for unified 2D/3D selection handling.

