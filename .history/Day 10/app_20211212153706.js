var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const input = $("input");
var todo = $(".todos");
const form = $("form");

var storageKey = "todos";
var dataString = localStorage.getItem(storageKey);

var todoLists;
if (dataString) {
    todoLists = JSON.parse(dataString);
} else {
    todoLists = [];
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    input.value = "";
});

function createTodoList() {
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            addTodo();
        }
    });
}

function addTodo() {
    todoLists.push(input.value);
    var html = todoLists
        .map(function (todoList) {
            return `
            <li>
                <span>${todoList}</span>
                <i class="fas fa-trash"></i>
            </li>
        `;
        })
        .join("");
    todo.innerHTML = html;
}

// function deleteTodo(li) {
//     addTodo();
//     const lis = $$("li");
//     lis.forEach(function (li) {
//         li.addEventListener("click", function () {
//             li.classList.toggle("completed");
//             console.log("hihi");
//         });
//     });
// }

function start() {
    createTodoList();
    localStorage.setItem(storageKey, JSON.stringify(todoLists));
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
//     console.log(todos);
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
