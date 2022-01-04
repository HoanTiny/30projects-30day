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
        square.style.backgroundColor = "rgba(255, 255, 255)";
        if (move) {
            square.style.backgroundColor = "rgba(255, 255, 255)";
        } else {
            square.style.backgroundColor = null;
        }
    });
});
