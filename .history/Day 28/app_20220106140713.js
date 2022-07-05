const buttons = document.querySelectorAll("button");
const audio = e.target.querySelector("audio");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        audio.play();
    });
});
