export const WeatherHTML = (weather) => {
    return `
    <li>
    Date ${Date.parse(weather.dt)}
    </li>
    `
}