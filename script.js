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

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let input = event.target.id;
        let display = document.querySelector("input");

        if (input === "clear") {
            display.value = ""
        } else if (input === "bs") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += input;
        };
    });
});