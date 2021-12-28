var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var todoLists = [];
const input = $("input");
var todo = $(".todos");
const form = $("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

function createTodoList() {
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            todoLists.push(input.value);
            console.log(todoLists);
            var htmls = todoLists.map(function (todoList) {
                return `
                    <li class="">
                        <span>${todoList}</span>
                    </li>
                `;
            });
            var html = htmls.join("");
            todo.innerHTML = htmls;
        }
    });
}

createTodoList();
