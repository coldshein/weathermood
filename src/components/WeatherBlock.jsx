import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from '../redux/slices/weatherSlice';

const WeatherBlock = () => {
    const dispatch = useDispatch();
    const { current, location } = useSelector((state) => state.weather);

    const epoch = location.localtime_epoch;

    const date = new Date(epoch * 1000);

    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });


    if (!current) {
        return 'Loading...'
    }
    return (
        <div className="weather-block">
            <div className="weather-info">
                <div className="weather-condition"> 
                    {current.condition?.text}
                </div>
                <div className="temperature">{current.temp_c} &#176;</div>
                <div className="feelslike">Feels like {current.feelslike_c} &#176;</div>
                <div className="city">{location.name}, {location.country}</div>
            </div>
            <div className="day-info">
                <div className="current-icon"><img src={current.condition?.icon} alt="" /></div>
                <div className="day">{dayOfWeek}</div>
            </div>
        </div>
    );
}

export default WeatherBlock;