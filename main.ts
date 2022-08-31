let dice = 0
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    if (dice == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (dice < 0) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (dice == 0) {
    	
    } else {
    	
    }
})
