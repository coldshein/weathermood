import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCurrentWeather } from '../redux/slices/weatherSlice';

const WeatherBlock = () => {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.weather.current);
    
    const timezoneOffset = current.timezone; // змінна для часового поясу
    
    
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
    const index = 0
    return (
        <div className="weather-block">
            <div className="weather-info">
                <div className="weather-condition">

                    {
                        current.weather && current.weather[0].main
                    }
                </div>
                <div className="temperature">{current.main?.temp} &#176;</div>
                <div className="feelslike">Feels like {current.main?.feels_like} &#176;</div>
                <div className="city">{current.name}, {current.sys?.country}</div>
            </div>
            <div className="day-info">
                <div className="time"></div>
                <div className="day">Sunset time, {dayName}</div>
            </div>
        </div>
    );
}

export default WeatherBlock;