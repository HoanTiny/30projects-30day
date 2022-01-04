var c = document.getElementById("canvas");
c.addEventListener("mousemove", function (e) {
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(e.target.clientX, e.target.clientY, 10, 0, 2 * Math.PI);
    ctx.stroke();
});
