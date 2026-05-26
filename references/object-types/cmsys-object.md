# CMSYS Object

The `CMSYS` object (accessible via the global `!!CmSys`) is used to manage system commands, load resources, and trigger UI refreshes across the application.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Command(key)` | COMMAND | Returns the `COMMAND` object associated with the given key. |
| `ExecuteCommand(key)` | NO RESULT | Executes the system command associated with the given key. |
| `LoadResource(path)` | NO RESULT | Loads a resource file (e.g., .uic) from the application directory. |
| `RefreshAll(what, how, id)`| NO RESULT | Triggers a refresh of all commands using specific criteria. |
| `RemovePMLCommand(key)` | NO RESULT | Removes a dynamically added PML command from the system. |

## Code Examples

### Executing a System Command
```pml
-- Execute a known system command by its key
!!CmSys.ExecuteCommand('MyCustomPlugin.Action')
```

### Loading a Resource File
```pml
-- Load a user interface configuration file
!!CmSys.LoadResource('CustomTools.uic')
```

### Refreshing UI Commands
```pml
-- Trigger a refresh of the 'Selection' command group
!!CmSys.RefreshAll('COMMAND', 'REFRESH', 'Selection')
```

## Best Practices
1.  **Global Access**: Always use the global instance `!!CmSys` rather than creating a new object.
2.  **Resource Paths**: `LoadResource` typically looks in the application execution directory. Ensure your resource files are correctly deployed to the expected AVEVA paths.
3.  **Command Keys**: System command keys are case-sensitive. Verify the exact key from the product documentation or resource files.

