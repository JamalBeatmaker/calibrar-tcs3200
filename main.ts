function Verificando_Verde () {
    if (SENColor.getColor(color.green) > SENColor.getColor(color.red) && SENColor.getColor(color.green) > SENColor.getColor(color.blue)) {
        hackbitmotors.MotorRunDelay(hackbitmotors.Motors.M1A, 49, 1)
        hackbitmotors.MotorRunDelay(hackbitmotors.Motors.M1B, -29, 1)
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    SENColor.calibrate()
})
function Seguir_Linha () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    70,
    hackbitmotors.Motors.M1B,
    70
    )
}
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
    Seguir_Linha()
    if (hackbitsensor.detectline(DigitalPin.P4, true) && hackbitsensor.detectline(DigitalPin.P10, true)) {
        hackbitmotors.MotorStopAll()
        Verificando_Verde()
    } else {
    	
    }
})
