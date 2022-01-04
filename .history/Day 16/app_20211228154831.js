var c = document.getElementById("canvas");
c.addEventListener("mousemove", function (e) {
    console.log(e);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
    ctx.stroke();
});
