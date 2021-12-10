const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    const small = formControl.querySelector("small");
    small.innerText = "";
}

function checkusername(input, min) {
    if (input.value.length < min) {
        showError(input, "Username phải trên 3 ký tự");
    } else {
        showSuccess(input);
    }
}

function checkmail(input) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

function checkpassword(input, min, max) {
    if (input.value.length < min) {
        showError(input, "Mật khẩu phải trên 6 ký tự");
    } else {
        showSuccess(input);
    }
}

function confirmpassword(input, min, max) {
    if (input.value != password) {
        showError(input, "Mật khẩu nhập lại không đúng");
    } else {
        showSuccess(input);
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkusername(username, 3);
    checkmail(email);
    checkpassword(password, 3);
    confirmpassword(password2, 3);
});
