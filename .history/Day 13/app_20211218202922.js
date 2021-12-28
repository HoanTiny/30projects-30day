var img = document.querySelector(".preview");
var input = document.querySelector("input");

function loadImage() {
    img.addEventListener("click", function () {
        var loading = `
        <img src="${input.value}"
    `;
        img.innerHTML += loading;
    });
}

loadImage();
