const container = document.querySelector(".container");
const SQUARE = 200;
var move = false;

for (var i = 0; i < SQUARE; i++) {
    var sq = i;
    sq = document.createElement("div");
    sq.className = "square";
    container.appendChild(sq);
}

const squares = document.querySelectorAll("div.square");
squares.forEach(function (square) {
    square.addEventListener("mousemove", function (e) {
        move = true;
        const ewidth = square.offsetWidth;
        const eheight = square.offsetHeight;
        square.style.backgroundColor = `${Math.random() * rgb(255, 255, 255) + rgb(0, 0, 0)}`;
    });
    square.addEventListener("mouseout", function (e) {
        square.style.backgroundColor = null;
    });
});
