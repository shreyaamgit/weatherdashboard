import { useState } from "react";
import {
  fetchWeatherData,
  fetchForecastData,
} from "../services/weatherService";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem("recentSearches");
    return saved ? JSON.parse(saved) : [];
  });

  const getWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const weather = await fetchWeatherData(city);
      setWeatherData(weather);

      // Add to recent searches
      const updatedSearches = [
        city,
        ...recentSearches.filter((s) => s.toLowerCase() !== city.toLowerCase()),
      ].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

      return weather;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch weather data");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getForecast = async (city) => {
    try {
      const forecast = await fetchForecastData(city);
      setForecastData(forecast);
      return forecast;
    } catch (err) {
      console.error("Failed to fetch forecast:", err);
      return null;
    }
  };

  const refreshWeather = async () => {
    if (weatherData) {
      await getWeather(weatherData.name);
    }
  };

  return {
    weatherData,
    forecastData,
    loading,
    error,
    recentSearches,
    getWeather,
    getForecast,
    refreshWeather,
  };
};

export default useWeather;
