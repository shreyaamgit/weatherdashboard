const ErrorMessage = ({ message }) => {
  return (
    <div
      className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded relative mt-4"
      role="alert"
    >
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">
        {message || "Something went wrong. Please try again."}
      </span>
    </div>
  );
};

export default ErrorMessage;
