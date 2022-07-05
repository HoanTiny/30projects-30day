const form = document.querySelector("form");
const input = document.querySelector("form input");
const eye = document.querySelector(".form-eye");

eye.addEventListener("click", () => {
    eye.classList.toggle("show");
});

console.log(input.type);

if (eye.classList.contains("show")) {
    input.type = "text";
} else {
    input.type = "password";
}
