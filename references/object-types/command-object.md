# COMMAND Object

The `COMMAND` object defines the behavior, state, and callbacks for a command that can be linked to UI tools (like ribbon buttons or menu items).

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Execute` | STRING | Callback called when the command is executed. |
| `Key` | STRING | Unique identifier for the command. |
| `List` | STRING | Callback that returns an ARRAY for List/ComboBox tools. |
| `Refresh` | STRING | Callback called when the application context changes. |
| `RefreshFilters` | ARRAY | Array of up to 5 strings used to filter refresh callbacks. |
| `State` | STRING | Callback that returns state: `'Enabled'`, `'Disabled'`, `'Hidden'`, `'Checked'`, `'Unchecked'`. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Checked([state])` | BOOLEAN | Get or set the command's 'Checked' state. |
| `Enabled([state])` | BOOLEAN | Get or set the command's 'Enabled' state. |
| `Visible([state])` | BOOLEAN | Get or set the command's visibility. |
| `ExecuteOnChecked([state])`| BOOLEAN | Get/Set whether to execute the command when its checked state changes. |
| `Register()` | NO RESULT | Registers the command with the system Command Manager. |
| `Select()` | NO RESULT | Selects the tool attached to this command. |
| `SelectedIndex([index])` | REAL | Get or set the selected index for list-based commands. |
| `Value([val])` | ANY | Get or set the command's value (can be STRING, REAL, or BOOLEAN). |

## Code Examples

### Defining and Registering a Command
```pml
!cmd = object COMMAND()
!cmd.Key = 'MyPlugin.ExportCSV'
!cmd.Execute = '!!MyPlugin.Export()'
!cmd.Refresh = '!!MyPlugin.RefreshState()'
!cmd.Register()
```

### Controlling Command State
```pml
-- Disable a command globally
!cmd = !!CmSys.Command('MyPlugin.ExportCSV')
!cmd.Enabled(false)

-- Check if a command is visible
if (!cmd.Visible()) then
    $p Command is active in the UI
endif
```

## Best Practices
1.  **Unique Keys**: Always use a namespaced key (e.g., `Company.Module.Action`) to avoid collisions with system commands.
2.  **Registration**: Commands must be registered via `.Register()` before they can be assigned to UI tools in the ribbon or menus.
3.  **Refresh Logic**: Use `RefreshFilters` to ensure the `Refresh` callback only runs when relevant context changes (e.g., selection change), improving performance.
4.  **State Management**: Prefer using the `State` callback for dynamic enabling/disabling rather than manually setting `.Enabled(state)` everywhere in your code.

