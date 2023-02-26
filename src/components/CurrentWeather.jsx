import React from 'react'
import axios from 'axios';
import WeatherBlock from './WeatherBlock';


const CurrentWeather = () => {
    return (
        <div className="weather-wrapper">
            <div className="weather-inner">
                <h2 className="subtitle"><img src="/assets/images/temperature.svg" alt="" className="calendar" /> Today's
                    forecast</h2>
                <WeatherBlock/>
            </div>
        </div>
    );
}

export default CurrentWeather;