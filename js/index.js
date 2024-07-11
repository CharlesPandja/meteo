import { getWeather } from './api.js';
import { updateUI } from './ui.js';
import { loadPreferences } from './storage.js';
import { handleEvents } from './eventHandler.js';

document.addEventListener('DOMContentLoaded', async () => {
    const preferences = loadPreferences();
    await getWeather(preferences.city);
    handleEvents();
});

