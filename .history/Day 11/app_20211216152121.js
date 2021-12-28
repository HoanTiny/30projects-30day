var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnSuccess = $(".success");
const btnWarning = $(".warning");
const btnError = $(".error");

const toast = $("#toasts");

function showSuccess() {
    var htmls = `
        <div class="toast success">
        <i class="fas fa-check-circle"></i>
        <span>This is a success message !</span>
        </div>
    `;
    toast.innerHTML += htmls;
}

btnSuccess.onclick = function () {
    showSuccess();
    setTimeout(() => {
        toast.style.animation = "hide_slide 1s ease forwards";
    }, 4000);
    setTimeout(() => {
        toast.remove();
    }, 6000);
};

btnWarning.onclick = function () {
    console.log("hi Warning");
};

btnError.onclick = function () {
    console.log("hi Error");
};
