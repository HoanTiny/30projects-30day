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
}
createTodoList();

function deleteTodo() {
    const li = $(".todos li");
    li.addEventListener("click", function () {
        li.classlist.toggle("completed");
        console.log(li);
    });
}

deleteTodo();
