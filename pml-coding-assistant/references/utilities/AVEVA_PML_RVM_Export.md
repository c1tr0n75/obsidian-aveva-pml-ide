# AVEVA PML: Exporting E3D Model Data to RVM / AVEVA Review

## Purpose

Use this file in a Claude Skill to help the AI generate AVEVA E3D Design PML macros or functions that export model data to AVEVA Review model files, usually `.rvm`, and optionally generate a companion attribute dump file, usually `.txt`.

The core E3D command family is `EXPORT`. It selects model objects, controls graphical representation, writes the Review model file, and finalizes the export.

Typical user requests covered by this file:

- “Generate an RVM from selected SITE / ZONE / EQUI / BRAN objects.”
- “Export multiple scopes into one RVM.”
- “Export one RVM per SITE / ZONE / element.”
- “Export RVM plus attribute dump TXT.”
- “Use E3D PML to automate Review/Navisworks export preparation.”
- “Batch export RVM files using a PML macro.”

---

## Important Constraints for the AI Agent

When generating PML code for RVM export:

1. Do **not** invent undocumented commands if the task can be solved with `EXPORT`.
2. Always define:
   - the output file path,
   - the export scope,
   - the export file command,
   - the loop over scope elements,
   - `EXPORT FINISH`.
3. Use `EXPORT FILE ... OVER` when the user wants to overwrite existing files.
4. Use `EXPORT FINISH` after adding all intended objects to the current export file.
5. For very large areas, prefer one RVM file per scope element instead of one huge RVM.
6. If generating attribute dumps, use the available project form/method if present, commonly `!!cdxAttDump`, but warn that this object/form must exist in the customer environment.
7. Do not assume every customer environment has the same attribute dump utility. RVM export is native through `EXPORT`; attribute dump may be project-specific.
8. Only significant model elements should be added to the export list, such as `SITE`, `ZONE`, `EQUI`, `BRAN`, `SUBS`, `HANG`, `STRU`, `PTRA`, etc. If a primitive below a significant element is selected, E3D exports the owning significant element.

---

## Core EXPORT Command Concepts

### 1. Define the Review model file

```pml
EXPORT FILE /path/to/file.rvm
EXPORT FILE /path/to/file.rvm OVER
EXPORT FILE /path/to/file.rvm READ
```

Use cases:

```pml
EXPORT FILE /TESTFILE
EXPORT FILE /TESTFILE OVER
```

Meaning:

- `EXPORT FILE filename` opens/creates the model file.
- `EXPORT FILE filename OVER` overwrites an existing file.

### 2. Add header notes to the model file

```pml
EXPORT FILENOTE 'Platform PA2 REVIEW Data'
```

Query the current file and note:

```pml
Q EXPORT FILE
Q EXPORT FILENOTE
```

### 3. Add model objects to the export draw list

Export one named object:

```pml
EXPORT /VESS1
```

Export one object with explicit Review colour:

```pml
EXPORT /VESS1 COLOUR 2
```

Export every object in an array:

```pml
do !each values !scope
  EXPORT $!each
enddo
```

### 4. Finish the export

```pml
EXPORT FINISH
```

`EXPORT FINISH` transfers all primitives owned by all elements in the current export draw list into the current model file. It does not clear or modify the draw list by itself.

---

## Recommended Default Review Representation Settings

These are safe defaults for a typical RVM export macro. Adjust them if the user asks for different representation.

```pml


EXPORT HOLES ON
REPRE LEV PIPE 6
REPRE LEV NOZZ 6
REPRE LEV STRU 6
REPRE TUBE ON
REPRE CENT OFF
REPRE INSUL OFF
REPRE OBST OFF
TOL ANGL 0.0573
TOL OFF 1MM
TOL RATI 0.001

EXPORT REPR ON
EXPORT AUTOCOLOUR RESET
EXPORT AUTOCOLOUR ON
AUTOCOLOUR DISPLAYEXP ON
```

Notes:

- `EXPORT HOLES ON` exports holes realistically, but increases export time and output size.
- `REPRE TUBE ON` helps include tubing representation.
- `REPRE INSUL OFF` and `REPRE OBST OFF` can be changed if insulation or obstruction geometry is required.
- `EXPORT REPR ON` allows design colours and translucent insulation/obstruction representation to be exported when applicable.
- `AUTOCOLOUR DISPLAYEXP ON` uses Design autocolour rules for exported Review data.

---

## Export Holes

Control hole representation with:

```pml
EXPORT HOLES ON
EXPORT HOLES OFF
EXPORT HOLES SOLID
```

Query:

```pml
Q EXPORT HOLES
```

Guidance:

- `ON`: realistic shaded holes; more expensive computationally.
- `OFF`: default, lighter export.
- `SOLID`: holes are exported as solid objects, normally colour 1 / black, and cannot be seen through.

---

## Text Encoding

To support non-English characters in exported text:

```pml
EXPORT ENCODING UTFEIGHT
```

Query:

```pml
Q EXPORT ENCODING
```

Use this when project names, descriptions, attributes, or hierarchy names may contain accented or non-ASCII characters.

---

## Implied Tube Export Policies

E3D can export implied tubing with four different policies:

```pml
EXPORT IMPLIED TUBE INTO SINGLE CONTAINER
EXPORT IMPLIED TUBE INTO SEPARATE CONTAINERS
EXPORT IMPLIED TUBE INTO UPSTREAM CONTAINERS
EXPORT IMPLIED TUBE INTO DOWNSTREAM CONTAINERS
```

Allowed abbreviated forms include:

```pml
EXPORT IMPLIED TUBE SING
EXPORT IMPLIED TUBE SEP
EXPORT IMPLIED TUBE UP
EXPORT IMPLIED TUBE DOWN
```

Guidance:

- `SINGLE` is the default. All implied tube items in one branch go to one container named after the branch.
- `SEPARATE` creates separate tube containers, typically named like `TUBE n of BRANCH name`.
- `UPSTREAM` places implied tube into the immediate upstream element container.
- `DOWNSTREAM` places implied tube into the immediate downstream element container.

Recommended default:

```pml
EXPORT IMPLIED TUBE INTO SINGLE CONTAINER
```

Use `SEPARATE` if downstream tools need individual implied tube containers.

---

## Export Precision

Control precision with:

```pml
EXPORT PRECISION DOUBLE
EXPORT PRECISION SINGLE
```

Guidance:

- Use `DOUBLE` when exporting models with large coordinates.
- Use `SINGLE` only if required for compatibility with an older downstream tool.

Recommended default:

```pml
EXPORT PRECISION DOUBLE
```

---

## Autocolour Rules

### Enable / disable / reset

```pml
EXPORT AUTOCOLOUR ON
EXPORT AUTOCOLOUR OFF
EXPORT AUTOCOLOUR RESET
```


### Query rules

```pml
Q EXPORT AUTOCOLOUR NUM
Q EXPORT AUTOCOLOUR MODE
```

### Examples

Direct explicit colour:

```pml
EXPORT /VESS1 COLOUR 2
```

Autocolour rule using selection criteria:

```pml
EXPORT AUTOCOLOUR ALL BOXES WITH (XLEN GT 100) COLOUR 10
```

Autocolour using an attribute expression:

```pml
EXPORT AUTOCOLOUR ALL BRAN MEMBERS COLOUR (:ICOLOR OF SPREF)
```

Important: autocolour rules are evaluated in order. The first matching rule is used. If no valid rule matches, Review colour `0` is used.

---

## Macro Pattern 1: Export Multiple Scope Elements into One RVM

Use this when the model area is not too large and the user wants a single `.rvm` file.

```pml
-- ============================================================
-- Macro: Export_RVM_Single_File.pmlmac
-- Purpose: Export multiple E3D scope elements into one RVM file
-- ============================================================



-- ---------- Review / export representation settings ----------
EXPORT HOLES ON
REPRE LEV PIPE 6
REPRE LEV NOZZ 6
REPRE LEV STRU 6
REPRE TUBE ON
REPRE CENT OFF
REPRE INSUL OFF
REPRE OBST OFF
TOL ANGL 0.0573
TOL OFF 1MM
TOL RATI 0.001
EXPORT REPR ON
EXPORT PRECISION DOUBLE
EXPORT ENCODING UTFEIGHT
EXPORT IMPLIED TUBE INTO SINGLE CONTAINER

-- ---------- Colour settings ----------
EXPORT AUTOCOLOUR RESET
EXPORT AUTOCOLOUR ON
AUTOCOLOUR DISPLAYEXP ON

-- ---------- Define export scope ----------
-- Change this list according to the project.
!scope = ARRAY()
!scope.append('/SITE01')
!scope.append('/SITE02')

-- Alternative dynamic scope example:
-- var !allSite coll all Site with matchwild(name, '*AREA01*')
-- var !scope eval name for all from !allSite

-- ---------- Define output location ----------
-- Change this path according to the project/environment.
!filePath = 'C:\Temp\'
!fileName = 'E3D_Export_Scope'

!rvmFileName  = !filePath & !fileName & '.rvm'
!dumpFileName = !filePath & !fileName & '.txt'

-- ---------- Create and populate the RVM file ----------
EXPORT FILE /$!rvmFileName OVER
EXPORT FILENOTE 'RVM export generated from AVEVA E3D Design by PML macro'

do !each values !scope
  EXPORT $!each
enddo

EXPORT FINISH

-- ---------- Optional: export attribute dump ----------
-- This section requires the attribute dump form/object to exist in the environment.
-- If !!cdxAttDump is not available, remove this block or replace it with the
-- project-approved attribute export utility.

pml reload form !!cdxAttDump
show !!cdxAttDump

!!cdxAttDump.fnam.val = '$!dumpFileName'
!!cdxAttDump.elements.val = true
!!cdxAttDump.dbelements.active = true
!!cdxAttDump.dbelements.dtext = !scope
!!cdxAttDump.unsets.val = true

-- For E3D 3.1 tubing attributes, if supported by the environment:
!!cdxAttDump.tube.val = true

!ok = !!cdxAttDump.mattdump()
handle any
endhandle

pml reload form !!cdxAttDump

-- End of macro
```

### When to use this pattern

Use this pattern when:

- the user wants one combined RVM,
- the scope is reasonably small,
- downstream users want a single Review/Navisworks input file,
- memory limits are not expected.

---

## Macro Pattern 2: Export One RVM per Scope Element

Use this when the scope is large or dense, or when a single RVM export may exceed memory limits.

```pml
-- ============================================================
-- Macro: Export_RVM_One_File_Per_Scope_Element.pmlmac
-- Purpose: Export each E3D scope element into a separate RVM file
-- ============================================================



-- ---------- Review / export representation settings ----------
EXPORT HOLES ON
REPRE LEV PIPE 6
REPRE LEV NOZZ 6
REPRE LEV STRU 6
REPRE TUBE ON
REPRE CENT OFF
REPRE INSUL OFF
REPRE OBST OFF
TOL ANGL 0.0573
TOL OFF 1MM
TOL RATI 0.001
EXPORT REPR ON
EXPORT PRECISION DOUBLE
EXPORT ENCODING UTFEIGHT
EXPORT IMPLIED TUBE INTO SINGLE CONTAINER

-- ---------- Colour settings ----------
EXPORT AUTOCOLOUR RESET
EXPORT AUTOCOLOUR ON
AUTOCOLOUR DISPLAYEXP ON

-- ---------- Define export scope ----------
-- Change this list according to the project.
!scope = ARRAY()
!scope.append('/SITE01')
!scope.append('/SITE02')

-- Alternative dynamic scope example:
-- var !allSite coll all Site with matchwild(name, '*AREA01*')
-- var !scope eval name for all from !allSite

-- ---------- Define output location ----------
!filePath = 'C:\Temp\'

-- Characters that should not be used in Windows file names.
!prohibitedChars = ARRAY()
!prohibitedChars.append('/')
!prohibitedChars.append('\\')
!prohibitedChars.append(':')
!prohibitedChars.append('*')
!prohibitedChars.append('?')
!prohibitedChars.append('"')
!prohibitedChars.append('<')
!prohibitedChars.append('>')
!prohibitedChars.append('|')

-- ---------- Export each scope element into its own RVM ----------
do !each values !scope

  -- Start from the element name and sanitize it for file-system use.
  !fileName = name of $!each

  do !eachChar values !prohibitedChars
    !fileName = !fileName.replace('$!eachChar', '_')
  enddo

  !rvmFileName  = !filePath & !fileName & '.rvm'
  !dumpFileName = !filePath & !fileName & '.txt'

  EXPORT FILE /$!rvmFileName OVER
  EXPORT $!each
  EXPORT FINISH

  -- ---------- Optional: export attribute dump for current item ----------
  -- Temporary one-item array, because many attribute dump utilities expect an array.
  !currentScope = ARRAY()
  !currentScope.append('$!each')

  pml reload form !!cdxAttDump
  show !!cdxAttDump

  !!cdxAttDump.fnam.val = '$!dumpFileName'
  !!cdxAttDump.elements.val = true
  !!cdxAttDump.dbelements.active = true
  !!cdxAttDump.dbelements.dtext = !currentScope
  !!cdxAttDump.unsets.val = true

  -- For E3D 3.1 tubing attributes, if supported by the environment:
  !!cdxAttDump.tube.val = true

  !ok = !!cdxAttDump.mattdump()
  handle any
  endhandle

  pml reload form !!cdxAttDump

enddo

-- End of macro
```

### When to use this pattern

Use this pattern when:

- the model is very dense,
- a single export may exceed memory limits,
- the user wants one file per SITE, ZONE, EQUI, or other top-level element,
- downstream processing is easier with multiple smaller RVM files.

---

## Macro Pattern 3: User-Provided Current Element Export

Use this for quick manual export of the current E3D element.

```pml
-- ============================================================
-- Macro: Export_Current_Element_To_RVM.pmlmac
-- Purpose: Export the current E3D element to one RVM file
-- ============================================================



EXPORT HOLES ON
REPRE LEV PIPE 6
REPRE LEV NOZZ 6
REPRE LEV STRU 6
REPRE TUBE ON
REPRE CENT OFF
REPRE INSUL OFF
REPRE OBST OFF
EXPORT REPR ON
EXPORT PRECISION DOUBLE
EXPORT ENCODING UTFEIGHT
EXPORT AUTOCOLOUR RESET
EXPORT AUTOCOLOUR ON
AUTOCOLOUR DISPLAYEXP ON

!filePath = 'C:\Temp\'
!fileName = name of ce
!fileName = !fileName.replace('/', '_')
!fileName = !fileName.replace('\\', '_')
!fileName = !fileName.replace(':', '_')

!rvmFileName = !filePath & !fileName & '.rvm'

EXPORT FILE /$!rvmFileName OVER
EXPORT CE
EXPORT FINISH
```

---

## Macro Pattern 4: Dynamic Collection-Based Scope

Use this when the user asks for rule-based export, for example all sites matching an area name, all zones with a naming pattern, or all equipment in a zone.

```pml
-- Example: export all SITE elements whose names contain AREA01
var !allSite coll all Site with matchwild(name, '*AREA01*')
var !scope eval name for all from !allSite
```

Then use the standard loop:

```pml
do !each values !scope
  EXPORT $!each
enddo
```

Other examples:

```pml
-- All zones matching a name pattern
var !allZones coll all Zone with matchwild(name, '*PIPING*')
var !scope eval name for all from !allZones

-- All equipment matching a name pattern
var !allEqui coll all Equi with matchwild(name, '*PUMP*')
var !scope eval name for all from !allEqui
```

Always tell the user to adapt the element type and naming pattern to the project.

---

## Attribute Dump Guidance

RVM files contain graphical Review model data. For downstream tools like Navisworks workflows, users may also ask for attributes. In some E3D environments, attribute dumps are generated with a project form/object similar to:

```pml
pml reload form !!cdxAttDump
show !!cdxAttDump

!!cdxAttDump.fnam.val = '$!dumpFileName'
!!cdxAttDump.elements.val = true
!!cdxAttDump.dbelements.active = true
!!cdxAttDump.dbelements.dtext = !scope
!!cdxAttDump.unsets.val = true
!!cdxAttDump.tube.val = true

!ok = !!cdxAttDump.mattdump()
handle any
endhandle

pml reload form !!cdxAttDump
```

Important warning for the AI Agent:

- `!!cdxAttDump` is not part of the generic `EXPORT` command syntax.
- Treat it as an environment/project utility shown in AVEVA support material.
- If the user’s environment does not have `!!cdxAttDump`, ask them for their local attribute dump form/function, or generate only the RVM export macro.

---

## File Path Handling

### Fixed path

Use fixed paths for scheduled tasks or repeatable batch exports:

```pml
!filePath = 'C:\Temp\'
```

### File naming

Create file names from model element names, but sanitize invalid characters first:

```pml
!fileName = name of $!each
!fileName = !fileName.replace('/', '_')
!fileName = !fileName.replace('\\', '_')
!fileName = !fileName.replace(':', '_')
!fileName = !fileName.replace('*', '_')
!fileName = !fileName.replace('?', '_')
!fileName = !fileName.replace('"', '_')
!fileName = !fileName.replace('<', '_')
!fileName = !fileName.replace('>', '_')
!fileName = !fileName.replace('|', '_')
```

Then build the final paths:

```pml
!rvmFileName  = !filePath & !fileName & '.rvm'
!dumpFileName = !filePath & !fileName & '.txt'
```

---

## Recommended AI Response Template for RVM Export Requests

When a user asks the Claude Skill to generate an RVM export macro, answer with:

1. A short confirmation of the intended scope and output mode.
2. A PML macro using one of the patterns above.
3. A short list of project-specific values to change:
   - `!scope`
   - `!filePath`
   - `!fileName`
   - representation settings
   - attribute dump utility, if needed
4. A warning about large exports and memory limits.

Example response framing:

> Below is a PML macro for AVEVA E3D Design that exports the requested scope to RVM. Change `!scope` and `!filePath` before running it. If the model area is very dense, use the separate-file version to avoid memory issues.

---

## Decision Rules for the AI Agent

### If the user asks for “one RVM”

Use **Macro Pattern 1**.

### If the user asks for “batch export” or “one file per SITE / ZONE”

Use **Macro Pattern 2**.

### If the user says “current element” or “CE”

Use **Macro Pattern 3**.

### If the user gives a naming rule

Use **Macro Pattern 4** and combine it with Pattern 1 or 2.

### If the user asks for Navisworks

Generate RVM plus TXT attribute dump if the environment supports the attribute dump utility. Explain that the RVM is the geometry/model export, while the TXT dump is used to carry attributes for downstream mapping.

### If the user does not provide scope

Use a placeholder scope array and clearly mark it:

```pml
!scope = ARRAY()
!scope.append('/CHANGE_ME_SITE_OR_ZONE')
```

---

## Common Troubleshooting

### The macro creates no geometry

Check:

- scope element names exist,
- user is in the correct MDB/project,
- selected element types are significant exportable elements,
- representation settings are not hiding the required geometry,
- `EXPORT FINISH` is present.

### The output file is not overwritten

Use:

```pml
EXPORT FILE /$!rvmFileName OVER
```

### Export is slow or memory-heavy

Use:

- one RVM per scope element,
- `EXPORT HOLES OFF` instead of `ON`,
- lower representation levels where acceptable,
- smaller SITE/ZONE/EQUI scope.

### Accented characters are corrupted

Use:

```pml
EXPORT ENCODING UTFEIGHT
```

### Implied tubing is not organized as expected

Choose the correct policy:

```pml
EXPORT IMPLIED TUBE INTO SINGLE CONTAINER
EXPORT IMPLIED TUBE INTO SEPARATE CONTAINERS
EXPORT IMPLIED TUBE INTO UPSTREAM CONTAINERS
EXPORT IMPLIED TUBE INTO DOWNSTREAM CONTAINERS
```

### Attribute dump fails

Check:

- whether `!!cdxAttDump` exists in the environment,
- whether the form name is different in the project,
- whether `mattdump()` is available,
- whether the dump path is writable,
- whether the scope array is correctly passed to `dbelements.dtext`.

---

## Minimal RVM Export Macro

Use this when the user wants the simplest possible working macro.

```pml


!scope = ARRAY()
!scope.append('/SITE01')

!filePath = 'C:\Temp\'
!fileName = 'E3D_Export'
!rvmFileName = !filePath & !fileName & '.rvm'

EXPORT HOLES ON
EXPORT REPR ON
EXPORT PRECISION DOUBLE
EXPORT ENCODING UTFEIGHT
EXPORT AUTOCOLOUR RESET
EXPORT AUTOCOLOUR ON
AUTOCOLOUR DISPLAYEXP ON

EXPORT FILE /$!rvmFileName OVER

do !each values !scope
  EXPORT $!each
enddo

EXPORT FINISH
```

---

## Full Syntax Summary for EXPORT

Main forms the AI Agent should know:

```pml
EXPORT FILE filename
EXPORT FILE filename READ
EXPORT FILE filename OVER
EXPORT FILENOTE text
EXPORT element
EXPORT element COLOUR integer
EXPORT FINISH

EXPORT HOLES ON
EXPORT HOLES OFF
EXPORT HOLES SOLID

EXPORT ENCODING UTFEIGHT

EXPORT PRECISION DOUBLE
EXPORT PRECISION SINGLE

EXPORT IMPLIED TUBE INTO SINGLE CONTAINER
EXPORT IMPLIED TUBE INTO SEPARATE CONTAINERS
EXPORT IMPLIED TUBE INTO UPSTREAM CONTAINERS
EXPORT IMPLIED TUBE INTO DOWNSTREAM CONTAINERS

EXPORT REPR ON
EXPORT REPR OFF

EXPORT AUTOCOLOUR ON
EXPORT AUTOCOLOUR OFF
EXPORT AUTOCOLOUR RESET

Q EXPORT FILE
Q EXPORT FILENOTE
Q EXPORT HOLES
Q EXPORT ENCODING
Q EXPORT AUTOCOLOUR NUM
Q EXPORT AUTOCOLOUR MODE
```

---

## Quality Checklist Before Returning PML Code

Before giving the user a generated macro, verify:

- [ ] The macro defines `!scope`.
- [ ] The macro defines `!filePath`.
- [ ] The macro builds `.rvm` output filename.
- [ ] The macro calls `EXPORT FILE /$!rvmFileName OVER` or equivalent.
- [ ] The macro calls `EXPORT` for each scope element.
- [ ] The macro calls `EXPORT FINISH`.
- [ ] Large-model cases use one-file-per-scope option.
- [ ] Attribute dump code is marked as optional/project-dependent.
- [ ] Invalid filename characters are sanitized when file names come from model element names.
- [ ] The response tells the user which values to change before running the macro.
