# FILE Object

The `FILE` object provides comprehensive methods for interacting with the file system, including reading/writing text files and managing file metadata (existence, modification dates, etc.).

## Methods

### File Management
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `File(path)` | FILE | Constructor. `path` is the full or relative file path. |
| `Exists()` | BOOLEAN | Returns TRUE if the file exists on disk. |
| `DeleteFile()` | NO RESULT | Deletes the file if it exists. |
| `Copy(target)` | FILE | Copies the file to the target path (STRING or FILE object). |
| `Move(target)` | FILE | Moves/Renames the file to the target path. |
| `DTM()` | DATETIME | Returns the last modification date and time. |

### Path Information
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Name()` | STRING | Returns the filename only (no path). |
| `FullName()` | STRING | Returns the absolute path and filename. |
| `Directory()` | FILE | Returns a `FILE` object representing the parent directory. |
| `Files()` | ARRAY | If the object is a directory, returns an array of `FILE` objects for its children. |

### I/O Operations
| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Open(mode)` | NO RESULT | Opens the file: `'READ'`, `'WRITE'`, `'OVERWRITE'`, or `'APPEND'`. |
| `Close()` | NO RESULT | Closes the file. |
| `IsOpen()` | BOOLEAN | Returns TRUE if the file is currently open. |
| `ReadRecord()` | STRING | Reads the next line from a file opened for `'READ'`. |
| `WriteRecord(text)` | NO RESULT | Writes a line to a file opened for writing. |
| `LineNumber()` | REAL | Returns the current line index being processed. |

## Code Examples

### Reading a Text File
```pml
!file = object FILE('C:\temp\data.txt')
if (!file.Exists()) then
    return
endif

!file.Open('READ')
handle any
    !file.Close()
endhandle

do
    !line = !file.ReadRecord()
    if (!line.Unset()) then
        break
    endif
    $p Processing line: $!line
enddo

!file.Close()
```

### Writing to a File
```pml
!file = object FILE('%temp%\output.log')
!file.Open('APPEND')

!file.WriteRecord('Application started at ' + object DATETIME().String())
!file.Close()
```

## Best Practices
1.  **Error Handling**: Always use `handle any` blocks or ensure `Close()` is called to avoid leaving file handles open, which can lock files.
2.  **Path Variables**: Use environment variables (e.g., `%TEMP%`, `%PMLLIB%`) to ensure scripts remain portable across different user environments.
3.  **Read Loop**: When reading, check for `Unset()` or empty strings to detect the end of the file (EOF).
4.  **Directory Operations**: The `FILE` object can also represent a directory. Use `.Files()` to iterate through directory contents.

