

const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.input');
const weatherContainer = document.querySelector('.weatherContainer');

const ApiKey = "34de3fe77e46d41c2f6ca74aac7f967f";

weatherForm.addEventListener('submit', async event => {

    event.preventDefault();

    const city = cityInput.value;


    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeather(weatherData);
        } catch (error) {
            console.log(error);
            displayError('Enter a City Name');
        }
    }
    else {
        displayError('Enter a City Name');
    }


})

async function getWeatherData(city) {
    try {

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Could not fetch weather data");
        }

        return response.json();


    } catch (error) {
        console.error(error);
    }

}

function displayWeather(weatherData) {
    console.log(weatherData);

    const city = `${weatherData.name}`;
    const temp = `${(weatherData.main.temp - 273).toFixed(1)} °C`;
    const humidity = `Humidity: ${weatherData.main.humidity}%`;
    const description = `${weatherData.weather[0].description}`;
    const weatherId = `${weatherData.weather[0].id}`;

    weatherContainer.textContent = '';
    weatherContainer.style.display = 'flex';

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('h1');
    const humidityDisplay = document.createElement('p');
    const descriptionDisplay = document.createElement('p');
    const emojiDisplay = document.createElement('p');

    cityDisplay.textContent = city;
    tempDisplay.textContent = temp;
    humidityDisplay.textContent = humidity;
    descriptionDisplay.textContent = description;
    emojiDisplay.textContent = getEmojiWeather(weatherId);


    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descriptionDisplay.classList.add('descriptionDisplay');
    emojiDisplay.classList.add('emojiDisplay')

    weatherContainer.appendChild(cityDisplay);
    weatherContainer.appendChild(tempDisplay);
    weatherContainer.appendChild(humidityDisplay);
    weatherContainer.appendChild(descriptionDisplay);
    weatherContainer.appendChild(emojiDisplay)


}

function getEmojiWeather(weatherId) {
    switch (true) {
        case (200 <= weatherId && weatherId < 300):
            return '⛈️';
        case (300 <= weatherId && weatherId < 400):
            return '🌧️';
        case (500 <= weatherId && weatherId < 600):
            return '🌨️';
        case (600 <= weatherId && weatherId < 700):
            return '❄️';
        case (700 <= weatherId && weatherId < 800):
            return '💨';
        case (weatherId == 800):
            return '☀️';
        case (801 <= weatherId && weatherId < 810):
            return '☁️';
        default:
            return '❓';
    }
}

function displayError(message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;

    errorDisplay.classList.add('errorDisplay');

    weatherContainer.textContent = '';
    weatherContainer.style.display = 'flex';
    weatherContainer.appendChild(errorDisplay);
}
