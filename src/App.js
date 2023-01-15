import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [singleCountry, setsingleCountry] = useState("");
  const [cities, setcities] = useState([]);
  const [city, setcity] = useState("");
  const [submit, setsubmit] = useState(false);

  const fetchCountries = async () => {
    try {
      const returnedData = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );

      setCountries(returnedData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = (passedCountry) => {
    // so that if we change the country the display message goes away
    setsubmit(false);
    setcity(null);
    setsingleCountry(passedCountry);
    const findCities = countries.find((i) => i.country === passedCountry);
    setcities(findCities.cities);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const submitHandler = (e) => {
    {
      singleCountry && city && setsubmit(true);
    }
  };

  return (
    <div className="App">
      <h1>select your city</h1>
      <div className="middlerow">
        {countries && (
          <select
            onChange={(e) => fetchCities(e.target.value)}
            value={singleCountry}
          >
            <option disabled selected hidden>
              select country
            </option>
            {countries.map((i) => (
              // country is used to destructure the data that api gave
              <option
                key={`${i.country}-${Math.random() * 100}`}
                value={i.country}
              >
                {i.country}
              </option>
            ))}
          </select>
        )}
        {cities && (
          <select onChange={(e) => setcity(e.target.value)} value={city}>
            <option disabled hidden selected>
              select city
            </option>
            {cities.map((i) => (
              <option key={`${i}-${Math.random() * 1000}`}>{i}</option>
            ))}
          </select>
        )}
        <button onClick={submitHandler}>submit</button>
      </div>
      {submit && (
        <div>
          <h2>
            The country is {singleCountry} and the city is {city}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
