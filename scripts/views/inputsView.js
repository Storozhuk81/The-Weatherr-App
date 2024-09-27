class InputsView {
  cityInput = document.getElementById("city");
  latInput = document.getElementById("lat");
  lonInput = document.getElementById("lon");
  useCity = document.getElementById("use-city");
  useCoords = document.getElementById("use-coords");
  useCurrent = document.getElementById("use-current");

  addHandlerUseCity(handler) {
    this.useCity.addEventListener("click", handler);
  }

  addHandlerUseCoords(handler) {
    this.useCoords.addEventListener("click", handler);
  }

  addHandlerUseCurrent(handler) {
    this.useCurrent.addEventListener("click", handler);
  }

  addHandlerClearInput() {
    this.useCurrent.addEventListener("click", () => {
      const inputs = [this.cityInput, this.latInput, this.lonInput];
      inputs.forEach((el) => (el.value = ""));
    });
  }

  addHandlerClearCoords() {
    this.cityInput.addEventListener("input", () => {
      console.log(this.cityInput.value);
      this.latInput.value = "";
      this.lonInput.value = "";
    });
  }

  addHandlerClearCityInput() {
    [this.latInput, this.lonInput].forEach((inputEl) =>
      inputEl.addEventListener("input", () => (this.cityInput.value = ""))
    );
  }
}

export default new InputsView();
