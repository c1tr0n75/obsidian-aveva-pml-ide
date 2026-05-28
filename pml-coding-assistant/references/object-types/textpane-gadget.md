# TEXTPANE Gadget

The IS word syntax allows for any user defined data type to be used, but this will only work satisfactorily if a 
suitable FORMAT object is supplied. 
Note: 
The maximum string length (SCROLL integer) is 256 characters, and the default if you do not specify a length is 
132. 
It is bad practice to place one gadget on top of another. This may lead to gadgets being obscured. 
TEXTPANE Gadget 
Members 
Name 
Type 
Purpose 
Val 
ARRAY OF STRING 
Get/Set 
Get or set the contents of the text 
pane. 
Count 
REAL 
Get Only 
Get the number of lines of text in 
the gadget. 
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
Clear() 
NO RESULT 
Clear all lines from the gadget. 
Line(REAL ) 
STRING 
Get the text of given line. 
SetLine(REAL, STRING) 
NO RESULT 
Replace specified line number by 
STRING. 
CurPos() 
ARRAY[2] OF REAL 
Get cursor position (line, 
character). 
SetCurPos(REAL[2]) 
NO RESULT 
Set cursor position (line, character). 
SetCurPos(REAL, REAL) 
NO RESULT 
Set cursor position (line, character). 
SetEditable(BOOLEAN) 
NO RESULT 
Set edit status. 

SetPopup(MENU) 
NO RESULT 
Links the given menu with the 
gadget as a pop-up. 
RemovePopup(MENU) 
NO RESULT 
Removes the given pop-up menu 
from the gadget. 
GetPickedPopup() 
MENU 
Returns the last picked pop-up 
menu for the gadget. 
SetToolTip(STRING) 
NO RESULT 
Sets or edits the text of the 
TOOLTIP. 
Refresh() 
NO RESULT 
Refreshes the display of the gadget. 
Shown() 
BOOLEAN 
Get ‘shown’ status. 
Type() 
STRING 
Get the gadget type as a string. 
Background() 
STRING 
Get Background Color Name. 
Some gadgets do not support this 
property in all circumstances, for 
example, gadgets which are 
showing a pixmap. 
Gadgets whose color has not been 
set explicitly may not have a color 
with a known colorname. In this 
case, an error is raised. 
Command 
The TEXTPANE command defines a text pane gadget and specifies its position and tag. This is a multi-line text 
input field, allowing you to enter a number of lines of text (either directly or using cut and paste). 
Note: 
No callback string is allowed with this gadget, as there is no way of knowing when a user has finished entering 
text. 
The value of a TEXTPANE is its contents, held as an array of strings, where each line is an element of the array. 
You can define the TEXTPANE to be either PML-controlled, or core-code controlled using the gadget qualifier 
attribute control type, with values "PML" or "CORE". 
The Textpane gadget definition has a new keyword 'FixChars' to force the use of a fixed width font. This allows 
the text pane to be used to show simple reports laid out using the 'space' character. 
The chosen font is Courier New (TrueType), because it has a reasonable selection of character glyphs (nowhere 
near as extensive as the default variable width font Arial Unicode MS). 
                       .--------<--------. 
                      /                  | 
>-- TEXTPane gname --+-- tagtext---------| 
                     +-- <fganch> -------| 
                     +-- <DOCK FILL> ----| 
                     +-- <fgpos> --------| 
                     +-- FIXCHARS -------| 

