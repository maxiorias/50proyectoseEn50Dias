const palabraSecreta = 'JAVASCRIPT';
let palabraAdivinada = '_ _ _ _ _ _ _ _ _ _';
let intentosRestantes = 6;

// con esta funcion actualizo la palabra advinada en la interfaz
function actualizarPalabraAdivinada () {
    const palabraElemento = document.querySelector('.palabra');
    palabraElemento.textContent = palabraAdivinada;
}

// actualizo los intentos restantes 

function actualizarIntentosRestantes (){
    const intentosElemento = document.querySelector('.intentos');
    intentosElemento.textContent = 'Intentos restantes: ${intentosRestantes}'
}