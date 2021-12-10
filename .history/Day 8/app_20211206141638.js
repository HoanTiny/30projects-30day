var userName = document.getElementById("username");
var form = document.querySelector("form");
var formControl = document.querySelector(".form-control");

function checkusername() {
    if (userName.value.length < 3) {
        this.formControl.classList.add("error");
    } else {
        this.formControl.classList.remove("error");

        return 0;
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkusername();
});
