var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// var todoLists = ["haz", "hass"];
const input = $("input");
var todo = $(".todos");
const form = $("form");
const lis = $$(".todos li");

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
}

function deleteTodo() {
    console.log(lis);
    lis.forEach(function (li) {
        li.addEventListener("click", function () {
            // li.classList.toggle("completed");
            console.log("hihi");
        });
    });
}

function start() {
    deleteTodo();
    createTodoList();
}

start();
