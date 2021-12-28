let listDivImgs = document.querySelectorAll(".list-img div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

var currentIdex = 0;

listDivImgs.forEach((img, index) => {
    next.addEventListener("click", function () {
        currentIdex++;
        index = currentIdex;
        img[index].classList.add("active");
    });
});
