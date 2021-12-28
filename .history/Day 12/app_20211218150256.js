var range = document.querySelector(".range");

range.addEventListener("mousemove", function (e) {
    console.log(e.pageX - this.offsetLeft);
});
console.log(range);
