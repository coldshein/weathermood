import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherForecast } from '../redux/slices/weatherSlice';

const WeekItem = ({max,min,avgTemp, date, icon, condition, sunrise, sunset}) => {
   
    const minTemp = Math.floor(min);
    const maxTemp = Math.floor(max);
    const temp = Math.floor(avgTemp)
    let date_string = date;
    let date_obj = new Date(date_string);
    const day_names = ['SUN', 'MON','TUE', 'WED', 'THU', 'FRI', 'SAT' ];
    const day_index = date_obj.getDay();

    const weekday_name = day_names[day_index];
    return (
        <div className="day-item">
            <div className="day-name">{weekday_name}</div>
            <div className="day-date">2 February</div>
            <div className="day-weather"><img src={icon} alt="" /></div>
            <div className="day-condition">{condition}</div>
            <div className="day-temperature">{temp} &#176; </div>
            <div className="day-tempRange">min {minTemp} &#176; - max {maxTemp} &#176; </div>
            <div className="day-sunrise">Sunrise: {sunrise} <br /> Sunset: {sunset}</div>
        </div>
    );
}

export default WeekItem;