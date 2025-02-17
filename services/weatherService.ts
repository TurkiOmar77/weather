import {weatherData} from "../types/weatherType"

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city : string) : Promise<weatherData> =>{
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    if(!response.ok){
        throw new Error("failed to fetch weather data !!!! from fetchWeatherService") // يوجد تعديل
    }
    return response.json()

}