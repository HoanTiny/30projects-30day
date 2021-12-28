let listDivImg = document.querySelectorAll(".list-img div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

var currentIndex = 0;

setCurrent(currentIndex);
function setCurrent(index) {
    currentIndex = index;
    imgWrap.src = listDivImg[currentIndex].querySelector("img").src;

    listDivImg.forEach((item) => {
        item.classList.remove("active");
    });

    listDivImg[currentIndex].classList.add(active);
}

listDivImg.forEach((img, index) => {
    img.addEventListener("click", function (e) {
        currentIndex(index);
    });
});

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
    if (currentIndex < 0) {
        currentIndex = 0;
    } else {
        imgWrap.src = listDivImg[currentIndex].querySelector("img").src;
    }
});
