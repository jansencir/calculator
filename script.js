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

// Variable for Three Parts
let numberOne;
let numberOperator;
let numberTwo;

const calculatorOperators = document.querySelectorAll(".anOperator");
const calculatorNumbers = document.querySelectorAll(".aNumber");
const calculatorDecimal = document.querySelector("#decimalBtn");
const calculatorPositiveNegative = document.querySelector("#positiveNegative");
const calculatorClear = document.querySelector("#clearBtn");
const calculatorEqual = document.querySelector("#equalBtn");

calculatorOperators.forEach(operator => {
    operator.addEventListener("click", () => console.log("operator clicked"))
})

calculatorNumbers.forEach(number => {
    number.addEventListener("click", () => console.log("number clicked"))
})

calculatorDecimal.addEventListener("click", () => console.log("decimal clicked"))

calculatorPositiveNegative.addEventListener("click", () => console.log("positive/negative clicked"))

calculatorClear.addEventListener("click", () => console.log("clear clicked"))

calculatorEqual.addEventListener("click", () => console.log("equal clicked"))