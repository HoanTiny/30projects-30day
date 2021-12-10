const input = document.querySelector(".input-search");
const city = document.querySelector(".city");
const country = document.querySelector(".country");

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        getWeather(e.target.value);
    }
});

function getWeather(input) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => changeWeatherUI(weather));
}

function changeWeatherUI(weather) {
    city.innerHTML = input.value;
    // country.innerHTML = weather.country;
    console.log(weather.country);
}

changeWeatherUI("Bac Giang");
