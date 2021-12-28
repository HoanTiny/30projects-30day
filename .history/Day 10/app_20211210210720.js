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
            input.value = "";
            var htmls = todoLists.map(function (todoList) {
                return `
                    <li class="">
                        <span>${todoList}</span>
                        <i class="fas fa-trash"></i>
                    </li>
                `;
            });
            var html = htmls.join("");
            todo.innerHTML = htmls;
        }
    });
    const lis = document.createElement("li");
    deleteTodo();
}

function deleteTodo() {
    lis.forEach(function (li) {
        li.addEventListener("click", function () {
            // li.classList.toggle("completed");
            console.log("hihi");
        });
    });
}

function start() {
    createTodoList();
}

start();
