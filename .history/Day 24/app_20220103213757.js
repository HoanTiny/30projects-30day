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
        toggle.onclick = function () {
            if (app.isplay) {
                video.pause();
                icon.className = "bx bx-play";
            } else {
                video.play();
                icon.className = "bx bx-pause";
            }
        };
        video.onplay = function () {
            app.isplay = true;
        };

        //Khi song được pause
        video.onpause = function () {
            app.isplay = false;
        };
        video.ontimeupdate = function () {
            time.innerHTML = `
                ${video.currentTime.toFixed()} / ${video.duration.toFixed()}
            `;
            progressBar.style.width = `${(video.currentTime.toFixed() / video.duration.toFixed()) * 100}%`;
        };
    },

    start: function () {
        app.handle();
    },
};

app.start();
