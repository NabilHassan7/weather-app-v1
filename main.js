//
import config from "./config.js";

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
    const cityName = document.querySelector('search-box input').value;

    // Checking for empty input
    if(cityName === " "){
        return;
    }
})

