import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
  setLoaded(false);
}, [props.data.coordinates]);

function handleResponse(response) {
    setForecast(response.data.daily);
    
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col-2" key={index}>
                   <WeatherForecastDay data={dailyForecast}/>
                  </div>
              );
                } else {
                  return null;
                }
          })}
        </div>
      </div>
    );

  } else {
    const apiKey = `64f878d6a084c5e79fb3337a46b640d8`;
    let lat = props.data.coordinates.lat;
    let lon = props.data.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
 
}
}