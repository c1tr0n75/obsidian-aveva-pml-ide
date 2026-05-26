# PMLNETEXAMPLECONTROL Object

## Purpose

`PMLNETEXAMPLECONTROL` is the PMLNet control object for hosting a .NET control inside a PML form by using a PML `CONTAINER` gadget.

The expected flow:

1. Create a PML container gadget using `PmlNetControl`.
2. Instantiate `PMLNetExampleControl` from PML.
3. Assign the control handle to the container's `control` member.
4. Subscribe to an event such as `OnPopup`.
5. Show a PML popup menu from the event callback.

## Prerequisites

```pml
USING NAMESPACE 'Aveva.Pdms.Presentation'
```

There is no separate `IMPORT` line for this control in the hosting example. If your environment requires it, import the assembly that exposes `PMLNetExampleControl` before instantiation.

## Constructors

| Signature | Returns | Purpose |
|---|---:|---|
| `PMLNETEXAMPLECONTROL()` | `PMLNETEXAMPLECONTROL` | Create the .NET control instance for hosting in a PML container. |

## Methods

| Signature | Returns | Purpose |
|---|---:|---|
| `HANDLE()` | `REAL` | Return the external control handle to assign to `container.control`. |
| `ADDEVENTHANDLER(STRING eventName, OBJECT callbackObject, STRING callbackMethod)` | Event handle | Subscribe a PML callback method to an event raised by the control. |
| `REMOVEEVENTHANDLER(STRING eventName, ANY handle)` | No result | Remove a previously subscribed event handler. |
| `METHODS()` | `ARRAY OF STRING` | Return available methods. |
| `STRING()` | `STRING` | Calls the underlying `.NET ToString()` for the proxy. |

## Events

| Event name | Event arguments | Purpose |
|---|---|---|
| `OnPopup` | `ARRAY`; `data[0]` = x coordinate, `data[1]` = y coordinate | Used to display a PML popup menu at the cursor location inside the hosted control. |

## PML Form Hosting Example

```pml
setup form !!ExampleControlForm dialog size 400 300
    container .exampleContainer PmlNetControl 'example' dock fill width 30 height 20
exit

define method .ExampleControlForm()
    using namespace 'Aveva.Pdms.Presentation'

    !this.exampleControl = object PMLNetExampleControl()
    !this.exampleContainer.control = !this.exampleControl.handle()

    !this.popupHandle = !this.exampleControl.addeventhandler('OnPopup', !this, 'rightClickGrid')
endmethod

define method .rightClickGrid(!data is ARRAY)
    !this.exampleContainer.popup = !this.examplePopup
    !this.exampleContainer.showPopup(!data[0], !data[1])
endmethod

menu .examplePopup popup
!this.examplePopup.add('CALLBACK', 'Add to 3D View', '!this.addToThreeDView()')
```

## Cleanup Pattern

```pml
if (!this.popupHandle.Set()) then
    !this.exampleControl.removeeventhandler('OnPopup', !this.popupHandle)
endif
```

## Notes for PML Code Generation

- Use a PML `CONTAINER` gadget with `PmlNetControl` to host the control.
- Assign `container.control = control.handle()`.
- Popup location is supplied by the event data array.
- Do not invent control-specific methods beyond those discovered by `q meth` or documented in the user's source.

