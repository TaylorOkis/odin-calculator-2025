let firstOperand;
let secondOperand;
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case "+":
            add(firstOperand, secondOperand);
            break;
        case "-":
            subtract(firstOperand, secondOperand);
            break;
        case "*":
            multiply(firstOperand, secondOperand);
            break;
        case "/":
            divide(firstOperand, secondOperand);
            break;
        default:
            alert("Invalid Operator input");
            break;
    }
}