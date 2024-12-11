const API_KEY="95f0bea88657445d9f975352241112";
const API_URL = 'https://api.weatherapi.com/v1/current.json';

async function getWeather() {
  const city = document.getElementById('city').value;
  const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}&aqi=no`);
  
  if (!response.ok) {
    alert('City not found!');
    return;
  }

  const data = await response.json();
  const weatherDetails = document.getElementById('weatherDetails');
  weatherDetails.innerHTML = `
    <p>Temperature: ${data.current.temp_c}°C</p>
    <p>Weather: ${data.current.condition.text}</p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Wind Speed: ${data.current.wind_kph} km/h</p>`;
  }