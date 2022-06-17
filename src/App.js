import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div>
      {/* <LoadCountries /> */}
      <Countries />
    </div>
  );
}
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Load Countries:{countries.length}</h1>
      {countries.map((country) => (
        <Country name={country.name.common}></Country>
      ))}
    </div>
  );
}
function Country(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}
export default App;
