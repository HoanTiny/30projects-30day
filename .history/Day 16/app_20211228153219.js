var c = document.getElementById("canvas");

c.addEventListener("mousemove", function (e) {
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 10, 0, 2 * Math.PI);
    ctx.stroke();
});
