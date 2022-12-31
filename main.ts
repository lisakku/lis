input.onButtonPressed(Button.A, function () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(5000)
    basic.clearScreen()
})
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.pause(2000)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 190)
basic.forever(function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
