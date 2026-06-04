const KEY = "3cd6a6c5c92c4811b55101605260406";

const searchBtn = document.querySelector("#search-btn");
const temperature = document.querySelector("#temperature");
const city = document.querySelector("#city");
const condition = document.querySelector("#condition");
const date = document.querySelector("#date");
const weatherIcon = document.querySelector("#weather-icon");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");

async function getWeather(cityName) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cityName}`);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    displayWeather(data);
  } catch (err) {
    alert(err.message);
  }
}

const displayWeather = (data) => {
  const { current, location } = data;
  city.textContent = location.name;
  temperature.textContent = current.temp_c + "°C";
  weatherIcon.src = "https:" + current.condition.icon; // prepend https
  condition.textContent = current.condition.text;
  date.textContent = location.localtime;
  humidity.textContent = current.humidity + "%";
  windSpeed.textContent = current.wind_kph + " km/h";
};

searchBtn.addEventListener("click", () => {
  const inputCity = document.querySelector("input[type='text']").value.trim();
  if (inputCity) {
    getWeather(inputCity);
  } else {
    alert("Please enter a city name");
  }
});
 
document.getElementById("location-btn").addEventListener("click",()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude,longitude}=position.coords;
      getWeather(`${latitude},${longitude}`)
    })
  }
})