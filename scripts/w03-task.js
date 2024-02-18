/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (numer1, number2){
    return numer1 + number2;
}

function addNumbers(){
let addNumber1 = Number(document.querySelector("#add1").value);
let addNumber2 = Number(document.querySelector("#add2").value);

document.querySelector("#sum").value = add(addNumber1, addNumber2);


}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
    return number1 - number2;
};

let subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2 ;

let multiplyNumbers =() => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers) ;

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

let divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);



/* Decision Structure */
document.getElementById("getTotal").addEventListener('click', function () {
 
    let subtotalInput = document.getElementById("subtotal");
    let subtotalValue = parseFloat(subtotalInput.value) || 0;

    let memberShip = document.getElementById("member");
    let applyDiscount = memberShip.checked;

    
    let discountMultiplier = applyDiscount ? 0.8 : 1;
    let discountedTotal = subtotalValue * discountMultiplier;

    let totalSpan = document.getElementById("total");
    totalSpan.textContent = `Total Due: $${discountedTotal.toFixed(2)}`;
});















/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = Array.from({ length: 13 }, (_, index) => index + 1);

document.getElementById('array').textContent = numberArray.join(', ');

/* Output Odds Only Array */
let oddNumbers = numberArray.filter(number => number % 2 === 1);
document.getElementById('odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
let evenNumbers = numberArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
let sumOfArray = numberArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numberArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numberArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
 