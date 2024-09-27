import * as model from "./model";
import outputView from "./views/outputView";
import inputsView from "./views/inputsView";

const controlDisplayWeatherData = async function (url) {
  try {
    const data = await model.displayWeatherData(url);
    console.log(data);
    const { weather, main, wind } = data;
    // console.log(weather);
    // console.log(main);
    // console.log(wind);
    outputView.renderWeather(data);
  } catch (error) {
    console.log(error.message);
    alert(`⛔ Error fetching weather data: ${error.message}`);
  }
};

const controlUseCity = function () {
  const city = inputsView.cityInput.value;
  if (!city) {
    alert(`⛔ Please enter city name ❗`);
    return;
  }
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${model.apiKey}&units=metric&lang=${model.userLang}`;

  controlDisplayWeatherData(apiUrl);
};

const controlUseCoords = function () {
  console.log("button clicked");
  const lat = inputsView.latInput.value;
  const lon = inputsView.lonInput.value;

  if (!lat || !lon) {
    alert("⛔ Please enter latitude and longitude coordinates ❗");
    return;
  }
  if (isNaN(lat) || isNaN(lon)) {
    alert("⛔ Please enter valid coordinates ❗");
    return;
  }

  const coordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${model.apiKey}&units=metric&lang=${model.userLang}`;

  controlDisplayWeatherData(coordsUrl);
};

const controlUseCurrent = async function () {
  try {
    const coords = await model.getCoords();
    const { latitude: lat, longitude: lon } = coords;
    const coordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${model.apiKey}&units=metric&lang=${model.userLang}`;
    controlDisplayWeatherData(coordsUrl);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

function init() {
  inputsView.addHandlerUseCity(controlUseCity);
  inputsView.addHandlerUseCoords(controlUseCoords);
  inputsView.addHandlerUseCurrent(controlUseCurrent);
  inputsView.addHandlerClearInput();
  inputsView.addHandlerClearCoords();
  inputsView.addHandlerClearCityInput();
}

init();
