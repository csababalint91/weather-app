import React, { useState } from 'react';
import axios from 'axios';
import DateAndTime from "./Components/DateAndTime";
import SearchInput from './Components/SearchInput';
import TemperatureIcon from './Components/TemperatureIcon';
import { faBoltLightning, faCloud, faCloudRain, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faSnowflake, faSun, faTemperatureEmpty, faTemperatureHalf, faTemperatureQuarter, faTemperatureLow, faTemperatureThreeQuarters, faUmbrella, faWind, faTemperatureHigh, faTemperatureFull, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const api = {
    key: "9f12bf41d59e05b86cd8d5c90f24a139",
    base: "http://api.openweathermap.org/data/2.5/"
  }

  const search = e => {
    if (e.key === "Enter") {
      axios.get(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(weatherData => {
          console.log(weatherData.data);
          setWeather(weatherData.data);
          console.log(weatherData.data);
          setQuery('');
        }).catch(err => {
          alert("Please enter a valid city");
          setQuery('')
        })
    }
  }



  const convertToHoursAndMins = unixTimestamp => {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (minutes < 10) {
      return `${hours}:0${minutes}`
    }
    return `${hours}:${minutes}`
  }


  return (
    <div className="app">
      <div className="search-box">
        <SearchInput search={search} setQuery={setQuery} query={query} />
      </div>
      {(typeof weather.main !== "undefined") ? (
        <div >
          <div className="location">
            {weather.name}, {weather.sys.country}
          </div>
          <div className="temp">
            {Math.round(weather.main.temp)}°
            <TemperatureIcon temp={weather.main.temp} />
          </div>
          <div className="weather">
            {weather.weather[0].description}
          </div>
          <DateAndTime />
          <div className="sunrise-sunset-box">
            <div className='sunrise-box'>
              <h3>Sunrise</h3>
              <div>
                {convertToHoursAndMins(weather.sys.sunrise)}
              </div>
            </div>
            <div className="sunset-box">
              <h3>Sunset</h3>
              <div>
                {convertToHoursAndMins(weather.sys.sunset)}
              </div>
            </div>
          </div>
        </div>
      ) : ('')}
    </div>
  )
}

export default App;