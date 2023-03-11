import React from 'react'
import { useSelector } from 'react-redux';
import HourlyWeather from './HourlyWeather';

const HourlyForecast = () => {
    const {forecast, hour, showHourly} = useSelector((state) => state.weather)
    const hourlyforecast = forecast.map((item) => item.hour);
    return ( 
        <div className={`hourly-forecast ${showHourly ? 'active' : null}`}>
            <h2 className="subtitle"> <img className="calendar" src="/assets/images/hour.svg" alt="" /> Hourly forecast</h2>
            <div className="hourly-inner">
                
                <div className="hourly-row">
                    {
                       hourlyforecast[hour] && hourlyforecast[hour].map((item, index) =>(
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