import { WeatherHTML } from "./Weather.js"
import { getWeather } from "./WeatherProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkChosen",event => {
    if (event.target.value !== "0") {
        const lat = event.detail.lat
        const long = event.detal.long
        getWeather(lat,long).then(_ => {
            renderWeather(useWeather())
        })
    }
})

const renderWeather = (weather) => {
    const contentTarget = document.querySelector(".parkWeather")
    contentTarget.innerHTML = `
    <h3>5-Day Forecast</h3>
    <ul class="forecastList">
    ${weather.map(day => {
        WeatherHTML(day)
    }).join("")}
    </ul>
    `
}