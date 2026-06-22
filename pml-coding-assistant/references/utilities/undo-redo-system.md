# Undo & Redo System

AVEVA E3D exposes the undo and redo functionality to PML, allowing you to create and interact with the undo stack programmatically.

> **Source**: AVEVA Hull and Outfitting SP5 — Software Customization Reference

---

## How the Undo Stack Works

- Every database change can be wrapped in a **mark** (a snapshot of the DB state before the change).
- Each mark is pushed onto the **undo stack**.
- When the user undoes, the top entry is popped off the undo stack, the saved state is restored, and the entry is moved to the **redo stack**.
- When the **undo stack is empty**, the Undo button and menu option are greyed out.
- The **redo stack is cleared** if any new database change is made after an undo.
- The undo and redo stacks are **automatically cleared** after a `SAVEWORK` or `GETWORK`.
- The system always creates an **initial mark** the first time the database is changed in a session.

---

## Three Ways to Add Entries to the Undo Stack

### 1. MARKDB / ENDMARKDB Commands

The simplest approach for wrapping a block of command-line changes.

```pml
MARKDB 'Rename equipment'
name /NEW-TAG-001
ENDMARKDB
```

| Command | Purpose |
| :--- | :--- |
| `MARKDB 'text'` | Sets a database mark with an optional description. Multiple marks may be set. |
| `ENDMARKDB` | Closes the mark, recording the end of the change block. |

> The PML global function `MARKDB` (called without arguments) returns an array of all current mark descriptions on the undo stack.

### 2. UNDOABLE PML Object

Provides richer control: custom undo/redo/clear action strings and integration with `POSTEVENTS`.

```pml
!undo = object UNDOABLE()
!undo.description('Renamed equipment to /NEW-TAG-001')
!undo.undoAction('name /OLD-TAG')
!undo.redoAction('name /NEW-TAG-001')
!undo.add()

name /NEW-TAG-001

!undo.endundoable()
```

See [undoable-object.md](../object-types/undoable-object.md) for the full method reference.

### 3. Automatic — Graphical Model Editor

AVEVA E3D automatically creates undo entries whenever a model element is moved using graphical interaction techniques in the Model Editor. No PML code is required.

---

## Performing Undo and Redo

### From the UI
- Click the **Undo** button on the toolbar.
- Select **Edit → Undo** from the main menu.
- Press **Ctrl+Z**.

### From PML / Command Line

| Command | Purpose |
| :--- | :--- |
| `UNDODB` | Undo to the last mark. |
| `UNDODB n` | Undo `n` steps at once. |
| `REDODB` | Redo to the next mark. Multiple redos are allowed. Only valid after an undo — any DB change after an undo clears the redo stack. |

---

## MARKDB / UNDODB / REDODB — Worked Example

```pml
AREA 0

MARKDB 'First Mark'
AREA 100

MARKDB 'Second Mark'
AREA 200

MARKDB 'Third Mark'
AREA 300

$* Query the mark list
!MARKS = MARKDB
Q VAR !MARKS

UNDODB          $* AREA is now 200
UNDODB          $* AREA is now 100
UNDODB          $* AREA is now 0

REDODB          $* AREA is now 100
REDODB          $* AREA is now 200

AREA 99         $* New change — redo stack is cleared

UNDODB          $* AREA is now 200
REDODB          $* AREA is now 99 (re-done to the new change, not AREA 300)
```

---

## Reacting to Undo / Redo Events

Register a `POSTEVENTS` object to be notified after any undo or redo operation completes. Your `PostUndo` method is called with the description text of the undoable that was processed.

See [postevents-object.md](../object-types/postevents-object.md) for the full reference.

---

## See Also

| Reference | Purpose |
| :--- | :--- |
| [undoable-object.md](../object-types/undoable-object.md) | Full UNDOABLE object method reference |
| [postevents-object.md](../object-types/postevents-object.md) | Hooking into undo/redo events via POSTEVENTS |
| [general_commands.md](general_commands.md) | MARKDB / ENDMARKDB / UNDODB / REDODB command entries |
