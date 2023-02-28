import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    current: [],
    forecast: [],
    searchValue: 'Kiev',
}

export const fetchCurrentWeather = createAsyncThunk(
    'weather/fetchCurrentWeather',
    async (searchValue, {dispatch}) => {
        // const {data} = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a1cbaba0df854e36916203726232302&q=${searchValue}&aqi=no`);
        dispatch(setCurrent(data));
    }
)

export const fetchWeatherForecast = createAsyncThunk(
    'weather/fetchWeatherForecast',
    async (_, {dispatch}) => {
        // const {data} = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=a1cbaba0df854e36916203726232302&q=London&days=7&aqi=yes&alerts=no');
       dispatch(setForecast(data.forecast.forecastday))
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        setCurrent: (state, action) => {
            state.current = action.payload;
        },
        setForecast: (state,action) => {
            state.forecast = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    }
})

export const {setCurrent, setForecast, setSearchValue} = weatherSlice.actions

export default weatherSlice.reducer