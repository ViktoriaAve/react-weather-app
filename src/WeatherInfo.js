import React from "react";
import FormattedDate from "./FormattedDate";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <Container>
        <h1 className="text-strong"> {props.data.name}</h1>
        <p className="text-capitalize"> <FormattedDate date={props.data.date} /> {props.data.description}</p>
         
        <Container>
          <Row>
            <Col>
            <p>
          <img src={props.data.icon} alt="Weather Icon" className="weather-icon-today" />
          <span className="text-strong">{Math.round(props.data.temperature)}</span> <span className="unit">°C</span>
          </p>
        </Col>
        <Col>
        <ul>
          <li>Humidity: {props.data.humidity}% </li>
          <li>Wind: {props.data.wind}km/h </li>
        </ul>
        </Col>
        </Row>
        </Container>

        <Container className="weatherForecast">
          <Row>
            <Col>
              <p>Mon</p>
              <img src={props.data.icon} alt="Weather Icon" />
              <p>10°</p>
             <p className="text-capitalize">{props.data.description}</p>
            </Col>
            
          </Row>
        </Container>
        </Container>
    </div>
    );
}