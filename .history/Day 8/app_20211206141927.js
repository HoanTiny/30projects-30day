var userName = document.getElementById("username");
var userMail = document.getElementById("email");
var small = document.querySelectorAll("small");
var form = document.querySelector("form");
var formControl = document.querySelector(".form-control");
var mail = '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i;';

function checkusername() {
    if (userName.value.length < 3) {
        this.formControl.classList.add("error");
    } else {
        this.formControl.classList.remove("error");
    }
}

function checkmail() {
    if (userMail.value.length !== mail) {
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkusername();
});
