import { useState, useEffect } from 'react';
import './App.css'

import Filter from './components/Filter'
import Countries  from './components/Countries';

import countryService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [filtered, setFiltered] = useState("");

  const hook = () => {
    countryService
    .getAll()
    .then(response => {
      setAllCountries(response.data);
    })
    .catch(error => console.error(error));
  };

  useEffect(hook, []);

  const filterItems = (e) => {
    if (e.target.value.length >= 0) {
      setFiltered(e.target.value);
      
      const filteredCountries = allCountries.filter((x) => {
        if (e.target.value === "") {
          return x;
        } else if (
          x.name.common.toLowerCase().includes(e.target.value.toLowerCase()) ||
          x.name.official.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          return x;
        }
      })
      setCountries(filteredCountries)
    }
  };

  return (
    <div>
      <Filter onChange={filterItems} filtered={filtered} />
      <Countries countries={countries} filtered={filtered} onClick={setCountries} />
    </div>
  )
}

export default App
