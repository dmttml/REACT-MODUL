
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { usePosition } from 'use-position';
import HavaDurumu from './componenets/HavaDurumu';
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const App = ()  => {
  const [weather,setWeather] = useState ();
  const {latitude,longitude} = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try{
      const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        
        );
        setWeather(data);
    } catch {
      alert ("veri alinirken hata olustu.")
    };
  
  };
  useEffect(() => {
    latitude && longitude && getWeatherData (latitude,longitude)
  }, [latitude,longitude]);
  
console.log(latitude,longitude,weather,)
  return (
    <div className="App"><p>HAVA DURUMU</p>
    <HavaDurumu weather= {weather}/>
    </div>
  );
};

export default App;
