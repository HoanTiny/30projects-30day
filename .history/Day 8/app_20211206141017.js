var name = document.querySelector("#username");
var form = document.querySelector("form");

form.addEventListener("submit", function () {
    e.stopPropagation();
    console.log(name.value);
});
