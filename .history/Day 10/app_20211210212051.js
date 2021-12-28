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
            addTodo();
        }
    });

    // deleteTodo();
}

function addTodo() {
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

function deleteTodo() {
    addTodo();
    const lis = $$("li");
    lis.forEach(function (li) {
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
            console.log("hihi");
        });
    });
}

function start() {
    createTodoList();
    deleteTodo();
}

start();

// const input = document.querySelector("form input");
// const ul = document.querySelector(".todos");
// const form = document.querySelector("form");

// const todos = JSON.parse(localStorage.getItem("todos"));

// if (todos) {
//     todos.forEach((todo) => addTodo(todo));
// }

// function addTodo(todo) {
//     const li = document.createElement("li");

//     li.setAttribute("class", todo.completed ? "completed" : "");
//     li.innerHTML = `
//         <span>${todo.text}</span>
//         <i class="fas fa-trash"></i>
//     `;

//     li.addEventListener("click", function () {
//         this.classList.toggle("completed");
//         updateTodos();
//     });

//     li.querySelector("i").addEventListener("click", (e) => {
//         e.target.parentElement.remove();
//         updateTodos();
//     });

//     ul.appendChild(li);
//     updateTodos();
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const text = input.value.trim();
//     text != "" ? addTodo({ text, completed: false }) : undefined;
//     input.value = "";
// });

// function updateTodos() {
//     const list = document.querySelectorAll("li");

//     const todos = [];

//     list.forEach((item) => {
//         todos.push({
//             text: item.querySelector("span").innerHTML,
//             completed: item.classList.contains("completed"),
//         });
//     });

//     localStorage.setItem("todos", JSON.stringify(todos));
// }
