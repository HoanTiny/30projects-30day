const input = document.querySelector(".input-search");

const url = `https://api.openweathermap.org/data/2.5/weather?q={HaNoi}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

function getWeather() {
    fetch(url)
        .then((response) => response.json)
        .then((data) => console.log(data));
}

getWeather();
