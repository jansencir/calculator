// Basic Calculator Functions
function addNum(firstVal, secondVal) {
    return firstVal + secondVal;
};

function subtractNum(firstVal, secondVal) {
    return firstVal - secondVal;
}

function multiplyNum(firstVal, secondVal) {
    return firstVal * secondVal;
}

function divideNum(firstVal, secondVal) {
    return firstVal / secondVal;
};

const calculate = (one, op, two) => {
    let first = parseFloat(one)
    let operator = op
    let second = parseFloat(two)
    switch (operator) {
        case "+": return first + second;
        case "-": return first - second;
        case "x": return first * second;
        case "÷": return first / second;
    }
}
/* TESTERS
let numberOne = "3";
let numberOperator = "+";
let numberTwo = "3";
*/

// Variable for Three Parts
let numberOne = "";
let numberOperator = "";
let numberTwo = "";
let previousDisplay = "";
let currentDisplay = "";

const calculatorOperators = document.querySelectorAll(".anOperator");
const calculatorNumbers = document.querySelectorAll(".aNumber");
const calculatorDecimal = document.querySelector("#decimalBtn");
const calculatorPositiveNegative = document.querySelector("#positiveNegative");
const calculatorClear = document.querySelector("#clearBtn");
const calculatorEqual = document.querySelector("#equalBtn");
const calculatorPreviousDisplay = document.querySelector("#previous-display");
const calculatorCurrentDisplay = document.querySelector("#current-display");

calculatorOperators.forEach(operator => {
    operator.addEventListener("click", () => console.log("operator clicked"))
})

// calculatorNumbers.forEach(number => {
//     number.addEventListener("click", () => console.log("number clicked"))
// })

calculatorDecimal.addEventListener("click", () => console.log("decimal clicked"))

calculatorPositiveNegative.addEventListener("click", () => console.log("positive/negative clicked"))

// calculatorClear.addEventListener("click", () => console.log("clear clicked"))
function clearAll() {
    previousDisplay = "";
    currentDisplay = "";
    calculatorPreviousDisplay.textContent = previousDisplay;
    calculatorCurrentDisplay.textContent = currentDisplay;
}

calculatorClear.addEventListener("click", () => clearAll())

calculatorEqual.addEventListener("click", () => console.log("equal clicked"))

// calculatorCurrentDisplay.textContent = currentDisplay;

// Calculator Functions
/* Update Display
*/
/* Push Number to Variables
    -When a number button is clicked, add the number to the end of the string
*/
// Clear Button & All Clear Button
// Compute Current Function
// Switch Sign

calculatorNumbers.forEach(number => {
    number.addEventListener("click", () => {
        numberOne += number.innerText
        calculatorCurrentDisplay.textContent = numberOne
    })
})

// REMAP EVERYTHING AND CLEAN UP A LITTLE
// FIGURE OUT HOW TO LINK SPECIFIC FUNCTIONS TO EVENT LISTENERS
// FUNCTIONS GO ON TOP, CALLS GO ON THE BOTTOM
/* How the number variables SHOULD work
    -for operation reasons
        -numberOne takes the first number before an operator is clicked
        -numberOperator takes whatever operator was clicked
        -numberTwo takes the number after it's clicked
    -for display reasons
        -at first, the previous display takes numberOne, the operator, and numberTwo
        -once equals is clicked
            -it shows the answer in current
            -if an operator is clicked after, it gets rid of the previousDisplay, pushes the previous answer, the operator, and the second number
    -for linking reasons
        -the answer to the previous operation is pushed to the previousDisplay
        -
*/