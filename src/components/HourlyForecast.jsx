import React from 'react'
import { useSelector } from 'react-redux';
import HourlyWeather from './HourlyWeather';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const HourlyForecast = () => {
    const { forecast, hour, showHourly } = useSelector((state) => state.weather)
    const hourlyforecast = forecast.map((item) => item.hour);
    return (
        <div className='hourly-forecast'>
            <h2 className="subtitle"> <img className="calendar" src="/assets/images/hour.svg" alt="" /> Hourly forecast</h2>
            <div className="hourly-inner">

                <div className="hourly-row">
                    <Swiper
                        pagination={false}
                        slidesPerView={6}
                        className="mySwiper">
                        {
                            hourlyforecast[hour] && hourlyforecast[hour].map((item, index) => (
                                <SwiperSlide key={index}>
                                    <HourlyWeather
                                        key={index}
                                        time={item.time}
                                        icon={item.condition?.icon}
                                        temp={item.temp_c}
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

export default HourlyForecast;