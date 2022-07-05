const buttons = document.querySelectorAll("button");
const audio = e.target.querySelector("audio");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.target.audio.play();
    });
});
