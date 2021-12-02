const btnNext = document.querySelector(".icon-next");
const btnPrev = document.querySelector(".icon-prev");
const slider = document.querySelector(".slider");
const imgItems = document.querySelector(".img-item");

imgItems.forEach(function (imgItem) {
    imgItem.addEventListener("click", function () {
        slider.classList.add("active");
    });
});
