let numberOne = "";
let numberOperator = "";
let numberTwo = "";

const calculate = (one, op, two) => {
    let first = parseFloat(one)
    let second = parseFloat(two)
    switch (op) {
        case "+": return first + second;
        case "-": return first - second;
        case "x": return first * second;
        case "÷": return first / second;
    }
}

const appendNumber = (number) => {
    // click needs to pass number
    if (numberOperator == "") {
        numberOne += number.innerText
    }
    if (numberOperator != "") {
        numberTwo += number.innerText
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

calculatorDecimal.addEventListener("click", () => console.log("decimal clicked"))

calculatorPositiveNegative.addEventListener("click", () => changeSign())


calculatorClear.addEventListener("click", () => {
    if (calculatorClear.innerText == "CLR") {clearDisplay()}
    if (calculatorClear.innerText == "ALL CLR") {clearAllDisplay()}
    console.log("clear clicked")
    updateDisplay()
    clearTextDisplay()
})

calculatorEqual.addEventListener("click", () => console.log("equal clicked"))

calculatorNumbers.forEach(number => {
    number.addEventListener("click", () => {
        appendNumber(number)
        updateDisplay()
        clearTextDisplay()
    })
})

clearTextDisplay()