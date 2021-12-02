const btnNext = document.querySelector(".icon-next");
const btnPrev = document.querySelector(".icon-prev");
const slider = document.querySelector(".slider");
const sliderImgs = document.querySelectorAll(".slide-img");
const btnClose = document.querySelector(".icon-close");
const sliderMain = document.querySelector(".slider-main");
const imgItems = document.querySelectorAll(".img-item");

console.log(sliderImgs.length);

imgItems.forEach(function (imgItem, i) {
    imgItem.addEventListener("click", function () {
        sliderMain.style.transform = `translateX(-${1200 * i}px)`;
        slider.classList.add("active");
        var index = i;
        btnNext.addEventListener("click", () => {
            next();
        });

        btnPrev.addEventListener("click", function () {
            prev();
        });
        btnClose.addEventListener("click", function () {
            close();
        });
        function next() {
            console.log(index);
            if (index < sliderImgs.length - 1) {
                index++;
            } else {
                index = 0;
            }
            sliderMain.style.transform = `translateX(-${1200 * index}px)`;
        }

        function prev() {
            if (index >= 1) {
                index--;
            } else {
                index = sliderImgs.length - 1;
            }
            sliderMain.style.transform = `translateX(-${1200 * index}px)`;
        }

        function close() {
            slider.classList.remove("active");
            index = 0;
            sliderMain.style.transform = `translateX(-${1200 * index}px)`;
        }
    });
});
