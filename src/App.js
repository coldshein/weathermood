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
                        <input type="text" className="search" id="search" placeholder="Enter city name..."/>
                        <label htmlFor="search">
                            <img src="/assets/images/search.svg" alt=""/>
                        </label>
                    </div>
                    <button className="top-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <CurrentWeather/>
                <WeekForecast/>
            </div>
        </div>
    </section>
  );
}

export default App;

