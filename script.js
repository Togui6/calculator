let first = "";
let second = 0;
let operator = "none";

currentlyCalc = false;
operatorAlready = false;

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
        } else if (operator === "*") {
            result = first * second;
            alert("Le résultat après multiplication est de " + result +" !");
        } else if (operator === "/") {
            result = first / second;
            alert("Le résultat après division est de " + result +" !");
        } else if (operator === "%") {
            result = first % second;
            alert("Le restant après division est de " + result +" !");
        } else {     
            alert("Oups, erreur dans la fonction operate");    
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

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "0";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "0";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "1";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "1";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "2";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "2";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "3";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "3";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

const four = document.querySelector("#four");
four.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "4";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "4";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "5";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "5";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "6";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "6";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "7";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "7";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "8";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "8";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    if (currentlyCalc === true) {
        first = "";
        second = "";
        toAdd = "";
        stock = "";
        result = "";
        operator = "";
        currentlyCalc = false;
        toAdd = "9";
        stock = stock + toAdd;
        toAdd = "";
        updateScreenDisplay();
    } else {
    updateScreenDisplay();
    toAdd = "9";
    stock = stock + toAdd;
    toAdd = "";
    updateScreenDisplay();
}
})

// Operateurs 

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    if (currentlyCalc === true) {
        stock = "";
        updateScreenDisplay();
        operator = "+";
        operatorAlready = true;
        currentlyCalc = false;
    } else if (operatorAlready === true) {

    } else {
    first = stock;
    first = first / 1;
    stock = "";
    operator = "+";
    operatorAlready = true;
    updateScreenDisplay();
} } )

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    if (currentlyCalc === true) {
        stock = "";
        updateScreenDisplay();
        operator = "-";
        operatorAlready = true;
        currentlyCalc = false;
    } else if (operatorAlready === true) {

    } else {
    first = stock;
    first = first / 1;
    stock = "";
    operator = "-";
    operatorAlready = true;
    updateScreenDisplay();
} } )

const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click", () => {
    if (currentlyCalc === true) {
        stock = "";
        updateScreenDisplay();
        operator = "*";
        operatorAlready = true;
        currentlyCalc = false;
    } else if (operatorAlready === true) {

    } else {
    first = stock;
    first = first / 1;
    stock = "";
    operator = "*";
    operatorAlready = true;
    updateScreenDisplay();
} } )

const division = document.querySelector("#division");
division.addEventListener("click", () => {
    if (currentlyCalc === true) {
        stock = "";
        updateScreenDisplay();
        operator = "/";
        operatorAlready = true;
        currentlyCalc = false;
    } else if (operatorAlready === true) {

    } else {
    first = stock;
    first = first / 1;
    stock = "";
    operator = "/";
    operatorAlready = true;
    updateScreenDisplay();
} } )

const remainder = document.querySelector("#remainder");
remainder.addEventListener("click", () => {
    if (currentlyCalc === true) {
        stock = "";
        updateScreenDisplay();
        operator = "%";
        operatorAlready = true;
        currentlyCalc = false;
    } else if (operatorAlready === true) {

    } else {
    first = stock;
    first = first / 1;
    stock = "";
    operator = "%";
    operatorAlready = true;
    updateScreenDisplay();
} } )

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    if (operatorAlready === false) {

    } else {
    second = stock / 1;
    stock = stock / 1;
operate(first, second);
operator = "";
first = result;
second = ""
result = "";
currentlyCalc = true;
operatorAlready = false;
}})

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    first = "";
    second = "";
    toAdd = "";
    stock = "";
    result = "";
    operator = "";
    currentlyCalc = false;
    operatorAlready = false;
    updateScreenDisplay();
    alert("cleared !");
})

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
    stock = stock.slice(0, -1);
    updateScreenDisplay();
})