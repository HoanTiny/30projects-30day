var img = document.querySelector(".preview");
// var input = document.querySelector("#input-img");

// function loadImage() {
//     img.addEventListener("click", function () {
//         var loading = `
//         <img src="${input.value}"
//     `;
//         img.innerHTML += loading;
//     });
// }

// loadImage();

const inputImg = document.querySelector("#input-img");

inputImg.addEventListener("change", (e) => {
    console.log(e.targe.value);
});
