const apiKey = '9d880c3ce326af403bdd2ddd97de2772'; // Use your API key from OpenWeatherMap here

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${apiKey}&units=metric`);
        const weatherData = await response.json();
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        displayWeather(temperature, description);
    } catch (error) {
        console.error('Error occurred while fetching weather data:', error);
    }
}

function displayWeather(temperature, description) {
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    
    temperatureElement.textContent = `Temperature: ${temperature} °C`;
    descriptionElement.textContent = `Description: ${description}`;
}

fetchWeather(); // Fetch weather data when the page loads
