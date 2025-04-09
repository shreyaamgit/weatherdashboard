const ForecastSection = ({ data }) => {
  if (!data) return null;

  // Group forecast data by day (simplified)
  const dailyForecasts = data.list
    .filter((item, index) => index % 8 === 0)
    .slice(0, 5);

  return (
    <div className="mt-4">
      <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {dailyForecasts.map((forecast, index) => {
          const date = new Date(forecast.dt * 1000);
          const day = date.toLocaleDateString("en-US", { weekday: "short" });

          return (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded p-2 text-center"
            >
              <p className="text-xs font-medium">{day}</p>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt={forecast.weather[0].description}
                className="w-10 h-10 mx-auto"
              />
              <p className="text-sm font-bold">
                {Math.round(forecast.main.temp)}°C
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastSection;
