
import { updateUI } from './ui.js';
import { Weather } from './weather.js';

const apiKey = '09a5bd0d505fc3ed36afd28e37dfd374'; 
const baseUrl = 'https://api.openweathermap.org/data/2.5/';

export async function getWeather(city) {
    try {
        const response = await fetch(`${baseUrl}weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const weather = new Weather(data);
        console.log(data);
        console.log(weather);
        updateUI(weather);
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('weather').textContent = 'Error fetching weather data';
    }
}