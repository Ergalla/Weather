let API_key = "ff25614840d2ef04dba40a2eff0884db";
let city = "Kartaly";
let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${API_key}`;

let days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среду",
  "Четверг",
  "Пятницу",
  "Субботу",
];

axios.get(url).then((res) => {
  document.querySelector(".OneDay").innerHTML =
    days[new Date(res.data.list[0].dt_txt).getDay()];
  document.querySelector(".TwoDay").innerHTML =
    days[new Date(res.data.list[8].dt_txt).getDay()];
  document.querySelector(".ThreeDay").innerHTML =
    days[new Date(res.data.list[16].dt_txt).getDay()];
  document.querySelector(".FourDay").innerHTML =
    days[new Date(res.data.list[24].dt_txt).getDay()];
  document.querySelector(".FiveDay").innerHTML =
    days[new Date(res.data.list[32].dt_txt).getDay()];

  document.querySelector(".OneTemp").innerHTML = res.data.list[0].main.temp;
  document.querySelector(".OneFeels").innerHTML =
    res.data.list[0].main.feels_like;
  document.querySelector(".OneWind").innerHTML = Math.round(
    res.data.list[0].wind.speed / 3.6
  );
  document.querySelector(".OneWdescription").innerHTML =
    res.data.list[0].weather[0].description[0].toUpperCase() +
    res.data.list[0].weather[0].description.slice(1);
  document.querySelector(".OneHumidity").innerHTML =
    res.data.list[0].main.humidity;

  document.querySelector(".TwoTemp").innerHTML = res.data.list[8].main.temp;
  document.querySelector(".TwoFeels").innerHTML =
    res.data.list[8].main.feels_like;
  document.querySelector(".TwoWind").innerHTML = Math.round(
    res.data.list[8].wind.speed / 3.6
  );
  document.querySelector(".TwoWdescription").innerHTML =
    res.data.list[8].weather[0].description[0].toUpperCase() +
    res.data.list[8].weather[0].description.slice(1);
  document.querySelector(".TwoHumidity").innerHTML =
    res.data.list[8].main.humidity;

  document.querySelector(".ThreeTemp").innerHTML = res.data.list[16].main.temp;
  document.querySelector(".ThreeFeels").innerHTML =
    res.data.list[16].main.feels_like;
  document.querySelector(".ThreeWind").innerHTML = Math.round(
    res.data.list[16].wind.speed / 3.6
  );
  document.querySelector(".ThreeWdescription").innerHTML =
    res.data.list[16].weather[0].description[0].toUpperCase() +
    res.data.list[16].weather[0].description.slice(1);
  document.querySelector(".ThreeHumidity").innerHTML =
    res.data.list[16].main.humidity;

  document.querySelector(".FourTemp").innerHTML = res.data.list[24].main.temp;
  document.querySelector(".FourFeels").innerHTML =
    res.data.list[24].main.feels_like;
  document.querySelector(".FourWind").innerHTML = Math.round(
    res.data.list[24].wind.speed / 3.6
  );
  document.querySelector(".FourWdescription").innerHTML =
    res.data.list[24].weather[0].description[0].toUpperCase() +
    res.data.list[24].weather[0].description.slice(1);
  document.querySelector(".FourHumidity").innerHTML =
    res.data.list[24].main.humidity;

  document.querySelector(".FiveTemp").innerHTML = res.data.list[32].main.temp;
  document.querySelector(".FiveFeels").innerHTML =
    res.data.list[32].main.feels_like;
  document.querySelector(".FiveWind").innerHTML = Math.round(
    res.data.list[32].wind.speed / 3.6
  );
  document.querySelector(".FiveWdescription").innerHTML =
    res.data.list[32].weather[0].description[0].toUpperCase() +
    res.data.list[32].weather[0].description.slice(1);
  document.querySelector(".FiveHumidity").innerHTML =
    res.data.list[32].main.humidity;

  document.getElementById("Onecity").innerHTML = res.data.city.name;
  document.getElementById("Twocity").innerHTML = res.data.city.name;
  document.getElementById("Threecity").innerHTML = res.data.city.name;
  document.getElementById("Fourcity").innerHTML = res.data.city.name;
  document.getElementById("Fivecity").innerHTML = res.data.city.name;
});
