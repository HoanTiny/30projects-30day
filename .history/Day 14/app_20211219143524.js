let listDivImgs = document.querySelectorAll(".list-img div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

var currentIdex = 0;

next.addEventListener("click", function () {
    listDivImgs.forEach((icon, index) => {
        console.log(icon[index]);
    });
});
