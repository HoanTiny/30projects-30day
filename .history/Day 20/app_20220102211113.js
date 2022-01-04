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

//test
let elToShow = document.querySelectorAll(".show-on-scroll");

let isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();
    // some browsers support innerHeight, others support documentElement.clientHeight
    let viewHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)
    );
};

function loop() {
    elToShow.forEach((item) => {
        if (isElInViewPort(item)) {
            item.classList.add("start");
        } else {
            item.classList.remove("start");
        }
    });
}

window.onscroll = loop;

loop();
