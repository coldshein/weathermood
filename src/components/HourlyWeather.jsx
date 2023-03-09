import React from 'react'

const HourlyWeather = ({ time, icon, temp }) => {

    let date = new Date(time);
    let hours = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let temperature = Math.floor(temp)
    return (
        <div className="hourly-item">
            <div className="hourly-time">{hours}</div>
            <div className="hourly-icon"><img src={icon} alt="" /></div>
            <div className="hourly-temp">{temperature}&#176;</div>
        </div>
    );
}

export default HourlyWeather;