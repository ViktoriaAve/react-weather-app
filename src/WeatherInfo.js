import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <Container>
        <h1 className="text-strong">{props.data.name}</h1>
        <p className="text-capitalize"> <FormattedDate date={props.data.date} /> {props.data.description}</p>
         
        <Container>
          <Row>
            <Col className="col-7 todayWeatherTemp">
            <p>
            <span className="weather-icon-today"><WeatherIcon code={props.data} /></span>
            <span className="text-strong">
                {Math.round(props.data.temperature)}
        </span> 
        <span className="unit"> °C </span>
            </p>
        </Col>
        <Col>
        <ul>
          <li>Humidity: {props.data.humidity}% </li>
          <li>Wind: {Math.round(props.data.wind)} m/s </li>
        </ul>
        </Col>
        </Row>
        </Container>
        </Container>
    </div>
    );
}