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

// const inputImg = document.querySelector("#input-img");

// inputImg.addEventListener("change", (e) => {
//     let file = e.target.files[0];

//     if (!file) return;

//     let img = document.createElement("img");
//     img.src = URL.createObjectURL(file);

//     document.querySelector(".preview").appendChild(img);
// });

const inputImg = document.querySelector("#input-img");

inputImg.addEventListener("change", (e) => {
    console.log(e.targe.files[0]);
});
