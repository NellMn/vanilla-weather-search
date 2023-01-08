function formatDate(timesTamp) {
  let date = new Date(timesTamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function showResult(response) {
  console.log(response);
  let currentTemperature = document.querySelector("#current-temperature");
  let maxTemperature = document.querySelector("#max-temperature");
  let minTemperature = document.querySelector("#min-temperature");
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#current-city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let visibilityElement = document.querySelector("#visibility");
  let dateElement = document.querySelector("#date");

  currentTemperature.innerHTML = Math.round(response.data.main.temp);
  maxTemperature.innerHTML = Math.round(response.data.main.temp_max);
  minTemperature.innerHTML = Math.round(response.data.main.temp_min);
  descriptionElement.innerHTML = response.data.weather[0].main;
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  visibilityElement.innerHTML = response.data.visibility / 1000;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "258213fabfb6e561af7eeb257d2a3047";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tehran&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(showResult);
