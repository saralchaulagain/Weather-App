const apiKey = "b3b459aeba8fba1586944d79a2e77291";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#searchBox input");
const searchBtn = document.querySelector("#searchBox button");
const weatherIcon = document.querySelector("#icon");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.getElementById("error").style.display = "block";
    document.getElementById("weather").style.display = "none";
  } else {
    var data = await response.json();

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "../img/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "../img/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "../img/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "../img/heavy-rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "../img/mist.png";
    }

    document.getElementById("weather").style.display = "flex";
    document.getElementById("error").style.display = "none";
  }
}
