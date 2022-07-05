const form = document.querySelector("form");
const input = document.querySelector("form input");
const eye = document.querySelector(".form-eye");

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
    const lowercase = document.querySelector(".lowercase");
    const uppercase = document.querySelector(".uppercase");
    const number = document.querySelect(".number");
    const symbol = document.querySelector(".symbol");
    const characters = document.querySelector(".characters");

    const rgx = /^[a-z]+$/;
    if (rgx.test(vl)) {
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
    }
});
lowercase();
