const input = document.querySelector(".input-search");

const city = document.querySelector(".name .city");
const country = document.querySelector(".name .country");

const time = document.querySelector(".time");
const temperature = document.querySelector(".temperature .value");
const shortDesc = document.querySelector(".short-desc");

const visibility = document.querySelector(".visibility span");
const wind = document.querySelector(".wind span");
const cloud = document.querySelector(".cloud span");

function changeWeatherUI(weather) {
    city.innerHTML = weather.name;
    country.innerHTML = weather.sys.country;
    time.innerHTML = new Date().getTime();.toString();
    console.log(time);
}

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        getWeather(e.target.value);
    }
});

async function getWeather(input) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    fetch(url)
        .then((response) => response.json())
        .then((weather) => changeWeatherUI(weather));
    // const res = await fetch(url);
    // const weather = await res.json();

    // changeWeatherUI(weather);
}

getWeather("Ha Noi");
