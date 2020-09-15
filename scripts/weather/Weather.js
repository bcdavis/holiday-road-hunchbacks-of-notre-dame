// const WeatherConvert = () => {

// }


export const WeatherHTML = (weather) => {
    const date = weather.dt * 1000
    const pop = Math.round(weather.pop * 100)
    return `
    <li>
        <p><strong>${new Date(date).toLocaleDateString("en-US")}</strong></p>
    </li>
    <li>-- High: ${Math.round(weather.temp.max)} </li>
    <li>-- Low: ${Math.round(weather.temp.min)}</li>
    <li>-- Chance of Precipitation: ${pop}%</li>
    `
}

