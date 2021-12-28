var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var input = $("input");
var todo = $(".todos");
const form = $("form");
var btn = $("button");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    input.value = "";
});

const dataString = localStorage.getItem("todos");
var todoLists;
if (dataString) {
    todoLists = JSON.parse(dataString);
} else {
    todoLists = [];
}

function addTodo() {
    todoLists.push(input.value);
    var htmls = todoLists.map(function (todoList) {
        return `
            <li>
                <span>${todoList}</span>
                <i class="fas fa-trash"></i>
            </li>
        `;
    });
    var html = htmls.join("");
    todo.innerHTML = html;

    localStorage.setItem("todos", JSON.stringify(todoLists));
}

btn.addEventListener("click", function () {
    addTodo();
});
