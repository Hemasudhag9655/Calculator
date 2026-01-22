let currentDisplay = '0';
let firstNumber = null;
let operation = null;
let shouldResetDisplay = false;

function updateDisplay(){
    document.getElementById('display').textContent = currentDisplay;
}

function appendNumber(num){
    if(shouldResetDisplay){
        currentDisplay = num;
        shouldResetDisplay = false;
    } else {
        if(currentDisplay === '0' && num !== '.'){
            currentDisplay = num;
        } else {
            currentDisplay += num;
        }
    }
    updateDisplay();
}

function clearDisplay(){
    currentDisplay = '0';
    firstNumber = null;
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function deleteLast(){
    currentDisplay = currentDisplay.length > 1 
        ? currentDisplay.slice(0,-1) 
        : '0';
    updateDisplay();
}

function setOperation(op){
    if(firstNumber !== null && !shouldResetDisplay){
        calculate();
    }
    firstNumber = parseFloat(currentDisplay);
    operation = op;
    shouldResetDisplay = true;
}

function calculate(){
    if(firstNumber === null || operation === null) return;

    let secondNumber = parseFloat(currentDisplay);
    let result;

    if(operation === 'add') result = firstNumber + secondNumber;
    if(operation === 'subtract') result = firstNumber - secondNumber;
    if(operation === 'multiply') result = firstNumber * secondNumber;
    if(operation === 'divide'){
        if(secondNumber === 0){
            currentDisplay = 'Error';
            updateDisplay();
            return;
        }
        result = firstNumber / secondNumber;
    }

    currentDisplay = result.toString();
    firstNumber = null;
    operation = null;
    shouldResetDisplay = true;
    updateDisplay();
}