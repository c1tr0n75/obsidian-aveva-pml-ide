# PML2 Language Reference

## Table of Contents
1. Variables
2. Built-in Types
3. Operators
4. Control Flow
5. Error Handling
6. STRING Methods
7. ARRAY Methods
8. REAL Methods
9. Mathematical Global Functions
10. Object Methods (Common)
11. String Interpolation & Output
12. Alert Messages
13. File I/O
14. System Commands
15. User-Defined Objects (.pmlobj)
16. Global Functions (.pmlfnc)

---

## 1. Variables

PML2 variables use `!` prefix (local) or `!!` prefix (global/session):

```
-- Local variable (scope: current function/macro)
!name = 'Hello'
!count = 42
!flag = TRUE
!arr = ARRAY()

-- Global variable (scope: entire session)
!!globalName = 'Persistent'

-- Typed declaration
!x = REAL()
!s = STRING()
!b = BOOLEAN()
!a = ARRAY()
```

## 2. Built-in Types

| Type | Description | Example |
|------|-------------|---------|
| STRING | Text string | `!s = 'Hello World'` |
| REAL | Number (integer or float) | `!n = 42.5` |
| BOOLEAN | True/False | `!b = TRUE` |
| ARRAY | Ordered collection (1-based) | `!a = ARRAY()` |

## 3. Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `EQ` | Equal | `!x EQ 5` |
| `NE` | Not equal | `!x NE 0` |
| `GT` | Greater than | `!x GT 10` |
| `LT` | Less than | `!x LT 0` |
| `GE` | Greater or equal | `!x GE 1` |
| `LE` | Less or equal | `!x LE 100` |
| `AND` | Logical AND | `!a AND !b` |
| `OR` | Logical OR | `!a OR !b` |
| `NOT` | Logical NOT | `NOT !flag` |
| `&` | String concatenation | `!s1 & !s2` |
| `+` `-` `*` `/` | Arithmetic | `!x + !y` |

## 4. Control Flow

**IF/ELSEIF/ELSE/ENDIF:**
```
if (!x GT 10) then
    !result = 'big'
elseif (!x GT 5) then
    !result = 'medium'
else
    !result = 'small'
endif
```

**DO loop with counter:**
```
do !i from 1 to 10
    !total = !total + !i
enddo
```

**DO loop with step:**
```
do !i from 0 to 100 by 5
    $p Value: $!i
enddo
```

**DO loop over array values:**
```
do !item values !myArray
    $p Item: $!item
enddo
```

**DO loop over array indices:**
```
do !i indices !myArray
    $p Index $!i = $!myArray[$!i]
enddo
```

**DO loop with break:**
```
do !i from 1 to 1000
    break if (!i GT 100)
    !total = !total + !i
enddo
```

**DO loop with skip:**
```
do !i from 1 to 10
    skip if (!i EQ 5)
    $p Value: $!i
enddo
```

## 5. Error Handling

```
-- Inline error suppression
-- Error handling pattern around a PML operation
!result = !obj.Calculate()
handle any
    $p Error occurred: $!!error.text
endhandle

-- Block error handling
!calc.DoSomething()
handle any
    $p Error occurred: $!!error.text
endhandle

-- Handle specific error
!result = !obj.Calculate()
handle (1000,1)
    $p Specific PML error caught
endhandle

-- Access error details in handler
handle any
    !errorText = !!error.text
    !errorLine = !!error.line
    !errorCommand = !!error.command
endhandle
```

## 6. STRING Methods

### Core Methods

| Method | Description | Example |
|--------|-------------|---------|
| `.Length()` | String length | `!len = !s.Length()` |
| `.Upcase()` | Uppercase | `!up = !s.Upcase()` |
| `.Lowcase()` | Lowercase | `!low = !s.Lowcase()` |
| `.Trim()` | Remove leading/trailing whitespace | `!t = !s.Trim()` |
| `.Before(delim)` | Text before delimiter | `!b = !s.Before('#')` |
| `.After(delim)` | Text after delimiter | `!a = !s.After('#')` |
| `.Substring(start, len)` | Extract substring (1-based) | `!sub = !s.Substring(1, 5)` |
| `.Substring(start)` | From position to end | `!sub = !s.Substring(3)` |
| `.Split(delim)` | Split into array | `!arr = !s.Split(',')` |
| `.Split()` | Split on spaces | `!arr = !s.Split()` |
| `.Replace(old, new)` | Replace substring | `!r = !s.Replace('X', 'Y')` |
| `.Position(substr)` | Find position of substring | `!pos = !s.Position('abc')` |
| `.Match(pattern)` | Pattern matching | `!m = !s.Match('*.txt')` |

### Additional STRING Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `.Block()` | BLOCK | Make STRING into a BLOCK for evaluation |
| `.Boolean()` | BOOLEAN | TRUE if 'TRUE'/'T'/'YES'/'Y'; FALSE if 'FALSE'/'F'/'NO'/'N' |
| `.Bore()` | BORE | Convert STRING to a BORE |
| `.DBRef()` | DBREF | Convert STRING to a DBREF |
| `.Digits()` | REAL | If string is digits only, return positive value, else -1.0 |
| `.Direction()` | DIRECTION | Convert STRING to a DIRECTION |
| `.Direction(fmt)` | DIRECTION | Convert with FORMAT |
| `.Empty()` | BOOLEAN | TRUE for zero-length string |
| `.EQNoCase(str)` | BOOLEAN | Compare equal ignoring case |
| `.isDigits()` | BOOLEAN | String is contiguous decimal digits only |
| `.isLetters()` | BOOLEAN | String is contiguous letters only |
| `.isLettersAndDigits()` | BOOLEAN | String is letters and digits only |
| `.MatchWild(pattern)` | BOOLEAN | Wildcard match: `*` any chars, `?` single char |
| `.MatchWild(pattern, multi)` | BOOLEAN | With custom multiple-char wildcard |
| `.MatchWild(pattern, multi, single)` | BOOLEAN | With custom wildcards |
| `.Occurs(str)` | REAL | Number of occurrences of given string |
| `.Orientation()` | ORIENTATION | Convert STRING to ORIENTATION |
| `.Part(nth)` | STRING | Extract nth field (space/tab/newline delimited) |
| `.Part(nth, delim)` | STRING | Extract nth field with custom delimiter |
| `.Position()` | POSITION | Convert STRING to POSITION |
| `.VLogical()` | BOOLEAN | Evaluate STRING as BOOLEAN |
| `.VText()` | STRING | Evaluate STRING as STRING |
| `.VValue()` | REAL | Evaluate STRING as REAL |

## 7. ARRAY Methods

### Core Methods

| Method | Description | Example |
|--------|-------------|---------|
| `.Append(value)` | Add to end | `!arr.Append('item')` |
| `.AppendArray(arr)` | Append another array | `!arr.AppendArray(!arr2)` |
| `.Size()` | Number of elements | `!n = !arr.Size()` |
| `.Delete(index)` | Remove by index | `!arr.Delete(3)` |
| `.Clear()` | Remove all elements | `!arr.Clear()` |
| `.Sort()` | Sort elements | `!arr.Sort()` |
| `.SortUnique()` | Sort and remove duplicates | `!arr.SortUnique()` |
| `.Invert()` | Reverse order | `!arr.Invert()` |
| `.Find(value)` | Find index of value | `!idx = !arr.Find('item')` |
| `.FindFirst(value)` | Find first occurrence | `!idx = !arr.FindFirst('item')` |

### Additional ARRAY Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `.Compress()` | (none) | Remove all undefined elements and re-index |
| `.DeleteFrom(index, n)` | ARRAY | Make undefined n elements from index; returns deleted |
| `.DeleteFrom(index)` | ARRAY | Make undefined from index to end |
| `.DeleteTo(index, n)` | ARRAY | Make undefined n elements up to index |
| `.DeleteTo(index)` | ARRAY | Make undefined from start to index |
| `.Difference(arr2)` | ARRAY | Elements in original not in arr2 |
| `.Empty()` | BOOLEAN | TRUE if array is empty |
| `.Evaluate(block)` | ARRAY | Evaluate BLOCK code at each element |
| `.First()` | ANY | Return value of first defined element |
| `.From(index, n)` | ARRAY | Copy sub array of n elements from index |
| `.From(index)` | ARRAY | Copy sub array from index to end |
| `.Indices()` | ARRAY | Returns array of indices that have a value |
| `.Insert(index, value)` | (none) | Insert value at index; re-indexes later elements |
| `.InsertArray(index, arr)` | (none) | Insert array at index |
| `.Intersect(arr2)` | ARRAY | Elements present in both arrays |
| `.Last()` | ANY | Return last element value |
| `.MaxIndex()` | REAL | Subscript of last defined element |
| `.MinIndex()` | REAL | Subscript of first defined element |
| `.Overlay(index, arr2)` | ARRAY | Replace elements at index with arr2 |
| `.ReIndex(indices)` | (none) | Re-order elements by indices array |
| `.Remove(nth)` | ANY | Remove and return nth element; re-indexes |
| `.RemoveFirst()` | ANY | Remove and return first element |
| `.RemoveFrom(index, n)` | ARRAY | Remove and return n elements from index |
| `.RemoveFrom(index)` | ARRAY | Remove from index to end |
| `.RemoveLast()` | ANY | Remove and return last element |
| `.RemoveTo(index, n)` | ARRAY | Remove n elements from start to index |
| `.RemoveTo(index)` | ARRAY | Remove from start to index |
| `.SortedIndices()` | ARRAY | Indices of sorted order without sorting |
| `.To(index, n)` | ARRAY | Copy sub array of n elements to index |
| `.To(index)` | ARRAY | Copy sub array from start to index |
| `.Union(arr2)` | ARRAY | Elements in either array |
| `.Unique()` | (none) | Discard duplicates and re-index |
| `.Width()` | REAL | Maximum width of string elements |

## 8. REAL Methods

### Core Methods

| Method | Description | Example |
|--------|-------------|---------|
| `.Int()` | Truncate to integer | `!i = !x.Int()` |
| `.Nint()` | Round to nearest integer | `!i = !x.Nint()` |
| `.Abs()` | Absolute value | `!a = !x.Abs()` |
| `.Negate()` | Negate value | `!neg = !x.Negate()` |
| `.String()` | Convert to string | `!s = !x.String()` |
| `.String(format)` | Formatted string | `!s = !x.String('D2')` |
| `.Sin()` | Sine | `!s = !angle.Sin()` |
| `.Cos()` | Cosine | `!c = !angle.Cos()` |
| `.Sqrt()` | Square root | `!sq = !x.Sqrt()` |
| `.Log()` | Natural log | `!l = !x.Log()` |
| `.Log10()` | Log base 10 | `!l = !x.Log10()` |
| `.Power(exp)` | Raise to power | `!p = !x.Power(2)` |

### Additional REAL Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `.ACos()` | REAL | Arc cosine |
| `.ALog()` | REAL | Natural anti-log (exponential) |
| `.ASin()` | REAL | Arc sine |
| `.ATan()` | REAL | Arc tangent |
| `.ATanT(val)` | REAL | Arc tangent of value/argument |
| `.Between(lo, hi)` | BOOLEAN | TRUE if value in range (inclusive) |
| `.Boolean()` | BOOLEAN | FALSE if zero, otherwise TRUE |
| `.Bore()` | BORE | Convert to BORE |
| `.Cosine()` | REAL | Cosine (alias) |
| `.Distance()` | STRING | Convert to distance using default settings |
| `.Distance(feet, us, fraction, precision, zeroes)` | STRING | Formatted distance |
| `.EQ(val)` | BOOLEAN | TRUE if equal |
| `.GEQ(val)` | BOOLEAN | TRUE if >= |
| `.GT(val)` | BOOLEAN | TRUE if > |
| `.LEQ(val)` | BOOLEAN | TRUE if <= |
| `.LT(val)` | BOOLEAN | TRUE if < |
| `.MODULO(val)` | REAL | Remainder modulo given REAL |
| `.NearestBore()` | BORE | Convert to nearest BORE |
| `.SBetween(lo, hi)` | BOOLEAN | TRUE if in range (exclusive) |
| `.Sine()` | REAL | Sine (alias) |
| `.Tangent()` | REAL | Tangent |
| `.String(fmt)` | STRING | Convert with FORMAT object |
| `.Value()` | REAL | Return undimensioned real |
| `.Dimension()` | MEASURE | Dimension of physical quantity |
| `.Unit()` / `.Units()` | UNIT | Unit of measure |
| `.Cast(unit)` | REAL | Create REAL with value in specified units |
| `.ConvertUnits(str)` / `.Convert(unit)` | REAL | Convert to specified units |
| `.DBUnits()` | REAL | Return real in database units |
| `.CurrentUnits()` | REAL | Return real in current working units |

## 9. Mathematical Global Functions

```
!sin = SIN(!angle)        !asin = ASIN(!val)
!cos = COS(!angle)        !acos = ACOS(!val)
!tan = TAN(!angle)        !atan = ATAN(!val)
!sqrt = SQRT(!val)        !atan2 = ATAN2(!y, !x)
!abs = ABS(!val)          !pow = POW(!base, !exp)
!max = MAX(!a, !b)        !min = MIN(!a, !b)
!log = LOG(!val)          !log10 = LOG10(!val)
!ceil = CEILING(!val)     !floor = FLOOR(!val)
!round = NINT(!val)
```

## 10. Object Methods (Common)

| Method | Description | Example |
|--------|-------------|---------|
| `.ObjectType()` | Get type name | `!type = !obj.ObjectType()` |
| `.Set()` | Check if variable is set | `if (!x.Set()) then ...` |
| `.Unset()` | Check if variable is unset | `if (!x.Unset()) then ...` |

## 11. String Interpolation & Output

```
-- Print to command line
$p Hello World
$p Value is: $!myVariable

-- Bar-delimited strings for interpolation
!msg = |Hello $!name, you have $!count items|

-- Single quotes for literal strings (no interpolation)
!msg = 'Hello World'

-- Line continuation with $ at end of line
!long = 'This is a very ' + $
  'long string that spans ' + $
  'multiple lines'
```

## 12. Alert Messages

```
!!Alert.Error('Error message')
!!Alert.Warning('Warning message')
!!Alert.Message('Info message')
!confirm = !!Alert.Confirm('Are you sure?')   -- returns STRING: 'YES' or 'NO'
```

## 13. File I/O

```
-- Read a file
!file = object FILE('C:\temp\data.txt')
!file.Open('READ')
!line = !file.ReadLine()
!allLines = !file.ReadFile()      -- returns ARRAY of lines
!file.Close()

-- Write a file
!file = object FILE('C:\temp\output.txt')
!file.Open('WRITE')
!file.WriteLine('Hello World')
!file.WriteLine(|Value: $!myValue|)
!file.Close()

-- Append to a file
!file = object FILE('C:\temp\log.txt')
!file.Open('APPEND')
!file.WriteLine('Log entry')
!file.Close()

-- Check if file exists
!exists = object FILE('C:\temp\test.txt').Exists()
```

## 14. System Commands

```
-- Execute OS command
SYSCOM 'dir C:\temp'

-- Get environment variable
!path = !!GetEnvVariable('PMLLIB')
```

---

## 15. User-Defined Objects (.pmlobj)

### Object Definition

File: `myobject.pmlobj` (filename must match object name, lowercase)

```
define object MYOBJECT
    member .Name is STRING
    member .Value is REAL
    member .Items is ARRAY
    member .Active is BOOLEAN
endobject

-- Constructor (same name as object)
define method .MyObject()
    !this.Name = 'Default'
    !this.Value = 0.0
    !this.Items = ARRAY()
    !this.Active = TRUE
endmethod

-- Constructor with parameters
define method .MyObject(!name is STRING, !value is REAL)
    !this.Name = !name
    !this.Value = !value
    !this.Items = ARRAY()
    !this.Active = TRUE
endmethod

-- Method with return type
define method .Calculate(!factor is REAL) is REAL
    !result = !this.Value * !factor
    return !result
endmethod

-- Method without return type (procedure)
define method .AddItem(!item is STRING)
    !this.Items.Append(!item)
endmethod

-- Method calling another method
define method .Process()
    !doubled = !this.Calculate(2.0)
    !this.AddItem('Processed: ' & !doubled.String())
endmethod

-- Method with mixed types
define method .ToString() is STRING
    !result = !this.Name & ': ' & !this.Value.String()
    return !result
endmethod
```

### Using Objects

```
-- Create instance
!obj = object MYOBJECT()
!obj2 = object MYOBJECT('Test', 42.0)

-- Access members
!name = !obj.Name
!obj.Value = 100.0

-- Call methods
!result = !obj.Calculate(3.0)
!obj.AddItem('New Item')
!text = !obj.ToString()

-- Check type
!type = !obj.ObjectType()   -- returns 'MYOBJECT'
```

---

## 16. Global Functions (.pmlfnc)

### Function with Return Value

File: `calculatearea.pmlfnc`

```
define function !!CalculateArea(!length is REAL, !width is REAL) is REAL
    !area = !length * !width
    return !area
endfunction
```

Usage: `!area = !!CalculateArea(10.0, 5.0)`

### Procedure (No Return Value)

File: `printreport.pmlfnc`

```
define function !!PrintReport(!title is STRING, !items is ARRAY)
    $p ==============================
    $p $!title
    $p ==============================
    do !item values !items
        $p   - $!item
    enddo
    $p ==============================
endfunction
```

Usage: `!!PrintReport('My Report', !myArray)`

### Function with ANY Type

File: `tostring.pmlfnc`

```
define function !!ToString(!input is ANY) is STRING
    !type = !input.ObjectType()
    if (!type EQ 'STRING') then
        return !input
    elseif (!type EQ 'REAL') then
        return !input.String()
    elseif (!type EQ 'BOOLEAN') then
        if (!input) then
            return 'TRUE'
        else
            return 'FALSE'
        endif
    else
        return 'Unknown type: ' & !type
    endif
endfunction
```

---

## PML File Organization & PMLLIB

### File Types

| Extension | Purpose | Naming Rule |
|-----------|---------|-------------|
| `.pmlobj` | Object definitions | Lowercase object name (e.g., `myobject.pmlobj`) |
| `.pmlfnc` | Global functions | Lowercase function name without `!!` (e.g., `calculatearea.pmlfnc`) |
| `.pmlfrm` | Form definitions | Lowercase form name without `!!` (e.g., `myform.pmlfrm`) |
| `.mac` | PML1 macros | Any name |

### PMLLIB Search Path

```batch
set PMLLIB=%PMLLIB%;C:\MyProject\pmllib
```

### Rebuilding Index

After adding new PML files, rebuild the index:
```
pml rehash all                     -- Rebuild entire index
pml index                          -- Update pml.index file
```

---

## 17. BOOLEAN Object Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `BOOLEAN(val)` | BOOLEAN | Constructor from REAL (non-zero=TRUE, 0=FALSE) |
| `BOOLEAN(str)` | BOOLEAN | Constructor from STRING ('TRUE'/'T'/'Y'/'YES' or 'FALSE'/'F'/'N'/'NO') |
| `.AND(val)` | BOOLEAN | Logical AND |
| `.NOT()` | BOOLEAN | Logical NOT |
| `.OR(val)` | BOOLEAN | Logical OR |
| `.Real()` | REAL | 1 if TRUE; 0 if FALSE |
| `.String()` | STRING | 'TRUE' or 'FALSE' |

## 18. FILE Object Methods

### Core (already shown in File I/O section above)

### Additional FILE Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `.AccessMode()` | STRING | Return access mode: 'CLOSED'/'READ'/'WRITE'/'OVERWRITE'/'APPEND' |
| `.Copy(path)` | FILE | Copy file to path; returns FILE for copy |
| `.Copy(file)` | FILE | Copy file to FILE location |
| `.DeleteFile()` | (none) | Delete the file |
| `.Directory()` | FILE | Returns FILE object for owning directory |
| `.DTM()` | DATETIME | Date/time of last modification |
| `.Entry()` | STRING | Returns file name as string |
| `.Files()` | ARRAY | Returns array of files in directory |
| `.FullName()` | STRING | Returns name including path |
| `.IsOpen()` | BOOLEAN | Whether file is open |
| `.LineNumber()` | REAL | Line number about to be written |
| `.Move(path)` | FILE | Move file to path |
| `.Move(file)` | FILE | Move file to FILE location |
| `.Name()` | STRING | Return name as STRING |
| `.Owner()` | STRING | Returns file owner ID |
| `.Path()` | ARRAY | Returns owning directory chain |
| `.PathName()` | STRING | Returns owning path as STRING |
| `.ReadFile(maxLines)` | ARRAY | Read with max line limit |
| `.ReadRecord()` | STRING | Read line from open file; UNSET at EOF |
| `.Set()` | BOOLEAN | Whether FILE has a name set |
| `.Size()` | REAL | File size in bytes |
| `.SubDirs()` | ARRAY | Sub-directories |
| `.Type()` | STRING | 'FILE' or 'DIRECTORY' |
| `.WriteFile(mode, lines)` | (none) | Open in mode, write array, close |
| `.WriteRecord(str)` | (none) | Write STRING to open file |

## 19. DATETIME Object

```
-- Create with current date/time
!now = object DATETIME()

-- Create with specific date
!d = object DATETIME(2024, 3, 15)

-- Create with date and time
!d = object DATETIME(2024, 3, 15, 14, 30, 0)

-- Create with month name
!d = object DATETIME(2024, 'March', 15)
```

| Method | Returns | Description |
|--------|---------|-------------|
| `.Date()` | REAL | Day of month (1-31) |
| `.Month()` | REAL | Month (1-12) |
| `.MonthString()` | STRING | Month as string ('January', etc.) |
| `.Year()` | REAL | Year (e.g. 2024) |
| `.Hour()` | REAL | Hour (0-23) |
| `.Minute()` | REAL | Minutes (0-59) |
| `.Second()` | REAL | Seconds (0-59) |
| `.GT(dt)` | BOOLEAN | Greater than |
| `.GEQ(dt)` | BOOLEAN | Greater than or equal |
| `.LT(dt)` | BOOLEAN | Less than |
| `.LEQ(dt)` | BOOLEAN | Less than or equal |

## 20. BLOCK Object

A BLOCK holds an expression string for deferred evaluation:

```
!blk = BLOCK('NAME OF OWNER')
!result = !blk.Evaluate()

-- Also created from STRING:
!str = 'NAME OF OWNER'
!blk = !str.Block()
!result = !blk.Evaluate()
```

| Method | Returns | Description |
|--------|---------|-------------|
| `Block(str)` | BLOCK | Creates a block expression |
| `.Evaluate()` | ANY | Evaluate expression and return result |
| `.Evaluate(type)` | ANY | Evaluate and return error if wrong TYPE |

## 21. FORMAT Object

Controls numeric/position/orientation display formatting:

| Member | Type | Default | Description |
|--------|------|---------|-------------|
| `CompSeparator` | STRING | | Separator for multi-component types |
| `Denominator` | REAL | 32 | Largest denominator for Imperial fractions |
| `Dimension` | STRING | | 'NONE', 'L', 'L2', 'L3' |
| `DP` | REAL | 2 | Number of decimal places |
| `ENU` | BOOLEAN | TRUE | Use ENU format for POSITIONS (FALSE=XYZ) |
| `Fraction` | BOOLEAN | FALSE | Output as fraction (TRUE) or decimal (FALSE) |
| `Label` | STRING | | Distance label (e.g. 'mm', 'm') |
| `TrailZeros` | BOOLEAN | TRUE | Include trailing zeros |
| `Units` | STRING | | Output unit ('MM', 'M', 'FINCH', 'INCH') |

## 22. DATEFORMAT Object

```
!dfmt = object DATEFORMAT()          -- default format
!dfmt = object DATEFORMAT('D M Y')   -- custom format
!dfmt.Month('FULL')                  -- 'INTEGER', 'BRIEF', or 'FULL'
!dfmt.Year(4)                        -- 2 or 4 digits
!str = !dfmt.String(!datetime)       -- format a DATETIME
```

## 23. UNDOABLE Object

Used to create undo/redo support for database modifications:

```
!undo = object UNDOABLE()
!undo.description('Move equipment')
-- make database changes here --
!undo.add()
!undo.endundoable()
```

| Method | Description |
|--------|-------------|
| `.description(str)` | Adds description text |
| `.add()` | Marks database and adds to undo stack |
| `.endundoable()` | Marks database at end of change |
| `.undoAction(str)` | Command for undo |
| `.redoAction(str)` | Command for redo |
| `.clearAction(str)` | Command for clear without undo/redo |

## 24. UNIT Object

Represents a unit of measurement (mm, metres, inches, kg, etc.).

```
!u = object UNIT('mm')
!factor = !u.Factor()          -- conversion factor to DB units
!dim = !u.Dimension()          -- returns MEASURE (e.g. Length)
!isMetric = !u.IsMetric()
!allUnits = !u.AllUnits()      -- all named units
```

| Method | Returns | Description |
|--------|---------|-------------|
| `Unit()` | UNIT | Creates unset/default UNIT |
| `Unit(str)` | UNIT | Creates from description, name, or hashcode |
| `Unit(val)` | UNIT | Creates from enum value |
| `.Description()` / `.String()` | STRING | Long description of unit |
| `.Name()` | STRING | Unit name used as qualifier |
| `.ShortName()` | STRING | Short name for component units |
| `.Hashcode()` / `.Ptype()` | STRING | Hash code ('COMPOUND' if compound) |
| `.Enum()` | REAL | Unique integer ID |
| `.Factor()` | REAL | Conversion factor to database units |
| `.Dimension()` | MEASURE | Dimension of this unit |
| `.IsStandard()` | BOOLEAN | TRUE if single standard unit |
| `.IsNull()` | BOOLEAN | TRUE if units are NONE |
| `.IsImperial()` | BOOLEAN | TRUE if imperial unit |
| `.IsMetric()` | BOOLEAN | TRUE if metric unit |
| `.AllUnits()` | ARRAY | All named standard units |
| `.AllDimensions()` | ARRAY | All standard dimensions |

## 25. MEASURE Object

Represents a dimension/physical quantity (Length, Area, Volume, Angle, Mass). Manages current working units.

```
!m = object MEASURE('Length')
!curUnit = !m.currentunits()   -- current working unit for Length
!m.SetUnits(object UNIT('mm')) -- set working unit
!m.Suspend()                   -- use database units temporarily
-- do work in DB units --
!m.Reinstate()                 -- restore working units
```

| Method | Returns | Description |
|--------|---------|-------------|
| `Measure()` | MEASURE | Creates invalid/unset dimension |
| `Measure(str)` | MEASURE | Creates from description, name, format code ('L', 'L2') |
| `.Description()` / `.String()` | STRING | Long description |
| `.Name()` | STRING | Unique name for format statements |
| `.Hashcode()` / `.Ptype()` | STRING | Hash code |
| `.currentunits()` | UNIT | Current unit of this dimension |
| `.UnitQualifier()` | STRING | Unit qualifier string |
| `.UnitFactor()` | REAL | Conversion factor to DB units |
| `.SetUnits(unit)` | BOOLEAN | Set current unit |
| `.Numeric()` | BOOLEAN | Set to numeric (no conversion) |
| `.Default()` | BOOLEAN | Reset to catalogue defaults |
| `.Suspend()` | BOOLEAN | Suspend working units; use DB units |
| `.SuspendLevel()` | REAL | Number of suspension levels |
| `.Reinstate()` | BOOLEAN | Reinstate working units (clears stack) |
| `.Unsuspend()` | BOOLEAN | Pop one suspension level |
| `.IsNull()` | BOOLEAN | TRUE if dimension is NONE |
| `.IsStandard()` | BOOLEAN | TRUE if named standard dimension |
| `.DBUnits()` / `.DBUnit()` | UNIT | Database unit for this dimension |
| `.UnitsOf()` | ARRAY | Standard units of this dimension |

## 26. BORE Object

Represents a pipe bore (nominal pipe size).

```
!b = object BORE(150)          -- from REAL
!b = object BORE('6IN')        -- from STRING
!isLarger = !b.GT(object BORE(100))
!val = !b.Real()
```

| Method | Returns | Description |
|--------|---------|-------------|
| `BORE(val)` | BORE | From REAL value |
| `BORE(str)` | BORE | From STRING value |
| `BORE(str, fmt)` | BORE | From STRING with FORMAT |
| `.Size` | REAL | Get/Set bore size |
| `.EQ(val)` / `.GT(val)` / `.LT(val)` | BOOLEAN | Comparison |
| `.GEQ(val)` / `.LEQ(val)` | BOOLEAN | Comparison |
| `.Real()` | REAL | Convert to REAL |
| `.String(fmt)` | STRING | Convert using FORMAT |
