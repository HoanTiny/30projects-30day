const container = document.querySelector(".container");
const SQUARE = 200;

for (var i = 0; i < SQUARE; i++) {
    var sq = i;
    sq = document.createElement("div");
    sq.className = "square";
    container.appendChild(sq);
}

const squares = document.querySelectorAll("div.square");
// function generateRandomColor() {

//     var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     return randomColor;
//     //random color will be freshly served
// }
function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) + ")";
}
squares.forEach(function (square) {
    square.addEventListener("mousemove", function (e) {
        square.style.backgroundColor = random_rgba();
        square.style.boxShadow = `0 0 10px ${random_rgba()}, 0 0 100px ${random_rgba()}`;
    });
    square.addEventListener("mouseout", function (e) {
        square.style.backgroundColor = null;
        square.style.boxShadow = null;
    });
});
