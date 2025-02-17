import { weatherData } from '../types/weatherType'
import Image from "next/image";

import React from 'react'
interface WeatherCardProps {
    weather: weatherData;
}
const  WeatherCard: React.FC<WeatherCardProps>  =  ({ weather }) => {
    const Icon = `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
    return (
        <div className="weather-card">
            <h1>{weather?.name}</h1>
            <h1>{weather?.sys.country}</h1>
            <h1>{weather?.main.temp}</h1>
            <h1>{weather?.weather[0].description}</h1>
            <Image src={Icon} width={50} height={50} alt="weatherIcon" priority />
        </div>
    );
}

export default WeatherCard;