import { weatherData } from "../types/weatherType"

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_WEATHER_API_URL;

export const fetchWeather = async (city: string): Promise<weatherData> => {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    if (!response.ok) {
        throw new Error("failed to fetch weather data !!!! test") // يوجد تعديل
    }
    return response.json()

}