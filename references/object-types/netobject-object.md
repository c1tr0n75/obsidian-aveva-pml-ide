# NETOBJECT Object

## Purpose

`NETOBJECT` is the PMLNet proxy object used to demonstrate how a .NET class becomes visible as a PML object after its assembly has been imported and its namespace is in scope.

```pml
!a = object netobject()
```

The proxy class name is assumed to match the underlying callable class name. PML names are case-insensitive.

## Prerequisites

```pml
-- use the actual assembly containing NETOBJECT
IMPORT 'PMLNetExample'
USING NAMESPACE 'AVEVA.PDMS.PMLNetExample'
```

If the namespace is missing, object creation can fail with:

```text
(46,87) PML: Object definition for NETOBJECT could not be found.
```

## Constructors

| Signature | Returns | Purpose |
|---|---:|---|
| `NETOBJECT()` | `NETOBJECT` | Create a default instance. |
| `NETOBJECT(REAL)` | `NETOBJECT` | Create an instance using a numeric argument. |

## Methods

These are the methods shown in examples through `q meth !x` and `!x.methods()`.

| Signature | Returns | Purpose |
|---|---:|---|
| `ADD(REAL)` | Not specified | Add/apply a numeric value. Exact behavior depends on the sample class implementation. |
| `REMOVE(REAL)` | Not specified | Remove/apply a numeric value. Exact behavior depends on the sample class implementation. |
| `ASSIGN(NETOBJECT)` | Not specified | Copy/assign another `NETOBJECT`; controls value semantics for PML assignment. |
| `DOSOMETHING(REAL, REAL, REAL)` | Not specified | Sample method with three numeric arguments. PMLNet method arguments are passed by reference. |
| `VAL()` | `REAL` | Get the sample `Val` property exposed as a PML getter. |
| `VAL(REAL)` | No result | Set the sample `Val` property exposed as a PML setter. |
| `METHODS()` | `ARRAY OF STRING` | Global method returning available method signatures. |
| `STRING()` | `STRING` | Calls the underlying `.NET ToString()` for the proxy. |

## Query Example

```pml
IMPORT 'PMLNetExample'
USING NAMESPACE 'AVEVA.PDMS.PMLNetExample'

!x = object NETOBJECT()
q var !x
q meth !x

!methods = !x.methods()
q var !methods
```

Expected method list:

```text
NETOBJECT ( )
NETOBJECT (REAL)
ADD (REAL)
REMOVE(REAL)
ASSIGN(AVEVA.PDMS.NAMESPACE.NETOBJECT)
DOSOMETHING(REAL, REAL, REAL)
```

## Value-Semantics Example

```pml
!a = object netobject()
!a.val(1)

!b = !a
!b.val(2)

-- returns 1 when Assign() performs value-copy semantics
q var !a.val()
-- returns 2
q var !b.val()
```

## Method Call Pattern

```pml
!obj = object NETOBJECT()

!x = 10.0
!y = 20.0
!z = 0.0

!obj.DoSomething(!x, !y, !z)
q var !z
```

## Notes for PML Code Generation

- Always load the assembly and namespace unless the user states they are already loaded.
- Use `q meth !obj` or `!obj.methods()` when method availability is uncertain.
- Use `REAL`, not integer, for numeric arguments.
- Do not pass PML system objects such as `DIRECTION` or `ORIENTATION` to PMLNet methods; pass strings, arrays, database reference strings, or valid proxy objects instead.

