// const WeatherConvert = () => {

// }


export const WeatherHTML = (weather) => {
    const date = weather.dt * 1000
    const pop = Math.round(weather.pop * 100)
    return `
    <li>
    ${new Date(date).toLocaleDateString("en-US")} -- High: ${Math.round(weather.temp.max)} -- Low: ${Math.round(weather.temp.min)} -- Chance of Precipitation: ${pop}%
    </li>
    `
}

