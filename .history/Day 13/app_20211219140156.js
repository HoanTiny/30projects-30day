var img = document.querySelector(".preview");
const inputImg = document.querySelector("#input-img");

inputImg.addEventListener("change", function (e) {
    var file = inputImg.files[0];
    console.log(file);
    img.innerHTML = "
    ";
});
