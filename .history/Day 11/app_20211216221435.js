var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnSuccess = $(".success");
const btnWarning = $(".warning");
const btnError = $(".error");

const toast = $("#toasts");

function showSuccess() {
    let toastCr = document.createElement("div");
    toastCr.className = "toast success";
    toastCr.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>This is a success message !</span>`;
    toast.appendChild(toastCr);
    setTimeout(() => {
        toastCr.style.animation = "hide_slide 1s ease forwards";
    }, 4000);
    setTimeout(() => {
        toastCr.remove();
    }, 6000);
    // createToast();
}

function showError() {
    let toastCr = document.createElement("div");
    toastCr.className = "toast error";
    toastCr.innerHTML = `
    '<i class="fas fa-exclamation-triangle"></i>
    <span class="msg"></span>'
    <span>This is a success message !</span>`;
    toast.appendChild(toastCr);
    setTimeout(() => {
        toastCr.style.animation = "hide_slide 1s ease forwards";
    }, 4000);
    setTimeout(() => {
        toastCr.remove();
    }, 6000);
    // createToast();
}

function showWarning() {
    let toastCr = document.createElement("div");
    toastCr.className = "toast warning";
    toastCr.innerHTML = `
    <i class="fas fa-exclamation-circle"></i>
    <span>This is a success message !</span>`;
    toast.appendChild(toastCr);
    setTimeout(() => {
        toastCr.style.animation = "hide_slide 1s ease forwards";
    }, 4000);
    setTimeout(() => {
        toastCr.remove();
    }, 6000);
    // createToast();
}

btnSuccess.onclick = function () {
    showSuccess();
};

btnWarning.onclick = function () {
    showWarning();
};

btnError.onclick = function () {
    showError();
};
