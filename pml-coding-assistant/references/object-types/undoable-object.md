# UNDOABLE Object

The `UNDOABLE` object allows you to add functionality to the undo and redo stacks. Create an undoable object, define its action commands, mark the database with `add()`, perform your changes, then close the block with `endundoable()`.

> **Source**: [AVEVA Documentation – Hull and Outfitting SP5](https://docs.aveva.com/bundle/hull-and-outfitting/page/1079622.html)

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `description(STRING)` | NO RESULT | Adds description text to the undoable. |
| `add()` | NO RESULT | Marks the database with the description text and adds this undoable to the undo stack. |
| `endundoable()` | NO RESULT | Marks the database again at the end of the change. |
| `undoAction(STRING)` | NO RESULT | Specify a command to be executed when this undoable is taken off the undo stack. |
| `redoAction(STRING)` | NO RESULT | Specify a command to execute when this undoable is taken off the redo stack. |
| `clearAction(STRING)` | NO RESULT | Specify a command to execute when this undoable is cleared without any associated undo/redo being performed. |

---

## Usage Pattern

1. Create an `UNDOABLE` object and optionally define `undoAction()`, `redoAction()`, and `clearAction()` to specify the execution strings for each event.
2. Call `description()` to label the operation.
3. Call `add()` to mark the database and push the undoable onto the undo stack.
4. Perform all database changes you wish to make undoable.
5. Call `endundoable()` to mark the end of the change block.

> **Important**: Always call `endundoable()` — including inside `handle` error blocks — to avoid leaving the undo stack in a broken state.

---

## Code Example

### Basic Delete with Undo Support

```pml
-- Create and configure the undoable
!undo = object UNDOABLE()
!undo.description('Deleted selected elements')
!undo.add()

-- Perform database changes
do !elem values !elemArray
    CALLIB MDELCE !elem true true false false
    handle ANY
        -- Always end the undoable block on error
        !undo.endundoable()
        return error 1 |$!!ERROR.TEXT|
    endhandle
enddo

-- Close the undoable block
!undo.endundoable()
```

### With Custom Undo/Redo/Clear Actions

```pml
!undo = object UNDOABLE()
!undo.description('Moved equipment to new position')
!undo.undoAction('!!myForm.restorePosition()')
!undo.redoAction('!!myForm.reapplyPosition()')
!undo.clearAction('!!myForm.clearPositionHistory()')
!undo.add()

-- ... make database changes ...

!undo.endundoable()
```

---

## See Also

- [undo-redo-system.md](../utilities/undo-redo-system.md) — Full E3D undo/redo system overview: MARKDB/ENDMARKDB commands, UNDODB/REDODB, how the stacks work, and POSTEVENTS integration.
- [postevents-object.md](postevents-object.md) — Hook into undo/redo events with the POSTEVENTS object.
