let listDivImg = document.querySelectorAll(".list-img div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

var currentIndex = 0;

next.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex < listDivImg.length - 1) {
        imgWrap.src = listDivImg[currentIndex].querySelector("img").src;
    } else {
        return;
    }
});

prev.addEventListener("click", function () {
    currentIndex--;
    imgWrap.src = listDivImg[currentIndex].querySelector("img").src;
});
