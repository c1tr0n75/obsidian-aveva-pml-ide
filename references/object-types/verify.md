# VERIFY Object

The `VERIFY` object is a security tool used to enforce access restrictions within PML scripts. It allows developers to validate that the current user is authorized, the computer (hostname) is approved, and the execution is happening within a permitted time window. If any check fails, the script terminates immediately with a "Verification error".

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `Verify()` | VERIFY | Constructor. Creates a new verification object. |
| `After(date)` | NO RESULT | restricts execution to only after the specified `DATETIME`. |
| `Before(date)` | NO RESULT | restricts execution to only before the specified `DATETIME`. |
| `Hostnames(arr)`| NO RESULT | restricts execution to the listed hostnames (ARRAY of strings). |
| `Winusers(arr)` | NO RESULT | restricts execution to the listed Windows users (ARRAY of strings). |
| `Run()` | NO RESULT | Executes the verification checks. Terminates the script on failure. |

## Code Examples

### Enforcing Host and Time Restrictions
```pml
!check = object VERIFY()

-- Restrict to a specific maintenance window
!check.After(object DATETIME('2026-05-01 00:00:00'))
!check.Before(object DATETIME('2026-05-02 00:00:00'))

-- Restrict to the batch processing server
!hosts = ['BATCH_SRV_01', 'BATCH_SRV_02']
!check.Hostnames(!hosts)

-- Perform the check
!check.Run()
$p Verification successful. Starting batch process...
```

## Best Practices
1.  **Fail-Fast**: Call `.Run()` at the very beginning of your sensitive scripts (e.g., global data cleanup or export routines) to prevent unauthorized execution.
2.  **Graceful Termination**: Be aware that `.Run()` terminates the PML process immediately if it fails. If you need to handle failure gracefully (e.g., showing a custom message before exiting), you may need to use other security objects or manual logic.
3.  **Time Zones**: When using `.After()` and `.Before()`, ensure the `DATETIME` objects are created using the server's local time or a consistent time zone to avoid synchronization issues.
4.  **Hostname Accuracy**: Hostnames are usually case-sensitive in the underlying Windows API. Ensure the strings in the array exactly match the machine's reported name.

