import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import "../styles/Weather.css";

function CurrentWeather() {
  const { currentWeather, unit } = useContext(WeatherContext);

  if (!currentWeather) return null;

  return (
    <div className="weather-card">
      <h2>{currentWeather.name}</h2>
      <p>{new Date().toLocaleString()}</p>
      <h3>
        {Math.round(currentWeather.main.temp)}°{unit === "metric" ? "C" : "F"}
      </h3>
      <p>{currentWeather.weather[0].description}</p>
      <p>
        Viento: {currentWeather.wind.speed} {unit === "metric" ? "m/s" : "mph"}
      </p>
      <p>
        Mín: {Math.round(currentWeather.main.temp_min)}° / Máx:{" "}
        {Math.round(currentWeather.main.temp_max)}°
      </p>
    </div>
  );
}

export default CurrentWeather;
