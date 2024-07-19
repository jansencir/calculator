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


/* What I want the calculator to do
-Display
    -2 rows in the display:
        -Top row: shows the current 2 number operation
        -Second row: what the tow row comes out to (after hitting equal button)
    -When hitting clear:
        -If there is an equation with no answer, it clear the second number in the operation
        -At that point, you should be able to change the operator too
    Only hit all clear when there is nothing to clear
        -Resets all operations (clear history)

-Clear/All Clear
    -Switches depending on what is in the first row

-MAYBE
    LEFT SIDE
    -Make a history table of operations on the side
        -New operations are at the bottom, and older ones get pushed up
        -Should delete past operations after (maybe?) 12
        -Buttons: Remember & Delete
    RIGHT SIDE
    -Each past operation on the left can have a "remember button"
        -If you click the "remember button":
            -Creates a new list on the right with the numbers that need to be remembered
        -New items are at the bottom, and older ones get pushed up
        -Buttons: Delete
*/