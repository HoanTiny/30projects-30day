const player = document.querySelector(".player");
const video = player.querySelector(".player__video");
const progress = player.querySelector(".player__progress");
const progressBar = player.querySelector(".player__progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const volume = player.querySelector(".player__volume input");
const time = player.querySelector(".player__time");
const icon = player.querySelector(".toggle i");

var isplay = false;

const app = {
    isplay: false,
    handle: function () {
        if (!isplay) {
            toggle.onclick = function () {
                app.isplay = true;
                video.play();
                icon.className = "bx bx-pause";
            };
        } else {
            toggle.onclick = function () {
                app.isplay = false;
                video.pause();
                icon.className = "bx bx-play";
            };
        }
    },
    start: function () {
        app.handle();
    },
};

app.start();
