import { WeatherHTML } from "./Weather.js";
import { getWeather, useWeather } from "./WeatherProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("parkChosen", (event) => {
  if (event.target.value !== "0") {
    const lat = event.detail.lat
    const long = event.detail.long
    
    getWeather(lat, long).then((_) => {
      renderWeather(useWeather());
    });
  }
});

const renderWeather = (weather) => {
  const contentTarget = document.querySelector(".parkWeather");
  contentTarget.innerHTML = `
    <h4>5-Day Forecast</h4>
    <ul class="forecastList">
    ${weather
      .map((day) => {
        return WeatherHTML(day);
      })
      .join("")}
    </ul>
    `;
};
