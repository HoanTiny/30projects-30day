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
    const vl = event.target.value;

    const rgxL = /^[a-z]+$/;
    const rgxU = /^[A-Z]+$/;
    lowerCase(vl, rgxL);
});

function lowerCase(str, rgxL) {
    if (rgxL.test(str)) {
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
    }
}
