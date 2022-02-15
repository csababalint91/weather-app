import React, { useState } from 'react';
import axios from 'axios';
import DateAndTime from "./Components/DateAndTime";
import SearchInput from './Components/SearchInput';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);


  const api = {
    key: "9f12bf41d59e05b86cd8d5c90f24a139",
    base: "http://api.openweathermap.org/data/2.5/"
  }



  const search = e => {
    if (e.key === "Enter") {
      axios.get(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(weatherData => {
          setWeather(weatherData.data);
          console.log(weatherData.data);
          setQuery('');
        }).catch(err => {
          alert("Please enter a valid city");
          setQuery('')
        })
    }
  }

  const getForecast = () => {
    axios.get(`${api.base}forecast?lat=${weather.coord.lon}&lon=${weather.coord.lon}&units=metric&appid=${api.key}`)
      .then(forecast => {
        setForecast(forecast.data);
        console.log(forecast.data)
      })
  }



  let tempsArray = [];
  if (Object.keys(forecast).length) {
    tempsArray = forecast.list.map((listItem, index) => {
      return (
        <React.Fragment key={index++}>
          <ul className='forecast-item'>
            <li>{listItem.main.temp}°</li>
            <li>{listItem.weather[0].main}</li>
            <li>Humidity : {listItem.main.humidity}%</li>
            <li>{listItem.dt_txt.slice(0, -3)}</li>
          </ul>
        </React.Fragment>
      )
    })
  }


  return (
    <div className="App">
      <main>
        <div className="search-box">
          <SearchInput search={search} setQuery={setQuery} query={query} />
        </div>
        {(typeof weather.main !== "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name} {weather.sys.country}</div>
              <DateAndTime />
            </div>
            <div className="weahter=box">
              <div className="temp">
                {Math.round(weather.main.temp)}°
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
            <button
              className="getForecast-btn"
              onClick={getForecast}
            >
              Get forecast
            </button>
            <div className='forecast-box'>
              {tempsArray.length > 0 ? tempsArray : ('')}
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  )
}

export default App;