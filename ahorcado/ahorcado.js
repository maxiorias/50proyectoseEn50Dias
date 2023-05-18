const palabraSecreta = 'JAVASCRIPT';
let palabraAdivinada = '_ _ _ _ _ _ _ _ _ _';
let intentosRestantes = 6;

// con esta funcion actualizo la palabra advinada en la interfaz
function actualizarPalabraAdivinada() {
    const palabraElemento = document.querySelector('.palabra');
    palabraElemento.textContent = palabraAdivinada;
}

// actualizo los intentos restantes 

function actualizarIntentosRestantes() {
    const intentosElemento = document.querySelector('.intentos');
    intentosElemento.textContent = 'Intentos restantes: ${intentosRestantes}'
}

//  Manejar el evento de clic en una letra

function manejarClicLetra(letra) {
    if (palabraSecreta.includes(letra)) {
        palabraAdivinada = palabraAdivinada.split(' ').join('');
        for (var i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraAdivinada = palabraAdivinada.substr(0, i) + letra + palabraAdivinada.substr(i + 1);
            }
        }
    } else {
        intentosRestantes--;
    }

    if (palabraAdivinada === palabraSecreta) {
        alert('¡Ganaste!');
        reiniciarJuego();
    } else if (intentosRestantes === 0) {
        alert('¡Perdiste! La palabra secreta era: ' + palabraSecreta);
        reiniciarJuego();
    }

    actualizarPalabraAdivinada();
    actualizarIntentosRestantes();
}

// Asignar el manejador de eventos a las letras
var letras = document.querySelectorAll('.letrasDiccionario span');
letras.forEach(function (letraElemento) {
    var letra = letraElemento.textContent;
    letraElemento.addEventListener('click', function () {
        manejarClicLetra(letra);
        letraElemento.style.backgroundColor = '#ccc';
        letraElemento.style.pointerEvents = 'none';
    });
});

// Reiniciar el juego
function reiniciarJuego() {
    palabraAdivinada = '_ _ _ _ _ _ _ _ _ _';
    intentosRestantes = 6;
    actualizarPalabraAdivinada();
    actualizarIntentosRestantes();
    letras.forEach(function (letraElemento) {
        letraElemento.style.backgroundColor = 'transparent';
        letraElemento.style.pointerEvents = 'auto';
    });
}

actualizarPalabraAdivinada();
actualizarIntentosRestantes();