const apiKey = '62d1aca4f285dc54adcb43eae2e8fa42';

const form = document.querySelector('form');
const cityInput = document.querySelector('#city');
const weatherInfo = document.querySelector('.weather-info');

console.log(cityInput);
async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            weatherInfo.innerHTML = `<p>City not found. Please try again. </p>`;
        } else {

            const weatherDetails = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            `;
            weatherInfo.innerHTML = weatherDetails;

        }
    } catch (error) {
        weatherInfor.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
    }
});