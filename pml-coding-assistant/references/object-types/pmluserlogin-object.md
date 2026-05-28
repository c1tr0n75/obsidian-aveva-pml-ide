# PMLUSERLOGIN Object

The `PMLUSERLOGIN` object is used to automate the generation of secure project entry scripts (login macros). It allows for creating macros that bypass the standard login dialog for specific users, hostnames, or time windows, while maintaining security through encryption.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `PMLUserLogin()` | PMLUSERLOGIN | Constructor. Creates a new login automation object. |
| `Project(code)` | NO RESULT | Sets the target project code (e.g., `'SAM'`). |
| `MDB(name)` | NO RESULT | Sets the target Multiple Database (MDB) name. |
| `Macro(path)` | NO RESULT | Sets the full path of the PML macro to be executed upon login. |
| `SaveToFile(path)` | NO RESULT | Encrypts the login credentials and saves the macro to disk. |
| `VerifyAfter(date)` | NO RESULT | restricts the macro to be valid only after the specified `DATETIME`. |
| `VerifyBefore(date)`| NO RESULT | restricts the macro to be valid only before the specified `DATETIME`. |
| `VerifyHostnames(arr)`| NO RESULT | restricts execution to the listed hostnames (ARRAY of strings). |
| `VerifyWinusers(arr)` | NO RESULT | restricts execution to the listed Windows users (ARRAY of strings). |

## Code Examples

### Generating a Secure Auto-Login Script
```pml
!login = object PMLUSERLOGIN()
!login.Project('SAM')
!login.MDB('PIPING')
!login.Macro('C:\AVEVA\Macros\Startup.pml')

-- Restrict to current user and machine
!hostArr = object ARRAY()
!hostArr.Append('WORKSTATION_01')
!login.VerifyHostnames(!hostArr)

-- Save the encrypted login script
!login.SaveToFile('C:\AVEVA\Login\AutoLogin.mac')
```

## Best Practices
1.  **Security Restrictions**: Always use `.VerifyHostnames()` and `.VerifyWinusers()` when generating auto-login scripts to ensure the file cannot be misused if copied to another machine.
2.  **Expiration**: Use `.VerifyBefore()` to create temporary login scripts for contractors or automated tasks that should expire after a certain date.
3.  **Path Management**: Ensure the path passed to `.SaveToFile()` is in a secure directory with appropriate NTFS permissions.
4.  **Macro Validation**: Test the startup macro manually before embedding it in an automated login script to ensure it doesn't cause the application to hang or error out during initialization.

