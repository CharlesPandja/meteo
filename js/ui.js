export function updateUI(weather) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `
        <div class="weather-card">
            <h2>${weather.city}</h2>
            <p>Temperature: ${weather.temperature}°C</p>
            <p>Condition: ${weather.condition}</p>
            <p>Humidité: ${weather.humidity}%</p>
            <p>Vent: ${weather.windSpeed} m/s</p>
        </div>
    `;
}