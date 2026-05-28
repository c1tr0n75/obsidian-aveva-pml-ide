# STRING Object

The `STRING` object is a fundamental type in PML used for text manipulation, data parsing, and converting between different object types.

## Search & Comparison

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Length()` | REAL | Returns the number of characters. |
| `Match(sub)` | REAL | Returns the 1-based index of the first occurrence of `sub`. Returns `0` if not found. |
| `MatchWild(wild)`| BOOLEAN | Returns `True` if the string matches a pattern (supports `*` and `?`). |
| `EQNoCase(other)`| BOOLEAN | Case-insensitive equality check. |
| `Occurs(sub)` | REAL | Returns the count of how many times `sub` appears. |

## Extraction & Manipulation

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Substring(i, n)`| STRING | Returns `n` characters starting from index `i`. |
| `Before(sub)` | STRING | Returns the text appearing before the first occurrence of `sub`. |
| `After(sub)` | STRING | Returns the text appearing after the first occurrence of `sub`. |
| `Part(n, [delim])`| STRING | Returns the `n`-th field using space (default) or a custom delimiter. |
| `Replace(old, new)`| STRING | Replaces all occurrences of `old` with `new`. |
| `Split([delim])` | ARRAY | Splits the string into an array of strings based on a delimiter. |
| `Trim()` | STRING | Removes leading and trailing whitespace. |
| `UpCase()` / `LowCase()` | STRING | Converts casing. |

## Type Conversion Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Real()` | REAL | Converts to a number (supports unit qualifiers like `'100mm'`). |
| `Boolean()` | BOOLEAN | Converts `'True'`, `'Yes'`, `'Y'`, `'T'` to `True`; others to `False`. |
| `DBRef()` | DBREF | Converts to a database reference (e.g., `'=12/345'`). |
| `Position()` | POSITION | Converts to a coordinate (e.g., `'E 100 N 200 U 0'`). |
| `Direction()` | DIRECTION | Converts to a vector (e.g., `'N 45 W'`). |

## Code Examples

### Complex Parsing
```pml
!line = 'PIPE-100-AA|300mm|STAINLESS'
!parts = !line.Split('|')

!name = !parts[1]
!bore = !parts[2].Real()
!spec = !parts[3]

$p Component $!name is $!bore mm in $!spec
```

### Pattern Matching
```pml
!file = 'report_2023_v1.txt'
if (!file.MatchWild('report_*_v?.txt')) then
    $p Valid report format.
endif
```

## Best Practices
1.  **Efficiency**: Use `.EQNoCase(other)` instead of `!str.UpCase() eq !other.UpCase()` for better performance and readability.
2.  **Splitting**: Use `.Split()` when you need all parts of a string, but use `.Part(n)` if you only need one specific field, as it avoids creating a full array.
3.  **Indices**: PML strings are **1-indexed**. `Substring(1, 1)` returns the first character.
4.  **Null Safety**: Before calling methods like `.Real()`, verify the string isn't empty using `.Empty()` or `.Length() > 0` to prevent runtime errors.

