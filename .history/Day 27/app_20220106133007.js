const cardImg = document.querySelector(".card__img");
const cardHeading = document.querySelector(".card__info h2");
const cardContent = document.querySelector(".card__info p");
const cardBtn = document.querySelector(".card__info button");

setTimeout(function () {
    const img = document.createElement("img");
    img.src = "./Rose.jpg";
    cardImg.appendChild(img);
    cardHeading.innerText = "Rose";
    cardContent.innerText = "Rose is my love";
    cardBtn.innerText = "Love";
    cardImg.classList.remove("loading");
}, 2000);
