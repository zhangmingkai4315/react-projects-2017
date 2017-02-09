import axios from 'axios';

const API_KEY='42fddc50169323201fbd027e6c1cd9c3';
const WEATHER_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(cityName){
    let url =`${WEATHER_URL}&q=${cityName},cn`;
    const request = axios.get(url);
    return {
        type : FETCH_WEATHER,
        payload: request
    };
}

