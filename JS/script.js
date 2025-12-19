const inputBox     = document.querySelector('.search-bar input');
const searchBtn    = document.querySelector('.search-bar button');
const weatherIcon  = document.querySelector('.wheater-icon');
const weather      = document.querySelector('.wheater');
const errorMessage = document.querySelector('.error');

searchBtn.addEventListener('click', () =>{
    fetchWeather(inputBox.value);
})

async function fetchWeather(city) {

    try {
        const apiKey = '1d136da791776b0ed6a0b358dcc7d8c7';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
        
        const response = await fetch(url);

        if (!response.ok){
            throw new Error('Ciudad no encontrada');
        }
        const data = await response.json();

        console.log(data);

        updateWeatherUI(data);
    }
    catch (error) {
        console.error('Error fetching weather data:', error.message);
        weather.style.display = 'none';
        errorMessage.style.display = 'block';
    }

}

function updateWeatherUI(data) {
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind-speed').innerHTML = `${data.wind.speed}km/h`;

    const weatherIcons = {
        Clear: 'assets/clearSkyDay.png',
        Rain: 'assets/rainDay.png',
        Snow: 'assets/snow.png',
        Clouds: 'assets/fewCloudsDay.png',
    }

    weather.src = weatherIcons[data.weather[0].main] || 'assets/rainDay.png';

    weather.style.display = 'block';
    errorMessage.style.display = 'none';
}
