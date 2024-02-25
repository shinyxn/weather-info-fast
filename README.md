# weather-info-fast

Fastly fetch weather data info

## Example Usage
```javascript
import getWeather from "./index.js";

const weather = await getWeather("Tokyo");
// console.log(weather);
// ----- City: Tokyo -----
// Temperature: +12 °C
// Wind: 39 km/h

// >>>> Forecast <<<<
// -- Day 1 --
// Temperature: 7 °C
// Wind: 41 km/h
// -- Day 2 --
// Temperature: +11 °C
// Wind: 49 km/h
// -- Day 3 --
// Temperature: +9 °C
// Wind: 14 km/h
```
