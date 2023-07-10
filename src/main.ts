import * as confetti from 'canvas-confetti';

const btnDameCarta = document.getElementById('dame')
const elementoPuntuacion = document.getElementById('puntuacion')
const elementoCarta = document.getElementById('carta')
const mensajes = document.getElementById('mensajes')
const mePlanto = document.getElementById('planto')
const comenzar = document.getElementById('comenzar')


let puntuacion: number = 0

const cartas: Array<number> = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]

const imageSrc = '/images/{carta}-copas.jpg'
const backImageSrc = '/images/back.jpg'

const dameCarta = () => {
    const cartaAleatoria = generarCartaAleatoria()
    calcularPuntuacion(cartaAleatoria)
    muestraPuntuacion()
    muestraCarta(cartaAleatoria)
    gameOver()
    if (mensajes && btnDameCarta && btnDameCarta instanceof HTMLButtonElement && puntuacion === 7.5) {
        mensajes.innerHTML = '¡Lo has clavado! ¡Enhorabuena!'
        confetti.default()
        btnDameCarta.disabled = true
    }
}

const generarCartaAleatoria = (): number => {
    const indiceAleatorio = Math.floor(Math.random() * cartas.length)
    return cartas[indiceAleatorio]
}

const muestraCarta = (carta: number): void => {
    let imagen: string

    switch (carta) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 10:
        case 11:
        case 12:
            imagen = imageSrc.replace('{carta}', carta.toString())
            break
        default:
            imagen = backImageSrc
            break
    }
    if (elementoCarta) {
        elementoCarta.setAttribute('src', imagen)
    }
}

const muestraPuntuacion = (): void => {
    if (elementoPuntuacion) {
        elementoPuntuacion.innerHTML = puntuacion.toString()
    }
}

const calcularPuntuacion = (cartaAleatoria: number): void => {
    switch (cartaAleatoria) {
        case 10:
        case 11:
        case 12:
            puntuacion += 0.5
            break
        default:
            puntuacion += cartaAleatoria
            break
    }
}

const gameOver = (): void => {
    if (puntuacion > 7.5 && mensajes && btnDameCarta && btnDameCarta instanceof HTMLButtonElement) {
        mensajes.innerHTML = 'GAME OVER: LO SENTIMOS, LA PUNTUACION DEBE SER IGUAL O MENOR QUE 7.5'
        btnDameCarta.disabled = true
    }
}

const handleMePlanto = (): void => {
    if (btnDameCarta && btnDameCarta instanceof HTMLButtonElement && mensajes) {
        btnDameCarta.disabled = true
        if (puntuacion === 0) {
            mensajes.innerHTML = 'Por favor, pide una carta'
            btnDameCarta.disabled = false
        }
    } if (mensajes) {
        if (puntuacion >= 0.5 && puntuacion < 4) {
            mensajes.innerHTML = 'Has sido muy conservador'
        } if (puntuacion >= 4 && puntuacion < 6) {
            mensajes.innerHTML = 'Te ha entrado el canguelo eh?'
        } if (puntuacion >= 6 && puntuacion < 7.5) {
            mensajes.innerHTML = 'Casi casi....'
        }
    }
}

const handleComenzar = (): void => {
    puntuacion = 0

    if (elementoPuntuacion && elementoCarta && btnDameCarta && btnDameCarta instanceof HTMLButtonElement && mensajes) {
        elementoPuntuacion.innerHTML = puntuacion.toString()
        elementoCarta.setAttribute('src', backImageSrc)
        btnDameCarta.disabled = false
        mensajes.innerHTML = ''
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (mePlanto && btnDameCarta && comenzar) {
        mePlanto.addEventListener('click', handleMePlanto)
        btnDameCarta.addEventListener('click', dameCarta)
        comenzar.addEventListener('click', handleComenzar)
    }
})



