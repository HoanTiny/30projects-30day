const btnNext = document.querySelector(".icon-next");
const btnPrev = document.querySelector(".icon-prev");
const slider = document.querySelector(".slider");
const imgItems = document.querySelectorAll(".img-item");
const btnClose = document.querySelectorAll(".icon-close");

btnClose.addEventListener("click", function () {
    slider.classList.remove("active");
});

imgItems.forEach(function (imgItem) {
    imgItem.addEventListener("click", function () {
        slider.classList.add("active");
    });
});
