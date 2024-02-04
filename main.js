let num1 = 2;
let num2 = 3;
let sign = "";

function add(a,b) {
    return a+b;
}

console.log(add(1,2));

function subtract(a,b) {
    return a-b;
}

console.log(subtract(1,2));

function multiply(a,b) {
    return a*b;
}

console.log(multiply(1,2));

function divide(a,b) {
    return a/b;
}

console.log(divide(1,2));

function operate(a,symbol,b){
    if( symbol === "+") {
        return add(a,b);
    } else if (symbol === "-" ) {
        return subtract(a,b);
    } else if( symbol === "*") {
        return multiply(a,b);
    } else if (symbol === "/") {
        return divide(a,b);
    }
}
console.log(operate(1,"/",2));
