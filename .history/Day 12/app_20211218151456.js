var range = document.querySelector(".range");
const body = document.querySelector("body");
const rangeBar = document.querySelector(".range-bar");

range.addEventListener("mousemove", function (e) {
    // console.log(e.pageX - this.offsetLeft);
    const rangeWidth = e.pageX - this.offsetLeft;
    const pt = Math.round((rangeWidth / range.clientWidth) * 100);
    rangeBar.style.width = pt + "%";
});
console.log(range);
