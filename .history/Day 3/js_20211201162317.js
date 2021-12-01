const buttonBtn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const iconClose = document.querySelector(".icon-close");
const btnClose = document.querySelector(".btn-close");

buttonBtn.addEventListener("click", function () {
    modal.classList.add("active");
});

iconClose.addEventListener("click", function () {
    modal.classList.remove("active");
});

btnClose.addEventListener("click", function () {
    modal.classList.remove("active");
});
