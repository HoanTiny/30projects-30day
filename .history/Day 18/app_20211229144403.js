var counter = document.querySelectorAll(".counter");
var fb = document.querySelector(".counter.face h2");
var yt = document.querySelector(".counter.youtube");
var tiktok = document.querySelector(".counter.tiktok");

function face(to) {
    var step = 1;
    var from = 0;
    var startCounters = setinterval(function () {
        from += step;
        if (from > to) {
            clearInterval(startCounters);
            fb.innerText = step;
        }
    }, 1000);
}
face(1000);
