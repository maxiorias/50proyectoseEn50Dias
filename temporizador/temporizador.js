const fechaObjetivo = new Date('2023-06-21T23:59:59');

const actualizarCuentaRegresiva = () => {
  const fechaActual = new Date();
  const tiempoRestante = fechaObjetivo - fechaActual;

  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  document.getElementById('cuenta-regresiva').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (tiempoRestante <= 0) {
    clearInterval(temporizador);
    document.getElementById('cuenta-regresiva').innerHTML = '¡Tiempo finalizado!';
  }
};

const temporizador = setInterval(actualizarCuentaRegresiva, 1000);