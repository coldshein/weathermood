import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from '../redux/slices/weatherSlice';

const WeatherBlock = () => {
    const dispatch = useDispatch();
    const {current, location} = useSelector((state) => state.weather);
    
    const timezoneOffset = location.localtime_epoch; // змінна для часового поясу
    
    
    const currentDate = new Date(); // створюємо об'єкт дати
    
    // Отримуємо день тижня на основі часового поясу
    const dayOfWeek = new Date(currentDate.getTime() + timezoneOffset * 1000).getUTCDay();
    
    // Масив з назвами днів тижня
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Отримуємо назву дня тижня
    const dayName = daysOfWeek[dayOfWeek];
    


    if(!current){
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
                <div className="time"><img src={current.condition?.icon} alt="" /></div>
                <div className="day">Sunset time, {dayName}</div>
            </div>
        </div>
    );
}

export default WeatherBlock;