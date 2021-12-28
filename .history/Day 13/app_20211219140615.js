var img = document.querySelector(".preview");
const inputImg = document.querySelector("#input-img");

inputImg.addEventListener("change", function (e) {
    var file = inputImg.files[0];
    const urlImg = URL.createObjectURL(file);
    img.append(urlImg);
    console.log(file);
});
