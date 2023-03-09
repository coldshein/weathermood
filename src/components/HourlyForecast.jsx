import React from 'react'
import { useSelector } from 'react-redux';
import HourlyWeather from './HourlyWeather';

const HourlyForecast = () => {
    const forecast = useSelector((state) => state.weather.forecast)
    const hourlyforecast = forecast.map((item) => item.hour);
    return ( 
        <div className="hourly-forecast">
            <div className="hourly-inner">
                <h2 className="subtitle">Hourly forecast</h2>
                <div className="hourly-row">
                    {
                       hourlyforecast[0] && hourlyforecast[0].map((item, index) =>(
                        <HourlyWeather 
                        key={index} 
                        time={item.time}
                        icon={item.condition?.icon}
                        temp={item.temp_c}
                        />
                       ) )
                    }
                </div>
            </div>
        </div>
     );
}
 
export default HourlyForecast;