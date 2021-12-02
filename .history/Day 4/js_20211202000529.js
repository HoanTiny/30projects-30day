const btnNext = document.querySelector(".icon-next");
const btnPrev = document.querySelector(".icon-prev");
const slider = document.querySelector(".slider");
const imgItem = document.querySelector(".img-item");

imgItem.addEventListener("click", function () {
    slider.classList.add("active");
});
