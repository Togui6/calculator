let first = 0;
let second = 0;
let operator = "caca";

let stock = "";
let toAdd = "";
let result = 0

const screenDisplay = document.querySelector("#display");
const displayed = document.createElement("div");
displayed.textContent = stock;
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
displayed.textContent = stock;
displayed.style.color = "blue";
}

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    toAdd = "1";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
})

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    toAdd = "2";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
})

// Operateurs 

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    first = stock;
    first = first / 1;
    stock = "";
    operator = "+"
    updateScreenDisplay();
})

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    first = stock;
    first = first / 1;
    stock = "";
    operator = "-"
    updateScreenDisplay();
})

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    stock = stock / 1;
    if (operator === "+") {
        result = first + stock;
        alert("Le résultat après addiion est de " + result +" !");
        stock = stock / 1;
        } else if (operator === "-") {
            result = first - stock;
            alert("Le résultat après soustraction est de " + result +" !");
        } else {
            alert("I don't know what the fuck happened");    
        }
        operator = "";
})


