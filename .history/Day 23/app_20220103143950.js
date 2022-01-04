const container = document.querySelector(".container");
const SQUARE = 200;

for (var i = 0; i < SQUARE; i++) {
    var sq = i;
    sq = document.createElement("div");
    sq.className = "square";
    container.appendChild(sq);
}

const squares = document.querySelectorAll("div.square");
squares.forEach(function (square) {
    square.addEventListener("mousemove", function (e) {
        square.style.backgroundColor = "rgba(255, 255, 255)";
        setTimeout(function () {
            square.style.backgroundColor = "#1d1d1d";
        }, 1000);
    });
});
