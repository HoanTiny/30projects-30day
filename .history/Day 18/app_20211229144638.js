var counter = document.querySelectorAll(".counter");
var fb = document.querySelector(".counter.face h2");
var yt = document.querySelector(".counter.youtube");
var tiktok = document.querySelector(".counter.tiktok");

function face(to) {
    let step = 1;
    let from = 0;
    const startCounters = setInterval(function () {
        from += step;
        if (from > to) {
            clearInterval(startCounters);
            fb.innerText = to;
        } else {
            fb.innerText = from;
        }
    }, 1000);
}
face(1000);
