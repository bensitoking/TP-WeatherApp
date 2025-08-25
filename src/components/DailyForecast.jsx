import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import "../styles/Forecast.css";

function DailyForecast() {
  const { dailyForecast, unit } = useContext(WeatherContext);

  if (!dailyForecast.length) return null;

  return (
    <div className="forecast-container">
      <h2>Próximos 5 días</h2>
      <div className="forecast-grid">
        {dailyForecast.map((item, i) => (
          <div key={i} className="forecast-card">
            <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="icon"
            />
            <p>
              {Math.round(item.main.temp_min)}° / {Math.round(item.main.temp_max)}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
