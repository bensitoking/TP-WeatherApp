import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { getWeatherData } from "../api.js";
import "../styles/Forecast.css";

function CityWeather() {
  const { unit } = useContext(WeatherContext);
  const [cities] = useState(["New York", "Copenhagen", "Tokyo"]);
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all(cities.map((city) => getWeatherData(city, unit))).then(setData);
  }, [unit]);

  return (
    <div className="forecast-container">
      <h2>Clima en ciudades principales</h2>
      <div className="forecast-grid">
        {data.map((city, i) => (
          <div key={i} className="forecast-card">
            <h3>{city.name}</h3>
            <img
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
              alt="icon"
            />
            <p>
              {Math.round(city.main.temp)}°{unit === "metric" ? "C" : "F"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityWeather;
