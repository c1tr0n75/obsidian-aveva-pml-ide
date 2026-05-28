# MACRO Object

Name 
Result 
Purpose 
LOCATION(DBREF) 
LOCATION 
Returns a LOCATION object, given a 
DBREF. 
LOCATION(STRING) 
LOCATION 
Returns a LOCATION object, given a 
name or reference number (Global 
projects only). 
Dblist() 
ARRAY OF DB 
Array of DB objects for Allocated 
DBs. This method does not modify 
the original object. 
Sessions() 
ARRAY OF SESSIONS 
Return array of all Sessions 
extracted from COMMs DB at the 
Location. 
This method does not modify the 
original object. 
String() 
STRING 
STRING containing Location name. 
This method does not modify the 
original object. 
Note: 
The Sessions() method provides information required for remote expunging. This method will cause daemon 
activity for locations other than the current location. 

You can use the constructors in the following ways: 

```pml
-- Create LOCATION object from current element DBREF
!D = object LOCATION(!!CE)

-- Create LOCATION object from element name string
!name = !!CE.name
!D = object LOCATION(!name)
```

In all cases, '!!CE' is assumed to be a DB database element and '!!CE.name' is a STRING object containing the 
element’s name. 
These methods should assist performance improvements to AppWare by making it easier to get from Database 
element to Object. 
MACRO Object 
Member 
Name 
Type 
Purpose 
Filename 
STRING 
Inter-DB macro filename (up to 17 
characters). 
From 
DB 
Source DB of inter-DB connection 
macro. 
Number 
REAL 
Inter-DB macro number. 

