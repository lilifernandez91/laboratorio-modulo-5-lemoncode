let puntuacion: number = 0

const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById('puntuacion')
    if (elementoPuntuacion) {
        elementoPuntuacion.innerHTML = puntuacion.toString()
    }
}
muestraPuntuacion()

const dameCarta = () => {
    console.log('AQUI TIENES UNA CARTA')
}

const btnDameCarta = document.getElementById('dame')
if (btnDameCarta) {
    btnDameCarta.addEventListener('click', dameCarta)
}

