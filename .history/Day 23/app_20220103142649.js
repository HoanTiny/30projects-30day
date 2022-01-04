const container = document.querySelector("container");
const SQUARE = 200;

for (var i = 0; i <= SQUARE; i++) {
    i = document.createElement("div");
    i.className = "square";
    document.appendChild(i);
}
