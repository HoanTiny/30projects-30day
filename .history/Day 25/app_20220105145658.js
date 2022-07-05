const form = document.querySelector("form");
const input = document.querySelector("form input");
const eye = document.querySelector(".form-eye");

const lowercase = document.querySelector(".lowercase");
const uppercase = document.querySelector(".uppercase");
const number = document.querySelector(".number");
const symbol = document.querySelector(".symbol");
const characters = document.querySelector(".characters");

eye.addEventListener("click", () => {
    eye.classList.toggle("show");
    if (eye.classList.contains("show")) {
        input.type = "text";
    } else {
        input.type = "password";
    }
});

input.addEventListener("input", (event) => {
    const str = event.target.value;

    const rgxL = /^[a-z]+$/;
    const rgxU = /^[A-Z]+$/;
    const rgxNum = /[0-9]/;
    const rgxSymbol = /\W/;
    const minChars = 8;
    lowerCase(str, rgxL);
    upperCase(str, rgxU);
    numberCheck(str, rgxNum);
    symbolCheck(str, rgxSymbol);
    charactersCheck(str, minChars);

    // value.search(/[a-z]/) >= 0 ? lowercase.add("valid") : lowercase.remove("valid");

    // value.search(/[A-Z]/) >= 0 ? uppercase.add("valid") : uppercase.remove("valid");

    // value.search(/[0-9]/) >= 0 ? number.add("valid") : number.remove("valid");

    // value.search(/\W/) >= 0 ? symbol.add("valid") : symbol.remove("valid");

    // value.length >= 8 ? characters.add("valid") : characters.remove("valid");
});

function lowerCase(str, rgxL) {
    if (str.search(rgxL)) {
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
    }
}

function upperCase(str, rgxU) {
    if (str.search(rgxU)) {
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
    }
}

function numberCheck(str, rgxNum) {
    str.search(rgxNum) ? number.classList.add("valid") : number.classList.remove("valid");
}

function symbolCheck(str, rgxSym) {
    str.search(rgxSym) ? symbol.classList.add("valid") : symbol.classList.remove("valid");
}

function charactersCheck(str, minChars) {
    str.length >= minChars ? characters.classList.add("valid") : characters.classList.remove("valid");
}
