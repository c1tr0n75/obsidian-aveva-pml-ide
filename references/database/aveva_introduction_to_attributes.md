# AVEVA Unified Engineering — Introduction to Attributes

## Introduction

All attributes can be queried and set by you. However, many are automatically set as a result of commands. Attributes fall into two categories:

1. **General attributes** — occur throughout the database; common to most elements (e.g. `OWNER`, `POS`, `ORI`, `BUILT`).
2. **Special attributes** — belong to particular elements or classes of elements (e.g. `FLOWD` in a Branch).

In addition to standard attributes, elements may have **user-defined attributes (UDAs)**, distinguished by a colon (`:`) prefix.

### Attribute Types

| Type | Description |
|------|-------------|
| **Name** | Starts with `/`, max 50 chars, parts separated by `/` |
| **Real** | Single real number (e.g. `25.5`, `-0.057`) — used for dimensions |
| **Integer** | Whole number — used for connection points, obstruction levels, etc. |
| **Reference** | Internal reference to another element (e.g. `=12/106`) |
| **Logical** | `TRUE` or `FALSE` |
| **Word** | String up to 4 characters (e.g. flow direction `FORW`, `BACK`) |
| **Text** | String up to 120 alphanumeric characters |
| **Real Array** | Multiple real numbers (e.g. `POS` = X, Y, Z coordinates) |
| **Integer Array** | Multiple integers |
| **Reference Array** | Multiple element references (e.g. `CRFA` for connection links) |
| **Text Array** | Multiple text strings of varying lengths |
| **Noclaim** | Can be modified without claiming the element — reduces contention |

---

## Attribute Listing (A–Y)


---


## Attribute A

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `AALLAN` | `real` | — | Arrive Ppoint allowed angle |
| `AANGXZ` | `real` | — | Angle of attached SCTN in XZ plane of joint |
| `AANGYZ` | `real` | — | Angle of attached SCTN in YZ plane of joint |
| `ABLE` | `integer` | — | Minimum abbreviation length for a UDA/UDET user defined name |
| `ABOP` | `pos` | — | Bottom of arrive pipe |
| `ABOR` | `real` | — | Arrive bore |
| `ABRE` | `string(8)` | — | Abbreviation |
| `ACBO` | `string(1000)` | — | Actual bore |
| `ACBTEX` | `string(500)` | — | AutoCAD annotation text |
| `ACBTYP` | `string(180)` | — | AutoCAD annotation type |
| `ACCDIR` | `dir` | Access Direction |  |
| `ACCELE` | `real(500)` | Elevations of Refer | enced Levels |
| `ACCESSDB` | `string(10)` | DB access |  |
| `ACCIDENT` | `real` | Accident level radi | ation |
| `ACCLEV` | `real(100)` | Access Heights for | Stairwell |
| `ACCREF` | `element` | Reference to Access | element |
| `ACCTYP` | `word` | Access type |  |
| `ACDATE` | `string(50)` | Date last modified | in AutoCAD |
| `ACDMTX` | `string(500)` | AutoCAD dimension t | ext |
| `ACDSTY` | `string(120)` | AutoCAD Dimension s | tyle |
| `ACDTYP` | `string(180)` | AutoCAD dimension t | ype |
| `ACDWT` | `string(120)` | AutoCAD drawing | template name |
| `ACEXPO` | `string` | AutoCAD export flag |  |
| `ACLASS` | `word(100)` | Access Control Attr | ibute class |
| `ACLAYE` | `string(120)` | AutoCAD layer name |  |
| `ACLIST` | `element(500)` | Arriving cables to | attached point |
| `ACLOCK` | `string` | AutoCAD picture loc | k |
| `ACNAME` | `string(120)` | AutoCAD name |  |
| `ACON` | `word` | Arrive connection t | ype |
| `ACORRO` | `real` | Arrive corrosion | allowance |
| `ACPICT` | `string` | Everything3D DRAW | picture |
| `ACPLTX` | `string(500)` | AutoCAD projection | line text |
| `ACPO` | `element` | Access port referen | ce |
| `ACPTYP` | `string(180)` | AutoCAD projection | line type |
| `ACRF` | `element` | ACR reference attri | bute |
| `ACRGRP` | `element(5000)` | List of ACRs within | a ACRSET |
| `ACRLI` | `element(300)` | Access Control User | assigned ACRs |
| `ACRMESSAGE` | `string(120)` | Access Control User | defined message |
| `ACSCAL` | `real` | AutoCAD picture sca | le factor |
| `ACSTYF` | `element` | Annotation change s | tyle reference |
| `ACTANG` | `real` | Actual angle of a b | end |
| `ACTIV` | `logical` | Active |  |
| `ACTL` | `real` | Actual length |  |
| `ACTNCU` | `integer` | Actual number of cu | ts of a bend |
| `ACTRAD` | `real` | Actual radius of a | bend |
| `ACTTYPE` | `word` | Type of element, | truncating non UDET or 6 characters |
| `ACTXRF` | `element` | Annotation Context | Reference |
| `ADDMHE` | `string(32)` | Detailing Bolt Set | Head- Side Addtl. Materia |
| `ADDMNU` | `string(32)` | Detailing Bolt Set | Nut-Side Addtl. Material |
| `ADDSEGMENTS` | `logical` | Auto creating segme | nts flag |
| `ADEFRF` | `element` | Reference to master | ASSDEF |
| `ADEG` | `real` | Orientation |  |
| `ADEN` | `real` | Addition factor (un | it definition) |
| `ADESP` | `real(100)` | Design parameters o | f attached element |
| `ADIR` | `dir` | Arrive direction |  |
| `ADMLOC` | `element` | Currently administe | red location |
| `ADPRFA` | `element(500)` | ADP reference array |  |
| `ADUUID` | `string(40)` | UUID to ensure Proj | ect uniqueness |
| `AELRFA` | `element(500)` | Boundary components | for the PipePiece |
| `AEXCES` | `real` | Arrive excess for l | eave tube |
| `AFPARA` | `real(100)` | Auxiliary function | parameters |
| `AFTEXT` | `string(400)` | Auxiliary function |  |
| `AGATYINT` | `integer` | Auto Grid Annotatio | n Type (ByVStyle, ViewFrame, Local) |
| `AGATYPE` | `string(120)` | Auto Grid Annotatio | n Type (as text) |
| `AGDCLINT` | `integer` | Auto Grid Annotatio | n Closed Dimensions (ByVStyle, Off, On) |
| `AGDCLOSED` | `string(120)` | Auto Grid Annotatio | n Closed Dimensions ( text) |
| `AGDMSTYLE` | `element` | Auto Grid Annotatio | n Dimension style ref |
| `AGDOFFSET` | `string(80)` | Auto Grid Annotatio | n Dimension Offset |
| `AGDOFREAL` | `real` | Auto Grid Annotatio | n Dimension Offset re |
| `AGDOOFFSET` | `string(80)` | Auto Grid Annotatio | n Overall Dimension O |
| `AGDOOREAL` | `real` | Auto Grid Annotatio | n Overall Dimension O real |
| `AGDOVINT` | `integer` | Auto Grid Annotatio | n Overall Dimensions (ByVStyle, Off, On) |
| `AGDOVR` | `string(120)` | Auto Grid Annotatio | n Overall Dimensions text) |
| `AGDVRT` | `string(120)` | Auto Grid Annotatio | n Vertical Dimensions text) |
| `AGDVTINT` | `integer` | Auto Grid Annotatio | n Vertical Dimensions Integer (ByVStyle, |
| `AGLESTYLE` | `element` | Auto Grid Annotatio | n Elevation Label sty reference |
| `AGLETM` | `element` | Auto Grid Annotatio | n Elevation Label Tem Reference |
| `AGLFSTYLE` | `element` | Auto Grid Annotatio | n Face Label style re |
| `AGLFTM` | `element` | Auto Grid Annotatio | n Face Label Template Reference |
| `AGLOFFSET` | `string(80)` | Auto Grid Annotatio | n Label offset |
| `AGLOFREAL` | `real` | Auto Grid Annotatio | n Label offset real |
| `AGMODE` | `string(120)` | Auto Grid Annotatio | n Mode (as text) |
| `AGMODINT` | `integer` | Auto Grid Annotatio | n Mode (ByVStyle Labels, Dimens |
| `AGRD` | `real` | Arrive Ppoint | gradient |
| `AGSIDE` | `string(120)` | Auto Grid Anno | tation Sides |
| `AGSIDINT` | `integer` | Auto Grid Anno | tation Sides Integer |
| `AHEIGHT` | `real` | Access height |  |
| `AHLIS` | `word(200)` | List of actual | types in owning hierarc |
| `AIRCHA` | `real` | Air Change Rat | e |
| `AIRT` | `string(120)` | Air tight cont | rol method |
| `AKEY` | `word` | Attribute key |  |
| `AKEYL` | `word(20)` | Attribute-keyl | ist (for Radial dimensi |
| `ALCODE` | `integer(10)` | Alarm code arr | ay |
| `ALENGTH` | `real` | Arrive length |  |
| `ALIGN` | `string` | Vertical align | ment |
| `ALIST` | `element(500)` | — |  |
| `ALLANG` | `string(1000)` | Connection all | owable rotational ang |
| `ALLELE` | `element(10000)` | elemtype    All elements i | n the MDB of a particula |
| `ALLO` | `real` | Allowance |  |
| `ALTDEF` | `element` | Alternative De | f |
| `ALWDEL` | `logical` | To allow the a | dmin user to determine i be deleted |
| `ALWDLG` | `boolean` | Allow delegati | on |
| `ALWREN` | `logical` | Allow Rename |  |
| `ALWUSE` | `logical` | Indicates whet | her or not catalog can be used project |
| `AMAPNM` | `string(120)` | Local Name of Proxy | actual member |
| `AMEMRF` | `element` | Reference to a desi | gn model object |
| `AMPMPN` | `string(120)` | Local Name of Proxy | in Association |
| `AMTEMP` | `real` | Ampacity Temperatur | e |
| `ANGFR` | `real` | Angle between assem | bly and frame plane |
| `ANGL` | `real` | Angle |  |
| `ANGLSP` | `real(10000)` | ANGLE Spacing |  |
| `ANGSEG` | `real(2)` | Angle segment (star | t,end) |
| `ANGSPA` | `real` | Springback angle at | 20 degrees |
| `ANGSPB` | `real` | Springback angle at | 120 degrees |
| `ANGWL` | `real` | Angle between assem | bly and water-line plan |
| `ANPJ` | `pos` | Attached neutral po | int of joint (steelwork) |
| `ANPS` | `pos` | Attached neutral po | int of section (steelwork) |
| `ANSTYP` | `word` | Type of answer NONE | , REAL, WORD, TEXT or BOOL |
| `ANSW` | `real` | Answer, when a real | is expected |
| `ANTY` | `string(120)` | Analysis type |  |
| `ANYCHA` | `logical` | True if chamfer is | defined on any edge |
| `AOBJS` | `element(500)` | Reference Array of | all Model currently participating in AS |
| `AOD` | `real` | Arrive Ppoint outsi | de diameter |
| `AOFCEL` | `integer` | Number of connected | elements |
| `APAR` | `real(100)` | Attached catalog | parameters |
| `APARMS` | `real(9)` | All parameters |  |
| `APDT` | `string(12)` | Date of approval |  |
| `APOF` | `real(2)` | Leaderline attachme | nt point |
| `APOFTX` | `string(80)` | Leaderline attachme | nt point text |
| `APOS` | `pos` | Arrive position |  |
| `APOSE` | `real` | Easting of arrive p | osition |
| `APOSN` | `real` | Northing of arrive | position |
| `APOSU` | `real` | Upping of arrive po | sition |
| `APPL` | `string(20)` | Application |  |
| `APPR` | `string(1000)` | Approver |  |
| `APRO` | `real` | Spot value of prope | rty A |
| `APTDAT` | `real(5)` | Annotation Point 2D | Data |
| `AQAANG` | `real` | Angle between align | ment direction of arrive previous |
| `AQANG` | `real` | Angle between arriv | e Ppoint and previous component |
| `AQBORE` | `logical` | TRUE if arrive Ppoi | nt has same bore as previo |
| `AQCON` | `logical` | TRUE if arrive Ppoi | nt has Correct connection |
| `AQOFF` | `real` | Offset between arri | ve Ppoint and previous component |
| `ARCDAT` | `blob(2147483647)` | Archive Binary Data |  |
| `AREA` | `integer` | Area |  |
| `AREAEX` | `logical` | True if area exists | for DB |
| `AREARE` | `element` | Area reference |  |
| `ARMMTL` | `element` | Armour material |  |
| `ARMRED` | `logical` | Indicating whether | CABD is armoured |
| `ARNO` | `integer` | Picture directory a | rea number |
| `ARRHEI` | `real` | Arrive height |  |
| `ARRI` | `integer` | Arrive Ppoint |  |
| `ARRSHA` | `word` | Arrive PPoint Conne | ction shape |
| `ARRWID` | `real` | Arrive width |  |
| `ASBPAN` | `element` | Assembly base panel | reference |
| `ASBUIL` | `string(1000)` | Assembly build stra | tegy |
| `ASCODE` | `string` | Anno selection code |  |
| `ASDEST` | `string(120)` | Assembly destinatio | n |
| `ASDIM` | `real(3)` | Assembly dimension |  |
| `ASECOG` | `real(3)` | Assembly estimated | center of gravity |
| `ASEWEI` | `real` | Assembly estimated | weight |
| `ASFBR` | `logical` | Spooling marker for | arrive tube |
| `ASIOWN` | `element(500)` | Assembly item refer | ring to element |
| `ASIQUA` | `integer` | Assembly item quant | ity |
| `ASLSBSTANDARD` | `element` | ASL Substandard | Reference |
| `ASLSTANDARD` | `element` | ASL Standard Refere | nce |
| `ASMBLB` | `logical` | True if element is | possible to assemble |
| `ASMBLD` | `logical` | True if element is | assembled |
| `ASMBLR` | `element` | Assembly reference |  |
| `ASMBLS` | `string` | A for assembled | elements, NA for no assembled elements |
| `ASMBLX` | `string(120)` | Assembly reference | as text |
| `ASMBS` | `element(500)` | Reference Array of | all association members using element |
| `ASMOWN` | `element(500)` | Assembly referring | to element |
| `ASNAME` | `string(50)` | Local assembly name |  |
| `ASNORM` | `dir` | Assembly normal |  |
| `ASORI` | `integer` | Predefined assembly | orientation |
| `ASORIS` | `string(20)` | Predefined assembly | orientation string |
| `ASPART` | `logical` | True if assembly pa | rt. |
| `ASPLNO` | `integer` | Number of assembly | plate parts |
| `ASPRNO` | `integer` | Number of profiles | on assembly part |
| `ASPWLE` | `real` | Total length of wel | d in assembly part |
| `ASREF` | `element` | Assembly reference |  |
| `ASRF` | `element` | ADP annotation sym | bol library ref |
| `ASSCIA` | `element(500)` | Reference Array of | all associate elements with constraints |
| `ASSDFS` | `element(500)` | Reference Array of | all ASSDEFs |
| `ASSEQ` | `integer` | Assembly sequence |  |
| `ASSNST` | `element` | Assembly Nest |  |
| `ASSOS` | `element(500)` | Reference Array of | all associations with constraints |
| `ASSTAR` | `element` | Association Target | Reference |
| `ASSTMPREFERENCE` | `element` | Assembly Template | Reference |
| `ASTAB` | `word(15)` | ADP association ta | ble |
| `ASTEXT` | `string(500)` | attr    Attribute value as | text |
| `ASTMBS` | `element(500)` | Reference Array of | all association member targeting element |
| `ASUB` | `real` | Angle subtended |  |
| `ASVDIR` | `dir` | Assembly view dire | ction |
| `ASWLOC` | `string(120)` | Assembly working | location |
| `ATCLL` | `real` | Centerline length | of arrive implied tube |
| `ATCONN` | `element(500)` | List of elements | connected to attac |
| `ATCORR` | `real` | Arrive tube corros | ion allowance |
| `ATEX` | `string(1000)` | Label Text |  |
| `ATLE` | `real` | Length of arrive i | mplied tube |
| `ATLS` | `word(50)` | Access type lis | t |
| `ATNA` | `word` | Attribute name |  |
| `ATOL` | `integer` | Arc tolerance |  |
| `ATOP` | `pos` | Top of arrive p | ipe |
| `ATQUALIFIER` | `string(1000)` | Attribute quali | fier |
| `ATSTLEN` | `real` | Arrive Tube Sto | ck Length |
| `ATTC` | `word` | Attached connec | tion type |
| `ATTDST` | `word(2000)` | List the distri | buted attributes, def udas |
| `ATTLIST` | `word(2000)` | List of all att | ributes for element |
| `ATTMOD` | `logical` | attr       True if specifi | ed attribute has been modifi session |
| `ATTMODC` | `logical` | attr       True if specifi | ed attribute has been modifi comparison date |
| `ATTMODLIST` | `word(500)` | integer    List of attribu | tes modified since given ses |
| `ATTMODLISTC` | `word(500)` | List of attribu | tes modified since compariso |
| `ATTNAM` | `string(32)` | Attribute Name | expression for elements |
| `ATTOUT` | `word(2000)` | List of all att | ributes excluding hidde as output in "Q |
| `ATTRAW` | `word(2000)` | List of raw att | ributes |
| `ATTRUL` | `string(1000)` | Attribute Rule | expression for ATTRRL elem |
| `ATTSET` | `word` | Set attribute w | ith result |
| `ATTSIZE` | `integer` | attr       Actual size of | attribute |
| `ATTY` | `word` | Attachment type |  |
| `ATWALL` | `real` | Arrive tube wall th | ickness |
| `ATWLEN` | `real` | Assembly total weld | length |
| `ATWREF` | `element` | Arrive tube wall th | ickness reference |
| `AUTCOL` | `real(3)` | Design rgb autocolo | r |
| `AUTCRE` | `logical` | Set true to automat | ically create the element. |
| `AUTH` | `string(1000)` | Author |  |
| `AUXPOS` | `real(2)` | Auxiliary function | definition point |
| `AVBITY` | `string(25)` | Availablity of mate | rial instance |
| `AVRAD` | `real` | Average radius for | a CTOR or RTOR |
| `AWALLT` | `real` | Arrive wall thickne | ss |
| `AWDARR` | `logical` | Auto weld arrive fl | ange |
| `AWDFLN` | `logical` | Bending machine acc | epts autowelded flanges |
| `AWDLEV` | `logical` | Auto weld leave fla | nge |
| `AWDORF` | `element(1500)` | Weld owners attribu | te on AWELD elements |
| `AWDOWN` | `integer(3)` | Table linking AWELD | elements to piping components |
| `AWDREF` | `element(20)` | Return reference to | AWELD element |
| `AWELDS` | `integer(20)` | Weld numbers of | attached welds |
| `AWQEX` | `logical` | Allow Quality Excha | nge |
| `AWTHEX` | `logical` | Allow Thickness Exc | hange |
| `AXIDIR` | `dir` | Axis directio | n applied to repeat |
| `AXIPOS` | `pos` | Axis position | applied to repeat |
| `AXISID` | `string(20)` | Axis ID |  |
| `AXISLA` | `string(20)` | Axis Label |  |
| `AXSPRI` | `logical` | Is principle | Axes Symbol |
| `AXSSIZ` | `real` | AXESYM nomina | l size |
| `AXSTYP` | `word` | Axes Symbol t | ype |
| `AYDIR` | `dir` | Arrive Y axis | direction |
| `AZDIR` | `dir` | Arrive alignm | ent direction |
| `AZID` | `real` | Default Azimu | th value |
| `AZIF` | `real` | Azimuth attra | ctor factor |
| `AZIL` | `real(2)` | Azimuth limit | s (Min/Max) |
| `AZIS` | `logical` | Azimuth set f | lag - ignore Azimuth value |


## Attribute B

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `BACKRE` | `element(1000)` | attr | List reftable back references |
| `BAEXSS` | `real` | — | Bending Excess Arrive |
| `BAIN` | `string` | — | Before/After indicator |
| `BANG` | `real` | — | Beta angle |
| `BASELF` | `element` | — | Reference of Baseline Element |
| `BASETYPE` | `word` | — | Base type for the user- defined element type |
| `BASNAME` | `string(50)` | — | Base Name for the Project Definition |
| `BBFF` | `element(500)` | Array | of bounding Bounda |
| `BCPY` | `element` | Backwa | rd copy reference |
| `BDIA` | `string(1000)` | Bolt d | iameter |
| `BDTUL` | `logical` | Boolea | n dimension text underl |
| `BEAD` | `real` | Defaul | t Bearing value |
| `BEAF` | `real` | Bearin | g attractor factor |
| `BEAL` | `real(2)` | Bearin | g limits (Min/Max) |
| `BEALAM` | `string(12)` | Name o | f the bead lamina |
| `BEAPOS` | `integer` | Bead p | osno |
| `BEAQUA` | `string(26)` | Bead q | uality |
| `BEAS` | `logical` | Bearin | g set flag - ignore Bearin |
| `BEAWTH` | `real` | Bead w | idth |
| `BELRFA` | `element(500)` | All co | mponents in the PipePi |
| `BELTYP` | `integer(500)` | All co | mponent types in the Pi |
| `BENANG` | `real` | Bendin | g angle |
| `BENDCORNERS` | `logical` | Bend c | orners - true if fillet should corner |
| `BENDIR` | `word` | Bendin | g machine direct |
| `BENDMACREFERENCE` | `element` | Bendin | g Machine refere |
| `BENDMC` | `element` | Bendin | g Machine Refere |
| `BENMLF` | `real` | Minimu | m length for the first |
| `BENMLL` | `real` | Minimu | m length for the last s |
| `BENPIF` | `real` | Maximu | m tube insertion length flange |
| `BENPIL` | `real` | Maximu | m tube insertion length collar |
| `BENPIP` | `real` | Maximu | m tube insertion length |
| `BENPIR` | `real` | Bend r | adius (not ratio) |
| `BENROT` | `word` | Bendin | g machine rotation |
| `BENT` | `logical` | Bent f | lag |
| `BEVCOD` | `real(10)` | Bevel | codes for edges |
| `BEVDFR` | `element` | Refere | nce to Bevel Defini |
| `BEVEL` | `real` | Bevel |  |
| `BEVFLA` | `real` | Bevel | code, flange |
| `BEVLEN` | `real(2)` | Length | s of bevel |
| `BEVLFT` | `real` | Bevel | code on left side of seam |
| `BEVLI` | `real(3)` | Length | s of I-bevel |
| `BEVLV` | `real` | Length | of vertical bevel |
| `BEVLX` | `real(3)` | Length | s of X-bevel |
| `BEVLY` | `real(3)` | Length | s of Y-bevel |
| `BEVM` | `real(2)` | Bevel | codes along M1 and M2 cur |
| `BEVPAR` | `real(50)` | Bevell | ing Parameters |
| `BEVPAT` | `real(10)` | Bevell | ing Tool Parameters |
| `BEVRGT` | `real` | Bevel | code on right side of sea |
| `BEVROF` | `logical` | Be | vel Root Face |
| `BEVTAP` | `logical` | Be | vel Tapering |
| `BEVTXT` | `string` | Be | vel text |
| `BEVTYP` | `integer` | Be | vel Type Number |
| `BEVWEB` | `real` | Be | vel code, web |
| `BFCOLO` | `integer` | Ba | ckface color |
| `BFCONU` | `integer` | Ba | ckface color number |
| `BFCRGB` | `integer(4)` | RG | B backface color |
| `BFCRGP` | `integer(4)` | RG | B backface color ph |
| `BFLE` | `string(1000)` | Ou | t of plane flexibility fa |
| `BFOBCO` | `integer` | Ba | ckface and Obscured fa |
| `BFOBST` | `integer` | Ba | ckface and Obscured fa |
| `BFORI` | `ori` | Be | nt Feature Orientation |
| `BFPN` | `integer` | Ba | ckface pen |
| `BFRF` | `element` | Re | ference to real Bo |
| `BFSTREF` | `element` | Ba | ckface linestyle Re |
| `BFSTYL` | `integer` | Ba | ckface linestyle |
| `BGTDIA` | `real` | integer    Bo | lt diameter |
| `BGTLEN` | `real` | integer    Bo | lt length |
| `BGTNOF` | `integer` | integer    Nu | mber of Bolts |
| `BGTSPC` | `element` | integer    Ge | t SPCO of the the bolt |
| `BGTTXT` | `string(256)` | integer    Ge | t TEXT of the bolt |
| `BGTWEI` | `real` | integer    Bo | lt weight |
| `BITE` | `word(25)` | Bo | lt items |
| `BITL` | `real(25)` | Bolt i | tem lengths |
| `BJOINT` | `string` | Bolt j | oint |
| `BKEY` | `string(4)` | DRAFT | user defined base symbol |
| `BLCKLM` | `logical` | True i | f block limit seam |
| `BLDREF` | `element(100)` | Revisi | on Block Array |
| `BLEN` | `real(200)` | Bolt l | ength |
| `BLEXSS` | `real` | Bendin | g Leave Excess |
| `BLNK` | `logical` | Auto-b | lanking flag |
| `BLRF` | `element(10)` | Bolt r | eference array |
| `BLSLEN` | `real` | Length | of blasting contou |
| `BLTM` | `string(3)` | Bolt m | ethod |
| `BLTR` | `element` | Bolt r | eference |
| `BLTW` | `real` | Standa | rd Bolt weight |
| `BMAR` | `real` | Auto-b | lanking margin |
| `BMAX` | `integer` | Maximu | m bend number in cur |
| `BMCLOC` | `logical` | True i | f bending machine bends |
| `BMLEVE` | `real(100)` | Beam l | evels from owning elemen |
| `BNDARE` | `real` | Bounda | ry line area |
| `BNDOFF` | `real` | Offset | from boundary |
| `BNLENI` | `real` | Length | of vertical bevel |
| `BNLENV` | `real` | Length | of V-Bevel |
| `BNLENX` | `real` | Length | of X-Bevel |
| `BNLENY` | `real` | Length | of Y-Bevel |
| `BOCOLO` | `integer` | Backfa | ce and Obscured face c |
| `BOCONU` | `integer` | Obscur | ed Backface color number |
| `BOCRGB` | `integer(4)` | Backfa | ceObscured RGB color |
| `BOCRGP` | `integer(4)` | Backfa | ceObscured RGB color |
| `BOLTPARTNUMBERS` | `integer(20)` | Spooli | ng bolt part number |
| `BOLTYP` | `integer` | Bolt T | ype Number |
| `BORE` | `real` | Bore |  |
| `BOREAR` | `real(10)` | Bore a | rray |
| `BOSTYL` | `integer` | Backfa | ce and Obscured face S |
| `BOTCUT` | `real` | Bottom | Stile Cut Distance |
| `BOTHEI` | `real` | Bottom | height |
| `BOTSTR` | `real` | BOTT S | tringer Gap |
| `BPANNR` | `dir` | Curved | base panel normal |
| `BPANOR` | `ori` | Curved | base panel orient |
| `BPANRE` | `element` | Base p | anel reference |
| `BPOF` | `real(4)` | Leader | bend point offset |
| `BPOFTX` | `string(80)` | Leader | bend point offset text |
| `BPRO` | `real` | Spot v | alue of property B |
| `BPTYPE` | `integer` | Basic | Profile Type |
| `BRACKE` | `string` | Bracke | ts code |
| `BRAD` | `real` | Bend r | adius |
| `BRALNK` | `element(20)` | Connec | tivity SCBRAN- BRANCH |
| `BRANBO` | `real(200)` | Array | of branch bore exclud |
| `BRANDI` | `stringarray(200)` | Array | of branch bore direct arrive |
| `BRARLN` | `real` | Bracke | t arm length |
| `BRARLT` | `real(10)` | Bracke | t arm lengths |
| `BRCOG` | `pos` | Branch | center of gravity |
| `BRCONNECT` | `element(5000)` | Branch | member connec |
| `BREARE` | `real` | Branch | external surface area |
| `BREF` | `element` | Branch | Reference |
| `BRIARE` | `real` | Branch | internal surface area |
| `BRICOG` | `pos` | Branch | insulated center of gravit |
| `BRIRAD` | `real` | Bridge | radius |
| `BRIWEI` | `real` | Branch | insulated weight |
| `BRLEG` | `element(5000)` | Branch | members on the same l |
| `BRLIST` | `real(500)` | Bend r | adii of a cable |
| `BRLO` | `integer` | Branch | Positioning Status code ( |
| `BRNCOM` | `string(320)` | Burner | comment |
| `BRNFAC` | `real` | Burnin | g factor |
| `BRNGSP` | `real` | Bottom | Rung Spacing |
| `BRNLEN` | `real` | Length | of burning contou |
| `BRNNAM` | `string(26)` | Burner | name |
| `BRNNUM` | `integer` | Burner | number |
| `BRNPRC` | `string(26)` | Burner | process name |
| `BRNREF` | `string(26)` | Burner | reference id |
| `BRNSEQ` | `string(26)` | Burnin | g sequence number |
| `BRNST` | `integer` | Number | of starts for burnin |
| `BRNTOO` | `integer` | Burner | tool |
| `BRNTYP` | `string(26)` | Burner | type |
| `BRPOSA` | `real(2)` | First | bridge definition point |
| `BRPOSB` | `real(2)` | Second | bridge definition point |
| `BRPOSS` | `real(2)` | Bridge | definition side point |
| `BRREF` | `element` | Branch | table reference |
| `BRREFA` | `element` | Nested | part reference |
| `BRREFB` | `element` | Nested | part reference |
| `BRTXRF` | `element(500)` | Return | reference from Branch SPECs |
| `BRTYP` | `integer` | Bridge | type |
| `BRWCOG` | `pos` | Branch | wet center of gravit |
| `BRWEIG` | `real` | Branch | weight |
| `BRWICOG` | `pos` | Branch | wet insulated center |
| `BRWIWEI` | `real` | Branch | insulated wet weight |
| `BRWWEI` | `real` | Branch | wet weight |
| `BSCANG` | `real` | Bend S | egment Cut Angle |
| `BSCLL` | `real` | Center | line Length of a mitred |
| `BSDWG` | `string(120)` | AutoCA | D backing sheet name |
| `BSEL` | `string(3)` | Bolt S | elector |
| `BSFN` | `string(1024)` | Backin | g sheet filename |
| `BSLAYE` | `string(120)` | AutoCA | D backing sheet layer |
| `BSMNIL` | `real` | Minimu | m Length of Insula Bend S |
| `BSMNL` | `real` | Minimu | m Length of a mitred |
| `BSMXIL` | `real` | Maximu | m Length of Insula Bend S |
| `BSMXL` | `real` | Maximu | m Length of a mitred |
| `BSPE` | `element` | Bolt s | pecification |
| `BSRF` | `element` | Backin | g sheet reference |
| `BSRFA` | `element(500)` | ADP ba | cking sheet list |
| `BSTA` | `integer` | Branch | Status code (Route |
| `BTEX` | `string(1000)` | Annota | tion text string |
| `BTHK` | `string(1000)` | Parame | terized bolt thickn |
| `BTLS` | `word(50)` | Bounda | ry Former type list |
| `BTOL` | `string(1000)` | Bore t | olerance |
| `BTOTAL` | `integer` | Bolt j | oint total |
| `BTOTWE` | `real` | Bolt t | otal weight |
| `BTYP` | `string(1000)` | Bolt t | ype |
| `BUFS` | `integer` | Prefer | red buffer size |
| `BUIL` | `logical` | Built/ | Unbuilt flag |
| `BULG` | `real` | Bulge | factor |
| `BUNI` | `word` | Bore u | nits |
| `BUNREF` | `element` | — | Cable bundle reference |
| `BURF` | `element` | — | Reference to real Building Element |
| `BURNID` | `string(80)` | — | Burner id |
| `BUYMRK` | `string(26)` | — | Buying mark |
| `BVCODN` | `integer` | — | Bevelled Code number |
| `BVIS` | `logical` | — | Bottom visibility flag |
| `BVSCLL` | `real` | — | Centerline Length of a mitred Bend Segment |
| `BVSEGN` | `integer` | — | Bevelled segment number |
| `BVSMNI` | `real` | — | Minimum Length of Insulation of a Virtual mitred Bend end-Segment |
| `BVSMNL` | `real` | — | Minimum Length of a virtual mitred Bend end- Segment |
| `BVSMXI` | `real` | — | Maximum Length of Insulation of a Virtual mitred Bend end-Segment |
| `BVSMXL` | `real` | — | Maximum Length of a virtual mitred Bend end- Segment |
| `BWEI` | `real(200)` | — | Bolt weight |
| `BWIDTH` | `real` | — | Bridge width |
| `BWITHF` | `logical` | — | Bend with flow |


## Attribute C

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `CABBOX` | `real(6)` | — | Calculated box volume in world coordinates |
| `CABCOL` | `string(120)` | — | Cable color |
| `CABGAP` | `real` | ca | ble gap on cabletray as mu |
| `CABINT` | `string(120)` | ca | ble interference class |
| `CAGOFF` | `real` | Ca | ge Offset |
| `CAGSIZ` | `real` | Ca | ge Size |
| `CANCOP` | `logical` | Co | ntrol of UDA copy th |
| `CANDRM` | `logical` | Ca | n drum |
| `CAPTIO` | `string(120)` | Ca | ption |
| `CARD` | `integer(2)` | Ca | rdinality definition |
| `CARE` | `string(12)` | Is | odraft Compipe: Area |
| `CASELIST` | `stringarray(100)` | attr       Li | st of cases set for a UDA |
| `CASENAME` | `string(120)` | Ca | se Name |
| `CASENM` | `string(120)` | Ca | se Name |
| `CASR` | `element` | Ca | se reference |
| `CATANO` | `string(120)` | Te | xt storing unique di |
| `CATMOD` | `integer` | Ca | talog Geometry Mo qu |
| `CATR` | `element` | Ca | talog reference |
| `CATTEX` | `string(725)` | Co | ncatenation of De Te |
| `CATUSR` | `element` | Ca | tegory owner |
| `CATY` | `integer` | Ca | rd type |
| `CAXISE` | `string` | Co | ordinate axis en |
| `CAXISI` | `integer` | Co | ordinate axis |
| `CBACXR` | `real` | integer    Ac | cumulated cables xarea at |
| `CBCOG` | `pos` | Ca | ble center of gravity |
| `CBCULE` | `real` | Cu | t Length of cable |
| `CBFRLE` | `real(20)` | Fr | ee Length of cable |
| `CBGELE` | `real` | Ge | ometric Length of cable |
| `CBNUCW` | `element(500)` | Ca | bles at a point on a ca |
| `CBPOSA` | `real(2)` | Fi | rst cut bridge definition po |
| `CBPOSB` | `real(2)` | Se | cond cut bridge de |
| `CBPREF` | `element(500)` | Re | ferences to POINTR fo |
| `CBRNLS` | `element(500)` | Li | st of route nodes that ca |
| `CBRRLS` | `element(500)` | Li | st of route nodes and ra |
| `CBRWGL` | `real` | Ra | w Geometric Length of ca |
| `CBSTA` | `integer` | Ca | ble routing status |
| `CBSTAT` | `string(700)` | integer    Ca | ble routing status text |
| `CBSTT` | `string(10)` | Ca | ble status text |
| `CBTOLE` | `real` | To | tal Length of Cable |
| `CBWEIG` | `real` | Ca | ble weight |
| `CCEN` | `integer` | Co | st center |
| `CCLA` | `integer` | Co | st class |
| `CCOL` | `integer` | Co | lour (in catalog) |
| `CCON` | `word` | Co | nnection type |
| `CCOREF` | `element` | Ca | ble core set reference |
| `CCORRE` | `element` | Ca | ble Core set reference |
| `CCORXR` | `element(500)` | Re | turn reference from CCORS SCOMs |
| `CDET` | `element` | Catal | og detail |
| `CDIST` | `real` | Curve | Distance |
| `CDPL` | `word(100)` | List | of valid current design prope |
| `CDPR` | `real` | word    Curre | nt design dataset prope |
| `CDRG` | `string(24)` | Isodr | aft Compipe: Drawi |
| `CELLID` | `integer(2)` | Cell | Identifier |
| `CELLTO` | `real` | Total | Number of Cell |
| `CELLTR` | `real` | Total | Number of Trimmed Cells |
| `CELLWH` | `real` | Total | Number of Untri |
| `CELREF` | `element` | Statu | s Element reference |
| `CEND` | `string` | Conne | ction at other end of CR |
| `CENGRA` | `pos` | Facto | ry Standard Part Cente |
| `CENRADIUS` | `real` | Cente | rline Radius |
| `CERF` | `element(500)` | Array | of Faces generated by th |
| `CEXES` | `real(4)` | Cable | excesses |
| `CEXS` | `real` | Perce | ntage excess for passi |
| `CFCHE` | `logical` | Fill | level check |
| `CFDP` | `element` | word    Curre | nt design dataset prope |
| `CFFA` | `element(500)` | Array | of Faces generated by th |
| `CFGCTX` | `string(120)` | Config | uration key context |
| `CFGEO` | `real(8)` | Cut fr | ee definition curve |
| `CFGIAV` | `integer(2147483647)` | Config | uration integer array |
| `CFGIV` | `integer` | Config | uration integer value |
| `CFGKRE` | `element` | Config | uration key refere |
| `CFGLAV` | `logical(2147483647)` | Config | uration logical array value |
| `CFGLV` | `logical` | Config | uration logical value |
| `CFGNAM` | `string(50)` | Config | uration key name |
| `CFGOVR` | `logical` | Config | uration Override Flag |
| `CFGRAV` | `real(2147483647)` | Config | uration real array value |
| `CFGRV` | `real` | Config | uration real value |
| `CFGTAV` | `stringarray(2147483647)` | Config | uration text array value |
| `CFGTV` | `string(2048)` | Config | uration text value |
| `CFGTYP` | `string(120)` | Config | uration value type |
| `CFILL` | `real` | Fill l | evel at route node |
| `CFKEYP` | `string(2000)` | Config | uration key path |
| `CFRA` | `element(10)` | Cofitt | ing reference array for Pf |
| `CGROFF` | `real` | Grid p | osition offset |
| `CHALEN` | `real` | Length | of chamfer interv |
| `CHAM` | `real(2)` | Chamfe | r lengths |
| `CHANUM` | `integer` | Number | of chamfer interv |
| `CHAR` | `integer` | Charac | ter set |
| `CHARGE` | `string(75)` | Charge |  |
| `CHCOLO` | `integer` | Dimens | ion crosshairs color |
| `CHCONU` | `integer` | Crossh | airs color number |
| `CHCRGB` | `integer(4)` | RGB di | mension crosshairs color |
| `CHCRGP` | `integer(4)` | RGB di | mension crosshairs color |
| `CHDCOLUMN` | `element` | Child | column |
| `CHECKE` | `string(1000)` | Checke | r |
| `CHEI` | `real` | Charac | ter height |
| `CHEIGL` | `real` | GLabel | style character height |
| `CHEITX` | `string(80)` | Charac | ter height text |
| `CHKDAT` | `string(120)` | Date c | hecked |
| `CHKSUM` | `string(32)` | MD5 ch | ecksum |
| `CHNGD` | `integer` | Change | d counter |
| `CHOS` | `real` | Crossh | airs overshoot |
| `CHOSTX` | `string(80)` | Crossh | airs overshoot text |
| `CHPN` | `integer` | Crossh | airs pen |
| `CHSTREF` | `element` | Crossh | airs linestyle Refere |
| `CHSTYL` | `integer` | Crossh | airs linestyle |
| `CIMPED` | `real` | Conduc | tor impedance |
| `CIRCR` | `real(4)` | Circum | scribed rectangle |
| `CIWE` | `string(1000)` | Total | insulation weight |
| `CKEY` | `word` | ISODRA | FT end condition key |
| `CLADNO` | `string(120)` | Ad | ditional notations |
| `CLAI` | `integer` | Cl | aim mode |
| `CLAIMDB` | `string(10)` | Im | plicit or explicit claims |
| `CLALEN` | `real` | cl | amping length |
| `CLANAM` | `stringarray(10)` | Cl | ass Name |
| `CLBASE` | `real` | Co | lumn base offset |
| `CLCCNT` | `integer` | Cl | aim list changes count |
| `CLCOLO` | `integer` | Ce | nterline color |
| `CLCONN` | `element(5000)` | integer    El | ements that Clasher co (a |
| `CLCONU` | `integer` | Ce | nterline color number |
| `CLCUTO` | `real` | Cu | tting length cutouts |
| `CLEIB` | `real` | Cu | tting length end, no be |
| `CLEVB` | `real` | Cu | tting length end, V be |
| `CLEXB` | `real` | Cu | tting length end, X be |
| `CLEYB` | `real` | Cu | tting length end, Y be |
| `CLFG` | `logical` | Ce | nterline flag |
| `CLFL` | `logical` | Ce | nterline flag |
| `CLGRND` | `real` | To | tal grinding length |
| `CLHO` | `real` | cl | earance hole |
| `CLHOLE` | `real` | Cu | tting length holes |
| `CLHULL` | `string(120)` | Hu | ll |
| `CLICEC` | `string(120)` | Ic | e class |
| `CLIPCD` | `integer` | Cl | ip code |
| `CLIST` | `element(500)` | integer    Al | l cables attached to route |
| `CLLE` | `real` | Branch | centerline length |
| `CLLENA` | `real` | First | corner loop length |
| `CLLENB` | `real` | Second | corner loop length |
| `CLMACH` | `string(120)` | Machin | ery |
| `CLMID` | `string(120)` | Unique | system ID of user claimi |
| `CLMIDL` | `string(256)` | Unique | system ID of user claimi |
| `CLMNUM` | `integer` | User o | r extract number claimi number |
| `CLMO` | `string` | Center | line mode: 1=CL OFF, 2 |
| `CLMPLN` | `real` | Clampi | ng length of manufa |
| `CLMRGB` | `integer(4)` | RGB co | lumn color |
| `CLMRGP` | `integer(4)` | RGB co | lumn color physical |
| `CLMTIE` | `element(4)` | Refere | nce to elements that a claime elemen |
| `CLNCOD` | `string(120)` | Ceilin | g Code |
| `CLNELE` | `real` | Ceilin | g Elevation |
| `CLNELS` | `element(100)` | Refere | nces to panels or compon clone |
| `CLNFAC` | `real` | Cleani | ng factor |
| `CLNHEI` | `real` | Ceilin | g Height |
| `CLNOTC` | `real` | Cuttin | g length notches |
| `CLNREF` | `element(100)` | Refere | nces to clones of this e |
| `CLNRGB` | `integer(4)` | RGB ce | nterline color |
| `CLNRGP` | `integer(4)` | RGB ce | nterline color physic |
| `CLNTYP` | `string(120)` | Ceilin | g Type |
| `CLNVOI` | `real` | Ceilin | g Void Height |
| `CLOSED` | `logical` | True i | f plate covering entire compon |
| `CLOSEFLAG` | `logical` | True i | f branch is closed |
| `CLPN` | `integer` | Center | line pen |
| `CLPOS` | `real(2)` | Corner | loop definition point |
| `CLRAD` | `real` | Corner | loop radius |
| `CLRF` | `element` | Actual | circulation list refere |
| `CLRISS` | `logical` | Clear | lower parts on issue |
| `CLRSIZ` | `real(2)` | Cleara | nce size |
| `CLSARE` | `string(120)` | Servic | e area |
| `CLSNAM` | `string(120)` | Class | Name |
| `CLSTREF` | `element` | Center | line linestyle Refere |
| `CLSTYL` | `integer` | Center | line linestyle |
| `CLSTYP` | `integer` | Class | Type |
| `CLSURI` | `string(200)` | Class | URI Pseudo |
| `CLTOT` | `real` | Total | cutting length |
| `CLTRID` | `integer` | Clonin | g transformation compos |
| `CLUTCH` | `word` | Bendin | g machine insert |
| `CMALL` | `real` | Struct | ure allowance |
| `CMAXF` | `real` | Calcul | ate maximum fill level |
| `CMBOUA` | `element` | Aft bo | undary |
| `CMBOUF` | `element` | Fwd bo | undary |
| `CMBOUL` | `element` | Lower | boundary |
| `CMBOUP` | `element` | Ps bou | ndary |
| `CMBOUS` | `element` | Stbd b | oundary |
| `CMBOUU` | `element` | Upper | boundary |
| `CMBOX` | `real(6)` | Boundi | ng box |
| `CMCAT` | `string(256)` | Compar | tment category |
| `CMCDE` | `real` | Conten | t density |
| `CMCTID` | `string(256)` | Conten | t type ID |
| `CMDESC` | `string(256)` | Compar | tment description |
| `CMFLW` | `real` | Full L | oad Weight |
| `CMINF` | `real` | Calcul | ate minimum fill level |
| `CMLCV` | `real` | Longit | udinal center of total |
| `CMMGE` | `integer` | Merged | compartment indica |
| `CMNTID` | `string(32)` | Detail | ing Comment ID |
| `CMPER` | `real` | Compar | tment permea |
| `CMPERD` | `real` | Permea | bility for use in damage |
| `CMPLNK` | `element` | Return | reference from schema elemen elemen |
| `CMPR` | `element` | Compon | ent reference |
| `CMPRFA` | `element(500)` | All co | mponents for the PipeP |
| `CMPSTATUS` | `word` | Conne | ctivity comparison statu |
| `CMPSTS` | `string(120)` | Conne | ctivity comparison statu |
| `CMPURP` | `string(256)` | Purpo | se |
| `CMTCV` | `real` | Trans | verse center of total volum |
| `CMTYP` | `integer` | Type | of compartment |
| `CMVCV` | `real` | Verti | cal center of total volum |
| `CMVOL` | `real` | Total | volume |
| `CNSTRF` | `element` | Conne | ctor style reference |
| `CNTNUM` | `integer` | Conto | ur number |
| `CNTYPE` | `integer` | Conto | ur Type Number |
| `CNUM` | `string(22)` | Isodr | aft Compipe: Line numbe |
| `COCDRE` | `element(500)` | word    COCDE | SS with same COCON quali |
| `COCONN` | `word` | COCO | Connection type |
| `COCORE` | `element(2)` | COCO | description refer |
| `COCOXR` | `element(500)` | COCO | description return refer |
| `COCSAM` | `element(500)` | COCOS | with same CTYP value |
| `COFF` | `real` | Offse | t |
| `COFVEC` | `real(3)` | Curve | Vector |
| `COLCOL` | `integer` | Colum | n color |
| `COLCON` | `integer` | Colum | n color number |
| `COLNUM` | `integer` | Pin co | lumn number |
| `COLRGB` | `integer(4)` | RGB co | lor |
| `COLRGP` | `integer(4)` | RGB co | lor physical |
| `COLSCH` | `string(120)` | Color | Schema |
| `COLSTREF` | `element` | Column | linestyle Refere |
| `COLSTY` | `integer` | Column | linestyle |
| `COLXSP` | `real(100)` | Spacin | g between columns in the tower |
| `COLYSP` | `real(100)` | Spacin | g between columns in the tower |
| `COMBOO` | `word` | Boolea | n Combination |
| `COMM` | `string(120)` | Commen | t |
| `COMMST` | `string(500)` | Commen | t string |
| `COMNT` | `string` | Commen | t |
| `COMPEN` | `logical` | Compen | sate bending activi |
| `COMPID` | `integer(100)` | Compon | ent identity |
| `COMPRE` | `element` | Suppor | ted component refere |
| `COMPTYPE` | `word` | Type o | f component |
| `COMSTA` | `string(256)` | Commen | t string 1 |
| `CONAM` | `string` | Cutout | name |
| `CONARR` | `word(10)` | Connec | tion array |
| `CONATS` | `element(500)` | List o | f attachment connec |
| `CONATT` | `string(5000)` | Refere | nced conceptual model |
| `CONBRA` | `element(500)` | List o | f branches co |
| `CONCD` | `integer` | Co | nnection code |
| `COND` | `integer(500)` | Ac | cess Control Logical co |
| `CONDES` | `string` | Co | nnection string |
| `CONDGR` | `integer` | No | of Conductor Groups |
| `CONERF` | `element` | Co | nnection End Ref |
| `CONMTL` | `element` | Co | nductor material |
| `CONNE` | `logical` | Se | gment end connection fl |
| `CONNECTIONS` | `element(5000)` | Co | nnections |
| `CONNECTIONSH` | `element(5000)` | Co | nnections for all de |
| `CONNECTSERVICEID` | `string(120)` | Co | nnect service ID of the up |
| `CONNER` | `string(300)` | integer    Co | nnection error message |
| `CONNRE` | `element(10)` | Re | ferences to other el |
| `CONNS` | `logical` | Se | gment start connection fl |
| `CONREF` | `element` | Re | ferences to other co |
| `CONRF` | `element` | Co | nnector reference |
| `CONSIS` | `logical` | Po | sition consistency |
| `CONSRF` | `element` | Co | nnection Start Ref |
| `CONSUPPORTS` | `element(500)` | Al | l connected supports to th an |
| `CONTRA` | `element(500)` | Li | st of trays connected to br |
| `CONTYP` | `string` | Co | nnection type |
| `COPI` | `integer` | Nu | mber of copies |
| `COPYDB` | `element(8191)` | Co | pies of this database |
| `CORA` | `string(1000)` | Co | rrosion thickness |
| `CORCGR` | `string(120)` | integer    ca | ble core conductor gr |
| `CORCOD` | `string(120)` | Co | re code |
| `CORCOM` | `string(120)` | Co | re composition |
| `CORCON` | `element(50)` | CO | R Configurations |
| `CORGRP` | `integer` | Co | re Group |
| `CORNUM` | `integer` | Co | rner number |
| `CORNUV` | `pos` | Co | rner point |
| `CORROS` | `real` | Tu | be corrosion |
| `CORRUG` | `logical` | Tr | ue if corrugation is de |
| `CORSZ` | `real` | Si | ze of the core |
| `CORTAG` | `string(120)` | integer    ca | ble core tag |
| `CORTYP` | `string(120)` | Co | re type |
| `COSTES` | `string(256)` | Co | st estimator |
| `COUN` | `integer` | Co | unter |
| `COVHOL` | `logical` | Co | ver hole |
| `CPAR` | `real(100)` | Ca | talog parameters |
| `CPARTS` | `element(4)` | Co | nnection parts |
| `CPEN` | `integer` | Pe | n for internal columns |
| `CPFA` | `element(500)` | Ar | ray of Ports this points to |
| `CPHASE` | `element` | Re | ference to Construction Ph |
| `CPLO` | `string(120)` | Pl | ot (in catalog) |
| `CPOF` | `real(2)` | Leade | rline connection point |
| `CPOFTX` | `string(80)` | Leade | rline connection point |
| `CPOS` | `pos` | condi | tioning position for curve |
| `CPRIND` | `word(2)` | Conne | ction point instance repea |
| `CPRIO` | `integer` | Conne | ctor priority flag |
| `CPRO` | `real` | Spot | value of property C |
| `CPSDAT` | `blob(2147483647)` | CPS D | ata |
| `CPSRCR` | `element` | Conne | ction point instance sourc |
| `CPUL` | `real(3)` | Cold | pull - translational |
| `CPUT` | `real(3)` | Cold | pull - twist |
| `CRCANG` | `real` | Turni | ng angle for least circu |
| `CRCLW` | `real(2)` | Lengt | h and width of least circu |
| `CRDATE` | `string(120)` | attr    Date | element created in curre ascen |
| `CREACT` | `real` | Condu | ctor reactance |
| `CREANCESTORS` | `logical` | Creat | e ancestors |
| `CREF` | `element` | Conne | ction reference |
| `CRESIS` | `real` | Condu | ctor resistance |
| `CREXTR` | `integer` | attr    Extra | ct element created in curre ascen |
| `CRFA` | `element(10)` | Conne | ction reference array |
| `CRINFO` | `string(200)` | DB cr | eation information |
| `CRIT` | `integer(1000)` | Se | lection criteria (used to de |
| `CRSAOS` | `element` | Sy | mbolic cross section ab re |
| `CRSATS` | `element` | Sy | mbolic cross section ab re |
| `CRSESS` | `integer` | attr       Se | ssion element created in in |
| `CRSNR` | `element` | Sy | mbolic cross section st |
| `CRSOS` | `element` | Sy | mbolic cross section ot pe re |
| `CRSTHS` | `element` | Sy | mbolic cross section th |
| `CRUSER` | `string(120)` | attr       Us | er created element in cu as |
| `CSESS` | `string(640)` | integer    Co | mment entered for sp |
| `CSFBR` | `logical` | Sp | ooling marker for co |
| `CSGBOX` | `real(6)` | CS | G-Calculated box vo co |
| `CSPA` | `real` | Ch | aracter spacing factor |
| `CSPATX` | `string(80)` | Ch | aracter spacing factor (a |
| `CSPC` | `string(6)` | Is | odraft Compipe: Sp |
| `CSTA` | `string(120)` | Ca | talog Standard |
| `CSTMER` | `string(256)` | Cu | stomer |
| `CSTMRN` | `string(256)` | Cu | stomer number |
| `CSTR` | `element` | Co | nstraint reference |
| `CTCREF` | `element` | integer    Ca | ble tray component ref |
| `CTHATP` | `integer` | Co | mmenting attachment pu |
| `CTHCFC` | `element` | Cl | osed LOV reference |
| `CTHCFO` | `element` | Op | en LOV reference |
| `CTHCTP` | `string(120)` | Co | mmenting content type |
| `CTHICK` | `real` | Co | ating thickness |
| `CTHID` | `element` | Th | read Id |
| `CTHLIS` | `element(500)` | Li | st of attached comment th |
| `CTHMAS` | `element` | Co | mmenting world Ma |
| `CTHREF` | `element` | Co | mment Element re |
| `CTHSEL` | `integer(500)` | Se | lection expression |
| `CTHSTA` | `integer` | Co | mmenting thread state (O |
| `CTHSTT` | `string(20)` | Th | read state text |
| `CTHTEX` | `string(1000)` | Co | mmenting text |
| `CTHTOL` | `element(500)` | Li | st elements assigned to a |
| `CTHWLI` | `element(20)` | Li | st of Commenting wo |
| `CTSPE` | `element` | Ca | ble tray specification |
| `CTTYP` | `word` | Ca | ble tray typ |
| `CTXPSP` | `integer` | Co | nnector Text Position (B En |
| `CTXT` | `string(120)` | Card t | ext |
| `CTXTPS` | `string(120)` | Connec | tor Text Position (as te |
| `CTYA` | `word` | Attach | ed connection type |
| `CTYE` | `word` | End co | nnection type |
| `CTYO` | `word` | Owning | connection type |
| `CTYP` | `word(2)` | Connec | tion type |
| `CTYPLI` | `word(5000)` | List o | f COCO Ctypes |
| `CTYS` | `word` | Start | connection type |
| `CUALWD` | `logical` | Indica | tes compare update window |
| `CURD` | `element(5000)` | Curren | t DBs |
| `CURF` | `string` | Curve | fitting code: 1 defaul |
| `CURLOC` | `element` | True c | urrent location |
| `CURNAM` | `string(120)` | Curve | Name |
| `CURREN` | `string(1000)` | Curren | t |
| `CURRFULL` | `element(5000)` | List o | f current DBs in MDB, e |
| `CURTYP` | `word` | Curve | type |
| `CURVED` | `logical` | True i | f curved plate part |
| `CUSDIR` | `logical` | Curve | Segment Direction Start |
| `CUSOFF` | `real` | Curve | Segment Offset |
| `CUSRAD` | `real` | Curve | Segment Radius |
| `CUSVAL` | `string(4000)` | Delimi | ted Custom Value List |
| `CUTALW` | `real` | Cuttin | g allowance |
| `CUTB` | `real` | Cutbac | k |
| `CUTL` | `real` | Cut le | ngth |
| `CUTLAR` | `real(50)` | Cu | t Length Array |
| `CUTMIN` | `real` | Cu | tting allowance mi |
| `CUTNAM` | `string(700)` | integer    Fu | ll name of element, tr |
| `CUTNMN` | `string(700)` | integer    Fu | ll name of element (w tr |
| `CUTP` | `dir` | Cu | tting plane normal |
| `CUTVEC` | `dir` | Cu | t plane normal |
| `CVALS` | `real(100)` | Co | ordinate values |
| `CWBMAT` | `string(700)` | Ca | bleway branch material ty |
| `CWEI` | `string(1000)` | To | tal component weight |
| `CWHEAD` | `element(500)` | Ca | bleway Head |
| `CWHPOS` | `pos` | Ca | bleway path head point po |
| `CWIDTH` | `real` | Cl | earance Width |
| `CWJBLS` | `element(500)` | Ca | bleway branches and ju |
| `CWJUSL` | `word` | Ca | ble Way Justification Li |
| `CWLIST` | `element(500)` | Al | l cableways attached to ro |
| `CWPPJB` | `element(500)` | Ca | bleway branches and pu bo |
| `CWPPLS` | `element(500)` | Ca | bleway branches and pu |
| `CWTAIL` | `element(500)` | Ca | bleway Tail |
| `CWTPOS` | `pos` | Ca | bleway path tail point po |


## Attribute D

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `D` | `real` | — | Position downing |
| `DACC` | `string` | — | Database access |
| `DACCLA` | `logical` | — | True if DAC allows element to be claimed |
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
| `DAENABLED` | `string(10)` | Enable | Autolabels for view ( |
| `DAENI` | `integer` | Enable | Design Element Auto L (Off, |
| `DAEXLL` | `logical` | Dimens | ion auto external line l |
| `DAREF` | `element` | Refere | nce of associated datase |
| `DARREF` | `element` | Design | area reference |
| `DARSF` | `element` | Design | Element Auto Labell refere |
| `DASSCI` | `element(500)` | Refere | nce Array of all direct constr |
| `DASSOS` | `element(500)` | Refere | nce Array of all associ constr |
| `DATASO` | `element(10)` | DBView | or DBViewSet refere Datash |
| `DATE` | `string(12)` | Date |  |
| `DATEFO` | `string` | Date f | ormat |
| `DATIM` | `string(19)` | LMI Da | te/time |
| `DATINT` | `integer(2)` | Date |  |
| `DATONE` | `integer` | Date 1 |  |
| `DATTWO` | `integer` | Date 2 |  |
| `DATTXT` | `string(22)` | Date |  |
| `DBAC` | `string` | DB Acc | ess, MULTIWRITE or UPD |
| `DBALL` | `element(8000)` | List o | f DBs allocated to locati |
| `DBATTRIBUTE` | `word` | Datab | ase attribute |
| `DBBLOB` | `blob(2147483647)` | Datab | ase Binary Large Objec |
| `DBCL` | `string` | DB Cl | aim |
| `DBCNTL` | `logical` | True | if element is in a contr |
| `DBCRITERIA` | `integer(2000)` | Crter | ia(expression) for DBs i |
| `DBELET` | `word` | Eleme | nt type |
| `DBEXNO` | `integer` | DB Ex | tract Number |
| `DBF` | `element` | Datab | ase reference attri |
| `DBFI` | `string` | DB fi | lename |
| `DBFN` | `integer` | DB fi | le number |
| `DBHASPRODUCT` | `logical` | Has a | product been assoc |
| `DBLC` | `element(1000)` | List | of LOCs belonging to a DB |
| `DBLNKP` | `logical` | Linke | d Documents (DB) distr |
| `DBLS` | `element(5000)` | List | of DBs belonging to MDB |
| `DBLSFULL` | `element(5000)` | List | of DBs belonging to MDB, |
| `DBNA` | `string` | DB na | me |
| `DBNU` | `integer` | DB Nu | mber |
| `DBOT` | `real` | Botto | m diameter |
| `DBPR` | `element(8000)` | List | of DBs Primary at locat |
| `DBPRODUCTAVAILABLE` | `stringarray(50)` | word    Produ | cts available for datab |
| `DBPRODUCTTEXT` | `string(1024)` | Produ | ct associated with this |
| `DBPRODUCTWRITE` | `logical` | word    Flag | determining whether produ |
| `DBRBEG` | `integer` | DB ra | nge start |
| `DBREF` | `element` | DB re | ference |
| `DBREND` | `integer` | DB ra | nge end |
| `DBSESS` | `integer` | Last | DB session |
| `DBSETLS` | `element(5000)` | List | of DbSets in MDB |
| `DBSHIE` | `element(5000)` | Datab | ase hierarchy within a DBS |
| `DBSLEV` | `element(5000)` | Datab | ases at a level withi |
| `DBSLIS` | `element(5000)` | Datab | ases within a DBSET |
| `DBSORD` | `string(120)` | Order | dbs in dynamic DBSET numbe |
| `DBSSTP` | `element(8000)` | DBs i | n a stamp |
| `DBSTF` | `element` | Datab | ase set reference attri |
| `DBTE` | `string` | DB Te | xt Encoding |
| `DBTY` | `word` | DB ty | pe (DESI, CATA etc) syste |
| `DBUSRX` | `element(10000)` | Curre | nt Users in the syste any e |
| `DBVAR` | `logical` | True | if element is in a varia |
| `DBVWSTREF` | `element(50)` | Datab | ase View Set refer |
| `DBWRITE` | `logical` | True | if element is in a writa |
| `DCLA` | `string` | Databa | se claim mode |
| `DCLNCO` | `string(120)` | Defaul | t Ceiling Code |
| `DCLNHE` | `real` | Defaul | t Ceiling Height |
| `DCLNTY` | `string(120)` | Defaul | t Ceiling Type |
| `DCMPID` | `integer` | Defini | tion component identi |
| `DCODE` | `string` | Direct | ion code |
| `DCON` | `word` | Design | PPoint connection type |
| `DCONFINT` | `integer` | Draw C | onnector Flags Intege |
| `DCONFLAGS` | `string(120)` | Draw C | onnector Flags |
| `DCORRO` | `real` | Derive | d corrosion |
| `DCRFA` | `element(10)` | Array | of Design datasets for De |
| `DCSTYF` | `element` | Design | change style refere |
| `DCTILT` | `real` | Defaul | t Ceiling Tile Thickn |
| `DDDF` | `string(1000)` | Defaul | t Design data value |
| `DDEF` | `real(3)` | Port d | istance flexibility defaul |
| `DDEG` | `real` | Dimens | ion line angle |
| `DDEGTX` | `string(80)` | Radial | dimension angle text |
| `DDEP` | `integer` | Databa | se depth within hierar |
| `DDESP` | `real(100)` | Design | parameters as distan |
| `DDIR` | `dir` | Design | PPoint spherical direct |
| `DDNM` | `element` | Design | element reference |
| `DDNMX` | `real` | DDNM X | position |
| `DDNMXY` | `real(2)` | DDNM X | Y position |
| `DDNMY` | `real` | DDNM Y | position |
| `DDNX` | `string(120)` | Design | element as text |
| `DDOORS` | `real` | Defaul | t Door Sill |
| `DDPR` | `string(1000)` | Design | data property value |
| `DDRFA` | `element(10)` | Array | of default design datase |
| `DEALAL` | `logical` | True i | f location locked due to dea |
| `DEALDB` | `element(300)` | Refere | nce array for locati being |
| `DECGAP` | `real` | Decora | tion Gap |
| `DECMOD` | `integer` | Decora | tion Mode |
| `DECOFF` | `real(2)` | Decora | tion offset |
| `DECP` | `integer` | Decima | l places |
| `DECPRC` | `integer` | Decima | l precision |
| `DECREP` | `real` | Decora | tion Repeat |
| `DECSEP` | `string` | Decima | l separator |
| `DECSIZ` | `real` | Decora | tion Size |
| `DEFA` | `real` | Defaul | t |
| `DEFATT` | `word(2000)` | Defaul | t List of all attrib |
| `DEFAULTATT` | `word` | Attrib | ute on default locati |
| `DEFAULTEXP` | `integer(2000)` | Expres | sion used to calcul |
| `DEFAULTLOCATION` | `word` | Attrib | ute to follow to get defaul |
| `DEFERD` | `element(10000)` | Deferr | ed DBs in MDB |
| `DEFHOM` | `element` | Defaul | t allocation home |
| `DEFLEN` | `real` | Fixed | length of the weld |
| `DEFLNK` | `element` | Link t | o terrain definition |
| `DEFREF` | `element` | Refere | nce to a definition elemen |
| `DEFSLO` | `real` | Defaul | t pipe slope |
| `DEFSPK` | `element` | Defaul | t Reference of SPEC for br |
| `DELANG` | `real` | Angle | applied to repeat elemen |
| `DELDAT` | `datetime(2)` | Delive | ry Date |
| `DELDSG` | `word` | Delive | ry Designation flag |
| `DELP` | `pos` | D-posi | tion in structure |
| `DELPE` | `real` | Eastin | g of D-Position in STRUC |
| `DELPN` | `real` | Northi | ng of D-position in STRUC |
| `DELPU` | `real` | Upping | of D-position in STRUC |
| `DELTAE` | `real` | Easter | ly Offset applied to repeat |
| `DELTAN` | `real` | Northe | rly Offset applied to rep |
| `DELTAU` | `real` | Vertic | al Offset applied to repeat |
| `DEMIX` | `integer` | Index | of Demote Status Value |
| `DEMRDY` | `logical` | Flag t | o signify the comple defini |
| `DEMVOL` | `element(20)` | Refere | nces to Volumes to be dem laser |
| `DENS` | `real` | Spot | value of density |
| `DEPATT` | `word(2000)` | Attri | butes that a rule or catal expre upon |
| `DEPD` | `string(250)` | word    Defau | lt value of local desig |
| `DEPL` | `word(100)` | List | of local design prope |
| `DEPR` | `string(250)` | word    Local | design property value |
| `DEPREF` | `element(500)` | List | of elements conne |
| `DEPTH` | `real` | Depth |  |
| `DESC` | `string(120)` | Descr | iption of the eleme |
| `DESCAL` | `string(256)` | Desca | ling |
| `DESELE` | `element` | Refer | ence to Design Objec |
| `DESELM` | `element(50)` | Refer | ences to Design Eleme |
| `DESGEO` | `element(5000)` | Desig | n geometrical depen |
| `DESLNK` | `element(20)` | Conne | ctivity Design Model |
| `DESMOD` | `integer` | Desig | n Mode |
| `DESP` | `real(100)` | Desig | n parameters |
| `DESREF` | `element(10)` | Desig | n reference |
| `DESSTR` | `element` | Desig | n Structure Refer |
| `DEST` | `string(26)` | Desti | nation |
| `DESXCL` | `logical` | — | Design Outfitting excluded Geometry |
| `DETA` | `logical` | — | Detail flag |
| `DETR` | `element` | — | Detailing text reference |
| `DETYPE` | `integer` | — | Type of Element In Detailing Node Creation |
| `DEXREF` | `element` | — | External element reference |
| `DFBRADIUS` | `real` | element | Default bend radius |
| `DFFL` | `real(6)` | — | Displacement force flexibility |
| `DFHOME` | `element` | element, elem | type    Get default home element |
| `DFLA` | `string` | — | Radial dimension type flag |
| `DFLF` | `real(3)` | — | Translational spring values |
| `DFLRCO` | `string(120)` | — | Default Floor Code |
| `DFLRHE` | `real` | — | Default Floor Height |
| `DFLRTY` | `string(120)` | — | Default Floor Type |
| `DFLT` | `string(500)` | — | Default value for the attribute |
| `DFLTA` | `string(1000)` | — | Defaults for Type 1 annotation - special attribute for use by ADP |
| `DFLTB` | `string(1000)` | — | Defaults for Type 2 annotation - special attribute for use by ADP |
| `DFLTC` | `string(1000)` | — | Defaults for Type 3 annotation - special attribute for use by ADP |
| `DFLTD` | `string(1000)` | — | Defaults for Type 4 annotation - special attribute for use by ADP |
| `DFNM` | `string(120)` | — | Document filename |
| `DFON` | `integer` | Dimens | ion text font |
| `DFONTN` | `string(80)` | Dimens | ion text font name |
| `DFUN` | `element` | Defaul | t unit |
| `DGABMA` | `real` | Helper | Line Distance Start |
| `DGABME` | `real` | Helper | Line Distance End |
| `DGABPA` | `real` | Detail | ing Dimensioning Start |
| `DGABPE` | `real` | Detail | ing Dimensioning End Di |
| `DGABRE` | `integer` | Detail | ing Graphic Measur relati |
| `DGACCU` | `integer` | Detail | ing Graphic Units Accura |
| `DGADDM` | `logical` | Detail | ing Graphic Additi |
| `DGADDT` | `logical(3)` | Detail | ing Graphic Additi Option |
| `DGALPO` | `string(32)` | Detail | ing Graphics Arc Length |
| `DGALPR` | `string(32)` | Detail | ing Graphics Arc Length |
| `DGALTI` | `string(32)` | Detail | ing Graphics Arc Length |
| `DGANCH` | `integer` | Detail | ing Graphic Anchor Point |
| `DGANPT` | `real(2)` | Detail | ing Graphic Anchor Point |
| `DGARLT` | `integer` | Detail | ing Graphic Arc Length |
| `DGBAST` | `real` | Triang | le Base Line |
| `DGBOLD` | `logical` | Detail | ing Graphic Text Attrib |
| `DGCENT` | `logical` | Detail | ing Graphic Flag Text center |
| `DGCPOP` | `integer` | Detail | ing Graphics Arc Length Option |
| `DGCRAD` | `real` | Detail | ing Graphic Circle Radius |
| `DGCRST` | `integer` | Detail | ing Graphic Polyline Attrib type |
| `DGCRTY` | `integer` | Detail | ing Graphic Attrib |
| `DGDARK` | `integer` | Detail | ing Graphic Display Criter |
| `DGDBEA` | `real` | Detail | ing Graphic Polyline Attrib angle |
| `DGDBED` | `real` | Drawba | ck End Diameter |
| `DGDBEL` | `real` | Detail | ing Graphic Polyline Attrib length |
| `DGDBET` | `integer` | Detail | ing Graphic Symbol Attrib type |
| `DGDBGN` | `integer` | Detail | ing Graphic Group number |
| `DGDBSA` | `real` | Detail | ing Graphic Polyline Attrib angle |
| `DGDBSD` | `real` | Drawba | ck Start Diameter |
| `DGDBSL` | `real` | Detail | ing Graphic Polyline Attrib length |
| `DGDBST` | `integer` | Detail | ing Graphic Symbol Attrib type |
| `DGDISL` | `real` | Detail | ing Graphic Distance to Dim (longi |
| `DGDIST` | `real` | Detail | ing Graphic Distance to Dim |
| `DGDLOL` | `real` | Detail | ing Graphic Distance Line O |
| `DGDLPO` | `integer` | Detail | ing Graphic Radius Dimens Dimens |
| `DGDLTR` | `element` | Refere | nce to DGDLT Elemen |
| `DGDLTX` | `real` | Detail | ing Graphic Polyline Attrib |
| `DGDLTY` | `real` | Detail | ing Graphic Polyline Attrib |
| `DGDOLF` | `real` | Detail | ing Graphic Dimens Overle |
| `DGDOLR` | `real` | Detail | ing Graphic Dimens Overle |
| `DGDTDP` | `real` | Detail | ing Graphic Distan point |
| `DGDTES` | `real` | Detail | ing Graphic Distan symbol |
| `DGEBPA` | `logical` | Detail | ing Graphic Flag Parall |
| `DGELVT` | `real` | Elevat | ion Value |
| `DGEXB` | `real` | Detail | ing Graphic Distance to ext |
| `DGEXE` | `real` | Detail | ing Graphic Distance to ext |
| `DGEXET` | `integer` | Detail | ing Graphic Polyline Attrib execut |
| `DGFANG` | `integer` | Fill A | ngle Index |
| `DGFCOL` | `integer` | Detail | ing Graphic Fill Color |
| `DGFDIS` | `integer` | Fill D | istance Index |
| `DGFILL` | `integer` | Detail | ing Graphic Fill flag |
| `DGFLTV` | `integer` | Detail | ing Graphic Line Patter |
| `DGFONT` | `integer` | Detail | ing Graphic Font Number |
| `DGFORM` | `integer` | Detail | ing Graphic Value Format |
| `DGFPAD` | `real` | Patter | n Repeat Factor |
| `DGFPAN` | `real` | Fill P | attern Angle |
| `DGFPFA` | `real` | Fill P | attern Factor |
| `DGFPTY` | `integer` | Patter | n Type |
| `DGFRME` | `integer` | Detail | ing Graphic Text frame |
| `DGFSHA` | `real` | Detail | ing Graphic Shading Opacit |
| `DGGAD` | `real` | Detail | ing Graphic global angle |
| `DGGONP` | `string(32)` | Detail | ing Graphics Gon Postfi |
| `DGHASL` | `logical` | Detail | ing Graphic Elevat second |
| `DGHGTH` | `integer` | Detail | ing Graphic Text Height |
| `DGHLDI` | `real` | Detail | ing Graphic Distance to Hel |
| `DGHLLE` | `real` | Detail | ing Graphic Symbol Attrib |
| `DGHLLO` | `integer` | Detail | ing Graphic Help Line L |
| `DGHLLV` | `real` | Detail | ing Graphic Help Line L |
| `DGHLOL` | `real` | Detail | ing Graphic Help Line O |
| `DGHLPO` | `integer` | Detail | ing Graphic Radius Dimens Help L |
| `DGHWR` | `integer` | Detail | ing Graphic Text Height |
| `DGISCL` | `logical` | Detail | ing Graphic Symbol Attrib |
| `DGISEA` | `integer` | Automa | tic Placement |
| `DGITAL` | `logical` | Detail | ing Graphic Text Attrib |
| `DGJOIN` | `element` | Detail | ing parent element refere |
| `DGJOIS` | `element` | Detail | ing child element refere |
| `DGLAYN` | `integer` | Detail | ing Graphic Layer Number |
| `DGLCLO` | `integer` | Close | Polyline |
| `DGLDAN` | `real` | Detail | ing Graphic Leader Angle |
| `DGLDFA` | `real` | Detail | ing Graphic Elevat for li |
| `DGLDLE` | `real` | Detail | ing Graphic Leader Length |
| `DGLDOP` | `integer` | Detail | ing Graphics Leader Line O |
| `DGLDTY` | `integer` | Detail | ing Graphic Leader Type |
| `DGLEN` | `real` | Detail | ing Graphic Polyline Attrib |
| `DGLFIL` | `integer` | Fill P | olyline |
| `DGLLEN` | `integer(3)` | Text L | ine Lengths |
| `DGLLIN` | `integer` | Detail | ing Graphic Multi- line T |
| `DGLLTY` | `integer` | Detail | ing Graphic Elevat of lea |
| `DGLPFL` | `real` | Detail | ing Graphic Line pitch |
| `DGLPIA` | `real` | Detail | ing Graphic Line pitch |
| `DGLSPA` | `real` | Line S | pacing |
| `DGLTA` | `real` | Detail | ing Graphic Line termin |
| `DGLTIV` | `integer` | Detail | ing Graphic Line Type i |
| `DGLTL` | `real` | Detail | ing Graphic Line termin |
| `DGLTR` | `element` | Refere | nce to DGLTYP Elemen |
| `DGLTSB` | `integer` | Detail | ing Graphic Line termin |
| `DGLTSE` | `integer` | Detail | ing Graphic Line termin |
| `DGLTVI` | `integer` | Detail | ing Graphic Visible Line T |
| `DGLVSD` | `integer` | Level | Symbol Docking |
| `DGLVST` | `integer` | Level | Symbol Type |
| `DGMALI` | `logical` | Detail | ing Graphic mark line f |
| `DGMATT` | `integer` | Detail | ing Graphic Measur |
| `DGMBAS` | `real(2)` | Detail | ing Dimensioning Base P |
| `DGMBEG` | `real(2)` | Detail | ing Dimensioning Origin |
| `DGMDIS` | `real` | Detail | ing Graphic Distance to Dim |
| `DGMFMT` | `integer` | Detail | ing Graphic Value Format |
| `DGMKDX` | `real` | Delta | X |
| `DGMKDY` | `real` | Delta | Y |
| `DGMLAT` | `integer` | Detail | ing Graphic Angle Measur |
| `DGMLEG` | `real(2)` | Detail | ing Dimensioning Leg En |
| `DGMLL` | `real` | Detail | ing Graphic Marker Line L |
| `DGMODE` | `integer` | Detail | ing Graphic Polyline Attrib |
| `DGMORA` | `real(2)` | Detail | ing Dimensioning Start |
| `DGMORB` | `real(2)` | Detail | ing Dimensioning End Or |
| `DGMPTD` | `real` | Detail | ing Graphic Minimu |
| `DGMTRL` | `real` | Detail | ing Graphic Triangle Measur |
| `DGMTRT` | `integer` | Detail | ing Graphic Triangle Measur |
| `DGMTXT` | `string(80)` | Detail | ing Graphics Measur |
| `DGMTYP` | `integer` | Detail | ing Graphic Angle Measur |
| `DGNINV` | `integer` | Detail | ing Graphic Number of inv |
| `DGNLIN` | `integer` | Number | of Lines |
| `DGNOSI` | `integer` | Detail | ing Graphic Symbol Attrib |
| `DGOLIN` | `integer` | Number | of Lines above Marker |
| `DGONEC` | `string(100)` | Detail | ing Graphic Symbol Attrib |
| `DGONES` | `logical` | Detail | ing Graphic Symbol Attrib |
| `DGORAN` | `real` | Orient | ation Angle |
| `DGORIE` | `integer` | Detail | ing Graphic Text Orient |
| `DGORTY` | `integer` | Detail | ing Graphic Radius Dimens Type |
| `DGPAAN` | `real` | Patter | n Angle |
| `DGPACK` | `integer` | Detail | ing Graphic Packed Word |
| `DGPATT` | `integer` | Detail | ing Graphic Line Patter |
| `DGPDDR` | `element(100)` | Refere | nce to DGPDD Elemen |
| `DGPEN` | `integer` | Detail | ing Graphic Dimens |
| `DGPICK` | `integer` | Detail | ing Graphic Pick Elemen |
| `DGPIV` | `integer` | Detail | ing Graphic Pen invisi |
| `DGPTYP` | `integer` | Detail | ing Graphic Polyline Attrib |
| `DGPVI` | `integer` | Detail | ing Graphic Pen visibl |
| `DGPXY` | `real(200)` | Detail | ing Graphic 2D Points |
| `DGPXYZ` | `real(300)` | Detail | ing Graphic 3D Points |
| `DGRADI` | `real(32)` | List o | f radius |
| `DGRDP` | `integer` | Detail | ing Graphic Radius dimens |
| `DGRDT` | `integer` | Detail | ing Graphic Radius dimens |
| `DGREPR` | `integer` | Detail | ing Graphic Symbol Attrib Rule |
| `DGSCAL` | `real` | Scalin | g Factor |
| `DGSEGT` | `integer` | Detail | ing Graphic Segmen |
| `DGSHAD` | `integer` | Shadin | g |
| `DGSIDI` | `real` | Detail | ing Graphic Polyline Attrib displa |
| `DGSLBA` | `real` | Detail | ing Graphic Slope Base V |
| `DGSLCO` | `string(32)` | Detail | ing Graphic Conten |
| `DGSMH` | `real` | Detail | ing Graphic Sm_Sys |
| `DGSMW` | `real` | Detail | ing Graphic Sm_Sys |
| `DGTALI` | `integer` | Detail | ing Graphic text alignm |
| `DGTANG` | `real` | Detail | ing Graphic text angle |
| `DGTAR` | `element` | Refere | nce to DGTXAT Elemen |
| `DGTARC` | `integer` | Detail | ing Graphic Arc Attrib |
| `DGTATB` | `integer` | Detail | ing Graphic Text |
| `DGTCOL` | `integer` | Detail | ing Graphic Text Color |
| `DGTPLP` | `integer` | Text P | osition on Level Point |
| `DGTPOS` | `integer` | Detail | ing Graphic Text positi |
| `DGTRDY` | `real` | Detail | ing Graphic Slope Triang |
| `DGTTOM` | `integer` | Detail | ing Graphic text positi out po |
| `DGTWOC` | `string(100)` | Produc | tion Phase |
| `DGTWOS` | `logical` | Detail | ing Graphic Symbol Attrib |
| `DGTXAD` | `integer` | Detail | ing Graphic Symbol Attrib |
| `DGTXAN` | `integer` | Detail | ing Graphic Text Anchor |
| `DGTXB` | `real` | Detail | ing Graphic Distance to tex |
| `DGTXE` | `real` | Detail | ing Graphic Distance to tex |
| `DGTXLI` | `integer` | Detail | ing Graphic Flag for the li number |
| `DGTXRF` | `element(100)` | Refere | nce to DTTXTS Elemen |
| `DGTXST` | `integer` | Detail | ing Graphic Text Attrib |
| `DGTXT` | `string(80)` | Displa | y Text |
| `DGTXTL` | `stringarray(20)` | Detail | ing Graphics Text |
| `DGTYPE` | `integer` | Detail | ing Graphic Type |
| `DGUNIT` | `integer` | Detail | ing Graphics Units system |
| `DGUSOF` | `real` | Detail | ing Graphic unders |
| `DGVIEW` | `integer` | Detail | ing Graphic View Number |
| `DGWASI` | `real` | Wave S | ize |
| `DGWCIR` | `integer` | Girth | Weld Flag |
| `DGWFLG` | `integer` | Shop W | eld Flag |
| `DGWFRM` | `logical` | Detail | ing Graphic Symbol Attrib |
| `DGWNTX` | `integer` | Number | of Weld Spec Texts |
| `DGWNUM` | `integer` | Number | of Waves |
| `DGWSCA` | `real` | Z3 Win | dow Scale |
| `DGWSLS` | `integer` | Detail | ing Graphic Welding Symbol |
| `DGWSOS` | `integer` | Detail | ing Graphic Welding Symbol |
| `DGWSSN` | `integer` | Detail | ing Graphic Welding Symbol |
| `DGZART` | `integer` | Detail | ing Graphic Drawing Type |
| `DHTEST` | `integer(500)` | Test l | ocator expression |
| `DHTEXT` | `integer(500)` | Defaul | t home identifier expres |
| `DIAGXPOS` | `real` | X posi | tion of the symbol on Vis |
| `DIAGYPOS` | `real` | Y posi | tion of the symbol on Vis |
| `DIAM` | `real` | Diamet | er |
| `DIAREF` | `element(500)` | Diagra | m reference array for sc |
| `DICMID` | `integer(100)` | Predef | ined instance compon |
| `DIME` | `logical` | DRAFT | user defined symbol |
| `DIMPAT` | `string(1024)` | Import | ed attribute |
| `DIMPOS` | `pos` | Derive | d 3D dimension positi |
| `DIMTXT` | `string(40)` | Dimens | ions text |
| `DINTER` | `string(257)` | Defaul | t Interference class |
| `DINTHK` | `real` | Defaul | t insulation thickn |
| `DIR` | `dir` | Direct | ion |
| `DIRATT` | `string(120)` | Name o | f attribute (or pseudo direct label |
| `DIRCOD` | `integer` | Direct | ion Coding |
| `DIREV` | `dir` | Direct | ion evaluation |
| `DIRMOI` | `integer` | Auto l | abelling direction settin Vertic |
| `DIRX` | `real(3)` | grid l | imit in x direction |
| `DIRXP` | `integer(500)` | Direct | ion expression |
| `DIRY` | `real(3)` | grid l | imit in x direction |
| `DISCIF` | `element` | Refere | nce of DISCIPLINE Elemen |
| `DISCIS` | `element(50)` | As | sociated disciplines |
| `DISP` | `real(3)` | Tr | anslation displacements |
| `DISPNM` | `string(120)` | Di | splay Name |
| `DISPNN` | `string(120)` | Di | splay Name |
| `DIST` | `real(2)` | Di | stances |
| `DISTAG` | `string(50)` | Di | splay tag |
| `DISTFH` | `real` | integer    Di | stance from head |
| `DISTFN` | `real` | Di | stance from next point |
| `DISTFP` | `real` | Di | stance from previous po |
| `DISTM` | `real(2)` | Di | stances to M1 and M2 cu |
| `DKEY` | `word` | Da | ta Key |
| `DLCNMINT` | `integer` | Di | mension line co (D On |
| `DLCNTMODE` | `string(20)` | Di | mension line co |
| `DLCOLO` | `integer` | Di | mension line color |
| `DLCONU` | `integer` | Di | mension line color nu |
| `DLEV` | `integer` | Dr | awing level |
| `DLGDAT` | `Int array` | De | legation date |
| `DLGOF` | `text` | De | legate of |
| `DLFG` | `string` | Li | near/Angular dimension li |
| `DLIM` | `real(6)` | Di | splacement limit |
| `DLIST` | `word(2000)` | Li | st of all possible dist att ty |
| `DLNRGB` | `integer(4)` | RG | B dimension line color |
| `DLNRGP` | `integer(4)` | RGB di | mension line color physic |
| `DLPN` | `integer` | Dimens | ion line pen |
| `DLSTREF` | `element` | Dimens | ion linestyle Refere |
| `DLSTYL` | `integer` | Dimens | ion linestyle |
| `DMFA` | `element(2)` | ISODRA | FT Reference Dimens |
| `DMFL` | `real(9)` | Displa | cement moment flexib |
| `DMSP` | `real` | Lower | limit to spacing betwee dimens |
| `DMSPTX` | `string(80)` | Dimens | ion spacing text |
| `DMSTRF` | `element` | Dimens | ion style reference |
| `DMTX` | `string(1000)` | Dimens | ion text |
| `DMTY` | `word(2)` | ISODRA | FT Reference Dimens |
| `DNAME` | `string(50)` | Displa | y Name |
| `DNOTCP` | `element` | Draw N | ote Current Comman |
| `DNST` | `real` | Densit | y |
| `DOCCHG` | `element(2147483647)` | Refere | nce to changed relate |
| `DOCNUM` | `string(40)` | Docume | nt Number |
| `DOCREF` | `element` | Docume | nt reference |
| `DOCXRF` | `element(500)` | Return | reference from Design DOCITM |
| `DOFF` | `real` | Dimens | ion line offset |
| `DOFIL` | `string(73)` | Drawin | g Object filename |
| `DOUHOL` | `logical` | Doubli | ng hole |
| `DOUPGR` | `logical` | Tr | ue if element is re up |
| `DPBO` | `real` | integer    De | sign point bore |
| `DPCO` | `word` | integer    De | sign point connection ty |
| `DPCOU` | `integer` | Nu | mber of valid design po |
| `DPDI` | `dir` | integer    De | sign point direction |
| `DPDIST` | `real` | Dr | aw proportional di |
| `DPFN` | `string(1024)` | IS | ODRAFT dynamic detail pl |
| `DPGR` | `real` | integer    De | sign Point Gradient |
| `DPGRID` | `integer` | IS | ODRAFT dynamic detail gr |
| `DPKEY` | `word` | Dr | aft derived Pline id |
| `DPLS` | `integer(200)` | Li | st of valid design points |
| `DPNAME` | `string(120)` | Di | splay Name |
| `DPOFF` | `real` | Di | mension point offset |
| `DPOINX` | `string(480)` | De | sign point information |
| `DPOS` | `pos` | Di | mension line/arc po |
| `DPPS` | `pos` | integer    De | sign point position |
| `DPREMA` | `real` | De | sign pres. max |
| `DPREMI` | `real` | De | sign pres. min |
| `DPRO` | `string(1000)` | Pa | rameterized Property Ex |
| `DPSF` | `element` | De | sign PPointset re |
| `DPVI` | `integer(200)` | Li | st of visible design points |
| `DRAD` | `string(1000)` | Radial | offset |
| `DRAFTM` | `string(256)` | Drafts | man |
| `DRAWNO` | `string(26)` | Drawin | g number |
| `DREVAY` | `element(50)` | DRWG r | evisions array |
| `DRFILE` | `string(73)` | Drawin | g File Name |
| `DRFLOINT` | `integer` | Draw F | low (ByVStyle, None, |
| `DRFLOW` | `string(20)` | Draw F | low (as text) |
| `DRFNUM` | `integer(21)` | Drawin | g File Numbers |
| `DRFTYP` | `integer(21)` | Drawin | g File Types |
| `DRGP` | `integer` | Drawin | g priority (used to determ SCTN) |
| `DRMXTL` | `integer` | Draft | general max text length |
| `DRNE` | `dir` | Plane | normal at end of SCTN/G |
| `DRNS` | `dir` | Plane | normal at start of SCTN/G |
| `DRPS` | `pos` | Derive | d position for steelw |
| `DRRF` | `element` | Old sp | ooler drawing refere |
| `DRSSRE` | `element` | Draft | Symbol set refere |
| `DRSTYP` | `string(120)` | Drawin | g subtype |
| `DRSTYTABLE` | `string(120)` | Drawin | g subtype table |
| `DRTITL` | `string(1000)` | Drawin | g title |
| `DRTMPR` | `element` | Draft | template reference |
| `DRTYPE` | `string(120)` | Drawin | g type |
| `DRTYPTABLE` | `string(120)` | Dr | awing type Table |
| `DRUMLN` | `real` | Dr | um length |
| `DRWGN` | `string(1000)` | Dr | awing number |
| `DSCO` | `string(120)` | De | sign code |
| `DSESS` | `string(640)` | integer    Da | te of specified session |
| `DSET` | `logical(3)` | Di | splacement limits set fl FA |
| `DSGNTN` | `string` | De | signation |
| `DSHANG` | `real` | Dr | aft absolute sheet angle |
| `DSHPOS` | `pos` | Dr | aft sheet position de |
| `DSIAST` | `element(500)` | Da | tasheet Instance as ar In |
| `DSIFIL` | `string(2000)` | Da | tasheet Instance fi |
| `DSNO` | `integer` | Da | tasheet number |
| `DSSUBT` | `string(2000)` | Da | tasheet sub title |
| `DSTAPN` | `string(120)` | Da | tasheet Additional Page Na |
| `DSTAPT` | `string(120)` | Da | tasheet Additional Page Ty |
| `DSTITL` | `string(2000)` | Da | tasheet title |
| `DSTNCE` | `real` | Di | stance |
| `DSTREF` | `element` | Da | tasheet Template re In |
| `DSTY` | `string` | Ra | dial dimension style fl |
| `DSTYPE` | `integer` | Da | tasheet type |
| `DSUPCA` | `logical` | Drawin | g Engine suppress cachin |
| `DSXLNK` | `element(200)` | Connec | tivity Extended Design |
| `DTADDR` | `element` | Detail | ing Job Address |
| `DTADDT` | `string(80)` | Additi | onal Text Data |
| `DTADEG` | `real` | Dimens | ion Text Angle Degree |
| `DTADGP` | `real` | Dimens | ion Text Angle Degree |
| `DTADHO` | `integer` | Boltin | g: Additional hole type |
| `DTADPU` | `integer` | Boltin | g Center Punch Type |
| `DTAN` | `string` | Dimens | ion text angle flag |
| `DTANFL` | `real` | Detail | ing Fabrication Item / Angl Left |
| `DTANFR` | `real` | Detail | ing Fabrication Item / Angl Right |
| `DTANGZ` | `real` | Angle | to Zero Line |
| `DTANSA` | `string` | Dimens | ion text angle flag style |
| `DTANSL` | `string` | Dimens | ion text angle flag style |
| `DTANSR` | `string` | Dimens | ion text angle flag style |
| `DTANWL` | `real` | Detail | ing Fabrication Item / Angl |
| `DTANWR` | `real` | Detail | ing Fabrication Item / Angl |
| `DTAOBV` | `integer` | Number | of bolting vectors |
| `DTAREA` | `real` | Area |  |
| `DTAUTW` | `integer` | Clampi | ng Length Balanc |
| `DTBCKD` | `datetime(2)` | Detail | ing Job Backup Date |
| `DTBCOA` | `string(80)` | Detail | ing Base Coating |
| `DTBDIA` | `real` | Detail | ing Element Border Diamet |
| `DTBDR` | `element` | Refere | nce to a bolt defini |
| `DTBNAM` | `string(32)` | Detail | ing Model Bolt Name |
| `DTBNDB` | `string(32)` | Detail | ing Model Bolt Name f |
| `DTBNDR` | `string(32)` | Detail | ing Model Bolt Name f |
| `DTBREV` | `element` | Refere | nce to Revision |
| `DTBSET` | `integer(10)` | Bolt S | et Composition |
| `DTBSR` | `element` | Refere | nce to a bolt set defini |
| `DTCATR` | `string(10)` | Bolt S | et Component Catalo |
| `DTCDAT` | `datetime(2)` | Detail | ing Drawing Creati |
| `DTCEXL` | `real` | Length | of the extrusion cut le |
| `DTCH` | `real` | Dimens | ion text character height |
| `DTCHTX` | `string(80)` | Dim te | xt char height text |
| `DTCITY` | `string(80)` | Detail | ing Address City |
| `DTCKEY` | `integer` | Bocad | Detailing Comment Key |
| `DTCLAS` | `integer` | Bocad | Detailing Element Class |
| `DTCLHO` | `real` | Bolt H | ole Clearance |
| `DTCLIP` | `integer` | Clampi | ng Length Calcul |
| `DTCLMA` | `real` | Bolt C | lamping Length (maxim |
| `DTCLMI` | `real` | Bolt C | lamping Length (minim |
| `DTCLML` | `real` | Bolt C | lamping Length (calcu |
| `DTCLWA` | `real` | Boltin | g Washer Clearance |
| `DTCNST` | `element` | Detail | ing Zone/Phase Design |
| `DTCNTC` | `element` | Detail | ing Job Customer Contac |
| `DTCNTY` | `string(80)` | Detail | ing Address Country |
| `DTCNUM` | `integer(100)` | Bocad | Detailing Comment Number |
| `DTCOGC` | `real(3)` | Center | of Gravity |
| `DTCOLA` | `string(80)` | Primar | y Color |
| `DTCOLB` | `string(80)` | Extern | al Color |
| `DTCOLN` | `element` | Nested | Drawing Refere |
| `DTCOLO` | `integer` | Dimens | ion text color |
| `DTCONU` | `integer` | Dimens | ion text color number |
| `DTCORF` | `element(100)` | Refere | nce to Bocad Detail Contai |
| `DTCSAG` | `real` | Sink H | ole Angle |
| `DTCSDA` | `real` | Sink H | ole Diameter 1 |
| `DTCSDB` | `real` | Sink H | ole Diameter 2 |
| `DTCSDC` | `real` | Sink H | ole Diameter 3 |
| `DTCSHD` | `real` | Sink H | ole Dimension Head |
| `DTCSIV` | `logical` | Counte | rsunk Bolt |
| `DTCSNU` | `real` | Sink H | ole Dimension Nut |
| `DTCTLN` | `real` | Detail | ing Item Cut Length |
| `DTCUST` | `element` | Detail | ing Job Customer |
| `DTCUTY` | `integer` | Detail | ing Fabrication Item / Type standa cutout |
| `DTDBST` | `string(80)` | Detail | ing Job Database State |
| `DTDDTE` | `datetime(2)` | Detail | ing Job Delivery Date |
| `DTDESI` | `string(80)` | Design | ation |
| `DTDESR` | `element` | Refere | nce to Bolt Set Design |
| `DTDINN` | `integer` | Detail | ing Element DIN Number |
| `DTDISA` | `real` | Sectio | n Distance 1 |
| `DTDISB` | `real` | Sectio | n Distance 2 |
| `DTDLIM` | `logical` | Blind | Hole Bolt |
| `DTDMAT` | `logical` | Clamp | Length Calculation Flag |
| `DTDRST` | `integer` | Detail | ing Drawing Status |
| `DTDRTY` | `integer` | Detail | ing Drawing Type |
| `DTDTEN` | `string(80)` | Detail | ing End Date |
| `DTDTST` | `string(80)` | Detail | ing Start Date |
| `DTDVIS` | `logical` | Visibl | e in base dimetry |
| `DTEDAT` | `integer(90)` | Detail | ing Model Element |
| `DTELEM` | `element` | Refere | nce to an element modifi during |
| `DTEMAL` | `string(80)` | Detail | ing Person eMail Addres |
| `DTENVA` | `real` | Envelo | ping Area |
| `DTER` | `string` | Dimens | ion terminator code |
| `DTERID` | `integer` | Dimens | ion terminator ID |
| `DTERSA` | `integer` | Dimens | ion term. code style |
| `DTERSL` | `integer` | Dimens | ion term. code style |
| `DTERSR` | `integer` | Dimens | ion term. code style |
| `DTETYP` | `integer` | Detail | ing Element Extern |
| `DTFCOA` | `string(80)` | Detail | ing Final Coating |
| `DTFEAG` | `element` | Refere | nce to a Feature Group/ |
| `DTFEAR` | `element` | Refere | nce to a Feature |
| `DTFEAS` | `element(100)` | Refere | nces to Feature Values |
| `DTFL` | `string` | Dimens | ion text radius flag |
| `DTFLTY` | `integer` | BMF Fo | lder Type |
| `DTFLWB` | `real` | Detail | ing Fabrication Item / Part angle |
| `DTFLWT` | `real` | Detail | ing Fabrication Item / Part angle |
| `DTFLXB` | `real` | Detail | ing Fabrication Item / Part value |
| `DTFLXT` | `real` | Detail | ing Fabrication Item / Part value |
| `DTFPHN` | `string(80)` | Detail | ing Person FAX Phone |
| `DTFPO` | `string(100)` | Final | painting 1 |
| `DTFPT` | `string(100)` | Final | painting 2 |
| `DTFRAM` | `integer` | Dim Te | xt Frame Sides (ByVSt All, C Left/R |
| `DTFREA` | `string(80)` | Bocad | Detailing Free Attrib |
| `DTFREB` | `string(80)` | Bocad | Detailing Free Attrib |
| `DTFREC` | `string(80)` | Bocad | Detailing Free Attrib |
| `DTFRED` | `string(80)` | Bocad | Detailing Free Attrib |
| `DTFREE` | `string(80)` | Bocad | Detailing Free Attrib |
| `DTFRWB` | `real` | Detail | ing Fabrication Item / Part angle bottom |
| `DTFRWT` | `real` | Detail | ing Fabrication Item / Part angle |
| `DTFRXB` | `real` | Detail | ing Fabrication Item / Part value bottom |
| `DTFRXT` | `real` | Detail | ing Fabrication Item / Part value |
| `DTFSIZ` | `integer(2)` | Detail | ing Model Folder Sizes |
| `DTFTHK` | `real` | Detail | ing Element Flange Thickn |
| `DTFUNC` | `integer` | Detail | ing Element Functi |
| `DTGALV` | `string(80)` | Detail | ing Galvanization Type |
| `DTGATT` | `real(10)` | Detail | ing Model Attributes Real p |
| `DTGCNT` | `integer` | Detail | ing Element Genera |
| `DTGCOG` | `real(3)` | Gross | Center of Gravity |
| `DTGEND` | `integer` | Detail | ing Element Genera |
| `DTGID` | `integer` | Detail | ing Model geometry identi |
| `DTGLEN` | `integer` | Detail | ing Element Genera |
| `DTGNIF` | `integer` | Bolt H | ole Orientation Mode |
| `DTGRADE` | `string(32)` | Detail | ing Material Grade |
| `DTGRDS` | `element(99)` | Refere | nces to Detailing Job Gr |
| `DTGTRI` | `real(12)` | Detail | ing Creation Tripod |
| `DTGTYP` | `integer` | Detail | ing Element Geomet |
| `DTHDHE` | `real` | Bolt H | eader Height |
| `DTHEIG` | `real` | Detail | ing Element Height |
| `DTHGTH` | `real` | Height |  |
| `DTHOTY` | `integer` | Boltin | g Hole Type |
| `DTIDAT` | `integer(120)` | Detail | ing Model Attributes Intege |
| `DTINAX` | `logical` | Seamli | ne in Axis Direction |
| `DTIT` | `string(32)` | Data T | itle |
| `DTITYP` | `integer` | Detail | ing Element Internal Type C |
| `DTJDSC` | `string(80)` | Detail | ing Job Description |
| `DTJLOC` | `element` | Detail | ing Job Location |
| `DTJNUM` | `string(80)` | Bocad | Detailing Job Number |
| `DTJREV` | `string(80)` | Detail | ing Job Revision |
| `DTLEAD` | `element` | Refere | nce to Lead Part |
| `DTLELE` | `element(5000)` | Datal | Elements list |
| `DTLEN` | `integer` | Detail | ing Element Length |
| `DTLGTH` | `real` | Detail | ing Fabrication Elemen |
| `DTLH` | `real` | Dimens | ion text letter height |
| `DTLHTX` | `string(80)` | Dimens | ion text letter height |
| `DTLLIST` | `word(2000)` | Datal | Attributes List |
| `DTLNAM` | `real` | Detail | ing Item Length after |
| `DTLNGE` | `real` | Detail | ing Item generated Length |
| `DTLPDO` | `element` | Refere | nce to Original main p |
| `DTLPDZ` | `element` | Refere | nces to Additional Part |
| `DTLPHN` | `string(80)` | Detail | ing Person Landline Phone |
| `DTLTST` | `integer(8192)` | Datal | Test attribute |
| `DTMANA` | `string(120)` | Macro | Name |
| `DTMAT` | `string(80)` | Fabric | ation Material |
| `DTMDFD` | `string(19)` | Modifi | ed Date/Time |
| `DTMDST` | `datetime(2)` | Modifi | cation Date |
| `DTMFKE` | `integer` | Detail | ing Element Manufa |
| `DTMFST` | `datetime(2)` | Manufa | cturing Status Date |
| `DTMIND` | `integer` | Bolt C | onnection Proces |
| `DTMKIN` | `string(80)` | Initia | l Mark Number |
| `DTMKPR` | `string(80)` | Previo | us Mark Number |
| `DTMKST` | `string(80)` | Markin | g Status |
| `DTMKTX` | `string(80)` | Mark T | ext |
| `DTMMDE` | `integer` | Detail | ing Element Markin |
| `DTMODD` | `integer` | Detail | ing Element Modifi |
| `DTMODF` | `string(80)` | Modifi | ed by |
| `DTMPAR` | `element` | Refere | nce to original mirror |
| `DTMPHN` | `string(80)` | Detail | ing Person Mobile Phone |
| `DTMPMA` | `real` | Design | temp. max |
| `DTMPMI` | `real` | Design | temp. min |
| `DTMTYP` | `integer` | M3 Con | nection Type |
| `DTNAME` | `string(80)` | Detail | ing Item Name |
| `DTNBEN` | `integer` | Detail | ing Fabrication Item / Quan |
| `DTNCHA` | `integer` | Detail | ing Fabrication Item / Quan |
| `DTNHOL` | `integer` | Detail | ing Fabrication Item / Quan |
| `DTNICO` | `integer` | Detail | ing Fabrication Item / Quan contou |
| `DTNMOD` | `integer` | Detail | ing Fabrication Item / Quan on the Notche |
| `DTNMPO` | `integer` | Detail | ing Fabrication Item / Quan points |
| `DTNNOT` | `integer` | Detail | ing Fabrication Item / Quan |
| `DTNSEA` | `integer` | Number | of Seam Angles |
| `DTNSEC` | `integer` | Number | of Seamline Sectio |
| `DTNSEL` | `integer` | Detail | ing Fabrication Item / Quan supere |
| `DTNSHO` | `integer` | Detail | ing Fabrication Item / Quan |
| `DTNSWE` | `integer` | Detail | ing Fabrication Item / Quan |
| `DTNTYP` | `integer` | Type O | f Detailing Node |
| `DTNUMB` | `integer` | Detail | ing Model Element ident |
| `DTNWWE` | `integer` | Detail | ing Fabrication Item / Quan worksh |
| `DTOF` | `real(2)` | Dimens | ion text offset |
| `DTOFTX` | `string(80)` | Dimens | ion text offset text |
| `DTOHDD` | `real` | Outsid | e Bolt Header Diamet |
| `DTOP` | `real` | Top di | ameter |
| `DTOPOS` | `integer` | Detail | ing Element Order Item N |
| `DTOREL` | `element` | Refere | nce to Original Elemen |
| `DTPARE` | `real` | Plane | Area |
| `DTPART` | `element(10)` | Bolt S | et Component Refere |
| `DTPASI` | `integer` | Side o | f the part (start/ end) t |
| `DTPBOX` | `string(80)` | Detail | ing Model Address Post B |
| `DTPCNO` | `integer` | Number | of raw Contour Points |
| `DTPCNT` | `integer` | Number | of Points |
| `DTPELM` | `element` | Refere | nce to Parent elemen |
| `DTPFAM` | `integer` | Point | Family |
| `DTPMAN` | `element` | Detail | ing Job Project Manage |
| `DTPN` | `integer` | Dimens | ion text pen |
| `DTPOSN` | `integer` | Detail | ing Element Item / Mark N |
| `DTPPO` | `string(100)` | Primar | y painting 1 |
| `DTPPT` | `string(100)` | Primar | y painting 2 |
| `DTPREF` | `string(80)` | Mark N | umber Prefix |
| `DTPRFL` | `integer` | Detail | ing Model Relation Primar |
| `DTPRIM` | `element` | Refere | nce to relation- carryi |
| `DTPRIN` | `string(80)` | Initia | l Profile Type |
| `DTPROT` | `real` | Bolt P | rotrusion |
| `DTPRTS` | `element(100)` | Refere | nces to auxiliary node e |
| `DTPSTL` | `element` | Refere | nce to Parent Elemen |
| `DTPTAR` | `real(1000)` | Points | : [0]=x ; [1]=y ; means |
| `DTPTCN` | `integer` | Bolt S | et Part Count |
| `DTPTSQ` | `integer` | Bolt S | et Part Sequence Number |
| `DTPUNI` | `integer` | Bolt P | acking Unit |
| `DTRA` | `real` | Dimens | ion text radius |
| `DTRADA` | `real` | Detail | ing Element Fillet Radius |
| `DTRADB` | `real` | Detail | ing Element Fillet Radius |
| `DTRADC` | `real` | Detail | ing Element Fillet Radius |
| `DTRATX` | `string(80)` | Dimens | ion text radius text |
| `DTRDAT` | `real(100)` | Detail | ing Model Attributes Real p |
| `DTRE` | `element` | Data s | et reference |
| `DTREAS` | `element` | Refere | nce to element creati |
| `DTRESO` | `integer` | Resolu | tion used to create a poly edge o curve |
| `DTREVH` | `string(80)` | Revisi | on Index History |
| `DTREVI` | `string(80)` | Revisi | on Index |
| `DTRFPA` | `integer` | Detail | ing Element Ref. Inform |
| `DTRFPB` | `integer` | Detail | ing Element Ref. Inform |
| `DTRLEN` | `real` | Factor | y Standard Part Length |
| `DTROOA` | `real` | Detail | ing Element Root Dimens |
| `DTROOB` | `real` | Detail | ing Element Root Dimens |
| `DTROOC` | `real` | Detail | ing Element Root Dimens |
| `DTRPAR` | `element` | Refere | nce to replacement elemen |
| `DTRSUF` | `real` | Real S | urface |
| `DTRTRI` | `real(12)` | Detail | ing Reference Tripod |
| `DTRUSF` | `real` | Rough | Surface |
| `DTRUWG` | `real` | Rough | Weight |
| `DTRWGH` | `real` | REALWe | ight |
| `DTRWHG` | `real` | Detail | ing Element Remain Height |
| `DTSAAS` | `real` | Detail | ing weld throat depth |
| `DTSANG` | `real(10)` | Seamli | ne Section Angles |
| `DTSAOS` | `real` | Detail | ing weld throat depth |
| `DTSCAL` | `string(80)` | Detail | ing Scalding |
| `DTSCAN` | `logical` | Bolt H | ole Investigation Flag |
| `DTSCST` | `string(80)` | Detail | ing Job System Data / Cust |
| `DTSDTE` | `datetime(2)` | Detail | ing Start Date |
| `DTSECN` | `integer` | Seamli | ne Section Number |
| `DTSECS` | `element(100)` | Refere | nce to parts in the relati |
| `DTSEFL` | `integer(100)` | Detail | ing Model Relation Second |
| `DTSET` | `logical` | Bolt S | et Flag |
| `DTSHTR` | `element` | Refere | nce to Shop Transf |
| `DTSIZE` | `integer` | Detail | ing Model BLOB Size |
| `DTSKEY` | `string(32)` | Bolt S | tandard Key |
| `DTSLEN` | `real` | Saw Le | ngth |
| `DTSMAT` | `logical` | Includ | e Bolt Mounting Materi |
| `DTSNUM` | `integer` | Sectio | n number (cladding) |
| `DTSPOS` | `integer` | Start | number for marking |
| `DTSRCE` | `element` | Refere | nce to Source Elemen |
| `DTSTAT` | `integer` | Detail | ing Element Status |
| `DTSTRE` | `string(80)` | Detail | ing Model Street Addres |
| `DTSTTE` | `string(80)` | Detail | ing Address Element State |
| `DTSTYP` | `integer` | Detail | ing Element Shape Type C |
| `DTSURF` | `string(32)` | Detail | ing Surface Treatm |
| `DTTAPE` | `integer` | Tapere | d Washer Mode |
| `DTTCNT` | `integer` | Detail | ing Element Total Count |
| `DTTDAT` | `element(20)` | Bocad | Detailing Element Text |
| `DTTKMO` | `integer` | Detail | ing Element Model ID |
| `DTTLNU` | `integer` | Number | of truck load |
| `DTTOTL` | `real` | Total | Bolt Length |
| `DTTSNR` | `integer` | Detail | ing Element Phase Number |
| `DTTXNX` | `integer` | Fabric | ation model elemen number |
| `DTTXRF` | `element(100)` | Bocad | Detailing Text Refere |
| `DTTXT` | `string(320)` | Bocad | Detailing text data |
| `DTTYPE` | `integer` | Detail | ing model item type |
| `DTUARE` | `real` | Rubber | Band Area |
| `DTUKST` | `datetime(2)` | Docume | ntation ID Date |
| `DTUL` | `string` | Dimens | ion text underl |
| `DTULKE` | `integer` | Detail | ing Element Docume |
| `DTUNIT` | `integer` | Bolt D | imension Units |
| `DTUWGH` | `real` | User w | eight (rubberband method |
| `DTVALI` | `integer` | Detail | ing Feature Value Index |
| `DTVBKY` | `string(32)` | Bolt F | astener Table Key |
| `DTVERS` | `integer` | Job El | ement Version Number |
| `DTVIDD` | `logical` | Bolt a | lways as 3D body |
| `DTVOLF` | `real` | Volume | 3D M |
| `DTVOLM` | `real` | Assemb | ly volume |
| `DTVOLR` | `real` | Volume | 3D R |
| `DTWDTH` | `real` | Width |  |
| `DTWGHT` | `real` | Weight |  |
| `DTWIDT` | `real` | Detail | ing Element Width |
| `DTWLDR` | `element` | Refere | nce to a weld defini |
| `DTWLRF` | `element` | Refere | nce to Weld Elemen |
| `DTWLWB` | `real` | Detail | ing Fabrication Item / Part angle |
| `DTWLWT` | `real` | Detail | ing Fabrication Item / Part angle |
| `DTWLXB` | `real` | Detail | ing Fabrication Item / Part value |
| `DTWLXT` | `real` | Detail | ing Fabrication Item / Part value |
| `DTWRWB` | `real` | Detail | ing Fabrication Item / Part angle |
| `DTWRWT` | `real` | Detail | ing Fabrication Item / Part angle |
| `DTWRXB` | `real` | Detail | ing Fabrication Item / Part value |
| `DTWRXT` | `real` | Detail | ing Fabrication Item / Part value |
| `DTWSIZ` | `real` | Bolt H | eader Wrench Size |
| `DTWTCL` | `string` | Date o | f weight/cog calcul |
| `DTWTHK` | `real` | Detail | ing Element Webbin |
| `DTXR` | `string(2000)` | RTEXT | of detailing text |
| `DTXRGB` | `integer(4)` | RGB di | mension text color |
| `DTXRGP` | `integer(4)` | RGB di | mension text color physic |
| `DTXS` | `string(2000)` | STEXT | of detailing text |
| `DTXT` | `string(2000)` | TTEXT | of detailing text |
| `DTXVEC` | `dir` | De | tailing View Volume X- Ax |
| `DTYVEC` | `dir` | De | tailing View Volume Y- Ax |
| `DTZGRD` | `element` | De | tailing Zone Primary Gr |
| `DTZIPC` | `string(80)` | De | tailing Model Address ZI |
| `DTZNUM` | `integer` | Bo | cad Detailing Zone Nu |
| `DTZPLN` | `element` | De | tailing Zone View Vo |
| `DTZPOS` | `real` | Z | Offset of the view plane |
| `DTZVEC` | `dir` | De | tailing View Volume Z- Ax |
| `DUCTHE` | `real` | De | fault duct height |
| `DUCTSH` | `word` | De | fault duct shape |
| `DUCTWI` | `real` | De | fault duct width |
| `DUNI` | `word` | Di | stance units |
| `DUNION` | `integer` | DR | AFT element union de |
| `DUPLIC` | `element(10000)` | integer    Du | plicates of the current el at |
| `DUTY` | `string(120)` | Du | ty |
| `DVFL` | `logical` | AD | P detail views flag |
| `DVSCL` | `real(500)` | AD | P detail view allowable sc |
| `DVTH` | `real` | AD | P detail views th |
| `DWALLT` | `real` | De | rive wall thickness |
| `DWDIR` | `dir` | Dr | aft world direction for pl |
| `DWGF` | `string(73)` | — | DWG filename (No suffix) |
| `DWID` | `string(1000)` | — | Width offset |
| `DWINSI` | `real` | — | Default Window Sill |
| `DWPOS` | `pos` | — | Draft world position for pline or ppoint |
| `DX` | `string(1000)` | — | Cartesian X offset |
| `DXL` | `string(1000)` | — | Incremental X length |
| `DXYOFF` | `real(2)` | — | DRAW 2D Offset |
| `DY` | `string(1000)` | — | Cartesian Y offset |
| `DYL` | `string(1000)` | — | Incremental Y length |


## Attribute E

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `E` | `real` | — | Position easting |
| `EASTING` | `pos` | — | Easting part expressed as a position |
| `ECADAV` | `string(500)` | — | Attribute Driven Symbol - Attribute Value |
| `ECADST` | `element(500)` | — | Engineering Canvas Symbol Templates |
| `ECBSRE` | `element` | — | Engineering canvas backing sheet reference |
| `ECCE` | `pos` | — | Eccentricity (steelwork) |
| `ECCFR` | `element` | — | Engineering canvas connection from |
| `ECCJ` | `pos` | — | Eccentricity of joint (steelwork) |
| `ECCPDR` | `element` | — | Engineering canvas connection point type definition reference |
| `ECCPRE` | `element` | Engine | ering canvas connec refere |
| `ECCPTR` | `element` | Engine | ering canvas connec templa |
| `ECCTO` | `element` | Engine | ering canvas connec |
| `ECDCTY` | `integer` | Engine | ering Canvas drawin |
| `ECDER` | `element(1000)` | Engine | ering canvas draw entity |
| `ECDFLR` | `element` | Engine | ering Canvas Defaul |
| `ECDNAM` | `string(120)` | Engine | ering Canvas displa |
| `ECGHPA` | `real(3)` | Engine | ering Canvas Grid Horizo |
| `ECGHST` | `string(25)` | Engine | ering Canvas Grid Horizo |
| `ECGHTA` | `logical` | Engine | ering Canvas Grid Horizo |
| `ECGHTF` | `integer` | Engine | ering Canvas Grid Horizo |
| `ECGOFF` | `real(2)` | Engine | ering Canvas Grid Offset |
| `ECGPOS` | `real(2)` | Engine | ering Canvas Grid 2D Pos |
| `ECGREF` | `element` | Engine | ering Canvas Grid Refere |
| `ECGSIZ` | `real(2)` | Engine | ering Canvas Grid Size |
| `ECGTXH` | `real` | Engine | ering Canvas Grid Text H |
| `ECGTYP` | `string(120)` | Engine | ering Canvas Glypht |
| `ECGUAR` | `integer` | Engine | ering Canvas Guard Level |
| `ECGVPA` | `real(3)` | Engine | ering Canvas Grid Vertic |
| `ECGVST` | `string(25)` | Engine | ering Canvas Grid Vertic |
| `ECGVTA` | `logical` | Engine | ering Canvas Grid Vertic |
| `ECGVTF` | `integer` | Engine | ering Canvas Grid Vertic |
| `ECIREF` | `element` | Engine | ering Canvas templa |
| `ECLASS` | `word(100)` | Access | Control Element class |
| `ECLCLR` | `string(120)` | Engine | ering Canvas Line Colour |
| `ECLNKF` | `element` | Engine | ering source item refere |
| `ECLNKT` | `element` | Engine | ering target item refere |
| `ECLOFF` | `real(2)` | Engine | ering Canvas Label Offset |
| `ECLTYP` | `string(120)` | Engine | ering Canvas Linety |
| `ECMDEF` | `logical` | Mappin | g Default flag |
| `ECMTDR` | `element(200)` | Engine | ering Canvas Metada |
| `ECNUMB` | `string(50)` | Engine | ering Canvas number |
| `ECOPCR` | `element(500)` | Engine | ering Canvas OPC Refere |
| `ECORSZ` | `real` | Size o | f the earth core |
| `ECPGRP` | `string(120)` | Engine | ering Canvas Palett |
| `ECPIREF` | `element` | Engine | ering Canvas palett |
| `ECPREF` | `element(1000)` | Engine | ering Canvas page refere |
| `ECPURP` | `stringarray(50)` | Drawin | g Purpose |
| `ECREF` | `element` | Engine | ering Canvas refere |
| `ECRFA` | `element(500)` | Equipm | ent connection refere |
| `ECRMSU` | `stringarray(200)` | Engine | ering Canvas Revisi |
| `ECSHLL` | `logical` | Show L | eader Line |
| `ECSHRE` | `element` | Engine | ering canvas sheet refere |
| `ECSREF` | `element` | Engine | ering canvas symbol |
| `ECSTD` | `string(120)` | Engine | ering Canvas Standa |
| `ECSTR` | `element` | Engine | ering canvas symbol refere |
| `ECSTTY` | `string(120)` | Symbol | template type |
| `ECSTVR` | `element` | Engine | ering canvas symbol refere |
| `ECTARR` | `element(500)` | Engine | ering Canvas Types |
| `ECTCL` | `element(1000)` | Engine | ering table cell link refere |
| `ECTCR` | `element(1000)` | Engine | ering table cell refere |
| `ECTFML` | `string(120)` | Engine | ering canvas text formul |
| `ECTPLO` | `logical` | Templa | te only flag |
| `ECTREF` | `element` | Engine | ering Canvas Type Refere |
| `ECTREG` | `real(4)` | Engine | ering canvas templa |
| `EDEREF` | `element` | End re | ference |
| `EDGELE` | `real` | Edge L | ength |
| `EDGGRD` | `logical` | True i | f any edge should be grinde |
| `EDGLST` | `element(1000)` | Edge l | ist |
| `EDISTA` | `real` | Vertic | al Distance of End |
| `EDOCOR` | `integer` | Stores | Document order values |
| `EDOCRF` | `element` | Engine | ering Referenced Docume |
| `EDOCRV` | `string(120)` | Engine | ering Document Revisi |
| `EDPUV` | `pos` | End po | int |
| `EDSREF` | `element` | Start | reference |
| `EFAC` | `string(1000)` | E-fact | or |
| `EFMDM` | `string(240)` | Engine | ering Feed Mappin |
| `EFMFR` | `string(2000)` | Engine | ering Feed Mappin |
| `EFMFUN` | `string(120)` | Engine | ering Feed Mappin |
| `EFMINC` | `logical` | Engine | ering Feed Mappin |
| `EFMTO` | `string(2000)` | Engine | ering Feed Mappin |
| `EFOR` | `real(3)` | End fo | rce vector compon |
| `EIMPED` | `real` | Earth | impedance |
| `ELCXRF` | `element(500)` | Re | turn reference from CA EL |
| `ELDATA` | `integer(8192)` | da | ta |
| `ELDSZ` | `integer` | Da | taSize |
| `ELECRE` | `logical` | integer    Tr | ue if created since given se |
| `ELECREC` | `logical` | Tr | ue if created since co |
| `ELEDEL` | `logical` | integer    Tr | ue if deleted since given se |
| `ELEDELC` | `logical` | Tr | ue if deleted since co |
| `ELEGAL` | `string(256)` | El | ectrogalvanise |
| `ELEL` | `word(2147483647)` | Ty | pes of elements, in th |
| `ELEMOD` | `logical` | integer    Tr | ue if modified since gi |
| `ELEMODC` | `logical` | Tr | ue if modified since co |
| `ELEPTR` | `integer` | El | emp |
| `ELESZ` | `integer` | Si | ze |
| `ELEVAT` | `real` | El | evation |
| `ELEVID` | `string(20)` | El | evation starting index |
| `ELEVLA` | `string(20)` | La | bel for Elevation grid pl |
| `ELEVV` | `logical` | Is | Elevation View |
| `ELRATI` | `real` | El | ectrical Rating |
| `ELTYPC` | `word` | El | ement type |
| `ELVRSN` | `integer` | El | ement version |
| `EMOM` | `real(3)` | En | d moment components |
| `ENBINF` | `pos` | integer    En | d bend information |
| `ENCODB` | `string` | DB | Encoding |
| `ENDA` | `real` | En | d angle |
| `ENDELE` | `real` | En | d Elevation |
| `ENDOFF` | `real` | Of | fset of the end of se |
| `ENDPOINT` | `integer` | Ca | ble End connection po |
| `ENDPOS` | `pos` | En | d Position |
| `ENDREF` | `element` | Ca | ble End reference |
| `ENDRFARRAY` | `element(100)` | EN | DATUM reference array |
| `ENGCHG` | `logical` | Ch | anged since Issue |
| `ENGDOC` | `element(2147483647)` | Re | ference to related do |
| `ENGLNK` | `element` | En | gineering Element Link |
| `ENGTYP` | `string(2000)` | Da | tasheet engineering ty |
| `ENHOOK` | `string(256)` | En | d hook reference |
| `ENSEQU` | `integer` | En | d Sequence Position of la ex |
| `ENTYCD` | `integer` | Ty | pe code for end of start |
| `ENVBMA` | `real(3)` | Sp | ecified project en |
| `ENVBMI` | `real(3)` | Sp | ecified project en |
| `EPARAM` | `real(6)` | Ev | aluated parameters |
| `EPKDI` | `real` | Pr | oportional distance of en |
| `EPOSTO` | `real` | En | d post tangent offset |
| `EPREPC` | `logical` | Tr | ue if Varying bevel |
| `EPREPV` | `logical` | True i | f V-bevel |
| `EPREPX` | `logical` | True i | f X-bevel |
| `EPREPY` | `logical` | True i | f Y-bevel |
| `EQCLASS` | `string(50)` | Equipm | ent class |
| `EQTYPE` | `string(100)` | Equipm | ent class |
| `EREACT` | `real` | Earth | reactance |
| `EREC` | `integer` | Erecti | on class |
| `EREL` | `integer` | End re | leases (packed) |
| `ERESIS` | `real` | Earth | resistance |
| `ETEX` | `string(1000)` | Exampl | e text |
| `ETMTTL` | `string(120)` | Engine | ering 3D Model Title |
| `EVITXP` | `string(1500)` | Evalua | ted intelligent text for pr |
| `EVITXT` | `string(1500)` | Evalua | ted intelligent text |
| `EVOL` | `real(6)` | Enclos | ing box volume in given |
| `EXBTEX` | `string(1500)` | Expand | ed annotation text |
| `EXCESS` | `real` | Excess |  |
| `EXCLCH` | `string(50)` | Exclus | ion Character List |
| `EXCLEL` | `logical` | Logica | lly deleted from the projec |
| `EXCLEN` | `real(3)` | Length | of excess intervals |
| `EXCLFR` | `logical` | True i | f element claimed from t True f |
| `EXCLFT` | `real` | Excess | on left side of seam |
| `EXCLHI` | `element(5000)` | Primar | y elements in descen claime extrac elemen |
| `EXCLPA` | `logical` | True i | f element claimed to Parent for Pr |
| `EXCLTO` | `logical` | True i | f element claimed to this e Primar |
| `EXCNUM` | `integer(3)` | Number | of excess interv |
| `EXCPRM` | `element(8191)` | Primar | y locations of extrac |
| `EXCRGT` | `real` | Excess | on right side of seam |
| `EXCTLF` | `integer` | Excess | type on left side of seam |
| `EXCTRG` | `integer` | Excess | type on right side of sea |
| `EXDIST` | `real` | Exit T | op Distance |
| `EXDMTX` | `string(1500)` | Expand | ed dimension text |
| `EXECAFTER` | `string(512)` | Exec f | ile after DB propag |
| `EXECBEFORE` | `string(512)` | Exec f | ile before DB propag |
| `EXEXTE` | `real` | Exit E | xtension |
| `EXEXTN` | `real` | Exit E | xtension |
| `EXFI` | `integer` | Extrac | t file number |
| `EXHCNC` | `element(5000)` | As EXT | CNC, but repeat test f |
| `EXHCNN` | `element(5000)` | As EXT | CNN, but repeat test f |
| `EXHCON` | `element(5000)` | As EXT | CON, but repeat test f |
| `EXHEIG` | `real` | Exit H | eight |
| `EXHRCN` | `element(5000)` | As EXR | CN, but repeat test for al |
| `EXHRCO` | `element(5000)` | As EXT | RCO, but repeat test f |
| `EXMOC` | `logical` | As EXM | OD but ignoring change attrib lists |
| `EXMOD` | `logical` | True i | f element modified in thi |
| `EXNCLH` | `element(5000)` | Primar | y elements in descen claime |
| `EXOPRM` | `element` | Primar | y location of extrac |
| `EXPA` | `real` | Spot v | alue of expansion coeffi |
| `EXPIRY` | `string(50)` | Protec | ted DB Expiry date |
| `EXPLTX` | `string(1500)` | Expand | ed projection line text |
| `EXPMOC` | `logical` | As EXP | MOD but ignoring change attrib lists |
| `EXPMOD` | `logical` | True i | f primary and elemen descen modifi |
| `EXPRESSION` | `string(1000)` | PML or | XPath Expression to be |
| `EXPTYPE` | `string(15)` | Expres | sion syntax. Either PML or |
| `EXTALS` | `element(8191)` | Extrac | t ancestors |
| `EXTANT` | `real` | Tolera | nce angle |
| `EXTBOA` | `real` | Extrus | ion branch OD A |
| `EXTBOB` | `real` | Extrus | ion branch OD B |
| `EXTBOD` | `real` | Extrus | ion branch outside diamet |
| `EXTBOX` | `real(6)` | Extend | ed block box |
| `EXTCLS` | `element(8191)` | Extrac | t children |
| `EXTCNC` | `element(5000)` | As EXT | CON but excluding non mo |
| `EXTCNN` | `element(5000)` | As EXT | CON but excluding modifi |
| `EXTCON` | `element(5000)` | Primar | y elements connec from e primar extrac |
| `EXTDES` | `element(8191)` | Extrac | t descendants |
| `EXTDIR` | `string(10)` | Direct | ion of ladder exit |
| `EXTEAA` | `real` | Minimu | m distance from an ext extrus |
| `EXTEAB` | `real` | Minimu | m distance from center next b |
| `EXTEAH` | `real` | Extrus | ion collar height (from the en |
| `EXTEAK` | `real` | Minimu | m distance from an ext end |
| `EXTEHE` | `real` | Height | of extrusion machin |
| `EXTFAM` | `element(8191)` | Extrac | t family |
| `EXTHI` | `integer` | Locati | on extract number range, |
| `EXTLO` | `integer` | — | Location extract number range, low limit |
| `EXTMAS` | `element` | — | Extract master |
| `EXTMRE` | `element` | — | Extrusion machine reference. |
| `EXTNO` | `integer` | — | Extract number |
| `EXTNSN` | `real` | — | Extension |
| `EXTOFF` | `real` | — | Exit Offset |
| `EXTOWN` | `element` | — | Extract owner |
| `EXTRC` | `string(120)` | — | Name of extract claiming element |
| `EXTRCN` | `element(5000)` | — | As EXTCNN, but applied recursively to each connection |
| `EXTRCO` | `element(5000)` | — | As EXTCON, but applied recursively to each connection |
| `EXTREF` | `element` | — | References to exit level |
| `EXTVOLUME` | `real` | — | Volume for material |
| `EXWIDTH` | `real` | — | Exit Width |
| `EZDI` | `real` | — | End load point in section |


## Attribute F

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `FAAAWT` | `integer` | — | Type of area world |
| `FAAN` | `integer` | — | Skew angle for font file |
| `FAATYP` | `string(20)` | — | Type of area world as enumerated |
| `FABLOC` | `word` | — | Fabrication location |
| `FABRIC` | `integer` | — | Shop or Site fabrication status |
| `FACODE` | `string(100)` | Facod | e |
| `FAILCO` | `integer` | FailC | ond |
| `FAREA` | `string(5)` | Const | ruction area |
| `FASIOW` | `element(500)` | Fabri | cation assembly item refer |
| `FASOWN` | `element(500)` | Fabri | cation assembly refer |
| `FASSEQ` | `integer` | Fabri | cation assembly seque |
| `FASTYP` | `word` | Faste | ner Type |
| `FBCOAT` | `string(256)` | First | base coating |
| `FCACWT` | `integer` | Type | of curve world |
| `FCATYP` | `string(20)` | Type | of curve world as enume |
| `FCDATE` | `integer(2)` | File | creation date |
| `FCENTRE` | `pos` | Cente | r of fillet arc |
| `FCLXSP` | `real(100)` | Spaci | ng between stair fligh the t |
| `FCLYSP` | `real(100)` | Spaci | ng between stair fligh the t |
| `FCMEAS` | `real` | Flang | e correction measu |
| `FCOAT` | `string(256)` | Coati | ng |
| `FCODE` | `string` | Face | code |
| `FCOE` | `real(3)` | Frict | ion coefficient |
| `FCOLOUR` | `integer` | Fill | color |
| `FCONUM` | `integer` | Fill | color number |
| `FCPY` | `element` | Forwa | rd copy reference |
| `FDEPD` | `string(250)` | word    Forma | tted Local Design Prope |
| `FDEPR` | `string(250)` | word    Forma | tted Local Design Prope |
| `FDESIG` | `string(256)` | Faste | ner Designation |
| `FDRA` | `string(32)` | Isome | tric drawing numbe |
| `FEANAM` | `string(80)` | Detai | ling Feature Name |
| `FEASNM` | `string(80)` | Detai | ling Feature Set Name |
| `FEDEXS` | `real(500)` | Feed | excess values |
| `FEMCOL` | `integer` | FEM i | mage object color |
| `FEND` | `pos` | Fille | t arc position |
| `FEQDES` | `string(120)` | From | Equipment Descr |
| `FFCOAT` | `string(256)` | First | finish coating |
| `FFCOLO` | `integer` | Front | -face color |
| `FFCONU` | `integer` | Front | -face color number |
| `FFCRGB` | `integer(4)` | RGB f | ront face color |
| `FFCRGP` | `integer(4)` | RGB f | ront face color physi |
| `FFLEXT` | `real` | Edge | Extension Around Floor |
| `FFPN` | `integer` | Front | -face pen |
| `FFSTREF` | `element` | Front | -face linestyle Refer |
| `FFSTYL` | `integer` | Front | -face linestyle |
| `FGAP` | `real` | First | offset distance |
| `FGRADE` | `string(256)` | Faste | ner material grade |
| `FGRF` | `element` | Refer | ence to boundary faces |
| `FHIER` | `element` | Refere | nces to functional model |
| `FICHOL` | `logical` | Fictit | ious hole |
| `FILCAL` | `string(80)` | FILCAL | (name of cable fill level |
| `FILCHK` | `logical` | FILCHK | (true if fill level check |
| `FILEEX` | `logical` | True i | f DB file exists and is valid |
| `FILENAME` | `string` | DB fil | ename |
| `FILL` | `logical` | DRAFT | user defined symbol |
| `FILLDI` | `word` | Fill d | irection |
| `FILREF` | `element(500)` | Sorted | references to attach ascend level |
| `FILRGB` | `integer(4)` | RGB fi | ll color |
| `FILRGP` | `integer(4)` | RGB fi | ll color physical |
| `FILTOPERATOR` | `string(25)` | Filter | operator |
| `FILTVALUE` | `string(1000)` | Filter | value |
| `FINO` | `integer` | File n | umber |
| `FINPUT` | `string(120)` | Input | by |
| `FIRE` | `real` | Fire r | esistance |
| `FIRERATING` | `string(120)` | Fire r | ating |
| `FISSUE` | `string(12)` | Curren | t pipe spec issue |
| `FITLEN` | `real` | Length | of branch fitting |
| `FIXEDB` | `logical` | FIXEDB | (true if bends are fixed) |
| `FIXLEN` | `logical` | Flag t | o notify if length of the at |
| `FIXT` | `string(12)` | — | Structural fixity |
| `FLALLO` | `real` | — | Flange allowance |
| `FLATYP` | `integer` | — | Flange type |
| `FLCARE` | `real` | — | Floor cover area |
| `FLCSTHICKNESS` | `real` | — | Floor cover thickness |
| `FLCVOL` | `real` | — | Floor cover volume |
| `FLEN` | `string(1024)` | — | External file name |
| `FLENG` | `real` | — | Fastener length |
| `FLEVEL` | `real` | integer | Fill level at route node |
| `FLIM` | `real(3)` | — | Force limit |
| `FLLARE` | `real` | — | Floor layer area |
| `FLLTHK` | `real` | — | Floor layer thickness |
| `FLLVOL` | `real` | — | Floor layer volume |
| `FLNM` | `string(700)` | — | Full name of the element |
| `FLNN` | `string(700)` | — | Name of the element |
| `FLOFFS` | `real` | — | Flare Offset |
| `FLRTYP` | `string(120)` | — | Floor Type |
| `FLTDIR` | `dir` | — | Stairflight Direction |
| `FLTYPE` | `string(120)` | — | File Type |
| `FLUR` | `element` | — | Fluid reference |
| `FLWA` | `logical` | — | DRAFT user defined symbol flow arrow |
| `FMID` | `pos` | — | Middle point of fillet arc |
| `FNAM` | `string(1024)` | — | Filename |
| `FNCAA` | `element` | pos, dir, int | eger    Returns an adjoining area given a point and location vector. |
| `FNCAFP` | `element` | pos, dir, int | eger    Returns the functional area that contains the given point |
| `FNCCD` | `integer` | — | Functional description code |
| `FNCCL` | `element` | pos, dir, int | eger    Returns the closest limit to a point within an area. |
| `FNCCOA` | `pos` | — | Center of Area |
| `FNCLCB` | `real` | — | Length of curve branch |
| `FNCLOB` | `real` | — | Length of boundary |
| `FNCTAR` | `real` | — | Total area |
| `FNCTXT` | `string(80)` | — | Functional description |
| `FNMA` | `string(32)` | — | Standard font file name |
| `FNMB` | `string(32)` | — | Bold font file name |
| `FNTD` | `string(32)` | — | Font directory |
| `FOLDED` | `logical` | — | True if folded |
| `FONT` | `integer` | — | Text font |
| `FONTG` | `integer` | — | GLabel style text font |
| `FONTN` | `string(80)` | — | Font name |
| `FOOTRO` | `real` | — | Foot Room |
| `FORC` | `real(3)` | — | Force vector |
| `FORDAT` | `string(20)` | — | Date Format Definition |
| `FOREIGN` | `string` | — | DB foreign/local |
| `FPATH` | `string(256)` | — | File path |
| `FPEN` | `integer` | — | Fill pen |
| `FPHASE` | `string(50)` | — | Fabrication unit/phase |
| `FPLINE` | `string(32)` | — | Process line number |
| `FPON` | `integer` | — | FROM port number |
| `FPRDE` | `string(250)` | word | Formatted property default |
| `FPROP` | `string(250)` | word    Forma | tted property value from |
| `FRAD` | `real` | Fille | t radius |
| `FRDR` | `string(32)` | Refer | ence drawings |
| `FREF` | `element` | Fitti | ng reference |
| `FREFID` | `integer` | Refer | ence information |
| `FREV` | `string(4)` | Isome | tric drawing revision |
| `FRMSCL` | `real` | Form | scale |
| `FRPO` | `pos` | Eye p | oint |
| `FRSTW` | `element` | word    Refer | ence of first world of given MDB |
| `FRTXTA` | `string(80)` | Free | Text Attribute 1 |
| `FRTXTB` | `string(80)` | Free | Text Attribute 2 |
| `FRTXTC` | `string(80)` | Free | Text Attribute 3 |
| `FRTXTD` | `string(80)` | Free | Text Attribute 4 |
| `FRTXTE` | `string(80)` | Free | Text Attribute 5 |
| `FRTXTF` | `string(80)` | Free | Text Attribute 6 |
| `FRTXTG` | `string(80)` | Free | Text Attribute 7 |
| `FRTXTH` | `string(80)` | Free | Text Attribute 8 |
| `FSETWE` | `real` | Faste | ner Set Weight |
| `FSPMNU` | `integer` | Facto | ry Standard Part Mark |
| `FSPOST` | `real` | Dista | nce to the first post |
| `FSPREF` | `element` | Refer | ence to Factory Stand |
| `FSPTXT` | `string(120)` | Facto | ry Standard Part Text |
| `FSTAND` | `string(256)` | Faste | ner Standard |
| `FSTART` | `pos` | Fille | t start position |
| `FSTAT` | `string(15)` | Fstat | us |
| `FSTNUM` | `integer` | Fill | style number |
| `FSTREF` | `element` | Fill | style Reference |
| `FSTYLE` | `integer` | Fill | style |
| `FSTYNO` | `integer` | Fill | Style Number |
| `FTCDD` | `string(250)` | word    Forma | tted Current Design Prope |
| `FTCDP` | `string(250)` | word    Forma | tted Current Design Prope |
| `FTER` | `string` | First | dimension termi |
| `FTERID` | `integer` | First | terminator ID |
| `FTERSA` | `integer` | Dimen | sion first term. code |
| `FTERSL` | `integer` | Dimen | sion first term. code |
| `FTHICKNESS` | `real` | Stair | Flight Thickness |
| `FTVALS` | `real(1000)` | t Val | ues for nesting compo |
| `FULLEN` | `real` | Total | length of manuf |
| `FULLID` | `string(20)` | Full | ID Plane |
| `FULLT` | `string` | type | of the element |
| `FULSYS` | `string` | Type | of the element, ignor trunc |
| `FUNC` | `string(120)` | Funct | ion |
| `FUNI` | `integer` | FUNIT |  |
| `FURNRF` | `element` | Furni | ture Reference |
| `FWEI` | `real` | Faste | ner Weight |


## Attribute G

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `GANGLE` | `real` | — | General Angle |
| `GAP` | `integer` | — | End cut gap |
| `GAPALL` | `string(1000)` | — | Gap Allowance |
| `GAPF` | `real` | — | First offset distance |
| `GAPI` | `real` | — | Intermediate offset distance |
| `GAPLEN` | `real` | — | Gap length |
| `GAPPOS` | `real(2)` | — | Gap definition points |
| `GAPS` | `real(150)` | — | Projection line gap array |
| `GAPWID` | `real` | — | Gap width |
| `GAREA` | `real` | — | Ceiling Grid Area |
| `GASTIG` | `logical` | — | Gas Tight |
| `GATECO` | `string(120)` | — | Gate Configuration |
| `GATEHEIGHT` | `real` | — | Gate Height |
| `GATESI` | `real(2)` | — | Gate Size |
| `GATEWD` | `real` | — | Gate Width |
| `GBOX` | `real` | — | Box gap |
| `GBOXTX` | `string(80)` | — | Box gap text |
| `GCOF` | `pos` | — | Gross center of gravity |
| `GDEFIN` | `integer(100)` | — | Glyph Outline Definition |
| `GDIAM` | `integer` | — | Glyph Circle Diameter |
| `GENGT` | `word` | — | Geometry type |
| `GENIX` | `string(125)` | — | generation information for x direction |
| `GENIY` | `string(125)` | — | generation information for y direction |
| `GENIZ` | `string(125)` | ge | neration information fo |
| `GENSTR` | `string` | integer    Ge | neral strings |
| `GENTYP` | `word` | Ty | pe of geometry |
| `GEODEP` | `element(5000)` | Di | rect geometrical de |
| `GEOHEIGHT` | `real` | El | evation |
| `GEOM` | `integer` | Ge | ometry Modified- Not di |
| `GFILLD` | `logical` | Gl | yph Primitive Filled Flag |
| `GHEIGH` | `real` | Ga | te Height |
| `GLBSTR` | `logical` | Tr | ue if Project has Global st |
| `GLBVER` | `string(120)` | Gl | obal version string |
| `GLINKP` | `logical` | Pr | oject has Linked Do en |
| `GLOGNM` | `string(256)` | Wi | ndows authentication us |
| `GLYNO` | `integer` | Gl | yph Number |
| `GLYNUM` | `integer` | Gl | yph Number |
| `GLYREF` | `element` | Gl | yph Reference |
| `GMOF` | `real(9)` | Gr | oss moments of inertia |
| `GMRE` | `element` | Ge | ometry set reference |
| `GOBREF` | `element` | Ge | nerating reference |
| `GOFFS` | `integer(2)` | Gl | yph Primitive offset |
| `GOING` | `real(10)` | Tr | ead Going |
| `GOVCOM` | `element` | Ba | seline governing co |
| `GPENH` | `integer` | pe | n for hidden lines |
| `GPENV` | `integer` | pe | n for visible lines |
| `GPKGFI` | `integer(500)` | Ge | neric Package Filter Ex |
| `GPKGRF` | `element` | Ge | neric Package Re |
| `GPPRXS` | `element(500)` | Gr | oup proxy items re |
| `GPRTRE` | `element(100)` | Gp | art reference |
| `GPSTR` | `string(26)` | integer    Ge | neral purpose strings |
| `GRADE` | `real` | St | eel grade |
| `GRAXE` | `integer` | Gr | id axes (internal) |
| `GRDAC` | `integer` | De | tailing Model Grid Ac |
| `GRDAXE` | `string` | Gr | id axes |
| `GRDDIR` | `dir` | Gr | id direction |
| `GRDE` | `real` | Gr | adient of implied tube. Gr ri ho |
| `GRDID` | `string(20)` | Gr | id plane index |
| `GRDLBL` | `string(120)` | Pl | anes Label |
| `GRDLID` | `integer(2)` | Gr | idline Identifier |
| `GRDLXP` | `real` | Pr | oportion along X gr |
| `GRDLYP` | `real` | Pr | oportion along Y gr |
| `GRDNUM` | `integer` | gr | id number |
| `GRDOFF` | `real` | Gr | id offset |
| `GRDPOS` | `pos` | Gr | id Position |
| `GRDREF` | `element` | Gr | id reference |
| `GRDTYP` | `integer` | gr | id type |
| `GRDVIS` | `logical` | — | visibility of the grid |
| `GRDXSP` | `real(10000)` | — | Grid X Spacing |
| `GRDYSP` | `real(10000)` | — | Grid Y Spacing |
| `GRIDNM` | `element` | — | Design grid reference |
| `GRIDNX` | `string(120)` | — | Design element as text |
| `GRIDX` | `string(20)` | — | Grid X position |
| `GRIDXPOS` | `string` | — | X position of the symbol according to the gridding definition |
| `GRIDY` | `string(20)` | — | Grid Y position |
| `GRIDYPOS` | `string` | — | Y position of the symbol according to the gridding definition |
| `GRIDZ` | `string(20)` | — | Grid Z position |
| `GRILEN` | `real` | — | Length of grinding intervals |
| `GRIND` | `real` | — | Grinding info |
| `GRINUM` | `integer` | — | Number of grinding intervals |
| `GRIP` | `real` | — | Minimum distance between bends |
| `GROUPS` | `element(500)` | elemtype, log | ical    GPSETs in which element occurs |
| `GRPRF` | `element` | — | Reference to group (owner of location) |
| `GRPSCR` | `logical` | — | Indicates screened or shielded group |
| `GRPSEQ` | `integer` | — | Core group sequence |
| `GRPTYP` | `string(120)` | — | Text storing group type for cable |
| `GRREL` | `integer` | — | Governing revision relationship type |
| `GRSYS` | `element` | Grid s | ystem reference |
| `GSRF` | `real` | Gross | surface area |
| `GSTR` | `element` | Struct | ural geometry set refere |
| `GTAREAS` | `element(5000)` | All ar | eas whose bounding box fu enclos |
| `GTEXAREAS` | `element(5000)` | All ar | eas that fully or partia |
| `GTGROUPS` | `element(5000)` | All gr | oups that fully enclos |
| `GTHARD` | `element(5000)` | All ro | oms with hard obstru enclos |
| `GTROOM` | `element(5000)` | All ro | oms that fully enclos |
| `GTSOFT` | `element(5000)` | All ro | oms with soft obstru enclos |
| `GTXT` | `string(120)` | Text s | toring rule to genera |
| `GTYP` | `word` | Generi | c type |
| `GVOL` | `real` | Gross | volume |
| `GWEI` | `real` | Gross | weight |
| `GWIDTH` | `real` | Gate W | idth |
| `GXLEN` | `integer` | Glyph | Rectangle XLength |
| `GXYOFF` | `real(2)` | Grid X | Y Offset |
| `GYLEN` | `integer` | Glyph | Rectangle YLength |


## Attribute H

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `HANEXP` | `pos` | — | HANCI expected position wrt the start of the COMPRE |
| `HANGLE` | `real` | — | Hatching Angle |
| `HANICOFFSET` | `real(3)` | — | HANCI INTERNAL CACHED OFFSET |
| `HANICPOSITION` | `real(3)` | — | INTERNAL HANCI cached position |
| `HANOFFSET` | `pos` | — | HANCI cached position offset |
| `HANPOSITION` | `pos` | — | Support cached position |
| `HASCLN` | `logical` | — | Has clones flag |
| `HAZARD` | `string(120)` | — | Hazard |
| `HAZTYP` | `string(120)` | — | Hazard Description |
| `HBLBOX` | `real(6)` | — | Block box |
| `HBOR` | `real` | — | Head bore |
| `HCCNT` | `integer` | — | Header/Extract list changes count |
| `HCNREF` | `element` | — | HullConnection reference |
| `HCOFG` | `pos` | — | computed hull item center of gravity |
| `HCON` | `word` | — | Head connection type |
| `HCORRO` | `real` | — | Head Corrosion |
| `HCREF` | `element(100)` | — | Head connections |
| `HDBREF` | `element` | — | Generic Hull DB Ref |
| `HDCONN` | `element(500)` | — | List of elements connected to branch head |
| `HDIR` | `dir` | — | Head direction |
| `HDIST` | `real` | Ho | rizontal Distance |
| `HDMF` | `element(2)` | IS | ODRAFT Reference Di |
| `HDMT` | `word(2)` | IS | ODRAFT Reference Di |
| `HDREF` | `element(500)` | Li | st of attachment co |
| `HDSHAP` | `word` | Br | anch head duct shape |
| `HDUPLI` | `element(10000)` | integer    Du | plicates of the current el me |
| `HEADCL` | `real` | He | ad Clearance |
| `HEADH` | `real` | He | ad duct height |
| `HEADRO` | `real` | He | adroom |
| `HEADW` | `real` | He | ad duct width |
| `HEATT` | `integer` | He | at Treatment |
| `HEIARR` | `real(10)` | He | ight array |
| `HEID` | `real` | De | fault Height value |
| `HEIF` | `real` | He | ight attractor factor |
| `HEIG` | `real` | He | ight |
| `HEIL` | `real(2)` | He | ight limits (Min/Max) |
| `HEIS` | `logical` | He | ight set flag - ignore He |
| `HEND` | `string` | Co | nnection at other end of |
| `HGHT` | `real` | He | ight |
| `HGSIDE` | `word` | Hi | nge side |
| `HHBO` | `real` | Ha | nger head bore |
| `HHBP` | `pos` | Bo | ttom of hanger head |
| `HHCO` | `word` | Ha | nger head connection type |
| `HHDR` | `dir` | Hange | r head direction |
| `HHGR` | `real` | Hange | r head gradient |
| `HHOD` | `real` | Hange | r head outside diame |
| `HHPO` | `pos` | Hange | r head position |
| `HHTP` | `pos` | Top o | f hanger head |
| `HIERARCHY` | `element(5000)` | Struc | tural connections |
| `HIST` | `integer(120)` | attr    Histo | ry of sessions in which speci made |
| `HLCOLO` | `string` | Hull | Colour |
| `HLIS` | `word(2000)` | List | of all possible types in ownin |
| `HLSTREF` | `element` | Hatch | ing linestyle Refer |
| `HLSTYLE` | `integer` | Hatch | ing linestyle |
| `HMAV` | `real` | Avera | ge humidity |
| `HMMA` | `real` | Maxim | um humidity |
| `HMMI` | `real` | Minim | um humidity |
| `HNCKEY` | `integer` | Hole | Notch Cutout Key |
| `HNODEL` | `element(500)` | Hnode | list |
| `HOFFSE` | `real` | Hatch | ing Line Offset |
| `HOLDES` | `string(120)` | Hole | Designation |
| `HOLGRD` | `logical` | True | if any hole in the part shoul |
| `HOLTYP` | `integer` | Detai | ling Model Hole Type |
| `HOOGEO` | `real(8)` | Hook | definition curve |
| `HOOPSP` | `real` | Hoop | Spacing |
| `HOOTYP` | `integer` | Hook t | ype |
| `HPATNO` | `integer` | Hatch | Pattern Number |
| `HPOS` | `pos` | Head p | osition |
| `HPOSE` | `real` | Eastin | g of head position |
| `HPOSN` | `real` | Northi | ng of head position |
| `HPOSU` | `real` | Upping | of head position |
| `HPREF` | `element` | Head p | oint reference |
| `HRCLE` | `real` | HANDRA | IL CLEAR WIDTH |
| `HREF` | `element` | Head r | eference |
| `HREL` | `logical` | Branch | Member Head relati |
| `HRJUSL` | `word` | Handra | il Justification Line |
| `HROBS` | `real` | Handra | il Obstruction |
| `HROFF` | `real` | Handra | il Offset |
| `HRSDIS` | `real` | Handra | il Start Distance |
| `HRSF` | `element` | Hatch | ruleset reference |
| `HRSTAR` | `real` | Handra | il Start Height |
| `HSARFA` | `element(500)` | HVACSp | ool arrive refere |
| `HSEPAR` | `real` | Hatchi | ng Line Separation |
| `HSLRFA` | `element(500)` | HVACSp | ool leave refere |
| `HSPE` | `element` | Hanger | specification |
| `HSRFA` | `real` | Comput | ed Hull item surfac |
| `HSRO` | `element` | Headro | d specification |
| `HSTU` | `element` | Head t | ube specification |
| `HSTYF` | `element` | Hatch | style reference |
| `HSVLD` | `logical` | HVACsp | ool valid |
| `HTBO` | `real` | Hanger | tail bore |
| `HTBP` | `pos` | Bottom | of hanger tail |
| `HTCO` | `word` | Hanger | tail connection type |
| `HTDR` | `dir` | Hanger | tail direction |
| `HTGR` | `real` | Hanger | tail gradient |
| `HTOD` | `real` | Hanger | tail outside diamet |
| `HTPO` | `pos` | Hanger | tail position |
| `HTPREF` | `element` | Topolo | gy reference |
| `HTTP` | `pos` | Top of | hanger tail |
| `HTYP` | `word` | Hanger | type |
| `HUBRF` | `element` | Refere | nce to the hub locati |
| `HULAPP` | `logical` | Hull a | pplicable Geometry |
| `HULCNT` | `integer` | Size o | f hull array/ collec |
| `HULLDE` | `logical` | True i | f element is a hull design |
| `HULLOB` | `element` | Hull o | bject reference |
| `HULLPR` | `logical` | True i | f element is a hull produc |
| `HULOC` | `string` | Locati | on |
| `HUMIDI` | `real` | Design | Humidity |
| `HUMIRR` | `logical` | True i | f mirrored in local v- axis |
| `HUMVW` | `string` | Model | View |
| `HUREFL` | `logical` | Reflec | ted |
| `HUREPL` | `element` | Replic | a |
| `HUSYMM` | `logical` | Symmet | rical |
| `HVOLU` | `real` | Comput | ed Hull Item volume |
| `HWALLT` | `real` | Head w | all thickness |
| `HWRF` | `element` | Head W | orking Point (Route |
| `HYACTV` | `real` | Actual | value |
| `HYAEAP` | `real` | Aft en | d of Ls aft of AP |
| `HYAIDX` | `real` | Attain | ed index |
| `HYALKT` | `real` | Above | water line KG2 |
| `HYAOPS` | `string(120)` | Active | opening states |
| `HYARAT` | `real` | Area r | atio |
| `HYASSE` | `integer` | Assess | ment |
| `HYAWLA` | `real` | Above | water line area |
| `HYBDAE` | `real` | Aft ex | tent of bay |
| `HYBDFE` | `real` | Fwd ex | tent of bay |
| `HYBEMO` | `real` | Bendin | g moment |
| `HYBHAT` | `real` | Breadt | h of hatch |
| `HYBHFC` | `real` | Bulkhe | ad factor |
| `HYBML` | `real` | BMl |  |
| `HYBMT` | `real` | BMt |  |
| `HYBPPM` | `real` | % of m | ax allowed |
| `HYBRAD` | `real` | Bilge | radius |
| `HYBUIL` | `string(120)` | Builde | r |
| `HYBVAL` | `real` | b valu | e |
| `HYBWL` | `real` | Breadt | h in water line |
| `HYCAST` | `string(120)` | Damage | case + state |
| `HYCB` | `real` | Block | coefficient |
| `HYCBWL` | `real` | Block | coefficient calc in water |
| `HYCBX` | `real` | CB inc | luding volume for shell |
| `HYCLAN` | `string(120)` | Class | Number |
| `HYCLET` | `string(120)` | Call l | etters |
| `HYCM` | `real` | Midshi | p area coefficient |
| `HYCMWL` | `real` | Midshi | p area coefficient calc i |
| `HYCOLR` | `integer` | Colour |  |
| `HYCOMP` | `element` | Compar | tment |
| `HYCONA` | `string(120)` | Condit | ion |
| `HYCONB` | `string(120)` | Condit | ion |
| `HYCOND` | `element` | Loadin | g condition |
| `HYCP` | `real` | Prisma | tic coefficient |
| `HYCPCA` | `element(125)` | Compar | tment category |
| `HYCPER` | `real` | Probab | ilistic permeability values |
| `HYCPID` | `string(120)` | Compar | tment ID |
| `HYCPNA` | `string(120)` | Compar | tment name |
| `HYCPWL` | `real` | Prisma | tic coefficient calc in wat |
| `HYCRCA` | `string(120)` | Critic | al case |
| `HYCRDA` | `string(120)` | Damage | stability criteria |
| `HYCRIT` | `string(120)` | Criter | ion |
| `HYCRIV` | `real` | Critic | al value |
| `HYCRKG` | `real` | Critic | al KGf |
| `HYCROW` | `real` | Crowdi | ng lever |
| `HYCRPR` | `string(120)` | Probab | ilistic damage stabil |
| `HYCSTM` | `string(120)` | Custom | er |
| `HYCTBT` | `string(120)` | Bay Ti | tle |
| `HYCTCT` | `element` | Contai | ner type |
| `HYCTNA` | `string(120)` | Descri | ption |
| `HYCTNO` | `integer` | Number | of containers |
| `HYCTRM` | `real` | Trim |  |
| `HYCTTI` | `string` | Loadin | g set title |
| `HYCTTR` | `string(120)` | Tier |  |
| `HYCTTY` | `string(50)` | Type |  |
| `HYCTYP` | `string(120)` | Intact | /Damaged |
| `HYCVCG` | `real` | Critic | al VCG |
| `HYCVOL` | `real` | Cargo | volume |
| `HYCW` | `real` | Water | plane area coeffi |
| `HYCWWL` | `real` | Water | plane area coeffi line |
| `HYDAP` | `real` | Draft | at AP |
| `HYDATP` | `string(120)` | Damage | type |
| `HYDCID` | `string(120)` | Damage | case |
| `HYDCMP` | `element` | Damage | d compartments |
| `HYDECK` | `real` | Deck |  |
| `HYDEFW` | `real` | Deadwe | ight Fresh water |
| `HYDEIM` | `real` | Deck e | dge immersion |
| `HYDENS` | `real` | Densit | y |
| `HYDESC` | `string(120)` | Descri | ption |
| `HYDESD` | `real` | Design | draft moulded |
| `HYDESW` | `real` | Deadwe | ight Salt water |
| `HYDFP` | `real` | Draft | at FP |
| `HYDHGT` | `real` | Height | (H) |
| `HYDHMX` | `real` | Hmax |  |
| `HYDIFW` | `real` | Displa | cement Fresh water |
| `HYDISP` | `real` | Displa | cement |
| `HYDISW` | `real` | Displa | cement Salt water |
| `HYDLCF` | `real` | Draft | at LCF |
| `HYDLOA` | `string(120)` | Loadin | g condition |
| `HYDLOD` | `real` | Displa | cement at load draft |
| `HYDMAX` | `real` | Draft | marks aft x |
| `HYDMAZ` | `real` | Draft | marks aft z |
| `HYDMCA` | `element` | Damage | cases compar |
| `HYDMFX` | `real` | Draft | marks fwd x |
| `HYDMFZ` | `real` | Draft | marks fwd z |
| `HYDNAM` | `string(120)` | Descri | ptive name |
| `HYDOBU` | `string(120)` | Date o | f build |
| `HYDORI` | `real` | Distan | ce from origin |
| `HYDOWN` | `real` | Downfl | ood |
| `HYDPCA` | `real` | Depth | of cargo |
| `HYDPTH` | `real` | Depth | moulded |
| `HYDRAF` | `real` | Draft |  |
| `HYDRAM` | `real` | Draft | aft at marks |
| `HYDRAP` | `real` | Draft | AP |
| `HYDREF` | `element` | Damage | case ref |
| `HYDRFM` | `real` | Draft | fwd at marks |
| `HYDRFP` | `real` | Draft | FP |
| `HYDS` | `real` | DS |  |
| `HYDTOL` | `real` | Draft | tolerance |
| `HYDWTM` | `real` | Deadwe | ight moment |
| `HYEFUL` | `real` | Weight | full |
| `HYEVCG` | `real` | VCG Em | pty |
| `HYEXTR` | `string(120)` | Hydros | tatics calculated to extrem |
| `HYFAGL` | `string(120)` | Flood | angle |
| `HYFANG` | `real` | Flood | angle |
| `HYFBDP` | `real` | Freebo | ard depth |
| `HYFBRD` | `real` | Freebo | ard |
| `HYFLAG` | `string(120)` | Flag |  |
| `HYFLKE` | `real` | Flat o | f keel |
| `HYFRAM` | `element` | Frames |  |
| `HYFRFR` | `integer` | From f | rame |
| `HYFRLE` | `real` | Freebo | ard length |
| `HYFRSP` | `real` | Frame | spacing |
| `HYFRTY` | `string(120)` | Freebo | ard type |
| `HYFSC` | `real` | FSC |  |
| `HYFSM` | `real` | Free s | urface moment |
| `HYFVCG` | `real` | VCG Fu | ll |
| `HYGCMP` | `element` | Compar | tment |
| `HYGHGT` | `real` | Height | of water above ground |
| `HYGHIN` | `real` | Stabil | ity calculations heel increm |
| `HYGHMO` | `real` | Allowa | ble Grain Heeling Moment |
| `HYGIRD` | `real` | Girder | depth |
| `HYGM` | `real` | GM |  |
| `HYGMT` | `real` | GMt |  |
| `HYGRAN` | `real` | Grain | angle |
| `HYGTON` | `real` | Gross | tonnage |
| `HYGZ` | `real` | GZ |  |
| `HYGZAR` | `real` | Area |  |
| `HYGZMA` | `real` | Max GZ |  |
| `HYGZMD` | `real` | Max GZ | at degrees |
| `HYGZRA` | `real` | GZ-ran | ge |
| `HYHABV` | `real` | Height | above |
| `HYHAFR` | `real` | Heel a | ngle from |
| `HYHAMD` | `real` | Hatch | height over moulde |
| `HYHATO` | `real` | Heel a | ngle to |
| `HYHBDR` | `real` | Heavy | ballast draught |
| `HYHEEL` | `real` | Heel |  |
| `HYHEEM` | `real` | Critic | al Heel moment |
| `HYHGHT` | `real` | Height | KG2 - KG1 |
| `HYHGTH` | `real` | Height |  |
| `HYHINC` | `real` | Balanc | ing tolerance heel increm |
| `HYHMOM` | `real` | Horizo | ntal Moment |
| `HYHOBM` | `real` | Hog be | nding moment |
| `HYHOSA` | `real` | Hog(+v | e)/Sag(-ve) |
| `HYHWLE` | `real` | Heavy | weights lever |
| `HYICGM` | `real` | Int Cr | . GMf |
| `HYICKG` | `real` | Int Cr | . KGf |
| `HYIL` | `real` | IL |  |
| `HYIMO` | `integer` | IMO Nu | mber |
| `HYIMST` | `string(120)` | Immers | ion status |
| `HYISCR` | `string(120)` | Intact | stability criteria |
| `HYISTP` | `string(120)` | Inner | structure type |
| `HYIT` | `real` | IT |  |
| `HYKG` | `real` | KG |  |
| `HYKGF` | `real` | KGf |  |
| `HYKML` | `real` | KML |  |
| `HYKMT` | `real` | KMT |  |
| `HYKN` | `real` | KN |  |
| `HYKTHK` | `real` | Keel p | late thickness |
| `HYLBHS` | `string(120)` | Longit | udinal bulkhead(s) |
| `HYLBP` | `real` | Length | between perpen |
| `HYLCB` | `real` | LCB |  |
| `HYLCF` | `real` | LCF |  |
| `HYLCG` | `real` | LCG |  |
| `HYLGTH` | `real` | Length |  |
| `HYLISD` | `real` | Lighte | st service draft (d0) |
| `HYLLID` | `string(120)` | ID |  |
| `HYLOA` | `real` | Length | over all |
| `HYLOAL` | `string(120)` | Loadli | ne |
| `HYLSEP` | `real` | Longit | udinal separation |
| `HYLSKG` | `real` | Lights | hip KG |
| `HYLSW` | `real` | Lights | hip weight |
| `HYLWAE` | `real` | Aft ex | tent |
| `HYLWFE` | `real` | Fwd ex | tent |
| `HYLWGT` | `real` | Lights | hip weight |
| `HYLWIT` | `string(120)` | Item |  |
| `HYLWL` | `real` | Length | in water line |
| `HYLWWA` | `real` | Weight | aft |
| `HYLWWF` | `real` | Weight | fwd |
| `HYMAXX` | `real` | Max X |  |
| `HYMAXY` | `real` | Max Y |  |
| `HYMAXZ` | `real` | Max Z |  |
| `HYMDMI` | `real` | Mean d | raft at midships |
| `HYMINX` | `real` | Min X |  |
| `HYMINY` | `real` | Min Y |  |
| `HYMINZ` | `real` | Min Z |  |
| `HYMITR` | `integer` | Max nu | mber of iterations |
| `HYMNGR` | `string(120)` | Manage | r |
| `HYMTC` | `real` | MTC |  |
| `HYMVCG` | `real` | Minimu | m VCG |
| `HYMVOL` | `real` | Moulde | d volume |
| `HYNBDR` | `real` | Normal | ballast draught |
| `HYNTON` | `real` | Net to | nnage |
| `HYNVSF` | `real` | neg ve | shear force |
| `HYOFAP` | `real` | Origin | from AP |
| `HYOFNR` | `string(120)` | Offici | al number |
| `HYOPHG` | `real` | Openin | g height |
| `HYOPNS` | `string(120)` | Openin | gs |
| `HYPASS` | `string(120)` | Pass? |  |
| `HYPAWT` | `real` | A * wt |  |
| `HYPCTF` | `real` | Percen | tage full |
| `HYPDCK` | `string(120)` | Deck(s | ) |
| `HYPDIA` | `real` | Propel | ler diameter |
| `HYPERM` | `real` | Permea | bility |
| `HYPODC` | `string` | Downfl | ood compartment |
| `HYPOID` | `string` | Positi | on ID |
| `HYPOLO` | `string(120)` | Locati | on |
| `HYPORE` | `string(120)` | Port o | f registry |
| `HYPOSA` | `real` | Positi | on 1 |
| `HYPOSB` | `real` | Positi | on 2 |
| `HYPOSI` | `real` | Positi | on |
| `HYPOSX` | `real` | Positi | on x |
| `HYPOSY` | `real` | Positi | on y |
| `HYPOSZ` | `real` | Positi | on z |
| `HYPOTP` | `integer` | Positi | on type |
| `HYPOXD` | `integer` | Positi | ve x-direction |
| `HYPOYD` | `integer` | Positi | ve y-direction |
| `HYPPSA` | `real` | Pivot | point swing angle |
| `HYPPTX` | `real` | Pivot | point x-pos |
| `HYPPTY` | `real` | Pivot | point y-pos |
| `HYPPTZ` | `real` | Pivot | point z-pos |
| `HYPRIM` | `real` | Propel | ler required immers |
| `HYPRLA` | `real` | Propel | ler location fwd of AP |
| `HYPRP` | `real` | p |  |
| `HYPRR` | `real` | r |  |
| `HYPRS` | `real` | s |  |
| `HYPRV` | `real` | v |  |
| `HYPRVW` | `real` | p*r*v* | wt |
| `HYPRWT` | `real` | wt |  |
| `HYPSHH` | `real` | Propel | ler shaft height |
| `HYPTHK` | `real` | Shell | plate thickness |
| `HYPVSF` | `real` | pos ve | shear force |
| `HYRAKE` | `real` | Rake o | f keel |
| `HYRARE` | `real` | Requir | ed Area |
| `HYREGI` | `string(120)` | Region |  |
| `HYRFLR` | `real` | Rise o | f floor |
| `HYRIDX` | `real` | Requir | ed index |
| `HYRULE` | `real` | Rule l | ength |
| `HYSABM` | `real` | Sag be | nding moment |
| `HYSARE` | `real` | Shifte | d Area |
| `HYSBDL` | `real` | Subdiv | ision Length (Ls) |
| `HYSBDR` | `real` | Slammi | ng Draught Full Ballas |
| `HYSCOR` | `real` | Correc | tion |
| `HYSDLE` | `real` | Subdiv | ision length (Ls) |
| `HYSDLL` | `real` | Subdiv | ision Load line (ds) |
| `HYSEDR` | `real` | Slammi | ng draught empty ballas |
| `HYSEPD` | `real` | Design | speed |
| `HYSFBD` | `real` | Summer | Freeboard |
| `HYSHFO` | `real` | Sheari | ng force |
| `HYSHNA` | `string(120)` | Ship N | ame |
| `HYSHTP` | `string(120)` | Ship T | ype |
| `HYSLCG` | `real` | Shifte | d LCG |
| `HYSLOP` | `real` | Slope |  |
| `HYSNOT` | `string(10)` | Note o | n setting and conten |
| `HYSOUN` | `real` | Soundi | ng |
| `HYSPER` | `real` | Permea | bility |
| `HYSPPM` | `real` | % of m | ax allowed |
| `HYSTAP` | `integer` | AP is | at station |
| `HYSTAT` | `real` | Statio | ns |
| `HYSTCG` | `real` | Shifte | d TCG |
| `HYSTFP` | `integer` | FP is | at station |
| `HYSTGZ` | `integer` | Steppe | d GZ curve |
| `HYSTOH` | `real` | Stern | overhang |
| `HYSULD` | `real` | Summer | load draft |
| `HYSUZO` | `string(120)` | Sub Zo | ne |
| `HYSVAL` | `real(10)` | s-valu | e |
| `HYSVCG` | `real` | Shifte | d VCG |
| `HYTBHA` | `string(120)` | Transv | erse bulkhead aft |
| `HYTBHF` | `string(120)` | Transv | erse bulkhead fwd |
| `HYTCB` | `real` | TCB |  |
| `HYTCF` | `real` | TCF |  |
| `HYTCG` | `real` | TCG |  |
| `HYTEMP` | `real` | Temper | ature |
| `HYTFSM` | `real` | Total | free surface |
| `HYTHMO` | `real` | Trimme | d Horizontal Moment |
| `HYTLIQ` | `real` | Total | hatch length inside L/4 |
| `HYTMOM` | `real` | Transv | erse moment |
| `HYTORS` | `real` | Torsio | n moment |
| `HYTOWL` | `real` | Towing | lever |
| `HYTPC` | `real` | TPC |  |
| `HYTRIM` | `real` | Trim |  |
| `HYTSEP` | `real` | Transv | erse separation |
| `HYTTOL` | `real` | Trim t | olerance |
| `HYTURN` | `real` | Turnin | g lever |
| `HYTVMO` | `real` | Trimme | d Vertical Moment |
| `HYTYPE` | `string(120)` | Type |  |
| `HYUHMO` | `real` | Untrim | med Horizontal Moment |
| `HYULKO` | `real` | Under | water line KG1 |
| `HYULLA` | `real` | Ullage |  |
| `HYUVMO` | `real` | Untrim | med Vertical Moment |
| `HYUWLA` | `real` | Under | water line area |
| `HYVARM` | `real` | Vertic | al Area Moment |
| `HYVCB` | `real` | VCB |  |
| `HYVCG` | `real` | VCG |  |
| `HYVMOM` | `real` | Vertic | al Moment |
| `HYVOID` | `real` | Void d | epth |
| `HYVOLU` | `real` | Volume |  |
| `HYVSEP` | `real` | Vertic | al separation |
| `HYVVAL` | `real` | v valu | e |
| `HYWADE` | `real` | Sea wa | ter density |
| `HYWDTH` | `real` | Width |  |
| `HYWEIT` | `real` | Weight |  |
| `HYWEMP` | `real` | Weight | empty |
| `HYWGHT` | `real` | Weight |  |
| `HYWIND` | `real` | — | Wind lever |
| `HYWLHG` | `real` | — | Water line heights |
| `HYWLLE` | `real` | — | Waterline length |
| `HYWLRA` | `real` | — | WL Radius |
| `HYWODH` | `real` | — | Water on deck height |
| `HYWODS` | `real` | — | Water on deck significant wave height |
| `HYWPA` | `real` | — | WPA |
| `HYWSA` | `real` | — | WSA |
| `HYWTSU` | `real` | — | Wetted surface |
| `HYYAFT` | `real` | — | y-aft |
| `HYYANO` | `integer` | — | Yard number |
| `HYYFWD` | `real` | — | y-fwd |
| `HYZONE` | `string(120)` | — | Zone |
| `HZAXI` | `dir` | — | head Z axis |


## Attribute I

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `IAKEY` | `integer` | — | Integer attribute key |
| `IALIGN` | `integer` | — | Integer vertical alignment |
| `IBLNAM` | `string` | — | Name of idealized block |
| `ICAT` | `element` | — | Insulation catalog reference |
| `ICLASS` | `string(120)` | — | Interference class |
| `ICLMO` | `integer` | — | Centerline mode as integer |
| `ICMPID` | `integer` | — | Instance component identity |
| `ICON` | `string(120)` | ICON |  |
| `ICONL` | `string(120)` | ICONL |  |
| `ICONN` | `integer` | COMMS | connection type (0/1 = |
| `ICONS` | `string(120)` | ICONS |  |
| `ICOTYP` | `string(300)` | Icon u | sed for element |
| `ICURF` | `integer` | Intege | r curve fitting code: 1 defa |
| `IDENT` | `string` | Panel | identification string |
| `IDET` | `element` | Insula | tion detail text refere |
| `IDFLA` | `integer` | Intege | r radial dimension type f |
| `IDLABL` | `real` | Length | of label idle moveme |
| `IDLELN` | `real` | Length | of idle movement |
| `IDLFAC` | `real` | Idle m | ovement factor |
| `IDLFG` | `integer` | Intege | r linear/angular dimens |
| `IDLIEV` | `element(10000)` | Evalua | ted list of idlist elemen |
| `IDLL` | `real(3)` | Burnin | g idle length |
| `IDLLEN` | `real(2)` | Non-bu | rning idle length |
| `IDLN` | `element` | Drawli | st name reference |
| `IDLX` | `string(120)` | Drawli | st name (as text) |
| `IDNM` | `element` | Design | data or catalog compon |
| `IDNX` | `string(120)` | Design | data or catalog compon |
| `IDPLAN` | `string(20)` | ID Pla | ne |
| `IDPREF` | `string(20)` | ID Pre | fix |
| `IDRT` | `string(2000)` | Insula | tion detail RTEXT |
| `IDSPU` | `integer` | Specif | ied unique identifier |
| `IDST` | `string(2000)` | Insula | tion detail STEXT |
| `IDSTY` | `integer` | Intege | r radial dimension style |
| `IDTAN` | `integer` | Intege | r dimension text angle |
| `IDTANA` | `integer` | Intege | r dim. text angle flag s |
| `IDTANL` | `integer` | Intege | r dim. text angle flag s |
| `IDTANR` | `integer` | Intege | r dim. text angle flag s |
| `IDTER` | `integer` | Intege | r dimension termin |
| `IDTFL` | `integer` | Intege | r dimension text radius |
| `IDTT` | `string(2000)` | Insula | tion detail TTEXT |
| `IDTUL` | `integer` | Intege | r dimension text underl |
| `IFCUID` | `string(160)` | Univer | sally unique identi source |
| `IFTER` | `integer` | Intege | r first dimension termin |
| `IGAP` | `real` | Interm | ediate offset distan |
| `IGNBRK` | `logical` | Ignore | isometric spec break |
| `IGNDUN` | `logical` | Ignore | DUnion flag |
| `IJUST` | `integer` | Intege | r justification |
| `ILPBUA` | `string(120)` | Return | Integrator Build Area d Limit |
| `ILPDLB` | `string(50)` | Integr | ator Area Limit Point |
| `ILPOFF` | `real` | Integr | ator Area Limit Point |
| `ILPPOI` | `integer` | Integr | ator Area Limit Point |
| `ILPSCH` | `element` | Integr | ator Area Limit Point |
| `ILPULB` | `string(50)` | Integr | ator Area Limit Point |
| `ILSHA` | `integer` | Leader | shape code |
| `ILTER` | `integer` | Intege | r label terminator code |
| `IMAT` | `element` | Insula | tion material text refere |
| `IMGDAT` | `integer(8192)` | Image | data |
| `IMGSCA` | `real` | Image | scale |
| `IMPED` | `string(1000)` | Impeda | nce |
| `IMXT` | `string(2000)` | Insula | tion material XTEXT |
| `IMYT` | `string(2000)` | Insula | tion material YTEXT |
| `IMZT` | `string(2000)` | Insula | tion material ZTEXT |
| `INCANG` | `real(100)` | Inclin | ation angles |
| `INCBOR` | `real` | Inch N | ominal Bore |
| `INCFLU` | `element(500)` | Additi | onal elements to includ |
| `INCL` | `real` | Inclin | ation angle |
| `INCPRO` | `element(500)` | Additi | onal elements to includ propag |
| `INCWRK` | `logical` | Increm | ent at working revisi |
| `INFA` | `string(120)` | Client | info - Project Name |
| `INFB` | `string(120)` | Comme | nt - Project Messa |
| `INFG` | `logical` | Insul | ation flag |
| `INFOTE` | `string(120)` | Infot | ext |
| `INHSRC` | `element` | attr    Inher | ited source att |
| `INIVAL` | `element` | Initi | al Value |
| `INLEN` | `real` | Insul | ation length |
| `INMTRF` | `element` | INSMA | T Reference |
| `INNSHD` | `real` | Inner | sheath diameter |
| `INPINDEN` | `real` | Insul | ation pin density (Area |
| `INPINLEN` | `real` | Pin l | ength |
| `INPINT` | `string(120)` | Insul | ation pin type |
| `INPREF` | `element(100)` | Insta | llation point refer |
| `INPRTR` | `element` | Insid | e paint reference |
| `INRE` | `element` | Insul | ation reference |
| `INRF` | `element` | Array | of Inventory Items |
| `INSARE` | `real` | Insul | ation requirement area |
| `INSC` | `string(120)` | Inspe | ction schedule |
| `INSCOL` | `string(120)` | Insul | ation color |
| `INSHOL` | `logical` | Inser | t hole |
| `INSL` | `logical` | DRAFT | user defined symbo |
| `INSLEN` | `real(200)` | Insta | llation length |
| `INSLEV` | `real` | Insul | ation level |
| `INSMETHOD` | `string(240)` | Insta | llation method of cable |
| `INSMTL` | `element` | Insul | ation material |
| `INSRADIUS` | `real` | I | nside Radius |
| `INSREF` | `element` | R | aw material instance r |
| `INSTLVEL` | `string(240)` | I | nstallation level of cable |
| `INSTNC` | `string` | B | racket instance name |
| `INSTOPTIONS` | `string(2000)` | I | nstallation Options |
| `INSURE` | `element` | R | eference to a INSCMP e |
| `INSUTY` | `string(120)` | I | nsulation type |
| `INSYST` | `element(500)` | R | eference Array of all S |
| `INTEMP` | `real` | I | nsulation temperature |
| `INTHK` | `real` | I | nsulation thickness |
| `INTSEN` | `logical` | I | nstallation Sense - true if c |
| `INTY` | `word` | I | nventory item type |
| `INUDTG` | `logical` | elemtype    I | s in Udtg |
| `INUNIQ` | `logical` | F | lag to notify if attribute is u |
| `INVF` | `element(500)` | A | rray of Inventory Items |
| `INVI` | `logical(500)` | V | isibility state |
| `INVRADIUS` | `logical` | I | nvalid Radius |
| `INVREF` | `logical` | attr        T | /F on attributes that are i |
| `IOCOD` | `integer` | H | ashed origin code |
| `IPAR` | `real(30)` | P | arameters of the i c |
| `IPATNAM` | `integer` | I | nteger pattern Name |
| `IPJUST` | `integer` | I | nteger pjustification |
| `IPMOD` | `integer` | — | Plane mode as integer |
| `IPRBLN` | `integer` | — | Integer primitive blanking flag |
| `IPRE` | `real` | — | Internal pressure |
| `IPTAN` | `integer` | — | Integer projection line text angle flag |
| `IRCOD` | `integer` | — | Integer direction of region vertical on sheet |
| `IRNO` | `string` | — | ISO-IR number |
| `ISALLO` | `logical` | — | True if database is allocated at this location |
| `ISCHGD` | `logical` | — | True if hull model is modified/changed |
| `ISCOPY` | `logical` | — | True if a copy DB |
| `ISDBFR` | `logical` | — | True if database is foreign |
| `ISDBPR` | `logical` | — | True if database is primary for global working |
| `ISDRDB` | `logical` | — | True if database has drawings |
| `ISECPT` | `pos` | word, integer | Intersection point |
| `ISENS` | `integer` | — | Integer sense |
| `ISEXAP` | `logical` | — | True if extract ancestry is primary here |
| `ISEXCP` | `logical` | — | True if all extract children are primary here |
| `ISEXFP` | `logical` | — | True if extract family is primary here |
| `ISEXMP` | `logical` | — | True if extract master is primary here |
| `ISEXOP` | `logical` | — | True if extract owner is primary here |
| `ISEXTR` | `logical` | True i | f an extract |
| `ISFOR` | `logical` | True i | f database is foreign |
| `ISHMTL` | `element` | Inner | sheath material |
| `ISIDES` | `integer` | Frame | side visibility |
| `ISKEYDB` | `logical` | Does u | key incorporate DB number |
| `ISLNKD` | `logical` | True i | f database may have Linked |
| `ISLOADED` | `logical` | True i | f Sheet is loaded |
| `ISMAST` | `logical` | True i | f a Master DB, i.e. top le |
| `ISNAMED` | `logical` | True i | f element is named |
| `ISOHIDDEN` | `logical` | Isohid | den flag |
| `ISOLTD` | `logical` | A flag | determining whethe be iso update |
| `ISPE` | `element` | Insula | tion spec reference |
| `ISPICF` | `logical` | Pictur | e has File |
| `ISPR` | `element` | Insula | tion specification compon |
| `ISPRIM` | `logical` | True i | f database is primar |
| `ISSEXT` | `element(20)` | States | to issue extracts |
| `ISSTENDATUM` | `logical` | Is sta | rt ENDATUM; order depend FIXING |
| `ISSUE` | `logical` | True i | f drawing has been issued |
| `ISUPGD` | `logical` | True i | f Upgrade is requir |
| `ISWORK` | `logical` | True i | f a working extract |
| `ITCOD` | `integer` | — | Hashed origin code |
| `ITLE` | `real` | — | Length of implied tube |
| `ITMTBL` | `integer(2000)` | — | Table linking AITEMS elements to piping components |
| `ITPS` | `pos` | — | Position of implied tube |
| `ITXALIGN` | `integer` | — | Integer text vertical alignment |
| `IVTYP` | `integer` | — | Integer type of design view |
| `IWDORF` | `element(1500)` | — | Weld owners attribute on IWELD elements |
| `IWDOWN` | `integer(8)` | — | Table linking IWELD elements to piping components |


## Attribute J

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `JBLIST` | `element(500)` | — | Junction boxes list |
| `JDIST` | `real` | — | Connector jumping distance |
| `JFRE` | `logical` | — | If YES attached section alignment may change |
| `JLIN` | `word` | — | Joining line |
| `JLNE` | `word` | — | Joining line end |
| `JLNS` | `word` | — | Joining line start |
| `JMAX` | `integer` | — | Maximum joint number in current spool drawing |
| `JNTBEV` | `real(2)` | — | Joint part bevel code |
| `JNTC` | `integer` | — | Joint Code |
| `JNTCOM` | `string(300)` | — | Welded joint comment |
| `JNTNAM` | `string(26)` | We | lded joint name |
| `JNTNUMBER` | `integer` | Jo | int number |
| `JNTORF` | `element(1500)` | Jo | int owners attribute on IJ |
| `JNTOWN` | `integer(8)` | Ta | ble linking IJOINT el co |
| `JNTREF` | `element` | integer    Re | turn reference from Pp |
| `JNTTHK` | `real(2)` | Jo | int part thickness |
| `JNTTSL` | `real` | To | tal welded joint su |
| `JNTTWL` | `real` | To | tal welded joint length |
| `JNTTYP` | `string(26)` | We | lded joint type |
| `JNUM` | `integer(2)` | Ol | d spooler joint number |
| `JOIE` | `element` | En | d joint |
| `JOIP` | `word(2)` | Ol | d spooler joint number pr |
| `JOIS` | `element` | St | art joint |
| `JSONSERVICEID` | `string(120)` | JS | ON service ID of the up Da |
| `JSPOSE` | `pos` | Ju | stifications End point po |
| `JSPOSS` | `pos` | Ju | stifications Start point po |
| `JUMGLY` | `integer` | Ju | mping Glyph |
| `JUSL` | `word` | Ju | stification Pline |
| `JUST` | `string` | Ju | stification |


## Attribute K

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `KNCKL` | `element` | — | Symbolic kuckle line style reference |
| `KNUANG` | `real` | — | Knuckle angle |
| `KNUCKL` | `logical` | — | True if knuckled |


## Attribute L

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `LAAREF` | `element` | — | Laser Area reference |
| `LABDIR` | `string(120)` | — | Name of attribute (or pseudo) to be used for label along direction |
| `LABOFFS` | `real(3)` | — | Label offset |
| `LABPOS` | `pos` | — | Label position |
| `LABSID` | `string(120)` | — | Name of attribute (or pseudo) to be used for label side direction |
| `LABST` | `integer` | — | Number of starts for label signing |
| `LACR` | `logical` | — | Access Control on/off switch |
| `LACTIV` | `logical` | — | True if selectable : false = limbospec |
| `LACTYP` | `string(32)` | — | Labelled action |
| `LADCOL` | `integer` | — | Laser Drawing color |
| `LADRES` | `integer` | — | Laser Drawing Resolution (dpi) |
| `LADRGB` | `integer(4)` | — | RGB laser drawing color |
| `LADRGP` | `integer(4)` | — | RGB laser drawing color physical |
| `LADSTY` | `integer` | La | ser Drawing Style |
| `LALCAB` | `element(500)` | Li | st arriving leaving cables on |
| `LALLAN` | `real` | Le | ave Ppoint allowed an |
| `LAMDIS` | `logical` | Tr | ue if Lam Displ |
| `LAMINA` | `string(12)` | Na | me of first laminate co |
| `LAMINB` | `string(12)` | Na | me of second laminate co |
| `LAMWTH` | `real` | Wi | dth of laminate |
| `LANGUAGE` | `string(35)` | La | nguage tag as described in Id (r fu |
| `LANREF` | `element` | Li | nked annotation el |
| `LASTM` | `string(120)` | attr       Da | te of last modification |
| `LAUTHU` | `logical` | Lo | gin Authentication on/ of |
| `LAVORF` | `element` | Re | ference to laser volume se co la |
| `LAXE` | `ori` | Lo | cal axes |
| `LAYARF` | `element` | An | notation Layer ruleset re |
| `LAYDRF` | `element` | De | sign Layer ruleset re |
| `LAYMOD` | `integer` | Bu | ndle layout mode |
| `LAYMOT` | `string(100)` | integer    La | yout mode text |
| `LAYOUT` | `logical` | TR | UE if element is layout mo |
| `LAYTBF` | `element` | Layer | Table reference |
| `LBBORE` | `logical` | TRUE i | f Minor/Branch bore i table |
| `LBFACT` | `real` | Labell | ing along factor |
| `LBGIMG` | `logical` | Backgr | ound image flag |
| `LBLANG` | `real` | Labell | ing angle |
| `LBLDIR` | `integer` | Labell | ing direction |
| `LBLHGT` | `real` | Labell | ing height |
| `LBLID` | `integer` | Labell | ing reference id |
| `LBLIND` | `logical` | Blind | hole flag |
| `LBLMIR` | `integer` | Labell | ing reflection code |
| `LBLPOS` | `real(2)` | Labell | ing definition point |
| `LBLSID` | `integer` | Labell | ing side of part |
| `LBLTXT` | `string(300)` | Labell | ed text |
| `LBOP` | `pos` | Bottom | of leave pipe |
| `LBOR` | `real` | Leave | bore |
| `LBPOME` | `string(32)` | Labell | ing position method |
| `LBRINF` | `integer` | Refere | nce information for labell |
| `LBRPOS` | `real(2)` | Labell | ing reference point |
| `LBSPOS` | `integer` | Labell | ed symbol text positi |
| `LBSTRF` | `element` | Label | style reference |
| `LBTRAN` | `logical(3)` | True i | f rotation, transl is all |
| `LBTVAL` | `real(2)` | Labell | ing at intervals |
| `LBTYPE` | `string(32)` | Refere | nce information for labell |
| `LCAS` | `integer` | Load c | ase number |
| `LCHA` | `logical` | Chain | flag |
| `LCHKDA` | `datetime(2)` | Date o | f last pipe fabric check |
| `LCIRCR` | `real(8)` | Least | circumscribed rectan |
| `LCKNUT` | `string(32)` | Detail | ing Bolt Set Lock Nut |
| `LCKPSW` | `logical` | Lock p | asswords for genera |
| `LCLAIM` | `logical` | Access | Control Claim flag |
| `LCLM` | `logical` | True i | f element is claimed |
| `LCLMH` | `logical` | True i | f element and hierar |
| `LCLOSE` | `logical` | Is thi | s entity closed? |
| `LCNFA` | `element(500)` | Array | of elements with local |
| `LCON` | `word` | Leave | connection type |
| `LCONFL` | `logical` | Local | Connection Point Flag |
| `LCONSU` | `logical` | Consum | er Extract databa refres |
| `LCORRO` | `real` | Leave | corrosion allowance |
| `LCPOVWRITE` | `logical` | Locati | on Overwrite DB Users |
| `LCPREF` | `element` | Linked | connection point refere |
| `LCTROL` | `logical` | Contro | lled DB Flag |
| `LCUTDI` | `dir` | Lower | Extension Cutting Direct |
| `LDFLT` | `logical` | logica | l default value for a UDA |
| `LDI` | `dir` | Leave | direction |
| `LDIAM` | `real` | Loop | diameter |
| `LDIMPD` | `real(3)` | Linea | r Dimension Proje Pseud |
| `LDISP` | `logical` | Displ | ay property flag for desig prope form |
| `LDPR` | `real` | word    Local | design dataset prope |
| `LDRDIR` | `dir` | Ladde | r Direction |
| `LEAFS` | `real` | Numbe | r of door leafs |
| `LEAHEI` | `real` | Leave | height |
| `LEASHA` | `word` | Leave | PPoint Connection shape |
| `LEAV` | `integer` | Leave | Ppoint |
| `LEAWID` | `real` | Leave | width |
| `LEND` | `logical` | Line | end |
| `LENDTI` | `integer` | Time | out period for comma |
| `LENG` | `real` | Lengt | h |
| `LENINS` | `real` | Initi | al tube length inside bendi |
| `LENOUT` | `real` | Initi | al tube length outside bendi |
| `LENSEG` | `real` | Lengt | h of segment |
| `LETTER` | `string(50)` | Lette | r |
| `LEVE` | `integer(2)` | Drawi | ng level |
| `LEVENL` | `integer` | Time | interval for Event Loop |
| `LEVRFA` | `element(100)` | Refer | ences to levels servi |
| `LEXCES` | `real` | Leave | excess for leave tube |
| `LEXREF` | `element` | Draw | Linked External Refer |
| `LEXTNS` | `real` | Lower | Extension Length |
| `LFADIR` | `dir` | Fligh | t A Direction |
| `LFAOFFSET` | `real` | Landi | ng Flight A Offset |
| `LFBDIR` | `dir` | Landi | ng Flight B Direction |
| `LFBOFFSET` | `real` | Landi | ng Flight B Offset |
| `LFCOLG` | `integer` | Glabe | l style frame color |
| `LFCOLO` | `integer` | Label | frame color |
| `LFCONU` | `integer` | Label | frame color number |
| `LFDP` | `element` | word    Local | design dataset prope |
| `LFGRGB` | `integer(4)` | RGB g | label style frame color |
| `LFGRGP` | `integer(4)` | RGB g | label style frame color |
| `LFPN` | `integer` | Label | frame pen |
| `LFRA` | `logical` | Frame | flag |
| `LFRRGB` | `integer(4)` | RGB l | abel frame color |
| `LFRRGP` | `integer(4)` | RGB l | abel frame color physi |
| `LFSTREF` | `element` | Label | frame linestyle Refer |
| `LFSTYG` | `integer` | GLabe | l style frame line type |
| `LFSTYL` | `integer` | Label | frame linestyle |
| `LGAP` | `real` | Last | offset distance |
| `LGOING` | `real(10)` | Lower | Tread Going |
| `LGRD` | `real` | Leave | Ppoint gradient |
| `LGTYPC` | `logical` | Generi | c type is closed flag |
| `LHBORE` | `logical` | TRUE i | f Major/Header bore i table |
| `LHEA` | `logical` | Logica | l head flag |
| `LHEI` | `real` | Letter | height |
| `LHEITX` | `string(80)` | Letter | height text |
| `LHIDE` | `logical` | Hide f | lag for catalog datase is not |
| `LIGHTI` | `real` | Lighti | ng requirements |
| `LIMI` | `real(6)` | Volume | of interest |
| `LIMNMS` | `stringarray(1000)` | Limit | names |
| `LIMNUM` | `integer` | Order | number of limit |
| `LIMREF` | `element(10)` | Refere | nce limit |
| `LINIT` | `logical` | Locati | on initialization flag |
| `LINKRE` | `element` | Link r | eference |
| `LINKS` | `element(5000)` | Linked | elements |
| `LINKSN` | `integer` | Linked | session on parent extrac |
| `LINKXR` | `element(1000)` | Refere | ncing elements |
| `LISS` | `logical` | True i | f drawing has been issued |
| `LIST` | `word(5000)` | List o | f all possible member |
| `LISTD` | `stringarray(2147483647)` | Generi | c Text List Data Storag |
| `LLCL` | `real` | Leader | line clearance |
| `LLCLTX` | `string(80)` | Leader | line clearance text |
| `LLCOLG` | `integer` | GLabel | style leader color |
| `LLCOLO` | `integer` | Leader | line color |
| `LLCONU` | `integer` | Label | leader color number |
| `LLDIAGRAMS` | `string(2000)` | Line l | ist diagrams |
| `LLDMODE` | `integer` | Leader | line dimension mode ( Off, O |
| `LLEA` | `logical` | Leader | line flag |
| `LLENG` | `real` | Leave | length |
| `LLENTRY` | `logical` | Is a l | ine list entry - true or false |
| `LLFROM` | `string(2000)` | From c | olumn text for a line l |
| `LLGRGB` | `integer(4)` | RGB gl | abel style leader color |
| `LLGRGP` | `integer(4)` | RGB gl | abel style leader color |
| `LLIS` | `word(2000)` | List o | f all possible types in member |
| `LLNRGB` | `integer(4)` | RGB le | ader line color |
| `LLNRGP` | `integer(4)` | RGB le | ader line color physic |
| `LLPN` | `integer` | Label | leader pen |
| `LLSTREF` | `element` | Label | leader linestyle Refere |
| `LLSTYG` | `integer` | GLabel | style leader line type |
| `LLSTYL` | `integer` | Leader | line linestyle |
| `LLTBRANCH` | `element` | Line l | ist tail branch |
| `LLTO` | `string(2000)` | To col | umn text for a line list |
| `LMAXTR` | `integer` | Maximu | m number of retrie |
| `LMDREF` | `element(20)` | Back r | eference to demoli refere |
| `LMDSES` | `integer(10)` | Sessio | n number of back refere packag survey |
| `LMDSYN` | `string(700)` | Synchr | onization state of AVEVA databa |
| `LMERDL` | `logical` | Enable | automatic merge of tra |
| `LMERFAILURE` | `integer` | Number | of days Failed comman Trans |
| `LMERSUCCESS` | `integer` | Number | of days Succes persis |
| `LMERTI` | `string(120)` | Freque | ncy of Auto Merge of Tra |
| `LMIRR` | `logical` | True i | f Mirroring required |
| `LNAME` | `string(21)` | Local | name as stored on templa |
| `LNDLEV` | `real(100)` | Landin | g levels from owning |
| `LNFA` | `element(480)` | Hidden | Reference Array for li |
| `LNGVAR` | `logical` | Langua | ge Variant, is attrib varian attrib |
| `LNKALINVALID` | `element(100)` | All in | valid HANCI refs |
| `LNKALLARRAY` | `element(100)` | All HA | NCI refs |
| `LNKCLS` | `element(500)` | Classe | s referencing a DocLin |
| `LNKDOC` | `element(500)` | DocLin | ks referring to elemen |
| `LNKELE` | `element(500)` | Elemen | ts referencing a DocLin |
| `LNKIRARRAY` | `element(100)` | Invali | d HANCI reference array |
| `LNKPRP` | `word` | TRUE i | f item pointed to by descri propag |
| `LNKREF` | `element` | Refere | nce internal docume sheet) |
| `LNKRFARRAY` | `element(100)` | HANCI | reference array attrib |
| `LNKRX` | `element` | Refere | nce to first location of a l |
| `LNKRY` | `element` | Refere | nce to second locati |
| `LNKUSE` | `word` | Link D | escriptor Usage |
| `LNKVFARRAY` | `logical(10)` | Indivi | dual support valid flags |
| `LNKWV` | `integer` | Link w | eighting value |
| `LNLST` | `string(2000)` | List o | f local names for curren |
| `LNOUPDATE` | `logical` | DB pro | pagation suppre |
| `LNPRXS` | `element(500)` | Proxy | items referring to elemen |
| `LNTP` | `word` | Line t | ype |
| `LOCA` | `string(120)` | Locati | on |
| `LOCDBR` | `element` | Locati | on Db Ref |
| `LOCID` | `string(3)` | Locati | on identifier |
| `LOCK` | `logical` | Logica | l flag which determ attrib locked |
| `LOCKID` | `logical` | Lock I | d |
| `LOCOLO` | `integer` | Loop l | ine color |
| `LOCPR` | `element(1000)` | List o | f LOCs Primary at locati |
| `LOCRF` | `element` | Locati | on reference |
| `LOCRGB` | `integer(4)` | Loop R | GB color |
| `LOCRGP` | `integer(4)` | Loop R | GB color physical |
| `LOCTRC` | `element` | Symbol | ic local trace style refere |
| `LOCTYP` | `integer` | Locati | on |
| `LOD` | `real` | Leave | Ppoint outside diamet |
| `LODIMG` | `logical` | Origin | al image data flag |
| `LOEXTN` | `real` | Loop e | xtension |
| `LOFF` | `logical` | Offlin | e flag |
| `LOGEV` | `logical` | Logica | l value evaluation |
| `LOGFN` | `string(1024)` | COMMS | log file name |
| `LOGLV` | `integer` | COMMS | log file level of detail |
| `LOGMS` | `logical` | COMMS | log file active/ inacti |
| `LOGXP` | `integer(500)` | Logica | l expression |
| `LOHE` | `real` | PLOOP | height - from first PLOOP |
| `LOOS` | `logical` | Loose |  |
| `LORIEN` | `integer` | Loop o | rientation |
| `LOSTYL` | `integer` | Loop l | inestyle |
| `LOWGAP` | `real` | Lower | Gap |
| `LOWPOS` | `pos` | Point | nearest workshop floor |
| `LOWREF` | `element` | Refere | nces to lower exit level |
| `LPASS` | `logical` | DB Pas | sword Flag |
| `LPITCH` | `real` | Ladder | Pitch |
| `LPOS` | `pos` | Leave | position |
| `LPOSE` | `real` | Eastin | g of leave position |
| `LPOSN` | `real` | Northi | ng of leave position |
| `LPOSU` | `real` | Upping | of leave position |
| `LPRCRE` | `logical` | Discip | line Created |
| `LPRDEL` | `logical` | Interd | isciplinary Project Elemen |
| `LPRINT` | `logical` | Printa | bility flag |
| `LPRMOD` | `logical` | Interd | isciplinary Project Elemen |
| `LPROT` | `logical` | Protec | ted DB Flag |
| `LQAANG` | `real` | Angle | between alignment direct and ne |
| `LQANG` | `real` | Angle | between leave Ppoint compon |
| `LQBORE` | `logical` | TRUE i | f leave Ppoint has same b |
| `LQCON` | `logical` | TRUE i | f leave Ppoint has Correc |
| `LQOFF` | `real` | Offset | between leave Ppoint compon |
| `LRBORE` | `logical` | TRUE i | f bores is in reducer table |
| `LREF` | `element` | Link r | eference |
| `LREFO` | `logical` | Databa | se holds Reference data o |
| `LRFLSY` | `logical` | Reflec | table Symbol |
| `LRISE` | `real` | Lower | Tread Rise |
| `LROTSY` | `logical` | Rotata | ble Symbol |
| `LRUNG` | `logical` | Last r | ung flag |
| `LSCSLS` | `logical` | Logica | l sheet changed since |
| `LSCSYM` | `logical` | Scale | With Symbol |
| `LSELEC` | `logical` | True i | f can be set Directly in Des |
| `LSFBR` | `logical` | Spooli | ng marker for leave tube |
| `LSHA` | `string` | Leader | shape code |
| `LSPA` | `real` | Text l | ine spacing factor |
| `LSPATX` | `string(80)` | Text l | ine spacing factor (as text) |
| `LSRO` | `element` | Leave | rod specification |
| `LSTCFL` | `logical` | Column | filtering |
| `LSTCSM` | `logical` | Column | summaries |
| `LSTCSR` | `logical` | Column | items can be sorted |
| `LSTDST` | `integer` | Logica | l Value For List Datash |
| `LSTGP` | `logical` | Show t | he grouping panel |
| `LSTLS` | `logical` | Show l | eading slash for names |
| `LSTMSF` | `logical` | Multi- | select filter style |
| `LSTPIN` | `logical` | Show c | olumn pins in column |
| `LSTPUB` | `logical` | Can be | published to AVEVA |
| `LSTR` | `logical` | Stress | flag |
| `LSTU` | `element` | Leave | tube reference |
| `LSTUIH` | `logical` | Show u | nits in headers |
| `LSTUN` | `logical` | Show U | nset Nulref values |
| `LSTUPD` | `datetime(2)` | Last u | pdated from |
| `LSTVIS` | `logical` | Visibl | e in list dropdown |
| `LSTWTC` | `logical` | Wrap t | ext in cells of a grid |
| `LSTWTH` | `logical` | Wrap t | ext in column header |
| `LSTYNO` | `integer` | Line S | tyle Number |
| `LSTZF` | `integer` | Zoom f | actor |
| `LSVHIS` | `logical` | Databa | se save history from c |
| `LSWID` | `real` | Line S | tyle Width |
| `LSWKEY` | `string(120)` | Line S | tyle Width Key |
| `LTAI` | `logical` | Logica | l tail flag |
| `LTAPER` | `logical` | True i | f Gensec can be tapere |
| `LTBORE` | `logical` | TRUE i | f bores is in branch (tee) |
| `LTCLL` | `real` | Center | line length of leave implie |
| `LTCORR` | `real` | Leave | tube corrosion allowa |
| `LTER` | `string` | Label | terminator code |
| `LTERID` | `integer` | Label | terminator ID |
| `LTHICK` | `real` | Door l | eaf thickness |
| `LTIMEI` | `integer` | Time I | nterval between retrie |
| `LTITL` | `string(120)` | Repres | entation layer title |
| `LTLE` | `real` | Length | of leave implied tube |
| `LTOP` | `pos` | Top of | leave pipe |
| `LTSTLEN` | `real` | Leave | Tube Stock Length |
| `LTWALL` | `real` | Leave | tube wall thickness |
| `LTWREF` | `element` | Leave | tube wall thickness refere |
| `LVAR` | `logical` | Varian | t Flag |
| `LVDWPO` | `logical` | TRUE i | f valid Draft pline point |
| `LVIS` | `logical` | Visibi | lity flag |
| `LVOL` | `real(6)` | Enclos | ing box volume in local |
| `LVQUAL` | `integer` | Laser | Volume Quality |
| `LWAITD` | `integer` | Time i | nterval between re- sendin |
| `LWALLT` | `real` | Leave | wall thickness |
| `LWIDTH` | `real` | Line W | idth |
| `LWP` | `pos` | Lower | Working Point |
| `LYCOL` | `integer` | AutoCA | D Layer Colour |
| `LYCVFR` | `logical` | AutoCA | D Layer Current Viewpo |
| `LYDIR` | `dir` | Leave | Y axis direction on point |
| `LYFRZE` | `logical` | AutoCA | D Layer Freeze flag |
| `LYLOCK` | `logical` | AutoCA | D Layer Lock flag |
| `LYLTYP` | `string(120)` | AutoCA | D Layer LineType |
| `LYLWT` | `real` | AutoCA | D Layer LineWeight |
| `LYNVFR` | `logical` | — | AutoCAD Layer New Viewport Freeze |
| `LYPFG` | `logical` | — | AutoCAD Layer Plotting flag |
| `LYPSTY` | `string(120)` | — | AutoCAD Layer Plotter Style |
| `LYVIS` | `logical` | — | AutoCAD Layer Visibility Flag |
| `LZCOLO` | `integer` | — | Layer 0 color |
| `LZDIR` | `dir` | — | Leave alignment direction |
| `LZERGB` | `integer(4)` | — | RGB layer 0 color |
| `LZERGP` | `integer(4)` | — | RGB layer 0 color physical |
| `LZLSTY` | `integer` | — | Layer 0 linestyle |
| `LZLSTZ` | `integer` | — | Layer 0 linestyle zero is solid |
| `LZNPRI` | `logical` | — | Layer 0 no printability flag |
| `LZNVIS` | `logical` | — | Layer 0 no visibility flag |
| `LZPRIN` | `logical` | — | Layer 0 printability flag |
| `LZVIS` | `logical` | — | Layer 0 visibility flag |


## Attribute M

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `MACHIN` | `element` | — | Machine reference |
| `MACRID` | `string` | — | Clip macro ID |
| `MAINTENANCE` | `real` | — | Maintenance level radiation |
| `MAKER` | `string(100)` | — | Maker |
| `MANBLK` | `string` | — | Name of owner block |
| `MANCOG` | `pos` | Center | of gravity |
| `MANLEN` | `real` | Length | of manual interv |
| `MANLNK` | `element` | Manufa | cturing Element Link |
| `MANNUM` | `integer` | Number | of manual interv |
| `MANPAN` | `string` | Name o | f owner panel |
| `MANTRA` | `real(16)` | Transf | ormation from local coordi |
| `MANTYP` | `string(26)` | Manufa | ctured type e.g. Plane, |
| `MANU` | `string(120)` | Manufa | cturer Name |
| `MANUFR` | `string(120)` | Manufa | cturer |
| `MANWGH` | `real` | Weight |  |
| `MARKNG` | `string(120)` | Text s | toring marking for cable |
| `MARKRF` | `element(100)` | Cable | Mark points |
| `MARPTY` | `integer` | Marine | picture type |
| `MASSPL` | `real` | Mass p | er unit Length |
| `MATANG` | `real` | Materi | al Lay Angle |
| `MATDEN` | `real` | Materi | al density |
| `MATDIR` | `dir` | Materi | al direction |
| `MATID` | `integer` | Materi | al ID |
| `MATLEN` | `real` | Materi | al Length |
| `MATN` | `string(1000)` | Materi | al Note |
| `MATOVE` | `real` | Materi | al Overlap |
| `MATOWNER` | `element` | Maturi | ty Owning Element |
| `MATPURPOSE` | `word` | Materi | al purpose |
| `MATR` | `element` | Materi | al reference |
| `MATTYPE` | `string(100)` | Materi | al type |
| `MATURF` | `element` | Refere | nce of Maturity Level |
| `MATWID` | `real` | Materi | al Width |
| `MATX` | `element` | Materi | al text |
| `MAXA` | `real` | Maximu | m answer |
| `MAXARE` | `real` | Maximu | m area |
| `MAXB` | `real` | Maximu | m bore |
| `MAXCAB` | `integer` | Maximu | m Number of cables |
| `MAXD` | `integer` | DB hie | rarchy depth of lowest elemen |
| `MAXFIL` | `real` | Maximu | m percentage fill level |
| `MAXHUM` | `real` | Maximu | m Humidity |
| `MAXLAY` | `integer` | Maximu | m Layers |
| `MAXLP` | `real` | Maximu | m length of pipe |
| `MAXMIN` | `real(2)` | Maximu | m and minimum values |
| `MAXOD` | `real` | Maximu | m Outer Diameter |
| `MAXPLN` | `pos` | Maximu | m Plane Position |
| `MAXPRE` | `real` | Maximu | m Pressure |
| `MAXREP` | `integer` | Maximu | m number of Repeat |
| `MAXSLO` | `real` | Maximu | m pipe slope |
| `MAXTEM` | `real` | Maximu | m Temperature |
| `MAXU` | `integer` | Maximu | m number of user |
| `MAXVLT` | `real` | Maximu | m voltage |
| `MAXVOL` | `real` | Maximu | m Volume |
| `MAXWAT` | `real` | M | aximum Water Level |
| `MBACK` | `element(10000)` | elemtype    M | embers in reverse order |
| `MBLLEN` | `real` | L | ength of markblasting |
| `MBUFS` | `integer` | P | referred buffer size in M |
| `MCBENT` | `logical` | M | achine bent |
| `MCOLOUR` | `integer` | M | arker color |
| `MCONUM` | `integer` | M | arker color number |
| `MCOU` | `integer` | elemtype    N | umber of Element M |
| `MDBCLS` | `element(1000)` | L | ist of MDBs in which DB i |
| `MDBLS` | `element(1000)` | L | ist of MDBs to which DB b |
| `MDSYSF` | `element(10)` | R | eference Array of Model a |
| `MELRFA` | `element(500)` | A | ll components (non- t |
| `MEMB` | `element(10000)` | elemtype    A | ll members, or members o |
| `MEMDAB` | `element(10000)` | D | abacon members |
| `MEML` | `word` | M | ember line |
| `MEMNAM` | `string(120)` | M | ember name |
| `MEMTYP` | `string(256)` | M | ember type array |
| `MFAR` | `word(50)` | M | odel Function Word a |
| `MFFIND` | `element` | F | ind M f |
| `MFIXREF` | `element` | M | erged Fixing Reference |
| `MFLG` | `logical` | M | aster link flag - SLAVE if F |
| `MFREF` | `element` | M | erged Fixing Reference E |
| `MGRADE` | `string(25)` | M | aterial grade |
| `MHCOUNT` | `integer` | elemtype    N | umber of Elements of G |
| `MIALPF` | `real` | F | irst alpha angle |
| `MIALPS` | `real` | S | econd alpha angle |
| `MIAUXF` | `integer` | A | uxiliary function |
| `MIBAOS` | `real` | B | evel angle other side |
| `MIBATO` | `real` | B | evel angle two other s |
| `MIBATS` | `real` | B | evel angle this side |
| `MIBATT` | `real` | B | evel angle two this side |
| `MIBAWO` | `real` | B | evel angle w other side |
| `MIBAWT` | `real` | B | evel angle w this side |
| `MIBBDE` | `integer` | B | evel is defined |
| `MIBCHO` | `real` | B | evel chamfer height o |
| `MIBCHT` | `real` | B | evel chamfer height this s |
| `MIBCOD` | `real` | B | evel code |
| `MIBCWO` | `real` | B | evel chamfer width o |
| `MIBCWT` | `real` | B | evel chamfer width this s |
| `MIBDOS` | `real` | B | evel depth other side |
| `MIBDTS` | `real` | B | evel depth this side |
| `MIBECT` | `logical` | T | rue if burning end cut |
| `MIBEM` | `real` | B | evel E measure |
| `MIBETF` | `real` | F | irst beta angle |
| `MIBETS` | `real` | Second | beta angle |
| `MIBGAP` | `real` | Edge p | reparation gap |
| `MIBSEG` | `integer` | Burn s | tart end in gap |
| `MIBSHP` | `word` | Burnin | g shape |
| `MIBSPT` | `real(2)` | Point | on edge prep. segmen |
| `MIBTYP` | `integer` | Bevel | type |
| `MIBVAR` | `integer` | Bevel | variant |
| `MICHAM` | `real` | Chamfe | r angle |
| `MICHOA` | `real` | Minimu | m area of cut holes |
| `MICOMM` | `string(256)` | Moveme | nt instruction commen |
| `MICOMP` | `word` | Moveme | nt instruction valid |
| `MICONA` | `real` | Connec | tion angle |
| `MICPWB` | `real` | Distan | ce closest point to web |
| `MIDATE` | `datetime(2)` | Cratio | n date for moveme |
| `MIDERM` | `string(80)` | Materi | al id in the ERM system |
| `MIDESG` | `string(256)` | Design | ation |
| `MIDESN` | `string(256)` | Moveme | nt instruction design |
| `MIDGSD` | `real` | Distan | ce used for special markin |
| `MIDIMS` | `string(256)` | Diment | ion string |
| `MIDIR` | `integer` | Moveme | nt direction |
| `MIDLFT` | `real` | Distan | ce from the left to origin |
| `MIDORI` | `real` | Distan | ce origin of feature |
| `MIDORV` | `real` | Distan | ce to origin from base l |
| `MIDOZP` | `real` | Distan | ce to origin from endcut |
| `MIDP` | `pos` | Sectio | n midpoint (steel |
| `MIDRHO` | `real` | Minimu | m diameter of drille |
| `MIDYAY` | `real` | Distan | ce Y1 and Y2 |
| `MIEANG` | `real` | Minimu | m angle for edge prepar |
| `MIECOD` | `integer` | End cu | t code |
| `MIEMSK` | `integer` | End cu | t param mask |
| `MIEPRM` | `real(9)` | End cu | t parameters |
| `MIETYP` | `integer` | End cu | t type |
| `MIEUDD` | `stringarray(20)` | User d | efined end cut data |
| `MIEUDN` | `string(256)` | Name o | f user defined end cut |
| `MIEUDP` | `real(20)` | User d | efined end cut parame |
| `MIEXCE` | `real` | Excess | on profile end |
| `MIFANG` | `real` | Minimu | m end cut angle flange |
| `MIFEXC` | `real` | Fabric | ation excess |
| `MIFONT` | `integer` | Labeli | ng symbol font |
| `MIFPWB` | `real` | Distan | ce farthest point to web |
| `MIFROT` | `real` | Rotati | on of the feature |
| `MIFTYP` | `integer` | Type c | ode of feature |
| `MIGEVF` | `integer` | Geomet | ry valid for |
| `MIHFAC` | `real` | Positi | on of the nose as a factor |
| `MIHFAD` | `real` | Adjust | factor for the nose |
| `MIHMEA` | `real` | Positi | on of the nose |
| `MIINCA` | `real` | Inclin | ation angle |
| `MIINTA` | `real` | Inters | ecting angle |
| `MILCPT` | `real` | Distan | ce closest point |
| `MILFPT` | `real` | Distan | ce farthest point |
| `MILFTV` | `real` | Distan | ce to v1 |
| `MILORI` | `real` | Distan | ce origin |
| `MILTYP` | `integer` | Label | type |
| `MIMASL` | `string(256)` | Assemb | ly name |
| `MIMATT` | `string(256)` | Markin | g attribute |
| `MIMGSD` | `logical` | Markin | g of gsd |
| `MIMHDR` | `stringarray(10)` | Engine | ering 3D Model File MIME H |
| `MIMIRR` | `logical` | Mirror | ed feature |
| `MIMPSD` | `integer` | Penetr | ating material side |
| `MIMPTH` | `real` | Profil | e thickness |
| `MIMSID` | `real(2)` | Materi | al side |
| `MIMTYP` | `string(256)` | Markin | g type |
| `MIMUTP` | `string(256)` | Markin | g user type |
| `MIMWLD` | `real` | Markin | g of weld |
| `MINAME` | `string(256)` | Moveme | nt instruction name |
| `MINANG` | `real` | Nose a | ngle |
| `MINARE` | `real` | Minimu | m area |
| `MINBEN` | `string(1000)` | Minimu | m Bend Radius |
| `MINFED` | `real(500)` | Minimu | m feed values |
| `MINFIL` | `real` | Min Fi | ll level on Cableway and Ca compon |
| `MINHUM` | `real` | Minimu | m Humidity |
| `MINLNA` | `real` | First | nose length |
| `MINLNB` | `real` | Second | nose length |
| `MINLP` | `real` | Minimu | m length of pipe |
| `MINOD` | `real` | Minimu | m Outer Diameter |
| `MINOSE` | `real` | Length | of the nose |
| `MINPLN` | `pos` | Minimu | m Plane Position |
| `MINPOS` | `integer` | Smalle | st position number of nes |
| `MINPRE` | `real` | Minimu | m Pressure |
| `MINRAD` | `real` | Minimu | m bend radius |
| `MINSLO` | `real` | Minimu | m pipe slope |
| `MINTEM` | `real` | Minimu | m Temperature |
| `MINUMH` | `integer` | Number | of heads |
| `MINVER` | `real` | Minimu | m vertical pipe slope |
| `MINVLT` | `real` | Minimu | m voltage |
| `MINVOL` | `real` | Minimu | m Volume |
| `MIOPEN` | `integer` | Instru | ction contour type |
| `MIPLTH` | `real` | Plate | thickness |
| `MIPMSD` | `string(256)` | Markin | g side |
| `MIPNAM` | `string(256)` | Part n | ame reference |
| `MIPSID` | `word` | Profil | e end |
| `MIPTID` | `integer` | Intern | al part id |
| `MIRADA` | `real` | Radius | of arc part |
| `MIRADB` | `real` | Radius | of arc part |
| `MIRRCD` | `integer` | Nested | part reflection |
| `MIRROR` | `logical` | True i | f mirrored in local v- axis |
| `MISHAP` | `string(256)` | Instru | ction shape |
| `MISIDE` | `word` | Moveme | nt instruction side |
| `MISTSS` | `real` | Stoss |  |
| `MISYMN` | `integer` | Labeli | ng symbol number |
| `MITEXT` | `string(256)` | Label | text |
| `MITHEI` | `real` | Label | text height |
| `MITPOS` | `real(2)` | Label | text position |
| `MITROT` | `real` | Label | text rotation |
| `MITTYP` | `integer` | Label | text type |
| `MIWANG` | `real` | Minimu | m end cut angle web |
| `MIWORK` | `string(256)` | Moveme | nt instruction work t |
| `MLEF` | `real` | Minimu | m length exclud |
| `MLIF` | `real` | Minimu | m length including flange |
| `MLIM` | `real(3)` | Moment | limits |
| `MLLIN` | `logical` | Mll In | clude |
| `MLNCOL` | `integer` | Member | -line color |
| `MLNCON` | `integer` | Member | -line color number |
| `MLNP` | `integer` | Member | line pen |
| `MLNRGB` | `integer(4)` | RGB me | mber line color |
| `MLNRGP` | `integer(4)` | RGB me | mber line color physi |
| `MLNSTREF` | `element` | Membe | r-line linestyle Refer |
| `MLNSTY` | `integer` | Membe | r-line linestyle |
| `MLVREF` | `element` | Refer | ence to the Shared Matur |
| `MMBOR` | `real` | MM No | minal Bore |
| `MNDIRE` | `string(9)` | Main | direction enume |
| `MNDIRI` | `integer` | Main | direction |
| `MNSIDE` | `string(9)` | Main | side enumerated |
| `MNSIDI` | `integer` | Mai s | ide |
| `MODATT` | `logical` | attr    True | if attribute of eleme |
| `MODDBR` | `element` | Model | Db Ref |
| `MODDEL` | `logical` | attr    True | if element can be delet |
| `MODERR` | `string(240)` | attr    Retur | ns the error text that would was m |
| `MODID` | `string(2000)` | Used | by laser driver to ident data |
| `MODNME` | `string(100)` | Model | name |
| `MODREF` | `element(100)` | Model | references |
| `MODSTA` | `string(20)` | Creat | ion Status of Models as en |
| `MODSTY` | `integer` | Model | Creation Style |
| `MODTYP` | `string(50)` | Model | type |
| `MODU` | `string(120)` | Modul | e |
| `MOFI` | `pos` | Momen | t of Inertia |
| `MOME` | `real(3)` | Momen | t |
| `MOULEN` | `real` | Mould | length |
| `MPARE` | `real` | Area |  |
| `MPDAT` | `datetime(2)` | Mass | Calculation perfo |
| `MPEN` | `integer` | Marke | r pen |
| `MPFIND` | `element` | Find | Manuf |
| `MPKGFD` | `element` | Find | Manuf |
| `MPKGFI` | `integer(500)` | Manuf | acturing Package Filte |
| `MPKGRF` | `element` | Manuf | acturing Package Refer |
| `MPREF` | `element` | Mass | Properties Element |
| `MPVOL` | `real` | Volum | e |
| `MPWEI` | `real` | Weigh | t |
| `MRGF` | `logical` | ADP m | erge flag |
| `MRGL` | `word` | ADP m | erge level |
| `MRKLEN` | `real` | Total | marking length |
| `MRKR` | `word` | 3 way | component marker |
| `MRKRGB` | `integer(4)` | RGB m | arker color |
| `MRKRGP` | `integer(4)` | RGB m | arker color physical |
| `MRKST` | `integer` | Numbe | r of starts for marki |
| `MSESS` | `integer` | attr    Last | session number |
| `MSGUID` | `string(160)` | Unive | rsally unique ident sourc |
| `MSTREF` | `element` | Marke | r style Reference |
| `MSTYID` | `integer` | Marker | style |
| `MSTYLE` | `integer` | Marker | style |
| `MSTYSZ` | `real` | Marker | size |
| `MTBE` | `element` | Materi | al tube start. The first exclud whom t or fal |
| `MTCL` | `real` | Materi | al tube centerline length |
| `MTEN` | `element` | Materi | al tube end. The first exclud whom t or fal |
| `MTHICK` | `real` | Materi | al thickness |
| `MTLCHE` | `string(80)` | Matchl | ine text character height |
| `MTLCOL` | `integer` | Matchl | ine color |
| `MTLE` | `real` | Materi | al tube length for TUBI. bend l offlin |
| `MTLFON` | `integer` | Matchl | ine text font |
| `MTLLST` | `integer` | Matchl | ine linestyle |
| `MTLRGB` | `integer(4)` | RGB ma | tchline color |
| `MTLRGP` | `integer(4)` | RGB ma | tchline color physic |
| `MTLSTZ` | `integer` | Matchl | ine line type zero is ByStyl |
| `MTLTCH` | `real` | Matchl | ine text character height |
| `MTLTCO` | `integer` | Matchl | ine text color |
| `MTLVIS` | `logical` | Matchl | ine visibility flag |
| `MTOC` | `word` | Materi | al list control for compon |
| `MTOFF` | `real` | Materi | al offset |
| `MTOH` | `word` | Materi | al list control for head t |
| `MTOL` | `string(1000)` | Materi | al List Length |
| `MTOPARTNUMBERS` | `integer(20)` | Additi | onal spooling item part n |
| `MTOQ` | `string(1000)` | Materi | al take off quantity |
| `MTOR` | `element(20)` | Extra | material list spec refere |
| `MTOT` | `word` | Materi | al list control for compon |
| `MTOX` | `integer(20)` | Old sp | ooler addition items |
| `MTTRGB` | `integer(4)` | RGB ma | tchline text color |
| `MTTRGP` | `integer(4)` | RGB ma | tchline text color physic |
| `MTXR` | `element` | Materi | al text reference |
| `MTXX` | `string(2000)` | XTEXT | of material text |
| `MTXY` | `string(2000)` | YTEXT | of material text |
| `MTXZ` | `string(2000)` | ZTEXT | of material text |
| `MULT` | `real` | Multip | lier factor (unit defini |
| `MVCEXP` | `integer(500)` | Model | View content expres |
| `MVER` | `element` | Refere | nce to Master Vertex |
| `MVMDRF` | `element` | Model | view definition refere |
| `MVVANG` | `real` | Viewin | g angle |
| `MVVBEA` | `real` | Viewin | g bearing |
| `MVVCAO` | `logical` | Clip | plane all off status |
| `MVVCAS` | `logical` | Cap s | tatus |
| `MVVCCO` | `integer` | Cap c | olor |
| `MVVCLS` | `logical` | Clip | status |
| `MVVCOR` | `ori` | Clipb | ox direction |
| `MVVCPO` | `pos` | Clipb | ox position |
| `MVVCTP` | `integer` | Camer | a type |
| `MVVCTR` | `pos` | Viewi | ng center |
| `MVVDIR` | `ori` | Viewi | ng direction |
| `MVVDTO` | `real` | Dista | nce to observer |
| `MVVELV` | `real` | Viewi | ng elevation |
| `MVVLIM` | `real(6)` | View | limits |
| `MVVRAD` | `real` | Viewi | ng radius |
| `MXDRHO` | `real` | Maxim | um diameter of drill |
| `MXEANG` | `real` | Maxim | um angle for edge prepa |
| `MXFANG` | `real` | Maxim | um end cut angle flang |
| `MXWANG` | `real` | Maxim | um end cut angle web |
| `MYINSF` | `element` | Surfa | ce Treatment Refer |
| `MYOUSF` | `element` | Surfa | ce Treatment Refer |
| `MYSRFT` | `element` | word    Surfa | ce Treatment Refer |


## Attribute N

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `N` | `real` | — | Position northing |
| `NACCNT` | `integer` | — | Non-additive changes count |
| `NAMATT` | `string(200)` | — | Naming attribute |
| `NAME` | `string(500)` | — | Name of the element |
| `NAMEDB` | `string` | — | DB name |
| `NAMESQ` | `string(700)` | — | Type sequence number and name of element |
| `NAMETY` | `string(700)` | — | Type and name of the element |
| `NAMN` | `string(500)` | — | Name of the element (without leading slash) |
| `NAMTOL` | `logical` | — | True if name is too long |
| `NAMTYP` | `string(700)` | — | Type and full name of element |
| `NANGLE` | `real` | — | North angle |
| `NANPT` | `integer` | — | Anopoint number |
| `NARE` | `element` | — | Reference to neutral axis |
| `NBEVIT` | `real(2)` | — | Pathtime except starts, I- bevel |
| `NBEVXT` | `real(2)` | — | Pathtime except starts, X- bevel |
| `NBEVYT` | `real(2)` | — | Pathtime except starts, Y- bevel |
| `NBLS` | `integer` | — | Number of blastings |
| `NBORE` | `real` | — | Allowable Nominal Bore |
| `NBRNS` | `integer` | — | Number of burning starts |
| `NCDATE` | `datetime(2)` | — | NC tape date |
| `NCHAR` | `integer` | — | Number of label characters |
| `NCHOLE` | `integer` | — | Number of cut holes |
| `NCOF` | `pos` | — | Nett center of gravity |
| `NCOL` | `integer` | — | Number of columns |
| `NCONNE` | `integer` | — | Mismatched connections.That is, no valid backpointer |
| `NCORSZ` | `real` | — | Size of the neutral core |
| `NCREAT` | `string(256)` | — | Creator of the nest |
| `NCTGAP` | `real` | — | End cut gap or overlap |
| `NCTTYP` | `integer` | — | Type of end cut (Undefined, Sniped, Tight) |
| `NCUTNT` | `integer` | — | Number of cutouts and notches |
| `NCUTOU` | `integer` | — | Number of cutouts |
| `NCUTS` | `integer` | — | Number of cuts in a mitred bend |
| `NDDRHO` | `integer` | — | Number of different diameters of drilled holes |
| `NDFLT` | `real` | — | Numeric default value for a UDA |
| `NDHOLE` | `integer` | — | Number of drilled holes |
| `NDTINT` | `integer(2)` | — | NC tape date |
| `NDTTXT` | `string(22)` | — | NC tape date text |
| `NENDCT` | `integer` | — | Number of cutouts and notches |
| `NGMR` | `element` | — | Negative geometry set reference |
| `NGSD` | `integer` | — | Number of GSDs |
| `NHOLE` | `integer` | — | Number of holes |
| `NIDLAB` | `real` | — | Pathtime except idle time for label |
| `NIDLT` | `real(2)` | — | Pathtime except idle time |
| `NLABEL` | `integer` | — | Number of labels |
| `NLBL` | `integer` | — | Number of labels |
| `NLCOLO` | `integer` | — | Note color |
| `NLCONU` | `integer` | — | Note color number |
| `NLOA` | `real` | — | Nominal load |
| `NLOFF` | `real` | — | Nosing Line Offset |
| `NLPN` | `integer` | — | Note/framing pen |
| `NLSTREF` | `element` | — | Note linestyle Reference |
| `NLSTRT` | `integer` | — | Number of label starts |
| `NLSTYL` | `integer` | — | Note linestyle |
| `NMARK` | `integer` | — | Number of markings |
| `NMBLS` | `integer` | — | Number of markblastings |
| `NMKHOL` | `integer` | — | Number of marked holes |
| `NMOF` | `real(9)` | — | Nett moments of inertia |
| `NNOTCH` | `integer` | — | Number of notches |
| `NOCLIP` | `logical` | — | View no clipping flag |
| `NOCOL` | `integer` | — | Number of pin jig columns |
| `NOCOPY` | `logical` | — | Detailing Feature Copy Flag |
| `NODIMS` | `logical` | — | No Dims Flag |
| `NODREF` | `element` | — | Revision Number Definition |
| `NOECOR` | `integer` | — | Number of earth cores |
| `NOEXTCREATION` | `logical` | — | Location extract create suppression flag |
| `NOFF` | `integer` | — | Number off |
| `NOFG` | `logical` | — | Link constraint inversion flag |
| `NOGRPS` | `integer` | — | Number of groups |
| `NOHLRF` | `logical` | — | NoHLRFlag |
| `NOISEC` | `string(26)` | — | Noise category |
| `NOLNKP` | `logical` | — | Linked Documents distribution disabled |
| `NOMARK` | `logical` | — | True if unmarked |
| `NOMBIN` | `real(200)` | word | List of valid Nominal bores in Inches |
| `NOMBMM` | `real(200)` | word | List of valid Nominal bores in MM |
| `NOMDIA` | `real` | — | Nominal Bolt Shank Diameter |
| `NOMDIR` | `dir` | — | Nominal slope direction |
| `NOMLEN` | `real` | — | Nominal Bolt Shank Length |
| `NOMREF` | `element` | — | Nominal bore table reference |
| `NOMXRF` | `element(500)` | — | Return reference from NOMTAB element to SPECs |
| `NONCOR` | `integer` | — | Number of neutral cores |
| `NOPGS` | `integer` | — | Number of openings |
| `NOPKND` | `integer` | — | Number Part Type: 1=alpha, 2=number, 3=custom |
| `NORM` | `dir` | — | Plane normal |
| `NOROW` | `integer` | — | Number of pin jig rows |
| `NORTHING` | `pos` | — | Northing part expressed as a position |
| `NOSOFF` | `real` | — | Nosing Offset |
| `NOTF` | `element` | — | Cross-reference to NOTE/ VNOT/SYTM |
| `NOTIFY` | `element(20)` | — | Notification states |
| `NOTREAD` | `integer` | — | Number of treads |
| `NPDESC` | `element(5000)` | — | List of non primary offspring |
| `NPILL` | `integer` | — | Number of jig pillars |
| `NPLAOR` | `real(2)` | — | Nested part origin |
| `NPLDFA` | `string(80)` | — | Nesting default file 1 |
| `NPLDFB` | `string(80)` | — | Nesting default file 2 |
| `NPLIST` | `element(500)` | — | All NATPs attached to route node |
| `NPLMIR` | `integer` | — | Quantity mirrored nested plates |
| `NPLNOR` | `integer` | — | Quantity normal nested plates |
| `NPLTOT` | `integer` | — | Total quantity nested plates |
| `NPOS` | `pos` | — | Position in owner |
| `NPOSE` | `real` | — | Easting of position wrt owner |
| `NPOSN` | `real` | — | Northing of position wrt owner |
| `NPOST` | `integer` | — | Number of Posts |
| `NPOSU` | `real` | — | Upping of position wrt owner |
| `NPPT` | `integer` | — | Ppoint number |
| `NPRLEN` | `real` | — | Nested profile length |
| `NPRSID` | `string(26)` | — | Side of nested profile |
| `NPRSTP` | `real(2)` | — | Nested profile starting position |
| `NPRVEC` | `real(2)` | — | Local rotation vector of part |
| `NPSIDE` | `string(80)` | — | Side of nested part |
| `NPXYP` | `real(2)` | — | Position of part(x,y) |
| `NREL` | `integer` | — | Nodal releases |
| `NRGRPS` | `integer` | — | Number of groups |
| `NROW` | `integer` | — | Number of rows |
| `NRPARM` | `integer` | — | Number of rest plate parameters |
| `NRULEE` | `integer` | — | Number of rule inconsistencies on element |
| `NSESS` | `integer` | — | Number of extant sessions |
| `NSIHOL` | `integer` | — | Number of sink holes |
| `NSIZ` | `real` | — | Nominal size |
| `NSLHOL` | `integer` | — | Number of slot holes |
| `NSPE` | `element` | — | Specification for NOZZLE |
| `NSRF` | `real` | — | Nett surface area |
| `NSSLHO` | `integer` | — | Number of different sizes of slot holes |
| `NSTART` | `integer(2)` | — | Number of non-burning starts |
| `NSTD` | `element` | — | Non-standard bolt length (reference to DTAB) |
| `NSTFAC` | `real` | — | Number of starts - factor |
| `NSTRT` | `integer(3)` | — | Number of burning starts |
| `NSTRTI` | `integer(2)` | — | Number of burning starts I-bevel |
| `NSTRTX` | `integer(2)` | — | Number of burning starts X-bevel |
| `NSTRTY` | `integer(2)` | — | Number of burning starts Y-bevel |
| `NSTTYP` | `integer` | — | Nesting Type |
| `NTEXT` | `string(13)` | — | Null text |
| `NTHOLE` | `integer` | — | Number of threaded holes |
| `NTRLEN` | `real` | — | Neutral length |
| `NUCDNA` | `real` | — | Distance to nearest anchor |
| `NUCDNE` | `real` | — | Distance to the Nearest Edge |
| `NUCDNR` | `element(2)` | — | Nearest Adjacent Anchor |
| `NULLRE` | `logical` | attr | T/F on attributes that are null value references |
| `NULVAL` | `string(40)` | — | String to be used if the attribute is blank |
| `NUMB` | `integer` | — | Number |
| `NUMBDB` | `integer` | — | DB number |
| `NUMCOR` | `integer` | — | Number of cores in a cable |
| `NUMD` | `real` | — | Generic Number Data Storage |
| `NUMOFF` | `integer` | — | Number of Sheets in Drawing |
| `NUSED` | `integer` | — | Number of used raw plates |
| `NVIEWF` | `string(73)` | integer | Neutral viewer filename |
| `NVOL` | `real` | — | Nett volume |
| `NWEI` | `real` | — | Nett weight |
| `NWELDS` | `integer` | — | Number of attached welds on a piping component |
| `NXTDBN` | `integer` | — | Next DB number |
| `NXTDBU` | `integer` | — | Next Unique DB number |
| `NXTEXN` | `integer` | — | Next DB extract number |
| `NXTFDB` | `integer` | — | Next DB file and DB number |
| `NXTFLN` | `integer` | — | Next DB file number |
| `NXTHB` | `element` | — | Reference to next (future) hub |
| `NXTKEY` | `integer` | — | next UDA/UDET key |
| `NXTLOCATIONS` | `element(200)` | — | List of online neighbour LOCs for a LOC |


## Attribute O

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `OANG` | `real` | — | Overlay sheet angle |
| `OASCR` | `logical` | — | Indicates screened or shielded |
| `OBCLCO` | `integer` | — | Centerline and Obscured face color |
| `OBCLST` | `integer` | — | Centerline and Obscured face linestyle |
| `OBCOLO` | `integer` | — | Obscured face color |
| `OBCONU` | `integer` | — | Obscured face color number |
| `OBFG` | `logical` | — | Obstruction flag |
| `OBFRGB` | `integer(4)` | — | RGB obscured face color |
| `OBFRGP` | `integer(4)` | — | RGB obscured face color physical |
| `OBJBOOLEAN` | `logical` | — | An RDF Statment Object representing a boolean |
| `OBJCD` | `integer(2)` | — | Object codes |
| `OBJDOUBLE` | `real` | — | An RDF Statment Object representing a double |
| `OBJINTEGER` | `integer` | — | An RDF Statment Object representing an integer |
| `OBJREFERENCE` | `element` | — | Reference to an RDF Statement Object element |
| `OBPN` | `integer` | — | Obscured face pen |
| `OBSDEP` | `real` | — | Obstruction Depth |
| `OBST` | `integer` | — | Obstruction level |
| `OBSTREF` | `element` | — | Obscured face linestyle Reference |
| `OBSTYL` | `integer` | — | Obscured face linestyle |
| `OBSWID` | `real` | — | Obstruction Width |
| `OCCOLO` | `integer` | — | Centerline and Obscured face color |
| `OCCONU` | `integer` | — | Obscured Centerline color number |
| `OCCRGB` | `integer(4)` | — | Obscured Centerline RGB color |
| `OCCRGP` | `integer(4)` | — | Obscured Centerline RGB color physical |
| `OCCTYP` | `string(50)` | — | Occupancy Type |
| `OCCUPA` | `real` | — | Occupancy |
| `OCOD` | `string` | — | Hashed origin code |
| `OCONE` | `integer` | — | Objectcode 1 |
| `OCSTYL` | `integer` | — | Centerline and Obscured face Style |
| `OCTWO` | `integer` | — | Objectcode 2 |
| `OD` | `real` | — | Outer Diameter |
| `ODESP` | `real(100)` | — | Owning design parameters |
| `ODWGF` | `string(73)` | — | Open DWG filename (No suffix) |
| `OFFDIR` | `dir` | — | Offset direction applied to repeat |
| `OFFDIS` | `real` | — | Offset distance applied to repeat elements |
| `OFFSET` | `real` | — | Offset |
| `OFFSRF` | `element` | — | Model offset datum |
| `OFFTOL` | `string(1000)` | — | PPoint offset tolerance |
| `OFFTYP` | `word` | — | Offset type: DELTA, LINEAR, RADIAL |
| `OGDSTS` | `real(25)` | — | Distances to openings |
| `OGOING` | `real` | — | Overall Going |
| `OKCLA` | `logical` | — | True if element may be claimed |
| `OKCLH` | `logical` | — | True if element and hierarchy may be claimed |
| `OKDROP` | `logical` | — | True if element may be dropped |
| `OKDRPH` | `element(5000)` | — | Primary elements preventing hierarchy drop |
| `OKREL` | `logical` | — | True if element may be released |
| `OKRLEH` | `element(5000)` | — | Primary elements preventing hierarchy release |
| `OKRLEX` | `logical` | — | True if element may be extract released |
| `OKRLH` | `logical` | — | True if element and hierarchy may be released |
| `OKUPGD` | `logical` | — | True if a Master DB that can be upgraded here |
| `OLCOLO` | `integer` | — | Outline color |
| `OLCONU` | `integer` | — | Outline color number |
| `OLDKEY` | `integer` | — | Old key |
| `OLENGTH` | `real` | — | Overall length |
| `OLIS` | `word(2000)` | — | List of all possible owner types |
| `OLNRGB` | `integer(4)` | — | RGB outline color |
| `OLNRGP` | `integer(4)` | — | RGB outline color physical |
| `OLOFF` | `real` | — | OffsetLine offset from baseline |
| `OLPEN` | `integer` | — | Outline pen |
| `OLSTREF` | `element` | — | Outline linestyle Reference |
| `OLSTYL` | `integer` | — | Outline linestyle |
| `OMITFG` | `logical` | — | Omission flag |
| `ONPJ` | `pos` | — | Owning neutral point of joint (steelwork) |
| `ONPO` | `real(2)` | — | ONTO Point, position of view in the region |
| `ONPS` | `pos` | — | Owning neutral point of section (steelwork) |
| `OPAR` | `real(100)` | — | Owning parameters - catalog component |
| `OPCLA` | `word` | — | Claim Access Control Operation |
| `OPCOP` | `word` | — | Copy-From Access Control Operation |
| `OPCRE` | `word` | — | Create Access Control Operation |
| `OPCREF` | `element` | — | Offpage connector reference |
| `OPDEL` | `word` | — | Delete Access Control Operation |
| `OPDI` | `dir` | — | Origin plane direction |
| `OPDRO` | `word` | — | Drop Access Control Operation |
| `OPERAT` | `string(26)` | — | Operator |
| `OPEXP` | `word` | — | Export Access Control Operation |
| `OPHEIG` | `real` | — | Operational Height |
| `OPISS` | `word` | — | Issue Access Control Operation |
| `OPLENG` | `real` | — | Operational Length |
| `OPMOD` | `word` | — | Modify Access Control Operation |
| `OPNSIZE` | `real(2)` | — | Opening size |
| `OPOS` | `pos` | — | Overlay sheet position |
| `OPOUT` | `word` | — | Output (DATAL) Access Control Operation |
| `OPREMA` | `real` | — | Operating pres. max |
| `OPREMI` | `real` | — | Operating pres. min |
| `OPTBLO` | `element` | — | Optional block name |
| `OPTEMP` | `real` | — | Operational temperature |
| `OPWIDT` | `real` | — | Operational Width |
| `ORDARE` | `real` | — | Surface Area |
| `ORDLIM` | `logical` | — | Ordered limits |
| `ORDREF` | `element` | — | Order reference |
| `ORDWEI` | `real` | — | Order Weight |
| `ORGELM` | `element` | — | Reference to Original Element |
| `ORI` | `ori` | — | Orientation |
| `ORIA` | `real(3)` | — | Orientation as angles |
| `ORIF` | `logical` | — | Orientation flag |
| `ORIGRF` | `element` | — | A reference to the element this one is cloned from |
| `ORIN` | `word` | — | DRAFT user defined symbol orientation |
| `ORISE` | `real` | — | Overall Rising |
| `ORNA` | `string(1000)` | — | Originator text |
| `ORRF` | `element` | — | Origin reference (for templates) |
| `OSDWG` | `string(120)` | — | AutoCAD overlay name |
| `OSET` | `logical` | — | Offset/VIEW position flag |
| `OSFN` | `string(1024)` | — | Overlay sheet file |
| `OSHMTL` | `element` | — | Outer sheath material |
| `OSHT` | `real` | — | Overshoot |
| `OSHTTX` | `string(80)` | — | Overshoot text |
| `OSLV` | `real(12)` | — | Overlay sheet view layers visible |
| `OSRF` | `element` | — | Overlay sheet ref |
| `OSTYPE` | `word` | — | Short cut for "Type of owner" |
| `OTHLEN` | `real` | — | Length of other intervals |
| `OTHNUM` | `integer` | — | Number of other intervals |
| `OTMPMA` | `real` | — | Operating temp. max |
| `OTMPMI` | `real` | — | Operating temp. min |
| `OTRUNG` | `logical` | — | Omit Top Rung |
| `OUAREA` | `real` | — | Outer area |
| `OUPRTR` | `element` | — | Outside paint reference |
| `OUTD` | `string(1000)` | — | Outside diameter |
| `OUTFRF` | `element` | — | Reference of matching outfit object |
| `OUTLNR` | `element` | — | Symbolic outline style reference |
| `OUTLOS` | `element` | — | Symbolic outline_other_side style reference |
| `OUTLTS` | `element` | — | Symbolic outline_this_side style reference |
| `OUTRADIUS` | `real` | — | Outside Radius |
| `OUTSD` | `string(1000)` | — | Outside shield diameter |
| `OUTSHD` | `real` | — | Outer sheath diameter |
| `OVCWIDTH` | `real` | — | Overall cables width |
| `OVRSH` | `real` | — | Overshoot (d-measure) for unsymmetrical flange |
| `OWNC` | `word` | — | Owning connection type |
| `OWNER` | `element` | — | Element owner in database hierarchy |
| `OWNEXPRESSION` | `string(1000)` | — | Owner expression |
| `OWNEXTYPE` | `string(15)` | — | Owner expression type |
| `OWNLST` | `element(100)` | — | Owning hierarchy |
| `OWNREFERENCE` | `element` | — | ENDATUM owner reference |


## Attribute P

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `PAAX` | `string(30)` | — | Direction of axis |
| `PACTDI` | `dir` | integer | Ppoint actual direction |
| `PAFRCO` | `integer` | — | Plot action from color |
| `PAFRFT` | `integer` | — | Plot action from fillstyle |
| `PAFRGB` | `integer(4)` | — | RGB plot action from color |
| `PAFRGP` | `integer(4)` | — | RGB plot action from color physical |
| `PAFRLT` | `integer` | — | Plot action from linestyle |
| `PAGE` | `integer(500)` | — | Page in diagram |
| `PAINTO` | `string(26)` | — | Painting other side |
| `PAINTT` | `string(26)` | — | Painting this side |
| `PAIREF` | `element` | — | Reference to a PAINT element |
| `PALIG` | `real` | — | Panel alignment |
| `PALLAN` | `real` | integer | Ppoint allowed angle |
| `PANESI` | `real(2)` | — | Panel Size |
| `PANG` | `string(1000)` | — | Angle subtended |
| `PANOTL` | `element(100)` | — | References to limiting panels |
| `PANREF` | `element` | — | Panel reference |
| `PANSCD` | `integer` | — | Panel storing code |
| `PANSID` | `integer` | — | Side of panel |
| `PANSTC` | `integer` | — | Panel storing code |
| `PARA` | `real(100)` | — | Parameters |
| `PARAL` | `logical` | — | True if tap parallel to referred seam |
| `PARCOLUMN` | `element` | — | Parent column |
| `PARENT` | `element` | elemtype | Reference of ascendant element of specified type |
| `PARM` | `real(6)` | — | Parameters |
| `PARNAM` | `string(256)` | — | Part name |
| `PARREF` | `element(10)` | — | Part reference |
| `PARTNUMBER` | `integer` | — | Part number of a spooled component or leave tube references |
| `PARTYP` | `integer` | — | Type of part |
| `PASS` | `string(7)` | — | Password |
| `PASSQ` | `integer` | — | Password Quality |
| `PATADV` | `real` | — | Line Pattern Advance value |
| `PATDEF` | `integer(20)` | — | Pattern Definition |
| `PATH` | `element(500)` | — | Path |
| `PATHTM` | `real` | — | Path time for selected burning machine |
| `PATNAM` | `string` | — | Pattern Name |
| `PATOCO` | `integer` | — | Plot action to color |
| `PATOFF` | `real` | — | Line Pattern Offset |
| `PATOFT` | `integer` | — | Plot action to fillstyle |
| `PATOLT` | `integer` | — | Plot action to linestyle |
| `PATREP` | `real` | — | Pattern Repeat |
| `PATRGB` | `integer(4)` | — | RGB plot action to color |
| `PATRGP` | `integer(4)` | — | RGB plot action to color physical |
| `PATYPE` | `word` | — | Plot action type |
| `PAXI` | `string(30)` | — | Axial direction |
| `PBAX` | `string(30)` | — | Direction |
| `PBBT` | `string(1000)` | — | Bottom B length |
| `PBDI` | `string(1000)` | — | Distance to bottom surface |
| `PBDM` | `string(1000)` | — | Snout bottom diameter |
| `PBENDNUMBER` | `integer` | — | Spooling pulled bend number |
| `PBOF` | `string(1000)` | — | B offset |
| `PBOP` | `pos` | integer | Bottom of pipe |
| `PBOR` | `string(1000)` | — | Bore |
| `PBSCMU` | `string(2000)` | — | Flexible Explorer Context Menu |
| `PBSFML` | `string(500)` | — | Flexible Explorer Formula |
| `PBSFTY` | `integer` | — | Flexible Explorer Formula Type |
| `PBSGRB` | `string(500)` | — | Flexible Explorer Grouping Formula |
| `PBSHDE` | `logical` | — | Flexible Explorer Hide Empty Child Nodes |
| `PBSICO` | `string(500)` | — | Flexible Explorer Icon |
| `PBSPAR` | `element(100)` | — | Flexible Explorer Parameter Nodes |
| `PBSQNO` | `element` | — | Flexible Explorer Query Node |
| `PBSRCR` | `element` | — | Flexible Explorer Recurrent Node |
| `PBSSRT` | `integer` | — | Flexible Explorer Sorting |
| `PBSTXT` | `string(500)` | — | Flexible Explorer Text |
| `PBSVAL` | `string(500)` | — | Flexible Explorer Value |
| `PBTP` | `string(1000)` | — | Top B length |
| `PCAX` | `string(30)` | — | Direction of C offset |
| `PCBT` | `string(1000)` | — | Bottom C length |
| `PCODA` | `integer` | — | Precision code angles |
| `PCODE` | `integer` | — | Precision code |
| `PCODF` | `integer` | — | Precision code fractions |
| `PCODI` | `integer` | — | Precision code imperial |
| `PCODM` | `integer` | — | Precision code metric |
| `PCOF` | `string(1000)` | — | C offset |
| `PCON` | `string(1000)` | — | Connection type |
| `PCONDE` | `string(120)` | integer | Ppoint connection description |
| `PCONXF` | `element` | — | Consumer Extract Database Reference |
| `PCORRO` | `real` | integer | P Tube corrosion |
| `PCPIDV` | `element(10000)` | — | Enabled for project copy |
| `PCPSET` | `element(10000)` | — | Enabled for project copy |
| `PCREF` | `integer(4)` | integer | Ppoint and ref of connected piping component |
| `PCRFA` | `element(500)` | — | All spools that contain this element |
| `PCTP` | `string(1000)` | — | Top C length |
| `PCWALL` | `real` | integer | Ppoint connect wall thickness |
| `PDAREF` | `element` | — | Pipe data table reference |
| `PDEFI` | `string` | — | Primitive Definition |
| `PDELE` | `element` | — | Reference of matching hull object |
| `PDEREF` | `element` | integer | Pipe data element reference |
| `PDIA` | `string(1000)` | — | Diameter parameter |
| `PDIR` | `dir` | integer | Ppoint direction |
| `PDIS` | `string(1000)` | — | Distance parameter |
| `PDISLF` | `element` | — | Discipline Location Container Reference |
| `PDNAME` | `string(17)` | — | Production name |
| `PDSHAP` | `string(1000)` | — | Duct PPOINT shape |
| `PDTINT` | `integer(2)` | — | Production date |
| `PDTTXT` | `string(22)` | — | Production date text |
| `PDWGF` | `string(73)` | — | DWG filename (with suffix) |
| `PECPAR` | `string` | word | Endcut parameters |
| `PERS` | `real` | — | Perspective angle |
| `PFHIDE` | `logical` | — | Picture frame hide flag |
| `PFLALL` | `string(1000)` | — | Flange allowance parameter |
| `PFLOFF` | `string(1000)` | — | Flange offset parameter |
| `PFON` | `integer` | — | Projection line text font |
| `PFONTN` | `string(80)` | — | Projection line text font name |
| `PFPPOS` | `real(3)` | — | Polyface pt pos |
| `PFRE` | `element` | — | Pfitting reference for Cofittings |
| `PFREQ` | `logical` | — | Picture file required flag |
| `PGRD` | `real` | integer | Ppoint gradient |
| `PHBO` | `real` | — | Pipe head bore |
| `PHBP` | `pos` | — | Bottom of pipe head |
| `PHCO` | `word` | — | Pipe head connection type |
| `PHDR` | `dir` | — | Pipe head direction |
| `PHEI` | `string(1000)` | — | Height |
| `PHGR` | `real` | — | Pipe head gradient |
| `PHOD` | `real` | — | Pipe head outside diameter |
| `PHPO` | `pos` | — | Pipe head position |
| `PHTP` | `pos` | — | Top of pipe head |
| `PHTYP` | `string(120)` | — | Phase type of the component |
| `PICCNS` | `element` | — | Picture current connector style reference |
| `PICCOL` | `integer` | — | Picture current color |
| `PICDMS` | `element` | — | Picture current dimension style reference |
| `PICF` | `string(73)` | — | Picture filename |
| `PICFD` | `logical` | — | Picture file distribution flag |
| `PICGBS` | `element` | — | Picture current base line ruler style reference |
| `PICGCS` | `element` | — | Picture current center line ruler style reference |
| `PICGRS` | `element` | — | Picture current grid ruler style reference |
| `PICHTY` | `word` | — | Hard type of picture |
| `PICLBS` | `element` | — | Picture current label style reference |
| `PICLRF` | `element` | — | Picture current layer reference |
| `PICLST` | `integer` | — | Picture current linestyle |
| `PICORF` | `element` | — | Picture current owner reference |
| `PICRGB` | `integer(4)` | — | RGB picture current color |
| `PICRGP` | `integer(4)` | — | RGB picture current color physical |
| `PICSTY` | `word` | — | Soft type of picture |
| `PICTXS` | `element` | — | Picture current text style reference |
| `PICVWS` | `element` | — | Picture current view style reference |
| `PINDEN` | `real` | — | Pin Density |
| `PINRGB` | `integer(4)` | — | RGB pipe insulation color |
| `PINRGP` | `integer(4)` | — | RGB pipe insulation color physical |
| `PINSCN` | `integer` | — | Pipe Insulation color number |
| `PINSCO` | `integer` | — | Pipe Insulation color |
| `PINSST` | `integer` | — | Pipe Insulation linestyle |
| `PIPSYM` | `logical` | — | Pipe-end symbol flag |
| `PITCH` | `real(10)` | — | Pitch of stair flight |
| `PITCHO` | `real` | — | Angular offset from ladder pitch |
| `PJUS` | `string` | — | Projection line text justification |
| `PKDI` | `real` | — | Proportional distance along Pline |
| `PKEY` | `word` | — | Pline identifier key |
| `PLADEF` | `logical` | — | Panel has plates |
| `PLALEN` | `real` | — | Raw plate length |
| `PLANU` | `string(1000)` | — | Planning Unit |
| `PLANV` | `logical` | — | Is Plan View |
| `PLAREA` | `real` | — | Area |
| `PLAREF` | `element` | — | Manufacturing plate reference |
| `PLATYP` | `string(26)` | — | Type of plate e.g. Plate, Bracket, Clip |
| `PLAWDT` | `real` | — | Raw plate width |
| `PLAX` | `string(120)` | — | 2D direction angle |
| `PLCL` | `real` | — | Projection line clearance |
| `PLCLFL` | `logical` | — | Proj. line clearance flag |
| `PLCLTX` | `string(80)` | — | Projection line clearance text |
| `PLCN` | `logical` | word | Pline centerline flag |
| `PLCO` | `word` | word | Pline connection |
| `PLCOLO` | `integer` | — | Projection line color |
| `PLCONU` | `integer` | — | Projection line color number |
| `PLCRGB` | `integer(4)` | — | RGB projection line color |
| `PLCRGP` | `integer(4)` | — | RGB projection line color physical |
| `PLCUHO` | `logical` | — | True if plate has holes to be cut |
| `PLCUTO` | `logical` | — | True if plate has cutouts |
| `PLDE` | `string(120)` | word | Pline description |
| `PLDI` | `real(3)` | — | Projection line direction |
| `PLDRHO` | `logical` | — | True if plate has holes to be drilled |
| `PLED` | `dir` | — | Plane entry direction |
| `PLEN` | `pos` | word | Pline end |
| `PLENCU` | `pos` | word | Pline end, allowing for cutback |
| `PLFG` | `logical` | — | Plines flag |
| `PLINON` | `logical` | — | Pline-required flag |
| `PLLBL` | `logical` | — | True if plate has labels defined |
| `PLLE` | `integer(2)` | word | Pline level |
| `PLLIM` | `logical` | — | limited plane |
| `PLLS` | `word(100)` | — | List of valid Plines |
| `PLMKHO` | `logical` | — | True if plate has holes to be marked |
| `PLMRK` | `logical` | — | True if plate has marking |
| `PLNA` | `word(100)` | — | List of available Pline names |
| `PLNCOL` | `integer` | — | Pline color |
| `PLNCON` | `integer` | — | Pline color number |
| `PLNOT` | `logical` | — | True if plate has notches |
| `PLNP` | `integer` | — | Pline pen |
| `PLNRGB` | `integer(4)` | — | RGB pline color |
| `PLNRGP` | `integer(4)` | — | RGB pline color physical |
| `PLNSTREF` | `element` | — | Pline linestyle Reference |
| `PLNSTY` | `integer` | — | Pline linestyle |
| `PLOCK` | `logical` | — | True if element pos line is locked |
| `PLOR` | `ori` | word | Pline orientation |
| `PLPM` | `word` | — | Plane pipe packing method - nearest or weighted |
| `PLPN` | `integer` | — | Projection line pen |
| `PLPP` | `word` | — | Plane pipe positioning code word used by Router |
| `PLPU` | `word` | word | Pline purpose |
| `PLRD` | `dir` | — | Plane routine direction |
| `PLREFS` | `element(5000)` | — | Pline references |
| `PLRF` | `element` | — | Plane reference |
| `PLSIHO` | `logical` | — | True if plate has sink holes |
| `PLSLHO` | `logical` | — | True if plate has slotted holes |
| `PLSP` | `real` | — | Projection line text line spacing |
| `PLSPTX` | `string(80)` | — | Proj line text line-spacing text |
| `PLST` | `pos` | word | Pline start |
| `PLSTAT` | `integer` | — | Planning status |
| `PLSTCU` | `pos` | word | Pline start, allowing for cutback |
| `PLSTREF` | `element` | — | Projection linestyle Reference |
| `PLSTYL` | `integer` | — | Projection linestyle |
| `PLTARE` | `string(150)` | — | Plant area |
| `PLTHHO` | `logical` | — | True if plate has holes to be threaded |
| `PLTU` | `logical` | word | Pline tube flag |
| `PLTX` | `string(1000)` | — | Projection line text |
| `PLTYPE` | `integer` | — | Type of Grid Plane Definition |
| `PLVI` | `word(200)` | — | List of visible Plines |
| `PLVIF` | `integer` | word | Pline visibility flag |
| `PLWW` | `word` | — | Plane wall to wall positioning code used by Router |
| `PMAX` | `integer` | — | Maximum part number in current spool drawing |
| `PMLFUN` | `string(120)` | — | PML Function name |
| `PMLNAM` | `string(120)` | — | Name of Pmlobject |
| `PMOD` | `string` | — | Plane mode |
| `PNAM` | `string(12)` | — | Property description |
| `PNTOFF` | `real` | — | Point Offset |
| `PNTUV` | `pos` | — | Point2D |
| `PNTXY` | `real(2)` | — | Detailing Graphics 2D Position |
| `PNTXYZ` | `pos` | — | Point3D |
| `POCK` | `word` | — | Is a branch component in a pocket |
| `POD` | `real` | integer | Ppoint outside diameter |
| `POEF` | `logical` | — | Post-evaluation flag |
| `POFF` | `string(1000)` | — | Offset |
| `POINUM` | `integer` | — | Point Num |
| `POIS` | `real` | — | Spot value of Poissons ratio |
| `POITYP` | `string(10)` | — | Point type |
| `POS` | `pos` | — | Position |
| `POSATT` | `string(120)` | — | Name of attribute (or pseudo) to be used for label position |
| `POSC` | `pos` | — | Corrugation Start position |
| `POSCOD` | `integer` | — | Position code for auxiliary function |
| `POSE` | `pos` | — | End point position |
| `POSEE` | `real` | — | Easting of end point position |
| `POSEU` | `real` | — | Upping of end point position |
| `POSEV` | `pos` | — | Position evaluation |
| `POSEY` | `real` | — | Northing (Y coordinate) of end point position |
| `POSF` | `logical` | — | Positioning flag |
| `POSFOR` | `string` | — | Intelligent Text positional code word expansion style |
| `POSL` | `word` | — | Positioning line |
| `POSMOINT` | `integer` | — | Auto labelling positioning setting (PPoint, PLine, Attribute) |
| `POSN` | `real` | — | Northing of position |
| `POSNO` | `integer` | — | Position number |
| `POSPP` | `logical` | — | Position number per phase |
| `POSREF` | `element` | — | Reference to point |
| `POSS` | `pos` | — | Start point position |
| `POSSE` | `real` | — | Easting of start point position |
| `POSSN` | `real` | — | Northing of start point position |
| `POSSU` | `real` | — | Upping of start point position |
| `POSTAN` | `dir` | — | Post Tangent On a Point |
| `POSTEX` | `real` | — | Post Extension |
| `POSTOF` | `real` | — | Vertical post offset from the routing path |
| `POSTSP` | `real` | — | Default post spacing |
| `POSU` | `real` | — | Upping of position |
| `POSUV` | `real(2)` | — | Rest plate position |
| `POSX` | `real` | — | Easting (X coordinate) of position |
| `POSXP` | `integer(500)` | — | Position expression |
| `POWFAC` | `real` | — | Powder point factor |
| `PPANFL` | `real` | — | Pipe Piece Angle between flanges |
| `PPAREF` | `element` | — | Pipe Piece Arrive Reference |
| `PPARM` | `real(6)` | — | Profile parameters |
| `PPBO` | `real` | integer | Ppoint bore |
| `PPBRAD` | `real(500)` | — | Pipe piece bend radii |
| `PPBRAT` | `real(500)` | — | Pipe piece bend ratio |
| `PPCNBD` | `logical` | — | Pipe piece contains bends |
| `PPCO` | `word` | integer | Ppoint connection type |
| `PPCOU` | `integer` | — | Number of valid Ppoints |
| `PPCUTL` | `real` | — | Cut Length |
| `PPDE` | `string(120)` | integer | Ppoint description |
| `PPDI` | `integer` | — | Ppoint number for direction |
| `PPEFR` | `logical` | — | Leave flange required |
| `PPER` | `element` | — | Pipe piece end reference |
| `PPEXST` | `logical` | integer | True if Ppoint exists |
| `PPFINL` | `real` | — | Finished Length |
| `PPFMCV` | `logical` | — | Pipe piece fabrication machines verified |
| `PPHEI` | `real` | integer | Ppoint height |
| `PPLREF` | `element` | — | Pipe Piece Leave Reference |
| `PPLS` | `integer(200)` | — | List of valid Ppoints |
| `PPMODI` | `logical` | — | Pipe piece modified |
| `PPNU` | `integer` | — | Design PPoint/Port number |
| `PPOFFT` | `real` | integer | Ppoint offset |
| `PPOINX` | `string(480)` | — | Ppoint information |
| `PPOS` | `pos` | integer | Ppoint position |
| `PPRFA` | `element(500)` | — | All components in the PipePiece |
| `PPRO` | `string(1000)` | — | Parameterized Property Expression |
| `PPSFR` | `logical` | — | Arrive flange required |
| `PPSHAP` | `word` | integer | PPoint Connection shape |
| `PPSK` | `word` | integer | Ppoint pskey |
| `PPSR` | `element` | — | Pipe piece start reference |
| `PPSTU` | `element` | — | Pipe Piece Specification |
| `PPUR` | `word` | integer | Ppoint purpose |
| `PPVBMC` | `element` | — | Return the bending machine IF the pipe piece is verified |
| `PPVERI` | `word` | — | Pipe piece verified |
| `PPVI` | `integer(200)` | — | List of visible Ppoints |
| `PPVIF` | `integer` | integer | Ppoint visibility flag |
| `PPVWMC` | `element` | — | Return the welding machine IF the pipe piece is verified |
| `PPWID` | `real` | integer | Ppoint width |
| `PQAANG` | `real` | integer | Angle between alignment direction of specified pp and adjacent component |
| `PQANG` | `real` | integer | Angle between specified Ppoint and adjacent component |
| `PQBORE` | `logical` | integer | TRUE if specified Ppoint has same bore as adjacent |
| `PQCON` | `logical` | integer | TRUE if leave Ppoint has Correct connection type |
| `PQOFF` | `real` | integer | Offset between specified Ppoint and adjacent component |
| `PQUA` | `word` | — | Property qualifier |
| `PRAD` | `string(1000)` | — | Radius |
| `PRAV` | `real` | — | Average pressure |
| `PRBCD` | `integer` | — | Basic profile type code |
| `PRBLNK` | `string` | — | Primitive blanking flag |
| `PRBMAR` | `real` | — | Primitive blanking margin |
| `PRBMPH` | `real` | — | Primitive blanking margin physical |
| `PRBMTX` | `string(80)` | — | Primitive blanking margin text |
| `PRBTYP` | `integer` | — | Basic Profile Type |
| `PRCODE` | `string(16)` | — | Short code |
| `PRCONV` | `string(120)` | — | Convertor for property, not for use by end user. |
| `PRCTIM` | `integer` | — | Processing time in seconds |
| `PRCUHO` | `logical(6)` | — | True if profile has holes to be cut in this surface |
| `PRCUTO` | `logical(6)` | — | True if profile has cutouts in this surface |
| `PRDBSN` | `integer` | — | Start DB Number |
| `PRDDATE` | `datetime(2)` | — | Production date |
| `PRDDBF` | `element` | — | Reference to the Master DB |
| `PRDE` | `string(250)` | word | Property default |
| `PRDES` | `string(250)` | word | Property value from design |
| `PRDLS` | `word(2000)` | — | List of all design properties |
| `PRDREFERENCE` | `element` | — | Reference to an RDF Statement Predicate element |
| `PRDRHO` | `logical(6)` | — | True if profile has drill holes in this surface |
| `PRECED` | `integer` | — | Precedence |
| `PREDIT` | `string(120)` | — | Editor for property, not for use by end user |
| `PREF` | `logical` | — | Pre-evaluation flag |
| `PREFIX` | `string(50)` | — | Prefix |
| `PREFSP` | `logical` | — | Preferred Specification |
| `PREPPR` | `string(26)` | — | Preparation information |
| `PREPT` | `real` | — | Preparation time |
| `PRES` | `real` | — | Pressure |
| `PRESTR` | `logical` | — | Plane restricted |
| `PRETAN` | `dir` | — | Pre Tangent On a Point |
| `PRFC` | `string(1000)` | — | Pressure factor |
| `PRFELE` | `element` | — | Cableway profile element |
| `PRFG` | `logical` | — | Profile flag |
| `PRFL` | `string(120)` | — | Profile |
| `PRFMAT` | `string(80)` | — | Detailing Item Profile Material |
| `PRFOBS` | `integer` | — | Cableway profile obstructions |
| `PRGLDF` | `element` | — | Reference to Project Definition element |
| `PRICEE` | `real` | — | Price estimate |
| `PRIDBV` | `element` | — | Primary Database View |
| `PRIMDB` | `string` | — | Global status of DB, primary or secondary |
| `PRIMEM` | `logical` | — | Primary member |
| `PRIMSY` | `element` | — | Reference of the primary system elements |
| `PRIMTY` | `logical` | — | True if element is primary |
| `PRITYP` | `string(120)` | — | Gpart Primary type |
| `PRJD` | `string(120)` | — | Project description |
| `PRJID` | `string(17)` | — | Project id. Available on STAT or GSTAT element |
| `PRJL` | `logical` | — | Project lock |
| `PRJMAN` | `string(256)` | — | Project manager |
| `PRJN` | `string(17)` | — | Project number |
| `PRJSTA` | `word` | — | Access Control project status |
| `PRLBL` | `logical(6)` | — | True if profile has labels defined in this surface |
| `PRLS` | `word(200)` | — | List of valid properties - catalog or design |
| `PRMA` | `real` | — | Maximum pressure |
| `PRMDBF` | `element` | — | Reference of MDB Element |
| `PRMDIR` | `dir` | — | Primary Direction |
| `PRMI` | `real` | — | Minimum pressure |
| `PRMKHO` | `logical(6)` | — | True if profile has holes to be marked in surfaces |
| `PRMLOC` | `element` | — | Primary location |
| `PRMMEM` | `logical` | — | True if there are any primary elements amongst descendants |
| `PRMOWN` | `element` | — | Primary owning element (will be itself if primary) |
| `PRMRF` | `element` | — | Primary Location Element |
| `PRMRK` | `logical(6)` | — | True if profile has marking defined in this surface |
| `PRMTAG` | `element` | — | Associated Primary Element |
| `PRMVI` | `logical` | — | Draughting primitive visibility |
| `PRNOT` | `logical(6)` | — | True if profile has notches in this surface |
| `PROCDE` | `string(600)` | — | PROCess DEscription |
| `PRODID` | `string(26)` | — | Product id |
| `PRODRF` | `element` | — | Reference to Production Object |
| `PRODUCTION` | `real` | — | Production level radiation |
| `PROJID` | `integer(3)` | — | PROJID - on the DB element |
| `PROJIDTEXT` | `string(100)` | word | Project id |
| `PROLEN` | `real` | — | Raw profile length |
| `PROMIX` | `integer` | — | Index of Promote Status Value |
| `PROP` | `string(250)` | word | Property value from catalog or design dataset |
| `PROPG` | `logical` | — | DB propagation flag |
| `PROPRE` | `real` | attr | Calculated Property Real |
| `PROPST` | `element(500)` | — | Property set reference array |
| `PROPTYPE` | `word` | word | Property Dimension from catalog or design dataset |
| `PROSID` | `integer` | — | Plate side with most profile markings |
| `PROUT` | `word(2000)` | — | List of all properties excluding hidden ones. That is, as output in "Q ATT" |
| `PRPDIR` | `integer` | — | Perpendicular to location direction |
| `PRPNDC` | `logical` | — | True if the profile is mounted perpendicularly along its entire trace |
| `PRPU` | `word` | word | Property purpose |
| `PRREF` | `element` | — | Dataset reference |
| `PRSIHO` | `logical(6)` | — | True if profile has sink holes in this surface |
| `PRSLHO` | `logical(6)` | — | True if profile has slotted holes in this surface |
| `PRSTAT` | `integer` | — | Welding Element Production Status |
| `PRTHHO` | `logical(6)` | — | True if profile has threaded holes in this surface |
| `PRTI` | `string(120)` | word | Property title |
| `PRTIDL` | `string(132)` | — | Long part id |
| `PRTIDM` | `string(132)` | word | Module part id |
| `PRTIDS` | `string(132)` | — | Short part id |
| `PRTLST` | `string(26)` | — | Parts list name |
| `PRTREF` | `element` | — | Part reference |
| `PRTRTX` | `string(1000)` | word | Part element R text |
| `PRTSTX` | `string(1000)` | word | Part element S text |
| `PRTTTX` | `string(1000)` | word | Part element T text |
| `PRTXRF` | `element(500)` | — | Return reference from PART element to SPCOs |
| `PRVRF` | `element` | — | Reference to previous owner of DB |
| `PRVSES` | `integer` | integer | Previous Session to that specified |
| `PSARFA` | `element(500)` | — | Pipespool arrive references |
| `PSATTS` | `word(500)` | — | List of pseudo attributes |
| `PSESS` | `integer` | integer | Previous session number |
| `PSFG` | `logical` | — | Piping component symbol flag |
| `PSHAPE` | `string(25)` | — | Profile shape symbol text |
| `PSIZE` | `real(2)` | — | Panel size |
| `PSKE` | `word` | — | Key for ISODRAFT |
| `PSLDIR` | `dir` | integer | Ppoint slope direction |
| `PSLRFA` | `element(500)` | — | Pipespool leave references |
| `PSPE` | `element` | — | Pipe specification |
| `PSPIN` | `integer` | — | Ppoint number showing position of spindle |
| `PSPR` | `logical` | — | Pipe Spool Previously Released |
| `PSPREFERENCE` | `element` | — | Associated POINSP Reference |
| `PSTAT` | `integer` | — | Plane status |
| `PSTF` | `element` | — | Pointset reference |
| `PSTLENGTH` | `real` | — | Pipe stock length |
| `PSTR` | `element` | — | Structural Pline set reference |
| `PSTYP` | `word` | — | Spool Type |
| `PSVLD` | `logical` | — | Pipespool valid |
| `PTADEG` | `real` | — | Projection Text Angle Degrees |
| `PTADGP` | `real` | — | Projection Text Angle Degrees |
| `PTAN` | `string` | — | Projection line text angle flag |
| `PTBO` | `real` | — | Pipe tail bore |
| `PTBP` | `pos` | — | Bottom of pipe tail |
| `PTCDI` | `string(1000)` | — | Parameterized direction |
| `PTCH` | `real` | — | Projection text character height |
| `PTCHTX` | `string(80)` | — | Proj text char height text |
| `PTCO` | `word` | — | Pipe tail connection type |
| `PTCOLO` | `integer` | — | Projection text color |
| `PTCONU` | `integer` | — | Projection text color number |
| `PTCPOS` | `string(250)` | — | Parameterized position |
| `PTDI` | `string(1000)` | — | Distance to top surface |
| `PTDM` | `string(1000)` | — | Snout top diameter |
| `PTDR` | `dir` | — | Pipe tail direction |
| `PTDTRE` | `element` | — | Part Data set reference |
| `PTEM` | `real` | — | Pipework temperature |
| `PTEPOS` | `string(250)` | — | Parameterized end position |
| `PTFA` | `element(3)` | — | Point references |
| `PTGR` | `real` | — | Pipe tail gradient |
| `PTLH` | `real` | — | Projection text letter height |
| `PTLHTX` | `string(80)` | — | Projection text letter height text |
| `PTNB` | `integer(20)` | — | Old spooler bolt part number |
| `PTNH` | `integer` | — | Old spooler head tube part number |
| `PTNO` | `integer` | — | Old spooler component part number |
| `PTNT` | `integer` | — | Old spooler tube part number |
| `PTOD` | `real` | — | Pipe tail outside diameter |
| `PTOF` | `real(2)` | — | Projection line text offset |
| `PTOFTX` | `string(80)` | — | Projection line text offset text |
| `PTOLER` | `real` | — | Tolerance on a design property |
| `PTOP` | `pos` | integer | Top of pipe |
| `PTORDR` | `integer` | — | Order of part in rule |
| `PTPN` | `integer` | — | Projection text pen |
| `PTPO` | `pos` | — | Pipe tail position |
| `PTPTXT` | `string(26)` | — | Profile type. e.g. Stiffener, Flange,... |
| `PTRE` | `element` | — | Point set reference |
| `PTRF` | `element` | — | Point reference |
| `PTS` | `integer(6)` | — | Line definition points |
| `PTSP` | `string(120)` | — | Paint specification |
| `PTSPOS` | `string(250)` | — | Parameterized start position |
| `PTTP` | `pos` | — | Top of pipe tail |
| `PTXRGB` | `integer(4)` | — | RGB projection text color |
| `PTXRGP` | `integer(4)` | — | RGB projection text color physical |
| `PTYP` | `word` | — | Property type |
| `PUCD` | `string(120)` | — | Paint Code |
| `PUINCD` | `string(120)` | — | Inside punch code |
| `PULLLS` | `element(500)` | — | Pull pit list |
| `PULTSN` | `real` | — | Pulling tension |
| `PUNCHT` | `real` | — | Punching time |
| `PUNI` | `string(32)` | — | Data Property Units |
| `PUOUCD` | `string(120)` | — | Outside punch code |
| `PURCH` | `string(26)` | — | Purchase information |
| `PURP` | `word` | — | Description code word |
| `PVIF` | `integer` | — | PPoint/Pline visibility filter |
| `PVNO` | `integer` | — | Picture version number |
| `PWALLT` | `real` | integer | Ppoint wall thickness |
| `PWAS` | `string(1000)` | — | Percentage wastage factor |
| `PWID` | `string(1000)` | — | Width / Wall thickness |
| `PWWFAC` | `real` | — | Powder way factor |
| `PX` | `string(1000)` | — | Cartesian X position |
| `PXBS` | `string(1000)` | — | Inclination of bottom surface to local X axis |
| `PXLE` | `string(1000)` | — | X length |
| `PXTS` | `string(1000)` | — | Inclination of top surface to local X axis |
| `PY` | `string(1000)` | — | Cartesian Y position |
| `PYBS` | `string(1000)` | — | Inclination of bottom surface to local Y axis |
| `PYLE` | `string(1000)` | — | Y length |
| `PYTS` | `string(1000)` | — | Inclination of top surface to local Y axis |
| `PZ` | `string(1000)` | — | Cartesian Z position |
| `PZAXI` | `string(30)` | — | Alignment axial direction |
| `PZDIR` | `dir` | integer | Ppoint alignment direction |
| `PZLE` | `string(1000)` | — | Z length |


## Attribute Q

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `QALLSI` | `integer` | — | AllocSize |
| `QMXUPT` | `integer` | — | MaxUserPtr |
| `QNELEM` | `integer` | — | QNoElem |
| `QOBJSI` | `integer` | — | ObjectSize |
| `QTYPE` | `word` | — | Type of question |
| `QUACD` | `integer` | — | Quality code |
| `QUAL` | `integer` | — | Qualifier |
| `QUAN` | `integer` | — | Quantity (always one!) |
| `QUAPAI` | `string(26)` | — | Paint specification |
| `QUATXT` | `string(26)` | — | Quality |
| `QUES` | `word` | — | Question |
| `QUSEXP` | `integer(250)` | — | question expression |


## Attribute R

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `RADD` | `real` | — | Default Radius value |
| `RADF` | `real` | — | Radius attractor factor |
| `RADI` | `real` | — | Radius |
| `RADIPLANE` | `logical` | — | Radial plane flag |
| `RADISP` | `real(10000)` | — | Radius Spacing |
| `RADL` | `real(2)` | — | Radius limits (Min/Max) |
| `RADS` | `logical` | — | Radius set flag - ignore Radius values if FALSE |
| `RAILHE` | `real(15)` | — | Heights of rails measured from path |
| `RAILTR` | `real(100)` | R | ail Trim |
| `RANANG` | `real(32)` | elemtype    R | ange of available angles f |
| `RANEQUIP` | `real` | R | ange of the nearest e |
| `RANRAD` | `real(32)` | elemtype    R | ange of available radii |
| `RATFAC` | `real` | R | ationalization factor |
| `RATI` | `real` | P | ressure rating |
| `RATPOT` | `string(15)` | R | ationalization post text |
| `RATPRE` | `string(15)` | R | ationalization pre text |
| `RATTAL` | `element(500)` | word        R | atta list |
| `RAWNAM` | `string(500)` | N | ame only |
| `RAWPLA` | `element` | R | aw Plate |
| `RAWPRO` | `string(26)` | N | ame of raw profile |
| `RAWREF` | `element(100)` | R | aw material reference |
| `RBCTYP` | `integer` | R | evision History Column T 3 |
| `RCOD` | `string` | D | irection of region v |
| `RCOF` | `pos` | R | ough center of gravity |
| `RCONAT` | `element(500)` | element     L | ist of valid connected r |
| `RCOU` | `integer` | N | umber of rules on e |
| `RDEF` | `real(3)` | P | ort rotation flexibility d |
| `RDFIRI` | `string(2000)` | I | nternational Resource I a |
| `RDFOBJECT` | `string(2000)` | A | n RDF statement object s |
| `RDFPREFIX` | `string(30)` | A pref | ix (short-hand) for an RDF |
| `REACT` | `string(1000)` | Reacta | nce |
| `READONLY` | `logical` | Read o | nly |
| `REALEV` | `real` | Real e | valuation |
| `REALOV` | `element` | List o | f Values for Status Reason |
| `REALXP` | `integer(500)` | Real e | xpression |
| `RECOMM` | `string(256)` | Releas | e to 3D comment |
| `REDATE` | `string(12)` | Releas | e to 3D date |
| `REDREF` | `element` | Reduce | r table reference |
| `REDTYPE` | `integer` | Reduce | r Type |
| `REDXRF` | `element(500)` | Return | reference from Reduce SPECs |
| `REF` | `element` | Refere | nce of the element |
| `REFA` | `word` | Refere | nce attribute used in por |
| `REFCLS` | `string(200)` | Refere | nced conceptual model |
| `REFI` | `integer` | Refere | nce array index |
| `REFL` | `word(2147483647)` | Types | of elements (inclu be poi refere |
| `REFLCL` | `logical` | True i | f reflected in CL |
| `REFLEVEL` | `integer` | Refere | nce Level |
| `REFLIM` | `element(10)` | Refere | nce limit |
| `REFMOD` | `integer` | Reflec | tion Mode |
| `REFRAW` | `element` | Raw su | rface reference |
| `REFSIZ` | `integer` | Refere | nce size |
| `REFSPA` | `element` | Refer | ence to space arran |
| `REFSUR` | `element` | Refer | ence to surface insta |
| `RELELS` | `element(500000)` | word    Relat | ed Elements, Fabri |
| `RELELT` | `element` | word    Relat | ed Element, Fabri |
| `RELINF` | `string(200)` | word    Relat | ed Element Infor |
| `RELREF` | `element` | Refer | ence to DTRELA Eleme |
| `RELREV` | `element(100)` | Relat | ed revisions |
| `RELRFS` | `element(1000)` | Refer | ences to DTRELA Eleme |
| `REMRKS` | `string(120)` | Remar | ks |
| `REPCOU` | `integer` | Rule | Repeat Counter |
| `REPSEQ` | `integer` | Seque | nce no. for templ |
| `REPSTL` | `integer` | Symbo | lic representation flag( Symbo Expan |
| `REPTXT` | `string` | Repor | ter text used for eleme |
| `REQUIRED` | `logical` | Actio | n is not optional |
| `RESIS` | `string(1000)` | Resis | tance |
| `RESO` | `real` | Model | Resolution (dist |
| `RESREF` | `element` | Rest | plate reference |
| `RESTAT` | `integer` | Relea | se to 3D status |
| `RESTRI` | `logical` | Restr | ict unused SPECs in Desig |
| `RESVOLUME` | `real(4)` | Reserv | ed volume |
| `REUSER` | `string(12)` | Releas | e to 3D user |
| `REV` | `integer` | Pipe R | evision number |
| `REVDIR` | `logical` | Revers | e Direction flag |
| `REWIDTH` | `real` | Reduce | d width |
| `RFLAG` | `word` | Type o | f real answer NONE, MULTi |
| `RFLF` | `real(3)` | Rotati | onal spring values |
| `RGBCOL` | `real(3)` | RGB co | lor vector |
| `RGBMAP` | `integer` | RGB co | lor mapping strate Interp |
| `RHOST` | `string(120)` | Host c | omputer name or IP addres machin |
| `RILIST` | `element(500)` | Route | information list |
| `RINE` | `real(3)` | Rotati | onal inertia vector |
| `RINS` | `real` | Inside | radius |
| `RISE` | `real` | Tread | Rise |
| `RLAC` | `integer(500)` | Rule a | ction array |
| `RLEX` | `element(20)` | Array | of references of specia |
| `RLIM` | `real(6)` | Rotati | on limits |
| `RLIN` | `element(20)` | Array | of references of specia |
| `RLIS` | `word(200)` | List o | f rules set |
| `RLLO` | `integer(500)` | Rule l | ogical array |
| `RLOC` | `integer` | Branch | Member Creation Status |
| `RLSE` | `integer(500)` | Rule s | election array |
| `RLSTRF` | `element` | Ruler | style reference |
| `RLTRGB` | `integer(4)` | RGB r | uler long tick color |
| `RLTRGP` | `integer(4)` | RGB r | uler long tick color physi |
| `RMFL` | `real(6)` | Rotat | ional moment flexi |
| `RMINIMUM` | `real` | Minim | um radius |
| `RMOF` | `real(9)` | Rough | moments of inertia |
| `RMTRGB` | `integer(4)` | RGB r | uler medium tick color |
| `RMTRGP` | `integer(4)` | RGB r | uler medium tick color |
| `RMTRL` | `logical` | Rest | material |
| `RNAM` | `string(120)` | Recip | ient name |
| `RNGCON` | `element` | Rung | Connection |
| `RNGOFF` | `real` | Rung | Offset |
| `RNODEL` | `element(500)` | word    Rnode | list |
| `RNREF` | `element` | Route | Node reference |
| `RNRIDF` | `real` | Rung | Rising Default |
| `RNRIMA` | `real` | Rung | Rising Minimum |
| `RNRIMI` | `real` | Rung | Rising Minimum |
| `RNTYPE` | `word` | RNode | Type |
| `ROBRRU` | `element(500)` | Route | r Rules applying to a pipin membe |
| `ROLEREF` | `element` | Acces | s Control role refer |
| `ROOMTY` | `string(120)` | Room | Type |
| `RORIEN` | `logical` | True | if repeat item is re- orien |
| `ROTANG` | `real` | Nested | part rotation |
| `ROTN` | `real(3)` | Rotati | on |
| `ROUHEIGHT` | `real` | Routin | g Height |
| `ROUT` | `real` | Outsid | e radius |
| `ROUTND` | `element(100)` | Cable | Preliminary route point |
| `ROUTRE` | `element` | Route | reference |
| `ROUWIDTH` | `real` | Routin | g Width |
| `ROWCOL` | `integer` | Row co | lor |
| `ROWCON` | `integer` | Row co | lor number |
| `ROWID` | `string(20)` | Row Id |  |
| `ROWLAB` | `string(20)` | Row La | bel |
| `ROWNUM` | `integer` | Pin ro | w number |
| `ROWRGB` | `integer(4)` | RGB ro | w color |
| `ROWRGP` | `integer(4)` | RGB ro | w color physical |
| `ROWSTREF` | `element` | Row li | nestyle Reference |
| `ROWSTY` | `integer` | Row li | nestyle |
| `RPARM` | `real(4)` | Rest p | late parameters |
| `RPEN` | `integer` | Pen fo | r internal rows |
| `RPLCOD` | `integer` | Rest p | late code |
| `RPLCRE` | `logical` | Rest p | lates created |
| `RPLNAM` | `string(26)` | Rest p | late name |
| `RPLNUM` | `integer` | Number | of rest plates |
| `RPLPOS` | `real(4)` | Rest p | late position |
| `RPLREF` | `element` | Raw pl | ate reference |
| `RPLSET` | `integer` | Rest p | late set |
| `RPLTYP` | `integer` | Rest p | late type |
| `RPLUSD` | `integer` | Re | st plates used |
| `RPRE` | `real` | Re | ference pressure |
| `RPRO` | `real` | word       Ca | talog dataset property |
| `RPRREF` | `element` | Ra | w profile reference |
| `RPTCNT` | `integer(4)` | Sy | mbol repeats count |
| `RPTDAT` | `real(4)` | Ra | dial Dim Point 2D Data |
| `RPTX` | `string(120)` | Te | xt used when pr to |
| `RRSF` | `element` | Re | p ruleset reference |
| `RSBOX` | `real(6)` | Bo | unding box of RSO |
| `RSEQA` | `integer(500)` | Se | quence numbers for ru |
| `RSEQFA` | `element(500)` | Ru | le sequence ref array fo |
| `RSEQN` | `integer` | Se | quence number for rule ex |
| `RSESS` | `string(640)` | integer    Re | ason for creation of se |
| `RSET` | `logical(3)` | Ro | tation limits set flag - ig |
| `RSFFD` | `integer` | Fu | nctional description on fa |
| `RSFMC` | `integer` | Ma | terial code on face |
| `RSFMS` | `string(256)` | Ma | terial side on face |
| `RSFMT` | `real` | Ma | terial thickness on face |
| `RSFSA` | `logical` | Au | to stiffening on face |
| `RSFSD` | `string(256)` | Pr | ofile dim on face |
| `RSFSS` | `string(256)` | St | iffener side on face |
| `RSFST` | `integer` | Pr | ofile type on face |
| `RSFWT` | `logical` | Watert | ight |
| `RSLBRA` | `string(256)` | Bracke | t instance at limit |
| `RSLELE` | `element` | Limiti | ng element |
| `RSLPRE` | `integer` | Profil | e end definition at limit |
| `RSOPP` | `element` | pos    Return | s the planar panel given |
| `RSOPPT` | `real` | pos    Return | s the thickness of the se |
| `RSPAN` | `element(1000)` | Panel( | s) defined on RSO |
| `RSPLN` | `integer` | Princi | pal plane of RSO |
| `RSRF` | `real` | Rough | surface area |
| `RSTBY` | `string(100)` | Status | set by |
| `RSTCOM` | `string(100)` | Status | comment |
| `RSTDAT` | `string(100)` | Status | date |
| `RSTNAM` | `string(100)` | Status |  |
| `RSTRGB` | `integer(4)` | RGB ru | ler short tick color |
| `RSTRGP` | `integer(4)` | RGB ru | ler short tick color physic |
| `RSTYP` | `integer` | Type o | f RSO |
| `RTEM` | `real` | Refere | nce temperature |
| `RTEX` | `string(2000)` | R Text | string |
| `RTYP` | `string(12)` | Restra | int type |
| `RUAXE` | `integer` | Ruler | axis direction (X, Y, Z) |
| `RULAOF` | `real` | Ruler | start offset |
| `RULAXE` | `string` | Ruler | axis (as text) |
| `RULBOF` | `real` | Ruler | end offset |
| `RULCDI` | `logical` | Custom | direction |
| `RULEER` | `string(300)` | integer    Te | xt of "nth" rule error |
| `RULEMOD` | `logical` | attr       Tr | ue if rule modified this se |
| `RULEMODC` | `logical` | attr       Tr | ue if rule modified since co |
| `RULEMODLIST` | `word(500)` | integer    Li | st of rules modified si |
| `RULEMODLISTC` | `word(500)` | Li | st of rules modified si |
| `RULLIM` | `real(6)` | Ru | ler limits |
| `RULLOF` | `real` | Ru | ler label offset |
| `RULLTC` | `integer` | Ru | ler long tick color |
| `RULLTL` | `real` | Ru | ler long tick length |
| `RULMTC` | `integer` | Ru | ler medium tick color |
| `RULMTL` | `real` | Ru | ler medium tick length |
| `RULRCO` | `integer` | Ru | ler type code |
| `RULSET` | `word(2000)` | Li | st of rules set |
| `RULSTC` | `integer` | Ru | ler short tick color |
| `RULSTL` | `real` | Ru | ler short tick length |
| `RULTCK` | `integer` | Nu | mber of ticks between la |
| `RULTCP` | `string(120)` | Ru | ler tick side (as text) |
| `RULTXP` | `string(120)` | Ru | ler text side (as text) |
| `RUNGS` | `integer` | integer    Nu | mber of rungs |
| `RUNGSP` | `real` | Ru | ng Spacing |
| `RUSE` | `integer` | Tr | ue if PPROP/DPROP to be ge at |
| `RUTCP` | `integer` | Ru | ler tick side (ByVstyle, Ou |
| `RUTXP` | `integer` | Ruler | text side (ByVstyle, Outsid |
| `RVAU` | `string(1000)` | Revisi | on author |
| `RVCANC` | `logical` | Cancel | led |
| `RVCNT` | `integer` | Revisi | on Count |
| `RVCON` | `element` | Revisi | on Configuration |
| `RVCRIS` | `element(20)` | Revisi | on Controlled Elemen |
| `RVCRWR` | `element(20)` | Workin | g Revision Creation Status |
| `RVCURR` | `string(50)` | Curren | t revision |
| `RVDT` | `string(12)` | Date o | f revision |
| `RVFTYP` | `integer` | Revisi | on file type |
| `RVISS` | `logical` | Issued |  |
| `RVLPOS` | `element` | Revisi | on links reference |
| `RVNPTS` | `string(50)` | Revisi | on number value parts |
| `RVNUM` | `string(50)` | Revisi | on number |
| `RVOL` | `real` | Rough | gross volume |
| `RVSN` | `string(1000)` | Revisi | on number |
| `RVTM` | `string(120)` | Time o | f revision |
| `RVURI` | `string(1000)` | Issued | object location |
| `RWDOWN` | `integer(2)` | Table | linking RWELD elemen elemen |
| `RWDOWN` | `element` | Refere | nce of associated WELD o |
| `RWEI` | `real` | Rough | weight |
| `RWIDTH` | `real` | Rung W | idth |
| `RWSREF` | `element` | Raw su | rface reference |


## Attribute S

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `S` | `real` | — | Position southing |
| `SAFC` | `integer` | — | Safety class |
| `SAVDIR` | `dir` | — | Cached direction |
| `SAVPOS` | `pos` | — | Cached position |
| `SBCOAT` | `string(256)` | — | Second base coating |
| `SBRA` | `element(10)` | — | SBOLT references |
| `SBRP` | `element` | — | SBFR to RPLA reference link (Router) |
| `SCAL` | `integer` | — | DRAFT user defined symbol scale factor |
| `SCALAP` | `integer` | — | Symbol Scale Axis (None, X, Y, Both) |
| `SCALAX` | `string(120)` | — | Symbol Scale Axis (as text) |
| `SCALI` | `real(500)` | — | ADP main view allowable scale list |
| `SCALIN` | `logical` | — | Drafting symbol link scaling flag |
| `SCALPH` | `logical` | — | ALPHA/NOALPHA flag |
| `SCAREF` | `element(10)` | — | Area shape reference |
| `SCBREF` | `element(50)` | — | Schematic element back reference |
| `SCDELI` | `string(50)` | — | Delimiter |
| `SCDIGIT` | `integer` | — | Digits |
| `SCEIRE` | `element(60)` | — | Enhanced instrument relationship |
| `SCELOR` | `element(20)` | — | Enhanced instrumentation loop reference array for schematic elements |
| `SCGTYP` | `string(50)` | Schema | tic nozzle gtype |
| `SCHED` | `string(10)` | Piping | Schedule |
| `SCHELE` | `element` | Schema | tic head element |
| `SCHEME` | `string` | Scheme | name |
| `SCHFF` | `integer` | Schema | tic file format |
| `SCHLNK` | `element` | Connec | tivity Schematic Link |
| `SCHTYP` | `integer` | Schema | tic type |
| `SCIERTYPE` | `word(60)` | Instru | ment enhanced refere |
| `SCIIRE` | `element(50)` | Instru | ment to instrument refere |
| `SCIIRTYPE` | `word(50)` | Instru | ment to instrument refere |
| `SCIPRE` | `element(50)` | Instru | ment process refere |
| `SCIPRTYPE` | `word(50)` | Instru | ment process refere |
| `SCIREF` | `element(100)` | Instru | ment reference |
| `SCIREL` | `element(50)` | Instru | ment relationship |
| `SCIRLTYPE` | `word(50)` | Instru | ment relationship type |
| `SCIRTY` | `word(100)` | Instru | ment reference type |
| `SCLORE` | `element(10)` | Instru | mentation loop refere schema |
| `SCOD` | `string(3)` | Isodra | ft Compipe: Short code |
| `SCOPEREF` | `element` | Access | Control scope refere |
| `SCOSEL` | `integer(500)` | Access | Control scope |
| `SCOSLX` | `integer(500)` | Access | Control scope |
| `SCPANA` | `string(120)` | Schema | tic page name |
| `SCPATY` | `word` | Schema | tic page type |
| `SCQUAN` | `integer` | Quanti | ty |
| `SCRAPT` | `real` | Total | scrap of raw plate area |
| `SCRAPU` | `real` | Total | scrap of used raw plate |
| `SCREF` | `element` | Schema | tic element refere |
| `SCSTYP` | `string(257)` | Schema | tic stype |
| `SCSYSD` | `element(500)` | System | reference array for schema |
| `SCSYSF` | `element(10)` | System | reference array for schema |
| `SCTDIR` | `dir` | Sectio | n Direction |
| `SCTELE` | `element` | Schema | tic tail element |
| `SDISTA` | `real` | Vertic | al Distance of Start |
| `SDTH` | `real(3)` | Saddle | thickness |
| `SDTINT` | `integer(2)` | Splitt | ing date |
| `SDTTXT` | `string(22)` | Splitt | ing date |
| `SEALEV` | `real` | Sea le | vel height |
| `SEAMPY` | `integer` | Weld S | eam Y Orientation |
| `SEAMPZ` | `integer` | Weld S | eam Z Orientation |
| `SECSETTING` | `string(120)` | Securi | ty Setting for the Locati |
| `SECTYP` | `string(120)` | Gpart | Secondary type |
| `SEGAMP` | `real(2)` | Segmen | t amplitude |
| `SEGAMV` | `real(3)` | Segmen | t amplitude vector |
| `SEGE` | `pos` | Segmen | t end point po |
| `SEGEPT` | `real(3)` | Se | gment ending point 3d |
| `SEGEUV` | `real(2)` | Se | gment ending point |
| `SEGOPT` | `real(3)` | Se | gment origin point 3d |
| `SEGORI` | `real(2)` | Se | gment origin point |
| `SEGS` | `pos` | Se | gment start point po |
| `SEGSPT` | `real(3)` | Se | gment starting point 3d |
| `SEGSUV` | `real(2)` | Se | gment starting point |
| `SENS` | `string` | Ro | tational sense |
| `SEPAR` | `string(40)` | Se | parator String |
| `SEQBLS` | `logical` | Se | quence Blank Start In |
| `SEQRES` | `logical` | Se | quence Reset Indicator |
| `SEQU` | `integer` | Se | quence Position in Me |
| `SESCLA` | `integer` | Se | ssion Of Claim |
| `SESSC` | `string(120)` | integer    Co | mment for specified se |
| `SESSCA` | `integer(10000)` | Li | st of pairs of DB number, la re |
| `SESSCH` | `integer(10000)` | As | for SESSCA, but se fo |
| `SESSD` | `string(120)` | integer    Da | te of specified Session |
| `SESSM` | `integer` | attr       Se | ssion Of Last Mo |
| `SESSNO` | `integer` | Cu | rrent opened Session |
| `SESSU` | `string(120)` | integer    Us | er creating specified se |
| `SETDATE` | `string(120)` | Set Da | te |
| `SETUTC` | `string(120)` | Set UT | C Date |
| `SEXPND` | `element(10000)` | All de | scendent elements in sec |
| `SFCOAT` | `string(256)` | Second | finish coating |
| `SFCODE` | `integer` | Stiffe | ner Code |
| `SFLIMI` | `word` | Spooli | ng limits |
| `SFOR` | `real(3)` | Start | force vector compon |
| `SFREF` | `element` | Return | reference from piping leave field |
| `SHAP` | `string(1000)` | Shape | modulus |
| `SHBO` | `real` | SUPCOM | P head bore |
| `SHDPOS` | `real(2)` | Dimens | ion line/arc sheet positi |
| `SHFALG` | `real` | Shrink | age factor along main d |
| `SHFPRP` | `real` | Shrink | age factor perpen direct |
| `SHFSEA` | `real` | Shrink | age factor for seams direct |
| `SHIPNO` | `string(80)` | Ship n | umber |
| `SHIPX` | `string(20)` | Ship X | position |
| `SHIPY` | `string(20)` | Ship Y | position |
| `SHIPZ` | `string(20)` | Ship Z | position |
| `SHOC` | `real(3)` | Shock | load vector |
| `SHOP` | `logical` | Shop/S | ite flag |
| `SHOPRI` | `logical` | Shop P | rimer |
| `SHOWKP` | `logical` | Show k | ickplate in default repres |
| `SHPSYM` | `string(40)` | Shape | symbol text |
| `SHPUV` | `pos` | Point | defining shrinkage |
| `SHRF` | `element` | Refere | nce to associated sheet |
| `SHTNUM` | `integer` | Sheet | Number |
| `SHTOT` | `integer` | Total | Sheets |
| `SHVUV` | `dir` | Vector | defining shrinkage |
| `SHXYPS` | `real(2)` | 2D She | et Position |
| `SIDATT` | `string(120)` | Name o | f attribute (or pseudo select label |
| `SIDES` | `string` | Frame | side visibility |
| `SIDMOI` | `integer` | Auto L | abelling side setting (Above |
| `SIDPOS` | `real(2)` | Side d | efinition point |
| `SIF` | `real(3)` | Stress | intensification factor |
| `SIGF` | `integer` | Signif | icant figures |
| `SIGREF` | `element` | Signif | icant point reference |
| `SIMINF` | `element` | Simula | tion information refere |
| `SIMITF` | `element(2147483647)` | Simula | tion item reference |
| `SIMNM` | `string(150)` | Simula | tion name |
| `SIMSRF` | `element` | Simula | tion source refere |
| `SITEAD` | `string(256)` | Site a | ddress |
| `SITEM` | `element` | Refere | nce from secondary hierar |
| `SITEMA` | `string(256)` | Site m | anager |
| `SIZE` | `real(2)` | Sheet/ | region size |
| `SIZEDB` | `integer` | Size o | f DB |
| `SJUS` | `word` | Surfac | e justification of Panel |
| `SKAPOS` | `real(2)` | Actual | position of symbol or tex |
| `SKEY` | `string(4)` | Symbol | key |
| `SKEYSCALE` | `integer` | Univer | sal SKEY scale factor |
| `SKHEIG` | `real` | Height | of symbol or text |
| `SKIPID` | `logical` | Skip I | D |
| `SKREFL` | `logical` | True i | f reflected |
| `SKROT` | `real` | Rotati | on of symbol or text |
| `SKRPOS` | `real(2)` | Refere | nce position of symbol |
| `SKSYMN` | `integer` | Symbol | number for given font |
| `SKTXTT` | `integer` | Type o | f sketch text |
| `SKTYPE` | `integer` | Type o | f sketch inform |
| `SLENGTH` | `real` | Side l | ength |
| `SLHNAP` | `element(500)` | Sorted | list of HNODE after POINTR |
| `SLHNBP` | `element(500)` | Sorted | list of HNODE before |
| `SLODIR` | `real(30)` | Slope | direction array |
| `SLOPEF` | `logical` | SLOPEF | (True if its a slopin change |
| `SLOREF` | `element` | Pipe s | lope reference |
| `SLRAP` | `element(500)` | Sorted | list of RATTA after POINTR |
| `SLRBP` | `element(500)` | Sorted | list of RATTA before |
| `SMAX` | `integer` | Maximu | m spool number in cur |
| `SMBFLG` | `string(120)` | Symbol | extensible flag (as text) |
| `SMBFLI` | `integer` | Symbol | extensible mode (None, Right, |
| `SMEMB` | `element(10000)` | Immedi | ate members in second |
| `SMIDEN` | `string(128)` | Smart | geo identifier |
| `SMNO` | `integer` | SMODU | number |
| `SMOD` | `string` | Sectio | ning mode |
| `SMOM` | `real(3)` | Start | moment component |
| `SMOPOS` | `real(2)` | Smart | geo position |
| `SMOROT` | `real` | Smart | geo rotation |
| `SMSCLE` | `real` | Smart | geo scale |
| `SMSIDE` | `integer` | Smart | geo side |
| `SMTYPE` | `string(128)` | Smart | geo type |
| `SOLFILLED` | `logical` | Solid | Filled Flag |
| `SORF` | `element` | Source | reference (for automa |
| `SOUR` | `string(1000)` | Source | macro |
| `SPACING` | `real` | Spacin | g gap |
| `SPBREF` | `element` | Refere | nce to boundary elemen |
| `SPCREF` | `element` | Refere | nce to a space elemen |
| `SPECIF` | `logical` | T | rue if outer panel c d |
| `SPIN` | `string(4)` | D | RAFT user defined s n |
| `SPINRE` | `element` | R | eference to external i |
| `SPKBRK` | `logical` | A | TTA flag to treat as a real e |
| `SPKCHG` | `element` | f | lag to show where a spec c |
| `SPKDI` | `real` | P | roportional distance of s |
| `SPLA` | `string` | N | ame of spigot plate |
| `SPLATE` | `word` | S | ection plate |
| `SPLH` | `string(120)` | O | ld spooler head tube s |
| `SPLLNK` | `element` | S | pooler Element Link |
| `SPLMEM` | `element(1500)` | S | pooling table attribute o e |
| `SPLN` | `string(120)` | O | ld spooler component s |
| `SPLNUM` | `integer` | S | pool number |
| `SPLP` | `string(120)` | S | pool number prefix |
| `SPLPARENT` | `element(500)` | elemtype    B | ranches referenced by a S |
| `SPLT` | `string(120)` | O | ld spooler tube spool n |
| `SPLTBL` | `integer(2000)` | T | able linking SPOOL & F c |
| `SPLVOLUME` | `real(3)` | V | olume of a SPOOL eleme |
| `SPMA` | `real` | word    Spec | angle maximum answe |
| `SPMAAS` | `element(500)` | pos     Finds | all adjoining spaces of a point |
| `SPMACC` | `string(25)` | Acces | s authorization code |
| `SPMACD` | `string(75)` | Acces | s authorization descr |
| `SPMALL` | `real` | Struc | tural Allowance |
| `SPMAOF` | `real` | Offse | t AFT |
| `SPMARA` | `real` | Area | of face |
| `SPMARE` | `real` | Area | of face |
| `SPMAS` | `element` | pos     Retur | ns an adjoining space locat |
| `SPMATP` | `integer` | Type | of space arran |
| `SPMBB` | `real(6)` | Bound | ing box |
| `SPMBIN` | `integer` | Bound | ary identification numbe |
| `SPMBNA` | `string(80)` | Bound | ary name |
| `SPMBOF` | `real` | Offse | t BOT |
| `SPMBOX` | `real(6)` | Bound | ing box |
| `SPMBR` | `element` | Bound | ing reference |
| `SPMCAS` | `real` | Calcu | lated steel paint area of sp |
| `SPMCDE` | `string(75)` | Conte | nt description |
| `SPMCF` | `element` | pos     Retur | ns the closest face to a |
| `SPMCFA` | `real` | Floor | area |
| `SPMCLI` | `word(2000)` | List o | f customer attributes for sp |
| `SPMCOL` | `integer` | Colour |  |
| `SPMCOS` | `real(3)` | Calcul | ated center of steel struct |
| `SPMCOV` | `pos` | Center | of Volume |
| `SPMCTY` | `string(25)` | Conten | t type code |
| `SPMCWB` | `real` | Calcul | ated length of butt weld |
| `SPMCWC` | `real` | Calcul | ated Weight of space |
| `SPMCWL` | `real` | Calcul | ated length of fillet weld |
| `SPMCWS` | `real` | Calcul | ated Weight of steel struct |
| `SPMDE` | `real` | Densit | y |
| `SPMEAS` | `real` | Estima | ted steel paint area of spa |
| `SPMEHC` | `real` | Estima | ted HVAC Capacity |
| `SPMEN` | `string(26)` | Envelo | p name |
| `SPMEPC` | `real` | Estima | ted Power Consum |
| `SPMEWB` | `real` | Estima | ted length of butt weld |
| `SPMEWC` | `real` | Estima | ted Weight of space |
| `SPMEWL` | `real` | Estima | ted length of fillet weld |
| `SPMEWS` | `real` | Estima | ted weight of steel struct |
| `SPMFAR` | `real` | Face a | rea |
| `SPMFCL` | `string(20)` | Fire c | lass |
| `SPMFLW` | `real` | — | Full load weight |
| `SPMFOF` | `real` | — | Offset FWD |
| `SPMFRM` | `element` | pos, dir, int | eger    Returns the first reference model a ray intersects |
| `SPMFST` | `integer` | — | Face state |
| `SPMHSN` | `string(50)` | — | Hull surface name |
| `SPMLSC` | `string(25)` | — | Space Category |
| `SPMMVO` | `real` | — | Total (moulded) volume |
| `SPMNBI` | `integer` | — | Next boundary identification number |
| `SPMNOC` | `string(25)` | — | Noise category code |
| `SPMNOD` | `string(75)` | — | Noise category description |
| `SPMNVO` | `real` | — | Net volume |
| `SPMOPT` | `integer` | — | Type of space management operation |
| `SPMOTP` | `string(20)` | — | Type of space management operation as enumerated |
| `SPMPED` | `real` | — | Permeability Damage |
| `SPMPER` | `real` | — | Permeability |
| `SPMPFN` | `string(50)` | — | Polyface name |
| `SPMPOF` | `real` | — | Offset PS |
| `SPMPP` | `real(5)` | — | Precise properties |
| `SPMPU` | `string(25)` | — | Purpose code |
| `SPMRDH` | `real` | — | Required deck height |
| `SPMRFA` | `real` | — | Required floor area |
| `SPMRSE` | `string(25)` | — | Required service code |
| `SPMRSN` | `string(50)` | — | Reference surface name |
| `SPMRSO` | `element` | face | Returns the RSO of the |
| `SPMRTE` | `element` | Refere | nce to envelop space |
| `SPMSAC` | `string(25)` | Safety | category code |
| `SPMSAD` | `string(75)` | Safety | category descri |
| `SPMSAN` | `string(80)` | Space | arrangement name |
| `SPMSBD` | `element(500)` | Space | boundary defini |
| `SPMSEC` | `string(25)` | Securi | ty classification code |
| `SPMSED` | `string(75)` | Securi | ty classification descri |
| `SPMSFI` | `integer` | Subfac | e identification number |
| `SPMSFP` | `element` | Return | s the space that contai |
| `SPMSOF` | `real` | Offset | SB |
| `SPMSS` | `integer` | Space | state |
| `SPMSTP` | `integer` | User d | efined subtype |
| `SPMSWT` | `integer` | Type o | f space world |
| `SPMTHC` | `string(25)` | Therma | l insulation code |
| `SPMTHD` | `string(75)` | Therma | l insulation descri |
| `SPMTIC` | `string(25)` | Compar | tment tightness code |
| `SPMTID` | `string(75)` | Compar | tment tightness descri |
| `SPMTOF` | `real` | Offset | TOP |
| `SPMTOL` | `integer` | Type o | f limits |
| `SPMTYP` | `string(20)` | Type o | f space world as enumer |
| `SPMVOI` | `integer` | Space | void marker |
| `SPOONUMBER` | `string(120)` | Spool | number including spool |
| `SPOW` | `element` | Refer | ence of SPEC owning SPCO |
| `SPPOSN` | `integer` | Posit | ion number of spigot plate |
| `SPPURP` | `word` | Speci | al purpose table attri |
| `SPRA` | `real` | word    Spec | angle answer |
| `SPRANG` | `real` | Sprin | gback angle |
| `SPRB` | `real` | word    Spec | bore answer |
| `SPRE` | `element` | Compo | nent spec refer |
| `SPRLCK` | `string(32)` | Detai | ling Bolt Set Sprin |
| `SPSF` | `element` | Sheet | pointset reference |
| `SPSP` | `string(2)` | Old s | pooler spool prefix |
| `SPTYPE` | `word` | Type | of element to be selec |
| `SPWD` | `string` | word    Spec | text answer |
| `SQNUMB` | `integer` | Part | Sequence on Nest |
| `SRCNM` | `string(120)` | Simul | ation Source Name |
| `SREF` | `string(12)` | Sourc | e reference |
| `SREL` | `integer` | Start | releases (packed) |
| `SREVAY` | `element(50)` | Sheet | revisions array |
| `SRFPNT` | `pos` | Surfa | ce orientation point |
| `SRFSID` | `integer(1000)` | Side | of surface |
| `SRFTRE` | `element` | Refer | ence to a SRFTRT eleme |
| `SRFVEC` | `dir` | Vector |  |
| `SRTP` | `integer` | Sortin | g priority for dimens |
| `SSLENGTH` | `real` | Second | side length |
| `SSPLIT` | `logical` | Spool | Split |
| `STACOM` | `string(1000)` | Commen | t to the current status |
| `STADATE` | `datetime(2)` | Standa | rd Date |
| `STAELE` | `real` | Start | Elevation |
| `STAHIS` | `Int array` | STADAT | is also a date attrib its ty int ar conver system db_dat frombi method |
| `STAHRF` | `element` | Status | History Reference |
| `STALNK` | `Int array` | Same a | ttributes have to be add histor whenev create on STA pushed status bound elemen passin |
| `STAN` | `real` | Start | angle |
| `STAP` | `real` | Length | of arrive straight tube |
| `STAPOINT` | `integer` | Cable | Start connection point |
| `STAREA` | `string(120)` | Reason | for the current status |
| `STAREF` | `element` | Ca | ble Start reference |
| `STARTI` | `string(120)` | St | art ID |
| `STARTZ` | `logical` | St | art from zero |
| `STASUS` | `logical` | Cu | rrent status suspended |
| `STAUSE` | `string(120)` | St | andard User |
| `STBINF` | `pos` | integer    St | art bend information |
| `STBO` | `real` | SU | PCOMP tail bore |
| `STCALN` | `word` | St | ructural connection al |
| `STCBND` | `integer` | St | ructural connection bo |
| `STCD` | `string(120)` | Sy | mbol Code |
| `STCOFF` | `real` | St | ructural connection of |
| `STCREF` | `element` | St | ructural connection re |
| `STDC` | `string(120)` | St | andard code |
| `STDEFREF` | `element` | St | atus definition |
| `STDNUM` | `integer` | St | andard Number |
| `STDTXT` | `string(32)` | St | andard |
| `STEPID` | `integer` | St | ep ID |
| `STEPSP` | `logical` | St | epwise springback |
| `STEREF` | `element(500)` | St | encil reference array for sc |
| `STEX` | `string(2000)` | S | Text string |
| `STFC` | `real` | Co | nstant stretch factor |
| `STFP` | `real` | Pr | oportional stretch fa |
| `STHOOK` | `string(256)` | St | art hook reference |
| `STILEN` | `real` | integer    St | ail length |
| `STILEX` | `real` | Stile | Exit Width |
| `STINCD` | `string(120)` | Inside | surface treatment symbol |
| `STINRF` | `element` | Inside | surface treatment refere |
| `STITL` | `string(1000)` | Sheet | title |
| `STLE` | `real` | Length | of leave straight tube |
| `STLPOS` | `element` | Status | Element reference |
| `STLR` | `element` | Steel | Reference |
| `STLSF` | `element` | Databa | se reference |
| `STMF` | `element` | Templa | te selection pointe |
| `STMPLS` | `element(10000)` | List o | f STAMPs related to an MDB |
| `STOCKL` | `real` | Stock | Length |
| `STOUCD` | `string(120)` | Outsid | e Surface treatm |
| `STOURF` | `element` | Outsid | e surface treatment refere |
| `STPDAT` | `string` | Calcul | ated or Persisted Stamp |
| `STPDBS` | `element(5000)` | Stamps | containing db |
| `STPOSE` | `real(2)` | Ending | point start |
| `STPOSS` | `real(2)` | Starti | ng point start |
| `STPSES` | `integer(5000)` | Sessio | ns used in at least one st |
| `STPUV` | `pos` | Start | point |
| `STRCD` | `integer` | STRCD |  |
| `STRCON` | `string(120)` | Stair | Configuration |
| `STRE` | `real` | Spot v | alue of stress |
| `STREAT` | `string(26)` | Su | rface treatment |
| `STREF` | `element` | St | art reference |
| `STREFS` | `element` | St | art order references |
| `STREV` | `string(120)` | St | ring value evaluation |
| `STRFNC` | `string(75)` | St | ructural Function de |
| `STRJUS` | `word` | Ca | ble Way Justification Li |
| `STRLIM` | `integer` | St | ructure limit |
| `STRREF` | `element(100)` | St | ructure references |
| `STRSN` | `real` | St | ringer Snipe |
| `STRSTD` | `string(120)` | St | air Standard |
| `STRTDT` | `datetime(2)` | St | art Date |
| `STRXP` | `integer(500)` | St | ring expression |
| `STRXPL` | `logical` | Tr | ue if surface treatment ex |
| `STSEQU` | `integer` | St | art Sequence Position of la ex |
| `STSESS` | `integer` | Da | tabase session number |
| `STSP` | `element` | St | ructural specification |
| `STTYCD` | `integer` | Ty | pe code for beginning of |
| `STTYP` | `integer` | St | art type |
| `STVALI` | `string(10)` | element    Al | ias of user making last st |
| `STVASD` | `element(500)` | St | atus types eligible |
| `STVCOM` | `string` | element    St | atus comment |
| `STVDAT` | `datetime(2)` | element    St | atus Modification Date |
| `STVDEMOTE` | `element` | De | mote Status Value |
| `STVDSC` | `string` | element    St | atus description |
| `STVLNK` | `element` | element    St | atus value Reference |
| `STVLST` | `element(500)` | St | atuses assigned |
| `STVMOD` | `string(120)` | element    Da | te of last status mo |
| `STVNAM` | `string` | element    St | atus value name |
| `STVNUM` | `integer` | element    St | atus value |
| `STVPROMOTE` | `element` | Pr | omote Status Value |
| `STVREA` | `string` | element    St | atus reason |
| `STVREF` | `element` | Va | lue Ref |
| `STVSUS` | `logical` | element    Cu | rrent status held |
| `STVTRV` | `element(500)` | Va | lid Transitions |
| `STVUNR` | `element(500)` | Un | resolved Status refs |
| `STVUSD` | `element(10000)` | El | ements having this st |
| `STVUSE` | `string(120)` | element    Us | er making last status mo |
| `STVVAL` | `element` | element    St | atus value Reference |
| `STVVLD` | `logical` | element    Tr | ue if Status valid to be co |
| `STYF` | `element` | Re | p style reference |
| `STYP` | `string` | SP | ECON type question |
| `STYPDB` | `string` | DB | sub type |
| `SUBRUL` | `integer(200)` | attr       Li | st of subrule indexes for gi |
| `SUFFIX` | `string(50)` | Su | ffix |
| `SUPALINVALID` | `element(100)` | Al | l invalid ANCI REFS on a SI |
| `SUPALLANCIS` | `element(100)` | Al | l ANCI REFs on a SITE, ZO |
| `SUPFRARRAY` | `element(100)` | S | upport FIXINGs r |
| `SUPIRARRAY` | `element(100)` | I | nvalid ANCILLARY s a |
| `SUPLST` | `element(100)` | word        A | ll supports connected to a |
| `SUPP` | `string(120)` | S | upplier Name |
| `SUPR` | `element` | S | UPREF |
| `SUPRFARRAY` | `element(100)` | A | NCILLARY reference a |
| `SUPVFARRAY` | `logical(10)` | I | ndividual ANCI valid flags a |
| `SURECO` | `integer` | S | urface exposure code |
| `SURF` | `string(120)` | S | urface Preparation |
| `SURLNK` | `element` | R | eference to a terrain s |
| `SURMAT` | `string(100)` | S | urface Material |
| `SURNOR` | `dir` | pos, dir    S | urface Normal |
| `SURPNT` | `pos` | pos, dir    S | urface Point |
| `SURPRE` | `string(100)` | S | urface Preparation |
| `SUWGAL` | `real` | S | upport + Supported ALL G |
| `SUWGSA` | `real` | S | upported ALL Gross w |
| `SUWGST` | `real` | S | upported Gross weight |
| `SUWNAL` | `real` | S | upport + Supported Nett w |
| `SUWNSA` | `real` | S | upported ALL Nett w |
| `SUWNST` | `real` | S | upported Nett weight |
| `SUWRAL` | `real` | S | upport + Supported Rough |
| `SUWRSA` | `real` | Suppor | ted ALL Rough weight |
| `SUWRST` | `real` | Suppor | ted Rough weight |
| `SVASPLANE` | `logical` | Hull s | ymbolic view as plane |
| `SVASSEMBLIES` | `element(100)` | Hull s | ymbolic view assemb |
| `SVAUTO` | `logical` | Hull s | ymbolic view auto Y/N |
| `SVBLEXCLUDE` | `logical` | Hull s | ymbolic view exclud |
| `SVBLOCKS` | `element(100)` | Hull s | ymbolic view block elemen |
| `SVCAX` | `logical` | Hull s | ymbolic view coord axis Y |
| `SVCOMNO` | `integer` | Hull s | ymbolic view compon |
| `SVCOMTYPE` | `integer` | Hull s | ymbolic view compon |
| `SVCROSSSYM` | `logical` | Hull s | ymbolic view cross sect s |
| `SVCURTYPE` | `integer` | Hull s | ymbolic view curve type |
| `SVCURVES` | `element(100)` | Hull s | ymbolic view curve elemen |
| `SVDBEFORE` | `string(20)` | Hull s | ymbolic view depth before |
| `SVDBEHIND` | `string(20)` | Hull s | ymbolic view depth behind |
| `SVDRACCOM` | `logical` | Hull s | ymbolic view draw accomm |
| `SVDRAINTERS` | `logical` | Hull s | ymbolic view draw inters |
| `SVDRAP` | `logical` | Hull s | ymbolic view draw plane |
| `SVDRCWAY` | `logical` | Hull s | ymbolic view draw cablew |
| `SVDREQUIP` | `logical` | Hull s | ymbolic view draw equip |
| `SVDRPIPE` | `logical` | Hull s | ymbolic view draw pipe Y |
| `SVDRPVOL` | `logical` | Hull s | ymbolic view draw pvol Y |
| `SVDRSTRUCT` | `logical` | Hull s | ymbolic view draw struct |
| `SVDRVENT` | `logical` | Hull s | ymbolic view draw ventil |
| `SVLOOKING` | `integer` | Hull s | ymbolic view looking direct |
| `SVLXMAX` | `string(20)` | Hull s | ymbolic view xmax |
| `SVLXMIN` | `string(20)` | Hull s | ymbolic view xmin |
| `SVLYMAX` | `string(20)` | Hull s | ymbolic view ymax |
| `SVLYMIN` | `string(20)` | Hull s | ymbolic view ymin |
| `SVLZMAX` | `string(20)` | Hull s | ymbolic view zmax |
| `SVLZMIN` | `string(20)` | Hull s | ymbolic view zmin |
| `SVNAME` | `string(1000)` | Hull s | ymbolic view name |
| `SVPANELS` | `element(100)` | Hull s | ymbolic view panel elemen |
| `SVPLEXCLUDE` | `logical` | Hull s | ymbolic view exclud |
| `SVPLTYPE` | `integer` | Hull s | ymbolic view plane type |
| `SVPLXORIGIN` | `string(20)` | Hull s | ymbolic view x1 |
| `SVPLXUAXIS` | `string(20)` | Hull s | ymbolic view x2 |
| `SVPLXVAXIS` | `string(20)` | Hull s | ymbolic view x3 |
| `SVPLYORIGIN` | `string(20)` | Hull s | ymbolic view y1 |
| `SVPLYUAXIS` | `string(20)` | Hull s | ymbolic view y2 |
| `SVPLYVAXIS` | `string(20)` | Hull s | ymbolic view y3 |
| `SVPLZORIGIN` | `string(20)` | Hull s | ymbolic view z1 |
| `SVPLZUAXIS` | `string(20)` | Hull s | ymbolic view z2 |
| `SVPLZVAXIS` | `string(20)` | Hull s | ymbolic view z3 |
| `SVPNAM` | `string(1000)` | Hull s | ymbolic view pan name |
| `SVPONLY` | `logical` | Hull s | ymbolic view pan only |
| `SVPOSCOAXIS` | `string(20)` | Hull s | ymbolic view coord axis p |
| `SVREFLECT` | `logical` | Hull s | ymbolic view reflect Y/N |
| `SVRSO` | `logical` | Hull s | ymbolic view RSO Y/N |
| `SVSCALE` | `real` | Hull s | ymbolic view scale |
| `SVSHPROFILE` | `logical` | Hull s | ymbolic view profile Y/N |
| `SVSHSEAM` | `logical` | Hull s | ymbolic view shell seam Y |
| `SVSHTHICK` | `logical` | Hull s | ymbolic view shell thickn |
| `SVTYPE` | `integer` | Hull s | ymbolic view type |
| `SVWAY` | `element(50)` | Sheet | Views array |
| `SWEEP` | `real` | Sweep | angle |
| `SWING` | `word` | Swing |  |
| `SYLBTA` | `word` | SYLBTA | ble attribute |
| `SYMBFG` | `logical` | Symbol | flag |
| `SYMCNA` | `element(1000)` | Symbol | Connection Array |
| `SYMELE` | `element` | — | Symmetric element |
| `SYMFNT` | `integer` | — | Labelling symbol font |
| `SYMGRO` | `string(120)` | — | Symbol Group |
| `SYMLNS` | `integer` | — | Side of direction vector |
| `SYMM` | `integer` | — | Symmetry code |
| `SYMNAM` | `string(120)` | — | Symbol Name |
| `SYMNUM` | `integer` | — | Labelling symbol number |
| `SYMRFG` | `logical` | — | Symbolic representation flag |
| `SYMTYP` | `integer` | — | Labelled symbol type |
| `SYMXYZ` | `dir` | — | Vector along symmetry line |
| `SYSZ` | `real` | — | Symbol size (uniform scaling) |
| `SYTBOK` | `logical` | — | SYLBTA attribute updated flag |
| `SZDI` | `real` | — | Start load point in section |


## Attribute T

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `TAACTI` | `logical` | — | Task Active |
| `TAASTA` | `element` | word, integer | Assigned Task Reference |
| `TAATCT` | `integer` | word | Assigned Tasks Count |
| `TAATDS` | `string` | word, integer | Assigned Task Description |
| `TAATKS` | `element(500)` | word | Assigned Tasks |
| `TAATNA` | `string(200)` | word | Assigned Task Name |
| `TAATNB` | `integer` | word, integer | Assigned Task Number |
| `TAATNS` | `string` | word | Assigned Task Names |
| `TAATSN` | `string` | word, integer | Assigned Task Status Name |
| `TABANS` | `real(10)` | — | Tabular answers |
| `TABCLN` | `stringarray(10)` | — | Tabite Class Name |
| `TABREF` | `element(100)` | — | Tabite reference |
| `TACOL` | `string(120)` | — | Task Colour |
| `TACORO` | `real(50)` | — | Task Connection Route |
| `TAFILT` | `string(120)` | — | Task Filter |
| `TAFONT` | `string(120)` | — | Task Font |
| `TAGCD` | `integer` | — | Tag code |
| `TAGCDS` | `integer(25)` | — | Tag codes |
| `TAGNMS` | `integer(25)` | — | Tag numbers |
| `TAGNUM` | `integer` | — | Tag number |
| `TAHEIG` | `real` | — | Task Height |
| `TAILH` | `real` | — | Tail duct height |
| `TAILW` | `real` | — | Tail duct width |
| `TAISAS` | `logical` | word | True if element is assigned to a task |
| `TALOSE` | `string(32)` | — | Task Logic Selection |
| `TANAME` | `string(80)` | — | Task Item Name |
| `TANGLE` | `real` | — | Tile Angle |
| `TANGOF` | `real` | — | Tangent offset |
| `TANS` | `string(257)` | — | Text answer for text styp in spec |
| `TANSCT` | `integer` | — | Task Name Space Count |
| `TANSNA` | `string(200)` | integer | Task Name Space Name |
| `TANSNS` | `string` | word | Task Name Space Names |
| `TAPOS` | `real(2)` | — | Task Position |
| `TAPREF` | `element` | Tapping t | able reference |
| `TARF` | `element` | Target re | ference |
| `TASKID` | `string(50)` | Task ID |  |
| `TASKTY` | `string(32)` | Task Type |  |
| `TASTDS` | `string` | word    Task Stat | us Description |
| `TASTNA` | `string` | word    Task Stat | us Name |
| `TASTNB` | `integer` | word    Task Stat | us Number |
| `TASTVA` | `element` | word    Task Stat | us Value Reference |
| `TATCOL` | `string(120)` | Task Text | Colour |
| `TATYIN` | `string(500)` | Task Inpu | t Type |
| `TATYOU` | `string(500)` | Task Outp | ut Type |
| `TATYPE` | `string(10)` | Text answ | er type |
| `TATYTR` | `string(32)` | Task Trea | ted Type |
| `TAWID` | `real` | Task Widt | h |
| `TBID` | `integer` | Tribon ID |  |
| `TBNAME` | `string(25)` | TbName |  |
| `TBOR` | `real` | Tail bore |  |
| `TCAT` | `element` | Trace cat | alog reference |
| `TCDD` | `string(250)` | word    Current d | esign property default v |
| `TCDP` | `string(250)` | word    Current d | esign property value |
| `TCOD` | `string` | Hashed or | igin code |
| `TCON` | `word` | Tail conn | ection type |
| `TCORRO` | `real` | Tail Corr | osion |
| `TCREF` | `element(100)` | Tail conn | ections |
| `TCTL` | `real` | True cut | length |
| `TDATUM` | `pos` | Definitio | n of a specific point on |
| `TDEF` | `string(257)` | Text defa | ult for text styp in spec |
| `TDET` | `element` | Trace det | ail text reference |
| `TDIR` | `dir` | Tail dire | ction |
| `TDMF` | `element(2)` | ISODRAFT | Reference Dimension |
| `TDMT` | `word(2)` | ISODRAFT | Reference Dimension |
| `TDPR` | `real` | word    Template | design dataset property |
| `TDRT` | `string(2000)` | Trace det | ail RTEXT |
| `TDSHAP` | `word` | Branch ta | il duct shape |
| `TDST` | `string(2000)` | Trace det | ail STEXT |
| `TDTT` | `string(2000)` | Trace det | ail TTEXT |
| `TEAMLS` | `element(1000)` | List of T | EAMs to which USER belo |
| `TEAMSTATUS` | `word` | Access Co | ntrol team status |
| `TEMF` | `element` | Team refe | rence |
| `TEMP` | `real` | Temperatu | re |
| `TEND` | `string` | Connectio | n at other end of TREF ( |
| `TEQDES` | `string(120)` | To Equipm | ent Description |
| `TESTEV` | `logical` | Result of | constraint test evaluatio |
| `TESTXP` | `integer(500)` | Logical E | xpression |
| `TEXIST` | `logical` | True if c | omponent has TUBI. Alw offline b |
| `TEXLEN` | `integer` | Length of | text |
| `TEXTD` | `string(120)` | Generic T | ext Data Storage |
| `TFDP` | `element` | word    Template | design dataset property |
| `TGEOM` | `logical` | True if c | omponent has TUBI geom |
| `TGHETP` | `string(20)` | Type of T | ightness code |
| `TGHTYP` | `integer` | Type of T | ightness |
| `TGRA` | `real` | Pipework | temperature gradient |
| `THERMA` | `string(26)` | Thermal c | ategory |
| `THICKNESS` | `real` | Thickness |  |
| `THPO` | `pos` | Point thr | ough which viewing |
| `THSIZE` | `real(4)` | Thumbnail | size |
| `TIERHE` | `real(15)` | Heights o | f trays measured from path |
| `TIGHOL` | `logical` | Tight hol | e |
| `TIMEEND` | `integer` | End time | of COMMS window |
| `TIMEINTERVAL` | `integer` | COMMS ret | ry time interval |
| `TIMEOUTNUMBER` | `integer` | COMMS max | retry count |
| `TIMER` | `string(120)` | Frequency | of DB propagati |
| `TIMESTART` | `integer` | Start tim | e of COMMS window |
| `TIMFAC` | `real` | Pathtime | time factor |
| `TIMPET` | `string(15)` | Time fact | or pre text |
| `TIMPOT` | `string(15)` | Time fact | or post text |
| `TITL` | `string(1000)` | Title |  |
| `TLCONN` | `element(500)` | List of e | lements connected |
| `TLIN` | `logical` | True lengt | h indicator |
| `TLREF` | `element(500)` | List of at | tachment connected |
| `TLVBEV` | `real` | Profile tr | ace length, V bevel |
| `TLXBEV` | `real` | Profile tr | ace length, X bevel |
| `TLYBEV` | `real` | Profile tr | ace length, Y bevel |
| `TMAT` | `element` | Trace mate | rial text reference |
| `TMAV` | `real` | Average te | mperature |
| `TMDWG` | `string(120)` | AutoCAD te | mplate name |
| `TMMA` | `real` | Maximum te | mperature |
| `TMMI` | `real` | Minimum te | mperature |
| `TMPLTF` | `string(2000)` | Datasheet | Template filename |
| `TMPR` | `element` | Template r | eference from SPCO |
| `TMRF` | `element` | Template r | eference |
| `TMRFSE` | `element` | Secondary | template reference |
| `TMRMASTER` | `element` | Template R | epeat Master Duplicate |
| `TMROWNER` | `element` | Template R | epeat Owning Element |
| `TMRREF` | `element` | Template R | epeat Element Reference |
| `TMRRULE` | `integer(500)` | Template R | epeat Rule |
| `TMRXREF` | `element(500)` | Return ref | erence from TMRREL ele repeat ele |
| `TMSAAA` | `logical` | Automatic | Admin Approval |
| `TMSADP` | `logical` | Automatic | Discipline Pulldown |
| `TMSDIF` | `element` | TMS Discip | line |
| `TMSPRJ` | `logical` | Flag to no | tify if this is a TMS Projec |
| `TMSUSR` | `string(120)` | TMS user |  |
| `TMXT` | `string(2000)` | Trace mate | rial XTEXT |
| `TMYT` | `string(2000)` | Trace mate | rial YTEXT |
| `TMZT` | `string(2000)` | Trace mate | rial ZTEXT |
| `TNVOL` | `real` | Terrain ne | t volume |
| `TODATA` | `string(120)` | To check t | he mode of creation f |
| `TOODIR` | `integer` | Tool path | direction |
| `TOPCUT` | `real` | Top Stile | Cut Distance |
| `TOPOLOGY` | `string(120)` | Branch top | ology |
| `TOPSTR` | `real` | TOP String | er Gap |
| `TOTALT` | `real` | Total mach | ine time for a nested pla |
| `TOTLAB` | `real` | Total labe | l pathtime |
| `TOTLEN` | `real` | Total manu | al length |
| `TOTT` | `real(2)` | Total path | time |
| `TOTTI` | `real(2)` | Total path | time, I-bevel |
| `TOTTX` | `real(2)` | Total path | time, X-bevel |
| `TOTTY` | `real(2)` | Total path | time, Y-bevel |
| `TPAR` | `real(30)` | Trace cata | log component parameters |
| `TPAREA` | `string(120)` | Templated | Project Area Name |
| `TPDISC` | `string(120)` | Templa | ted Project Discip |
| `TPEN` | `integer` | Text p | en |
| `TPLFRR` | `element(10000)` | integer    Topolo | gy references - from |
| `TPLFRT` | `integer(10000)` | element    Topolo | gy reference types - from |
| `TPLPAR` | `real(50)` | Templa | te parameters |
| `TPLTOR` | `element(10000)` | integer    Topolo | gy references - to |
| `TPLTOT` | `integer(10000)` | element    Topolo | gy reference types - to |
| `TPLTYP` | `string(25)` | Templa | te type |
| `TPON` | `integer` | TO por | t number |
| `TPOS` | `pos` | Tail p | osition |
| `TPOSE` | `real` | Eastin | g of tail position |
| `TPOSN` | `real` | Northi | ng of tail position |
| `TPOSTO` | `real` | Top po | st offset |
| `TPOSU` | `real` | Upping | of tail position |
| `TPREF` | `element` | Tail p | oint reference |
| `TPRESS` | `real` | TestPr | essure |
| `TPVAL` | `string(1000)` | Task p | arameter name |
| `TQUAL` | `string(257)` | Text q | ualifier in spec or sele |
| `TQUES` | `string(257)` | Text q | uestion in spec or sele |
| `TRANS` | `real(12)` | Local | transformation matrix |
| `TRAYH` | `real` | Tray h | eight |
| `TRAYOW` | `real` | Tray o | ther width |
| `TRAYRW` | `real` | Tray R | educe Width |
| `TRAYSW` | `real` | Tray s | ide width |
| `TRAYW` | `real` | Tray W | idth |
| `TRCG` | `logical` | DRAFT | user defined symbol |
| `TRCLIN` | `word` | Trace | line |
| `TRCOS` | `element` | Symbol | ic trace other side style |
| `TRCTS` | `element` | Symbol | ic trace this side style |
| `TREADD` | `real` | Tread | Depth |
| `TREADO` | `real` | Tread | Overlap |
| `TREATP` | `element` | Tread | type |
| `TREF` | `element` | Tail r | eference |
| `TRGENA` | `logical` | Initia | l Value |
| `TRIMCE` | `integer(10000)` | Array | of Trimmed Cells |
| `TRIMTY` | `word` | CTWALL | TRIM TYPE |
| `TRLEN` | `real` | Tracin | g length |
| `TRSF` | `element` | Tag ru | leset reference |
| `TRUN` | `real` | Trunca | tion value (+ve) or percen |
| `TRUNTX` | `string(80)` | Trunca | tion value (+ve) or percen |
| `TSESS` | `string(640)` | integer    Identi | fier of Transaction contai |
| `TSFBR` | `logical` | Spooli | ng marker for leave tube |
| `TSIZ` | `real` | Termin | ator size |
| `TSIZTX` | `string(80)` | Termin | ator size text |
| `TSKDEF` | `element` | Refere | nce to the task defini |
| `TSKFCE` | `element` | Reference | to the flow chart elem |
| `TSKNAM` | `string(80)` | Task Defin | iton Name |
| `TSKREF` | `element(500)` | Assigned t | asks list |
| `TSLEN` | `real` | Total susp | ension length |
| `TSPE` | `element` | Tracing sp | ec reference |
| `TSPR` | `element` | Trace spec | ification component |
| `TTEX` | `string(2000)` | T Text str | ing |
| `TTFACE` | `string(128)` | TrueType f | ont face name |
| `TTFDES` | `string(128)` | TrueType f | ont description |
| `TTFENA` | `logical` | TrueType f | onts enabled flag |
| `TTFIND` | `integer` | TrueType f | ont index |
| `TTHOFF` | `real` | Top Tube H | oop Offset |
| `TTYP` | `word` | Template t | ype |
| `TUCL` | `real` | Tube cente | rline length of branch |
| `TUFG` | `logical` | Tubing fla | g |
| `TUFL` | `logical` | Tube flag |  |
| `TULE` | `real` | Tube lengt | h of branch |
| `TUNI` | `string(20)` | Default un | it of value (falls back to di if not set Attributes |
| `TVALS` | `real(1000)` | t Values |  |
| `TVIS` | `logical` | Top visibi | lity flag |
| `TVOL` | `real` | Terrain vo | lume |
| `TWALLT` | `real` | Tail wall | thickness |
| `TWIDIS` | `real(2147483647)` | Profile tw | ist distance |
| `TWIDTH` | `real` | Tread Widt | h |
| `TWIST` | `logical` | True if tw | isted |
| `TWIVEC` | `real(2147483647)` | Profile tw | ist orientation vector |
| `TWLEN` | `real` | Total weld | length |
| `TWRF` | `element` | Tail Worki | ng Point (Router) |
| `TWSHRH` | `string(32)` | Detailing | Bolt Set Head- Side Taper |
| `TWSHRN` | `string(32)` | Detailing | Bolt Set Nut-Side Tapered Wa |
| `TWSTAN` | `real` | Twist angl | e |
| `TXALIGN` | `string` | Text align | ment |
| `TXAREA` | `real` | Total Cabl | eway X-area |
| `TXCOLG` | `integer` | GLabel sty | le text color |
| `TXCOLO` | `integer` | Text color |  |
| `TXCONU` | `integer` | Text color | number |
| `TXDIR` | `integer` | Text direc | tion pline number |
| `TXGRGB` | `integer(4)` | RGB glabel | style text color |
| `TXGRGP` | `integer(4)` | RGB glabel | style text color physical |
| `TXHINT` | `word` | Text heigh | t interpretation mode flag |
| `TXSPLI` | `logical` | Text split | ting flag |
| `TXSTRF` | `element` | Text style | reference |
| `TXSTRI` | `string(1000)` | Text Strin | g for enhanced LineStyles |
| `TXTFNT` | `integer` | Labelling | text font |
| `TXTRGB` | `integer(4)` | RGB text c | olor |
| `TXTRGP` | `integer(4)` | RGB | text color physical |
| `TXTTYP` | `integer` | Labe | lled text type |
| `TXTVAL` | `string(80)` | Deta | iling Element Text Valu |
| `TYNU` | `integer` | Numb | er type |
| `TYPE` | `word` | Type | of the element, igno to 4 |
| `TYPEA` | `string(10)` | TYPE | A |
| `TYPEB` | `string(10)` | TYPE | B |
| `TYPECD` | `integer` | Type | code |
| `TYPECE` | `integer` | Type | code |
| `TYPEDB` | `string(6)` | DB t | ype |
| `TYPEXPRESSION` | `string(1000)` | Type | Expression |
| `TYPEXTYPE` | `string(15)` | Type | expression type |
| `TYPINC` | `logical` | Type | is inclusive |
| `TYPREFERENCE` | `element` | Refe | rence to a datatype elem Stat |
| `TYSEQU` | `integer` | Type | Sequence Number |
| `TZAXI` | `dir` | tail | Z axis |


## Attribute U

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `U` | `real` | — | Position upping |
| `UAEXSS` | `real` | — | User Excess Arrive |
| `UALIAS` | `string(10)` | — | Alias of the standard user |
| `UALL` | `logical` | — | UALL |
| `UAREA` | `real` | — | Used area |
| `UAXIS` | `dir` | uAxis |  |
| `UBULG` | `real` | Used b | ulge factor for curve |
| `UCASES` | `logical` | Set tr | ue to allow Engine |
| `UCAT` | `string(120)` | Catego | ry on forms |
| `UCLONE` | `logical` | Propag | ate to linked elemen |
| `UCOD` | `integer` | Units | code |
| `UCODB` | `integer` | Units | code bore |
| `UCODD` | `integer` | Units | code distance |
| `UCONN` | `logical` | True i | f the element refere should connec |
| `UCURTYP` | `word` | Used c | urve type |
| `UCUTDI` | `dir` | Upper | Extension Cutting Direct |
| `UCVAL` | `element(500)` | refere | nced to controlling UVALID |
| `UDACPY` | `element` | UDA co | py |
| `UDALIS` | `word(2000)` | List o | f UDAs |
| `UDASET` | `word(2000)` | List o | f UDAs set |
| `UDATLS` | `word(200)` | List o | f attributes for UDET |
| `UDESC` | `string(4800)` | Full d | escription of the elemen |
| `UDETCHECK` | `string(120)` | Report | from UDET check on ele |
| `UDHLIST` | `word(120)` | Attrib | utes hidden on elemen define |
| `UDIRECTION` | `dir` | Up axi | s direction |
| `UDMLIST` | `word(2147483647)` | List o | f allowed member types |
| `UDNA` | `string(120)` | User d | efined name |
| `UDOLIST` | `word(2147483647)` | List o | f allowed owner types |
| `UDPEND` | `word(100)` | list o | f attributes that this attrib |
| `UDPMEM` | `word(500)` | Possib | le type members for a |
| `UDPOWN` | `word(500)` | Possib | le owners for a UDET |
| `UDPSFG` | `string(100)` | Name o | f PML function used f Functi single DBREF |
| `UDPSFS` | `string(100)` | Name o | f PML function used f Functi parame and a |
| `UDTABL` | `logical` | Determ | ines if UDA is to be indexe access |
| `UDTEX` | `integer(500)` | user D | efined Type Group Expres |
| `UDTGS` | `word(500)` | User D | efined Group Types |
| `UEEXSS` | `real` | User E | nd Excess |
| `UEXMAX` | `integer(500)` | Expres | sion defining the maximu |
| `UEXMIN` | `integer(500)` | Expres | sion defining the minimu |
| `UEXTNS` | `real` | Upper | Extension Length |
| `UGOING` | `real(10)` | Upper | Tread Going |
| `UHIDE` | `logical` | Set tr | ue to hide attribute on fo |
| `UHYPER` | `logical` | Set t | rue to treat attribute value an ex |
| `UIWE` | `string(1000)` | Unit | insulation weight |
| `UKEY` | `integer` | UDA k | ey - internal unique syste |
| `UKEYFR` | `integer` | Numbe | r of free UKey value |
| `ULEN` | `integer` | Lengt | h of data or text, array The m 21478 |
| `ULVOPT` | `logical` | Deter | mines if UDA valid value optio |
| `UMAX` | `real` | Maxim | um value |
| `UMDBRE` | `logical` | Deter | mines if User-MDB assoc |
| `UMIN` | `real` | Minim | um value |
| `UMINLE` | `integer` | Minim | um length for text or wo |
| `UNAM` | `string(12)` | Name | of user |
| `UNDERL` | `logical` | Under | ling flag |
| `UNIQID` | `string(256)` | Uniqu | e Identifier |
| `UNODUP` | `logical` | Set f | alse to dissallow dupli array |
| `UNRESO` | `logical` | attr    T/F o | n attributes that are unres |
| `UNTORD` | `integer` | Unit | order |
| `UNTSTDIMENSION` | `string(100)` | Unit | set dimension |
| `UNTSTSYSTEM` | `string(20)` | Unit | set system |
| `UPDCB` | `string(500)` | ADP up | date callback |
| `UPGDDB` | `integer` | Upgrad | e number for DB |
| `UPLLEN` | `real` | Used r | aw plate length |
| `UPPING` | `pos` | Upping | part expressed as a posi |
| `UPPREF` | `element` | Refere | nces to upper exit level |
| `UPRLEN` | `real` | Used p | rofile length |
| `UPROMPT` | `string(40)` | Textua | l prompt to display to the |
| `UPROTE` | `logical` | Set tr | ue to disallow viewin protec |
| `UPSEUD` | `logical` | Set tr | ue to calculate attrib than s databa be pro |
| `URADI` | `real` | Used r | adius for curve geomet |
| `UREF` | `element` | Units | reference |
| `URISE` | `real(10)` | Upper | Tread Rise |
| `URL` | `string(1024)` | URL |  |
| `USCCOG` | `pos` | User d | erived center of gravit |
| `USCLHI` | `element(5000)` | Elemen | ts in descendant hierar user |
| `USCWCO` | `pos` | User d | erived wet center of gra |
| `USCWEI` | `real` | Derive | d value for user weight |
| `USCWWE` | `real` | Derive | d value for user wet weight |
| `USECAP` | `logical` | Ca | pital Letter Usage In |
| `USECDE` | `string(120)` | Te | xt storing user code for ca |
| `USEF` | `element` | Us | er reference |
| `USEFED` | `real` | Us | er defined feed excess |
| `USEHDR` | `logical` | He | ader Usage Indicator |
| `USERC` | `string(120)` | Us | er name of user cl |
| `USEREQ` | `string(50)` | Re | questing user |
| `USERLS` | `element(2000)` | Li | st of USERs belonging to TE |
| `USERM` | `string(120)` | attr       Us | er making last mo |
| `USESS` | `string(640)` | integer    Us | er creating session |
| `USHVV` | `element` | UD | A shared valid value |
| `USNCLH` | `element(5000)` | El | ements in descendant hi th |
| `USRCOG` | `integer(500)` | Us | er center of gravity po |
| `USRLI` | `element(50)` | Va | lid users for given user lo |
| `USRMDB` | `element(100)` | MD | Bs that a user may se th |
| `USRWCO` | `integer(500)` | Us | er wet center of gravity po |
| `USRWEI` | `integer(500)` | Us | er entered weight value |
| `USRWWE` | `integer(500)` | Us | er entered wet weight va |
| `USUVAL` | `string(50)` | Un | it for Unit Set |
| `USYSTY` | `word` | Na | me of the system at |
| `UTCSES` | `logical` | integer    Tr | ue if the session date is a |
| `UTCSTP` | `logical` | Tr | ue if the stamp date is a ca |
| `UTCSWT` | `logical` | Tr | ue if System outputs UT Ti |
| `UTEAMS` | `element(500)` | Te | ams that will see a hi |
| `UTYP` | `word` | Ty | pe of the value. INT, RE WO DA |
| `UUID` | `string(36)` | Un | iversally unique id |
| `UUIDAR` | `integer(4)` | Un | iversally unique id |
| `UUIDIA` | `integer(4)` | Un | iversally unique id |
| `UUIDREF` | `element(500)` | word       Un | iversally unique id |
| `UUNI` | `string(80)` | Fo | r Real Attributes, the di if bo |
| `UVVAL` | `string(500)` | Va | lid value for UDA |
| `UVVFER` | `word` | At | tribute to follow to get UD el |
| `UWEI` | `string(1000)` | Un | it pipe weight |
| `UWGHT` | `real` | Us | ed weight |
| `UWIDTH` | `real` | Us | ed width |
| `UWMTXT` | `string(120)` | Us | er weight Manager text |
| `UWP` | `pos` | — | Upper Working Point |


## Attribute V

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `VADVCE` | `real(3)` | — | Expansion Direction of Expansion Coordinate System |
| `VADVCM` | `real(3)` | — | Main Direction of Expansion Coordinate System |
| `VADVCO` | `pos` | — | Origin of Expansion Coordinate System |
| `VADVSU` | `element` | — | Surface |
| `VADVTY` | `integer` | — | Advanced view Type (LocationDefined, MultiLocation, Expansion) |
| `VALARR` | `element(100)` | — | Valid Status Values |
| `VALHRF` | `element` | — | Status Value History reference |
| `VALIDV` | `string(1000)` | — | Valid value expression for VVALUE elements |
| `VALNAM` | `string(50)` | — | Local Name of a Status Value |
| `VALNUM` | `integer` | — | Numerical representation of a Status Value |
| `VALREF` | `element` | — | Status Value reference |
| `VALRUL` | `string(1000)` | — | Valid rule expression to test VALIDV attributes of VVALUE elements |
| `VALTEX` | `string(120)` | — | Textual representation of a Status Value |
| `VALTYP` | `word` | — | Type of the value. INT, REAL or TEXT |
| `VANGLE` | `real` | Angle | from vertical |
| `VAXIS` | `dir` | vAxis |  |
| `VBEVEL` | `logical` | True i | f V-bevel |
| `VCKS` | `string(120)` | Pipe S | pool Volume Check Status |
| `VCKWT` | `element` | Pipe S | pool Volume Checke |
| `VCOMPD` | `string(50)` | View C | omparison Date |
| `VCOMPS` | `element` | View C | omparison Stamp |
| `VDISTA` | `real` | Vertic | al Distance |
| `VDPOS` | `pos` | Dimens | ion line/arc positi |
| `VDTINT` | `integer(2)` | Verifi | cation date |
| `VDTTXT` | `string(22)` | Verifi | cation date text |
| `VENID` | `string(120)` | Driver | definition used to access survey |
| `VERDATE` | `datetime(2)` | Verifi | cation date |
| `VERTDI` | `logical` | VERTDI | (true if Z axe is vertic |
| `VFLIIND` | `logical` | View F | rame Limits Indepe |
| `VFLSTZ` | `integer` | View f | rame line type zero is ByS |
| `VFRCOL` | `integer` | View f | rame color |
| `VFRLST` | `integer` | View f | rame linestyle |
| `VFRRGB` | `integer(4)` | RGB vi | ew frame color |
| `VFRRGP` | `integer(4)` | RGB vi | ew frame color physic |
| `VGAP` | `real` | View g | ap length |
| `VHEIGHT` | `real` | Volume | height |
| `VIRF` | `logical` | Vi | rtual Flag |
| `VISF` | `string(73)` | Vi | sio filename |
| `VLAYRF` | `element` | Vi | sual layer reference |
| `VLIM` | `real(6)` | Vi | ew limits |
| `VLOCDE` | `stringarray(2147483647)` | Vi | ew location plane de |
| `VLOCDI` | `dir` | integer    Vi | ew location plane di |
| `VLOCDM` | `logical` | Vi | ew location direction op |
| `VLOCDT` | `real(2)` | Vi | ew location depth, be |
| `VLOCPO` | `pos` | integer    Vi | ew location plane po |
| `VLTRNG` | `string(120)` | Vo | ltage Range |
| `VMAR` | `real` | AD | P view margins |
| `VMCIAR` | `integer(10)` | VM | Component Int Array |
| `VMCRAR` | `real(10)` | VM | Component Real Ar |
| `VMDRPDMS` | `logical` | VM | Draw anno using pd |
| `VMFCFB` | `logical` | VM | Fill Colour From Bo |
| `VMFLAY` | `integer` | VM | Fillstyle Layer |
| `VMGLAY` | `integer` | VM | Geometry Layer |
| `VMTASP` | `real` | VM | text aspect |
| `VMTSLA` | `real` | VM | text slant (degrees) |
| `VMUSYS` | `integer` | VM | Fillstyle Unit System |
| `VNREF` | `element` | VN | OTE reference - special at |
| `VOLTAC` | `string(1000)` | Vo | ltage AC |
| `VOLTDC` | `string(1000)` | Voltag | e DC |
| `VRADI` | `real` | Cablew | ay radius |
| `VRAT` | `real(2)` | View r | atio |
| `VREG` | `real(4)` | View r | egion |
| `VSCA` | `real` | Viewin | g scale - scales projec |
| `VSHAPE` | `integer` | Volume | shape |
| `VSICHS` | `string(1000)` | View S | ection Indicator Charac |
| `VSILCOLOUR` | `integer` | View S | ection Indicator line c |
| `VSILSTYLE` | `integer` | View S | ection Indicator line s |
| `VSINRF` | `element` | View S | ection Indicator refere |
| `VSIRGB` | `integer(4)` | RGB vi | ew Section Indica |
| `VSIRGP` | `integer(4)` | RGB vi | ew section indica |
| `VSITIT` | `string(1000)` | View S | ection Indicator Title |
| `VSITSR` | `element` | View S | ection Indicator Title |
| `VTITL` | `string(1000)` | View t | itle |
| `VTYP` | `string` | Type o | f design view |
| `VVOL` | `real(6)` | View v | olume |
| `VWIDT` | `real` | Volume | width |
| `VWLIMI` | `real(6)` | View L | imits |
| `VWREFA` | `element(20)` | View r | eference array - specia by ADP |
| `VWSTRF` | `element` | View s | tyle reference |
| `VXREF` | `element(500)` | — | Vertex reference array |


## Attribute W

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `W` | `real` | — | Position westing |
| `WALLTH` | `real` | — | Tube wall thickness |
| `WAMA` | `real` | — | Maximum water level |
| `WANS` | `word(100)` | — | Word answers |
| `WASHRH` | `string(32)` | — | Detailing Bolt Set Head- Side Washer |
| `WASHRN` | `string(32)` | — | Detailing Bolt Set Nut-Side Washer |
| `WATERT` | `logical` | — | Water Tight |
| `WATTIM` | `real` | — | Water cleaning time |
| `WBACK` | `logical` | — | True if backing bar is to be used |
| `WBORE` | `real` | — | Bore on IWELD/RWELD |
| `WCANG` | `real` | — | Weld connection angle |
| `WCCAS` | `integer` | — | Welding constant contour (arrow side) |
| `WCCOS` | `integer` | — | Welding constant contour (other side) |
| `WCHAR` | `integer` | — | Detailing Weld Characteristic |
| `WCLOS` | `logical` | — | Closure weld |
| `WCMNT` | `string(32)` | — | Weld Comment |
| `WCOM` | `string(26)` | — | Weld comment |
| `WDBNA` | `string` | — | Working DB name |
| `WDESP` | `word(100)` | — | Design parameters as words |
| `WDIA` | `string(1000)` | Wind d | iameter modulus |
| `WECOM` | `string(256)` | Weld c | omment |
| `WEFA` | `real` | Weight | multiplier |
| `WEGOLD` | `logical` | True i | f golden weld |
| `WEIG` | `real(3)` | Weight | ing value |
| `WELCON` | `word` | Weldin | g machine connec |
| `WELDDP` | `real` | Weldin | g depth |
| `WELDMC` | `element` | Weldin | g Machine Refere |
| `WELDTY` | `word` | Weld T | ype |
| `WELMAC` | `real` | Minimu | m tube length for machin |
| `WELMAN` | `real` | Minimu | m tube length for manual |
| `WELORB` | `real` | Minimu | m tube length for orbita |
| `WENAM` | `string(256)` | Weld n | ame |
| `WEPROC` | `string(256)` | Weldin | g process |
| `WESTRF` | `element` | Whites | pace Entity Style refere |
| `WESUSP` | `real` | Weld e | nd suspension |
| `WEXPTX` | `string(32)` | Weldin | g Fish Tail: Explan |
| `WFIN` | `string(256)` | Weld f | inish |
| `WFISTA` | `string(32)` | Weldin | g Fish tail: Additi |
| `WFISTB` | `string(32)` | Weldin | g Fish tail: Additi |
| `WFISTC` | `string(32)` | Weldin | g Fish tail: Additi |
| `WFLELM` | `element` | Refere | nce to Workflow Elemen |
| `WFRDBL` | `real(5)` | Detail | ing Weld Free Double |
| `WFTXA` | `string(32)` | Weldin | g Free text 1 |
| `WFTXB` | `string(32)` | Weldin | g Free text 2 |
| `WFTXC` | `string(32)` | Weldin | g Free text 3 |
| `WFTXD` | `string(32)` | Weldin | g Free text 4 |
| `WGANG` | `real` | Weld g | roove angle |
| `WGAP` | `real` | Weld G | ap |
| `WGNAS` | `integer` | Weldin | g symbol ID (arrow side) |
| `WGNOS` | `integer` | Weldin | g symbol ID (other side) |
| `WGOLD` | `logical` | Golden | Weld |
| `WGROUP` | `integer` | Weld G | rouping Option |
| `WGSTRF` | `element` | Whites | pace Generic Style refere |
| `WHOLEC` | `real` | Array | of Whole Cells |
| `WIANG` | `real` | Weld i | nclination angle |
| `WIDARR` | `real(10)` | Width | array |
| `WIDT` | `real` | Width |  |
| `WIFA` | `real` | Wind m | ultiplier |
| `WIMAS` | `logical` | Interm | ittent weld (arrow side) |
| `WIMOS` | `logical` | Interm | ittent weld (other side) |
| `WINDAS` | `string(32)` | Weldin | g Index (Arrow Side) |
| `WINDOS` | `string(32)` | Weldin | g Index (Other Side) |
| `WINT` | `logical` | True i | f intermittent weld |
| `WINTL` | `real` | Interm | ittent weld length |
| `WINTP` | `real` | Interm | ittent weld pitch |
| `WIRESZ` | `string(120)` | Wire s | ize |
| `WISYM` | `integer` | Weldin | g Process symbol number |
| `WJPOS` | `pos` | Implie | d weld position |
| `WJUSL` | `word` | Wall J | ustification Line |
| `WLDAAS` | `real` | Weld c | hamfer angle arrow |
| `WLDAOS` | `real` | Weld c | hamfer angle (other |
| `WLDBAS` | `integer` | Weld B | acking (arrow side) |
| `WLDBOS` | `integer` | Weld B | acking (other side) |
| `WLDC` | `integer` | Weld C | ode |
| `WLDCAS` | `real` | Weld w | idth (arrow side) |
| `WLDCOS` | `real` | Weld w | idth (other side) |
| `WLDDAS` | `real` | Weld D | iameter (arrow side) |
| `WLDDIA` | `real` | Diamet | er(width) for plug/ slot w |
| `WLDDOS` | `real` | Weld d | iameter (other side) |
| `WLDEAS` | `real` | Weld t | hickness (arrow side) |
| `WLDEOS` | `real` | Weld t | hickness (other side) |
| `WLDFAS` | `integer` | Weldin | g Finish (arrow side) |
| `WLDFOS` | `integer` | Weldin | g Finish (other side) |
| `WLDHAS` | `integer` | We | lding Spacer (arrow si |
| `WLDHOS` | `integer` | We | lding Spacer (other si |
| `WLDINF` | `integer` | We | lding information |
| `WLDLAS` | `real` | We | ld segment length (a |
| `WLDLOS` | `real` | We | ld segment length (o |
| `WLDN` | `integer` | We | ld number |
| `WLDNAS` | `integer` | Nu | mber of weld segments (a |
| `WLDNDT` | `logical` | We | lding NDT (Non- De |
| `WLDNOS` | `integer` | Nu | mber of weld segments (o |
| `WLDP` | `string(4)` | We | ld number prefix |
| `WLDPOS` | `string(26)` | We | lding position |
| `WLDRAS` | `real` | We | ld chamfer Gap (arrow si |
| `WLDREF` | `element` | integer    Re | turn reference from Pp or |
| `WLDRND` | `logical` | Fl | ag weld all round |
| `WLDROS` | `real` | We | ld chamfer Gap (other si |
| `WLDSAS` | `real` | We | ld chamfer depth (a |
| `WLDSOS` | `real` | We | ld chamfer depth (o |
| `WLDTAS` | `integer` | We | ld process number (a |
| `WLDTHY` | `real` | We | ld material thickness (Y |
| `WLDTHZ` | `real` | Weld m | aterial thickness (Z direct |
| `WLDTOS` | `integer` | Weld p | rocess number (other |
| `WLDTYP` | `integer` | Weldin | g Element Type Number |
| `WLDVAS` | `real` | Weld s | egment offset (arrow |
| `WLDVOS` | `real` | Weld s | egment Offset (other |
| `WLDZAS` | `real` | Weld l | eg length (arrow side) |
| `WLDZOS` | `real` | Weld l | eg length (other side) |
| `WLEGL` | `real` | Weld l | eg length |
| `WLEGTX` | `string(32)` | Weldin | g legend text |
| `WLEN` | `real` | Weld l | ength |
| `WLLEN` | `real` | Leg le | ngth of the weld |
| `WLNGTH` | `real` | Weld L | ength |
| `WMAX` | `integer` | Maximu | m weld number in cur |
| `WMDREF` | `element` | Refere | nce to weld master data |
| `WNAM` | `string(26)` | Weld n | ame |
| `WNAMAS` | `string(32)` | Weld N | ame (arrow side) |
| `WNAMOS` | `string(32)` | Weld N | ame (other side) |
| `WNCAT` | `string(32)` | Weldin | g NDT Category name |
| `WNDT` | `string(256)` | No des | tructive test for the weld |
| `WNDTN` | `string(32)` | Weldin | g NDT type name |
| `WNDTP` | `real` | Weldin | g NDT percentage |
| `WNLAY` | `integer` | Number | of weld layers |
| `WNPROC` | `string(32)` | Weldin | g NDT process name |
| `WNTHK` | `string(32)` | Weld N | ame Thickness |
| `WORI` | `ori` | World | orientation |
| `WORPOS` | `pos` | World | position |
| `WOSTRF` | `element` | Whites | pace Objective Prefer |
| `WPAR` | `word(100)` | Parame | ters as a word |
| `WPDAS` | `real` | Weld s | egment distance (arrow |
| `WPDOS` | `real` | Weld s | egment distance (other |
| `WPLEN` | `real` | Weight | per length |
| `WPOST` | `string(32)` | Weld m | ark text |
| `WPRE` | `real` | Wind p | ressure |
| `WPROC` | `string(26)` | Weldin | g process |
| `WRANG` | `real` | Weld r | otation angle |
| `WRKMRK` | `string(30)` | Workin | g Revision Indica |
| `WRKSEQ` | `string(256)` | Workin | g sequence |
| `WRKSHR` | `integer` | Work S | hare |
| `WSADER` | `real` | Whites | pace alignment deviat |
| `WSADET` | `string(80)` | Whites | pace alignment deviat |
| `WSAIAT` | `integer` | Whites | pace annotation inters (Unset Off/Fa True) |
| `WSAPPR` | `real` | Whites | pace placement priori |
| `WSAPPT` | `string(80)` | Whites | pace placement priori |
| `WSDCAT` | `integer` | Whites | pace dog leg creati ByStyl On/Tru |
| `WSDRAT` | `integer` | Whites | pace dog leg remova ByStyl On/Tru |
| `WSERSF` | `element` | Whites | pace Entity Rule Set re |
| `WSHOP` | `logical` | Weld s | hop/site flag on IWELD/ |
| `WSLEN` | `real` | Length | for slot weld |
| `WSLLRT` | `integer` | Whites | pace leader line restri UseGen True) |
| `WSMADR` | `real` | Whites | pace minimum attach |
| `WSMADT` | `string(80)` | Whites | pace minimum attach |
| `WSMASR` | `real` | Whites | pace minimum annota |
| `WSMAST` | `string(80)` | Whites | pace minimum annota |
| `WSOAGR` | `real` | Whites | pace Objective Prefer |
| `WSOAGT` | `string(80)` | Whites | pace Objective Prefer |
| `WSOALR` | `real` | Whites | pace Objective Prefer violat |
| `WSOALT` | `string(80)` | Whites | pace Objective Prefer violat |
| `WSOARR` | `real` | Whites | pace Objective Prefer |
| `WSOART` | `string(80)` | Whites | pace Objective Prefer |
| `WSODSR` | `real` | Whites | pace Objective Prefer distan |
| `WSODST` | `string(80)` | Whites | pace Objective Prefer distan |
| `WSOOVR` | `real` | Whites | pace Objective Prefer view v |
| `WSOOVT` | `string(80)` | Whites | pace Objective Prefer view v |
| `WSOPDR` | `real` | Whites | pace optimal distan |
| `WSOPDT` | `string(80)` | Whites | pace optimal distan |
| `WSOVMT` | `integer` | Whites | pace Out-of-View mode ( Off In Outsid |
| `WSOVSD` | `string(80)` | Whites | pace Out-of-View prefer UseGen sep. c Bottom |
| `WSOVSI` | `integer` | Whites | pace Out-of-View prefer -2 Use Top 2 Left) |
| `WSOXAR` | `real` | Whites | pace Objective Prefer violat |
| `WSOXAT` | `string(80)` | Whites | pace Objective Prefer violat |
| `WSPACE` | `logical` | True i | f spacer is to be used |
| `WSPDAN` | `real` | Whites | pace Placement Direct |
| `WSPDDG` | `string(80)` | Whites | pace Placement Direct |
| `WSPDIN` | `real(2)` | Whites | pace Placement Direct |
| `WSPDIT` | `string(80)` | Whites | pace Placement Direct |
| `WSPEC` | `element` | Weld s | pecification on IWELD/ |
| `WSPLMT` | `integer` | Whites | pace placement mode ( ByTemp Prefer Free) |
| `WSPORF` | `element` | Whites | pace Picture Owner |
| `WSPOST` | `integer` | Whites | pace pic. Owner result (Revie Accept |
| `WSPROC` | `string(26)` | Weldin | g standard process |
| `WSSAS` | `real` | Weld p | enetration depth (arrow |
| `WSSOS` | `real` | Weld p | enetration depth (other |
| `WSSTQI` | `integer` | Whites | pace quadrants (bit-c TopLef Bottom |
| `WSSTQS` | `string(80)` | Whites | pace quadrants (comma To Bo |
| `WSSUSP` | `real` | We | ld start suspension |
| `WSTAND` | `string(256)` | We | ld standard |
| `WSTDV` | `string(256)` | We | ld standard vesrion |
| `WSXANG` | `real(60)` | Wh | itespace Expected An |
| `WSXANT` | `string(2000)` | Wh | itespace Expected An |
| `WTCOM` | `string(300)` | We | ld table comment |
| `WTEREF` | `element` | integer    Wa | ll thickness element re |
| `WTEST` | `string(256)` | Te | st procedure for the we |
| `WTHICK` | `real` | Wa | ll thickness |
| `WTHREF` | `element` | Wa | ll thickness table re |
| `WTOL` | `string(1000)` | Wa | ll thickness tolerance / We |
| `WTORCH` | `dir` | We | ld torch vector |
| `WTPROC` | `string(26)` | We | lding test procedure |
| `WTRANS` | `real(12)` | Tr | ansformation matrix to wo |
| `WTSTAT` | `string(26)` | We | ld table status |
| `WTYPE` | `word` | We | ld type |
| `WUNIQ` | `logical` | We | lding Element Unique Fl |
| `WVOL` | `real(6)` | En | closing box volume in wo |
| `WVTAS` | `integer` | We | ld type (arrow side) |
| `WVTOS` | `integer` | We | ld type (other side) |


## Attribute X

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `XAMANG` | `real` | word | Cross section along mounting angle |
| `XAREA` | `string(1000)` | — | Cross sectional area |
| `XAXIS` | `dir` | — | xAxis |
| `XBEVEL` | `logical` | — | True if X-bevel |
| `XBOT` | `real` | — | Bottom X length |
| `XBSH` | `real` | — | X bottom shear: inclination of bottom face to local X axis |
| `XFTPT` | `pos` | word | Cross section foot point |
| `XGMREF` | `element` | — | Reference to laser survey in which volumes will be demolished |
| `XINCL` | `real` | word | Cross section inclination angle |
| `XINDEX` | `integer` | — | Laser Image Storage X index |
| `XLEN` | `real` | — | X length |
| `XOFF` | `real` | — | X-offset |
| `XRLIST` | `element(10000)` | elemtype | List distributed attributes |
| `XRLSTT` | `word(2000)` | elemtype | List distributed attributes |
| `XRPNTR` | `element` | — | Distributed Attribute reference |
| `XRQCNT` | `integer` | elemtype | Get distributed attributes element count |
| `XRQELE` | `element` | elemtype, integer | Get distributed attributes element |
| `XRSTRT` | `element` | — | Distributed Attributes reference |
| `XTEX` | `string(2000)` | X text |  |
| `XTHK` | `real` | word         Cross se | ction thickness |
| `XTOP` | `real` | Top X le | ngth |
| `XTPPT` | `pos` | word         Cross se | ction top point |
| `XTRA` | `real` | Extra le | ngth requirement for BOLT |
| `XTSH` | `real` | X top sh | ear: inclination of top face |
| `XXMANG` | `real` | word         Cross se | ction cross mounting |
| `XYOFFS` | `real(2)` | XY offse | t |
| `XYPS` | `pos` | 2D Posit | ion or Offset for Labels |
| `XYSC` | `real(2)` | Label XY | size |
| `XYSIZE` | `real(2)` | size arr | ay for grids |


## Attribute Y

| Attribute | Data Type | Qualifier | Description |
|-----------|-----------|-----------|-------------|
| `YBEVEL` | `logical` | — | True if Y-bevel |
| `YBOT` | `real` | — | Bottom Y length |
| `YBSH` | `real` | — | Y bottom shear: inclination of bottom face to local Y axis |
| `YDIR` | `dir` | — | Preferred Y axis direction |
| `YGAP` | `real` | — | Y-Gap |
| `YINDEX` | `integer` | — | Laser Image Storage Y index |
| `YLEN` | `real` | — | Y length |
| `YOFF` | `real` | — | Y-offset |
| `YOUN` | `real` | modulu | Spot value of Youngs |
| `YTEX` | `string(2000)` | Y text |  |
| `YTOP` | `real` | Top Y | length |
| `YTSH` | `real` | Y top | shear: inclination of top fa ™ |
