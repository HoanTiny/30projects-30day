const player = document.querySelector(".player");
const video = player.querySelector(".player__video");
const progress = player.querySelector(".player__progress");
const progressBar = player.querySelector(".player__progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const volume = player.querySelector(".player__volume input");
const time = player.querySelector(".player__time");

const isplay = false;

toggle.addEventListener("click", () => {
    toggle.innerHTML = '<i class="bx bx-play"></i>';
    isplay = true;
    if (isplay) {
        video.play();
    } else {
        toggle.innerHTML = '<i class="bx bx-pause">';
    }
});
