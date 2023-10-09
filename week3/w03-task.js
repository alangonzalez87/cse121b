/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(add1,add2){
    let addNumber1 = Number (document.querySelector('#add1').value);
    let addNumber2 = Number (document.querySelector('#add2').value);

    document.querySelector('#sum').value=add(addNumber1,addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click',addNumbers)





/* Function Expression - Subtract Numbers */
const subtract = function (number1,number2) {
    return number1-number2};

const substractNumbers = ( )=>{
    let subNumber1= Number (document.querySelector ('#subtract1').value);
    let subNumber2= Number (document.querySelector ('#subtract2').value);
    document.querySelector('#difference').value=subtract(subNumber1,subNumber2)
}
document.querySelector('#subtractNumbers').addEventListener('click',substractNumbers)

/* Arrow Function - Multiply Numbers */

const multiply= (number1, number2)=> number1*number2;
const multiplyNumbers= ()=>{
    let multiply1 = Number (document.querySelector('#factor1').value);
    let multiply2 = Number (document.querySelector('#factor2').value);
    document.querySelector('#product').value=multiply(multiply1,multiply2)
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */

const division=(number1,number2)=>number1/number2;
const divideNumbers= ()=>{
    let divisor1 = Number (document.querySelector('#dividend').value);
    let divisor2 = Number (document.querySelector('#divisor').value);
    document.querySelector('#quotient').value=division(divisor1,divisor2)
}
document.querySelector('#divideNumbers').addEventListener('click',divideNumbers)


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
let numbersArray= [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById("array").innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function(number) {
    return number % 2 === 1; 
});

document.getElementById("odds").innerHTML = oddNumbers.join(', ');
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(function(number) {
    return number % 2 === 0; 

});
document.getElementById("evens").innerHTML = evenNumbers.join(', ');

let sum = numbersArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); 
document.getElementById("sumOfArray").innerHTML = sum;

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(function (number) {
    return number * 2;
});


document.getElementById("sumOfMultiplied").innerHTML = multipliedArray.join(', ');


