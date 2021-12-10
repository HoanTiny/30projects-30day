var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnRemove = $(".btn-remove");
const iconCloses = $$(".tags i");
const searchMain = $$(".search-history-tags");

var searchTags = ["NodeJs", "Hoan"];

function createTags() {
    searchMain.innerHTML = "";
    searchTags.forEach((tag, index) => {
        let liTag = `
        <li class="tags">
            <span>${tag}</span>
            <i class="fas fa-times"></i>
        </li>
            `;
        searchMain.innerHTML += liTag;
    });
}
