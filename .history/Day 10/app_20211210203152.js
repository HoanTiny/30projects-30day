var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var todoLists = [];
const input = $("input");

function createTodoList() {
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        console.log(event.keyCode);
    });
}

createTodoList();
