const buttons = document.querySelectorAll("button");
const audio = document.querySelector("audio");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        audio.play();
    });
});
