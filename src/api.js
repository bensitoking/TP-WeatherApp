const API_KEY = "8f0a7d4c7295a8e77fc49e87f8902eae"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (city, unit = "metric") => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}&lang=es`
  );
  return res.json();
};

export const getForecastData = async (city, unit = "metric") => {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}&lang=es`
  );
  return res.json();
};
