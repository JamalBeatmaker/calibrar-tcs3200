function Verificando_Verde () {
    if (SENColor.getColor(color.green) > SENColor.getColor(color.red) && SENColor.getColor(color.green) > SENColor.getColor(color.blue)) {
    	
    } else if (false) {
    	
    } else {
        hackbitmotors.MotorStop(hackbitmotors.Motors.M1A)
    }
}
input.onButtonPressed(Button.A, function () {
    SENColor.calibrate()
})
input.onButtonPressed(Button.B, function () {
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 25)
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
    if (hackbitsensor.detectline(DigitalPin.P4, true) && hackbitsensor.detectline(DigitalPin.P10, true)) {
        hackbitmotors.MotorStopAll()
        basic.pause(100)
        hackbitmotors.MotorRunDelay(hackbitmotors.Motors.M1A, -30, 1)
        hackbitmotors.MotorRunDelay(hackbitmotors.Motors.M1B, -30, 1)
        hackbitmotors.MotorStopAll()
    }
})
