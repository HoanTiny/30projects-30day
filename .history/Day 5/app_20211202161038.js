var btnSearch = document.querySelector(".btn-search");
var searchContainer = document.querySelector(".search");

btnSearch.addEventListener("click", function () {
    searchContainer.classList.toggle("open");
});
