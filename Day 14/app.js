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

    listDivImg[currentIndex].classList.add("active");
}

listDivImg.forEach((img, index) => {
    img.addEventListener("click", function (e) {
        setCurrent(index);
    });
});

next.addEventListener("click", function () {
    if (currentIndex >= listDivImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setCurrent(currentIndex);
});

prev.addEventListener("click", function () {
    if (currentIndex <= 0) {
        currentIndex = listDivImg.length - 1;
    } else {
        currentIndex--;
    }
    setCurrent(currentIndex);
});
