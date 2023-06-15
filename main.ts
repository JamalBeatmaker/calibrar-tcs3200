input.onButtonPressed(Button.A, function () {
    SENColor.calibrate()
})
led.enable(false)
SENColor.setPins(
DigitalPin.P0,
DigitalPin.P11,
DigitalPin.P15,
DigitalPin.P12,
DigitalPin.P16
)
basic.forever(function () {
    serial.writeValue("R", SENColor.getColor(color.red))
    serial.writeValue("G", SENColor.getColor(color.green))
    serial.writeValue("B", SENColor.getColor(color.blue))
    basic.pause(1000)
    if (SENColor.getColor(color.green) > SENColor.getColor(color.red) && SENColor.getColor(color.green) > SENColor.getColor(color.blue)) {
        hackbitmotors.MotorRunDelay(hackbitmotors.Motors.M1A, 150, 1)
    } else {
        hackbitmotors.MotorStop(hackbitmotors.Motors.M1A)
    }
})
