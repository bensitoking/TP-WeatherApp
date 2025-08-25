import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import "../styles/Weather.css";

function SearchBar() {
  const { fetchWeatherData } = useContext(WeatherContext);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeatherData(query);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Buscar ciudad..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default SearchBar;
