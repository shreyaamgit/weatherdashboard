import axios from "axios";

// You'll need to replace this with your actual API key
const API_KEY = "1fa2582546710694cd179d5d8a3e3589";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
