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
    console.log(first)
    console.log(second)
    console.log(answer)
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


// REMAP, but if function inside the event listener?
// make two new functions, positiveToNegative and negativeToPositive
// if numberOne or numberTwo is positive, run positiveToNegative
// if numberOne or numberTwo is NEGATIVE, run negativeToPositive
// const changeSign = () => {
//     // positive to negative
//     if (numberOperator == "" && numberOne.charAt(0) != "-") {
//         numberOne = "-" + numberOne
//     }
//     if (numberOperator != "" && numberTwo.charAt(0) != "-") {
//         numberTwo = "-" + numberTwo
//     }
//     // negative to positive
//     if (numberOperator == "" && numberOne.charAt(0) == "-") {
//         numberOne = numberOne.split("").splice(1).join("")
//     }
//     if (numberOperator != "" && numberTwo.charAt(0) == "-")
//         numberTwo.split("").splice(1).join("")
// }


// GOOD positive to negative
// let randomNumber = "-111"
// if (randomNumber.charAt(0) != "-") {
//     randomNumber = "-" + randomNumber
//     console.log(randomNumber)
// } else {
//     console.log(randomNumber)
// }

// GOOD negative to positive
let randomNum = "-111"
function checkSign(str) {
    if (str.charAt(0) == "-") {
        str = str.split("").splice(1).join("")
    }
    console.log(str)
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

// CLEAR ALL CLEAR DISPLAY
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

calculatorPositiveNegative.addEventListener("click", () => changeSign())


calculatorClear.addEventListener("click", () => {
    if (calculatorClear.innerText == "CLR") {clearDisplay()}
    if (calculatorClear.innerText == "ALL CLR") {clearAllDisplay()}
    console.log("clear clicked")
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

clearTextDisplay()


/* CURRENT ISSUES
    -clear button broken after clicking equal
    -can't chain answer to continue calculations
    -positive/negative still doesn't work
    -decimal point still doesn't work
*/