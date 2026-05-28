# PMLSECURELOGIN Object

The `PMLSECURELOGIN` object is used to generate encrypted project entry scripts that include a username and password. This is a more comprehensive version of `PMLUSERLOGIN` that allows for complete automation of the project login process from a command line or shortcut.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `PMLSecureLogin()` | PMLSECURELOGIN | Constructor. Creates a new secure login object. |
| `Project(code)` | NO RESULT | Sets the target project code (e.g., `'SAM'`). |
| `User(name)` | NO RESULT | Sets the AVEVA username. |
| `Password(pwd)` | NO RESULT | Sets the AVEVA password for the user. |
| `MDB(name)` | NO RESULT | Sets the target Multiple Database (MDB) name. |
| `Macro(path)` | NO RESULT | Sets the full path of the startup macro. |
| `EmbedMacro(bool)` | NO RESULT | If `True`, the macro content is encrypted and embedded inside the login script itself. |
| `SaveToFile(path)` | NO RESULT | Generates and saves the encrypted login file. |

## Code Examples

### Creating an Automated Login Shortcut
```pml
!sec = object PMLSECURELOGIN()
!sec.Project('SAM')
!sec.User('SYSTEM')
!sec.Password('XXXXXX')
!sec.MDB('ALL')

-- Embed the startup logic directly in the login script
!sec.Macro('C:\AVEVA\Scripts\ProjectInit.pml')
!sec.EmbedMacro(TRUE)

!sec.SaveToFile('C:\AVEVA\Login\SecureEntry.mac')
```

## Best Practices
1.  **Security Caution**: Although the generated script is encrypted, the PML script that *creates* the object contains the password in plain text. Always delete or secure your generation scripts after the `.mac` file is created.
2.  **Embedded Macros**: Use `.EmbedMacro(TRUE)` to create a single, self-contained file that is harder to tamper with than an external `.pml` file.
3.  **MDB Scope**: Ensure the specified MDB contains all necessary databases for the startup macro to run without errors.
4.  **License Check**: Use `.HasLicenceToEmbedMacro()` to verify if the current environment supports embedding before attempting to use that feature.

