var name = document.querySelector("#username");
var form = document.querySelector("form");

form.addEventListener("submit", function () {
    console.log(name.value);
});
