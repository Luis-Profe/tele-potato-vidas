radio.onReceivedNumber(function (receivedNumber) {
    potato = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    potato = randint(10, 20)
    while (vidas > 0) {
        if (potato == 0) {
            basic.showIcon(IconNames.Skull)
            vidas += -1
        }
        if (potato < 0) {
            basic.clearScreen()
        }
        if (potato > 0) {
            basic.showIcon(IconNames.Target)
            potato += -1
        }
    }
})
let vidas = 0
let potato = 0
radio.setGroup(1)
potato = -1
vidas = 3
basic.forever(function () {
	
})
