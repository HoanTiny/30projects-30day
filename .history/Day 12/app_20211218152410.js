var range = document.querySelector(".range");
const body = document.querySelector("body");
const rangeBar = document.querySelector(".range-bar");

function createRangeBar(pt) {
    rangeBar.style.width = pt + "%";
    rangeBar.innerHTML = `${pt}%`;
}
createRangeBar(50);

range.addEventListener("mousemove", function (e) {
    const rangeWidth = e.pageX - this.offsetLeft; //Lấy vị trí khi di chuột
    const pt = Math.round((rangeWidth / range.clientWidth) * 100); // Làm tròn
    body.style.backgroundColor = `rgb(0,0,0,${pt / 100})`;
    createRangeBar(pt);
});
console.log(range);
