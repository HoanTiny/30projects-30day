const btnPress = document.querySelector(".btn-press");
const container = document.querySelector(".container");
const keyPress = document.querySelector(".key p");

document.addEventListener("keyup", function (e) {
    container.classList.add("active");
    keyPress.innerHTML = e.key;
    console.log(e.key);
});
