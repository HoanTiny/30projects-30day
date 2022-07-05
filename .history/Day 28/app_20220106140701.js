const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        const audio = e.target.querySelector("audio");

        audio.play();
    });
});
