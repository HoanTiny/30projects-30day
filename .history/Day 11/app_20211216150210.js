var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnSuccess = $(".success");
const btnWarning = $(".warning");
const btnError = $(".error");

const toast = $("#toast");

btnSuccess.onclick = function () {
    console.log("hi");
};

btnWarning.onclick = function () {
    console.log("hi Warning");
};

btnError.onclick = function () {
    console.log("hi Error");
};
