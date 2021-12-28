var range = document.querySelector(".range");

range.addEventListener("mousemove", function (e) {
    console.log(e.range.clientWidth);
});

console.log(range);
