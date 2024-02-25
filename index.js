import { fetchWeather } from "weather-cli-city-weather/utils/fetch.js";

export default async function getWeather(city) {
    const result = await fetchWeather(city)
    return result
}