import React from 'react'

const WeatherBlock = ({city, state, temperature,img, time, feelslike}) => {
    const celsium = Math.floor(temperature)
    const feels = Math.floor(feelslike);

    let localtime;
    if (time){
        localtime = time.slice(11,16);
    } else {
        return 'loading...'
    }
    return (
        <div className="weather-block">
            <div className="weather-info">
                <div className="sunshine">
                    <img src={img} alt="" />
                </div>
                <div className="temperature">{celsium} &#176;</div>
                <div className="feelslike">Feels like {feels} &#176;</div>
                <div className="city">{city}, {state}</div>
            </div>
            <div className="day-info">
                <div className="time">{localtime}</div>
                <div className="day">Sunset time, Monday</div>
            </div>
        </div>
    );
}

export default WeatherBlock;