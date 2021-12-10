var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnRemove = $(".btn-remove");
const input = $(".input-search");

const iconCloses = $$(".tags i");
const searchMain = $(".search-history-tags");

var searchTags = ["NodeJs", "Hoan"];
createTags();
function createTags() {
    searchMain.innerHTML = "";
    searchTags.map((tag, index) => {
        let liTag = `
        <li class="tags">
            <span>${tag}</span>
            <i class="fas fa-times"></i>
        </li>
            `;
        // liTag
        searchMain.innerHTML += liTag;
    });
    searchMain.appendChild(input);
    input.focus();
}

input.onkeydown = function (event) {
    if (event.key === "Enter") {
        searchTags.push(input.value);
    }
};
