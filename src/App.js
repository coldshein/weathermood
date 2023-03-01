import axios from 'axios';
import React, { useRef } from 'react';
import './App.scss';
import WeekForecast from './components/WeekForecast';
import WeatherBlock from './components/WeatherBlock';
import WeekItem from './components/WeekItem';
import CurrentWeather from './components/CurrentWeather';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from './redux/slices/weatherSlice';
import debounce from 'lodash.debounce';



function App() {
    const searchValue = useSelector((state) => state.weather.searchValue);
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch();


    const [query, setQuery] = React.useState('');
    const [city, setCity] = React.useState([]);
    const [showCities, setShowCities] = React.useState(false);
    const searchCities = async (query) => {
        const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=2rAPo1eTSkYOE6kYz2dHKmfmvOXbKvfK&q=${query}`);
        setCity(response.data);
    }

    const handleInputChange = (event) => {
        const query = event.target.value;
        setQuery(query);
        if (query.length > 2) {
            searchCities(query);
            setShowCities(true);
        } else {
            setShowCities(false);
        }
    };

    const cityRef = useRef();

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if(cityRef.current && !event.path.includes(cityRef.current)){
                setShowCities(false);
            }
        }
        document.body.addEventListener('click', handleClickOutside);
    },[])

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
                                                city.map((city) => (
                                                    <li key={city.key}>{city.LocalizedName}, {city.Country?.LocalizedName}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
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

