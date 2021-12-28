var range = document.querySelector(".range");
const body = document.querySelector("body");
const rangeBar = document.querySelector(".range-bar");

range.addEventListener("mousemove", function (e) {
    // console.log(e.pageX - this.offsetLeft);
    const rangeWidth = e.pageX - this.offsetLeft;
    const pt = (rangeWidth / range.clientWidth) * 100;

    console.log(Math.round(pt));
});
console.log(range);
