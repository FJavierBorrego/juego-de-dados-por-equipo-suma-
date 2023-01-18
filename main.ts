radio.onReceivedNumber(function (receivedNumber) {
    let jugadores = 0
    contador += 1
    while (contador != jugadores) {
        suma += receivedNumber
    }
    if (juego == 0) {
        let canal_recepción = 0
        let canal_envío = 0
        radio.setGroup(canal_envío)
        radio.sendNumber(suma)
        juego = 1
        radio.setGroup(canal_recepción)
    }
})
input.onGesture(Gesture.Shake, function () {
    valor = randint(1, 6)
    if (valor == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (valor == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (valor == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (valor == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (valor == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (valor == 6) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
    }
    suma_mia += valor
    tirada += 1
    if (tirada == 2) {
        final_tirada()
        tirada = 0
    }
})
function final_tirada () {
    basic.showNumber(suma_mia)
    suma += suma_mia
    radio.sendNumber(suma_mia)
    basic.pause(1000)
}
let suma = 0
let contador = 0
let juego = 0
let suma_mia = 0
let valor = 0
let tirada = 0
let nuestro_canal = 0
radio.setGroup(nuestro_canal)
tirada = 0
valor = 0
suma_mia = 0
juego = 0
contador = 1
suma = 0
