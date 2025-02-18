'use client';

import { weatherData } from '../types/weatherType';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

interface WeatherCardProps {
  weather: weatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`;

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-600 to-indigo-900 text-white rounded-3xl shadow-2xl p-8 w-full max-w-md mx-auto flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="p-4 bg-white bg-opacity-20 rounded-full shadow-lg">
        <Image src={iconUrl} width={130} height={130} alt="Weather Icon" priority />
      </div>

      <h1 className="text-3xl font-bold mt-4 drop-shadow-md">
        {weather?.name}, {weather?.sys.country}
      </h1>

      <p className="text-lg mt-2 italic text-gray-200">{weather?.weather[0].description}</p>

      <h2 className="text-6xl font-extrabold mt-3 drop-shadow-lg">{Math.round(weather?.main.temp)}°C</h2>

      <div className="flex justify-between w-full mt-6 px-8 text-gray-300 text-lg">
        <p className="flex flex-col items-center">
          💧 <span className="mt-1">Humidity: {weather?.main.humidity}%</span>
        </p>
        <p className="flex flex-col items-center pl-2">
          🌬️ <span className="mt-1">Wind: {weather?.wind.speed} m/s</span>
        </p>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
