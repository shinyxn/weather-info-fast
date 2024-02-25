import getWeather from "../index.js";

const weather = await getWeather("Tokyo");
console.log(weather);
