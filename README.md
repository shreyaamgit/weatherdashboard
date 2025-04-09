
# Weather Dashboard

A responsive web application that provides current weather information and a 5-day forecast for any city using the OpenWeatherMap API.

## Live Demo

View the live application:
- http://weatherdashboard-h3x6.vercel.app/

## Features

- Search for weather by city name
- Display current weather conditions (temperature, humidity, wind speed)
- Show 5-day weather forecast
- Recent search history (last 5 searches)
- Dark/Light theme toggle
- Refresh button to update weather data
- Responsive design for all device sizes

## Tech Stack

- **Frontend Framework**: React.js
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios for API requests
- **Development Environment**: CodeSandbox

## Dependencies

### Core Dependencies
- react
- react-dom
- react-scripts

### API Integration
- axios (for making HTTP requests to OpenWeatherMap API)

### Styling
- tailwindcss
- postcss
- autoprefixer

### Optional UI Enhancements
- react-icons (for icons).
- framer-motion (for animations).

## Viewing on CodeSandbox

1. Visit the [CodeSandbox project](https://codesandbox.io/p/github/shreyaamgit/weatherdashboard).
2. You can fork the sandbox to make your own changes.
3. The preview should automatically show the running application.

## Local Setup Instructions

If you want to run this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/shreyaamgit/weatherdashboard.git
   cd weatherdashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your OpenWeatherMap API key:
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open `http://localhost:3000` to view the app in your browser.

## Installation Commands

```bash
# Create React App
npx create-react-app weather-dashboard
cd weather-dashboard

# Install API dependencies
npm install axios

# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p

# Optional UI enhancements
npm install react-icons # For icons
npm install framer-motion # For animations
```

## Configuration Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## API Integration Details

This project uses the OpenWeatherMap API:

- **Current Weather API**: `https://api.openweathermap.org/data/2.5/weather`
- **5-Day Forecast API**: `https://api.openweathermap.org/data/2.5/forecast`

API Key:
- Free tier API key from [OpenWeatherMap](https://openweathermap.org/api)
- Rate limits: 60 calls/minute, 1,000,000 calls/month

## Tailwind Configuration

Make sure to configure your tailwind.config.js file to include your source files:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


## License
This project is open source and available under the [MIT License](LICENSE).

