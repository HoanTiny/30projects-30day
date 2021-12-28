var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnSuccess = $(".success");
const btnWarning = $(".warning");
const btnError = $(".error");

const toast = $("#toast");

function showSuccess() {
    var htmls = `
        <div class="toast success"></div>
    `.join("");
    toast.innerHTML = htmls;
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
