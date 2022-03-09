import React, { useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Search() {
  let [city, setCity] = useState(" ");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState(" ");

  function showWeather(response) {
    setResult(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    console.log(response.data.name);
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
      <button type="submit" className="btn-search"> Search </button>
      <button type="submit" className="btn-current"> Current </button>
    </form>
  );



  if (result) {
    return (
      <div>
        <Container>
        {form}
        <h1 className="text-strong"> {weather.name}</h1>
        <p>{weather.description}</p>
        
        <Container>
          <Row>
            <Col>
            <p>
          <img src={weather.icon} alt="Weather Icon" className="weather-icon-today" />
          <span className="text-strong">{Math.round(weather.temperature)}</span> <span className="unit">°C</span>
          </p>
        </Col>
        <Col>
        <ul>
          <li>Humidity: {weather.humidity}% </li>
          <li>Wind: {weather.wind}km/h </li>
        </ul>
        </Col>
        </Row>
        </Container>

        <Container className="weatherForecast">
          <Row>
            <Col>
              <p>Mon</p>
              <img src={weather.icon} alt="Weather Icon" />
              <p>10°</p>
             <p>{weather.description}</p>
            </Col>
            <Col>
              <p>Mon</p>
              <img src={weather.icon} alt="Weather Icon" />
              <p>10°</p>
             <p>{weather.description}</p>
            </Col>
            <Col>
              <p>Mon</p>
              <img src={weather.icon} alt="Weather Icon" />
              <p>10°</p>
             <p>{weather.description}</p>
            </Col>
            <Col>
              <p>Mon</p>
              <img src={weather.icon} alt="Weather Icon" />
              <p>10°</p>
             <p>{weather.description}</p>
            </Col>
            <Col>
              <p>Mon</p>
              <img src={weather.icon} alt="Weather Icon" />
              <p>10°</p>
             <p>{weather.description}</p>
            </Col>
          </Row>
        </Container>
        </Container>
      </div>
    );
  } else {
    return form;
  }
}
