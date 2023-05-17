const timerElement = document.getElementById('timer');
const startElement = document.getElementById('start');
const stopElement = document.getElementById('stop');
const resetElement = document.getElementById('reiniciar');

let timerInterval;
let seconds = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds % 60).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }


function startTimer() {
    timerInterval = setInterval(() => {
      seconds++;
      timerElement.textContent = formatTime(seconds);
    }, 1000);
  }
  
  // Función para detener el cronómetro
  function stopTimer() {
    clearInterval(timerInterval);
  }
  
  // Función para reiniciar el cronómetro
  function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    timerElement.textContent = formatTime(seconds);
  }
  
  
  startElement.addEventListener('click', startTimer);
  stopElement.addEventListener('click', stopTimer);
  resetElement.addEventListener('click', resetTimer);