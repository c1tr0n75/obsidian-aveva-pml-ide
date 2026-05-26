# PARAGRAPH Gadget

The `PARAGRAPH` gadget is used to display static text or a static image (pixmap) on a form. It is typically used for labels, instructions, or decorative elements.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Val` | STRING | Get/Set the text content. If the gadget is a pixmap, `Val` is the file path. |
| `Background`| STRING / REAL| Get/Set the background color by name or index. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `AddPixmap(path, [sel, inact])`| NO RESULT| Defines the images for normal, selected, and inactive states. |
| `SetTooltip(string)` | NO RESULT | Sets the hover text for the gadget. |
| `Name()` | STRING | Returns the gadget's simple name. |
| `FullName()` | STRING | Returns the full path (e.g., `!!Form.myLabel`). |
| `Shown()` | BOOLEAN | Returns true if the gadget is currently visible. |

## Code Examples

### Dynamic Label Text
```pml
paragraph .lblInfo 'Initial Status...' width 25
-- ...
!this.lblInfo.Val = 'Processing completed. 100 items found.'
!this.lblInfo.Background = 'green'
```

### Displaying a Pixmap
```pml
paragraph .logo pixmap /C:/AVEVA/Images/logo.png width 100 height 50
-- ...
-- Change image at runtime
!this.logo.Val = '/C:/AVEVA/Images/new_logo.png'
```

## Best Practices
1.  **Read-Only Interaction**: Paragraph gadgets do not have a default callback because they are intended for display only. If you need a clickable text element, use a `BUTTON` with flat styling.
2.  **Width/Height Management**: When using a paragraph for text, ensure the `width` is sufficient for the longest possible string to avoid truncation. Use the `AT` keyword for precise positioning.
3.  **Pixmaps**: Always use forward slashes `/` in file paths for pixmaps, even on Windows, to ensure compatibility with the AVEVA graphics engine.
4.  **Aesthetics**: Use `PARAGRAPH` gadgets as spacers or headers (by varying font/color) to improve the visual hierarchy of complex forms.

