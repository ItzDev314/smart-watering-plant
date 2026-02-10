let Soil = 0
basic.showString("Initializing")
basic.forever(function () {
    Soil = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("Soil", Soil)
    if (Soil >= 70) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
