const city = document.querySelector("#weather div:first-child");
const weather = document.querySelector("#weather div:last-child");
const weatherIcon = weather.querySelector("img");
const weatherTemp = weather.querySelector("span");
const API_KEY = "a159cba2988763cb31ad215c908c54d4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      const icon = data.weather[0].icon;
      weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      weatherTemp.innerText = `${data.main.temp}℃ ${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
