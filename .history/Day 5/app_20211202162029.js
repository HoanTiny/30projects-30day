var btnSearch = document.querySelector(".btn-search");
var searchContainer = document.querySelector(".search");
var searchInput = document.querySelector(".search-input");

btnSearch.addEventListener("click", function () {
    searchContainer.classList.toggle("open");
    searchInput.focus();
});
