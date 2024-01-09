import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./utills/getRandomNumber";
import LocationCard from "./Components/LocationCard";
import ResidentCard from "./Components/ResidentCard";

function App() {
  const locationID = getRandomNumber(126);
  const [inputValue, setInputValue] = useState(locationID); //LocationID es el primer valor inicial porque debe mostrar un numero aleatorio
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, getLocation, hasError] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [inputValue]);

  // console.log(location);

  const inputLocation = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputLocation.current.value);
  };

  // console.log(inputValue);

  return (
    <div className="padre_container">
      <div className="img_rick"></div>
      <form className="input_container" onSubmit={handleSubmit}>
        <input className="input_value" ref={inputLocation} type="text" />
        <button>Search</button>
      </form>

      {hasError ? (
        <h2>❌Hey! you must to provide an id from 1 to 126 😖</h2>
      ) : (
        <>
          <LocationCard location={location} />
          <div className="resident_container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
