const apiKey = 'b754b6da46337583e7e96f887e5519a7';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('city');
const weatherForm = document.getElementById('weatherForm');
const weatherResult = document.getElementById('weatherResult');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityInput.value;

  fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const { name, main: { temp, humidity }, weather: [{ description }] } = data;
      weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Description: ${description}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherResult.innerHTML = 'An error occurred. Please try again.';
    });
});
