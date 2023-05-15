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

function appendOperator () {
    const result
}