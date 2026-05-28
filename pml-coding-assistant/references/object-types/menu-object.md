# MENU Object

The `MENU` object represents a list of options, such as the application's top-level menu bar or a right-click context menu. Menus can contain callbacks, sub-menus (pullrights), forms, and toggles.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Callback` | STRING | The global callback string for the menu. |
| `PickedFieldName`| STRING | (Read-only) Returns the name of the last-picked field. |
| `PickedField` | STRING | (Deprecated) Returns the display text of the last-picked field. |

## Methods

### Adding Fields
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Add(type, dtext, [target, name])`| NO RESULT| Appends a field. Types: `'CALLBACK'`, `'FORM'`, `'MENU'`, `'TOGGLE'`, `'SEPARATOR'`. |
| `InsertAfter(ref, type, ...)` | NO RESULT | Inserts a field after a specific existing field name. |
| `InsertBefore(ref, type, ...)`| NO RESULT | Inserts a field before a specific existing field name. |

### Properties & State
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `SetFieldProperty(name, prop, val)`| NO RESULT| Sets field state. Properties: `'ACTIVE'`, `'VISIBLE'`, `'SELECTED'`. |
| `FieldProperty(name, prop)` | BOOLEAN | Gets the current state of a field property. |
| `Clear()` | NO RESULT | Removes all fields from the menu. |
| `Refresh()` | NO RESULT | Forces a redraw of the menu. |

### Metadata
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Name()` | STRING | Returns the simple name of the menu. |
| `FullName()` | STRING | Returns the full path name (e.g., `!!Form.MyMenu`). |
| `PopupGadget()`| GADGET | Returns the gadget that triggered this menu (if a popup). |

## Code Examples

### Defining a Context Menu
```pml
-- Inside a form constructor
!this.myMenu = !this.newmenu('SiteMenu', 'POPUP')
!this.myMenu.Add('CALLBACK', 'View Attributes', '!this.OnView()', 'field1')
!this.myMenu.Add('SEPARATOR')
!this.myMenu.Add('CALLBACK', 'Delete', '!this.OnDelete()', 'field2')

-- Associate with a list gadget
!this.list1.SetPopup(!this.myMenu)
```

## Best Practices
1.  **Unique Field Names**: Always provide the optional `fieldName` argument when adding menu items. This allows you to modify the field's visibility or active status later without relying on the display text.
2.  **Context Menus**: Use `.PopupGadget()` within a menu callback to determine which gadget the user right-clicked on.
3.  **Core Fields**: Use `'CORECALLBACK'` or `'COREFORM'` when targeting standard AVEVA commands to reduce custom code maintenance.
4.  **Separators**: Remember that setting the `ACTIVE` property of a `SEPARATOR` field affects the entire group of fields until the next separator.

