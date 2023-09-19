"use strict"

searchButton.addEventListener('click', searchWeather);

"use strict";

function searchWeather() {
  loadingText.style.display = 'block';
  weatherBox.style.display = 'none';
  var cityName = input.value.trim();

  if (cityName.length === 0) {
    return alert('Please enter a city name!');
  }

  var API_Key = '768700af0f9bfade6b0cc4aa2a454fc4';
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_Key}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      var weatherData = new Weather(cityName, data.weather[0].description);
      weatherData.temperature = data.main.temp;
      
      // Update the DOM with weather information
      weatherCity.textContent = weatherData.cityName;
      weatherDescription.textContent = weatherData.description;
      weatherTemperature.textContent = weatherData.temperature;
      
      // Display the weather box and hide loading text
      weatherBox.style.display = 'block';
      weatherBox.style.alignitems = 'center';
      
      weatherCity.style.color = '#e2e2e2';

      weatherDescription.style.fontsize = '2.5rem';
      weatherDescription.style.margintop = '1rem';

      loadingText.style.display = 'none';
    })
    .catch(error => {
      alert('Something went wrong: ' + error.message);
      // Hide loading text on error
      loadingText.style.display = 'none';
    });
}








































/*function searchWeather(){
    loadingText.style.display ='block';
    weatherBox.style.display ='none';
    var cityName = input.value;
    if(cityName.trim().length == 0){
       return alert('please enter a city name !');
    }
    var http = new XMLHttpRequest();
    var API_Key = '768700af0f9bfade6b0cc4aa2a454fc4';
    var url = `https://api.openweathermap.org/data/2.5/weather?q= `+ cityName + '&units=metric&appid=' + API_Key;

    var method = 'GET';
    http.open(method, url);
    http.onreadystatechange = function (){
        if(http.readyState === XMLHttpRequest.DONE && http.status == 200){
            var data = JSON.parse(http.responseText);
           
            var weatherData = new Weather(cityName, data.weather[0].description);
            weatherData.temperature = data.main.temp;
            console.log(weatherData);
        }else if(http.readyState === XMLHttpRequest.DONE){
            alert('Something went wrong !');
        }
    };
    http.send();
}


function updateWeather(weatherData){
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    loadingText.style.display ='none';
    weatherBox.style.display ='block';
}*/