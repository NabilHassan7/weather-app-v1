// Declaring constants
const container = document.querySelector('.container');
const searchButton = document.querySelector('.search-box button');
const weatherPrimary = document.querySelector('.weather-primary');
const weatherSecondary = document.querySelector('.weather-secondary');
const errorPage = document.querySelector('.error-page');

// Search function on button click
searchButton.addEventListener('click', () =>{
    // APIKey
    const APIKey = config.SECRET_KEY;
    // Getting City name input from user
    const cityName = document.querySelector('.search-box input').value;

    // Checking for empty input
    if(cityName === " "){
        return;
    }

    // API call to receive weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            // Checking if Error response received to display error page
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherPrimary.style.display = 'none';
                weatherSecondary.style.display = 'none';
                errorPage.style.display = 'block';
                errorPage.classList.add('fadeIn');
                return;
            }

            // Adding fade in animatin to error page
            errorPage.style.display = 'none';
            errorPage.classList.remove('fadeIn');

            // Declaring varaibles for the weather display page
            const image = document.querySelector('.weather-primary img');
            const temperature = document.querySelector('.weather-primary .temperature');
            const description = document.querySelector('.weather-primary .description');
            const humidity = document.querySelector('.weather-secondary .humidity span');
            const wind = document.querySelector('.weather-secondary .wind span');

            // Image display depending on the current weather
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '';
                    break;

                case 'Rain':
                    image.src = '';
                    break;

                case 'Snow':
                    image.src = '';
                    break;

                case 'Clouds':
                    image.src = '';
                    break;

                case 'Haze':
                    image.src = '';
                    break;

                default:
                    image.src = '';
            }

            // HTML output for the received weather data
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            // Adding animation to weather display page
            weatherPrimary.style.display = '';
            weatherSecondary.style.display = '';
            weatherPrimary.classList.add('fadeIn');
            weatherSecondary.classList.add('fadeIn');
            container.style.height = '590px';
        });

})

