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

    str.search(/[a-z]/) >= 0 ? lowercase.classList.add("valid") : lowercase.classList.remove("valid");

    value.search(/[A-Z]/) >= 0 ? uppercase.classList.add("valid") : uppercase.classList.remove("valid");

    value.search(/[0-9]/) >= 0 ? number.classList.add("valid") : number.classList.remove("valid");

    value.search(/\W/) >= 0 ? symbol.classList.add("valid") : symbol.classList.remove("valid");

    value.length >= 8 ? characters.classList.add("valid") : characters.classList.remove("valid");
});
