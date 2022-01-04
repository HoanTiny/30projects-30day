const container = document.querySelector(".container");
const SQUARE = 200;

for (var i = 0; i < SQUARE; i++) {
    var sq = i;
    sq = document.createElement("div");
    sq.className = "square";
    container.appendChild(sq);
}

const squares = document.querySelectorAll("div.square");
//Function random color 1

// function generateRandomColor() {
//     var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     return randomColor;
//     //random color will be freshly served
// }

//Function random color 2

// function random_rgba() {
//     var o = Math.round,
//         r = Math.random,
//         s = 255;
//     return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) + ")";
// }

//Function random color 3

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
    element.style.backgroundColor = getRandomColor();
    element.style.boxShadow = `0 0 5px ${getRandomColor()}, 0 0 50px ${getRandomColor()}`;
}

function removeColor(element) {
    element.style.backgroundColor = null;
    element.style.boxShadow = null;
}
