// let isDrawing = false;
// let x, y;

// const myPics = document.getElementById("canvas");
// const context = myPics.getContext("2d");
// const color = document.getElementById("color");
// const sizeUp = document.getElementById("increase");
// const sizeDown = document.getElementById("decrease");
// const sizeText = document.getElementById("size");
// const clear = document.getElementById("eraser");
// const saveBtn = document.getElementById("save");
// var sizeCurrent = 10;

// clear.addEventListener("click", (e) => {
//     context.clearRect(0, 0, canvas.width, canvas.height);
// });

// // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// // Add the event listeners for mousedown, mousemove, and mouseup
// myPics.addEventListener("mousedown", (e) => {
//     isDrawing = true;
//     x = e.offsetX;
//     y = e.offsetY;
// });

// document.addEventListener("mouseup", (e) => {
//     isDrawing = false;

//     x = undefined;
//     y = undefined;
// });

// myPics.addEventListener("mousemove", (e) => {
//     if (isDrawing) {
//         const x2 = e.offsetX;
//         const y2 = e.offsetY;

//         drawCicrle(x2, y2);
//         drawLine(x, y, x2, y2);

//         x = x2;
//         y = y2;
//     }
// });

// function drawCicrle(x, y) {
//     context.beginPath();
//     context.arc(x, y, sizeCurrent, 0, 2 * Math.PI);
//     context.fillStyle = color.value;
//     context.fill();
// }

// function drawLine(x1, y1, x2, y2) {
//     context.beginPath();
//     context.moveTo(x1, y1);
//     context.lineTo(x2, y2);
//     context.strokeStyle = color.value;
//     context.lineWidth = sizeCurrent;
//     context.stroke();
// }

// function changeSize() {
//     var sdf = 10;
//     sizeUp.addEventListener("click", () => {
//         sdf += 5;
//         if (sdf >= 50) {
//             sdf = 50;
//         }
//         sizeCurrent = sdf;
//         sizeText.innerText = sizeCurrent;
//     });
//     sizeDown.addEventListener("click", () => {
//         sdf -= 5;
//         if (sdf <= 0) {
//             sdf = 0;
//         }
//         sizeCurrent = sdf;
//         sizeText.innerText = sizeCurrent;
//     });
// }
// changeSize(sizeCurrent);

// saveBtn.addEventListener("click", (e) => {
//     var myImage = myPics.toDataURL("image/png");
//     e.currentTarget.href = myImage;
// });

// Test

const canvas = document.getElementById("canvas");
const colorEl = document.getElementById("color");
const eraserEl = document.getElementById("eraser");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeEL = document.getElementById("size");
const saveEl = document.getElementById("save");
const clearEl = document.getElementById("clear");

const context = canvas.getContext("2d");

let size = 10;
let isPressed = false;
colorEl.value = "black";
let color = colorEl.value;
let x, y;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}

function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
}

function updateSizeOnScreen() {
    sizeEL.innerText = size;
}

increaseBtn.addEventListener("click", () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));

clearEl.addEventListener("click", () => context.clearRect(0, 0, canvas.width, canvas.height));

eraserEl.addEventListener("click", () => {
    color = "#fff";
});

saveEl.addEventListener("click", (e) => {
    const imageURI = canvas.toDataURL("image/png");
    e.currentTarget.href = imageURI;
});
