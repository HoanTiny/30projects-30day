var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 10, 0, 2 * Math.PI);
ctx.stroke();
