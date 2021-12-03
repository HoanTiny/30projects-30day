const btnPress = document.querySelector(".btn-press");
const container = document.querySelector(".container");
const keyPress = document.querySelector(".key span");
const whichPress = document.querySelector(".which span");
const keyNumber = document.querySelector(".number-key");
const keyLocation = document.querySelector(".location span");

document.addEventListener("keyup", function (e) {
    container.classList.add("active");
    if (e.key === " ") {
        keyPress.innerHTML = "Space";
    } else {
        keyPress.innerHTML = e.key;
    }
    whichPress.innerHTML = e.keyCode;
    keyNumber.innerHTML = e.keyCode;
    keyNumber.innerHTML = e.location;

    console.log(e.location);
});
