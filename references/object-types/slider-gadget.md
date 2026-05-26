# SLIDER Gadget

Modified() 
BOOLEAN 
TRUE if database has been 
modified. 
Module() 
STRING 
Name of the current module. 
Status() 
ARRAY OF 
STRINGS 
List of current access modes as ‘R’ , 
‘RW’ or ‘N’ for each of the current 
DBs. 
User() 
USER 
The User of this SESSION object. 
Notes: 
• The LocationName member and Location() method imply the location to which the Session applies. This is 
normally the current location, except when Sessions at remote locations have been requested. In a non-
Global project, these members and methods may be unavailable or unset. 
• Some ADMIN Sessions in a Global project may apply to another location's system database. This will be 
returned as part of the string returned by the Module() method, if relevant. Other ADMIN Sessions may 
actually be Global Daemon Sessions. This is returned as part of the string for the name member. 
• Some SESSION object methods have only restricted availability: 
• The Modified() method only applies to the current Session at the current location. 
• The Current(), Deferred(), Mode() and Status() methods will not be implemented for remote 
Sessions and will return an error. 
• The Location(), MDB(), User() and Module() methods are valid for remote Sessions. 
The last three methods will cause Daemon activity for Sessions at remote locations. 
• It should be should be observed in using the MDB and USER objects returned by the MDB() and User() 
methods for a remote Session. Methods on these objects will access the currently open system database. 
Thus the appropriate location's system database should be opened (using the ADMINISTER SYSTEM 
command) before invoking methods on these remotely generated MDB and USER objects. 
Command 
!SESSION = CURRENT SESSION 
$ Returns the current session object. 
SLIDER Gadget 
Members 
Name 
Type 
Purpose 
visible 
BOOLEAN 
Get/Set 
Visibility. 
active 
BOOLEAN 
Get/Set 
Active (grayed-in) status. 

callback 
STRING 
Get/Set 
Callback string. 
tag 
STRING 
Get/Set 
Tag text - not displayed for this 
gadget. 
val 
REAL 
Get/Set 
Current value as integer. 
background 
REAL 
Get/Set 
Background Color Number. 
background 
STRING 
Set only 
Background Color Name. 
range 
REAL ARRAY 
Get/Set 
Range Start, End and optional 
Step(>0) as integers. 
The start value may be less than 
the end value. 
Array size must be 2 or more. 
tickstyle 
REAL 
Get/Set 
Tick style as integer. 
0 ‑ none, 
1 ‑ right or bottom, 
2 - top or left, 
3 ‑ both 1 and 2. 
Note: 
• The Val member represents the current value of the slider as a PML REAL (in fact always an integer). 
• The Range member allows the slider range and optionally the step value to be set or queried. The granularity 
of the slider movement is determined by the specified step increment, that is, a move event is generated at 
each step increment within the slider’s range. The range limits must each be an integral multiple of the step 
size (else an error is flagged). 
• The RESET action of a form (from reset, CANCEL or QUIT actions) will only reset the slider current value not 
other slider properties. So if you redefine the range while a form is displayed, and press the RESET button, 
the range will not revert to the previous settings. You will have to do this from reset button’s callback and/or 
the form’s CANCELCALL callback. 
• Tick marks, if present, occur at every step value in the range. 
Methods 
Name 
Result 
Purpose 
FullName() 
STRING 
Get the full gadget name, for 
example, '!!Form.gadget'. 

Name() 
STRING 
Get the gadget's name, for 
example, 'gadget'. 
Owner() 
FORM 
Get owning form. 
SetToolTip(STRING) 
NO RESULT 
Sets or edits the text of the Tooltip. 
Shown() 
BOOLEAN 
Get ‘shown’ status. 
Type() 
STRING 
Get the gadget type as a string, like 
'SLIDER'. 
Refresh() 
NO RESULT 
Refresh gadget image. 
Background() 
STRING 
Get Background Color Name. 
Some gadgets do not support this 
property in all circumstances, e.g. 
gadgets which are showing a 
pixmap. 
Gadgets whose color has not been 
set explicitly, may not have a color 
with a known colorname. 
In this case, an error is raised. 
SetFocus() 
NO RESULT 
Set keyboard focus to gadget. 
Allows arrow keys to drive slider. 
Command 
                    .-------<-------------------. 
                   /                            | 
>-- SLIDER gname -+- tagtext -------------------| 
                  +- <fgpos> -------------------| 
                  +- CORE ----------------------|  Core managed gadget 
                  +- <fganch> ------------------| 
                  +- BACKGround <colno> --------| 
                  +- CALLback text -------------| 
                  +- TOOLTIP text --------------| 
                  +- VERTical ------------------| 
                  +- HORIZontal ----------------* 
                  | 
                  | .-------<-------------------. 
                  |/                            | 
                  +- RANGE int int -------------| 
                  +- STEP int ------------------| 
                  +- VALue int -----------------* 
                  | 
                  ‘- <vshap> -+- TOOLTIP text -.                
                              ‘----------------‘--> 
Figure 2:4. Syntax Graph: Creating a SLIDER Object 
Note: 

