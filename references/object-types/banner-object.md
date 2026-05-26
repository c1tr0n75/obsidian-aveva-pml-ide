# BANNER Object

The `BANNER` object (accessible via the global `!!Banner`) contains metadata about the current AVEVA software session, including company information, copyright, and release status.

## Members

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `Company` | STRING | Company name (up to 120 characters). |
| `Copyright` | STRING | Copyright information (up to 80 characters). |
| `Libraries` | ARRAY | List of loaded library names. |
| `Name` | STRING | Main window title (up to 13 characters). |
| `Short` | STRING | Short form of the company name. |
| `Status` | STRING | Release status of the application. |

## Code Examples

### Querying Session Information
```pml
!Banner = banner
!company = !Banner.Company
!version = !Banner.Status
$p Running AVEVA E3D Design for $!company (Status: $!version)
```

### Checking Loaded Libraries
```pml
!Banner = banner
!libs = !Banner.Libraries
do !lib values !libs
    $p Loaded Library: $!lib
enddo
```

