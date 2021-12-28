let listDivImgs = document.querySelectorAll(".list-img div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

var currentIdex = 0;

listDivImgs.forEach((icon, index) => {
    next.addEventListener("click", function () {
        currentIdex++;
        index = currentIdex;
        icon[index].classList.add("active");
    });
});
