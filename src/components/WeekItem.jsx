import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherForecast } from '../redux/slices/weatherSlice';

const WeekItem = ({mintemp, maxtemp, avgtemp, date, icon, text, sunrise, sunset}) => {
  
    const forecast = useSelector((state) => state.weather.forecast)

    const minTemp = Math.floor(mintemp);
    const maxTemp = Math.floor(maxtemp);
    const temp = Math.floor(avgtemp)

    let date_string = date;
    let date_obj = new Date(date_string);
    const day_names = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const day_index = date_obj.getDay();
    const month_index = date_obj.getMonth();
    const day_number = date_obj.getDate();
    const month_name = month_names[month_index]
    const weekday_name = day_names[day_index];
    console.log(forecast)
    return (
        <div className="day-item">
            {
                forecast && (
                    <>
                        <div className="day-name">{weekday_name}</div>
                        <div className="day-date">{day_number} {month_name}</div>
                        <div className="day-weather"><img src={icon} alt="" /></div>
                        <div className="day-condition">{text}</div>
                        <div className="day-temperature">{temp} &#176; </div>
                        <div className="day-tempRange">{minTemp} &#176; -- {maxTemp} &#176; </div>
                        
                    </>
                )
            }
        </div>
    );
}

export default WeekItem;