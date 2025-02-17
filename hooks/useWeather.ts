"use client"
import { fetchWeather } from "../services/weatherService"
import { weatherData } from "../types/weatherType"
import { useEffect, useState } from "react"

export const useWeather = (city: string) => {
    const [weather, setWeather] = useState<weatherData | null>(null)

    useEffect(() => {
        const getWeather = async () => {
            const data = await fetchWeather(city)
            setWeather(data)
        }
        if (city) {
            getWeather()
        }
    },[city])

    return {weather}

}
