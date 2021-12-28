var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnSuccess = $(".success");
const btnWarning = $(".warning");
const btnError = $(".error");

btnSuccess.onclick = function () {
    console.log("hi");
};
