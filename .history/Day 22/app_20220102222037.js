const zoomer = document.querySelector(".zoomer");
const wrapImgs = document.querySelectorAll(".zoomer .image");
const result = document.querySelector(".zoomer .result");

wrapImgs.forEach(function (img) {
    img.addEventListener("mousemove", (e) => {
        console.dir(e);
        console.log(e.offsetX);
        result.classList.remove("hide");
        result.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;
        if (e.offsetX >= e.clientY || e.offsetY >= e.clientX) {
            result.classList.add("hide");
        }
    });
});
