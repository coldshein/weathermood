import axios from 'axios';
import React from 'react';
import './App.scss';
import WeekForecast from './components/WeekForecast';
import WeatherBlock from './components/WeatherBlock';
import WeekItem from './components/WeekItem';
import CurrentWeather from './components/CurrentWeather';




function App() {

    return (
        <section className="app-wrapper">
            <div className="container">
                <div className="app-inner">
                    <div className="top-block">
                        <h1>coldshein weather app</h1>
                        <div className="search-wrapper">
                            <input type="text" className="search" id="search" placeholder="Enter city name..." />
                            <label htmlFor="search">
                                <img src="/assets/images/search.svg" alt="" />
                            </label>
                        </div>
                        <button className="top-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <CurrentWeather />
                    <div className='bottom-block'>
                        <WeekForecast />
                        <div className='air-condition'>
                            <h2 className='subtitle'><img className="calendar" src='/assets/images/air.svg' />Meteo</h2>
                            <div className='air-info'>
                                <div className='meteo-params'>Wind gust: <br/> <span>19.4 kph</span></div>
                                <div className='meteo-params'>Humidity: <br/> <span>81%</span></div>
                                <div className='meteo-params'>Pressure: <br/> <span>1021</span></div>
                                <div className='meteo-params'>Precipitation: <br/> <span>0</span></div>
                                <div className='meteo-params'>Wind speed: <br/> <span>5.6 kph</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;

