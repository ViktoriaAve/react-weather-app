import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Search(props) {
  let [city, setCity] = useState(" ");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState(" ");
  

  function showWeather(response) {
    setWeather({
      name: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
    setResult(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "64f878d6a084c5e79fb3337a46b640d8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
  }

  function showCurrentweather(event) {
    event.preventDefault();
  navigator.geolocation.getCurrentPosition((position) => {
    let apiKey = "64f878d6a084c5e79fb3337a46b640d8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button  type="submit" className="btn-search"> Search </button>
      <button type="submit" className="btn-current" onClick={showCurrentweather}> Current </button>
    </form>
  );

  if (result) {
    return (
      <div>
        {form}
        <WeatherInfo data={weather}/>
        <WeatherForecast data={weather}/>
      </div>
    );
  } else {

    let apiKey = "64f878d6a084c5e79fb3337a46b640d8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

    return form;
  }
}