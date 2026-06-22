# EDGCNTRL Object

The `EDGCNTRL` object is a global system controller instance (referenced via the global variable `!!edgCntrl`) that manages active Event Driven Graphics (EDG) selection packets.

## Methods

| Name | Result | Purpose |
| :--- | :--- | :--- |
| `add(packet)` | NO RESULT | Registers and activates an `EDGPACKET` object on the active EDG stack, initiating the graphical pick sequence. |
| `remove(description)` | NO RESULT | Deactivates and removes any active `EDGPACKET` object from the stack that matches the specified description. |

---

## Code Example

### Activating and Cancelling Pick Packets

```pml
$* Activating a packet
!packet = object EDGPACKET()
!packet.description = 'TempMeasurePick'
!packet.elementPick('Select element to measure')
!packet.action = '!!myForm.measure(!this.return[1].item)'
!!edgCntrl.add(!packet)

$* Cancelling / Removing a packet by its description identifier
!!edgCntrl.remove('TempMeasurePick')
```
