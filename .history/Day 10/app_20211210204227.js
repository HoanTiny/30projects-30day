var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var todoLists = [];
const input = $("input");
const todo = $(".todos");
const form = $("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

function createTodoList() {
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            console.log(keyCode);
            todoLists.push(input.value);
        }
    });
    var htmls = todoLists
        .map(function (todoList) {
            return `
            <li class="">
                <span>${todoList}</span>
            </li>
        `;
        })
        .join("");
    todo.innerHTML = htmls;
}

createTodoList();
