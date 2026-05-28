# PMLFILEBROWSER Object

## Purpose

`PMLFILEBROWSER` opens a standard Windows file browser dialog from PML. It can be used in `OPEN` or `SAVE` mode.

## Prerequisites

```pml
import 'PMLFileBrowser'
using namespace 'Aveva.Pdms.Presentation'
```

## Constructors

| Signature | Returns | Purpose |
|---|---:|---|
| `PMLFILEBROWSER()` | `PMLFILEBROWSER` | Create a browser in default `OPEN` mode. |
| `PMLFILEBROWSER(STRING mode)` | `PMLFILEBROWSER` | Create a browser in `OPEN` or `SAVE` mode. |

## Methods

| Signature | Returns | Purpose |
|---|---:|---|
| `SHOW(STRING directory, STRING seed, STRING title, BOOLEAN exists, STRING filter, REAL index)` | Not specified | Display the file browser with default path/name/title/existence check/filter/current filter index. |
| `FILE()` | `STRING` | Return the selected file name/path after the dialog has been used. |
| `METHODS()` | `ARRAY OF STRING` | Return available methods. |

## SHOW Arguments

| Argument | Type | Purpose |
|---|---:|---|
| `directory` | `STRING` | Default directory displayed in the file browser. |
| `seed` | `STRING` | Default value populated in the file name input box. |
| `title` | `STRING` | Text displayed in the window title bar. |
| `exists` | `BOOLEAN` | Check whether the input file exists. |
| `filter` | `STRING` | File filter. Format is `Description|Pattern`, with multiple filters separated by `|`. |
| `index` | `REAL` | Selected filter index when multiple filters are supplied. |

## Open Dialog Example

```pml
import 'PMLFileBrowser'
using namespace 'Aveva.Pdms.Presentation'

!browser = object PMLFileBrowser('OPEN')

q var !browser
q methods !browser

!browser.show('C:', 'abc.DOC', 'My Browser', TRUE, 'Word Documents|*.DOC', 1)

q var !browser.file()
```

## Text File Filter Example

```pml
!browser = object PMLFileBrowser('OPEN')
!browser.show('C:	emp', '', 'Select a text file', TRUE, 'Text files (*.txt)|*.txt|All files (*.*)|*.*', 1)

!selectedFile = !browser.file()
q var !selectedFile
```

## Save Dialog Example

```pml
!browser = object PMLFileBrowser('SAVE')
!browser.show('C:	emp', 'report.txt', 'Save report', FALSE, 'Text files (*.txt)|*.txt|All files (*.*)|*.*', 1)

!targetFile = !browser.file()
q var !targetFile
```

## Notes for PML Code Generation

- Use doubled backslashes in generated examples when clarity is needed, e.g. `C:	emp`.
- The documented mode values are `OPEN` and `SAVE`; if no argument is supplied, the object defaults to `OPEN`.
- Always query `FILE()` after the dialog interaction, not before.
