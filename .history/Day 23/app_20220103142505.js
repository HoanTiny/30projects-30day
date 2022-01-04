const container = document.querySelector("container");
const SQUARE = 200;

for (var i = 0; i <= SQUARE; i++) {
    const square = container.createElement("div");
    square.className = "square";
    container.appendChild(square);
}
