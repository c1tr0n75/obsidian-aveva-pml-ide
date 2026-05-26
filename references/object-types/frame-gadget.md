# FRAME Gadget

The `FRAME` gadget is a container used to group and manage multiple gadgets. It can act as a decorative box, a radio button group, a tabbed interface, or a collapsible panel.

## Frame Types

| Type | Purpose |
| :--- | :--- |
| `NORMAL` | Standard container with a border and optional title. Acts as a radio group for `RTOGGLE` children. |
| `TABSET` | A container for tabbed pages. Each child `FRAME` becomes a tab. |
| `PANEL` | A region without a border (unless `INDENT` is used). Used for layout grouping. |
| `FOLDUPPANEL`| A collapsible region with an expand/collapse toggle. |
| `TOOLBAR` | A specialized container for buttons/icons, used only on Main forms. |

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Tag` | STRING | The title text displayed on the frame border. |
| `Val` | REAL | The index of the selected radio button within the group (1-based). |
| `Callback` | STRING | The callback triggered when the radio group selection changes. |
| `Expanded` | BOOLEAN | (FoldUpPanel only) Gets or sets whether the panel is expanded. |
| `Selected` | BOOLEAN | (Tab Page only) Gets or sets whether the tab is the active one. |
| `RGroupCount` | REAL | (Read-only) The number of radio buttons (`RTOGGLE`) in the group. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Rtoggle(index)` | GADGET | Returns the `RTOGGLE` gadget at the specified index. |

## Code Examples

### Standard Frame with Radio Buttons
```pml
frame .myFrame 'Options'
    path down
    rtoggle .opt1 'Choice A'
    rtoggle .opt2 'Choice B'
    rtoggle .opt3 'Choice C'
exit

-- Set selection programmatically
!this.myFrame.Val = 2
```

### Tabbed Interface
```pml
frame .tabs tabset
    frame .page1 'General'
        text .name 'Name:'
    exit
    frame .page2 'Advanced'
        toggle .debug 'Debug Mode'
    exit
exit

-- Select the second tab
!this.tabs.page2.Selected = TRUE
```

### Collapsible Panel (FoldUp)
```pml
frame .details folduppanel 'Additional Details'
    text .notes 'Notes:'
exit

-- Collapse the panel
!this.details.Expanded = FALSE
```

## Best Practices
1.  **Logical Grouping**: Use frames to group related gadgets, which improves both visual clarity and programmatic control (disabling a frame disables all its children).
2.  **Radio Groups**: When you need a "choose one" set of options, a `FRAME` containing `RTOGGLE` gadgets is the standard approach.
3.  **No Nesting TABSETs**: You cannot nest one `TABSET` inside another.
4.  **Auto-Layout**: Frames are crucial for complex layouts. Use the `INDENT` or `NOPADDING` keywords to fine-tune the aesthetics of nested containers.

