const btnNext = document.querySelector(".icon-next");
const btnPrev = document.querySelector(".icon-prev");
const slider = document.querySelector(".slider");
const imgItems = document.querySelectorAll(".img-item");
const btnClose = document.querySelector(".icon-close");
const sliderMain = document.querySelector(".slider-main");

btnClose.addEventListener("click", function () {
    slider.classList.remove("active");
});

imgItems.forEach(function (imgItem) {
    imgItem.addEventListener("click", function () {
        slider.classList.add("active");
        console.log("hi");
    });
});

let index = 0;

btnNext.addEventListener("click", function () {
    index++;
    sliderMain.style.transform = `translateX(-${1200 * index}px)`;
});
