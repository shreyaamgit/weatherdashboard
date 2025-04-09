const RecentSearches = ({ searches, onSelect }) => {
  if (!searches.length) return null;

  return (
    <div className="my-4">
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
        Recent Searches
      </h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelect(city)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
