var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var todoLists = [];
const input = $("input");

function createTodoList() {
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
        }
    });
}

createTodoList();
