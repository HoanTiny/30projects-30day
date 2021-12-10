var name = document.getElementById("username");
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(name);
});
