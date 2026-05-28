
# AVEVA PML Error Handling

## Purpose

This document defines the recommended patterns, syntax, and implementation techniques for handling errors in AVEVA PML macros and functions.

The goal is to allow AI Agents and developers to:

- Write robust PML macros
- Avoid uncontrolled macro termination
- Capture and display diagnostic information
- Re-throw or suppress errors when required
- Build production-grade automation workflows
- Debug PML code safely

This document is based on the AVEVA Hull and Outfitting documentation regarding Errors and Error Handling.

---

# Error Fundamentals

## What Causes an Error

An error condition may occur when:

- A command fails
- Invalid syntax is used
- A variable does not exist
- A database element is invalid
- A function receives invalid input
- A macro references unavailable data
- Geometry operations fail
- File operations fail

Example:

```pml
$P $!FRED
```

Produces:

```text
(46,28) ERROR - Variable FRED not defined
```

Where:

- 46 = module/program section
- 28 = error code

---

# Default PML Error Behaviour

By default:

- An alert dialog appears
- An error message is displayed
- A traceback is generated
- Current PML execution is abandoned

Default mode:

```pml
ONERROR RETURN
```

Meaning:

- Current macro/function stops
- Calling macro may handle the error

---

# HANDLE Blocks

## Basic Syntax

```pml
handle (46,28)

    $P 'Variable does not exist'

endhandle
```

If the error matches:

- Error alert is suppressed
- Handle block executes instead

---

# ELSEHANDLE

## Multiple Error Handling

```pml
handle (46,27)

    $P 'Error 46,27 handled'

elsehandle (46,28)

    $P 'Error 46,28 handled'

elsehandle ANY

    $P 'Generic error handler'

elsehandle NONE

    $P 'Executed only if no errors'

endhandle
```

---

# HANDLE Keywords

## ANY

Handles any error.

```pml
handle ANY

    $P 'Unexpected error'

endhandle
```

---

## NONE

Executed only when no error occurred.

```pml
handle NONE

    $P 'No errors detected'

endhandle
```

---

# ONERROR Modes

## ONERROR RETURN

```pml
onerror RETURN
```

Recommended for production code.

---

## ONERROR GOLABEL

```pml
onerror GOLABEL /ErrorHandler

label /ErrorHandler

handle ANY

    $P 'Error trapped'

endhandle
```

Useful for centralized cleanup and logging.

---

## ONERROR CONTINUE

```pml
onerror CONTINUE
```

Suppresses alerts while continuing execution.

Use carefully.

---

## ONERROR PAUSE

```pml
onerror PAUSE
```

Suspends execution and allows interactive debugging.

Resume using:

```pml
$M+
```

Do not leave in production macros.

---

# Error Diagnostics

## Error Object

```pml
!!Error
```

---

## Error Text

```pml
$P $!!Error.Text
```

---

## Error Command

```pml
$P $!!Error.Command
```

---

## Error Line

```pml
$P $!!Error.Line
```

---

## Callstack

```pml
do !line values !!Error.Callstack

    $P $!line

enddo
```

---

# Re-Throwing Errors

## RETURN ERROR

```pml
return error
```

---

## RETURN ERROR NOALERT

```pml
return error noalert
```

Useful for automation.

---

# Creating Custom Errors

```pml
return error 1
```

Or:

```pml
return error 1 'Custom export failure'
```

Or:

```pml
return error 1 NOALERT
```

---

# Handling Custom Errors

```pml
handle 1

    $P 'Custom error handled'

endhandle
```

---

# Recommended Production Pattern

```pml
onerror GOLABEL /ErrorHandler

$P 'Starting export'

EXPORT FINISH

$P 'Export completed'

return

label /ErrorHandler

handle ANY

    $P 'Export failed'

    $P $!!Error.Text
    $P $!!Error.Command
    $P $!!Error.Line

    do !line values !!Error.Callstack

        $P $!line

    enddo

endhandle
```

---

# Recommended AI Agent Behaviour

## ALWAYS

- Use HANDLE blocks for risky operations
- Use diagnostic outputs
- Prefer ONERROR RETURN
- Use NOALERT for automation
- Print callstacks in debug workflows

---

## NEVER

- Leave ONERROR PAUSE in production
- Use ONERROR CONTINUE blindly
- Suppress all errors silently
- Ignore export failures
- Ignore file creation errors

---

# Batch Automation Pattern

```pml
onerror CONTINUE

do !site values !sites

    handle ANY

        $P 'Processing site: ' & !site

    elsehandle ANY

        $P 'Failed site: ' & !site
        $P $!!Error.Text

    endhandle

enddo
```

---

# Important Commands Summary

## Error Modes

```pml
onerror RETURN
onerror CONTINUE
onerror PAUSE
onerror GOLABEL /LabelName
```

---

## Handle Blocks

```pml
handle (46,28)
handle ANY
handle NONE
elsehandle ANY
endhandle
```

---

## Diagnostics

```pml
$!!Error.Text
$!!Error.Command
$!!Error.Line
!!Error.Callstack
```

---

## Re-Throw

```pml
return error
return error noalert
```

---

## Custom Errors

```pml
return error 1
return error 1 'Message'
```

---

# Conclusion

Robust error handling is essential for professional AVEVA PML development.

Proper use of:

- HANDLE
- ELSEHANDLE
- ONERROR
- RETURN ERROR
- Diagnostic tracing

allows the creation of stable automation macros suitable for:

- Industrial workflows
- Batch exports
- RVM generation
- Database automation
- Production engineering environments
