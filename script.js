let firstOperand = "";
let secondOperand = "";
let operator = "";
let isSymbolInputted = false;
const maxLength = 11;

let display = document.querySelector("input");

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
    if (b === 0) {
        alert("Can't divide by zero");
        resetCalculator();
        return "infinity";
    } else {
        return a / b;
    }
}

function operate(firstOperand, secondOperand, operator) {
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);
    switch (operator) {
        case "+":
            return add(firstOperand, secondOperand);
        case "-":
            return subtract(firstOperand, secondOperand);
        case "*":
            return multiply(firstOperand, secondOperand);
        case "/":
            return divide(firstOperand, secondOperand);
        default:
            alert("Invalid Operator input");
            break;
    }
}

function getInputToDisplay(input, backspace = "") {
    if (isSymbolInputted) {
        if (backspace === "bs") {
            secondOperand = secondOperand.slice(0, -1);
        } else {
            if (!(secondOperand.length >= maxLength)) {
                if (input === "percent") {
                    if (secondOperand !== "" && secondOperand !== "0") {
                        secondOperand = (secondOperand / 100).toString();
                    }
                } else if (input === "toggle") {
                    if (secondOperand !== "" && secondOperand !== "0") {
                        if (secondOperand.startsWith("-")) {
                            secondOperand = secondOperand.slice(1);
                        } else {
                            secondOperand = "-" + secondOperand;
                        }
                    }
                } else if (input === ".") {
                    if (!secondOperand.includes(".")) {
                        if (secondOperand === "") {
                            secondOperand = "0" + input;
                        } else {
                            secondOperand += input;
                        }
                    }
                } else {
                    secondOperand += input;
                }
            }
        }
        return secondOperand;
    } else {
        if (backspace === "bs") {
            firstOperand = firstOperand.slice(0, -1);
        } else {
            if (!(firstOperand.length >= maxLength)) {
                if (input === "percent") {
                    if (firstOperand !== "" && firstOperand !== "0") {
                        firstOperand = (firstOperand / 100).toString();
                    }
                } else if (input === "toggle") {
                    if (firstOperand !== "" && firstOperand !== "0") {
                        if (firstOperand.startsWith("-")) {
                            firstOperand = firstOperand.slice(1);
                        } else {
                            firstOperand = "-" + firstOperand;
                        }
                    }
                } else if (input === ".") {
                    if (!firstOperand.includes(".")) {
                        if (firstOperand === "") {
                            firstOperand = "0" + input;
                        } else {
                            firstOperand += input;
                        }
                    }
                } else {
                    firstOperand += input;
                }
            }
        }
        return firstOperand;
    }
}

function calculate(input = "") {
    if (isSymbolInputted === false && firstOperand != "") {
        operator = input;
        isSymbolInputted = true;
    } else {
        if (secondOperand !== "") {
            let result = operate(firstOperand, secondOperand, operator);
            if (result !== "infinity") {
                result = formatToMaxLength(result);
                firstOperand = result;
                operator = input;
                secondOperand = "";
                display.value = result;
            } else {
                display.value = "";
            }
        }
    }
}

function formatToMaxLength(number) {
    let str = number.toString();

    if (str.length <= maxLength) return str;

    if (str.includes(".")) {
        const intPartLength = str.split('.')[0].length;

        if (intPartLength >= maxLength) {
            return number.toExponential(maxLength - 6);
        }

        const decimalPlaces = maxLength - intPartLength - 1;
        return Number(number).toFixed(Math.max(decimalPlaces, 0)).slice(0, maxLength);
    }

    return number.toExponential(maxLength - 6);
}

function resetCalculator() {
    firstOperand = "";
    secondOperand = "";
    isSymbolInputted = false;
    operator = "";
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let input = event.target.id;

        if (input === "clear") {
            display.value = "";
            resetCalculator();
        } else if (input === "bs") {
            display.value = getInputToDisplay("", input);
        } else if (input === "+") {
            calculate(input);
        } else if (input === "-") {
            calculate(input);
        } else if (input === "*") {
            calculate(input);
        } else if (input === "/") {
            calculate(input);
        } else if (input === "equals") {
            calculate();
            isSymbolInputted = false;
        } else if (input === ".") {
            display.value = getInputToDisplay(input);
        } else if (input === "percent") {
            display.value = getInputToDisplay(input);
        } else if (input === "toggle") {
            display.value = getInputToDisplay(input);
        } else {
            display.value = getInputToDisplay(input);
        };
    });
});