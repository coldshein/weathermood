import axios from 'axios';
import React, { useRef, useState } from 'react';
import './App.scss';
import WeekForecast from './components/WeekForecast';
import WeatherBlock from './components/WeatherBlock';
import WeekItem from './components/WeekItem';
import CurrentWeather from './components/CurrentWeather';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities, fetchCurrentWeather, fetchForecast, setCities, setSearchValue } from './redux/slices/weatherSlice';
import debounce from 'lodash.debounce';



function App() {
    const dispatch = useDispatch();
    const { current, cities, forecast } = useSelector((state) => state.weather)
    const cityRef = useRef();

    const [showCities, setShowCities] = React.useState(false);
    const [query, setQuery] = React.useState('');

    const handleInputChange = (event) => {
        const query = event.target.value
        setQuery(query)
        if (query.length > 2) {
            dispatch(fetchCities(query));
            
            setShowCities(true)
        } else {
            setShowCities(false);
        }
    }
    const handleCityClick = (city) => {
        setQuery(city.name)
        setCities([]);
        dispatch(fetchForecast(city));
        setShowCities(false);
    }

    React.useEffect(() => {
        const main = {
            name: 'Korosten',
        }
        dispatch(fetchForecast(main));
    }, [])

    return (
        <section className="app-wrapper">
            <div className="container">
                <div className="app-inner">
                    <div className="top-block">
                        <h1>coldshein weather app</h1>
                        <div className="search-wrapper">
                            <input
                                type="text"
                                className="search"
                                id="search"
                                placeholder="Enter city name..."
                                value={query}
                                onChange={handleInputChange}

                            />
                            {
                                showCities && (
                                    <div className='query-list' ref={cityRef}>
                                        <ul>
                                            {
                                                cities.map((city) => (
                                                    <li key={city.id} onClick={() => handleCityClick(city)}>
                                                        {city.name}, {city.country}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            <label htmlFor="search">
                                <img src="/assets/images/search.svg" alt="" />
                            </label>
                            <button className="top-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>

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
                                        {current.humidity} %
                                    </div>
                                </div>
                                <div className='meteo-item'>
                                    <div className='meteo-info'>
                                        <h2 className='subtitle'>Wind</h2>
                                        <div className='meteo-icon'><img className='' src="/assets/images/wind.svg" /></div>
                                    </div>
                                    <div className='meteo-params'>
                                        {current.wind_kph} kmph
                                    </div>
                                </div>
                                <div className='meteo-item'>
                                    <div className='meteo-info'>
                                        <h2 className='subtitle'>Visibility</h2>
                                        <div className='meteo-icon'><img className='' src="/assets/images/uv.svg" /></div>
                                    </div>
                                    <div className='meteo-params'>
                                        {current.vis_km}
                                    </div>
                                </div>
                                <div className='meteo-item'>
                                    <div className='meteo-info'>
                                        <h2 className='subtitle'>Pressure</h2>
                                        <div className='meteo-icon'><img className='' src="/assets/images/pressure.svg" /></div>
                                    </div>
                                    <div className='meteo-params'>
                                        {current.pressure_mb} mB
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

