var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnSuccess = $(".success");
const btnWarning = $(".warning");
const btnError = $(".error");

const toast = $("#toasts");

function showSuccess() {
    let toastCr = document.createElement("div");
    toastCr.className = "toast error";
    toastCr.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>This is a success message !</span>`;
    toast.appendChild(toastCr);
    // createToast();
}

btnSuccess.onclick = function () {
    showSuccess();
};

btnWarning.onclick = function () {
    console.log("hi Warning");
};

btnError.onclick = function () {
    console.log("hi Error");
};

function createToast() {
    setTimeout(() => {
        toast.style.animation = "hide_slide 1s ease forwards";
    }, 4000);
    setTimeout(() => {
        toast.remove();
    }, 6000);
}
