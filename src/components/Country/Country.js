import React from 'react';
import './Country.css';

const Country = (props) => {
  const { name, capital, population, flags, region } = props.country;
  return (
    <div className="card">
      <h1>{name.common}</h1>

      <p>Capital: {capital}</p>
      <p>Region: {region}</p>
      <p>Population: {population}</p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
