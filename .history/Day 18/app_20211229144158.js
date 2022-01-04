var counter = document.querySelectorAll(".counter");
var fb = document.querySelector(".counter.face h2");
var yt = document.querySelector(".counter.youtube");
var tiktok = document.querySelector(".counter.tiktok");

function face(to) {
    var step = 1;
    var startCounters = setinterval(function () {
        step += 1;
        fb.innerText = step;
        if (fb.textContent === to) {
            clearInterval(startCounters);
        }
    }, 1);
}
face(1000);
