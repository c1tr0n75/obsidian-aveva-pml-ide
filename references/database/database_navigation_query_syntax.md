# AVEVA E3D Design Database Navigation and Query Syntax

_Source document: AVEVA™ E3D Design 3.1 — Database Navigation and Query Syntax._

## Purpose

Use this reference when generating or reviewing AVEVA E3D Design PML related to database navigation and query syntax.

This file covers:

- Current Element and Current Position
- PML `DBREF` object and `!!CE`
- Navigation by standard name, constructed name, world, refno, and `BACKREF`
- Relative navigation up, across, and down the hierarchy
- `OF`, `GOTO`, `SAME`, and ID expression syntax
- UDET navigation cases
- `TRACE` command behavior
- Pseudo attributes relating to navigation

---

## Current Element

The AVEVA E3D Design database has a concept of the **Current Element**, often referred to as **CE**.

The current element is highlighted in the explorer. In the 3D view, the current element is shown in a different color.

Many PML commands work on the current element.

The current element can be changed in the following ways:

- By picking an element in the explorer
- By picking an element in the 3D view
- By typing an element name into the name box
- By typing a navigation command at the command line

---

## Current Position

AVEVA E3D Design also has a concept of a **current position**.

The current position is only used:

- When creating elements
- When navigating down to the next level

By default, the current position is **before the first member**.

---

## PML `DBREF` Object

PML supports a **Database Reference** object, named `DBREF`.

A `DBREF` object identifies an element in the AVEVA E3D Design database.

Various methods are available on the `DBREF` object. These methods are described in the Software Customization Reference documentation.

---

## PML `!!CE` Variable

PML includes a global `DBREF` variable named:

```pml
!!CE
```

This variable tracks the database current element.

The `!!CE` object may be used or queried at any time.

---

# Absolute Navigation

## Specify the Standard Name

The simplest way of navigating around the database is to enter the name of the element at the command line.

A name is always preceded by a slash.

Examples:

```pml
/PUMP99
/BRANCH2
```

After entering:

```pml
/BRANCH2
```

`/BRANCH2` becomes the Current Element.

---

## Specify the Constructed Name

Unnamed elements always have a constructed name.

The constructed name consists of:

1. The type and relative position in its owner's list
2. The `OF` keyword
3. The constructed name of its parent

If the constructed name is given, that element becomes the Current Element.

Examples:

```pml
BOX 2 OF /PUMP99
NBOX 1 OF CYL 2 OF EQUI 4 OF ZONE 9 OF /MYSITE
```

If the element is a UDET, then the UDET name must be used instead of the system type.

Example:

```pml
NBOX 1 OF :MYCYL 1 OF :PUMP 3 OF ZONE 9 OF /MYSITE
```

---

## Specify the World

The world element can be accessed by name or by type:

```pml
/*
WORLD
```

---

## Specify the Refno

The reference number can always be used to navigate to an element.

Example:

```pml
=1234/5678
```

---

## Use the `BACKREF` Attribute

The `BACKREF` attribute brings the back pointer reference for Reference Table Attributes and answers the question:

> What references me, the Current Element?

Syntax:

```pml
Q BACKREF [(ATTNAME att1 [, ATTNAME att2] )]
```

Example context:

Standing on a Specific Component, `SPCO`, querying `BACKREF` with an attribute name returns all elements referencing that `SPCO`.

Example:

```pml
Q BACKREF( ATTNAME SPCO )
```

Excluding the argument lists all Reference Table Attributes referencing the Current Element.

Example:

```pml
Q BACKREF
```

---

# Relative Navigation in the Hierarchy

Relative navigation can be done using commands to:

- Climb up
- Move within the current level
- Move to the next lower level

---

## Climb Up

The following syntax is valid.

| Syntax | Effect |
|---|---|
| `OWNER` | Climbs to the owning element. The owning element becomes the Current Element. The current position is then before the first member. |
| `END` | Climbs to the owning element. The owning element becomes the Current Element. The current position is at the previous element. |
| `<Element type>` | Climbs to an element of that type. This element becomes the new Current Element. The current position is left at the immediate member element that was climbed through. |

Example hierarchy:

```text
/*
/MYSITE
/MYZONE
/MYEQUI
/MYBOX
```

If the Current Element is:

```pml
/MYBOX
```

Then:

| Command | Result |
|---|---|
| `OWNER` | CE becomes `/MYEQUI`. The current position is now before the first member. |
| `END` | Climbs to `/MYEQUI`, but leaves the current position at `/MYBOX`. |
| `EQUI` | Climbs to `/MYEQUI`, and leaves the current position at `/MYBOX`. |
| `SITE` | Climbs to `/MYSITE`, and leaves the current position at `/MYZONE`. |

---

# Move Within the Current Level

The following commands move within the current level.

| Syntax | Effect |
|---|---|
| `NEXT` | Goes to next element at current level. |
| `NEXT int` | Goes to next nth element at current level. |
| `NEXT <element type>` | Goes to next element of given type at current level. |
| `NEXT int <element type>` | Goes to next nth element of given type at current level. |
| `PREV` | Goes to previous element at current level. |
| `PREV int` | Goes to previous nth element at current level. |
| `PREV <element type>` | Goes to previous element of given type at current level. |
| `PREV int <element type>` | Goes to previous nth element of given type at current level. |
| `FIRST` | Goes to first element at current level. |
| `FIRST int` | Goes to nth element at current level. |
| `FIRST <element type>` | Goes to first element of given type. |
| `FIRST int <element type>` | Goes to nth element of given type. |
| `LAST` | Goes to last element at current level. |
| `LAST int` | Goes to nth from last element at current level. |
| `LAST <element type>` | Goes to last element of given type. |
| `LAST int <element type>` | Goes to nth last element of given type. |
| `<element type> int` | Same as `FIRST int <element type>`. |

If a UDET is used, then the UDET type must be given.

---

## Example: Moving Within the Current Level

Current list:

```text
1 BOX  /MyBoxA
2 CYL  /MyCylA
3 CYL  /MyCylB
4 RTOR /MyRtorA
5 CYL  /MyCylC
6 BOX  /MyBoxB
7 BOX  /MyBoxC
8 CYL  /MyCylD
9 BOX  /MyBoxD
```

The Current Element is:

```pml
/MyCylC
```

Results:

| Command | Result |
|---|---|
| `NEXT` | Moves CE to `/MyBoxB`. |
| `NEXT 3` | Moves CE to `/MyCylD`. |
| `NEXT CYL` | Moves CE to `/MyCylD`. |
| `NEXT 3 BOX` | Moves CE to `/MyBoxD`. |
| `PREV` | Moves CE to `/MyRtorA`. |
| `PREV 2` | Moves CE to `/MyCylB`. |
| `PREV BOX` | Moves CE to `/MyBoxA`. |
| `PREV 2 CYL` | Moves CE to `/MyCylA`. |
| `FIRST` | Moves CE to `/MyBoxA`. |
| `FIRST 2` | Moves CE to `/MyCylA`. |
| `FIRST CYL` | Moves CE to `/MyCylA`. |
| `FIRST 3 CYL` | Moves CE to `/MyCylC`. |
| `BOX 2` | Same as `FIRST 2 BOX`. Moves CE to `/MyBoxB`. |
| `LAST` | Moves CE to `/MyBoxD`. |
| `LAST 2` | Moves CE to `/MyCylD`. |
| `LAST CYL` | Moves CE to `/MyCylD`. |
| `LAST 3 CYL` | Moves CE to `/MyCylB`. |

---

# Move to the Next Lower Level

The syntax for moving down a level shares much of the syntax for moving within the level.

| Syntax | Effect |
|---|---|
| `int` | Descends to nth child. |
| `FIRST MEMBER` | Goes to 1st member. |
| `LAST MEMBER` | Goes to last member. |
| `FIRST <element type>` | Goes to first member of given type. |
| `FIRSTMEMBER <element type>` | Goes to first member of given type. |
| `FIRST int <element type>` | Goes to nth element of given type in members list. |
| `LAST <element type>` | Goes to last member of given type. |
| `LASTMEMBER <element type>` | Goes to last member of given type. |
| `LAST int <element type>` | Goes to nth last element of given type in members list. |
| `NEXT <element type>` | Goes to next element in member list from current position. |
| `NEXT int <element type>` | Goes to next nth element in member list of given type from current position. |
| `PREV <element type>` | Goes to next element in member list from current position. |
| `PREV int <element type>` | Goes to previous nth element in member list of given type from current position. |
| `<element type> int` | Descends to nth child of given type. |

---

## Example: Moving Down from an Owning Equipment

Using the same list as before, assume the Current Element is the owning equipment:

```pml
/MYEQUI
```

The current position is defaulted to the start of the list.

Member list:

```text
1 BOX  /MyBoxA
2 CYL  /MyCylA
3 CYL  /MyCylB
4 RTOR /MyRtorA
5 CYL  /MyCylC
6 BOX  /MyBoxB
7 BOX  /MyBoxC
8 CYL  /MyCylD
9 BOX  /MyBoxD
```

Results:

| Command | Result |
|---|---|
| `5` | Moves CE to `/MyCylC`, the 5th member. |
| `FIRST MEMBER` | Moves CE to `/MyBoxA`. |
| `LAST MEMBER` | Moves CE to `/MyBoxD`. |
| `FIRST CYL` | Moves CE to `/MyCylA`. |
| `FIRST 3 CYL` | Moves CE to `/MyCylC`. |
| `LAST CYL` | Moves CE to `/MyCylD`. |
| `LAST 2 CYL` | Moves CE to `/MyCylC`. |
| `NEXT CYL` | Moves CE to `/MyCylA`, same as `FIRST CYL`. |
| `NEXT 2 CYL` | Moves CE to `/MyCylB`, same as `FIRST 2 CYL`. |
| `PREV CYL` | Invalid because there are no cylinders before the current position. |
| `BOX 4` | Moves CE to `/MyBoxD`. |

In these examples, `NEXT` has the same result as `FIRST`, and `PREV` is invalid because the current position is before the start of the list.

The current position can be changed using the `END` syntax.

Example:

```pml
/MyCylB
END
```

The CE is `/MyEqui`, but the current position is now at `/MyCylB`.

Results:

| Command | Result |
|---|---|
| `NEXT CYL` | Moves CE to `/MyCylC`. |
| `NEXT 2 CYL` | Moves CE to `/MyCylD`. |
| `PREV CYL` | Moves CE to `/MyCylA`. |

---

# Syntax Ambiguity Between Moving Across and Down

In most cases there is no ambiguity when the same syntax can move down or move across.

This is because it is rare to have the same element type as both a sibling and a member.

However, this can occur. In these cases, the default is to **move down rather than across**.

Example hierarchy:

```text
/Zone1
├── /BoxA
├── /SUBE1
│   ├── /BoxX
│   └── /BoxY
├── /BoxB
└── /SUBE2
```

If the Current Element is:

```pml
/SUBE1
```

Then:

| Command | Result |
|---|---|
| `BOX 1` | Moves CE to `/BoxX`, not `/BoxA`. |
| `NEXT BOX` | Moves CE to `/BoxX`, not `/BoxB`. |
| `LAST BOX` | Moves CE to `/BoxY`, not `/BoxB`. |

---

# Climb Up by Default

Commands that move to an element at the same level may also be used for elements at any higher level.

If the command is invalid at the Current Element, AVEVA E3D Design keeps climbing until the command becomes valid.

Using the previous example, if the Current Element is:

```pml
/BoxY
```

Then:

| Command | Result |
|---|---|
| `SUBE 2` | Moves CE to `/SUBE2`. |
| `LAST SUBE` | Moves CE to `/SUBE2`. |
| `FIRST ZONE` | Moves CE to `/Zone1`, assuming this is the first zone. |

---

# Use the `OF` Syntax

The navigation commands described so far work on the Current Element.

It is allowable to do navigation relative to any element using the `OF` syntax.

Example:

```pml
FIRST MEMBER OF /ZONE1
```

The constructed name is an example of the use of the `OF` syntax.

The `OF` syntax can be nested as much as required.

Example:

```pml
FIRST MEMBER OF FIRST BOX OF NEXT EQUI
```

---

# Other Syntax

## Use the `GOTO` Syntax

The `GOTO` command can be used to go to any reference attribute unless the attribute is the name of the element type. In the case of the latter, you must use the name directly.

Example:

```pml
GOTO CREF
```

Example:

```pml
/PIPEA
```

This goes to the element /PIPEA directly. When the name of the element type is used, E3D assumes that you are trying to navigate to an element of that type, not to a reference attribute. This is the preferred method for going to an element by name.

As with other navigation commands, the `OF` syntax may be used to go to a reference on a different element.

Example:

```pml
GOTO HREF OF /BRANCH88
```

Pseudo attributes can be specified after `GOTO`.

A useful pseudo attribute is `FRSTW`, which goes to the first world of a given type.

Example:

```pml
GOTO FRSTW CATA
```

This goes to the first catalog world.

---

## Navigation via PML Variables (Command Expansion)

When navigating to a database element stored in a PML variable (whether it is of type `DBREF` or a `STRING` containing the element name or RefNo), you must use the command expansion operator `$` (e.g. `$!var`). 

Because command line navigation commands are PML 1 / legacy database commands, writing the variable name directly (e.g. `!ref`) will fail or be ignored by the command processor.

Example:
```pml
!target = object DBREF('/31-ES01')
$!target  $* Correct: Evaluates to '/31-ES01' and navigates to the element.
```

Wrong syntax:
```pml
!target = object DBREF('/31-ES01')
!target  $* WRONG: Command processor does not evaluate variables on their own.
```

---

## Return to the Previous Current Element

The `SAME` command always returns to the previous Current Element.

Example:

```pml
/VESS1
/SECTION99
SAME
```

The Current Element is now:

```pml
/VESS1
```

---

# ID Expressions

The navigation commands above are examples of an identification expression, also called an ID expression.

The exception is the `GOTO` syntax. The `GOTO` keyword is omitted within an ID expression.

ID expressions should be enclosed in brackets, although in most cases they work without the brackets.

An ID expression may be queried or assigned to a PML variable.

Querying an expression or assigning it to a PML variable does not change the Current Element.

Examples:

```pml
Q ( NEXT BOX )
!MyEle = ( NEXT BOX )
!MyEle = ( NEXT BOX OF /VESS1 )
!MyEle = ( SPRE )
```

Assigning an ID expression to a PML variable is a common way to write PML.

---

# Special Cases

## UDETs

A User Defined Element Type, or UDET, may be used wherever an element type is valid.

Examples:

```pml
(:MYBOX 1 OF /VESS1 )
NEXT :MYBOX
FIRST 2 :MYBOX
```

The following exception applies:

When climbing, either the UDET or the base type may be specified.

Example context:

At a `BOX` below `/VESSEL`, where `/VESSEL` is a `:MYEQUIP`.

Both commands climb to `/VESSEL`:

```pml
:MYEQUIP
EQUIP
```

---

## Trace Command

If in TeleTypewriter, or TTY, mode, the command:

```pml
TRACE ON/OFF
```

can be turned on to track changes in the Current Element.

The default is on.

---

# Pseudo Attributes Relating to Navigation

The following pseudo attributes relate to the database hierarchy.

They can be queried directly or via a PML variable.

| Attribute Name | Data Type | Qualifier | Description |
|---|---:|---|---|
| `ALLELE` | `DBREF` | `ElementType` | All elements in the MDB of a particular type. |
| `CONNECTIONS` | `DBREF array` |  | Connections. |
| `CONNECTIONSH` | `DBREF array` |  | Connections for all descendants. |
| `CONNER` | `String` | `Int` | Connection error message. |
| `DDEP` | `Int` |  | Database depth within hierarchy. World is `0`. |
| `FRSTW` | `DBREF` | `String` | Reference of first world of given DB type in current MDB. |
| `MAXD` | `Int` |  | DB hierarchy depth of lowest level item beneath element. |
| `MBACK` | `DBREF array` | `*ElementType` | Members in reverse order. |
| `MCOU` | `Int` | `*ElementType` | Number of element members of given type. |
| `MEMB` | `DBREF array` | `*ElementType` | All members, or members of specific type. |
| `OWNLST` | `DBREF array` |  | Owning hierarchy. |
| `PARENT` | `DBREF` | `*ElementType` | Reference of ascendant element of specified type. |
| `SEQU` | `Int` |  | Sequence position in member list. |
| `TYSEQU` | `Int` |  | Type sequence number. |

`*` means the qualifier is optional.

---

# Quick Syntax Reference

## Navigation by Name or Reference

```pml
/PUMP99
/BRANCH2
/*
WORLD
=1234/5678

!tmpref = !!ce.refno or !tmpref = refno of CE (Store the reference number)
!!CE = !tmpref (navigate to the element with the reference stored earlier)
```

## Constructed Names

```pml
BOX 2 OF /PUMP99
NBOX 1 OF CYL 2 OF EQUI 4 OF ZONE 9 OF /MYSITE
NBOX 1 OF :MYCYL 1 OF :PUMP 3 OF ZONE 9 OF /MYSITE
```

## Back References

```pml
Q BACKREF [(ATTNAME att1 [, ATTNAME att2] )]
Q BACKREF( ATTNAME SPCO )
Q BACKREF
```

## Climb Up

```pml
OWNER
END
<Element type>
```

## Move Across Current Level

```pml
NEXT
NEXT int
NEXT <element type>
NEXT int <element type>

PREV
PREV int
PREV <element type>
PREV int <element type>

FIRST
FIRST int
FIRST <element type>
FIRST int <element type>

LAST
LAST int
LAST <element type>
LAST int <element type>

<element type> int
```

## Move Down to Next Lower Level

```pml
int
FIRST MEMBER
LAST MEMBER

FIRST <element type>
FIRSTMEMBER <element type>
FIRST int <element type>

LAST <element type>
LASTMEMBER <element type>
LAST int <element type>

NEXT <element type>
NEXT int <element type>

PREV <element type>
PREV int <element type>

<element type> int
```

## `OF` Syntax

```pml
FIRST MEMBER OF /ZONE1
FIRST MEMBER OF FIRST BOX OF NEXT EQUI
```

## `GOTO` Syntax

```pml
GOTO CREF
GOTO HREF OF /BRANCH88
GOTO FRSTW CATA
```

## Previous Current Element

```pml
SAME
```

## ID Expressions

```pml
Q ( NEXT BOX )
!MyEle = ( NEXT BOX )
!MyEle = ( NEXT BOX OF /VESS1 )
!MyEle = ( SPRE )
```

## UDETs

```pml
(:MYBOX 1 OF /VESS1 )
NEXT :MYBOX
FIRST 2 :MYBOX
:MYEQUIP
EQUIP
```

## Trace

```pml
TRACE ON/OFF
```
