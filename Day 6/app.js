const btnPress = document.querySelector(".btn-press");
const container = document.querySelector(".container");
const keyPress = document.querySelector(".key span");
const whichPress = document.querySelector(".which span");
const keyNumber = document.querySelector(".number-key");
const keyLocation = document.querySelector(".location span");
const keyCode = document.querySelector(".code span");

document.addEventListener("keydown", function (e) {
    container.classList.add("active");
    if (e.key === " ") {
        keyPress.innerHTML = "Space";
    } else {
        keyPress.innerHTML = e.key;
    }
    whichPress.innerHTML = e.keyCode;
    keyNumber.innerHTML = e.keyCode;
    keyLocation.innerHTML = e.location;
    keyCode.innerHTML = e.code;
});
