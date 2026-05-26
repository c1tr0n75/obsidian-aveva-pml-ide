# AVEVA E3D Design - Database Modification

## Scope

This Markdown file summarizes the AVEVA E3D Design database modification commands described in the source PDF. It covers commands to create, copy, modify, delete, and reorganize database elements.

## Modify the Content of a DB

As well as accessing the current content of a Database (DB), a DB may be modified if the user has Read/Write access rights.

The DB can be modified in the following ways:

- Create a new element at an appropriate level of the DB hierarchy.
- Delete an element from the DB hierarchy.
- Reorganize the hierarchy:
  - By rearranging members of an element into a different list order.
  - By moving an element from one part of the hierarchy to another.
- Define the attributes and offspring of a new element by copying the corresponding attribute, settings, and member lists from another element.

---

# Create a New Element

To create a new element within an existing Database (DB), first make sure that the Current Element (CE) is at a level within the hierarchy that can legally own the element to be created.

Examples:

- A Site can own a Zone.
- A Site cannot own a Valve.
- To create a new Valve, the current level must be Branch level.

Use database navigation commands to navigate to the correct level.

The query below tells which element types can be created as members of the Current Element:

```pml
Q LIST
```

After navigating to the correct level, create a new element, set its attributes, and, if required, create further elements as its members.

## Create an Element After the Current List Position

If an element is created without explicitly identifying its position in the Member List of the Current Element, the new element is inserted immediately after the Current List Position.

Syntax:

```pml
NEW element_type element_name
```

`element_name` is optional.

Example:

If the Current List Position is at member 4, `/VALV1`, of the Member List, the command:

```pml
NEW TEE /TEE2
```

adds a new Tee at list position 5, between `/VALV1` and `/ELBO2`, and names it `/TEE2`.

The Member List of `/BRAN1` becomes:

```text
1  /GASK1
2  /FLAN1
3  /ELBO1
4  /VALV1
5  /TEE2
6  /ELBO2
7  /TEE1
8  /ELBO3
9  /FLAN2
10 /GASK2
```

To insert the new Tee as the first or last component in the Member List, access the Branch Head or Tail respectively before giving the `NEW TEE` command.

## Create an Element at a Specified List Position

To create a new element at a specified list position, identify a list position adjacent to the required position and state which side of it the newly created element is to go.

Syntax:

```pml
NEW element_type element_name BEFore list_position
NEW element_type element_name AFTer list_position
```

`element_name` is optional.

`list_position` may be specified in any of the ways described in Database Navigation and Query Syntax.

Starting from the configuration where `/ELBO3` is at list position 7 and `/FLAN2` is at list position 8, any of the following commands creates a new Tee between `/ELBO3` and `/FLAN2`:

```pml
NEW TEE AFTER /ELBO3
```

Specifies name or reference number.

```pml
NEW TEE BEFORE 8
```

Specifies list position number.

```pml
NEW TEE BEFORE FLAN 2
```

Specifies member type and number, here the second Flange in the list.

```pml
NEW TEE AFTER LAST ELBO
```

Specifies first or last member of a given type, here the last Elbow in the list.

```pml
NEW TEE AFTER NEXT 3
```

Specifies position relative to Current List Position.

```pml
NEW TEE BEFORE LAST FLAN
```

Specifies first or last member of a given type.

The new Tee, which is unnamed, becomes list member 7. `/ELBO3` becomes list member 8, `/FLAN2` becomes list member 9, and so on.

## Creating a Top Level Element in a Specific Database

To create a new top level element in a specific database, use the `DB` keyword in the syntax of the `NEW` command.

Syntax:

```pml
NEW element_type element_name DB database_name
```

`element_name` is optional.

`database_name` is expressed as a fully qualified database name, for example:

```text
team/database
```

Example:

The following command creates a new Site named `/MYSITE` in the `MYTEAM/MYDB` database:

```pml
NEW SITE /MYSITE DB MYTEAM/MYDB
```

---

# Delete an Element

An entire Current Element or some or all of its offspring can be deleted.

When the Current Element is deleted, all its offspring are also deleted from the hierarchy. Offspring means its members, their members, and so on. The command must therefore be used with care.

When an element has been deleted, its Owner becomes the new Current Element.

Safeguards against accidental deletion:

- The deletion function operates only on the Current Element.
- The command word `DELETE` must be entered in full.
- The command syntax requires confirmation of the generic type of the Current Element.
- Access to the required element and its subsequent deletion must be specified in two separate command lines.

## Delete the Current Element and All Its Offspring

Syntax:

```pml
DELETE element_type
```

Example: delete a Nozzle.

Make the Nozzle the Current Element, then enter:

```pml
DELETE NOZZ
```

The Equipment that owned the Nozzle becomes the Current Element.

Example: delete a complete Zone, including all Equipment, Piping, Structures, etc. owned by it.

Make the Zone the Current Element, then enter:

```pml
DELETE ZONE
```

The Site that owned the deleted Zone becomes the Current Element.

## Delete Specified Members of the Current Element

Syntax:

```pml
DELETE element_type MEMbers
DELETE element_type MEMbers integer
DELETE element_type MEMbers integer TO integer
```

Examples where the Current Element is `/BRAN1`:

```pml
DELETE BRAN MEMBERS
```

Deletes all components from the Branch, leaving only the Branch Head and Tail.

```pml
DELETE BRAN MEMBER 6
```

Deletes only `/TEE1`.

```pml
DELETE BRAN MEMBERS 5 TO 7
```

Deletes `/ELBO2`, `/TEE1`, and `/ELBO3`.

---

# Reorganize the DB Hierarchy

The structure of the Database (DB) hierarchy can be reorganized without elements being added to or removed from its contents.

This can be done in either of two ways:

- By rearranging the order of the Member List of a single element.
- By relocating an element to a different part of the hierarchy.

In both cases, elements and their offspring are transferred to new positions in the hierarchy.

- When rearranging the order of a Member List, the element's owner remains unchanged.
- When relocating an element to a different part of the hierarchy, the element's owner changes.

## Rearrange the Member List of the Current Element

To rearrange the Member List of the Current Element (CE), use one of the following commands:

```pml
REOrder element_id
REOrder element_id BEFore list_position
REOrder element_id AFTer list_position
```

`element_id` specifies the element to be moved. It must be a member of the Current Element.

`list_position` may be specified in any of the ways described in Database Navigation and Query Syntax.

If `list_position` is omitted, the intended position is assumed to be immediately after the Current List Position.

Example starting Member List:

```text
1 /GASK1
2 /FLAN1
3 /ELBO1
4 /VALV1   <- Current List Position
5 /ELBO2
6 /TEE1
7 /ELBO3
8 /FLAN2
9 /GASK2
```

Command:

```pml
REORDER /ELBO3
```

This moves `/ELBO3` to position 5, immediately following the Current List Position.

Resulting Member List:

```text
1 /GASK1
2 /FLAN1
3 /ELBO1
4 /VALV1   <- Current List Position
5 /ELBO3
6 /ELBO2
7 /TEE1
8 /FLAN2
9 /GASK2
```

Starting from either of the above configurations, the command:

```pml
REORDER /ELBO3 BEFORE FIRST ELBO
```

moves `/ELBO3` to position 3, immediately before `/ELBO1`.

Resulting Member List:

```text
1 /GASK1
2 /FLAN1
3 /ELBO3
4 /ELBO1
5 /VALV1   <- Current List Position
6 /ELBO2
7 /TEE1
8 /FLAN2
9 /GASK2
```

## Insert an Existing Element into the Member List of the Current Element

To insert an existing element into the Member List of the Current Element when it is not already a member of that list, use one of the following commands:

```pml
INCLude element_id
INCLude element_id BEFore list_position
INCLude element_id AFTer list_position
```

`element_id` specifies an element to be moved. It may be anywhere within the DB hierarchy as long as it is at an appropriate level.

`list_position` may be specified in any of the ways described in Database Navigation and Query Syntax.

If `list_position` is omitted, the intended position is assumed to be immediately after the Current List Position.

Example starting hierarchy:

```text
/SITE3
├─ /ZONE1   <- Current Element
│  ├─ /EQUIP1
│  ├─ /PIPE1   <- Current List Position
│  └─ /STRUC1
└─ /ZONE2
   ├─ /EQUIP2
   ├─ /PIPE2
   └─ /STRUC2
```

Command:

```pml
INCLUDE /PIPE2
```

This moves `/PIPE2` and all its offspring to the position immediately following the Current List Position. Ownership of `/PIPE2` passes from `/ZONE2` to `/ZONE1`.

Resulting hierarchy:

```text
/SITE3
├─ /ZONE1   <- Current Element
│  ├─ /EQUIP1
│  ├─ /PIPE1
│  ├─ /PIPE2   <- Current List Position
│  └─ /STRUC1
└─ /ZONE2
   ├─ /EQUIP2
   └─ /STRUC2
```

---

# Copy Attributes from One Element to Another

It is often convenient to create a new element as a copy of an existing element that has the same, or similar, attribute settings or members to those required.

This is done in two stages:

1. Create a new element, which becomes the Current Element (CE).
2. Copy the attributes of another element, the source element, so that they also become the attributes of the newly created Current Element, the target element.

The existing attribute settings, usually the defaults, are overwritten by the copied settings.

When an element is cloned in this way:

- All attributes are copied from the source element to the target element except `NAME` and `LOCK`.
- `NAME` must be unique.
- `LOCK` is always unlocked in the target element.
- All offspring of the source element are copied as offspring of the target element.

If the Current Element already has members, it is not possible to make it a copy of another element in this way.

Automatic renaming of the Current Element and its offspring may be specified as part of the copying process.

Without automatic renaming, the new elements will be unnamed, because AVEVA E3D Design does not permit two elements in the same Database (DB) hierarchy to have identical names.

It is also possible to copy only the members and their offspring of the source element, leaving the attributes of the Current Element itself unchanged.

## Copy a Complete Element and All of Its Offspring

After creating a new Current Element of an appropriate type, use:

```pml
COPY element_id
```

`element_id` identifies the source element to be copied.

Example command sequence at Zone level:

```pml
NEW EQUI /EQUIPB
COPY /EQUIPA
```

This creates `/EQUIPB` as the Current Element and then turns it into an exact copy of `/EQUIPA`.

All attributes and members of `/EQUIPB` now have the same settings as those of `/EQUIPA`, including its position, orientation, etc.

## Copy All Offspring of an Element

To copy all offspring of an element so that they create duplicate offspring for the Current Element, use:

```pml
COPY MEMbers OF element_id
```

The position, orientation, etc., of the Current Element remain unchanged. The Current Element acquires new members derived from the specified source element, correctly positioned relative to the Current Element.

## Copy Selected Offspring of an Element

To copy selected offspring of an element so that they create duplicate offspring for the Current Element, use:

```pml
COPY MEMbers integer TO integer OF element_id
```

Example:

```pml
NEW BRAN /SIDEARM
COPY MEMBERS 12 TO 20 OF /MAINLINE
```

This creates a new Branch named `/SIDEARM` whose components replicate that part of the existing Branch `/MAINLINE` between the specified list positions.

The attributes of Branch `/SIDEARM` itself are unaffected by the `COPY` command, so its position, orientation, etc., as defined by its Head and Tail settings, remain unchanged by the addition of its new members.

## Copy Attributes from an Identified Element into the Current Element

Syntax:

```pml
COPY ATTributes OF element_id
```

This causes all attributes to be copied to the current element except:

- References to elements in DESI databases.
- `OWNER`.

Alternative syntax:

```pml
COPY LIKE element_id
```

This is similar to the `ATTRIBUTES` option, except that, as well as DESI references not being copied, neither are any position, direction, orientation, or angle attributes.

In both cases, the Specification Reference (`SPREF`) and Catalog Reference (`CATREF`) are also not copied between elements of different types.

## Copy Elements Alongside Their Original Positions

Syntax:

```pml
COPY ADJ/ACENT select
```

This option causes a list of elements, defined by the selection criterion `select`, to be copied alongside their original positions in the database.

If the list includes a `SCTN` and a `PNOD`, for example, then each of these items is copied so that:

- The new `SCTN` shares the same owner as the old `SCTN`.
- The new `PNOD` shares the same owner as the old `PNOD`.

As this option copies elements, rather than just attributes, other `COPY` options such as `RENAME` are valid.

## Copy All or Part of an Element and Rename the Copies

To copy all or part of an element and rename the copies, append the following command to the corresponding `COPY` command line:

```pml
... REName old_name new_name
```

Example:

```pml
COPY /FRACT1/PIPE RENAME /FRACT1 /FRACT2
```

This copies all attributes and offspring of `/FRACT1/PIPE` into the Current Element.

Where `/FRACT1` occurs as the name or part of the name, it is changed to `/FRACT2` in the Current Element and its offspring.

Thus the Current Element itself is now named `/FRACT2/PIPE`, and so on.

---

# Related Pseudo Attributes

| Attribute Name | Data Type | Qualifier | Description |
|---|---:|---|---|
| `DACCOH` | `BOOL` |  | True if DAC allows element hierarchy to be copied to another DB |
| `DACCOP` | `BOOL` |  | True if DAC allows element to be copied to another DB |
| `DACCRE` | `BOOL` | `NOUN` | True if DAC allows element to be created |
| `DACDEL` | `BOOL` |  | True if DAC allows element to be deleted |
| `DACERR` | `STRING(120)` | `ATTR` | Returns the DAC error |
| `MODATT` | `BOOL` | `ATTR` | True if attribute of element can be modified |
| `MODDEL` | `BOOL` | `ATTR` | True if element can be deleted |
