const apiKey = "b3b459aeba8fba1586944d79a2e77291";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#searchBox input");
const searchBtn = document.querySelector("#searchBox button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  document.getElementById("city").innerHTML = data.name;
  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.getElementById("humidity").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
checkWeather();
