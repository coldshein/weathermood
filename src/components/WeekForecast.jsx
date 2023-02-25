import React from 'react'
import axios from 'axios'
import WeekItem from './WeekItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const WeakWeather = () => {
    const [forecast, setForecast] = React.useState([]);
    const getForecast = async () => {
        const { data } = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=a1cbaba0df854e36916203726232302&q=London&days=7&aqi=yes&alerts=no');
        await setForecast(data.forecast.forecastday);
        console.log(forecast)
    }
    React.useEffect(() => {
        getForecast();
    }, [])
    return (
        <div className="week-weather">
            <div className="week-inner">
                <h2 className="subtitle">
                    <img src="/assets/images/calendar.svg" alt="calendar-icon"
                        className="calendar" /> Week forecast</h2>
                <div className="week-row">
                    <Swiper 
                    pagination={true} 
                    modules={[Pagination]}
                    slidesPerView={4}
                    className="mySwiper">
                        {
                            forecast ? forecast.map((item, index) => (
                                <SwiperSlide>
                                    <WeekItem
                                        key={index}
                                        min={item.day?.mintemp_c}
                                        max={item.day?.maxtemp_c}
                                        condition={item.day?.condition?.text}
                                        icon={item.day?.condition?.icon}
                                        avgTemp={item.day?.avgtemp_c}
                                        date={item.date}
                                        sunrise={item.astro?.sunrise}
                                        sunset={item.astro?.sunset}
                                    />
                                </SwiperSlide>
                            )) : ''
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default WeakWeather;