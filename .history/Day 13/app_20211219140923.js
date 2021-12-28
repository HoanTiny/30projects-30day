var img = document.querySelector(".preview");
const inputImg = document.querySelector("#input-img");

inputImg.addEventListener("change", function (e) {
    var file = inputImg.files[0];
    const urlImg = URL.createObjectURL(file);
    const pic = document.createElement("img");
    pic.style.src = urlImg;
    img.appendChild(pic);
    console.log(file);
});
