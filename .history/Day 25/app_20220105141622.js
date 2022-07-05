const form = document.querySelector("form");
const input = document.querySelector("form input");
const eye = document.querySelector(".form-eye");

eye.addEventListener("click", () => {
    eye.classList.toggle("show");
});

console.log(eye.classList.contains("show"));

// if () {
//     input.type = "text";
// } else {
//     input.type = "password";
// }
