# PML2 Forms & UI Customization Reference

## Table of Contents
1. Basic Form Structure
2. Gadget Declaration Syntax & Layout Rules
3. Form Types
4. Common Gadget Types
5. Universal Gadget Members
6. Form Callbacks
7. Showing/Hiding Forms
8. COMBOBOX Gadget
9. NUMERIC INPUT Gadget
10. SELECTOR Gadget
11. TEXTPANE Gadget
12. BAR Gadget
13. CONTAINER Gadget
14. LIST Gadget (Extended)
15. FRAME Types
16. FMSYS Object
17. MENU Object
18. FORM Object Details
19. Complete Form Example

---

## 1. Basic Form Structure

File: `myform.pmlfrm` (filename must match form name, lowercase, without `!!`)

```
setup form !!MyForm dialog size 400 300
    title 'My Custom Form'

    -- Text input fields
    text .NameField 'Name:' width 30 is STRING
    text .ValueField 'Value:' width 10 is REAL

    -- Paragraph (label)
    paragraph .StatusLabel text 'Ready'

    -- Buttons
    button .RunButton 'Run' callback '!this.OnRun()'
    button .CloseButton 'Close' OK

    -- List selector
    list .ItemList callback '!this.OnItemSelected()' width 20 height 8

    -- Toggle (checkbox)
    toggle .EnableToggle 'Enable Processing' callback '!this.OnToggle()'

exit

-- Initialization callback (constructor -- same name as form)
define method .MyForm()
    !this.NameField.val = 'Default Name'
    !this.ValueField.val = 0.0
    !this.EnableToggle.val = TRUE
endmethod

-- Button callback
define method .OnRun()
    !name = !this.NameField.val
    !value = !this.ValueField.val

    if (!name EQ '' OR !value EQ 0) then
        !!Alert.Error('Please fill in all fields')
        return
    endif

    !this.StatusLabel.val = 'Processing...'
    -- Do work here
    !this.StatusLabel.val = 'Done'
endmethod

-- List selection callback
define method .OnItemSelected()
    !selected = !this.ItemList.selection()
    $p Selected: $!selected
endmethod

-- Toggle callback
define method .OnToggle()
    !enabled = !this.EnableToggle.val
    !this.RunButton.active = !enabled
endmethod
```

## 2. Gadget Declaration Syntax & Layout Rules

These two rules are non-negotiable and the source of most layout bugs.

### 2.1 Single-line declaration order

A gadget declaration is written on **one line**, in this canonical order:

```
gadget .name 'label' [at <pos>] callback '<callback>' [width N] [height N] [other]
```

The `callback '!this.method()'` clause **always** comes **before** `width` and `height`, on the **same line** as the gadget. Do **not** split a gadget declaration across lines with `$` line continuations between `at`, `callback`, and the size keywords.

Production examples (correct):

```
button .apply 'Apply' at xmax form-10-size callback '!this.writeToFile()' width 8
button .dismiss 'Cancel' at xmax+1 ymin callback '!this.hide()' width 8
list .check 'Checks' at xmin.classes ymax+0.25 callback '!this.loadCheckToEdit()' single width 40 lines 7
combobox .classes 'Discipline:' at xmin ymax+0.3 callback '!this.validateClass(' tagwidth 8 width 26
```

Wrong (callback after width, and split across lines):

```
button .OKButton 'OK' at x 2 y 13 width 8 $
    callback '!this.ok()'
```

**Exception — pixmap (icon) buttons.** When a button uses a `pixmap`, the `height` and `width` keywords describe the pixmap dimensions and sit alongside `pixmap`, so they appear **before** `callback`:

```
button .createClass 'Create Class' pixmap "AvevaSharedIcons>ID_CREATE_CLASS>32" height 32 width 32 callback '!this.createClass()' tooltip 'Create a new class'
```

This is the only case where size keywords legitimately precede `callback`.

### 2.2 Layout flow — gadgets do not auto-stack vertically

PML places gadgets according to the active **`path`** direction (typically `right`). Without explicit positioning, a sequence of four gadgets does **not** become a four-row layout — they end up in a single horizontal row, and any gadget that omits `at` after a `path right` declaration may overlap a previous one.

For any multi-row form, follow one of these two strategies:

**Strategy A — explicit `at` on every gadget after the first.** This is the most predictable approach for fixed-size dialogs:

```
button .CEButton    'CE'     at x 13 y 0.5 callback '!this.load()'   width 6
list   .ItemList             at x 2  y 2   callback '!this.select()' width 28 height 10
button .OKButton    'OK'     at x 2  y 13  callback '!this.ok()'     width 8
button .CancelButton 'Cancel' at x 22 y 13 callback '!this.close()'  width 8
```

**Strategy B — declare flow with `path` and use relative idioms.** This adapts to content size and is preferred for resizable forms:

```
button .OKButton 'OK' at xmin.ItemList ymax+0.5 callback '!this.ok()' width 8
path right
button .CancelButton 'Cancel' at xmax+0.2 callback '!this.close()' width 8
```

### 2.3 Positioning idioms

| Form | Meaning |
|------|---------|
| `at x N y N` | Absolute coordinates in character cells |
| `at xmin ymax+0.25` | Form's left edge, 0.25 cells below previous gadget's bottom |
| `at xmin.<gadget> ymax+0.25` | Aligned with another gadget's left edge, below previous |
| `at xmax+0.2 ymin` | 0.2 cells right of previous gadget, aligned with previous top |
| `at xmax.<gadget>+0.2 ymin.<gadget>` | Anchored explicitly to a named gadget |
| `at xmax form-<N>-size` | Right edge sits N cells inside form's right edge |
| `anchor T+L+R+B` (or subset) | How the gadget stretches when the form is resized |

**Avoid `at xr <N> ymin .<gadget>`.** The `xr` keyword is computed relative to the **last placed gadget**, not the gadget named after `ymin`, so when these references diverge the result rarely matches intent — typically the new gadget lands back at the form origin and overlaps the first gadget. Use `at xmax.<gadget>+<N> ymin.<gadget>` to anchor explicitly.

---

## 3. Form Types

| Type | Description |
|------|-------------|
| `dialog` | Resizable docking dialog |
| `dialog resizeable` | Resizable floating dialog |
| `document` | Resizable MDI child document |
| `block` | Non-resizable blocking dialog |
| `block resizeable` | Resizable blocking dialog |

## 4. Common Gadget Types

| Gadget | Syntax | Description |
|--------|--------|-------------|
| `text` | `text .Name 'Label:' width N is TYPE` | Text input field |
| `paragraph` | `paragraph .Name text 'Display text'` | Display label |
| `button` | `button .Name 'Label' callback 'method'` | Clickable button |
| `list` | `list .Name width N height N` | List box |
| `toggle` | `toggle .Name 'Label'` | Checkbox |
| `option` | `option .Name 'Label' width N` | Dropdown/combobox |
| `rgroup`/`rbutton` | `rgroup .Name 'Label'` + `rbutton .Opt 'Text'` | Radio button group |
| `frame` | `frame .Name 'Title'` | Group frame |
| `selector` | `selector .Name callback 'method'` | Database element selector |
| `textpane` | `textpane .Name width N height N` | Multi-line text area |
| `slider` | `slider .Name` | Slider control |
| `alpha` | `alpha .Name width N height N` | Text output area |

## 5. Universal Gadget Members

All gadgets contain these members:

| Name | Type | Purpose |
|------|------|---------|
| `visible` | BOOLEAN Get/Set | Query/set gadget visibility |
| `active` | BOOLEAN Get/Set | Query/set gadget active/inactive (greyed-out) state |
| `callback` | STRING Get/Set | Query or assign the gadget's callback string |
| `tag` | STRING Get/Set | Query or assign a gadget's tag text |

Common methods available on most gadgets: `FullName()`, `Name()`, `Owner()`, `Shown()`, `Type()`, `Subtype()`, `Refresh()`, `SetPopup(menu)`, `RemovePopup(menu)`, `GetPickedPopup()`, `SetTooltip(str)`, `SetFocus()`, `Background()`.

## 5.1 Dynamic Gadget Access (Command Expansion)

When the gadget name is stored in a STRING variable at runtime, use the `$` command-expansion operator to resolve it before the dot access. This is the **only** correct syntax for dynamic gadget access in PML2.

```pml
$* !gadgetName is a STRING variable holding the gadget's short name (e.g. 'filename')
!gadgetName = 'filename'
!this.$!gadgetName.val = ''          $* read/write .val dynamically
!this.$!gadgetName.active = FALSE    $* any member works the same way
```

**Rules:**
- `$!variableName` expands the variable's string value as a token before PML processes the dot-member access.
- The variable must hold the **short name** of the gadget (the part after the `.` in the form definition, without the leading dot).
- Do **not** write `!this.$!<gadget>.val` — angle brackets `< >` are documentation placeholders only, not valid PML characters. That form will trigger a syntax error.
- Do **not** write `!this.!variableName.val` (no `$`) — without command expansion the parser sees a nested variable reference, not a gadget name.

```pml
$* Wrong — angle brackets are not PML syntax
!this.$!<gadget>.val = !filename

$* Wrong — missing $ expansion
!this.!gadgetName.val = !filename

$* Correct
!gadgetName = 'filename'
!this.$!gadgetName.val = !filename
```

## 6. Form Callbacks

| Callback | Description |
|----------|-------------|
| `INITCALL '!this.init()'` | Called when form is initialized |
| `OKCALL '!this.approve()'` | Called when OK button is pressed |
| `callback '!this.method()'` | Gadget-specific callback |

## 7. Showing/Hiding Forms

```
-- Show a form
show !!MyForm

-- Hide a form
hide !!MyForm

-- Show as blocking dialog
show !!MyForm modal
```

---

## 8. COMBOBOX Gadget

A dropdown list with optional editable text field.

```
setup form !!MyForm dialog size 400 200
    combobox .TypeCombo 'Type:' callback '!this.OnTypeChanged()' width 20
exit

define method .MyForm()
    !this.TypeCombo.add('Option A')
    !this.TypeCombo.add('Option B', 'B')     -- display text + replacement text
endmethod

define method .OnTypeChanged()
    !selected = !this.TypeCombo.Selection()   -- returns RTEXT
    !display = !this.TypeCombo.DisplayText()  -- current display text
endmethod
```

**Members:**

| Name | Type | Purpose |
|------|------|---------|
| `Val` | REAL Get/Set | Selected option number |
| `DText` | ARRAY Get/Set | Set or get entire list of display texts |
| `RText` | ARRAY Get/Set | Set or get list of replacement texts |
| `Editable` | BOOLEAN Get/Set | Controls editable status of display field |
| `Scroll` | REAL Get/Set | Max length of text string for scrolling |
| `Count` | REAL Get Only | Number of fields in the list |

**Methods:** `Add(dtext)`, `Add(dtext, rtext)`, `Clear()`, `ClearSelection()`, `Select(textType, value)`, `Selection()`, `Selection(textType)`, `DisplayText()`, `SetDisplayText(str)`.

**Syntax:** `COMBObox gname [tagtext] [CALLback text] [TOOLTIP text] [NORESELect] [ZEROSELection] [SCRoll int] [width]`

## 9. NUMERIC INPUT Gadget

A numeric input with range, step, and decimal places.

```
setup form !!MyForm dialog size 400 200
    numericinput .BoreInput 'Bore (mm):' callback '!this.OnBoreChanged()' $
        range 10 1000 step 5 ndp 1 value 100 width 10
exit

define method .OnBoreChanged()
    !bore = !this.BoreInput.val
endmethod
```

**Members:**

| Name | Type | Purpose |
|------|------|---------|
| `val` | REAL Get/Set | Value (adjusted to nearest in range) |
| `range` | REAL ARRAY Get/Set | Range: Start, End and Step as reals |
| `ndp` | REAL Readonly | Number of decimal places (0 = integer) |
| `modifiedEvents` | BOOLEAN Get/Set | Enable/disable modified events |
| `editable` | BOOLEAN Get/Set | Enable/disable editing |

**Methods:** `setRange(rangeArr, ndp)` -- Set range and decimal places. `!range` is array [min, max, step]. ndp<0 leaves current unchanged.

**Syntax:** `NUMERICinput gname [tagtext] [CALLback text] [TOOLTIP text] [RANGE val val] [STEP val] [NDP int] [VALUE val] [width]`

## 10. SELECTOR Gadget

Single or multi-choice selection list. Can also operate as a database selector.

```
setup form !!MyForm dialog size 400 300
    selector .ElemSelector callback '!this.OnSelect()' single width 30 height 10
exit

-- Or database-aware selector:
-- selector .DbSelector callback '!this.OnSelect()' single database members
```

**Members:**

| Name | Type | Purpose |
|------|------|---------|
| `Val` | REAL or ARRAY | Selected field number(s) |
| `DText` | STRING ARRAY Get/Set | Display texts |
| `PickedField` | REAL Get Only | Last picked field number |

**Methods:** `Add(dtext)`, `Add(dtext, rtext)`, `Clear()`, `ClearSelection()`, `Select(textType, value)`, `Select(textType, valuesArr)`, `Selection(textType)`.

**Syntax:** `SELector gname [tagtext] [CALLback text] [TOOLTIP text] SINGle|MULTiple [DATAbase [MEMbers] [OWNers] [AUTO]] <vshap>`

## 11. TEXTPANE Gadget

Multi-line editable text area.

```
setup form !!MyForm dialog size 500 400
    textpane .Notes width 40 height 15
exit

define method .MyForm()
    !this.Notes.val = ARRAY()
    !this.Notes.val.Append('Line 1')
    !this.Notes.val.Append('Line 2')
    !this.Notes.SetEditable(TRUE)
endmethod
```

**Members:**

| Name | Type | Purpose |
|------|------|---------|
| `Val` | ARRAY Get/Set | Get or set contents (array of strings) |
| `Count` | REAL Get Only | Number of lines |

**Methods:** `Clear()`, `Line(n)` returns text of line n, `SetLine(n, str)` replaces line n, `CurPos()` returns [line, char], `SetCurPos(line, char)`, `SetEditable(bool)`.

**Syntax:** `TEXTPane gname [tagtext] [FIXCHARS] <vshap>`

## 12. BAR Gadget

Menu bar for forms. Uses special menu names 'Help' and 'Window'.

```
setup form !!MyForm document size 800 600
    bar
    !this.bar.add('File', 'FileMenu')
    !this.bar.add('Edit', 'EditMenu')
    !this.bar.add('Window', 'Window')    -- system window list menu
    !this.bar.add('Help', 'Help')        -- system help menu
exit
```

**Methods:** `Add(dtext, menu)`, `Clear()`, `InsertAfter(field, dtext, menu)`, `InsertBefore(field, dtext, menu)`, `FieldProperty(field, property)`, `SetFieldProperty(field, property, state)` -- property is 'ACTIVE' or 'VISIBLE'.

## 13. CONTAINER Gadget

Out of scope for this PML-only skill when it requires PMLNet (out of scope for this skill), C#, .NET (out of scope for this skill), or external controls. For pure PML form work, prefer native gadgets such as BUTTON, LIST, TEXT, TEXTPANE, OPTION, SELECTOR, TOGGLE, FRAME, BAR, MENU, and VIEW.

## 14. LIST Gadget (Extended)

Lists support multi-column display, multi-selection, and tab-separated headings.

```
-- Multi-column list
setup form !!MyForm dialog size 500 300
    list .DataList callback '!this.OnSelect()' width 40 height 10 multiple
exit

define method .MyForm()
    -- Set column headings (tab-separated or array)
    !headings = ARRAY()
    !headings.Append('Name')
    !headings.Append('Type')
    !headings.Append('Bore')
    !this.DataList.SetHeadings(!headings)
endmethod
```

**Additional Members:**

| Name | Type | Purpose |
|------|------|---------|
| `Val` | REAL or ARRAY | Selected field number(s) |
| `DText` | STRING ARRAY Get/Set | All display texts |
| `RText` | STRING ARRAY Get/Set | All replacement texts |
| `PickedField` | REAL Get Only | Last picked field number |
| `Count` | REAL Get Only | Number of fields |

**Extended Methods:** `SetHeadings(arr)` or `SetHeadings(tabStr)`, `SetRows(arrOfArr)` set display text by row, `SetColumns(arrOfArr)` set by column, `Select(column, dtext)` select row by column value, `Clear(dtext)` delete by display text, `Clear(fieldNum)` delete by number.

**Syntax:** `LIST gname [tagtext] [CALLback text] [TOOLTIP text] [MULTiple] [NORESELect] [ZEROSELection] <vshap>`

## 15. FRAME Types

Five types of FRAME:

| Type | Syntax | Description |
|------|--------|-------------|
| NORMAL | `frame .Name 'Title' ... exit` | Standard grouping frame |
| TABSET | `frame .Name tabset ... exit` | Tabbed panel container |
| TOOLBAR | `frame .Name toolbar ... exit` | Toolbar strip |
| PANEL | `frame .Name panel [indent] ... exit` | Borderless panel |
| FOLDUP PANEL | `frame .Name folduppanel 'Title' ... exit` | Collapsible panel |

**Members:**

| Name | Type | Purpose |
|------|------|---------|
| `Tag` | STRING Get/Set | Frame title text |
| `Val` | REAL Get/Set | Selected radio button index (if radio group) |
| `RGroupCount` | REAL Get Only | Count of radio buttons (0 if not radio group) |
| `Callback` | STRING Get/Set | Radio group select callback |
| `Expanded` | BOOLEAN Get/Set | FoldUpPanel expanded status |

**Methods:** `Rtoggle(index)` returns the RTOGGLE gadget at given index, `Background()`.

## 16. FMSYS Object

Global form system object for managing forms and application state.

| Method | Returns | Description |
|--------|---------|-------------|
| `!!FMSYS.Main()` | FORM | Query current main form |
| `!!FMSYS.SetMain(form)` | FORM | Sets main form |
| `!!FMSYS.CurrentDocument()` | FORM | Returns current Document |
| `!!FMSYS.LoadForm(name)` | FORM | Force loading of form definition |
| `!!FMSYS.Refresh()` | (none) | Refresh all VIEW gadgets |
| `!!FMSYS.SetProgress(pct)` | (none) | Set progress bar value (0-100) |
| `!!FMSYS.Progress()` | REAL | Get current progress bar value |
| `!!FMSYS.Interrupt()` | BOOLEAN | TRUE if interrupt gadget selected |
| `!!FMSYS.SetInterrupt(gadget)` | (none) | Sets the interrupt gadget |
| `!!FMSYS.DefaultFormat()` | FORMAT | Query system default format |
| `!!FMSYS.SetDefaultFormat(fmt)` | (none) | Set default global format |
| `!!FMSYS.SetHelpFileAlias(str)` | (none) | Establish application help file |
| `!!FMSYS.HelpFileAlias()` | STRING | Returns help file alias |

---

## 17. MENU Object

Menus are created within form definitions for pulldown, popup, or sub-menus.

```
setup form !!MyForm dialog size 400 300
    menu .FileMenu
        !this.FileMenu.add('CALLBACK', 'Open...', '!this.OnOpen()')
        !this.FileMenu.add('CALLBACK', 'Save', '!this.OnSave()')
        !this.FileMenu.add('SEPARATOR')
        !this.FileMenu.add('FORM', 'Settings...', 'SettingsForm')
        !this.FileMenu.add('MENU', 'Recent >', 'RecentMenu')
    exit

    menu .PopupMenu popup
        !this.PopupMenu.add('CALLBACK', 'Delete', '!this.OnDelete()')
        !this.PopupMenu.add('TOGGLE', 'Auto-refresh', '!this.OnAutoRefresh()')
    exit
exit
```

**Field Types:** `'CALLBACK'` (execute PML), `'TOGGLE'` (tick-box + callback), `'MENU'` (sub-menu), `'FORM'` (show form), `'SEPARATOR'` (visual line), `'CORETOGGLE'` (core-managed toggle).

**Members:** `PickedFieldName` (STRING, last picked field name).

**Methods:**

| Method | Returns | Description |
|--------|---------|-------------|
| `.Add(type, dtext, rtext, {name})` | (none) | Add field. type='CALLBACK'/'TOGGLE'/'MENU'/'FORM'/'SEPARATOR' |
| `.InsertBefore(target, type, dtext, rtext, {name})` | (none) | Insert before named field |
| `.InsertAfter(target, type, dtext, rtext, {name})` | (none) | Insert after named field |
| `.SetField(name, property, value)` | (none) | Set property: 'ACTIVE', 'VISIBLE', 'Selected' |
| `.FieldProperty(name, property)` | BOOLEAN | Get 'ACTIVE' or 'VISIBLE' |
| `.fullname()` | STRING | Full name e.g. '!!FormName.MenuName' |
| `.name()` | STRING | Short name |
| `.owner()` | FORM | Owning form |
| `.popupGadget()` | GADGET | Gadget that triggered popup (UNSET if from bar) |
| `.setUndoable(field, undoable)` | (none) | Assign UNDOABLE to a field callback |

## 18. FORM Object Details

Forms are PML2 objects (global variables `!!FormName`). Beyond setup/show/hide, they have built-in members and methods.

**Form Types:** `DIALOG` (default floating), `MAIN` (application frame), `DOCUMENT` (MDI child), `DOCKING` (dockable dialog).

**Built-in Members:**

| Member | Type | Description |
|--------|------|-------------|
| `FormTitle` | STRING Get/Set | Title in window banner |
| `IconTitle` | STRING Get/Set | Title when iconised |
| `initcall` | STRING Get/Set | Callback executed every time form is shown |
| `Okcall` | STRING Get/Set | OK button callback |
| `Cancelcall` | STRING Get/Set | Cancel button callback |
| `quitcall` | STRING Get/Set | Close/X button callback |
| `FirstShownCall` | STRING Get/Set | Callback for first-time display actions |
| `AutoScroll` | BOOLEAN Get/Set | Auto scrollbars when content exceeds size |

**Built-in Methods:**

| Method | Returns | Description |
|--------|---------|-------------|
| `.show()` | (none) | Show as child of current form |
| `.show('free')` | (none) | Show as free-standing form |
| `.show('At', x, y)` | (none) | Show at screen coordinates (fractions) |
| `.show('Cen', x, y)` | (none) | Show centered at coordinates |
| `.hide()` | (none) | Hide form (resets gadgets, does NOT execute Cancelcall) |
| `.gadgets()` | ARRAY | Returns array of all gadgets on form |
| `.newmenu(name, type)` | MENU | Creates menu ('main' or 'popup') |
| `.setpopup(menu)` | (none) | Assigns popup menu to form background |
| `.setUndoable(callback, undoable)` | (none) | Assign UNDOABLE to form callback |

**Form Definition Options:** `NOQUIT` (prevent X close), `NOALIGN` (disable auto-alignment), `RESIZABLE`, `size W H` (minimum size), `at xr X yr Y` (initial position).

**Commands:** `show !!name`, `show !!name free`, `loadform !!name`, `hide !!name`, `kill !!name` (hide and destroy).

---

## 19. Complete Form Example: Equipment Browser

This example shows a form that collects all equipment in the current zone and displays details when selected.

File: `equipbrowser.pmlfrm`

```
setup form !!EquipBrowser dialog size 500 400
    title 'Equipment Browser'

    frame .FilterFrame 'Filter'
        text .ZoneFilter 'Zone Name:' width 25 is STRING
        button .SearchButton 'Search' callback '!this.OnSearch()'
    exit

    paragraph .CountLabel text 'No items loaded'

    list .EquipList callback '!this.OnEquipSelected()' width 40 height 12

    frame .DetailFrame 'Details'
        paragraph .NameLabel text 'Name: '
        paragraph .TypeLabel text 'Type: '
        paragraph .DescLabel text 'Desc: '
        paragraph .PosLabel  text 'Position: '
    exit

    button .CloseButton 'Close' OK

exit

define method .EquipBrowser()
    !this.ZoneFilter.val = ''
endmethod

define method .OnSearch()
    !zoneName = !this.ZoneFilter.val
    !this.EquipList.clear()

    if (!zoneName EQ '') then
        var !equips collect all EQUI
    else
        var !equips collect all EQUI for $!zoneName
        handle any
            !!Alert.Error('Zone not found: ' & !zoneName)
            return
        endhandle
    endif

    !count = !equips.Size()
    !this.CountLabel.val = |Found $!count equipment items|

    do !eq values !equips
        !name = !eq.Name
        !this.EquipList.add(!name)
    enddo
endmethod

define method .OnEquipSelected()
    !selected = !this.EquipList.selection()
    if (!selected.Unset() OR !selected EQ '') then
        return
    endif

    !elem = !selected
    handle any
        !!Alert.Error('Cannot navigate to: ' & !selected)
        return
    endhandle

    !this.NameLabel.val = |Name: $!elem.name|
    !this.TypeLabel.val = |Type: $!elem.type|
    !this.DescLabel.val = |Desc: $!elem.desc|

    !pos = !elem.pos
    if (!pos.Set()) then
        !this.PosLabel.val = |Position: E$!pos.East N$!pos.North U$!pos.Up|
    else
        !this.PosLabel.val = 'Position: N/A'
    endif
endmethod
```