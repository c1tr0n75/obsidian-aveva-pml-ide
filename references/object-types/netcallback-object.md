# NETCALLBACK Object

## Purpose

`NETCALLBACK` is the PML callback object for receiving events raised by a PMLNet object such as `PMLNETEXAMPLE`.

It is a PML-side object with a callback method that receives the event arguments as an `ARRAY`.

## Object Definition

File: `netcallback.pmlobj`

```pml
define object NETCALLBACK
endobject

define method .callback(!array is ARRAY)
    !args = 'NETCALLBACK object ' + !array[0] + !array[1]
    $P $!args
endmethod
```

The example uses `!array[0]` and `!array[1]` for event arguments. Preserve that indexing when reproducing this specific example.

## Methods

| Signature | Returns | Purpose |
|---|---:|---|
| `CALLBACK(ARRAY)` | No result | Receives event arguments from a PMLNet event and prints a composed message. |

## Usage Example with PMLNETEXAMPLE

```pml
IMPORT 'PMLNetExample'
USING NAMESPACE 'AVEVA.PDMS.PMLNetExample'

!n = object pmlnetexample()
!c = object netcallback()

!handle = !n.addeventhandler('pmlnetexampleevent', !c, 'callback')

-- When cleanup is required:
!n.removeeventhandler('pmlnetexampleevent', !handle)
```

## Safer Callback Template

Use this pattern when generating production-style PML, while keeping the zero-based event-array convention.

```pml
define object NETCALLBACK
endobject

define method .callback(!array is ARRAY)
    if (!array.Unset()) then
        $P NETCALLBACK object received unset event data
        return
    endif

    !message = 'NETCALLBACK object '

    if (!array[0].Set()) then
        !message = !message + !array[0]
    endif

    if (!array[1].Set()) then
        !message = !message + !array[1]
    endif

    $P $!message
endmethod
```

## Notes for PML Code Generation

- The callback method name is passed as a string to `ADDEVENTHANDLER`.
- The callback object must exist while the event handler is active.
- Keep the event data argument typed as `ARRAY`.

