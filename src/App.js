import axios from 'axios';
import React from 'react';
import './App.scss';
import WeatherBlock from './components/WeatherBlock';




function App() {
  const [weather, setWeather] = React.useState([]);
  const [dayOfWeek, setDayOfWeek] = React.useState('');
  const getWeather = async () => {
    const {data, headers} = await axios.get('https://api.weatherapi.com/v1/current.json?key=a1cbaba0df854e36916203726232302&q=London&aqi=no');
    setWeather(data);
    setDayOfWeek(headers);
    console.log(dayOfWeek)
  }
  
  React.useEffect(() => {
    getWeather();
  },[])
  return (
    <section className="app-wrapper">
        <div className="container">
            <div className="app-inner">
                <div className="top-block">
                    <h1>coldshein weather app</h1>
                    <div className="search-wrapper">
                        <input type="text" className="search" id="search" placeholder="Enter city name..."/>
                        <label for="search">
                            <img src="/assets/images/search.svg" alt=""/>
                        </label>
                    </div>
                    <button className="top-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
                <div className="weather-wrapper">
                    <div className="weather-inner">
                        <h2 className="subtitle"><img src="/assets/images/temperature.svg" alt="" className="calendar"/> Today's
                            forecast</h2>
                        <WeatherBlock 
                        city={weather.location?.name}
                        state={weather.location?.country}
                        temperature={weather.current?.feelslike_c}
                        img={weather.current?.condition?.icon}
                        time={weather.location?.localtime}
                        />
                    </div>
                </div>
                <div className="week-weather">
                    <div className="week-inner">
                        <h2 className="subtitle"> <img src="/assets/images/calendar.svg" alt="calendar-icon"
                                className="calendar"/> Week forecast</h2>
                        <div className="week-row">
                            <div className="day-item">
                                <div className="day-name">mon</div>
                                <div className="day-weather"><img src="/assets/images/rain-1.svg" alt=""/></div>
                                <div className="day-temperature">16 &#176;</div>
                            </div>
                            <div className="day-item">
                                <div className="day-name">tue</div>
                                <div className="day-weather"><img src="/assets/images/rain-1.svg" alt=""/></div>
                                <div className="day-temperature">16 &#176;</div>
                            </div>
                            <div className="day-item">
                                <div className="day-name">wed</div>
                                <div className="day-weather"><img src="/assets/images/rain-1.svg" alt=""/></div>
                                <div className="day-temperature">16 &#176;</div>
                            </div>
                            <div className="day-item">
                                <div className="day-name">thu</div>
                                <div className="day-weather"><img src="/assets/images/rain-1.svg" alt=""/></div>
                                <div className="day-temperature">16 &#176;</div>
                            </div>
                            <div className="day-item">
                                <div className="day-name">fri</div>
                                <div className="day-weather"><img src="/assets/images/rain-1.svg" alt=""/></div>
                                <div className="day-temperature">16 &#176;</div>
                            </div>
                            <div className="day-item">
                                <div className="day-name">sat</div>
                                <div className="day-weather"><img src="/assets/images/rain-1.svg" alt=""/></div>
                                <div className="day-temperature">16 &#176;</div>
                            </div>
                            <div className="day-item">
                                <div className="day-name">sun</div>
                                <div className="day-weather"><img src="/assets/images/rain-1.svg" alt=""/></div>
                                <div className="day-temperature">16 &#176;</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
  );
}

export default App;

