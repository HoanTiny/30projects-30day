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

function lowercase(str) {
    const rgx = /[a-z]/;
    if (input.test(rgx)) {
        // document.querySelector(".lowercase").classList.add("valid");
        alert("true");
    } else {
        // document.querySelector(".lowercase").classList.remove("valid");
        alert("false");
    }
}
