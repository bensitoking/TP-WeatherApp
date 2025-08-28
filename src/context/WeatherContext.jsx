import React, { createContext, useState, useEffect } from "react";
import { getWeatherData, getForecastData } from "../api.js";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [unit, setUnit] = useState("metric"); 
  const [city, setCity] = useState("Buenos Aires");

  const fetchWeatherData = async (cityName, selectedUnit = unit) => {
    try {
      setCity(cityName);
      const weather = await getWeatherData(cityName, selectedUnit);
      const forecast = await getForecastData(cityName, selectedUnit);

      setCurrentWeather(weather);
      setHourlyForecast(forecast.list.slice(0, 8)); 
      setDailyForecast(forecast.list.filter((_, i) => i % 8 === 0).slice(0, 5));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    fetchWeatherData(city, newUnit);
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        hourlyForecast,
        dailyForecast,
        unit,
        city,
        fetchWeatherData,
        toggleUnit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};