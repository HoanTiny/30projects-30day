var range = document.querySelector(".range");

range.addEventListener("mousemove", function (e) {
    // console.log(e.pageX - this.offsetLeft);
    const rangeWidth = e.pageX - this.offsetLeft;
    const pt = (rangeWidth / range.clientWidth) * 100;
    pt.toFixed(0);
    console.log(pt);
});
console.log(range);
