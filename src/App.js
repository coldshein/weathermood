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
                        <div className='meteo-block'>
                            <div className='meteo-row'>
                                <div className='meteo-item'>
                                    <div className='meteo-info'>
                                        <h2 className='subtitle'>Humidity</h2>
                                        <div className='meteo-icon'><img className='' src="/assets/images/humidity.svg" /></div>
                                    </div>
                                    <div className='meteo-params'>
                                        64 %
                                    </div>
                                </div>
                                <div className='meteo-item'>
                                    <div className='meteo-info'>
                                        <h2 className='subtitle'>Wind</h2>
                                        <div className='meteo-icon'><img className='' src="/assets/images/wind.svg" /></div>
                                    </div>
                                    <div className='meteo-params'>
                                        12 kmph
                                    </div>
                                </div>
                                <div className='meteo-item'>
                                     <div className='meteo-info'>
                                        <h2 className='subtitle'>UV Index</h2>
                                        <div className='meteo-icon'><img className='' src="/assets/images/uv.svg" /></div>
                                    </div>
                                    <div className='meteo-params'>
                                        1
                                    </div>
                                </div>
                                <div className='meteo-item'>
                                <div className='meteo-info'>
                                        <h2 className='subtitle'>Pressure</h2>
                                        <div className='meteo-icon'><img className='' src="/assets/images/pressure.svg" /></div>
                                    </div>
                                    <div className='meteo-params'>
                                        1030 mBar
                                    </div>
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

