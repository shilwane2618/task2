let currentInput = '';
let operator = '';
let previousInput = '';

function appendValue(value) {
    const display = document.getElementById('display');
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    document.getElementById('display').value = '';
}

function operation(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput && currentInput && operator) {
        const result = eval(previousInput + operator + currentInput); // Evaluates the expression
        document.getElementById('display').value = result;
        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }
}
