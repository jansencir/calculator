let numberOne = "";
let numberOperator = "";
let numberTwo = "";
let answer;

const calculate = (one, op, two) => {
    let first = parseFloat(one)
    let second = parseFloat(two)
    switch (op) {
        case "+":
            answer = first + second
            break
        case "-":
            answer = first - second
            break
        case "x":
            answer = first * second
            break
        case "÷":
            answer = first / second
            break
    }
}

const appendNumber = (number) => {
    if (numberOperator == "") {
        numberOne += number.innerText
    }
    if (numberOperator != "") {
        numberTwo += number.innerText
    }
}

const appendDecimal = () => {
    if (numberOperator == "") {
        if (numberOne.includes(".")) {
            return
        } else {
        numberOne += "."
        }
    }
    if (numberOperator != "") {
        if (numberTwo.includes(".")) {
            return
        } else {
        numberTwo += "."
        }
    }
}

const chooseOperator = (operator) => {
    if (numberOperator != "" || numberOne == "") return
    else {numberOperator += operator.innerText}
}

const changeSign = (number) => {
    flipSign = -(number)
    number = flipSign
    return number
}

const updateDisplay = () => {
    if (numberOperator == "") {
        calculatorCurrentDisplay.textContent = `${numberOne}`
    }
    if (numberOperator != "") {
        calculatorPreviousDisplay.textContent = `${numberOne} ${numberOperator}`
        calculatorCurrentDisplay.textContent = `${numberTwo}`
    }
    if (answer != undefined) {
        calculatorPreviousDisplay.textContent = `${numberOne} ${numberOperator} ${numberTwo}`
        calculatorCurrentDisplay.textContent = `${answer}`
    }
}

const clearDisplay = () => {
    calculatorCurrentDisplay.textContent = "";
    numberTwo = "";
}

const clearAllDisplay = () => {
    calculatorPreviousDisplay.textContent = "";
    calculatorCurrentDisplay.textContent = "";
    numberOne = "";
    numberOperator = "";
    numberTwo = "";
}

const clearTextDisplay = () => {
    if (calculatorPreviousDisplay.innerText != "" && calculatorCurrentDisplay.innerText != "") {
        calculatorClear.innerText = "CLR"
    } else {
        calculatorClear.innerText = "ALL CLR"
    }
}

const calculatorOperators = document.querySelectorAll(".anOperator");
const calculatorNumbers = document.querySelectorAll(".aNumber");
const calculatorDecimal = document.querySelector("#decimalBtn");
const calculatorPositiveNegative = document.querySelector("#positiveNegative");
const calculatorClear = document.querySelector("#clearBtn");
const calculatorEqual = document.querySelector("#equalBtn");
const calculatorPreviousDisplay = document.querySelector("#previous-display");
const calculatorCurrentDisplay = document.querySelector("#current-display");

calculatorOperators.forEach(operator => {
    operator.addEventListener("click", () => {
        chooseOperator(operator)
        updateDisplay()
        clearTextDisplay()
    })
})

calculatorDecimal.addEventListener("click", () => {
    appendDecimal()
    updateDisplay()
})

calculatorPositiveNegative.addEventListener("click", () => {
    if (numberOperator == "") {
        numberOne = changeSign(numberOne)
    }
    if (numberOperator != "") {
        numberTwo = changeSign(numberTwo)
    }
    updateDisplay()
})


calculatorClear.addEventListener("click", () => {
    if (calculatorClear.innerText == "CLR") {clearDisplay()}
    if (calculatorClear.innerText == "ALL CLR") {clearAllDisplay()}
    updateDisplay()
    clearTextDisplay()
})

calculatorEqual.addEventListener("click", () => {
    calculate(numberOne, numberOperator, numberTwo)
    updateDisplay()
})

calculatorNumbers.forEach(number => {
    number.addEventListener("click", () => {
        appendNumber(number)
        updateDisplay()
        clearTextDisplay()
    })
})

/* CURRENT ISSUES
    -clear button broken after clicking equal
    -can't chain answer to continue calculations
*/