var userName = document.getElementById("username");
var form = document.querySelector("form");
var formControl = document.querySelector(".form-control");

function checkusername() {
    if (userName.length < 3) {
        this.formControl.classList.add("error");
    } else {
        return;
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
});
