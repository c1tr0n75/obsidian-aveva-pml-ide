# AVEVA — Pseudo Attributes Reference

Pseudo attributes are computed or derived attributes available on AVEVA database elements, organized by functional category.

---

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ALIST` | `element(500)` | — |  |
| `ARRI` | `integer` | — | Arrive Ppoint |
| `AUTCOL` | `real(3)` | — | Design rgb autocolour |
| `CABGAP` | `real` | — | cable gap on cabletray as multiple of OUTD |
| `CLAI` | `integer` | — | Claim mode |
| `CLOSEFLAG` | `logical` | — | True if branch is closed |
| `CMPSTS` | `string(120)` | — | Connectivity comparison status description |
| `COMPTYPE` | `word` | — | Type of component |
| `CREF` | `element` | — | Connection reference |
| `DATE` | `string(12)` | — | Date |
| `DFHOME` | `element` | element, elemtype | Get default home element |
| `DRMXTL` | `integer` | — | Draft general max text length |
| `EXTNO` | `integer` | — | Extract number |
| `FEMCOL` | `integer` | — | FEM image object colour |
| `GAPALL` | `string(1000)` | — | Gap Allowance |
| `GENTYP` | `word` | — | Type of geometry |
| `HDIR` | `dir` | — | Head direction |
| `IBLNAM` | `string` | — | Name of idealised block |
| `LCTROL` | `logical` | — | Controlled DB Flag |
| `LDFLT` | `logical` | — | logical default value for a UDA |
| `LEAV` | `integer` | — | Leave Ppoint |
| `LVAR` | `logical` | — | Variant Flag |
| `MFFIND` | `element` | — | Find Manufacturingpackage folder |
| `MODID` | `string(2000)` | — | LMI Model ID |
| `MPFIND` | `element` | — | Find Manufacturingpackage |
| `MPKGFD` | `element` | — | Find Manufacturingpackage |
| `NDFLT` | `real` | — | Numeric default value for a UDA |
| `NUMBDB` | `integer` | — | DB number |
| `OCONE` | `integer` | — | Objectcode 1 |
| `OVCWIDTH` | `real` | — | Overall cables width |
| `PAAX` | `string(30)` | — | Direction of axis |
| `PAXI` | `string(30)` | — | Axial direction |
| `PBAX` | `string(30)` | — | Direction |
| `PCAX` | `string(30)` | — | Direction of C offset |
| `PZAXI` | `string(30)` | — | Alignment axial direction |
| `SCHED` | `string(10)` | — | Piping Schedule |
| `SCOSLX` | `integer(500)` | — | Access Control scope |
| `STVDEMOTE` | `element` | — | Demote Status Value |
| `STVPROMOTE` | `element` | — | Promote Status Value |
| `STVREF` | `element` | — | Value Ref |
| `TATYPE` | `string(10)` | — | Text answer type |
| `TDIR` | `dir` | — | Tail direction |
| `UDIRECTION` | `dir` | — | Up axis direction |
| `UDNA` | `string(50)` | — | User defined name |
| `USCCOG` | `pos` | — | User derived centre of gravity position |
| `USCWCO` | `pos` | — | User derived wet centre of gravity position |
| `USCWEI` | `real` | — | Derived value for user weight |
| `USCWWE` | `real` | — | Derived value for user wet weight |
| `UUID` | `string(36)` | — | Universally unique identifier |
| `UUIDREF` | `element(500)` | word | Universally unique identifier references |
| `VENID` | `string(120)` | — | LMI Vendor ID |
| `XOFF` | `real` | — | X-offset |
| `XRLIST` | `element(10000)` | elemtype | List distributed attributes |
| `XRLSTT` | `word(2000)` | elemtype | List distributed attributes |
| `XRQCNT` | `integer` | elemtype | Get distributed attributes element count |
| `XRQELE` | `element` | elemtype, integer | Get distributed attributes element |
| `XXXDIR` | `dir` | — | Direction Test attribute |
| `XXXORI` | `ori` | — | Orientation Test attribute |
| `XXXPOS` | `pos` | — | Position Test attribute |
| `YOFF` | `real` | — | Y-offset |


## Attribute Category: Accommodation

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ACCDIR` | `dir` | — | Access Direction |
| `ACCELE` | `real(500)` | — | Elevations of Referenced Levels |
| `BNDARE` | `real` | — | Boundary line area |
| `CELLTO` | `real` | — | Total Number of Cell |
| `CELLTR` | `real` | — | Total Number of Trimmed Cells |
| `CELLWH` | `real` | — | Total Number of Untrimmed Cells |
| `CLNELE` | `real` | — | Ceiling Elevation |
| `EDGELE` | `real` | — | Edge Length |
| `FLCARE` | `real` | — | Floor cover area |
| `FLCSTHICKNESS` | `real` | — | Floor cover thickness |
| `FLCVOL` | `real` | — | Floor cover volume |
| `FLLARE` | `real` | — | Floor layer area |
| `FLLVOL` | `real` | — | Floor layer volume |
| `FLRELE` | `real` | — | Floor Elevation |
| `FLRELV` | `real` | — | Floor elevation |
| `FLTDIR` | `dir` | — | Stairflight Direction |
| `GAREA` | `real` | — | Ceiling Grid Area |
| `GOING` | `real(10)` | — | Tread Going |
| `INSARE` | `real` | — | Insulation requirement area |
| `LABPOS` | `pos` | — | Label position |
| `LDRDIR` | `dir` | — | Ladder Direction |
| `LGOING` | `real(10)` | — | Lower Tread Going |
| `LWP` | `pos` | — | Lower Working Point |
| `MATDIR` | `dir` | — | Material direction |
| `PITCH` | `real(10)` | — | Pitch of stair flight |
| `PRMDIR` | `dir` | — | Primary Direction |
| `RUNGS` | `integer` | — | Number of rungs |
| `TRIMCE` | `integer(10000)` | — | Array of Trimmed Cells |
| `TRIMTY` | `word` | — | CTWALL TRIM TYPE |
| `UGOING` | `real(10)` | — | Upper Tread Going |
| `URISE` | `real(10)` | — | Upper Tread Rise |
| `UWP` | `pos` | — | Upper Working Point |
| `WHOLEC` | `real` | — | Array of Whole Cells |
| `WJUSL` | `word` | — | Wall Justification Line |


## Attribute Category: Admin DB

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ACRGRP` | `element(5000)` | — | List of ACRs within a ACRSET |
| `DBLS` | `element(1000)` | — | List of DBs belonging to MDB |
| `DBSHIE` | `element(5000)` | — | Database hierarchy within a DBSET |
| `DBSLEV` | `element(5000)` | — | Databases at a level within a DBSET |
| `DBSLIS` | `element(5000)` | — | Databases within a DBSET |
| `DBSSTP` | `element(8000)` | — | DBs in a stamp |
| `DEFERD` | `element(10000)` | — | Deferred DBs in MDB |
| `PRJID` | `string(8)` | — | Project id. Available on STAT or GSTAT element |
| `TEAMLS` | `element(1000)` | — | List of TEAMs to which USER belongs |
| `USERLS` | `element(1000)` | — | List of USERs belonging to TEAM |


## Attribute Category: Admin DB, Database Element

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ACCESSDB` | `string(10)` | — | DB access |
| `AREAEX` | `logical` | — | True if area exists for DB |
| `CLAIMDB` | `string(10)` | — | Implicit or explicit claims |
| `CLCCNT` | `integer` | — | Claim list changes count |
| `COPYDB` | `element(8191)` | — | Copies of this database |
| `CSESS` | `string(120)` | integer | Comment entered for specified session |
| `DACC` | `string` | — | Database access |
| `DBLC` | `element(1000)` | — | List of LOCs belonging to a DB system using this DB |
| `DBUSRX` | `element(10000)` | — | Current Users in the system using this DB or any extract descendants |
| `DCLA` | `string` | — | Database claim mode |
| `DSESS` | `string(120)` | integer | Date of specified session |
| `ENCODB` | `string` | — | DB Encoding |
| `EXPIRY` | `string(50)` | — | Protected DB Expiry date |
| `EXTALS` | `element(8191)` | — | Extract ancestors |
| `EXTCLS` | `element(8191)` | — | Extract children |
| `EXTDES` | `element(8191)` | — | Extract descendants |
| `EXTFAM` | `element(8191)` | — | Extract family |
| `EXTMAS` | `element` | — | Extract master |
| `FILEEX` | `logical` | — | True if DB file exists and is valid |
| `FILENAME` | `string` | — | DB filename |
| `FOREIGN` | `string` | — | DB foreign/local |
| `HCCNT` | `integer` | — | Header/Extract list changes count |
| `ISCOPY` | `logical` | — | True if a copy DB |
| `ISDBFR` | `logical` | — | True if database is foreign |
| `ISDBPR` | `logical` | — | True if database is primary for global working |
| `ISDRDB` | `logical` | — | True if database has drawings |
| `ISEXTR` | `logical` | — | True if an extract |
| `ISFOR` | `logical` | — | True if database is foreign |
| `ISMAST` | `logical` | — | True if a Master DB, that is top level extract |
| `ISWORK` | `logical` | — | True if a working extract |
| `LINKSN` | `integer` | — | Linked session on parent extract |
| `LPROT` | `logical` | — | Protected DB Flag |
| `MDBCLS` | `element(1000)` | — | List of MDBs in which DB is current |
| `MDBLS` | `element(1000)` | — | List of MDBs to which DB belongs |
| `NACCNT` | `integer` | — | Non-additive changes count |
| `NAMEDB` | `string` | — | DB name |
| `NXTDBN` | `integer` | — | Next DB number |
| `NXTDBU` | `integer` | — | Next Unique DB number |
| `NXTEXN` | `integer` | — | Next DB extract number |
| `NXTFDB` | `integer` | — | Next DB file and DB number |
| `NXTFLN` | `integer` | — | Next DB file number |
| `PSESS` | `integer` | integer | Previous session number |
| `RSESS` | `string(120)` | integer | Reason for creation of session |
| `SIZEDB` | `integer` | — | Size of DB |
| `STPDBS` | `element(5000)` | — | Stamps containing db |
| `STPSES` | `integer(2000)` | — | Sessions used in at least one stamp |
| `STYPDB` | `string` | — | DB sub type |
| `TYPEDB` | `string(6)` | — | DB type |
| `USESS` | `string(120)` | integer | User creating session |


## Attribute Category: Allowed Operation

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DACCLA` | `logical` | — | element to be claimed |
| `DACCOH` | `logical` | — | True if DAC allows element hierarchy to be copied to another DB |
| `DACCOP` | `logical` | — | True if DAC allows element to be copied to another DB |
| `DACCRE` | `logical` | elemtype | True if DAC allows element to be created |
| `DACDEL` | `logical` | — | True if DAC allows element to be deleted |
| `DACDRO` | `logical` | — | True if DAC allows element to be dropped |
| `DACERR` | `string(120)` | attr | Returns the DAC error |
| `DACEXH` | `logical` | — | True if DAC allows element hierarchy to be exported |
| `DACEXP` | `logical` | — | True if DAC allows element to be exported |
| `DACISS` | `logical` | — | True if DAC allows element to be issued |
| `DACMOD` | `logical` | attr | True if DAC allows attribute of element to be modified |
| `DACOUH` | `logical` | — | True if DAC allows element hierarchy to be output |
| `DACOUT` | `logical` | — | True if DAC allows element to be output |
| `MODATT` | `logical` | attr | True if attribute of element can be modified |
| `MODDEL` | `logical` | attr | True if element can be deleted |
| `MODERR` | `string(120)` | attr | Returns the error text that would occur if attribute was modified |
| `OKDRPH` | `element(5000)` | — | Primary elements preventing hierarchy drop |
| `OKRLEH` | `element(5000)` | — | Primary elements preventing hierarchy release |


## Attribute Category: Assembly Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ASIOWN` | `element(500)` | — | to element |
| `ASMBLD` | `logical` | — | True if element is assembled |
| `ASMBLS` | `string` | — | A for assembled elements, NA for not assembled elements |
| `ASMOWN` | `element(500)` | — | Assembly referring to element |
| `ASORIS` | `string(20)` | — | Predefined assembly orientation string |
| `ASSEQ` | `integer` | — | Assembly sequence |


## Attribute Category: Association Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `AOBJS` | `element(500)` | — | Model currently participating in ASSOCs |
| `ASMBS` | `element(500)` | — | Reference Array of all association members using element |
| `ASSCIA` | `element(500)` | — | Reference Array of all associate elements used with constraints |
| `ASSDFS` | `element(500)` | — | Reference Array of all ASSDEFs |
| `ASSOS` | `element(500)` | — | Reference Array of all associations with constraints |
| `ASTMBS` | `element(500)` | — | Reference Array of all association members targeting element |
| `DASSCI` | `element(500)` | — | Reference Array of all direct associates with constraints |
| `DASSOS` | `element(500)` | — | Reference Array of all associations with constraints |
| `DIREV` | `dir` | — | Direction evaluation |
| `LOGEV` | `logical` | — | Logical value evaluation |
| `POSEV` | `pos` | — | Position evaluation |
| `REALEV` | `real` | — | Real evaluation |
| `STREV` | `string(120)` | — | String value evaluation |
| `TESTEV` | `logical` | — | Result of constraint test evaluation |


## Attribute Category: Attribute Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ATTDST` | `word(2000)` | — | attributes, default gives all udas |
| `ATTLIST` | `word(2000)` | — | List of all attributes for element |
| `ATTOUT` | `word(2000)` | — | List of all attributes excluding hidden ones, i.e as output in "Q ATT" |
| `ATTRAW` | `word(2000)` | — | List of raw attributes |
| `PSATTS` | `word(500)` | — | List of pseudo attributes |
| `RLIS` | `word(200)` | — | List of rules set |
| `UDALIS` | `word(2000)` | — | List of UDAs |
| `UDASET` | `word(2000)` | — | List of UDAs set |


## Attribute Category: Branch Specific

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `BRCOG` | `pos` | — | Branch centre of gravity |
| `BRCONNECT` | `element(5000)` | — | Branch member connections |
| `BREARE` | `real` | — | Branch external surface area |
| `BRIARE` | `real` | — | Branch internal surface area |
| `BRICOG` | `pos` | — | Branch insulated centre of gravity |
| `BRIWEI` | `real` | — | Branch insulated weight |
| `BRLEG` | `element(5000)` | — | Branch members on the same leg |
| `BRWCOG` | `pos` | — | Branch wet centre of gravity |
| `BRWEIG` | `real` | — | Branch weight |
| `BRWICOG` | `pos` | — | Branch wet insulated centre of gravity |
| `BRWIWEI` | `real` | — | Branch insulated wet weight |
| `BRWWEI` | `real` | — | Branch wet weight |
| `CLLE` | `real` | — | Branch centreline length |
| `HEND` | `string` | — | Connection at other end of HREF (HEAD or TAIL) |
| `HPOSE` | `real` | — | Easting of head position |
| `HPOSN` | `real` | — | Northing of head position |
| `HPOSU` | `real` | — | Upping of head position |
| `TEND` | `string` | — | Connection at other end of TREF (HEAD or TAIL) |
| `TPOSE` | `real` | — | Easting of tail position |
| `TPOSN` | `real` | — | Northing of tail position |
| `TPOSU` | `real` | — | Upping of tail position |
| `TUCL` | `real` | — | Tube centreline length of branch |
| `TULE` | `real` | — | Tube length of branch |


## Attribute Category: Cabling

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ACLIST` | `element(500)` | — | attached point |
| `ATCONN` | `element(500)` | — | List of elements connected to attachment |
| `AYDIR` | `dir` | — | Arrive Y axis direction |
| `CABBOX` | `real(6)` | — | Calculated box volume in world coordinates |
| `CBACXR` | `real` | — | Accumulated cables xarea at route node |
| `CBCOG` | `pos` | — | Cable centre of gravity |
| `CBCULE` | `real` | — | Cut Length of cable |
| `CBGELE` | `real` | — | Geometric Length of cable |
| `CBNUCW` | `element(500)` | — | Cables at a point on a cableway |
| `CBPREF` | `element(500)` | — | References to POINTR forming route of a cable |
| `CBRNLS` | `element(500)` | — | List of route nodes that cable passes |
| `CBRWGL` | `real` | — | Raw Geometric Length of cable |
| `CBTOLE` | `real` | — | Total Length of Cable |
| `CBWEIG` | `real` | — | Cable weight |
| `CFILL` | `real` | — | Fill level at route node |
| `CFRELE` | `real` | — | Free Length of cable |
| `CLIST` | `element(500)` | — | All cables attached to route node |
| `CMAXF` | `real` | — | Calculate maximum fill level on cway |
| `CMINF` | `real` | — | Calculate minimum fill level on cway |
| `CONATS` | `element(500)` | — | List of attachment connected to attachment |
| `CONBRA` | `element(500)` | — | List of branches connected to branch |
| `CONNE` | `logical` | — | Segment end connection flag |
| `CONNS` | `logical` | — | Segment start connection flag |
| `CONSIS` | `logical` | — | Position consistency |
| `CWJUSL` | `word` | — | Cable Way Justification Line |
| `CWLIST` | `element(500)` | — | All cableways attached to route node |
| `DEPREF` | `element(500)` | — | List of elements connected to branch tail |
| `ELCXRF` | `element(500)` | — | Return reference from CABLE element to ELCONN element |
| `FCENTRE` | `pos` | — | Centre of fillet arc |
| `FEND` | `pos` | — | Fillet arc position |
| `FILREF` | `element(500)` | — | Sorted references to attachment points with ascending order of fill level greater then 0 |
| `FLEVEL` | `real` | — | Fill level at route node |
| `FMID` | `pos` | — | Middle point of fillet arc |
| `FSTART` | `pos` | — | Fillet start position |
| `HDCONN` | `element(500)` | — | List of elements connected to branch head |
| `HDREF` | `element(500)` | — | List of attachment connected to attachment |
| `LALCAB` | `element(500)` | — | List arriving leaving cables on attached point |
| `LYDIR` | `dir` | — | Leave Y axis direction on point |
| `MINFIL` | `real` | — | Min Fill level on Cableway and Cabletray components |
| `NPLIST` | `element(500)` | — | All NATPs attached to route node |
| `NUMCOR` | `integer` | — | Number of cores in a cable |
| `POITYP` | `string(120)` | — | Point type |
| `PRFELE` | `element` | — | Cableway profile element |
| `PRFOBS` | `integer` | — | Cableway profile obstructions |
| `RATTAL` | `element(500)` | word | Rnode list |
| `TLCONN` | `element(500)` | — | List of elements connected to branch tail |
| `TLREF` | `element(500)` | — | List of attachment connected to attachment |
| `TXAREA` | `real` | — | Total Cableway X-area |
| `VRADI` | `real` | — | Cableway radius |


## Attribute Category: Cable Interference Class

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `CABINT` | `string(120)` | — | cable interference class |


## Attribute Category: Catalog

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `BRTXRF` | `element(500)` | — | Branch Table element to SPECs |
| `BTHK` | `string(1000)` | — | parameterized bolt thickness |
| `BTYP` | `string(1000)` | — | Bolt type |
| `CCORXR` | `element(500)` | — | Return reference from CCORSET element to SCOMs |
| `COCDRE` | `element(500)` | word | COCDESS with same COCONN value as qualifier |
| `COCOXR` | `element(500)` | — | COCO description return reference |
| `COCSAM` | `element(500)` | — | COCOS with same CTYP value as COCDES |
| `CTYPLI` | `word(500)` | — | List of COCO Ctypes |
| `DESGEO` | `element(5000)` | — | Design geometrical dependencies |
| `DUPLIC` | `element(10000)` | integer | Duplicates of the current element with the same attribute values |
| `GEODEP` | `element(5000)` | — | Direct geometrical dependencies |
| `HDUPLI` | `element(10000)` | integer | Duplicates of the current element (checking members) |
| `LBBORE` | `logical` | — | TRUE if Minor/Branch bore is in nominal bore table |
| `LHBORE` | `logical` | — | TRUE if Major/Header bore is in nominal bore table |
| `LRBORE` | `logical` | — | TRUE if bores is in reducer table |
| `LTBORE` | `logical` | — | TRUE if bores is in branch (tee) table |
| `NOMXRF` | `element(500)` | — | Return reference from NOMTAB element to SPECs |
| `PRTRTX` | `string(1000)` | word | Part element R text |
| `PRTSTX` | `string(1000)` | word | Part element S text |
| `PRTTTX` | `string(1000)` | word | Part element T text |
| `PRTXRF` | `element(500)` | — | Return reference from PART element to SPCOs |
| `REDXRF` | `element(500)` | — | Return reference from Reducer Table element to SPECs |


## Attribute Category: Catalog Values for Design Item

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `APAR` | `real(100)` | — | parameters |
| `CATR` | `element` | — | Catalogue reference |
| `CATTEX` | `string(725)` | — | Concatenation of Detailing and Material Texts |
| `CPAR` | `real(100)` | — | Catalogue parameters |
| `DEFSPK` | `element` | — | Default Reference of SPEC for branch members |
| `DETR` | `element` | — | Detailing text reference |
| `DTXR` | `string(2000)` | — | RTEXT of detailing text |
| `DTXS` | `string(2000)` | — | STEXT of detailing text |
| `DTXT` | `string(2000)` | — | TTEXT of detailing text |
| `GMRE` | `element` | — | Geometry set reference |
| `GSTR` | `element` | — | Structural geometry set reference |
| `GTYP` | `word` | — | Generic type |
| `IPAR` | `real(30)` | — | Parameters of the insulation catalogue component |
| `MATR` | `element` | — | Material reference |
| `MTXR` | `element` | — | Material text reference |
| `MTXX` | `string(2000)` | — | XTEXT of material text |
| `MTXY` | `string(2000)` | — | YTEXT of material text |
| `MTXZ` | `string(2000)` | — | ZTEXT of material text |
| `NGMR` | `element` | — | Negative geometry set reference |
| `OPAR` | `real(100)` | — | Owning parameters - catalogue component |
| `PARA` | `real(100)` | — | Parameters |
| `PSTR` | `element` | — | Structural Pline set reference |
| `PTRE` | `element` | — | Point set reference |
| `SKEYSCALE` | `integer` | — | Universal SKEY scale factor |
| `SPMA` | `real` | word | Spec angle maximum answer |
| `SPOW` | `element` | — | Reference of SPEC owning SPCO of branch members |
| `SPRA` | `real` | word | Spec angle answer |
| `SPRB` | `real` | word | Spec bore answer |
| `SPWD` | `string` | word | Spec text answer |
| `STYP` | `string` | — | SPECON type question |
| `TPAR` | `real(30)` | — | Trace catalogue component parameters |
| `WPAR` | `word(100)` | — | Parameters as a word |


## Attribute Category: Catalog Values for Ducting Item

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ARRHEI` | `real` | — | Arrive height |
| `ARRWID` | `real` | — | Arrive width |
| `LEAHEI` | `real` | — | Leave height |
| `LEAWID` | `real` | — | Leave width |
| `PPHEI` | `real` | integer | Ppoint height |
| `PPWID` | `real` | integer | Ppoint width |


## Attribute Category: Catalog Values for Hanger Item

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `HHBO` | `real` | — | Hanger head bore |
| `HHBP` | `pos` | — | Bottom of hanger head |
| `HHCO` | `word` | — | Hanger head connection type |
| `HHDR` | `dir` | — | Hanger head direction |
| `HHGR` | `real` | — | Hanger head gradient |
| `HHOD` | `real` | — | Hanger head outside diameter |
| `HHPO` | `pos` | — | Hanger head position |
| `HHTP` | `pos` | — | Top of hanger head |
| `HTBO` | `real` | — | Hanger tail bore |
| `HTBP` | `pos` | — | Bottom of hanger tail |
| `HTCO` | `word` | — | Hanger tail connection type |
| `HTDR` | `dir` | — | Hanger tail direction |
| `HTGR` | `real` | — | Hanger tail gradient |
| `HTOD` | `real` | — | Hanger tail outside diameter |
| `HTPO` | `pos` | — | Hanger tail position |
| `HTTP` | `pos` | — | Top of hanger tail |


## Attribute Category: Catalog Values for Piping Item

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `AALLAN` | `real` | — | angle |
| `ABOP` | `pos` | — | Bottom of arrive pipe |
| `ABOR` | `real` | — | Arrive bore |
| `ACON` | `word` | — | Arrive connection type |
| `ACORRO` | `real` | — | Arrive corrosion allowance |
| `ADIR` | `dir` | — | Arrive direction |
| `AGRD` | `real` | — | Arrive Ppoint gradient |
| `AOD` | `real` | — | Arrive Ppoint outside diameter |
| `APOS` | `pos` | — | Arrive position |
| `APOSE` | `real` | — | Easting of arrive position |
| `APOSN` | `real` | — | Northing of arrive position |
| `APOSU` | `real` | — | Upping of arrive position |
| `AQAANG` | `real` | — | Angle between alignment direction of arrive pp and previous |
| `AQANG` | `real` | — | Angle between arrive Ppoint and previous component |
| `AQBORE` | `logical` | — | TRUE if arrive Ppoint has same bore as previous |
| `AQCON` | `logical` | — | TRUE if arrive Ppoint has Correct connection type |
| `AQOFF` | `real` | — | Offset between arrive Ppoint and previous component |
| `ATCORR` | `real` | — | Arrive tube corrosion allowance |
| `ATOP` | `pos` | — | Top of arrive pipe |
| `ATWALL` | `real` | — | Arrive tube wall thickness |
| `AWALLT` | `real` | — | Arrive wall thickness |
| `AZDIR` | `dir` | — | Arrive alignment direction |
| `BJOINT` | `string` | — | Bolt joint |
| `BTOTAL` | `integer` | — | Bolt joint total |
| `DCORRO` | `real` | — | Derived corrosion |
| `DFBRADIUS` | `real` | element | Default bend radius |
| `DWALLT` | `real` | — | Derive wall thickness |
| `FLALLO` | `real` | — | Flange allowance |
| `FLOFFS` | `real` | — | Flange offset |
| `HCORRO` | `real` | — | Head Corrosion |
| `HWALLT` | `real` | — | Head wall thickness |
| `LALLAN` | `real` | — | Leave Ppoint allowed angle |
| `LBOP` | `pos` | — | Bottom of leave pipe |
| `LBOR` | `real` | — | Leave bore |
| `LCON` | `word` | — | Leave connection type |
| `LCORRO` | `real` | — | Leave corrosion allowance |
| `LDI` | `dir` | — | Leave direction |
| `LGRD` | `real` | — | Leave Ppoint gradient |
| `LOD` | `real` | — | Leave Ppoint outside diameter |
| `LPOS` | `pos` | — | Leave position |
| `LPOSE` | `real` | — | Easting of leave position |
| `LPOSN` | `real` | — | Northing of leave position |
| `LPOSU` | `real` | — | Upping of leave position |
| `LQAANG` | `real` | — | Angle between alignment direction of leave Ppoint and next |
| `LQANG` | `real` | — | Angle between leave Ppoint and next component |
| `LQBORE` | `logical` | — | TRUE if leave Ppoint has same bore as next |
| `LQCON` | `logical` | — | TRUE if leave Ppoint has Correct connection type |
| `LQOFF` | `real` | — | Offset between leave Ppoint and next component |
| `LTCORR` | `real` | — | Leave tube corrosion allowance |
| `LTOP` | `pos` | — | Top of leave pipe |
| `LTWALL` | `real` | — | Leave tube wall thickness |
| `LWALLT` | `real` | — | Leave wall thickness |
| `LZDIR` | `dir` | — | Leave alignment direction |
| `MAXB` | `real` | — | Maximum bore |
| `NOMBIN` | `real(200)` | word | List of valid Nominal bores in Inches |
| `NOMBMM` | `real(200)` | word | List of valid Nominal bores in MM |
| `PALLAN` | `real` | integer | Ppoint allowed angle |
| `PBOP` | `pos` | integer | Bottom of pipe |
| `PCORRO` | `real` | integer | P Tube corrosion |
| `PCWALL` | `real` | integer | Ppoint connect wall thickness |
| `PFLALL` | `string(1000)` | — | Flange allowance parameter |
| `PFLOFF` | `string(1000)` | — | Flange offset parameter |
| `PHBO` | `real` | — | Pipe head bore |
| `PHBP` | `pos` | — | Bottom of pipe head |
| `PHCO` | `word` | — | Pipe head connection type |
| `PHDR` | `dir` | — | Pipe head direction |
| `PHGR` | `real` | — | Pipe head gradient |
| `PHOD` | `real` | — | Pipe head outside diameter |
| `PHPO` | `pos` | — | Pipe head position |
| `PHTP` | `pos` | — | Top of pipe head |
| `PQAANG` | `real` | integer | Angle between alignment direction of specified pp and adjacent component |
| `PQANG` | `real` | integer | Angle between specified Ppoint and adjacent component |
| `PQBORE` | `logical` | integer | TRUE if specified Ppoint has same bore as adjacent |
| `PQCON` | `logical` | integer | TRUE if leave Ppoint has Correct connection type |
| `PQOFF` | `real` | integer | Offset between specified Ppoint and adjacent component |
| `PTBO` | `real` | — | Pipe tail bore |
| `PTBP` | `pos` | — | Bottom of pipe tail |
| `PTCO` | `word` | — | Pipe tail connection type |
| `PTDR` | `dir` | — | Pipe tail direction |
| `PTGR` | `real` | — | Pipe tail gradient |
| `PTOD` | `real` | — | Pipe tail outside diameter |
| `PTOP` | `pos` | integer | Top of pipe |
| `PTPO` | `pos` | — | Pipe tail position |
| `PTTP` | `pos` | — | Top of pipe tail |
| `PWALLT` | `real` | integer | Ppoint wall thickness |
| `RANANG` | `real(32)` | elemtype | Range of available angles for bends and elbows |
| `RANRAD` | `real(32)` | elemtype | Range of available radii |
| `TCORRO` | `real` | — | Tail Corrosion |
| `TWALLT` | `real` | — | Tail wall thickness |
| `WALLTH` | `real` | — | Tube wall thickness |
| `WTHICK` | `real` | — | Wall thickness |


## Attribute Category: Catalog Values for Sloping Lines

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DEFSLO` | `real` | — | Default pipe slope |
| `HOFFT` | `real` | — | Head offset |
| `MAXSLO` | `real` | — | Maximum pipe slope |
| `MINSLO` | `real` | — | Minimum pipe slope |
| `MINVER` | `real` | — | Minimum vertical pipe slope |
| `OFFTOL` | `string(1000)` | — | PPoint offset tolerance |
| `PPOFFT` | `real` | integer | Ppoint offset |
| `SLOREF` | `element` | — | Pipe slope reference |
| `TOFFT` | `real` | — | Tail offset |


## Attribute Category: Change History

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ATTMOD` | `logical` | attr | True if specified attribute has been modified this session |
| `ATTMODC` | `logical` | attr | True if specified attribute has been modified since comparison date |
| `ATTMODLIST` | `word(500)` | integer | List of attributes modified since given session |
| `ATTMODLISTC` | `word(500)` | — | List of attributes modified since comparison date |
| `CATMOD` | `integer` | — | Catalogue Geometry Modified- Not directly query able |
| `CRDATE` | `string(120)` | attr | Date element created in current DB or if extract in ascendant |
| `CREXTR` | `integer` | attr | Extract element created in current DB or if extract in ascendant |
| `CRINFO` | `string(200)` | — | DB creation information |
| `CRSESS` | `integer` | attr | Session element created in current DB or if extract in ascendant |
| `CRUSER` | `string(120)` | attr | User created element in current DB or if extract in ascendant |
| `DBSESS` | `integer` | — | Last DB session |
| `ELECRE` | `logical` | integer | True if created since given session |
| `ELECREC` | `logical` | — | True if created since comparison date |
| `ELEDEL` | `logical` | integer | True if deleted since given session |
| `ELEDELC` | `logical` | — | True if deleted since comparison date |
| `ELEMOD` | `logical` | integer | True if modified since given session |
| `ELEMODC` | `logical` | — | True if modified since comparison date |
| `EXMOD` | `logical` | — | True if element modified in this extract |
| `GEOM` | `integer` | — | Geometry Modified- Not directly queryable |
| `HIST` | `integer(120)` | attr | History of sessions in which element or specified attribute were made |
| `LASTM` | `string(120)` | attr | Date of last modification |
| `MSESS` | `integer` | attr | Last session number |
| `PRVSES` | `integer` | integer | Previous Session to that specified |
| `RULEMOD` | `logical` | attr | True if rule modified this session |
| `RULEMODC` | `logical` | attr | True if rule modified since comparison date |
| `RULEMODLIST` | `word(500)` | integer | List of rules modified since given session |
| `RULEMODLISTC` | `word(500)` | — | List of rules modified since comparison date |
| `SESCLA` | `integer` | — | Session Of Claim |
| `SESSC` | `string(120)` | integer | Comment for specified session |
| `SESSCA` | `integer(2000)` | — | List of pairs of DB number, last session number for all referenced DBs |
| `SESSCH` | `integer(2000)` | — | As for SESSCA, but searches all descendants for referenced DBs |
| `SESSD` | `string(120)` | integer | Date of specified Session |
| `SESSM` | `integer` | attr | Session Of Last Modification |
| `SESSNO` | `integer` | — | Current opened Session |
| `SESSU` | `string(120)` | integer | User creating specified session |
| `USERM` | `string(120)` | attr | User making last modification |


## Attribute Category: Claim Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `CLMID` | `string(120)` | — | Unique system ID of user claiming element |
| `CLMNUM` | `integer` | — | User or extract number claiming element. Extract numbers are negative |
| `CLMTIE` | `element(4)` | — | Reference to elements that are automatically claimed along with this element |
| `EXCLFR` | `logical` | — | True if element claimed from this extract. Only True for Primary elements |
| `EXCLHI` | `element(5000)` | — | Primary elements in descendant hierarchy claimed to this extract (includes this element) |
| `EXCLPA` | `logical` | — | True if element claimed to Parent extract. Only True for Primary elements |
| `EXCLTO` | `logical` | — | True if element claimed to this extract. Only True for Primary elements |
| `EXNCLH` | `element(5000)` | — | Primary elements in descendant hierarchy not claimed to this extract |
| `EXTRC` | `string(120)` | — | Name of extract claiming element |
| `LCLM` | `logical` | — | True if element is claimed |
| `LCLMH` | `logical` | — | True if element and hierarchy claimed |
| `NPDESC` | `element(5000)` | — | List of non primary offspring |
| `OKCLA` | `logical` | — | True if element may be claimed |
| `OKCLH` | `logical` | — | True if element and hierarchy may be claimed |
| `OKREL` | `logical` | — | True if element may be released |
| `OKRLH` | `logical` | — | True if element and hierarchy may be released |
| `PRIMTY` | `logical` | — | True if element is primary |
| `PRMMEM` | `logical` | — | True if there are any primary elements amongst descendants |
| `PRMOWN` | `element` | — | Primary owning element (will be itself if primary) |
| `USCLHI` | `element(5000)` | — | Elements in descendant hierarchy claimed to this user |
| `USERC` | `string(120)` | — | User name of user claiming element |
| `USNCLH` | `element(5000)` | — | Elements in descendant hierarchy not claimed to this user |


## Attribute Category: Clasher

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `CLCONN` | `element(5000)` | integer | Clasher connections |
| `HULLDE` | `logical` | — | True if element is a hull design item |
| `HULLPR` | `logical` | — | True if element is a hull production item |


## Attribute Category: Cross Section

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `XAMANG` | `real` | — | Cross section along mounting angle |
| `XFTPT` | `pos` | — | Cross section foot point |
| `XINCL` | `real` | — | Cross section inclination angle |
| `XTHK` | `real` | — | Cross section thickness |
| `XTPPT` | `pos` | — | Cross section top point |
| `XXMANG` | `real` | — | Cross section cross mounting angle |


## Attribute Category: Database

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DBAC` | `string` | — | DB Access, MULTIWRITE or UPDATE |
| `DBCL` | `string` | — | DB Claim |
| `DBCNTL` | `logical` | — | True if element is in a control DB |
| `DBEXNO` | `integer` | — | DB Extract Number |
| `DBFI` | `string` | — | DB filename |
| `DBFN` | `integer` | — | DB file number |
| `DBNA` | `string` | — | DB name |
| `DBNU` | `integer` | — | DB Number |
| `DBREF` | `element` | — | DB reference |
| `DBTE` | `string` | — | DB Text Encoding |
| `DBTY` | `word` | — | DB type (DESI, CATA etc) |
| `DBVAR` | `logical` | — | True if element is in a variant DB |
| `DBWRITE` | `logical` | — | True if element is in a writable DB |
| `OWNER` | `element` | — | Element owner in database hierarchy |
| `WDBNA` | `string` | — | Working DB name |


## Attribute Category: Database Integrity

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `UDETCHECK` | `string(120)` | — | Report from UDET check on element |


## Attribute Category: Data Model

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DLIST` | `word(2000)` | — | List of all possible dist att types |
| `HLIS` | `word(2000)` | — | List of all possible types in owning hierarchy |
| `LIST` | `word(2000)` | — | List of all possible member types |
| `LLIS` | `word(2000)` | — | List of all possible types in member hierarchy |
| `OLIS` | `word(2000)` | — | List of all possible owner types |
| `REPTXT` | `string` | — | Reporter text used for element type |


## Attribute Category: Database Structure

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ALLELE` | `element(10000)` | elemtype | All elements in the MDB of a particular type |
| `CONNECTIONS` | `element(5000)` | — | Connections |
| `CONNECTIONSH` | `element(5000)` | — | Connections for all descendants |
| `CONNER` | `string(300)` | integer | Connection error message |
| `DDEP` | `integer` | — | Database depth within hierarchy (World is 0) |
| `FRSTW` | `element` | word | Reference of first world of given DB type in current MDB |
| `GPPRXS` | `element(500)` | — | Group proxy items referring to element |
| `GROUPS` | `element(500)` | — | GPSETs in which element occurs |
| `MAXD` | `integer` | — | DB hierarchy depth of lowest level item beneath element |
| `MBACK` | `element(10000)` | elemtype | Members in reverse order |
| `MCOU` | `integer` | elemtype | Number of Element Members of Given type |
| `MEMB` | `element(10000)` | elemtype | All members, or members of specific type |
| `OWNLST` | `element(100)` | — | Owning hierarchy |
| `PARENT` | `element` | elemtype | Reference of ascendant element of specified type |
| `QUAN` | `integer` | — | Quantity (always one!) |
| `SEQU` | `integer` | — | Sequence Position in Member List |
| `SEXPND` | `element(10000)` | — | All descendant elements in secondary hierarchy |
| `SITEM` | `element` | — | Reference from secondary hierarchy |
| `SMEMB` | `element(10000)` | — | Immediate members in secondary hierarchy |


## Attribute Category: Datal Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DTLELE` | `element(5000)` | — | Datal Elements list |
| `DTLLIST` | `word(2000)` | — | Datal Attributes List |


## Attribute Category: Dataset Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `CDPL` | `word(100)` | — | List of valid current design properties |
| `CDPR` | `real` | word | Current design dataset property |
| `CFDP` | `element` | word | Current design dataset property |
| `DEPD` | `string(250)` | word | Default value of local design property |
| `DEPL` | `word(100)` | — | List of local design properties |
| `DEPR` | `string(250)` | word | Local design property value |
| `FDEPD` | `string(250)` | word | Formatted Local Design Property Default Value |
| `FDEPR` | `string(250)` | word | Formatted Local Design Property Value |
| `FPRDE` | `string(250)` | word | Formatted property default |
| `FPROP` | `string(250)` | word | Formatted property value from dataset |
| `FTCDD` | `string(250)` | word | Formatted Current Design Property Default Value |
| `FTCDP` | `string(250)` | word | Formatted Current Design Property Value |
| `LDPR` | `real` | word | Local design dataset property |
| `LFDP` | `element` | word | Local design dataset property |
| `PRDE` | `string(250)` | word | Property default |
| `PRLS` | `word(100)` | — | List of valid properties - catalogue or design |
| `PROP` | `string(250)` | word | Property value from catalogue or design dataset |
| `PRPU` | `word` | word | Property purpose |
| `PRTI` | `string(120)` | word | Property title |
| `RPRO` | `real` | word | Catalogue dataset property |
| `TCDD` | `string(250)` | word | Current design property default value |
| `TCDP` | `string(250)` | word | Current design property value |
| `TDPR` | `real` | word | Template design dataset property |
| `TFDP` | `element` | word | Template design dataset property |


## Attribute Category: Design Parameters

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ADESP` | `real(100)` | — | Design parameters of attached element |
| `DDESP` | `real(100)` | — | Design parameters as distance |
| `ODESP` | `real(100)` | — | Owning design parameters |
| `WDESP` | `word(100)` | — | Design parameters as words |


## Attribute Category: Design Point Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DDIR` | `dir` | — | Design PPoint spherical direction |
| `DPBO` | `real` | integer | Design point bore |
| `DPCO` | `word` | integer | Design point connection type |
| `DPCOU` | `integer` | — | Number of valid design points |
| `DPDI` | `dir` | integer | Design point direction |
| `DPGR` | `real` | integer | Design Point Gradient |
| `DPLS` | `integer(200)` | — | List of valid design points |
| `DPPS` | `pos` | integer | Design point position |
| `DPVI` | `integer(200)` | — | List of visible design points |


## Attribute Category: Draft Colour Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `BFCONU` | `integer` | — | Backface colour number |
| `CHCONU` | `integer` | — | Crosshairs colour number |
| `CLCONU` | `integer` | — | Centreline colour number |
| `COLCON` | `integer` | — | Column colour number |
| `DLCONU` | `integer` | — | Dimension line colour number |
| `DTCONU` | `integer` | — | Dimension text colour number |
| `FCONUM` | `integer` | — | Fill colour number |
| `FFCONU` | `integer` | — | Front-face colour number |
| `LFCONU` | `integer` | — | Label frame colour number |
| `LLCONU` | `integer` | — | Label leader colour number |
| `MCONUM` | `integer` | — | Marker colour number |
| `MLNCON` | `integer` | — | Member-line colour number |
| `NLCONU` | `integer` | — | Note colour number |
| `OBCONU` | `integer` | — | Obscured face colour number |
| `OLCONU` | `integer` | — | Outline colour number |
| `PLCONU` | `integer` | — | Projection line colour number |
| `PLNCON` | `integer` | — | Pline colour number |
| `PTCONU` | `integer` | — | Projection text colour number |
| `ROWCON` | `integer` | — | Row colour number |
| `TXCONU` | `integer` | — | Text colour number |


## Attribute Category: Draft Dimensions and Annotation

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `AKEYL` | `word(20)` | — | Attribute-keylist (for Radial dimensions) |
| `DDNMX` | `real` | — | DDNM X position |
| `DDNMXY` | `real(2)` | — | DDNM XY position |
| `DDNMY` | `real` | — | DDNM Y position |
| `DFONTN` | `string(80)` | — | Dimension text font name |
| `DIMPOS` | `pos` | — | Derived 3D dimension position |
| `DTLH` | `real` | — | Dimension text letter height |
| `EXBTEX` | `string(1500)` | — | Expanded annotation text |
| `EXDMTX` | `string(1500)` | — | Expanded dimension text |
| `EXPLTX` | `string(1500)` | — | Expanded projection line text |
| `FONTN` | `string(80)` | — | Font name |
| `LHEI` | `real` | — | Letter height |
| `PDEFI` | `string` | — | Primitive Definition |
| `PFONTN` | `string(80)` | — | Projection line text font name |
| `PRMVI` | `logical` | — | Draughting primitive visibility |
| `PTLH` | `real` | — | Projection text letter height |
| `SYSZ` | `real` | — | Symbol size (uniform scaling) |
| `VDPOS` | `pos` | — | Dimension line/arc position |


## Attribute Category: Draft Drawing and Sheet

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DREVAY` | `element(50)` | — | DRWG revisions array |
| `DRTITL` | `string(120)` | — | Drawing title |
| `NUMOFF` | `integer` | — | Number of Sheets in Drawing |
| `SHTNUM` | `integer` | — | Sheet Number |
| `SREVAY` | `element(50)` | — | Sheet revisions array |
| `STITL` | `string(120)` | — | Sheet title |


## Attribute Category: Draft Drawing View

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ELEVV` | `logical` | — | Is Elevation View |
| `PLANV` | `logical` | — | Is Plan View |
| `PSTAT` | `integer` | — | Plane status |
| `SVWAY` | `element(50)` | — | Sheet Views array |
| `VLIM` | `real(6)` | — | View limits |
| `VREG` | `real(4)` | — | View region |
| `VTITL` | `string(120)` | — | View title |
| `VVOL` | `real(6)` | — | View volume |


## Attribute Category: Draft Intelligent Text Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `PCODA` | `integer` | — | Precision code angles |
| `PCODF` | `integer` | — | Precision code fractions |
| `PCODI` | `integer` | — | Precision code imperial |
| `PCODM` | `integer` | — | Precision code metric |
| `UCODB` | `integer` | — | Units code bore |
| `UCODD` | `integer` | — | Units code distance |


## Attribute Category: Draft & Schematic Drawing-File Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DOFIL` | `string(73)` | — | Drawing Object filename |
| `DRFILE` | `string(73)` | — | Drawing File name |
| `DRFNUM` | `integer(11)` | — | Drawing file numbers |
| `DRFTYP` | `integer(11)` | — | Drawing File Types |
| `ISLOADED` | `logical` | — | True if Sheet is loaded |
| `ISPICF` | `logical` | — | Picture has File |
| `PICF` | `string(73)` | — | Picture filename |
| `PICHTY` | `word` | — | Hard type of picture |
| `PICSTY` | `word` | — | Soft type of picture |


## Attribute Category: Draft Style Related - Line/Fill/Marker

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `BFSTREF` | `element` | — | Backface linestyle Reference |
| `CHSTREF` | `element` | — | Crosshairs linestyle Reference |
| `CLSTREF` | `element` | — | Centreline linestyle Reference |
| `COLSTREF` | `element` | — | Column linestyle Reference |
| `DLSTREF` | `element` | — | Dimension linestyle Reference |
| `FFSTREF` | `element` | — | Front-face linestyle Reference |
| `FSTNUM` | `integer` | — | Fill style number |
| `FSTREF` | `element` | — | Fill style Reference |
| `HLSTREF` | `element` | — | Hatching linestyle Reference |
| `LFSTREF` | `element` | — | Label frame linestyle Reference |
| `LLSTREF` | `element` | — | Label leader linestyle Reference |
| `MLNSTREF` | `element` | — | Member-line linestyle Reference |
| `MSTREF` | `element` | — | Marker style Reference |
| `NLSTREF` | `element` | — | Note linestyle Reference |
| `OBSTREF` | `element` | — | Obscured face linestyle Reference |
| `OLSTREF` | `element` | — | Outline linestyle Reference |
| `PLNSTREF` | `element` | — | Pline linestyle Reference |
| `PLSTREF` | `element` | — | Projection linestyle Reference |
| `ROWSTREF` | `element` | — | Row linestyle Reference |


## Attribute Category: Element Type Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ACTTYPE` | `word` | — | Type of element, truncating non UDETs to 4 or 6 characters |
| `AHLIS` | `word(200)` | — | List of actual types in owning hierarchy |
| `FULLT` | `string` | — | Full type of the element |
| `FULSYS` | `string` | — | Type of the element, ignoring UDET, not truncated |
| `OSTYPE` | `word` | — | Short cut for "Type of owner" |
| `TYPE` | `word` | — | Type of the element, ignoring UDET, truncated to 4 or 6 characters |
| `TYSEQU` | `integer` | — | Type Sequence Number |


## Attribute Category: Extract Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `EXHCNC` | `element(5000)` | — | As EXTCNC, but repeat test for all descendants |
| `EXHCNN` | `element(5000)` | — | As EXTCNN, but repeat test for all descendants |
| `EXHCON` | `element(5000)` | — | As EXTCON, but repeat test for all descendants |
| `EXHRCN` | `element(5000)` | — | As EXRCN, but repeat test for all descendants |
| `EXHRCO` | `element(5000)` | — | As EXTRCO, but repeat test for all descendants |
| `EXMOC` | `logical` | — | As EXMOD but ignoring changes to "noclaim" attributes and member lists |
| `EXPMOC` | `logical` | — | As EXPMOD but ignoring changes to "noclaim" attributes and member lists |
| `EXPMOD` | `logical` | — | True if primary and element or non-primary descendants have been modified in this extract |
| `EXTCNC` | `element(5000)` | — | As EXTCON but excluding non modified elements |
| `EXTCNN` | `element(5000)` | — | As EXTCON but excluding modified elements |
| `EXTCON` | `element(5000)` | — | Primary elements connected/disconnected from element or non primary descendants in extract |
| `EXTRCN` | `element(5000)` | — | As EXTCNN, but applied recursively to each connection |
| `EXTRCO` | `element(5000)` | — | As EXTCON, but applied recursively to each connection |
| `OKDROP` | `logical` | — | True if element may be dropped |
| `OKRLEX` | `logical` | — | True if element may be extract released |


## Attribute Category: Global

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ADMLOC` | `element` | — | Currently administered location |
| `CURLOC` | `element` | — | True current location |
| `DBALL` | `element(8000)` | — | List of DBs allocated to location |
| `DBPR` | `element(8000)` | — | List of DBs Primary at location |
| `GLBSTR` | `logical` | — | True if Project has Global structure |
| `ISEXAP` | `logical` | — | True if extract ancestry is primary here |
| `ISEXCP` | `logical` | — | True if all extract children are primary here |
| `ISEXMP` | `logical` | — | True if extract master is primary here |
| `ISEXOP` | `logical` | — | True if extract owner is primary here |
| `ISPRIM` | `logical` | — | True if database is primary at this location |
| `LOCPR` | `element(1000)` | — | List of LOCs Primary at location |
| `PRIMDB` | `string` | — | Global status of DB, primary or secondary |
| `PRMLOC` | `element` | — | Primary location |


## Attribute Category: Hull

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `APARMS` | `real(9)` | — | All parameters |
| `ASREF` | `element` | — | Assembly reference |
| `ATWLEN` | `real` | — | Assembly total weld length |
| `BENT` | `logical` | — | Bent flag |
| `BEVEL` | `real` | — | Bevel |
| `BEVFLA` | `real` | — | Bevel code, flange |
| `BEVLFT` | `real` | — | Bevel code on left side of seam |
| `BEVM` | `real(2)` | — | Bevel codes along M1 and M2 curves |
| `BEVRGT` | `real` | — | Bevel code on right side of seam |
| `BEVTXT` | `string` | — | Bevel text |
| `BEVWEB` | `real` | — | Bevel code, web |
| `BLCKLM` | `logical` | — | True if block limit seam |
| `CLIPCD` | `integer` | — | Clip code |
| `CLOSED` | `logical` | — | True if plate covering entire referenced component |
| `CMALL` | `real` | — | Structure allowance |
| `CMBOUA` | `element` | — | Aft boundary |
| `CMBOUF` | `element` | — | Fwd boundary |
| `CMBOUL` | `element` | — | Lower boundary |
| `CMBOUP` | `element` | — | Ps boundary |
| `CMBOUS` | `element` | — | Stbd boundary |
| `CMBOUU` | `element` | — | Upper boundary |
| `CMBOX` | `real(6)` | — | Bounding box |
| `CMCAT` | `string(256)` | — | Compartment category |
| `CMCDE` | `real` | — | Content density |
| `CMCTID` | `string(256)` | — | Content type ID |
| `CMDESC` | `string(256)` | — | Compartment description |
| `CMFLW` | `real` | — | Full Load Weight |
| `CMLCV` | `real` | — | Longitudinal centre of total volume |
| `CMMGE` | `integer` | — | Merged compartment indicator |
| `CMPER` | `real` | — | Compartment permeability |
| `CMPERD` | `real` | — | Permeability for use in damage |
| `CMPURP` | `string(256)` | — | Purpose |
| `CMTCV` | `real` | — | Transverse centre of total volume |
| `CMTYP` | `integer` | — | Type of compartment |
| `CMVCV` | `real` | — | Vertical centre of total volume |
| `CMVOL` | `real` | — | Total volume |
| `CNTNUM` | `integer` | — | Contour number |
| `COMNT` | `string` | — | Comment |
| `CONAM` | `string` | — | Cutout name |
| `CONCD` | `integer` | — | Connection code |
| `CONDES` | `string` | — | Connection string |
| `CONTYP` | `string` | — | Connection type |
| `CORNUM` | `integer` | — | Corner number |
| `DATINT` | `integer(2)` | — | Date |
| `DEST` | `string(26)` | — | Destination |
| `DIST` | `real(2)` | — | Distances |
| `DISTM` | `real(2)` | — | Distances to M1 and M2 curves |
| `DSGNTN` | `string` | — | Designation |
| `DSTNCE` | `real` | — | Distance |
| `DTWTCL` | `string` | — | Date of weight/cog calculation |
| `EDPUV` | `pos` | — | End point |
| `EPARAM` | `real(6)` | — | Evaluated parameters |
| `EXCESS` | `real` | — | Excess |
| `EXCLFT` | `real` | — | Excess on left side of seam |
| `EXCRGT` | `real` | — | Excess on right side of seam |
| `EXCTLF` | `integer` | — | Excess type on left side of seam |
| `EXCTRG` | `integer` | — | Excess type on right side of seam |
| `EXTNSN` | `real` | — | Extension |
| `FLATYP` | `integer` | — | Flange type |
| `FNCCD` | `integer` | — | Functional description code |
| `FNCTXT` | `string(80)` | — | Functional description |
| `FOLDED` | `logical` | — | True if folded |
| `GENSTR` | `string` | — | General strings |
| `GPSTR` | `string` | — | General purpose strings |
| `GRIND` | `real` | — | Grinding info |
| `HGHT` | `real` | — | Height |
| `HLCOLO` | `string` | — | Hull Colour |
| `HULCNT` | `integer` | — | Size of hull array/ collection |
| `HULLOB` | `element` | — | Hull object reference |
| `HULOC` | `string` | — | Location |
| `HUMVW` | `string` | — | Model View |
| `HUREFL` | `logical` | — | Reflected |
| `HUREPL` | `element` | — | Replica |
| `HUSYMM` | `logical` | — | Symmetrical |
| `IDENT` | `string` | — | Panel identification string |
| `INCL` | `real` | — | Inclination angle |
| `INSTNC` | `string` | — | Bracket instance name |
| `ISECPT` | `pos` | — | Intersection point |
| `KNUANG` | `real` | — | Knuckle angle |
| `KNUCKL` | `logical` | — | True if knuckled |
| `LIMNUM` | `integer` | — | Order number of limit |
| `MACRID` | `string` | — | Clip macro ID |
| `MANBLK` | `string` | — | Name of owner block |
| `MANPAN` | `string` | — | Name of owner panel |
| `MANTRA` | `real(16)` | — | Transformation from local coordinate system |
| `MIRROR` | `logical` | — | True if mirrored in local v- axis |
| `MODREF` | `element` | — | Model reference |
| `MOULEN` | `real` | — | Mould length |
| `NOMARK` | `logical` | — | True if unmarked |
| `NOPGS` | `integer` | — | Number of openings |
| `NTRLEN` | `real` | — | Neutral length |
| `OBJCD` | `integer(2)` | — | Object codes |
| `OFFSET` | `real` | — | Offset |
| `OGDSTS` | `real(25)` | — | Distances to openings |
| `OUTFRF` | `element` | — | Reference of matching outfit object |
| `OVRSH` | `real` | — | Overshoot (d-measure) for unsymmetrical flange |
| `PANREF` | `element` | — | Panel reference |
| `PANSID` | `integer` | — | Side of panel |
| `PARAL` | `logical` | — | True if tap parallel to referred seam |
| `PARM` | `real(6)` | — | Parameters |
| `PARNAM` | `string(256)` | — | Part name |
| `PARREF` | `element(10)` | — | Part reference |
| `PLAREA` | `real` | — | Area |
| `PNTUV` | `pos` | — | Point2D |
| `PNTXYZ` | `pos` | — | Point3D |
| `POINUM` | `integer` | — | Point Num |
| `POSNO` | `integer` | — | Position number |
| `PRTIDL` | `string(132)` | — | Long part id |
| `PRTIDM` | `string(132)` | — | Module part id |
| `PRTIDS` | `string(132)` | — | Short part id |
| `PRTLST` | `string(26)` | — | Parts list name |
| `QUACD` | `integer` | — | Quality code |
| `QUATXT` | `string(26)` | — | Quality |
| `RAWPLA` | `element` | — | Raw Plate |
| `REFLCL` | `logical` | — | True if reflected in CL |
| `RSBOX` | `real(6)` | — | Bounding box of RSO |
| `RSFFD` | `integer` | — | Functional description on face |
| `RSFMC` | `integer` | — | Material code on face |
| `RSFMS` | `string(256)` | — | Material side on face |
| `RSFMT` | `real` | — | Material thickness on face |
| `RSFSA` | `logical` | — | Auto stiffening on face |
| `RSFSD` | `string(256)` | — | Profile dim on face |
| `RSFSS` | `string(256)` | — | Stiffener side on face |
| `RSFST` | `integer` | — | Profile type on face |
| `RSFWT` | `logical` | — | Watertight |
| `RSLBRA` | `string(256)` | — | Bracket instance at limit |
| `RSLELE` | `element` | — | Limiting element |
| `RSLPRE` | `integer` | — | Profile end definition at limit |
| `RSPAN` | `element(1000)` | — | Panel(s) defined on RSO |
| `RSPLN` | `integer` | — | Principal plane of RSO |
| `RSTYP` | `integer` | — | Type of RSO |
| `SCHEME` | `string` | — | Scheme name |
| `SDTINT` | `integer(2)` | — | Splitting date |
| `SDTTXT` | `string(22)` | — | Splitting date |
| `SHFALG` | `real` | — | Shrinkage factor along main direction |
| `SHFPRP` | `real` | — | Shrinkage factor perpendicular to main direction |
| `SHFSEA` | `real` | — | Shrinkage factor for seams perp. to main direction |
| `SHPUV` | `pos` | — | Point defining shrinkage |
| `SHVUV` | `dir` | — | Vector defining shrinkage |
| `SPECIF` | `logical` | — | True if outer panel contour on PS/SB are different |
| `SPLA` | `string` | — | Name of spigot plate |
| `SPPOSN` | `integer` | — | Position number of spigot plate |
| `STPUV` | `pos` | — | Start point |
| `STREAT` | `string(26)` | — | Surface treatment |
| `STRXPL` | `logical` | — | True if surface treatment explicitly defined |
| `SYMLNS` | `integer` | — | Side of direction vector |
| `SYMM` | `integer` | — | Symmetry code |
| `SYMXYZ` | `dir` | — | Vector along symmetry line |
| `TAGCD` | `integer` | — | Tag code |
| `TAGCDS` | `integer(25)` | — | Tag codes |
| `TAGNMS` | `integer(25)` | — | Tag numbers |
| `TAGNUM` | `integer` | — | Tag number |
| `TOTLEN` | `real` | — | Total length |
| `TPLFRR` | `element(10000)` | — | Topology references |
| `TWIST` | `logical` | — | True if twisted |
| `TWSTAN` | `real` | — | Twist angle |
| `TYPECD` | `integer` | — | Type code |
| `TYPECE` | `integer` | — | Type code |
| `WELDDP` | `real` | — | Welding depth |


## Attribute Category: Lexicon

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ISKEYDB` | `logical` | — | Does ukey incorporate DB number |
| `UDATLS` | `word(200)` | — | List of attributes for UDET |


## Attribute Category: Link Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `LNKCLS` | `element(500)` | — | Classes referencing a DocLink |
| `LNKDOC` | `element(500)` | — | DocLinks referring to element |
| `LNKELE` | `element(500)` | — | Elements referencing a DocLink |
| `LNKREF` | `element` | — | Reference internal document (drawing/ sheet) |
| `LNPRXS` | `element(500)` | — | Proxy items referring to element |
| `URL` | `string(1024)` | — | URL |


## Attribute Category: Local Name Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `LNAME` | `string(20)` | — | Local name as stored on template |
| `LNLST` | `string(2000)` | — | List of local names for current template |
| `RSEQFA` | `element(500)` | — | Rule sequence ref array for local names |
| `RSEQN` | `integer` | — | Sequence number for rule execution |


## Attribute Category: Mass Properties

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DNST` | `real` | — | Density |
| `GCOF` | `pos` | — | Gross centre of gravity |
| `GMOF` | `real(9)` | — | Gross moments of inertia |
| `GSRF` | `real` | — | Gross surface area |
| `GVOL` | `real` | — | Gross volume |
| `GWEI` | `real` | — | Gross weight |
| `HCOFG` | `pos` | — | computed item centre of gravity |
| `HSRFA` | `real` | — | Computed Hull item surface area |
| `HVOLU` | `real` | — | Computed Hull Item volume |
| `HWEIG` | `real` | — | computed analytic hull item weight |
| `MOFI` | `pos` | — | Moment of Inertia |
| `NCOF` | `pos` | — | Nett centre of gravity |
| `NMOF` | `real(9)` | — | Nett moments of inertia |
| `NSRF` | `real` | — | Nett surface area |
| `NVOL` | `real` | — | Nett volume |
| `NWEI` | `real` | — | Nett weight |
| `RCOF` | `pos` | — | Rough centre of gravity |
| `RMOF` | `real(9)` | — | Rough moments of inertia |
| `RSRF` | `real` | — | Rough surface area |
| `RVOL` | `real` | — | Rough gross volume |
| `RWEI` | `real` | — | Rough weight |


## Attribute Category: Mitred Bend

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ACTANG` | `real` | — | Actual angle of a bend |
| `ACTNCU` | `integer` | — | Actual number of cuts of a bend |
| `ACTRAD` | `real` | — | Actual radius of a bend |
| `BSCANG` | `real` | — | Bend Segment Cut Angle |
| `BSCLL` | `real` | — | Centre-Line Length of a miterd Bend Segment |
| `BSMNIL` | `real` | — | Minimum Length of Insulation of a miterd Bend Segment |
| `BSMNL` | `real` | — | Minimum Length of a miterd Bend Segment |
| `BSMXIL` | `real` | — | Maximum Length of Insulation of a miterd Bend Segment |
| `BSMXL` | `real` | — | Maximum Length of a miterd Bend Segment |
| `BVSCLL` | `real` | — | Centre-Line Length of a miterd Bend Segment |
| `BVSMNI` | `real` | — | Minimum Length of Insulation of a Virtual miterd Bend end-Segment |
| `BVSMNL` | `real` | — | Minimum Length of a virtual miterd Bend end- Segment |
| `BVSMXI` | `real` | — | Maximum Length of Insulation of a Virtual miterd Bend end-Segment |
| `BVSMXL` | `real` | — | Maximum Length of a virtual miterd Bend end- Segment |


## Attribute Category: Name Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `CUTNAM` | `string(700)` | integer | Full name of element, truncated to n characters |
| `CUTNMN` | `string(700)` | integer | Full name of element (without leading slash) truncated to n characters |
| `FLNM` | `string(700)` | — | Full name of the element |
| `FLNN` | `string(700)` | — | Full name of the element (without leading slash) |
| `ISNAMED` | `logical` | — | True if element is named |
| `NAMESQ` | `string(700)` | — | Type. sequence number and name of element |
| `NAMETY` | `string(700)` | — | Type and name of the element |
| `NAMN` | `string(500)` | — | Name of the element (without leading slash) |
| `NAMTYP` | `string(700)` | — | Type and full name of element |
| `RAWNAM` | `string(500)` | — | Name only |


## Attribute Category: Nuclear Applications

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `MATPURPOSE` | `word` | — | Material purpose |
| `NUCDNA` | `real` | — | Distance to nearest anchor |
| `NUCDNE` | `real` | — | Distance to the Nearest Edge |
| `NUCDNR` | `element(2)` | — | Nearest Adjacent Anchor |


## Attribute Category: Other Design

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `AVRAD` | `real` | — | Average radius for a CTOR or RTOR |
| `DOCREF` | `element` | — | Document reference |
| `DOCXRF` | `element(500)` | — | Return reference from Design element to DOCITM element |
| `NCONNE` | `integer` | — | Mismatched connections. that is no valid backpointer |


## Attribute Category: Piping

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ATLE` | `real` | — | Length of arrive implied tube |
| `CEND` | `string` | — | Connection at other end of CREF (HEAD or TAIL) |
| `FITLEN` | `real` | — | Length of branch fitting |
| `GRDE` | `real` | — | Gradient of implied tube. Gradient is the vertical rise(fall) divided by the horizontal distance. |
| `INTHK` | `real` | — | Insulation thickness |
| `ITLE` | `real` | — | Length of implied tube |
| `ITPS` | `pos` | — | Position of implied tube |
| `LTLE` | `real` | — | Length of leave implied tube |
| `MTBE` | `element` | — | Material tube start. The first component, excluding ATTSs, for whom the LOFF is invalid or false |
| `MTCL` | `real` | — | Material tube centreline length. |
| `MTEN` | `element` | — | Material tube end. The first component, excluding ATTSs, for whom the LOFF is invalid or false |
| `MTLE` | `real` | — | Material tube length for TUBI. Includes preceding bend length if bend is offline. |
| `MTOL` | `string(1000)` | — | Material List Length |
| `MTOQ` | `string(1000)` | — | Material take off quantity |
| `PCREF` | `integer(4)` | integer | Ppoint and ref of connected piping component |
| `POCK` | `word` | — | Is a branch component in a pocket |
| `ROBRRU` | `element(500)` | — | Router Rules applying to a piping element or members |
| `STAP` | `real` | — | Length of arrive straight tube |
| `STLE` | `real` | — | Length of leave straight tube |
| `TEXIST` | `logical` | — | True if component has TUBI. Always true for offline bends. |
| `TGEOM` | `logical` | — | True if component has TUBI geometry |


## Attribute Category: Pipe Piece

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `AELRFA` | `element(500)` | — | Boundary components for the PipePiece |
| `BELRFA` | `element(500)` | — | All components in the PipePiece |
| `BELTYP` | `integer(500)` | — | All component types in the PipeSpool |
| `CMPRFA` | `element(500)` | — | All components for the PipePiece |
| `MELRFA` | `element(500)` | — | All components (non- tube) in the PipePiece |
| `PCRFA` | `element(500)` | — | All spools that contain this element |
| `PPANFL` | `real` | — | Pipe Piece Angle between flanges |
| `PPAREF` | `element` | — | Pipe Piece Arrive Reference |
| `PPBRAD` | `real(500)` | — | Pipe piece bend radii |
| `PPBRAT` | `real(500)` | — | Pipe piece bend ratio |
| `PPCUTL` | `real` | — | Cut Length |
| `PPEFR` | `logical` | — | Leave flange required |
| `PPFINL` | `real` | — | Finished Length |
| `PPFMCV` | `logical` | — | Pipe piece fabrication machines verified |
| `PPLREF` | `element` | — | Pipe Piece Leave Reference |
| `PPRFA` | `element(500)` | — | All components in the PipePiece |
| `PPSFR` | `logical` | — | Arrive flange required |
| `PPSPEC` | `element` | — | Pipe Piece Specification |
| `PPVBMC` | `element` | — | Return the bending machine IF the pipe piece is verified |
| `PPVERI` | `word` | — | Pipe piece verified |
| `PPVWMC` | `element` | — | Return the welding machine IF the pipe piece is verified |
| `PSVLD` | `logical` | — | Pipespool valid |


## Attribute Category: Piping Specification

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ICAT` | `element` | — | Insulation catalogue reference |
| `IDET` | `element` | — | Insulation detail text reference |
| `IDRT` | `string(2000)` | — | Insulation detail RTEXT |
| `IDST` | `string(2000)` | — | Insulation detail STEXT |
| `IDTT` | `string(2000)` | — | Insulation detail TTEXT |
| `IMAT` | `element` | — | Insulation material text reference |
| `IMXT` | `string(2000)` | — | Insulation material XTEXT |
| `IMYT` | `string(2000)` | — | Insulation material YTEXT |
| `IMZT` | `string(2000)` | — | Insulation material ZTEXT |
| `ISPR` | `element` | — | Insulation specification component reference |
| `TCAT` | `element` | — | Trace catalogue reference |
| `TDET` | `element` | — | Trace detail text reference |
| `TDRT` | `string(2000)` | — | Trace detail RTEXT |
| `TDST` | `string(2000)` | — | Trace detail STEXT |
| `TDTT` | `string(2000)` | — | Trace detail TTEXT |
| `TMAT` | `element` | — | Trace material text reference |
| `TMXT` | `string(2000)` | — | Trace material XTEXT |
| `TMYT` | `string(2000)` | — | Trace material YTEXT |
| `TMZT` | `string(2000)` | — | Trace material ZTEXT |
| `TSPR` | `element` | — | Trace specification component reference |


## Attribute Category: Pline Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `PLCN` | `logical` | word | Pline centreline flag |
| `PLCO` | `word` | word | Pline connection |
| `PLDE` | `string(120)` | word | Pline description |
| `PLEN` | `pos` | word | Pline end |
| `PLENCU` | `pos` | word | Pline end, allowing for cutback |
| `PLLE` | `integer(2)` | word | Pline level |
| `PLLS` | `word(100)` | — | List of valid Plines |
| `PLNA` | `word(100)` | — | List of available Pline names |
| `PLOR` | `ori` | word | Pline orientation |
| `PLPU` | `word` | word | Pline purpose |
| `PLREFS` | `element(5000)` | — | Pline references |
| `PLST` | `pos` | word | Pline start |
| `PLSTCU` | `pos` | word | Pline start, allowing for cutback |
| `PLTU` | `logical` | word | Pline tube flag |
| `PLVI` | `word(200)` | — | List of visible Plines |
| `PLVIF` | `integer` | word | Pline visibility flag |


## Attribute Category: Positional

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `D` | `real` | — | Position downing |
| `DRPS` | `pos` | — | Derived position for steelwork |
| `E` | `real` | — | Position easting |
| `EASTING` | `pos` | — | Easting part expressed as a position |
| `EVOL` | `real(6)` | — | Enclosing box volume in given coordinates |
| `GRDAXE` | `string` | — | Grid axes |
| `GRDDIR` | `dir` | — | Grid direction |
| `GRDPOS` | `pos` | — | Grid Position |
| `N` | `real` | — | Position northing |
| `NORTHING` | `pos` | — | Northing part expressed as a position |
| `NPOSE` | `real` | — | Easting of position wrt owner |
| `NPOSN` | `real` | — | Northing of position wrt owner |
| `NPOSU` | `real` | — | Upping of position wrt owner |
| `ORI` | `ori` | — | Orientation |
| `ORIA` | `real(3)` | — | Orientation as angles |
| `POS` | `pos` | — | Position |
| `POSN` | `real` | — | Northing of position |
| `POSU` | `real` | — | Upping of position |
| `POSX` | `real` | — | Easting (X coordinate) of position |
| `S` | `real` | — | Position southing |
| `SHIPX` | `string(20)` | — | Ship X position |
| `SHIPY` | `string(20)` | — | Ship Y position |
| `SHIPZ` | `string(20)` | — | Ship Z position |
| `TRANS` | `real(12)` | — | transformation matrix |
| `U` | `real` | — | Position upping |
| `UPPING` | `pos` | — | Upping part expressed as a position |
| `W` | `real` | — | Position westing |
| `WORI` | `ori` | — | World orientation |
| `WORPOS` | `pos` | — | World position |
| `WTRANS` | `real(12)` | — | Transformation matrix to world |


## Attribute Category: PPoint Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `PCONDE` | `string(120)` | integer | Ppoint connection description |
| `PDIR` | `dir` | integer | Ppoint direction |
| `PGRD` | `real` | integer | Ppoint gradient |
| `POD` | `real` | integer | Ppoint outside diameter |
| `PPBO` | `real` | integer | Ppoint bore |
| `PPCO` | `word` | integer | Ppoint connection type |
| `PPCOU` | `integer` | — | Number of valid Ppoints |
| `PPDE` | `string(120)` | integer | Ppoint description |
| `PPEXST` | `logical` | integer | True if Ppoint exists |
| `PPLS` | `integer(200)` | — | List of valid Ppoints |
| `PPOS` | `pos` | integer | Ppoint position |
| `PPSK` | `word` | integer | Ppoint pskey |
| `PPUR` | `word` | integer | Ppoint purpose |
| `PPVI` | `integer(200)` | — | List of visible Ppoints |
| `PPVIF` | `integer` | integer | Ppoint visibility flag |
| `PSPIN` | `integer` | — | Ppoint number showing position of spindle |
| `PZDIR` | `dir` | integer | Ppoint alignment direction |


## Attribute Category: Presentation Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `ICOTYP` | `string(300)` | — | Icon used for element |


## Attribute Category: Project Copy

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `PCPIDV` | `word` | — | Enabled for project copy |
| `PCPSET` | `real` | — | Enabled for project copy |


## Attribute Category: Repeats Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `REPSEQ` | `integer` | — | Sequence no. for template repeat element |
| `TMRXREF` | `element(500)` | — | Return reference from TMRREL element to repeat elements |


## Attribute Category: Rules Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `DEPATT` | `word(2000)` | — | Attributes that a rule or catalogue parameterized expression is dependent upon |
| `NRULEE` | `integer` | — | Number of rule inconsistencies on element |
| `RCOU` | `integer` | — | Number of rules on element |
| `RULEER` | `string(300)` | integer | Text of "nth" rule error |
| `RULSET` | `word(2000)` | — | List of rules set |


## Attribute Category: Schematics

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `BRALNK` | `element(20)` | — | Connectivity SCBRAN- BRANCH Link |
| `CMPLNK` | `element` | — | Return reference from schematic or design element to CYMLNK element |
| `DESLNK` | `element(20)` | — | Connectivity Design Model Link |
| `DIAREF` | `element(500)` | — | Diagram reference array for schematic elements |
| `LLDIAGRAMS` | `string(2000)` | — | Line list diagrams |
| `LLENTRY` | `logical` | — | Is a line list entry - true or false |
| `LLFROM` | `string(2000)` | — | From column text for a line list |
| `LLTBRANCH` | `element` | — | Line list tail branch |
| `LLTO` | `string(2000)` | — | To column text for a line list |
| `NVIEWF` | `string(73)` | integer | Neutral viewer filename |
| `PAGE` | `integer(500)` | — | Page in diagram |
| `RESTAT` | `integer` | — | Release to 3D status |
| `SCBREF` | `element(50)` | — | Schematic element back reference |
| `SCEIRE` | `element(60)` | — | Enhanced instrument relationship |
| `SCELOR` | `element(20)` | — | Enhanced instrumentation loop reference array for schematic elements |
| `SCHELE` | `element` | — | Schematic head element |
| `SCHLNK` | `element` | — | Connectivity Schematic Link |
| `SCIERTYPE` | `word(60)` | — | Instrument enhanced reference type |
| `SCIIRE` | `element(50)` | — | Instrument to instrument reference |
| `SCIIRTYPE` | `word(50)` | — | Instrument to instrument reference type |
| `SCIPRE` | `element(50)` | — | Instrument process reference |
| `SCIPRTYPE` | `word(50)` | — | Instrument process reference type |
| `SCIREL` | `element(50)` | — | Instrument relationship |
| `SCIRLTYPE` | `word(50)` | — | Instrument relationship type |
| `SCTELE` | `element` | — | Schematic tail element |
| `STEREF` | `element(500)` | — | Stencil reference array for schematic elements |
| `VISF` | `string(73)` | — | Visio filename |


## Attribute Category: Space Management

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `SPMARA` | `real` | — | Area of face |
| `SPMBOX` | `real(6)` | — | Bounding box |
| `SPMCFA` | `real` | — | Floor area |
| `SPMCLI` | `word(2000)` | — | List of customer attributes for space |
| `SPMCOV` | `pos` | — | Centre of Volume |
| `SPMFAR` | `real` | — | Face area |
| `SPMFLW` | `real` | — | Full load weight |
| `SPMMVO` | `real` | — | Total (moulded) volume |
| `SPMNVO` | `real` | — | Net volume |
| `SPMSFP` | `element` | — | Returns the space that contains the given point |
| `SPMTYP` | `string(20)` | — | Type of space world as enumerated |
| `SPMARA` | `real` | — | Area of face |


## Attribute Category: Spatial

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `CSGBOX` | `real(6)` | — | CSG-Calculated box volume in world coordinates |
| `GTAREAS` | `element(5000)` | — | All areas that fully or partially enclose element |
| `GTEXAREAS` | `element(5000)` | — | All areas that fully enclose element |
| `LVOL` | `real(6)` | — | Enclosing box volume in local coordinates |
| `WVOL` | `real(6)` | — | Enclosing box volume in world coordinates |


## Attribute Category: SPOOLER

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `AWDOWN` | `integer(3)` | — | Table linking AWELD elements to piping components |
| `AWDREF` | `element(20)` | — | Return reference to AWELD element |
| `AWELDS` | `integer(20)` | — | Weld numbers of attached welds |
| `BOLTPARTNUMBERS` | `integer(20)` | — | Spooling bolt part numbers |
| `ITMTBL` | `integer(2000)` | — | Table linking AITEMS elements to piping components |
| `IWDORF` | `element(1500)` | — | Weld owners attribute on IWELD elements |
| `IWDOWN` | `integer(8)` | — | Table linking IWELD elements to piping components |
| `JNTORF` | `element(1500)` | — | Joint owners attribute on IJOINT elements |
| `JNTOWN` | `integer(8)` | — | Table linking IJOINT elements to piping components |
| `JNTREF` | `element` | integer | Return reference from Ppoint to ijoint element |
| `MTOPARTNUMBERS` | `integer(20)` | — | Additional spooling item part numbers |
| `PARTNUMBER` | `integer` | — | Part number of a spooled component or leave tube |
| `PBENDNUMBER` | `integer` | — | Spooling pulled bend number |
| `RWDOWN` | `integer(2)` | — | Table linking RWELD elements to design WELD elements |
| `RWDOWN` | `element` | — | Reference of associated WELD of RWELD element |
| `SFREF` | `element` | — | Return reference from piping component or leave tube to spool or field element |
| `SPLMEM` | `element(1500)` | — | Spooling table attribute on SPOOL or FIELD elements |
| `SPLPARENT` | `element(500)` | elemtype | Branches referenced by a SPLDRG, SPOOL or FIELD |
| `SPLTBL` | `integer(2000)` | — | Table linking SPOOL & FIELD elements to piping components |
| `SPLVOLUME` | `real(3)` | — | Volume of a SPOOL element |
| `SPOONUMBER` | `string(120)` | — | Spool number including spool prefix |
| `WBORE` | `real` | — | Bore on IWELD/RWELD |
| `WJPOS` | `pos` | — | Implied weld position |
| `WLDREF` | `element` | integer | Return reference from Ppoint or WELD to IWELD or RWELD element |
| `WSHOP` | `logical` | — | Weld shop/site flag on IWELD/RWELD |
| `WSPEC` | `element` | — | Weld specification on IWELD/RWELD |


## Attribute Category: Stairs

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `NOTREAD` | `integer(10)` | — | Number of treads |


## Attribute Category: Status Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `STVASD` | `element(500)` | — | Status types eligible |
| `STVCOM` | `string` | element | Status comment |
| `STVDSC` | `string` | element | Status description |
| `STVHCO` | `string` | element | Status held comment |
| `STVHOL` | `logical` | element | Current status held |
| `STVLNK` | `element` | element | Status value Reference |
| `STVLSK` | `element(500)` | — | Status Link Elements |
| `STVLST` | `element(500)` | — | Statuses assigned |
| `STVNAM` | `string` | element | Status value name |
| `STVNUM` | `integer` | element | Status value |
| `STVSUS` | `logical` | element | Current status held |
| `STVTRV` | `element(500)` | — | Valid Transitions |
| `STVUNR` | `element(500)` | — | Unresolved Status refs |
| `STVUSD` | `element(10000)` | — | Elements having this status value |
| `STVVAL` | `element` | element | Status value Reference |


## Attribute Category: Structural

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `AANGXZ` | `real` | — | Angle of attached SCTN in XZ plane of joint |
| `AANGYZ` | `real` | — | Angle of attached SCTN in YZ plane of joint |
| `ACTL` | `real` | — | Actual length |
| `ANPJ` | `pos` | — | Attached neutral point of joint (steelwork) |
| `ANPS` | `pos` | — | Attached neutral point of section (steelwork) |
| `BPANOR` | `ori` | — | Curved base panel orientation |
| `BPANRE` | `element` | — | Base panel reference |
| `CUTL` | `real` | — | Cut length |
| `DELPE` | `real` | — | Easting of D-Position in STRUC |
| `DELPN` | `real` | — | Northing of D-position in STRUC |
| `DELPU` | `real` | — | Upping of D-position in STRUC |
| `DISTFH` | `real` | — | Distance from head |
| `DISTFN` | `real` | — | Distance from next point |
| `DISTFP` | `real` | — | Distance from previous point |
| `DRNE` | `dir` | — | Plane normal at end of SCTN/GENSEC |
| `DRNS` | `dir` | — | Plane normal at start of SCTN/GENSEC |
| `ECCE` | `pos` | — | Eccentricity (steelwork) |
| `ECCJ` | `pos` | — | Eccentricity of joint (steelwork) |
| `HIERARCHY` | `element(5000)` | — | Structural connections |
| `HRJUSL` | `word` | — | Handrail Justification Line |
| `JUSL` | `word` | — | Justification Pline |
| `LENG` | `real` | — | Length |
| `LENSEG` | `real` | — | Length of segment |
| `LINKS` | `element(5000)` | — | Linked elements |
| `LOHE` | `real` | — | PLOOP height - from first PLOOP in owning panel |
| `MIDP` | `pos` | — | Section midpoint (steelwork) |
| `ONPJ` | `pos` | — | Owning neutral point of joint (steelwork) |
| `ONPS` | `pos` | — | Owning neutral point of section (steelwork) |
| `PALIG` | `real` | — | Panel alignment |
| `POSE` | `pos` | — | End point position |
| `POSEE` | `real` | — | Easting of end point position |
| `POSEU` | `real` | — | Upping of end point position |
| `POSEY` | `real` | — | Northing (Y coordinate) of end point position |
| `POSS` | `pos` | — | Start point position |
| `POSSE` | `real` | — | Easting of start point position |
| `POSSN` | `real` | — | Northing of start point position |
| `POSSU` | `real` | — | Upping of start point position |
| `PSIZE` | `real(2)` | — | Panel size |
| `RATTAL` | `element(500)` | word | Ratta list |
| `SLRAP` | `element(500)` | — | Sorted list of RATTA after POINTR |
| `SLRBP` | `element(500)` | — | Sorted list of RATTA before POINTR |
| `TCTL` | `real` | — | True cut length |
| `UBULG` | `real` | — | Used bulge factor for curve geometry |
| `UCURTYP` | `word` | — | Used curve type |
| `URADI` | `real` | — | Used radius for curve geometry |
| `YDIR` | `dir` | — | Preferred Y axis direction |
| `ZDIR` | `dir` | — | Additional axis direction |


## Attribute Category: Surface

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `SURNOR` | `dir` | pos, dir | Surface Normal |
| `SURPNT` | `pos` | pos, dir | Surface Point |


## Attribute Category: Surface Treatment

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `MYINSF` | `element` | — | Surface Treatment Reference |
| `MYOUSF` | `element` | — | Surface Treatment Reference |
| `MYSRFT` | `element` | word | Surface Treatment Reference |
| `PUINCD` | `string(120)` | — | Inside punch code |
| `PUOUCD` | `string(120)` | — | Outside punch code |
| `STINCD` | `string(120)` | — | Inside surface treatment symbol code |
| `STINRF` | `element` | — | Inside surface treatment reference |
| `STOUCD` | `string(120)` | — | Outside Surface treatment symbol code |
| `STOURF` | `element` | — | Outside surface treatment reference |


## Attribute Category: System Related

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `INSYST` | `element(500)` | — | Reference Array of all SYSGRPs Elements |
| `PRIMSY` | `element` | ™ | Reference of the primary system elements |
