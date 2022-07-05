const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        // e.target.audio.play();
        console.log(button.getAttribute("class"));
    });
});
