import inputsView from "./inputsView";
class OutputView {
  parentEl = document.getElementById("output");

  clearHtml(element) {
    element.innerHTML = "";
  }

  renderWeather(data) {
    const city = inputsView.cityInput.value;
    console.log(city);
    const { weather, main, wind, visibility } = data;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const html = `
      <section class="weather">
        <p><img class = 'weather-icon' alt = "weather icon" src = ${iconUrl}></p>
        <p>City: <span class="city">${city ? city : "Unknown"}</span></p>
        <p>Temperature: <span class="temp">${main.temp}</span>°C</p>
        <p>Humidity: <span class="humidity">${main.humidity}</span>%</p>
        <p>Pressure: <span class="pressure">${main.pressure}</span> mmHg</p>
        <p>Description: <span class="description">${weather[0].description}</span></p>
        <p>Wind direction: <span class="wind">${wind.deg}</span>°</p>
        <p>Wind speed: <span class="wind">${wind.speed} </span>m/s</p>
        <p>Visibility: <span class="visibility">${visibility} </span>m</p>
      </section>
  `;
    this.clearHtml(this.parentEl);
    this.parentEl.insertAdjacentHTML("beforeend", html);
  }
}

export default new OutputView();
