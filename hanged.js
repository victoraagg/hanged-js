var palabraSeleccionada
var aciertos = []
var maxFallos = 5
var fallos = 0
var palabraSeleccionada = sacarPalabraAleatoria()
console.log(palabraSeleccionada);

do{
    var nuevaLetra = solicitarLetra()
    if(esAcierto(nuevaLetra)){
        aciertos.push(nuevaLetra)
    }else{
        fallos++
    }
} while(!juegoFinalizado())

function getNumAleatorio(min, max) {
    let posibilidades = max - min + 1
    let numAleatorio = Math.random() * posibilidades
    numAleatorio = Math.floor(numAleatorio)
    return min + numAleatorio
}

function sacarPalabraAleatoria() {
    var diccionario = ['mesa', 'armario', 'televisor', 'radio', 'nevera']
    var numAleatorio = getNumAleatorio(0, diccionario.length - 1)
    return diccionario[numAleatorio]
}

function solicitarLetra() {
    let mensaje = componerMensaje()
    do {
        var letra = prompt(mensaje)
    } while (!letraValida(letra));
    return letra
}

function componerMensaje() {
    var mensaje = 'Juego del ahorcado\n'
    for (let i = 0; i < palabraSeleccionada.length; i++) {
        let letraActual = palabraSeleccionada[i]
        if(aciertos.indexOf(letraActual) != -1){
            mensaje += letraActual + ' '
        } else {
            mensaje += '_ '
        }
    }
    mensaje += `\nLlevas ${fallos} de ${maxFallos} fallos`
    mensaje += `\nIntroduce una nueva letra`
    return mensaje
}

function letraValida(letra) {
    if(!letra){
        return false
    }
    let valid = /^[A-Za-z]$/.test(letra);
    return valid
}

function esAcierto(letra) {
    letra = letra.toLowerCase()
    if(palabraSeleccionada.indexOf(letra) != -1){
        return true
    }
    return false
}

function juegoFinalizado() {
    if(fallos == maxFallos){
        alert('El juego ha finalizado\nNo has acertado la palabra :(')
        return true
    }
    if(aciertos.length == palabraSeleccionada.length) {
        alert('El juego ha finalizado\n¡Has acertado la palabra!')
        return true
    } else {
        return false
    }
}