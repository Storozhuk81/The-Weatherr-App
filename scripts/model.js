export const apiKey = "55fde17189b32d9982f3f1a57bd9fc99";
export const userLang = navigator.language;

export async function getCoords() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    console.log(position.coords);
    return position.coords;
  } catch (error) {
    throw new Error(`⛔ Error getting coordinates: ${error.message}`);
  }
}

export async function displayWeatherData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`⛔ HTTP Request error❗ Status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
    alert(`⛔ Error fetching weather data: ${error.message}`);
  }
}
