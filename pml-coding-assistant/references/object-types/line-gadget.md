# LINE Gadget

The `LINE` gadget is a visual separator used on PML forms to group related gadgets or provide visual structure. It can be oriented horizontally or vertically and reflects the current Windows theme colors.

## Methods & Members
The `LINE` gadget supports the standard set of default gadget members and methods (e.g., `.Visible`, `.Enabled`, `.Background()`). It does not have specialized data members like `.Val`.

## Syntax Highlights
| Keyword | Purpose |
| :--- | :--- |
| `HORIZontal` | Creates a horizontal separator line (Default). |
| `VERTical` | Creates a vertical separator line. |
| `width` | Sets the length of a horizontal line or thickness of a vertical one. |
| `height` | Sets the length of a vertical line or thickness of a horizontal one. |

## Code Examples

### Standard Separators
```pml
setup form !!MyLayout
    paragraph .p1 'Section 1'
    -- Horizontal separator
    line .sep1 horiz width 30
    
    paragraph .p2 'Section 2' at xmin.sep1 ymax.sep1 + 0.5
    
    -- Vertical separator between buttons
    button .b1 'Apply'
    line .sepV vert height 2
    button .b2 'Cancel'
exit
```

### Using Frames with Lines
```pml
frame .f3 'Container'
    toggle .t1 'Toggle A'
    line .hLine horiz width.f3 height.t1
    toggle .t2 'Toggle B'
exit
```

## Best Practices
1.  **Visual Hierarchy**: Use lines to separate distinct logical blocks within a form (e.g., between "Input Parameters" and "Action Buttons").
2.  **Relative Positioning**: Always define the position of gadgets below or beside a line using relative keywords like `xmin`, `xmax`, `ymin`, or `ymax` to ensure the layout remains consistent if the line's length changes.
3.  **Color Schemes**: Do not attempt to hardcode the color of a `LINE` gadget unless necessary, as it automatically adapts to the user's system theme (e.g., Dark Mode vs. Light Mode) for a native look.
4.  **Consistency**: Use horizontal lines to separate rows of data and vertical lines to separate columns or distinct sidebar areas.

