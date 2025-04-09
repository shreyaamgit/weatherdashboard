import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import RecentSearches from "./components/RecentSearches";
import ForecastSection from "./components/ForecastSection";
import useWeather from "./hooks/useWeather";
import "./styles.css"; // Add this import statement

function App() {
  const [theme, setTheme] = useState("light");
  const {
    weatherData,
    forecastData,
    loading,
    error,
    recentSearches,
    getWeather,
    getForecast,
    refreshWeather,
  } = useWeather();

  const handleSearch = async (city) => {
    const weather = await getWeather(city);
    if (weather) {
      getForecast(city);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Set initial theme on component mount
  useEffect(() => {
    // Check if user has a preferred theme
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = userPrefersDark ? "dark" : "light";
    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen p-4 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-md mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Weather Dashboard
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </header>

        <main className="flex flex-col items-center">
          <SearchBar onSearch={handleSearch} />
          <RecentSearches searches={recentSearches} onSelect={handleSearch} />

          {loading && <Loader />}
          {error && <ErrorMessage message={error} />}

          {weatherData && !loading && (
            <div className="mt-6 w-full">
              <WeatherCard data={weatherData} onRefresh={refreshWeather} />
              <ForecastSection data={forecastData} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
