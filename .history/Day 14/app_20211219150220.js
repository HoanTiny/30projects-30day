let listDivImg = document.querySelectorAll(".list-img div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

var currentIndex = 0;

next.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex > listDivImg.length - 1) {
        currentIndex = listDivImg.length - 1;
    } else {
        imgWrap.src = listDivImg[currentIndex].querySelector("img").src;
    }
});

prev.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex <= 0) {
        currentIndex = 0;
    } else {
        imgWrap.src = listDivImg[currentIndex].querySelector("img").src;
    }
});
