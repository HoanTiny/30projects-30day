let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById("canvas");
const context = myPics.getContext("2d");
const color = document.getElementById("color");
const sizeUp = document.getElementById("increase");
const sizeDown = document.getElementById("decrease");
const sizeText = document.getElementById("size");
var sizeCurrent = 10;

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener("mousedown", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener("mouseup", (e) => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

function changeSize() {
    var sdf = 10;
    sizeUp.addEventListener("click", () => {
        sdf += 5;
        if (sdf >= 50) {
            sdf = 50;
        }
        sizeCurrent = sdf;
        sizeText.innerText = sizeCurrent;
    });
    sizeDown.addEventListener("click", () => {
        sdf -= 5;
        if (sdf <= 0) {
            sdf = 0;
        }
        sizeCurrent = sdf;
        sizeText.innerText = sizeCurrent;
    });
}
changeSize(sizeCurrent);
function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = color.value;
    context.lineWidth = sizeCurrent;
    context.arc(x1, y1, context.lineWidth, 0, 2 * Math.PI);
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.closePath();
}
