const btnNext = document.querySelector(".icon-next");
const btnPrev = document.querySelector(".icon-prev");
const slider = document.querySelector(".slider");
const sliderImgs = document.querySelectorAll(".slide-img");
const btnClose = document.querySelector(".icon-close");
const sliderMain = document.querySelector(".slider-main");
const imgItems = document.querySelectorAll(".img-item");

console.log(sliderImgs.length);

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
    if (index < sliderImgs.length - 1) {
        index++;
    } else {
        index = 0;
    }
    sliderMain.style.transform = `translateX(-${1200 * index}px)`;
});
