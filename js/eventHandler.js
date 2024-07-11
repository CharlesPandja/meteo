import { getWeather } from './api.js';
import { savePreferences } from './storage.js';

export function handleEvents() {
    const cityForm = document.getElementById('cityForm');
    cityForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        await getWeather(city);
        savePreferences({ city });
    });

    const refreshButton = document.getElementById('refreshButton');
    refreshButton.addEventListener('click', async () => {
        const city = localStorage.getItem('city') || 'Paris';
        await getWeather(city);
    });
}