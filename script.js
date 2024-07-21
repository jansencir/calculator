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

function operate(anOperator, num1, num2) {
    return anOperator(num1, num2);
};

