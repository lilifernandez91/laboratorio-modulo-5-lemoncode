// variable para almacenar puntuacion
let puntuacion: number = 0

// variable para guardar un array de numeros
const cartas: Array<number> = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]

// enlaces a las imágenes
const imageSrc = '/images/{carta}-copas.jpg'
const backImageSrc = '/images/back.jpg'

// funcion para mostrar la puntuacion
const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById('puntuacion')
    if (elementoPuntuacion) {
        elementoPuntuacion.innerHTML = puntuacion.toString()
    }
}
muestraPuntuacion()

document.addEventListener('DOMContentLoaded', () => {
    muestraPuntuacion()
})

// funcion para generar una carta aleatoria
const generarCartaAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * cartas.length)
    return cartas[indiceAleatorio]
}

// funcion que nos devuelve una carta aleatoria
const dameCarta = () => {
    const cartaAleatoria = generarCartaAleatoria()
    calcularPuntuacion(cartaAleatoria)
    muestraPuntuacion()
    muestraCarta(cartaAleatoria)
}

const calcularPuntuacion = (cartaAleatoria: number) => {
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

const btnDameCarta = document.getElementById('dame')
if (btnDameCarta) {
    btnDameCarta.addEventListener('click', dameCarta)
}

// funcion para mostrar la carta
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
    const elementoCarta = document.getElementById('carta')
    if (elementoCarta) {
        elementoCarta.setAttribute('src', imagen)
    }
}



