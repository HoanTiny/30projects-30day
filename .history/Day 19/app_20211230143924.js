const inputToggle = document.querySelector("#toggleMode");

inputToggle.addEventListener("click", function () {
    document.querySelector("body").classlist.add(dark);
});
