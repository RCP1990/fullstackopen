import React from "react";
import CountryFull from "./CountryFull";
import Country from "./Country";

const Countries = ({ countries, filtered, onClick }) => {
  if (countries.length > 10 && filtered.length > 0) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length == 1) {
    return (
      <CountryFull country={countries[0]}/>
    );
  } else if (countries.length < 10) {
    return (
      <>
        {countries.map((country, i) => (
          <Country country={country} key={i} onClick={onClick}/>
        ))}
      </>
    );
  }
};

export default Countries;
