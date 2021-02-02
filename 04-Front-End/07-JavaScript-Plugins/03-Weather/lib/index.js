// TODO: Write your JS code in here
const key = config.SECRET_API_KEY;
const form = document.querySelector("#form");
const city = document.querySelector("#inputCity");
const cityName = document.querySelector("#city-name");
const currentDate = document.querySelector("#current-date");
const weatherDescription = document.querySelector("#weather-description");
const degree = document.querySelector("#degree");
const d = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const locationIcon = document.querySelector('.weather-icon');

// create function to deliver hour and minute in AM PM
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const fetchWeather = () => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=metric`)
    .then(response => response.json())
    .then((data) => {
      cityName.innerHTML = "";
      cityName.insertAdjacentHTML('afterbegin', `<h1>Weather in ${city.value}</h1>`);
      currentDate.innerHTML = "";
      currentDate.insertAdjacentHTML('afterbegin', `<h4 id="current-date"> ${d.getFullYear()}, ${months[d.getMonth()]} ${d.getDate()}, ${formatAMPM(new Date())} </h4>`);
      weatherDescription.innerHTML = "";
      weatherDescription.insertAdjacentHTML('afterbegin', `<p id="weather-description">${data.weather[0].description}</p>`);
      degree.innerHTML = "";
      degree.insertAdjacentHTML('afterbegin', `<p id="weather-description">${data.main.temp} <span>&#176;</span>C</p>`);
      const icon = data.weather[0].icon;
      locationIcon.innerHTML = "";
      locationIcon.insertAdjacentHTML('afterbegin', `<img src="icons/${icon}.png"></img>`);
    });
};


form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchWeather();
});
