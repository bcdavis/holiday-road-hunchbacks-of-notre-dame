import { WeatherHTML } from "./Weather.js";
import { getWeather, useWeather } from "./WeatherProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("parkChosen", (event) => {
  if (event.target.value !== "0") {
    const lat = event.detail.lat;
    const long = event.detail.long;

    getWeather(lat, long).then((_) => {
      renderWeather(useWeather());
    });
  }
});

const renderWeather = (weather) => {
  const contentTarget = document.querySelector(".parkWeather");
  contentTarget.innerHTML = `
  <h3>Today</h3>
  <ul class="forecastList">
  ${WeatherHTML(weather[0])}
  </ul>
  <h3>5-Day Forecast</h3>
  `;
  let i = 1;
  while (i < 6) {
    contentTarget.innerHTML += `
    <ul class="forecastList">
    ${WeatherHTML(weather[i])}
    </ul>
    `;
    i++;
  }
};
