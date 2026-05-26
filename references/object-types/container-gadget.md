# CONTAINER Gadget

The `CONTAINER` gadget is used to host external controls, specifically .NET controls (`PMLNET`), within a PML form. It acts as a bridge between PML and the .NET framework.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Control` | ANY | The hosted external control object (e.g., a .NET control). |
| `Handle` | REAL | The integer handle of the external control. |
| `Popup` | MENU | The PML `MENU` object associated with the container. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `ShowPopup(x, y)` | NO RESULT | Displays the associated popup menu at the specified pixel coordinates. |
| `FullName()` | STRING | Returns the fully qualified gadget name. |
| `Name()` | STRING | Returns the gadget's local name. |
| `Owner()` | FORM | Returns the owning form object. |
| `GetPickedPopup()` | MENU | Returns the menu object that was last picked from a popup. |
| `Shown()` | BOOLEAN | Returns TRUE if the gadget is currently shown. |

## Code Examples

### Hosting a .NET Control
```pml
setup form !!MyForm
    -- Define a container for a .NET control
    container .netHost pmlnet 'MyNamespace.MyControl' width 40 height 20
exit

define method .MyForm()
    -- Access the hosted .NET control directly
    !control = !this.netHost.control
    !control.someDotNetMethod()
endmethod
```

### Handling a Popup Menu for a Container
```pml
setup form !!MyForm
    container .netHost pmlnet 'MyNamespace.MyControl'
    
    menu .contextMenu popup
        !this.contextMenu.add('CALLBACK', 'Refresh', '!this.refreshData()')
    endmenu
    
    !this.netHost.popup = !this.contextMenu
exit

-- Method called by .NET control to show the menu
define method .showMenu(!x is REAL, !y is REAL)
    !this.netHost.ShowPopup(!x, !y)
endmethod
```

## Best Practices
1.  **PMLNet Integration**: Use the `PMLNET` keyword in the `CONTAINER` definition to simplify the loading of .NET assemblies.
2.  **Handle Management**: Avoid manipulating the `.Handle` property directly; use the `.Control` member to interact with the .NET object.
3.  **Events**: Ensure that the .NET control is correctly designed to raise events that your PML form methods are listening for.
4.  **Layout**: Use the `NOBOX` or `INDENT` qualifiers in the command to control the visual border of the container.

