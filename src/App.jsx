import React, { useContext, useEffect } from "react";
import { WeatherContext } from "./context/WeatherContext";
import CurrentWeather from "./components/CurrentWeather.jsx";
import HourlyForecast from "./components/HourlyForecast.jsx";
import DailyForecast from "./components/DailyForecast.jsx";
import CityWeather from "./components/CityWeather.jsx";
import SearchBar from "./components/SearchBar.jsx";
import TemperatureToggle from "./components/TemperatureToggle.jsx";
import "./App.css";

function App() {
  const { fetchWeatherData } = useContext(WeatherContext);

  useEffect(() => {
    fetchWeatherData("Buenos Aires"); // ciudad por defecto
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌤️ Weather App</h1>
        <SearchBar />
        <TemperatureToggle />
      </header>
      <main>
        <CurrentWeather />
        <HourlyForecast />
        <DailyForecast />
        <CityWeather />
      </main>
    </div>
  );
}

export default App;
