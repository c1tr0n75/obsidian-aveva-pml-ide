# POSTEVENTS Object (!!postEvents)

The `POSTEVENTS` object is a specialized global object that allows developers to "hook" into system-level database events, specifically those related to the Undo/Redo stack. By defining a global instance named `!!postEvents`, your PML code can react every time a database mark is created or an undo/redo operation occurs.

## Methods to Implement
To use this object, you must define a custom object type and implement the following methods. The system will automatically call these methods if a global instance named `!!postEvents` of your type exists.

| Method Name | Arguments | Purpose |
| :--- | :--- | :--- |
| `PostMark(markName)` | STRING | Called after any database mark (undoable) is created. |
| `PostUndo(markName)` | STRING | Called after an 'Undo' operation has successfully completed. |
| `PostRedo(markName)` | STRING | Called after a 'Redo' operation has successfully completed. |

## Code Examples

### Setting Up a Global Event Listener
```pml
-- 1. Define the custom object type
define object postEventListener
endobject

define method .PostMark(!markName is STRING)
    $p System Mark Created: $!markName
endmethod

define method .PostUndo(!markName is STRING)
    $p Undo Performed for: $!markName
    -- e.g., Refresh a UI that shows database-backed data
endmethod

-- 2. Create the global instance
!!postEvents = object postEventListener()
```

## Best Practices
1.  **Global Naming**: The object **must** be named `!!postEvents` for the core system to recognize it and trigger the callbacks.
2.  **Performance**: These methods are called for *all* undoable actions, including core system commands. Keep your implementation extremely lightweight to avoid slowing down the user's modeling experience.
3.  **Error Handling**: Wrap your event logic in `handle any` blocks. An error inside a `PostMark` or `PostUndo` callback could potentially disrupt the user's workflow or prevent them from saving work if not handled gracefully.
4.  **Use Cases**: `PostEvents` is ideal for keeping custom UI grids, caches, or external files in sync with the current state of the database after an undo or redo.
5.  **State Management**: Be careful not to trigger *more* database changes inside these callbacks, as this could lead to infinite loops or a cluttered undo stack.

