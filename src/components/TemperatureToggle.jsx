import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function TemperatureToggle() {
  const { unit, toggleUnit } = useContext(WeatherContext);

  return (
    <button onClick={toggleUnit} className="toggle-btn">
      Cambiar a {unit === "metric" ? "°F" : "°C"}
    </button>
  );
}

export default TemperatureToggle;
