var userName = document.getElementById("username");
var userMail = document.getElementById("email");
var small = document.querySelector("small");
var form = document.querySelector("form");
var formControl = document.querySelector(".form-control");
var mail = '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i;';

function checkusername() {
    if (userName.value.length < 3) {
        this.small.innerHTML = "User name không nhỏ hơn 3";
        this.formControl.classList.add("error");
    } else {
        this.formControl.classList.remove("error");
        this.small.innerHTML = "";
    }
}

function checkmail() {
    if (userMail.value.length !== mail) {
        this.small.innerHTML = "Email không tồn tại";
        this.formControl.classList.add("error");
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkusername();
    checkmail();
});
