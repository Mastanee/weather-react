import React, { useState } from "react";

import axios from "axios";

import "./styles.css";

export default function App() {
  let [city, setCity] = useState();
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);

    setWeather({
      temperature: Math.round(response.data.main.temp - 270),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&`;
    axios.get(apiUrl).then(showWeather);
  }

  function showCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="search"
        placeholder="Enter a city..."
        onChange={showCity}
      />
      <input className="button" type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div className="App">
        {form}
        <ul>
          <li>Temperature :{weather.temperature} °C</li>
          <li>Description :{weather.description}</li>
          <li>Humidity :{weather.humidity} %</li>
          <li>Wind :{weather.wind} km/h</li>

          <img src={weather.icon} alt="weather icon" />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
