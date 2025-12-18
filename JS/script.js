const inputBox    = document.querySelector('.search-bar input');
const searchBtn   = document.querySelector('.search-bar button');
const weatherIcon = document.querySelector('.wheater-icon');
const weather     = document.querySelector('.wheater');
const error       = document.querySelector('.error');

async function fetchWeather(city) {
    const apiKey = '1d136da791776b0ed6a0b358dcc7d8c7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; 
     
    const response = await fetch(url);
    const data     = await response.json();

    console.log(data);

}

searchBtn.addEventListener('click', () =>{
    fetchWeather(inputBox.value);
})
