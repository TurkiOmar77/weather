"use client"
import { fetchWeather } from "../services/weatherService"
import { weatherData } from "../types/weatherType"
import { useEffect, useState } from "react"

export const useWeather = (city: string) => {
    const [weather, setWeather] = useState<weatherData | null>(null)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getWeather = async () => {
            try{
                const data = await fetchWeather(city)
                setWeather(data)
                setError(null)

            }catch(error){
                setError("filed to fetch data ")

            }

        }
        if (city) {
            getWeather()
        }
    },[city])

    return {weather , error}

}
