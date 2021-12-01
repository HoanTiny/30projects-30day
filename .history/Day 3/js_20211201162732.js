const buttonBtn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const iconClose = document.querySelector(".icon-close");
const btnClose = document.querySelector(".btn-close");
const modalContainer = document.querySelector(".container");

buttonBtn.addEventListener("click", function () {
    modal.classList.add("active");
});

iconClose.addEventListener("click", function () {
    modal.classList.remove("active");
});

btnClose.addEventListener("click", function () {
    modal.classList.remove("active");
});

modal.addEventListener("click", function () {
    modal.classList.remove("active");
});

container.addEventListener("click", function (event) {
    event.stopPropagation();
});
