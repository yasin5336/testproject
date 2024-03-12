var cityInput = document.querySelector("#cityInput");
var addInput = document.querySelector("#add");
var cityOutput = document.querySelector("#cityoutput");
var descriptionOutput = document.querySelector("#description");
var tempOutput = document.querySelector("#temp");
var windOutput = document.querySelector("#wind");
const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

function convertToCel(value) {
  return (value - 273).toFixed(1);
}

async function getweather() {
  var weatherResult = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`
    )
  ).json();
  setInfo(weatherResult);
}

function setInfo(data) {
  var cityName = data["name"];
  var description = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
  var wind = data["wind"]["speed"];

  cityOutput.innerHTML = ` ${cityName} : نام شهر `;
  descriptionOutput.innerHTML = ` ${description} : وضعیت هوا `;
  tempOutput.innerHTML = `C دما : ${convertToCel(temp)} `;
  windOutput.innerHTML = `km/h سرعت باد : ${wind}`;
}

addInput.addEventListener("click", getweather);
