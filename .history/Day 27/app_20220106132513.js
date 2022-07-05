const cardImg = document.querySelector(".card__img");
const cardHeading = document.querySelector(".card__info h2");
const cardContent = document.querySelector(".card__info p");
const cardBtn = document.querySelector(".card__info button");

setTimeout(function () {
    cardImg.src =
        "https://instagram.fhan3-5.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/271313247_2696428480663784_166103024208492954_n.jpg?_nc_ht=instagram.fhan3-5.fna.fbcdn.net&_nc_cat=1&_nc_ohc=H4vpEjnhPl8AX_ZbKko&edm=AJ9x6zYBAAAA&ccb=7-4&ig_cache_key=Mjc0NDQ3NzMyNTgxMDE1MzUxNg%3D%3D.2-ccb7-4&oh=00_AT8kWvQluHSEqgFjyh0TW_Ibe4R4T5XnnCkm_5vqXzqBbA&oe=61DDD78A&_nc_sid=cff2a4";
    cardImg.classList.remove("loading");
}, 2000);
