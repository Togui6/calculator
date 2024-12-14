let first = 0;
let second = 0;
let operator = "caca";

const screenDisplay = document.querySelector("#display");
const displayed = document.createElement("div");
displayed.textContent = operator;
displayed.style.color = "blue";
screenDisplay.appendChild(displayed);



function add(a, b) {
return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b) {
return a + operator + b;
}

function updateScreenDisplay() {
displayed.textContent = operator;
displayed.style.color = "blue";
}