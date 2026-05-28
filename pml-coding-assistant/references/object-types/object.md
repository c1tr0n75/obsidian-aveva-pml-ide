# OBJECT

Typically this happens after you have typed in a required value, but will also apply if you enter the field after 
modifying the values using the up/down arrows. The callback can be a simple or an open callback. 
A MODIFIED event is raised for each modification of the displayed value using the up/down arrows. Modified 
events are only reported if they are enabled and you have provided a PML open callback, as this allows 
differentiation from the SELECT events. The default state is modified events disabled. 
OBJECT 
Method 
Name 
Result 
Purpose 
GetPathName() 
STRING 
Extracts the pathname for a file in 
the PMLLIB searchpath. 
OPTION Gadget 
Members 
Name 
Type 
Purpose 
DText 
ARRAY OF 
STRING Get/Set 
Set or get the entire list of display 
texts. 
DText[n] 
STRING 
Get Only 
Get the display text of the n'th 
option. 
RText 
ARRAY OF 
STRING Get/Set 
Set or get the list of replacement 
texts. 
RText[n] 
STRING 
Get Only 
Get the replacement text of the 
n'th option. 
Count 
REAL 
Get only 
Get count of number of fields in the 
list. 
Val 
REAL 
Get/Set 
Selected field as integer. 
Zero implies no selection. 
Setting val to zero will cause an 
error if ZeroSel is not specified. 
Methods 

