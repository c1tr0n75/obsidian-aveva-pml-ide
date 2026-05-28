# Command Line Queries

While modern PML2 development strongly encourages using object-oriented methods (like `DBREF`, `COLLECTION`, and the `MDB` object) instead of global commands, understanding the global `Q` (Query) and `LIST` commands is essential. These commands are commonly used in the command line for debugging, writing macros, and understanding what information is actually available in the AVEVA environment.

## The LIST Command

The `LIST` command is used to display information about the current session, databases, teams, users, and other global configurations.

```text
             .-----------------------------<-------------------------------------.
            /                                                                     \
>--- LIst ---*---------------------------------------------------------------------|
             |--- USers -----------------------------------------------------------|
             |--- MDBs ------------------------------------------------------------|
             |--- DBs ---+--- OF TYPE type ----------------------------------------|
             |           |                                                         |
             |           '---------------------------------------------------------|
             |--- TEams -----------------------------------------------------------|
             |--- FILes -----------------------------------------------------------|
             |--- COpies ----------------------------------------------------------|
             |             .---------------------<-------------------.             |
             |            /                                           \            |
             |--- MOdules ---*--- integer -----------------------------|           |
             |               |                                         |           |
             |               '--- module_name -------------------------'           |
             |--- MESSages --------------------------------------------------------|
             |--- ALL -------------------------------------------------------------|
             |--- PASSwords -------------------------------------------------------|
             |--- TYPes -----------------------------------------------------------|
             |--- SIZes -----------------------------------------------------------|
             |--- MACRos ----------------------------------------------------------|
             |--- AREA --- integer ------------------------------------------------|
             |--- EXTernal --------------------------------------------------------|
             |--- AUTHUSERS -------------------------------------------------------|
             '--- WORKing EXTracts --+------------------. FOR user -+--->
                                     |                  |
                                     '- dbname ---------'
```

**Examples:**
*   `LIST MDBs`: Lists all Multiple Database (MDB) configurations.
*   `LIST DBs OF TYPE DESI`: Lists all Design databases in the current MDB.
*   `LIST TEams`: Lists all teams available.

## The QUERY Command

The `QUERY` (or `Q`) command is extremely versatile and is used to interrogate the database, session properties, and the current element.

```text
>- Q --+- Authuser -----------------------------------------------------------------|
       |- Authentication -----------------------------------------------------------|
       |--- USer -------------------------------------------------------------------|
       |--- TEam --------+--- word -------------------------------------------------|
       |--- DB --------- .                                                          |
       |--- COpies ---+--- dbname --------------------------------------------------|
       |--- DBNO dbno --------------------------------------------------------------|
       |--- MDB name ---------------------------------------------------------------|
       |             .---------------------<-------.                                |
       |            /                               \                               |
       |--- MOdule ---*--- integer -----------------|                               |
       |              |                             |                               |
       |              '--- word --------------------+-------------------------------|
       |--- LOck -------------------------------------------------------------------|
       |--- DDL --------------------------------------------------------------------|
       |--- SET ---+--- TEam -------------------------------------------------------|
       |           |--- DBSet ------------------------------------------------------|
       |           '--- MDB --------------------------------------------------------|
       |--- Project ----------------------------------------------------------------|
       |--- SESSIONS --+-- SINCE --.                                                |
       |               |           |                                                |
       |               |-- LAST ---+- n --+-----------------------------------------|
       |               |                  |                                         |
       |               '-- ON <date> -----+-dbname ---------------------------------|
       |--- CLAIM dbname -----------------------------------------------------------|
       |--- PASSWORDLOCK -----------------------------------------------------------|
       |--- NEWREF oldref ----------------------------------------------------------|
       |--- MAXUSErs ---------------------------------------------------------------|
       |--- ACTIVE -----------------------------------------------------------------|
       |--- MACRO n ----------------------------------------------------------------|
       |--- INFOrmation --+--- dbname ----------------------------------------------|
                          |                                                         |
                          '--- SYSTEM ----------------------------------------------+--->
```
## The MARK Command
Items can be marked with a constant graphic label which will stay with that item even if it is moved or rescaled. Items can also be unmarked (which removes the label).

Mark CE : Adds labels to the current element selected in the hierarchy

Mark /EQ-1 : Add labels to the element named /EQ-1

Mark =21154/12 : Add labels to the element with the reference number (REFNO or DBREF) =21154/12

Remove Mark : Removes the labels from the selected item.

Remove All Marks : Removes all the labels from all of the items.

## The ENHANCE command 

Drafting primitives may be emphasized in a more permanent fashion than the flashing provided by the HIGHLIGHT command. This is controlled by the ENHANCE command, which has the general form:

ENHANce [SOLEly] selection_criterion selection_criterion ...

For example:

ENHANCE SOLELY CE

ENHANCE SOLELY ALL CIRC FOR LAYER

ENHANCE ALL STRA WI ( ATTRIB LENG GT 400 ) FOR /SHEET12

ENHANCE ALL WI ( NLPN GE 11 AND NLPN LE 20 ) FOR NOTE

If the SOLELY option is used then all existing enhancing will be removed, otherwise existing enhanced elements will be unaffected by this command.

The FOR element_identifier command option is important; without it the selection system will scan around the entire MDB.

Enhancing may be removed by the UNENHance command, which may optionally specify a selection criterion. The brief command

UNENHANCE

removes all enhancing and should always be used for that purpose.

The command : UNENHANCE ALL

should NOT be used as it causes the entire MDB to be scanned.

The list of currently enhanced elements may be queried by: Q ENHAnce [LIst]

The colour in which elements are enhanced may be changed and reset by:

SETENHAnce COLour integer

SETENHA COL BRIGHTORANGE

SETENHA COL DEFAULT

(sets enhance colour back to default of aquamarine)

Overlay (OLAY) elements can also be enhanced.

Entering MDB mode causes all chosen elements to be unenhanced and the enhanced element list cleared out. When doing a SAVEWORK or a module change the enhancing will not be permanently written to the picture file. However after a SAVEWORK command the enhanced element list will still exist and the elements will remain enhanced on the screen.

Also, a more general function than just colouring phases, it allows you to enhance members and member groups of the current element (CE) in the graphical view.

!!bocusercolour( !level, !startColour )

The !level argument determines how many levels down in the hierarchy you wish to differentiate the members:

Level 1 : Colours only the immediate children of the CE.

Level 3 : Colours up to 3 levels down.

Phase Sorting : The !startColour is a starting value of the colour number for the colouring sequence.

**Examples:**
*   `Q MDB`: Returns the name of the current MDB.
*   `Q USER`: Returns the current username.
*   `Q TEAM`: Returns the current team.
*   `Q PROJECT`: Returns the current project code.
*   `Q DBREF` : Returns the current DBREF.
*   `Q DESC of SPREF` : Returns the description of the specification SPREF of a Current Element
*   `Q PURP` : Return the attribute `PURP` of a Current Element
*   `Q HREF` : Return the Head Reference of a Current Element (must be a BRANCH Element in this case)

*   `MARK ALL EQUI WITH (DESC EQ 'PUMP')` : Adds labels to all equipment with the attribute DESC equal to 'PUMP' 
*   `ENHANCE ALL PIPE COL BLUE` : enhances all the PIPEs in the Drawlist with the colour blue
