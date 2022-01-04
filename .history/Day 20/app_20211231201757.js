window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".show-on-scroll");
    reveals.forEach(function (reveal) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal.getBoundingClientRect().top;
        var revealPoint = 50;
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("start");
        } else {
            reveal.classList.remove("start");
        }
    });
}
