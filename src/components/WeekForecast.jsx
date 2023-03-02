import React from 'react'
import axios from 'axios'
import WeekItem from './WeekItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherForecast } from '../redux/slices/weatherSlice';

const WeakWeather = () => {
    const forecast = useSelector((state) => state.weather.forecast)
    const dispatch = useDispatch();


    return (
        <div className="week-weather">
            <div className="week-inner">
                <h2 className="subtitle">
                    <img src="/assets/images/calendar.svg" alt="calendar-icon"
                        className="calendar" /> Week forecast</h2>
                <div className="week-row">
                    <Swiper
                        pagination={false}
                        slidesPerView={4}
                        className="mySwiper">
                        {
                            forecast && forecast.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <WeekItem
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
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default WeakWeather;