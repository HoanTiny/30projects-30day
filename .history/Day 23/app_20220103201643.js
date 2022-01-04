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
    square.addEventListener("mouseover", function (e) {
        mouseClor(square);
    });
    square.addEventListener("mouseout", function (e) {
        removeColor(square);
    });
});

function mouseClor(element) {
    element.style.backgroundColor = random_rgba();
    element.style.boxShadow = `0 0 10px ${random_rgba()}, 0 0 100px ${random_rgba()}`;
}

function removeColor(element) {
    element.style.backgroundColor = null;
    element.style.boxShadow = null;
}
