input.onButtonPressed(Button.A, function () {
    isflashing = 1
})
input.onButtonPressed(Button.AB, function () {
    if (tijd == 0) {
        tijd = 500
    } else {
        tijd = 0
    }
})
input.onButtonPressed(Button.B, function () {
    isflashing = 0
})
let tijd = 0
let isflashing = 0
isflashing = 0
tijd = 500
basic.forever(function () {
    if (isflashing == 1) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(tijd)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(tijd)
    }
})
