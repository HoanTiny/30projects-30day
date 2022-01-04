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
        const ewidth = square.offsetWidth;
        const eheight = square.offsetHeight;
        square.style.backgroundColor = "rgba(255, 255, 255)";
        if (square.onmousemove) {
            setTimeout(function () {
                square.style.backgroundColor = null;
            }, 500);
            console.log("hi");
        }
    });
});
