const WeatherCard = ({ data, onRefresh }) => {
  if (!data) return null;

  const {
    name,
    main: { temp, humidity },
    weather,
    wind,
    sys: { country },
  } = data;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{country}</p>
        </div>
        <button
          onClick={onRefresh}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200"
        >
          ↻
        </button>
      </div>

      <div className="flex items-center mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
          className="w-16 h-16"
        />
        <div>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">
            {Math.round(temp)}°C
          </p>
          <p className="text-gray-600 dark:text-gray-300 capitalize">
            {weather[0].description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Humidity</p>
          <p className="font-semibold dark:text-white">{humidity}%</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Wind Speed</p>
          <p className="font-semibold dark:text-white">
            {(wind.speed * 3.6).toFixed(1)} km/h
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
