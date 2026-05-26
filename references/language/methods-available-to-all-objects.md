# AVEVA PML2 Engineering — Methods Available to All Objects

The following lists the methods available to all PML2 objects, with the name of each method, its return type, and a description of what it does.

```yaml
methods:
  - name: "Attribute('Name')"
    result: ANY
    purpose: >
      To set or get a member of an object, providing the member name as a STRING.

  - name: "Attributes()"
    result: ARRAY OF STRINGS
    purpose: >
      To get a list of the names of the members of an object as an array of STRING.

  - name: "Delete()"
    result: NO RESULT
    purpose: >
      Destroy the object - make it undefined.

  - name: "EQ(any)"
    result: BOOLEAN
    purpose: >
      Type-dependent comparison.

  - name: "LT(any)"
    result: BOOLEAN
    purpose: >
      Type-dependent comparison (converting first to STRING if all else fails).

  - name: "Max(any)"
    result: ANY
    purpose: >
      Return maximum of object and second object.

  - name: "Min(any)"
    result: ANY
    purpose: >
      Return minimum of object and second object.

  - name: "NEQ(any)"
    result: BOOLEAN
    purpose: >
      TRUE if objects do not have the same value(s).

  - name: "ObjectType()"
    result: STRING
    purpose: >
      Return the type of the object as a string.

  - name: "Set()"
    result: BOOLEAN
    purpose: >
      TRUE if the object has been given a value(s).

  - name: "String()"
    result: STRING
    purpose: >
      Convert the object to a STRING.

  - name: "Unset()"
    result: BOOLEAN
    purpose: >
      TRUE if the object does not have a value.
```
