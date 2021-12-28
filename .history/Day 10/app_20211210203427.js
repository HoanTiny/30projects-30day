var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var todoLists = [];
const input = $("input");
const todo = $(".todos");

function createTodoList() {
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            todoLists.push(input.value);
        }
    });
    var html = "";
    todoLists.map(function (todoList) {
        return `

        `;
    });
}

createTodoList();
