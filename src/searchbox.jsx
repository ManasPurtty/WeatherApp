import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Seachbox.css";
import { useState } from 'react';

export default function Searchboxes({updateinfo}) {
  const [city, setcity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8ec274ad350c27b3f28f9ecaaa15c190";

  const getWeatherInfo = async (city) => {
    
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      
      let jsonResponse = await response.json();
      console.log(jsonResponse);
     
    let result={
      city: city,
      temp:jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,
      tempMax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelsLike:jsonResponse.main.feels_like,
      weather:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
  };

  const handlechange = (evt) => {
    setcity(evt.target.value);
  };

  const handlesubmit = async(evt) => {
    evt.preventDefault();
    if (city) {
     let newinfo=await getWeatherInfo(city);
     updateinfo(newinfo); 
      setcity("");
    }
  };

  return (
    <div className="SearchBox">
      <h2>Search for the weather</h2>
      <form action="" onSubmit={handlesubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
