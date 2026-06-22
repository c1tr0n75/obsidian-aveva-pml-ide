# EDGPACKET Object

The `EDGPACKET` object is a core component of the Event Driven Graphics (EDG) system in AVEVA PML. It is used to configure interactive graphical picking operations (such as picking elements or 3D positions) within the graphical view.

## Properties

| Name | Data Type | Description |
| :--- | :--- | :--- |
| `action` | STRING | The PML command or method call string executed when a pick event occurs. The pick results can be accessed inside this callback string using `!this.return`. |
| `close` | STRING | The PML command or method call string executed when the pick interaction concludes (e.g. when the user presses the `Esc` key). |
| `remove` | BOOLEAN | Determines whether the packet is removed automatically. Set to `true` (default) for a single pick action. Set to `false` to keep the packet active for continuous picking. |
| `description` | STRING | A unique identifier string for the packet, used when adding or removing it from the global EDG controller. |

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `elementPick(prompt)` | NO RESULT | Configures the packet to prompt the user to select a database element in the 3D view. The prompt is displayed in the prompt bar. |
| `definePosition(prompt)` | NO RESULT | Configures the packet to prompt the user to click a coordinate/position in the 3D space. |
| `definePoint(option)` | NO RESULT | Configures the packet for selecting specific P-points or keypoints. |
| `defineLine(option)` | NO RESULT | Configures the packet for selecting a line or edge. |
| `definePlane(option)` | NO RESULT | Configures the packet for selecting a planar face. |
| `defineCircle(option)` | NO RESULT | Configures the packet for selecting a circular edge. |
| `defineMeasure(option)` | NO RESULT | Configures the packet for custom measurement sequences. |

## Callback Return Values (`!this.return`)

When the callback assigned to the `.action` property is invoked, the results of the pick are stored in the `!this.return` array member of the `EDGPACKET` instance (`!this` inside the callback string context refers to the `EDGPACKET` instance):

*   **For `elementPick`**: `!this.return[1].item` is of type `DBREF` representing the picked database element.
*   **For `definePosition`**: `!this.return[1].position` is of type `POSITION` representing the clicked 3D coordinates.

---

## Code Example

### Single Element Pick

```pml
$* Define and trigger a single element pick
!packet = object EDGPACKET()
!packet.elementPick('Select an element from 3D View')
!packet.description = 'MySinglePick'
!packet.remove = true

$* Callbacks
!packet.action = '!!myForm.handleSinglePick(!this.return[1].item)'
!packet.close  = '!!myForm.handleClose()'

$* Add to global controller to activate
!!edgCntrl.add(!packet)
```

### Continuous Position Pick

```pml
$* Define and trigger continuous coordinate pick
!packet = object EDGPACKET()
!packet.definePosition('Pick coordinates [ESC to exit]')
!packet.description = 'MyMultiPick'
!packet.remove = false

$* Callbacks
!packet.action = '!!myForm.handleMultiPick(!this.return[1].position)'
!packet.close  = '!!myForm.handleClose()'

$* Add to global controller to activate
!!edgCntrl.add(!packet)
```
