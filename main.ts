input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Count_EN = Count_EN + 1
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Count_DE == Count_EN) {
        basic.showString("DE=EN= ")
        basic.showString("" + (Count_DE))
        basic.pause(2000)
    } else if (Count_DE > Count_EN) {
        basic.showString("DE>EN um ")
        basic.showString("" + (Count_DE - Count_EN))
        basic.pause(2000)
    } else if (Count_DE < Count_EN) {
        basic.showString("EN>DE um")
        basic.showString("" + (Count_EN - Count_DE))
        basic.pause(2000)
    } else {
        basic.showString("Kein Ergebnis", 150)
        basic.pause(2000)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Count_DE = Count_DE + 1
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
let Count_DE = 0
let Count_EN = 0
Count_EN = 0
Count_DE = 0
basic.showString("GO ")
