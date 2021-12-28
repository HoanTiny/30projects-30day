var img = document.querySelector(".preview");
var input = document.querySelector("input");

function loadImage() {
    var loading = `
        <img src="${input.value}"
    `;
    img.innerHTML += loading;
}

loadImage();
