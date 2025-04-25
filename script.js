let first = "";
let second = 0;
let operator = "caca";

let stock = "";
let toAdd = "";
let result = "";

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

function operate(first, second) {
    if (operator === "+") {
        result = first + second;
        alert("Le résultat après addiion est de " + result +" !");
        stock = stock / 1;
        } else if (operator === "-") {
            result = first - second;
            alert("Le résultat après soustraction est de " + result +" !");
        } else {
            alert("I don't know what the fuck happened");    
        }
        result = result / 1;
        updateScreenDisplay();
}

function updateScreenDisplay() {
    if (typeof result === 'number') {
        displayed.textContent = result;
        displayed.style.color = "blue";
    } else if (typeof result === 'string') {
displayed.textContent = stock;
displayed.style.color = "blue";
} else {
    alert("Erreur dans updateScreenDisplay")
} }

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    updateScreenDisplay();
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
    if (typeof first === 'number') {
        stock = "";
        updateScreenDisplay();
        operator = "+";
    } else {
    first = stock;
    first = first / 1;
    stock = "";
    operator = "+";
    updateScreenDisplay();
} } )

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    if (typeof first === 'number') {
        stock = "";
        updateScreenDisplay();
        operator = "-";
    } else {
    first = stock;
    first = first / 1;
    stock = "";
    operator = "-";
    updateScreenDisplay();
} } )

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    second = stock / 1;
    stock = stock / 1;
operate(first, second);
operator = "";
first = result;
second = ""
result = "";
})


