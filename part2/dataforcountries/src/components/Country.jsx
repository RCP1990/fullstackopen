import React from "react";

const Country = ({ country, index, onClick }) => {
  return (
      <div key={index}>
        <p>{country.name.common}</p>
        <button onClick={() => onClick([country])}>show</button>
      </div>
  );
};
export default Country;
