import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    current: [],
    forecast: [],
    cities: [],
}

export const fetchCurrentWeather = createAsyncThunk(
    'weather/fetchCurrentWeather',
    async (city, {dispatch,rejectWithValue}) => {
       try{
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&units=metric&appid=38e3a5f5afb6196d6ee28a5520484f2d`
        );
        dispatch(setCurrent(response.data));
       } catch(error){
         return rejectWithValue(error.message);
       }
        
    }
)

export const fetchCities = createAsyncThunk(
    'weather/fetchWeatherForecast',
    async (query, {dispatch, rejectWithValue}) => {
        try{
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/find?q=${query}&units=metric&appid=38e3a5f5afb6196d6ee28a5520484f2d`
              );
              dispatch(setCities(response.data.list));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchForecast = createAsyncThunk(
    'weather/fetchForecast',
    async (city, {dispatch}) => {
        const response = await axios.get(`api.openweathermap.org/data/2.5/forecast/daily?q=${city.name},${city.country}&cnt=1&appid=38e3a5f5afb6196d6ee28a5520484f2d`)
        dispatch(setForecast(response));
        console.log(response);
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
        setCities: (state, action) => {
            state.cities = action.payload
        }
    }
})

export const {setCurrent, setForecast, setSearchValue, setCities} = weatherSlice.actions

export default weatherSlice.reducer