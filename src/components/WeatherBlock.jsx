import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from '../redux/slices/weatherSlice';

const WeatherBlock = () => {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.weather.current);
    const searchValue = useSelector((state) => state.weather.searchValue);
    
    React.useEffect(() => {
        dispatch(fetchCurrentWeather(searchValue));
    }, [searchValue])

   

    const celsium = Math.floor(current.current?.temp_c)
    const feels = Math.floor(current.current?.feelslike_c);

    let time;
    if (current.location?.localtime) {
        time = current.location?.localtime.slice(11, 16);
    } else {
        return 'loading...'
    }
    
    return (
        <div className="weather-block">
            <div className="weather-info">
                <div className="sunshine">
                    <img src={current.current?.condition?.icon} alt="" />
                </div>
                <div className="temperature">{celsium} &#176;</div>
                <div className="feelslike">Feels like {feels} &#176;</div>
                <div className="city">{current.location?.name}, {current.location?.country}</div>
            </div>
            <div className="day-info">
                <div className="time">{time}</div>
                <div className="day">Sunset time, Monday</div>
            </div>
        </div>
    );
}

export default WeatherBlock;