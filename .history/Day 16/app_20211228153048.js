var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(30, 10, 40, 0, 2 * Math.PI);
ctx.stroke();
