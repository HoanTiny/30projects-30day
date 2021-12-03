const btnPress = document.querySelector(".btn-press");
const container = document.querySelector(".container");
const keyPress = document.querySelector(".key span");
const whichPress = document.querySelector(".which span");
const keyNumber = document.querySelector(".number-key");

document.addEventListener("keyup", function (e) {
    container.classList.add("active");
    keyPress.innerHTML = e.key;
    whichPress.innerHTML = e.keyCode;
    keyNumber.innerHTML = e.keyCode;

    console.log(e.keyCode);
});
