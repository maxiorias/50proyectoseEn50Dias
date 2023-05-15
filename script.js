let currentResult = 0;

function appendNumber(number) {
  const resultInput = document.getElementById('result');
  resultInput.value += number;
}

function appendOperator(operator) {
    const resultInput = document.getElementById('result');
    resultInput.value += operator;
  }

function calculate() {
  const resultInput = document.getElementById('result');
  try {
    currentResult = eval(resultInput.value);
    resultInput.value = currentResult;
  } catch (error) {
    resultInput.value = 'Error';
  }
}


function clearResult() {
  const resultInput = document.getElementById('result');
  resultInput.value = '';
}

function porcentaje() {
    const result = parseFloat(document.getElementById('result').value);
    const percentaje = result / 100;
    document.getElementById('result').value = percentaje;
  }
  
  function masMenosSigno() {
    const result = document.getElementById('result').value;
    if (result !== '') {
      const newValue = parseFloat(result) * -1;
      document.getElementById('result').value = newValue;
    }
  }

