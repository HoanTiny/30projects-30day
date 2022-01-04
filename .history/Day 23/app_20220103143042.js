const container = document.querySelector(".container");
const SQUARE = 200;

for (var i = 0; i <= SQUARE; i++) {
    console.log(i[2]);
    i = document.createElement("div");
    i.className = "square";
    container.appendChild(i);
}
