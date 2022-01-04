const container = document.querySelector(".container");
const SQUARE = 200;

for (var i = 0; i < SQUARE; i++) {
    var sq = i;
    console.log(sq);

    sq = document.createElement("div");
    sq.className = "square";
    container.appendChild(sq);
}
