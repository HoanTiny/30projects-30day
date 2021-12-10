var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnRemove = $(".btn-remove");
const input = $(".input-search");

const iconCloses = $$("i");
const searchMain = $(".search-history-tags");

var searchTags = ["NodeJs", "Hoan"];
createTags();
removeTags();
function createTags() {
    searchMain.innerHTML = "";
    searchTags.map((tag, index) => {
        let liTag = `
        <li class="tags">
            <span>${tag}</span>
            <i class="fas fa-times icon-closes"></i>
        </li>
            `;
        // liTag
        searchMain.innerHTML += liTag;
    });
    searchMain.appendChild(input);
    input.focus();
}

console.log(iconCloses);

function removeTags() {
    iconCloses.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            console.log(index);
            searchTags.splice(index, 1);
        });
        createTags();
        console.log(searchTags);
    });
}

input.onkeydown = function (event) {
    console.log(event.key);
    if (event.key === "Enter") {
        searchTags.push(input.value);
        createTags();
        input.value = "";
    }
};
