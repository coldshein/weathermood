import React from 'react'
import axios from 'axios'
import WeekItem from './WeekItem';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from 'react-redux';
import { setHourly, setShowHourly } from '../redux/slices/weatherSlice';

const WeakWeather = () => {
    const dispatch = useDispatch();
    const handleItem = (id) => {
        dispatch(setHourly(id))
        console.log(id);
    }
    const showHourlyForecast = () => {
        dispatch(setShowHourly(true))
    }
    const Handle = (id) => {
        handleItem(id);
        showHourlyForecast();
    }
    const {current, forecast, location} = useSelector((state) => state.weather)

    return (
        <div className="week-weather">
            <div className="week-inner">
                <h2 className="subtitle">
                    <img src="/assets/images/calendar.svg" alt="calendar-icon"
                        className="calendar" /> Week forecast for {location.name}</h2>
                <div className="week-row">
                    <Swiper
                        pagination={false}
                        slidesPerView={1}
                        className="mySwiper">
                        {
                            forecast && forecast.map((item, index) => (
                                <SwiperSlide key={index}
                                onClick={() => Handle(index)}
                               >
                                    <WeekItem
                                    sunrise={item.astro?.sunrise}
                                    sunset={item.astro?.sunset}
                                    date={item.date}
                                    maxtemp={item.day?.maxtemp_c}
                                    mintemp={item.day?.mintemp_c}
                                    avgtemp={item.day?.avgtemp_c}
                                    icon={item.day?.condition?.icon}
                                    text={item.day?.condition?.text}
                                   
                                    
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