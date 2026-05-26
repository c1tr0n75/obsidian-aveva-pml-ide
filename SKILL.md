---
name: obsidian-aveva-pml-ide
description: Use this skill when writing, reviewing, debugging, refactoring, documenting, or explaining AVEVA PML/PML2 code for AVEVA Engineering, AVEVA E3D Design, or AVEVA Unified Engineering. This skill covers PML syntax, PML objects, global functions, forms, menus, gadgets (including container hosting of PMLNet controls), collections, DBREF/object methods, file I/O, alerts, and PML file organization.
---

# AVEVA PML Coding Skill

## Scope

Use this skill for PML/PML2 code only:
- Creating `.pmlfnc`, `.pmlobj`, `.pmlfrm`, and `.mac` files.
- Writing or reviewing PML2 functions, methods, constructors, form callbacks, menus, gadgets, DBREF logic, collections, file I/O.
- Debugging PML syntax, variable scope, array/string/real/date methods, and form behaviour.
- Producing AVEVA Engineering / E3D Design / UE examples that are safe, testable, and structured.


## Mandatory response behavior

When the user asks for PML code:

1. **Identify the deliverable**: function, object, form, macro, code patch, explanation, or debugging diagnosis.

2. **Load only the references needed for the task.** Routing table:

   | Task                                                       | Reference                                                  |
   |------------------------------------------------------------|------------------------------------------------------------|
   | General PML2 syntax                                        | [pml2-language-reference.md](references/language/pml2-language-reference.md)                    |
   | Forms, gadgets, UI                                         | [forms-ui-reference.md](references/ui/forms-ui-reference.md)                         |
   | Methods available on all objects                           | [methods-available-to-all-objects.md](references/language/methods-available-to-all-objects.md)           |
   | Specific object/gadget methods                             | [object-type-index.md](references/object-type-index.md) → `references/object-types/<file>` |
   | Element types, attributes, hierarchy                       | [database-data-model-index.md](references/database/database-data-model-index.md) (entry point), then load only the matching section from [aveva_ue_design_database_data_model.md](references/database/aveva_ue_design_database_data_model.md) |
   | Database navigation / queries / collections                | [database_navigation_query_syntax.md](references/database/database_navigation_query_syntax.md)           |
   | Creating, deleting, modifying, copying DB elements         | [database_modification.md](references/database/database_modification.md)                      |
   | Verifying an attribute name, data type, qualifier          | [aveva_introduction_to_attributes.md](references/database/aveva_introduction_to_attributes.md)           |
   | Computed/derived pseudo attributes (CoG, length, etc.)     | [aveva_pseudo_attributes.md](references/database/aveva_pseudo_attributes.md)                    |
   | Real attribute values in practice (formats, hierarchy)     | [DBListing-examples/](production-reference/DBListing-examples/) (raw database listings)    |
   | Command-line `Q` / `LIST` queries, marking, colouring      | [command-line-queries.md](references/utilities/command-line-queries.md)                       |
   | General utility commands, units, tolerances, precision     | [general_commands.md](references/utilities/general_commands.md)                           |
   | PML error handling (`handle`/`elsehandle`, `onerror`)      | [AVEVA_PML_Error_Handling.md](references/language/AVEVA_PML_Error_Handling.md)                   |
   | RVM export macros                                          | [AVEVA_PML_RVM_Export.md](references/utilities/AVEVA_PML_RVM_Export.md)                       |
   | Production patterns when curated examples are insufficient | `production-reference/` (see Bundled reference map for subdirectories) |

3. **Do not invent method names, members, or commands.** If a name is not in the references, say so explicitly.

4. **Prefer complete runnable PML files** with the correct extension and lowercase filename convention.

5. **Include reload/test commands when relevant**: `pml rehash all`, `pml index`.

6. **PML-focused customization.** When writing PML code, you can use built-in PMLNet container gadgets (like PmlNetControl) and proxy objects (like NETOBJECT) to interact with .NET features.

## PML coding rules

### Variables and scope

- Local variables use `!` — scoped to current function, method, or macro.
- Global/session variables use `!!` — persist in the session.
- Use typed function parameters: `define function !!Name(!arg is STRING) is ARRAY`.
- Always construct objects with the `object` keyword: `!obj = object Type(...)`, never `!obj = Type(...)` (this rule can be ignored **only** for `ARRAY` constructors, e.g., `!arr = ARRAY()` is acceptable). Examples: `!file = object FILE(...)`, `!coll = object COLLECTION()`.
- Operate on objects via their type-specific methods, not by reaching into raw representations.

### Attributes vs methods — do not add parentheses to attribute access

Database element attributes are **not** methods — access them with bare dot-notation, **never** with parentheses.

```pml
$* WRONG — treats attributes as method calls
!t = !!ce.type()
!n = !element.name()
!b = !pipe.bore()

$* RIGHT — attributes are accessed without parentheses
!t = !!ce.type
!n = !element.name
!b = !pipe.bore
```

Parentheses `()` are reserved for **methods and functions** — operations that perform logic or computation (e.g., `!arr.Size()`, `!str.Upcase()`, `!val.String()`). Attributes such as `type`, `name`, `bore`, `owner`, `desc`, `purpose`, `pos`, `ori`, and all other DBREF attributes are **properties**, not calls — they take no arguments and must never have `()` appended.

### PML 1 vs PML 2 assignment — frequent source of bugs

This is the most common cross-version mistake. PML 1 and PML 2 use different assignment syntax:

- **PML 1** (`.mac` macros, legacy): `var !x <expression>` — space-separated, no `=`, result always stored as STRING.
- **PML 2** (`.pmlfnc`, `.pmlobj`, `.pmlfrm`): `!x = <expression>` — typed assignment.

#### Current Element (!!CE vs CE)
In PML 2, never use the unadorned `CE` keyword in variable assignments or method arguments (e.g., `!x = CE` or `!collection.Scope(CE)`). Doing so incorrectly mixes legacy PML 1 syntax into PML 2. Instead, always refer to the current element using the global PML 2 variable `!!CE` (which is already of type `DBREF`).
- **Wrong (mixing PML 1 and 2):** `!x = CE` or `!collection.Scope(CE)`
- **Right (clean PML 2):** `!x = !!CE` or `!collection.Scope(!!CE)`

Verify file extension and use the matching syntax.

### Comments

- Full-line PML comment syntax: `$* <text>` — comment must start at the beginning of the line (after optional indentation).
- **Never** place a comment on the same line as executable code. PML inline comments are unreliable across contexts and a frequent cause of obscure parse failures.
- The same rule applies inside `DBLISTING` / `DBOUTPUT` blocks: comments go on their own line.

### String interpolation — do not evaluate methods inline

Never call methods or evaluate dot-notation inside `$P` output commands or `|...|` string interpolation. Always evaluate into a simple variable first, then interpolate that variable.

```pml
$* WRONG — method call inside interpolation
$P Pipe length is |!pipe.Length().String()|

$* RIGHT — evaluate first, interpolate the variable
!len    = !pipe.Length()
!lenStr = !len.String()
$P Pipe length is |!lenStr|
```

### Method calls on parenthesised expressions

PML's parser cannot chain `.Method()` directly onto a parenthesised expression — it stops at the closing `)` and treats the following method call as a syntax error.

Syntax error — parser cannot chain `.String()` onto `(...)`:

```pml
!yLen  = (!yList[!yList.Size()] - !yList[1]).String()
!spanS = (!xList[!ix + 1] - !xList[!ix]).String()
```

Correct — store the arithmetic result first, then call the method:

```pml
!yLenVal = !yList[!yList.Size()] - !yList[1]
!yLen    = !yLenVal.String()
```

Applies to any method (`.String()`, `.Real()`, `.Substring()`, ...) and any compound expression — arithmetic, indexed access combined with arithmetic, or nested method calls. As a defensive habit, also extract repeated index expressions like `!ix + 1` and loop bounds like `!list.Size()` into locals.

### Naming and files

| Extension  | Purpose                | Filename convention                                |
|------------|------------------------|----------------------------------------------------|
| `.pmlfnc`  | Global function        | Lowercase function name, no `!!` prefix            |
| `.pmlobj`  | Object definition      | Lowercase object name                              |
| `.pmlfrm`  | Form definition        | Lowercase form name, no `!!` prefix                |
| `.mac`     | PML 1 macro            | Use only when explicitly requested or legacy required |

### Control flow and arrays

- `if (...) then ... elseif ... else ... endif`.
- `do !i from 1 to !arr.Size()` — indexed loop.
- `do !item values !arr` — when index is not needed.
- `do !i indices !arr` — when the array may be sparse.
- ARRAY methods differ between making elements undefined vs re-indexing. Verify exact behaviour of `DeleteFrom`, `RemoveFrom`, `Compress`, `Unique`, `Sort`, and `SortedIndices` against [pml2-language-reference.md](references/language/pml2-language-reference.md) before relying on them.

### Database and collection operations

- Use `DBREF` and `COLLECTION` patterns when extracting model elements.
- Use `COLLECTION.Type`, `AddType`, `Types`, `Scope`, `AddScope`, `Filter`, `Results`, `Next`, `Index`, `Size` only as documented.
- **Variable Navigation**: When navigating to an element stored in a variable `!ref` (of type `DBREF` or `STRING`), you must prefix the variable with the command expansion operator `$`, e.g., `$!ref`. Never use `!ref` directly.
- **Deleting elements**: use `DELETE <Element Type>` (e.g. `DELETE PIPE`, `DELETE ZONE`, `DELETE PNOD`). For the current element dynamically: `DELETE $!!CE.Type`.
- **No `UNDOABLE` blocks**: Do not use `UNDOABLE` blocks or the `UNDOABLE` object in any PML code or deliverables. Undo/redo logic is managed externally by the host C# application.
- Prefer string/object methods over `EXPRESSION` for filtering. Only use `EXPRESSION` when no other route works.

### DBListing, DBOutput, and `datals` operations

**Trigger:** any request involving `DBLISTING`, `DBOUTPUT`, `DATAL` / `datals`, or creating/modifying elements in the design database — whether generating new output, reading existing listings, or troubleshooting syntax.

**Before writing the command**, consult [DBListing-examples/](production-reference/DBListing-examples/) to verify exact syntax and locate a worked example for the element type involved (pipe, branch, equipment, structure, etc.). Those raw text dumps are the source of truth for format; do not infer syntax from general PML knowledge.

**Workflow for listing + modification requests**:
1. Start with [database-data-model-index.md](references/database/database-data-model-index.md) to confirm the element/attribute exists.
2. Check [DBListing-examples/](production-reference/DBListing-examples/) for the matching listing pattern.
3. If the request modifies elements, also consult [database_modification.md](references/database/database_modification.md).
4. Apply the syntax; do not improvise.

### Forms and UI

**Supported gadgets**: BUTTON, LIST, TEXT, TEXTPANE, TOGGLE/RTOGGLE, OPTION, SELECTOR, SLIDER, FRAME, BAR, MENU, VIEW, NUMERICINPUT, PARAGRAPH, and CONTAINER (for hosting PMLNet controls).

**Every gadget has** `visible`, `active`, `callback`, and `tag` members. Form callbacks call form methods via `!this.MethodName()`.

**Gadget declaration syntax — single line, canonical order.** Write the entire declaration on one line:

```
gadget .name 'label' [at <pos>] callback '<string>' [width N] [height N] [other]
```

The `callback` clause **always comes before** `width` and `height`. Do **not** split a gadget declaration across lines with `$` between these clauses. Confirmed by production patterns:

```pml
button .apply 'Apply' at xmax form-10-size callback '!this.writeToFile()' width 8
list .check 'Checks' at xmin.classes ymax+0.25 callback '!this.loadCheckToEdit()' single width 40 lines 7
```

The only exception is pixmap (icon) buttons, where `height` and `width` modify the `pixmap` and may appear before `callback`.

**Layout does NOT auto-stack vertically.** Without explicit positioning, gadgets flow according to the active `path` direction (typically horizontal). A form intended as `[CE] / [list] / [OK] [Cancel]` will collapse into a single overlapping row. For any multi-row form, either:
- give every gadget after the first an explicit `at` clause, OR
- declare `path down` / `path right` on the form to control implicit flow.

**Positioning idioms.** Prefer absolute coordinates `at x <N> y <N>` for fixed-size dialogs. For adaptive layouts use relative idioms: `at xmin.<gadget> ymax+0.25`, `at xmax+0.2 ymin`, `at xmin ymax+0.25`, `at xmax form-<N>-size`.

**Avoid `at xr <N> ymin .<gadget>`** — `xr` is computed from the last placed gadget, not the gadget named after `ymin`, so the result rarely matches intent. Use `at xmax.<otherGadget>+<N> ymin.<otherGadget>` instead.

**User interaction**: use `!!Alert.Error`, `!!Alert.Warning`, `!!Alert.Message`, `!!Alert.Confirm`, or `!!Alert.Question`.

### Error handling

- Wrap likely-to-fail operations in `handle any ... endhandle`: DB navigation, file I/O, type conversions, collection evaluation, user input parsing.
- Inside handlers, use `!!Error.Text`, `!!Error.Line`, `!!Error.Command` for diagnostics.
- Prefer explicit validation before executing DB changes — handlers are a safety net, not a substitute for checks.
- See [AVEVA_PML_Error_Handling.md](references/language/AVEVA_PML_Error_Handling.md) for `handle`/`elsehandle`, `onerror` modes, and re-throwing patterns.

## Output formats

**For new code**: filename, complete PML code block, reload/test commands, short validation notes only if useful.

**For review/debugging**: diagnosis, corrected code or patch, explanation of the fix, validation checklist.

**For explanations**: walk the code line by line. State explicitly which variables are local/session/global, which object methods are used, and the expected return types.

## Compounding Knowledge & Logging

To transform this skill into a self-compounding expert system, follow these workflows whenever you are working in a local development repository:

### 1. The "File-Back" Rule (Knowledge Compounding)
Whenever you solve a complex PML bug, discover an undocumented E3D attribute behavior, or write an elegant new reusable gadget or macro:
- **Do not let it vanish into the conversation history.**
- Proactively offer to **file the pattern back** into the repository.
- Write/update a file under `examples/` (for runnable templates) or under `references/` (e.g. updating [aveva_introduction_to_attributes.md](references/database/aveva_introduction_to_attributes.md) or a split file under `references/object-types/`).
- If you add or modify a reference file, ensure you update [object-type-index.md](references/object-type-index.md) or [database-data-model-index.md](references/database/database-data-model-index.md) to keep all indexes synchronized.

### 2. The Append-Only Change Log (`log.md`)
On every successful knowledge ingest or significant refactoring action, append a line to the chronological ledger `log.md` at the repository root.
- **Prefix format**: `## [YYYY-MM-DD] action | title`
- **Actions**: `ingest` (adding/updating reference pages or curated templates), `query` (major architectural summaries filed back), or `lint` (structural validation and health checks).
- **Example**:
  ```markdown
  ## [2026-05-26] ingest | Added File I/O Error Handlers
  - Updated [AVEVA_PML_Error_Handling.md](references/language/AVEVA_PML_Error_Handling.md) with file permission handles.
  - Added safe template `examples/safe_write_lines_to_file.pmlfnc`.
  ```

## Pre-commit checklist

Final pass before returning code. Pure verification — all coding rules live above.

- [ ] Clean PML syntax and structure.
- [ ] Correct `!` vs `!!` scope on every variable.
- [ ] Correct closing keywords: `endfunction`, `endmethod`, `endobject`, `endif`, `enddo`, `endhandle`.
- [ ] Correct file extension and lowercase filename.
- [ ] `return` used correctly for typed functions/methods.
- [ ] Arrays initialised before use.
- [ ] Sparse arrays handled via `indices` or compressed explicitly.
- [ ] Objects tested with `.Set()` / `.Unset()` where null state is possible.
- [ ] DBREF validity checked with `BadRef()` (or equivalent) where relevant.
- [ ] Attributes accessed with bare dot-notation (`!el.type`, `!!ce.name`), never with parentheses.
- [ ] Forms use valid gadget definitions and callback strings.
- [ ] No method calls chained onto parenthesised expressions.
- [ ] No method or attribute evaluation inside `$P` or `|...|` interpolation.
- [ ] No inline comments on lines containing executable code.

## Bundled reference map

### Chronological Log (Root)
- [log.md](log.md) — Chronological ledger of all changes, ingests, and lint validations following the `## [YYYY-MM-DD] action | title` format.

### references/ (Root)
- [object-type-index.md](references/object-type-index.md) — generated index of every object/gadget/topic.
- [object-types/](references/object-types/) — per-object/gadget files for focused loading.

### references/language/
- [pml2-language-reference.md](references/language/pml2-language-reference.md) — PML2 syntax, variables, types, operators, loops, error handling, string/array/real methods, file I/O, user-defined objects, PMLLIB organization.
- [methods-available-to-all-objects.md](references/language/methods-available-to-all-objects.md) — full source for universal methods (`Attribute`, `Attributes`, `Delete`, `EQ`, `LT`, `Max`, `Min`, `NEQ`, `ObjectType`, `Set`, `String`, `Unset`).
- [AVEVA_PML_Error_Handling.md](references/language/AVEVA_PML_Error_Handling.md) — `handle`/`elsehandle`, `onerror`, `!!Error.Text`, re-throwing.

### references/database/
- [database-data-model-index.md](references/database/database-data-model-index.md) — entry-point index for the data model; lists categories, element types, and line ranges so you can load only the relevant section.
- [aveva_ue_design_database_data_model.md](references/database/aveva_ue_design_database_data_model.md) — full UE Design data model; element types, attributes, legal owners/members, hierarchy. Use the index first.
- [database_navigation_query_syntax.md](references/database/database_navigation_query_syntax.md) — navigation via CE, DBREF, relative hierarchy, query syntaxes.
- [database_modification.md](references/database/database_modification.md) — creating, copying, modifying, deleting, reorganising DB elements.
- [aveva_introduction_to_attributes.md](references/database/aveva_introduction_to_attributes.md) — full A–Y alphabetical attribute listing with data types, qualifiers, descriptions.
- [aveva_pseudo_attributes.md](references/database/aveva_pseudo_attributes.md) — computed/derived pseudo attributes by functional category (Piping, Branch, Cabling, Structural, etc.).

### references/ui/
- [forms-ui-reference.md](references/ui/forms-ui-reference.md) — form structure, form types, gadgets, callbacks, FMSYS, MENU, FORM, PML-only UI examples.

### references/utilities/
- [command-line-queries.md](references/utilities/command-line-queries.md) — `Q` and `LIST` syntax for session/user/DB queries; marking and colouring commands.
- [general_commands.md](references/utilities/general_commands.md) — General utility commands, units, tolerances, and precision control.
- [AVEVA_PML_RVM_Export.md](references/utilities/AVEVA_PML_RVM_Export.md) — generating PML macros for `.rvm` Review exports.

### examples/
Small, self-contained, purpose-built templates for new code generation.

### production-reference/
Real-world AVEVA production code and database dumps for pattern validation. **Consult, do not copy as templates.**
- [DBListing-examples/](production-reference/DBListing-examples/) — Real E3D design database dumps across 9 disciplines (Piping, Cable, Civil, Equipment, Electrical, HVAC, Structural, Supports, Grids).
- `PMLUI/` — UI customization patterns.
- `commands/` — command-line macros and global commands.
- `forms/` — production form definitions.
- `functions/` — production global functions.
- `objects/` — production object definitions.

---

## Behavioral guidelines

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.