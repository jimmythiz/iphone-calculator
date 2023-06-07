const numbers = document.querySelectorAll(`.num`)
const operate = document.querySelectorAll(`.operation`)
const screen = document.querySelector(`.screen`)
const clear = document.querySelector(`.clear`)
const clearAll = document.querySelector(`.clearAll`)
const equals = document.querySelector(`.equals`)

let currentOperand = ``
let prevOperand = null
let operation = null

const handleNumberClick = (e) =>{
    currentOperand += e.target.innerText
    screen.innerHTML = currentOperand

    if (e.target.innerText == 0 && currentOperand == 0){
        currentOperand = ``
        screen.innerHTML = 0
    } 
}
numbers.forEach(button => {
    button.addEventListener(`click`,handleNumberClick)    
});

const handleClearClick = () =>{
        currentOperand = currentOperand.substring(0,currentOperand.length - 1)
        screen.innerHTML = currentOperand
        if (currentOperand == 0){
            screen.innerHTML = 0
        }
}
clear.addEventListener(`click`,handleClearClick)

const handleClearAllClick = () =>{
    currentOperand = ``
    prevOperand = null
    operation = null
    screen.innerHTML = 0
}
clearAll.addEventListener(`click`,handleClearAllClick)

const handleOperationClick = (e) =>{
    if (e.target.innerText === `÷`){
        operation = (num1,num2) => num1 / num2
    } if (e.target.innerText === `X`){
        operation = (num1,num2) => num1 * num2
    } if (e.target.innerText === `-`){
        operation = (num1,num2) => num1 - num2
    } if (e.target.innerText === `+`){
        operation = (num1,num2) => num1 + num2
    }
    
    if (prevOperand === null ){
        prevOperand = parseFloat(currentOperand)
        currentOperand = ``
    }
    else if (currentOperand !== ``){
        currentNumber = parseFloat(currentOperand)
        prevOperand = operation(prevOperand,currentNumber)
        currentOperand = ``
        screen.innerHTML = prevOperand
    }    
}
operate.forEach(button => {
    button.addEventListener(`click`,handleOperationClick)    
});

const handleEqualsClick = () =>{
    if (prevOperand !== null && currentOperand !== "" && operation !== null) {
            const currentNumber = parseFloat(currentOperand);
            const result = operation(prevOperand, currentNumber);
            screen.innerText = result;
            prevOperand = result;
            currentOperand = "";
            operation = null;
          }
}
equals.addEventListener(`click`,handleEqualsClick)