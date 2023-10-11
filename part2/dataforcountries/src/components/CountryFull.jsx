import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
    const [weather, setWeather] = useState([])
    const api_key = import.meta.env.VITE_SOME_KEY

    const hook = () => {
        const params = {
          access_key: api_key,
          query: country.capital
        }

        axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        const apiResponse = response.data;
        setWeather([apiResponse])
      }).catch(error => {
        console.log(error);
    })
  };

  useEffect(hook, []);

  const capitalWeather = weather[0].current;

  return (
    <div>
    <h2>{country.name.common}</h2>
    <p>capital {country.capital}</p>
    <p>area {country.area}</p>
    <h3>languages:</h3>
    <ul>
      {Object.values(country.languages).map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
    <img src={country.flags.png} alt={country.flags.alt} />

    <h3>Weather in {country.capital}</h3>
    <p>temperature {capitalWeather.temperature} Celsius</p>
    <img src={capitalWeather.weather_icons[0]} alt={capitalWeather.weather_descriptions[0]}></img>
    <p>wind {capitalWeather.wind_speed} m/s</p>
  </div>
  );
};
export default Country;
