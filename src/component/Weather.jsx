import { WEATHER_URL, KEY} from '../utils/api';

import { useState, useEffect} from 'react';
import WeatherCard from './WeatherCard';

const Weather = ({currentLocation}) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if(currentLocation){
          findData(currentLocation);
        }
    },[currentLocation]);

    const findData = async (currentLocation) => {
        const data = await fetch(`${WEATHER_URL}&q=${currentLocation}&appid=${KEY}`);
        const json = await data.json();
        console.log(json);
        setWeatherData(json);
    }

    if(weatherData === null) return;

  return (
    <WeatherCard data={weatherData}/>
  )
}

export default Weather;