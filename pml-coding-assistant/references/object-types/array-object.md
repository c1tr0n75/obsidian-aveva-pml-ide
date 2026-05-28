# ARRAY Object

The `ARRAY` object is an ordered collection of elements. PML arrays are 1-based and can store values of any type (`ANY`).

## Methods

### Core Methods
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Array()` | ARRAY | Constructor. Creates a new empty array. |
| `Append(value)` | NO RESULT | Appends a value to the end of the array. |
| `AppendArray(array)` | NO RESULT | Appends all values from another array. |
| `Clear()` | NO RESULT | Removes all elements from the array. |
| `Size()` | REAL | Returns the number of defined elements. |
| `Empty()` | BOOLEAN | Returns TRUE if the array has no elements. |

### Manipulation Methods
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Insert(index, value)`| NO RESULT | Inserts a value at the specified index; re-indexes later elements. |
| `InsertArray(index, arr)`| NO RESULT | Inserts an array of values starting at the specified index. |
| `Remove(index)` | ANY | Removes and returns the element at index; re-indexes. |
| `RemoveFirst()` | ANY | Removes and returns the first element; re-indexes. |
| `RemoveLast()` | ANY | Removes and returns the last element. |
| `Compress()` | NO RESULT | Removes all undefined elements and re-indexes. |
| `Invert()` | ARRAY | Returns an inverted copy of the array. |
| `Sort()` | NO RESULT | Sorts the array into ascending order. |
| `SortUnique()` | ARRAY | Returns a sorted copy with duplicates removed. |

### Copy & Subset Methods
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `From(index, [n])` | ARRAY | Copies `n` elements starting from `index`. |
| `DeleteFrom(index, [n])`| ARRAY | Makes `n` elements starting at `index` undefined. Returns deleted elements. |
| `RemoveFrom(index, [n])`| ARRAY | Removes and returns `n` elements starting at `index`. |

### Search & Analysis
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Find(value)` | ARRAY | Returns an array of indices where the value was found. |
| `FindFirst(value)` | REAL | Returns the index of the first occurrence of the value. |
| `First()` | ANY | Returns the first defined element. |
| `Last()` | ANY | Returns the last defined element. |
| `Indices()` | ARRAY | Returns an array of all defined indices. |
| `MaxIndex()` | REAL | Returns the highest defined index. |
| `MinIndex()` | REAL | Returns the lowest defined index. |

## Code Examples

### Basic Usage
```pml
!arr = ARRAY()
!arr.Append('First')
!arr.Append('Second')
!arr.Insert(1, 'Zero')

do !item values !arr
    $p Item: $!item
enddo
```

### Searching and Filtering
```pml
!data = ARRAY()
!data.Append(10)
!data.Append(20)
!data.Append(10)

!indices = !data.Find(10)
$p Value 10 found at indices: $!indices
```

### Sorting and Unique Values
```pml
!raw = ARRAY()
!raw.Append('Z')
!raw.Append('A')
!raw.Append('A')

!unique = !raw.SortUnique()
-- !unique now contains ['A', 'Z']
```

## Best Practices
1.  **1-Based Indexing**: Always remember that PML arrays start at index 1.
2.  **Sparse Arrays**: Arrays can be sparse (containing undefined gaps). Use `.Compress()` or `do !i indices !arr` to handle these safely.
3.  **Performance**: For very large arrays, avoid frequent `.Insert()` or `.Remove()` calls at the beginning of the array, as these trigger re-indexing of all subsequent elements.
4.  **Type Safety**: While arrays can store `ANY` type, it is best practice to keep arrays homogeneous (same type) for easier processing.

