var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const btnRemove = $(".btn-remove");
const input = $(".input-search");
const searchMain = $(".search-history-tags");

var searchTags = ["NodeJs", "Hoan"];
createTags();
const iconCloses = $$(".icon-closes");
console.log(iconCloses);
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
iconCloses.addEventListener("click", function () {
    console.log("ho");
});

function removeTags() {
    iconCloses.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            console.log("hihi");
            searchTags.splice(index, 1);
        });
        createTags();
    });
}
removeTags();

input.onkeydown = function (event) {
    if (event.key === "Enter") {
        searchTags.push(input.value);
        createTags();
        input.value = "";
    }
};

btnRemove.addEventListener("click", function () {
    searchTags = [];
    createTags();
});
