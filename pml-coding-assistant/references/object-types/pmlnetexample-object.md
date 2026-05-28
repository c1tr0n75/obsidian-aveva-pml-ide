# PMLNETEXAMPLE Object

## Purpose

`PMLNETEXAMPLE` is the sample PMLNet-callable object. It demonstrates construction, method calling, value assignment, and event subscription from PML.

## Prerequisites

```pml
IMPORT 'PMLNetExample'
USING NAMESPACE 'AVEVA.PDMS.PMLNetExample'
```

## Constructors

| Signature | Returns | Purpose |
|---|---:|---|
| `PMLNETEXAMPLE()` | `PMLNETEXAMPLE` | Create the sample PMLNet object. |

## Methods

| Signature | Returns | Purpose |
|---|---:|---|
| `DOSOMETHING(REAL x, REAL y, REAL z)` | No result shown | Sample method. The implementation sets `z = x + y`; arguments are passed by reference. |
| `ASSIGN(PMLNETEXAMPLE that)` | No result | Copy/assignment hook required for callable classes. |
| `RAISEEXAMPLEEVENT()` | No result | Raises the sample event. |
| `ADDEVENTHANDLER(STRING eventName, OBJECT callbackObject, STRING callbackMethod)` | Event handle | Subscribe a PML callback method to an event raised by this object. |
| `REMOVEEVENTHANDLER(STRING eventName, ANY handle)` | No result | Remove a previously subscribed event handler. |
| `METHODS()` | `ARRAY OF STRING` | Return available methods. |
| `STRING()` | `STRING` | Calls the underlying `.NET ToString()` for the proxy. |

## Event

| Event name | Arguments | Purpose |
|---|---|---|
| `pmlnetexampleevent` | `ARRAY` | Sample event raised by `RAISEEXAMPLEEVENT()`. The example places text values into the event argument array. |

## Event Subscription Example

```pml
IMPORT 'PMLNetExample'
USING NAMESPACE 'AVEVA.PDMS.PMLNetExample'

!n = object pmlnetexample()
!c = object netcallback()

!handle = !n.addeventhandler('pmlnetexampleevent', !c, 'callback')

-- Later, when no longer needed:
!n.removeeventhandler('pmlnetexampleevent', !handle)
```

## Calling the Sample Method

```pml
!n = object pmlnetexample()

!x = 3.0
!y = 4.0
!z = 0.0

!n.DoSomething(!x, !y, !z)
q var !z
```

## Error Handling Pattern

PMLNet invocation exceptions surface to PML as module `1000` errors.

```pml
!n = object pmlnetexample()

!n.DoSomething(1.0, 2.0, !result)
handle (1000,1)
    $p PMLNetExample error: $!!error.text
endhandle
```

## Notes for PML Code Generation

- Generate only the PML-side usage unless explicitly asked to write the .NET callable class.
- Do not assume the assembly or namespace is already loaded.
- Preserve the documented event name `pmlnetexampleevent`.
- Store the event handler return value if the handler may need to be removed later.

