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
            <li>${tag}
            <i class="uit uit-multiply" onclick="removeTag(this, '${index}')"></i>
            </li>
            `;
        ul.innerHTML += liTag;
    });
}
