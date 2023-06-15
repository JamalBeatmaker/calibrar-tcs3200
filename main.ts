input.onButtonPressed(Button.A, function () {
    SENColor.calibrate()
})
SENColor.setPins(
DigitalPin.P0,
DigitalPin.P0,
DigitalPin.P0,
DigitalPin.P0,
DigitalPin.P0
)
basic.forever(function () {
    serial.writeValue("R", SENColor.getColor(color.red))
    serial.writeValue("G", SENColor.getColor(color.green))
    serial.writeValue("B", SENColor.getColor(color.blue))
})
