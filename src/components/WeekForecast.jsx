import React from 'react'
import axios from 'axios'
import WeekItem from './WeekItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from 'react-redux';
import { setHourly } from '../redux/slices/weatherSlice';

const WeakWeather = () => {
    const dispatch = useDispatch();
    const handleItem = (id) => {
        dispatch(setHourly(id))
    }


    const { forecast, location } = useSelector((state) => state.weather)

    return (
        <div className="week-weather">
            <div className="week-inner">
                <h2 className="subtitle">
                    <img src="/assets/images/calendar.svg" alt="calendar-icon"
                        className="calendar" /> 3-day forecast for {location.name}</h2>
                <div className="week-row">
                    {
                        forecast && forecast.map((item, index) => (
                            <WeekItem
                                key={item.date}
                                sunrise={item.astro?.sunrise}
                                sunset={item.astro?.sunset}
                                date={item.date}
                                maxtemp={item.day?.maxtemp_c}
                                mintemp={item.day?.mintemp_c}
                                avgtemp={item.day?.avgtemp_c}
                                icon={item.day?.condition?.icon}
                                text={item.day?.condition?.text}
                                id={index}
                                handleItem={handleItem}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default WeakWeather;