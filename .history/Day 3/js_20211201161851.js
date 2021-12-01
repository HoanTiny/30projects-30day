const buttonBtn = document.querySelector(".icon-close");
const modal = document.querySelector(".modal");

buttonBtn.addEventListener("click", function () {
    modal.classList.add("active");
});
