export class Weather {
    constructor(data) {
        const { name, main, weather, wind } = data;
        this.city = name;
        this.temperature = main.temp;
        this.condition = weather[0].description;
        this.humidity = main.humidity;
        this.windSpeed = wind.speed;
    }
}