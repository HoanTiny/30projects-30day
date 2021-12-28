var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnSuccess = $(".success");
const btnWarning = $(".warning");
const btnError = $(".error");

const toast = $("#toasts");
const btns = $$(".control button");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log("hi");
        createToast(e.target.getAttribute("class"));
    });
});

function createToast(status) {
    let toastCr = document.createElement("div");
    toastCr.className = `toast ${status}`;
    toastCr.innerHTML = `
    ${list[status].icon}
    <span class="msg"></span>
    <span>${list[status].title}</span>`;
    toast.appendChild(toastCr);
    setTimeout(() => {
        toastCr.style.animation = "hide_slide 1s ease forwards";
    }, 4000);
    setTimeout(() => {
        toastCr.remove();
    }, 6000);
}
