import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState(" ");

  function showWeather(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "64f878d6a084c5e79fb3337a46b640d8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="submit"> Search </button>
    </form>
  );

  if (result) {
    return (
      <div>
        {form}
        <h2>{city}</h2>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C </li>
          <li>Description: {weather.description} </li>
          <li>Humidity: {weather.humidity}% </li>
          <li>Wind: {weather.wind}km/h </li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
