# General Commands

This reference covers the general utility commands, unit configuration, precision control, display settings, OS commands, and querying facilities in AVEVA E3D Design.

---

## 1. Entering and Leaving Design

### Entering Design
Use the `DESIGN` command to enter the Plant Design module. This command is available throughout Outfitting.
```pml
DESIGN
```

### Changing Modules
You can change to another Outfitting module by typing the name of the module. Design automatically saves your work before changing module.
```pml
ISODRAFT
```

### Exit from Design without Saving Changes
Use `QUIT` or `FINISH` to exit the module without saving changes since the last `SAVEWORK`, module change, or MDB change.

*   **`QUIT`**: Exits the module and returns to the Monitor module by default.
*   **`QUIT <module_name>`**: Exits and enters the specified module.
*   **`FINISH`**: Exits Design and closes the AVEVA application entirely, returning you to the operating system.

```pml
QUIT
QUIT ISODRAFT
FINISH
```

---

## 2. Alpha Display & Logging

AVEVA provides commands to write alphanumeric display regions (the COMMANDS and REQUESTS views) to external text files.

### Saving the Alpha Log
*   **`ALPHA LOG`**: Enables the contents of either or both alpha regions to be written to a file.
*   **`ALPHA FILE`**: Enables the contents of the REQUESTS region only to be written to a file.

#### Command Syntax
```pml
ALPha LOG <filename> [OVERwrite | APPend] [COMMands | REQuests]
ALPha FILE <filename> [OVERwrite | APPend]
ALPha LOG END
ALPha FILE END
```

#### Examples
```pml
ALP LOG /LF1 COMMands         $* Log COMMANDS region to file /LF1
ALP LOG /LF1 OVER COMM        $* Overwrite /LF1 with COMMANDS region
ALP LOG /LF2                  $* Log both alpha regions to /LF2
ALP FILE /LF2                 $* Log REQUESTS region only to /LF2
ALP LOG END                   $* Stop logging
ALP FILE END                  $* Stop logging requests
```

> [!NOTE]
> After an ALPHA file has been opened, subsequent output is directed to both the file and the screen until the file is closed or the module is changed.

### Clearing the Alpha Views
You can clear the text from the alphanumeric views command line:
```pml
ALPHA COMMANDS CLEAR         $* Clears the COMMANDS region
ALPHA REQUESTS CLEAR         $* Clears the REQUESTS region
```

---

## 3. Working Units & Tolerances

Units are initialized on session start based on the `BUNIT` and `DUNIT` attributes of the first `UNIT` element found in the catalogue database.
*   `BUNIT` sets BORE units (one of `MM`, `INCH`, `FINCH`).
*   `DUNIT` sets DISTANCE units (any distance standard unit including `MM`, `INCH`, `FINCH`).

The distance unit determines the initial imperial or metric defaults for other quantities:

| Quantity | Metric Default | Imperial Default |
| :--- | :--- | :--- |
| **Mass** | kg | lb |
| **Temperature** | degC | degF |
| **Pressure** | pascal | PSI |
| **Force** | newton | lbf |
| **Density** | kg/m3 | lb/ft3 |
| **Unit Mass** | kg/distance | lb/distance |

### Setting Working Units
You can override nominal bores and general distance dimensions:
```pml
MM BORE                       $* Bores will be input/output in mm
FINCH DIS                     $* Distances/coords in feet and inches (e.g. 3'6)
INch DISTance                 $* Distances in inches
UNITS DEFault                 $* Resets to default catalogue units
```

#### The UNITS Command
```pml
UNITS <"any standard unit" | "any unit qualified value">
```
To avoid syntax ambiguity, compound or SI-prefixed units (except `mm` and `kg` which are standard) must be qualified with a leading number:

*   **Accepted**: `UNITS pound`, `UNITS lb mass`, `UNITS kg`, `UNITS 1centimeter3`, `UNITS 1LB/FT3`, `UNITS 1MegaPascal`, `UNITS 1kg`
*   **Unacceptable**: `UNITS cm3`, `UNITS MegaPascal`, `UNITS lb/ft3`

#### Advanced Unit Dimension Settings
*   `UNITS DERived Dimension`: Sets working units of derived dimensions from component dimensions (e.g. area = distance squared).
*   `UNITS NUMeric Dimension`: Disables conversions and treats inputs as database units (no qualifiers output).
*   `UNITS SUSpend`: Suspends current working units and uses database units exclusively. This maintains a recursive suspend stack.
*   `UNITS UNSUSpend`: Restores working units by popping one level off the suspend stack.
*   `UNITS REINstate`: Restores working units completely, emptying the suspend stack.

### PML Core Measure and Unit Objects
Working units can be controlled programmatically using PML `measure` and `unit` objects:

```pml
!dim = object measure('mass')
!dim.default()                $* Resets to default units
!dim.suspend()                $* Suspends units (adds to stack)
!dim.unsuspend()              $* Pops one level from suspend stack
!dim.reinstate()              $* Restores working units completely
!dim.setunits(!unitObj)       $* Sets current working units to !unitObj
```

### Querying Units and Dimensions
*   `Q UNIts`: (Deprecated) Reports distance/bore units if they are MM, INCH, or FINCH.
*   `Q DISPLAY`: Reports tolerance, level, and current unit settings.

Using the core `MEASURE` object:
```pml
!dim = object measure('mass')
!unit = !dim.currentunits()    $* Returns the UNIT object
!qual = !dim.unitqualifier()   $* Returns string qualifier (e.g. 'kg')
!dbu  = !dim.dbunit()          $* Returns database unit string
!lvl  = !dim.suspendlevel()    $* Returns suspend level (0 if active)

!isImp = !unit.isimperial()    $* Returns TRUE if imperial
!isMet = !unit.ismetric()      $* Returns TRUE if metric
!isStd = !unit.isstandard()    $* Returns TRUE if standard unit
```

---

## 4. Output Precision

You can control output precision (decimal places or fractional denominators) for distances or general values.

### Command Syntax
```pml
PRECision [OUTput | VARiables] [DIstance | GENeral] TO <value> [DECi | DECIMAls | DPIs | DIGits | THs As | NDs As]
PRECision [OUTput | VARiables] [DIstance | GENeral] DEFault
```
*   `OUTput`: Affects general dimensions/queries.
*   `VARiables`: Affects formatting when converting reals to strings.

### Examples
```pml
PREC OUT DI DEF               $* Set default precision for output distances
PREC VAR DEF                  $* Set default precision for variables
PREC DI DEF                   $* Set default precision for both
PREC DI 1 DP                  $* Set distance output to 1 decimal place (MM/INCH)
PREC OUT DI 4 DEC             $* Set distance output to 4 decimal places (MM/INCH)
PREC VAR DI 3 DP              $* Set distance variables to 3 decimal places
PREC DI 64THS                 $* Set distance output to 1/64 inch (FINCH)
PRECI VAR DISTANCE 6 DECIMALS 8 DIGITS    $* Constrain decimal places and sig-figs
```

### Switching Bores (Actual vs. Nominal)
```pml
PRECISION BORE ACTUAL         $* Output actual bore dimensions
PRECISION BORE NOMINAL        $* Output nominal bore values (Default)
```

---

## 5. System Commands & Utilities

### Audible Alarms
Toggle the workstation audio alert on macro error:
```pml
ALARM ON                      $* Enable audible error tone (Default)
ALARM OFF                     $* Suppress audible error tone
```

### Text Trace
Controls automatic output of Current Element name and attributes in TTY mode (always set to OFF automatically when running macros):
```pml
TRACE OFF                     $* Stop automatic output of CE name
TRACE ON                      $* Enable automatic output of CE name
```

### Issuing Operating System Commands
You can run a command on the host OS from Design by enclosing the command in single quotes (`'`) or vertical bars (`|`):
```pml
SYSCOM 'dir'                  $* Lists files in the active directory
SYSCOM |copy file1 file2|     $* Copies files on the host system
```

---

## 6. General Querying Facilities

### Session & Environment Queries
*   `Q BANner [FULL]`: Displays the software version, OS platform, and build date.
*   `Q MDB`: Returns the current Multiple Database (MDB) name.
*   `Q TEAM`: Lists valid teams for the current user.
*   `Q USER`: Returns the current username.
*   `Q LOGIN/NAME`: Returns the login name of the user.
*   `Q EVARiable <evar>`: Returns the value of environment variable `<evar>` (must enclose in quotes if it contains non-letter characters).
*   `Q DEVice [ALPha | GRAphics]`: Checks active alphanumeric/graphics output devices.
*   `Q SETPens [number]`: Checks logical pen settings.
*   `Q LINESTyle`: Returns the line type setting (e.g. dotted, dashed).
*   `Q COLours [number | BACKground | ALPHa]`: Checks colors assigned to numbers or background/alpha regions.
*   `Q ACTions`: Returns whether Command Actions are ON or OFF.
*   `Q UNIQueid`: Generates a unique, machine-dependent workstation string (useful for temp files).

### File Queries
Get metadata for files on disk or open file channels:
```pml
Q FILE <filename> <attribute>
Q OPENFILE <token> <attribute>
```
Valid file attributes are:
*   `NAME`: File name as entered in the command.
*   `MODE`: File mode (e.g. write, read).
*   `FULLName`: Full absolute path.
*   `ENTRY`: File base name (without directories).
*   `SIZE`: Size in bytes.
*   `DTM`: Date and time last modified.
*   `OWNER`: File owner/creator.
*   `LOCK`: Lock status (only valid for open files).
*   `SORT`: Type (`File`, `Directory`, or `Other`).

---

## 7. Database Element & Attribute Queries

### Core Element Navigation Queries
*   `Q CE`: Returns the Current Element name or RefNo.
*   `Q MEMbers`: Lists immediate children in the hierarchy.
*   `Q OWNer`: Returns the owner (parent) element.
*   `Q LISt`: Lists element types legally allowed as children of the CE.

### Checking Element Existence
```pml
Q EXISTS <element_id> [<type>] [UPDATE]
```
Returns one of the following codes:
*   `TRUEA`: Element exists (no type specified).
*   `TRUE`: Element exists and matches the specified `<type>`.
*   `TRUEC`: Element exists and can be updated.
*   `FALSEA`: Element does not exist.
*   `FALSEB`: Element exists but does not match the specified `<type>`.
*   `FALSEC`: Element exists but cannot be updated (when `UPDATE` option was specified).

### Attribute & Selection Queries
*   `Q ATTributes`: Lists all attributes of the CE, with User Defined Attributes (UDAs) at the end.
*   `Q (<attribute> OF <element_id>)`: Queries attribute on a specific element.
    ```pml
    Q (XLEN OF BOX1)
    ```
*   `Q <attribute_name>`: Query a specific attribute (e.g. `Q XLEngth`, `Q BORe`, `Q POSition`, `Q ORIentation`).
*   `Q :<uda_name>`: Query a User Defined Attribute (e.g. `Q :TESTED`).
*   `Q POS ORI XLEN YLEN ZLEN :TESTED`: Query multiple attributes in a single command line.
*   `Q <array_name>[<index>]`: Query specific index of an array attribute (e.g. `Q DESP[10]`).
*   `Q CRINFO`: Query the database creation version info.

### Selection Expressions
Query elements matching criteria within a scope:
```pml
Q ALL <element_type> WHERE <expression> FOR <scope_element>
```
Example:
```pml
Q ALL BRANCH WHERE (HBORE GT 100) FOR /ATEST   $* Queries branches under /ATEST with HBORE > 100
```
