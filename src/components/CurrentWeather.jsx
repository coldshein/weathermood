import React from 'react'
import axios from 'axios';
import WeatherBlock from './WeatherBlock';

const CurrentWeather = () => {
    const [weather, setWeather] = React.useState([]);
  const getWeather = async () => {
    const {data} = await axios.get('https://api.weatherapi.com/v1/current.json?key=a1cbaba0df854e36916203726232302&q=London&aqi=no');
    await setWeather(data);
    console.log(data)
  }
  React.useEffect(() => {
    getWeather();
    
  },[])
    return (
        <div className="weather-wrapper">
            <div className="weather-inner">
                <h2 className="subtitle"><img src="/assets/images/temperature.svg" alt="" className="calendar" /> Today's
                    forecast</h2>
                <WeatherBlock
                    city={weather.location?.name}
                    state={weather.location?.country}
                    temperature={weather.current?.feelslike_c}
                    img={weather.current?.condition?.icon}
                    time={weather.location?.localtime}
                />
            </div>
        </div>
    );
}

export default CurrentWeather;