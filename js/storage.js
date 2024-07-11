export function loadPreferences() {
    const city = localStorage.getItem('city') || 'Paris';
    return { city };
}

export function savePreferences(preferences) {
    localStorage.setItem('city', preferences.city);
}