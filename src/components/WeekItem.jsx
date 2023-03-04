import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherForecast } from '../redux/slices/weatherSlice';

const WeekItem = () => {
    const forecast = useSelector((state) => state.weather.forecast)
    if (!forecast) {
        return 'loading...'
    }
    const minTemp = Math.floor(forecast.day?.mintemp_c);
    const maxTemp = Math.floor(forecast.day?.maxtemp_c);
    const temp = Math.floor(forecast.day?.avgtemp_c)
    let date_string = forecast.date;
    let date_obj = new Date(date_string);
    const day_names = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const day_index = date_obj.getDay();

    const weekday_name = day_names[day_index];
    return (
        <div className="day-item">
            {
                forecast && (
                    <>
                        <div className="day-name">{weekday_name}</div>
                        <div className="day-date">2 February</div>
                        <div className="day-weather"><img src={forecast.day?.condition?.icon} alt="" /></div>
                        <div className="day-condition">{forecast.day?.condition?.text}</div>
                        <div className="day-temperature">{temp} &#176; </div>
                        <div className="day-tempRange">min {minTemp} &#176; - max {maxTemp} &#176; </div>
                        <div className="day-sunrise">Sunrise: {forecast.astro?.sunrise} <br /> Sunset: {forecast.astro?.sunset}</div>
                    </>
                )
            }
        </div>
    );
}

export default WeekItem;