var img = document.querySelector(".preview");
const inputImg = document.querySelector("#input-img");

inputImg.addEventListener("change", function (e) {
    var file = inputImg.files[0];
    const pic = document.createElement("img");
    const urlImg = URL.createObjectURL(file);

    pic.src = urlImg;
    img.appendChild(pic);
    console.log(urlImg);
});
