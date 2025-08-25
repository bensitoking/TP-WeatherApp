import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import "../styles/Forecast.css";

function HourlyForecast() {
  const { hourlyForecast, unit } = useContext(WeatherContext);

  if (!hourlyForecast.length) return null;

  return (
    <div className="forecast-container">
      <h2>Próximas 24 horas</h2>
      <div className="forecast-grid">
        {hourlyForecast.map((item, i) => (
          <div key={i} className="forecast-card">
            <p>{new Date(item.dt * 1000).getHours()}:00</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="icon"
            />
            <p>
              {Math.round(item.main.temp)}°{unit === "metric" ? "C" : "F"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
