import Settings from '../Settings.js'

const eventHub = document.querySelector(".container")

let weather


export const useWeather = () => {
    return weather.slice()
}


export const getWeather = (lat,long) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${Settings.weatherKey}`)
    .then((response) => response.json())
    .then((parsedWeather) => {
      weather = parsedWeather;
    });
}