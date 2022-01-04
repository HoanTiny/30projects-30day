let isDrawing = false;
let x, y;

const myPics = document.getElementById("canvas");
const context = myPics.getContext("2d");
const color = document.getElementById("color");
const sizeUp = document.getElementById("increase");
const sizeDown = document.getElementById("decrease");
const sizeText = document.getElementById("size");
const clear = document.getElementById("eraser");
var sizeCurrent = 10;

clear.addEventListener("click", (e) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener("mousedown", (e) => {
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
    isDrawing = false;

    x = undefined;
    y = undefined;
});

myPics.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCicrle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCicrle(x, y) {
    context.beginPath();
    context.arc(x, y, sizeCurrent, 0, 2 * Math.PI);
    context.fillStyle = color.value;
    context.fill();
}

function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = color.value;
    context.lineWidth = sizeCurrent;
    context.stroke();
}

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
