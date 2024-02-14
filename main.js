let topScreen = document.querySelector(".screen-top");
let bottomScreen = document.querySelector(".screen-btm");
let prevVal = "";
let currVal = "";
let sign = "";


let add = function (a,b) {
    return a+b;
}

let subtract = function(a,b) {
    return a-b;
}

let multiply = function(a,b) {
    return a*b;
}

let divide = function(a,b) {
    return a/b;
}

let operate = function(a,symbol,b){
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

let input = document.querySelectorAll('.number');
    input.forEach((number) => number.addEventListener("click",function (e) {
        showNumber(e.target.textContent);
       return bottomScreen.textContent = currVal
    }))

    function showNumber(num){
        if (currVal.length <= 5) {
           currVal += num;
        }
    }

let operators = document.querySelectorAll(".operator");
    operators.forEach((op)=>op.addEventListener('click',function (e) {
        showOperator(e.target.textContent);
        topScreen.textContent = prevVal + " " + sign;
        bottomScreen.textContent = currVal;

    }))

    function showOperator(op) {
        sign = op;
        prevVal = currVal;
        currVal = "";
    }

let clear = document.querySelector("#clear-all");
    clear.addEventListener("click", function() {
        prevVal = '';
        currVal = '';
        sign = '';
        topScreen.textContent = '';
        bottomScreen.textContent = 0;
    })

let equal = document.querySelector('#equalBtn');
    equal.addEventListener("click", function() {
        if(currVal != '' && prevVal != '')  {
         calculate()
            topScreen.textContent = '';
            if(prevVal.length <= 5){
                bottomScreen.textContent = prevVal;
            } else {
                bottomScreen.textContent = prevVal.slice(0,5) + "...";
            }
            bottomScreen.textContent = prevVal;
        }
    })
  
    function calculate(){
        prevVal = Number(prevVal);
        currVal = Number(currVal);
        
        if (sign === '+'){
            prevVal += currVal
        } else if (sign === '-') {
            prevVal -= currVal
        } else if (sign === 'x') {
            prevVal *= currVal
        } else if ( sign === '/') {
            prevVal /= currVal
        }

        prevVal = roundNumber(prevVal);
        prevVal = prevVal.toString();
        currVal = prevVal.toString();
        console.log(prevVal);
    }

    function roundNumber(num){
        return Math.round(num *1000)/1000;
    }

let decimal = document.querySelector('#decimal');
    decimal.addEventListener("click", function(){
        addDecimal()
    })

    function addDecimal(){
        if(!currVal.includes(".")){
            currVal += '.';
        }
    }

let clearEntryBtn = document.querySelector('#clear-entry');
    clearEntryBtn.addEventListener("click", clearEntry);

    function clearEntry(){
        bottomScreen.textContent = '0';
        prevVal = 0;
    }