var range = document.querySelector(".range");

range.addEventListener("mousemove", function (e) {
    // console.log(e.pageX - this.offsetLeft);
    const rangeWidth = e.pageX - this.offsetLeft;
    const pt = (rangeWidth / range.clientWidth) * 100;
    mathf = m;
    console.log(mathf);
});
console.log(range);
