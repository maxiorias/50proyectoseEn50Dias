// fecha y hora objetivo

const fechaObjetivo = new Date('2023-06-21T23:59:59');

// funcion para actualizar el temporizador

const actualizarCuentaRegresiva = () => {
    const fechaActual = new Date ();
    const tiempoRestante = fechaObjetivo - fechaActual;
}

const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
const horas = Math.floor((tiempoRestante %(1000 * 60 * 60 * 24))) /(1000 * 60 * 60));
