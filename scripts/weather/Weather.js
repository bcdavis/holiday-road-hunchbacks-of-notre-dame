// const WeatherConvert = () => {

// }


export const WeatherHTML = (weather) => {
    const date = weather.dt * 1000
    const pop = Math.round(weather.pop * 100)
    console.log("test", date)
    return `
    <li>
    ${new Date(date).toLocaleDateString("en-US")} -- High: ${Math.round(weather.temp.max)} -- Low: ${Math.round(weather.temp.min)} -- ${pop}% chance of precipitation
    </li>
    `
}

