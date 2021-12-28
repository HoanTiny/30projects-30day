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
    <span class="msg "></span>
    <span>${list[status].title} countdown</span>`;
    toast.appendChild(toastCr);
    setTimeout(() => {
        toastCr.style.animation = "hide_slide 1s ease forwards";
    }, 4000);
    setTimeout(() => {
        toastCr.remove();
    }, 6000);
}

const list = {
    success: {
        icon: '<i class="fas fa-check-circle"></i>',
        title: "This is a success message !",
    },
    warning: {
        icon: '<i class="fas fa-exclamation-circle"></i>',
        title: "This is a success message !",
    },
    error: {
        icon: '<i class="fas fa-exclamation-triangle"></i>',
        title: "This is a error message",
    },
};
