var counter = document.querySelectorAll(".counter");
var fb = document.querySelector(".counter.face h2");
var yt = document.querySelector(".counter.youtube");
var tiktok = document.querySelector(".counter.tiktok");

function face(df, to) {
    let step = 1;
    let from = 0;
    const startCounters = setInterval(function () {
        from += step;
        if (from > to) {
            clearInterval(startCounters);
            df.innerText = to;
        } else {
            df.innerText = from;
        }
    }, 1);
}
face(fb, 1000);
face(yt, 1000);
face(tiktok, 1000);
