import React, { useState } from 'react';
import axios from 'axios';
import DateAndTime from "./Components/DateAndTime";
import SearchInput from './Components/SearchInput';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('Error');

  const api = {
    key: "9f12bf41d59e05b86cd8d5c90f24a139",
    base: "http://api.openweathermap.org/data/2.5/"
  }

  const search = e => {
    if (e.key === "Enter") {
      axios.get(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(data => {
          setWeather(data.data);
          console.log(data.data);
          setQuery('');
        })
    }
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

          </div>
        ) : ('')}
      </main>
    </div>
  )
}

export default App;
