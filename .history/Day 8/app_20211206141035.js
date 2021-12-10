var name = document.querySelector("#username");
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(name.value);
});
