import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    current: [],
    forecast: [],
    searchValue: 'Kyiv',
    cities: [],
}

export const fetchCurrentWeather = createAsyncThunk(
    'weather/fetchCurrentWeather',
    async (city, {dispatch}) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&units=metric&appid=38e3a5f5afb6196d6ee28a5520484f2d`
        );
        dispatch(setCurrent(response.data));
        console.log(response.data)
    }
)

export const fetchCities = createAsyncThunk(
    'weather/fetchWeatherForecast',
    async (query, {dispatch}) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/find?q=${query}&units=metric&appid=38e3a5f5afb6196d6ee28a5520484f2d`
          );
          dispatch(setCities(response.data.list));
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
        },
        setCities: (state, action) => {
            state.cities = action.payload
        }
    }
})

export const {setCurrent, setForecast, setSearchValue, setCities} = weatherSlice.actions

export default weatherSlice.reducer