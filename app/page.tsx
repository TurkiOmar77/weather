"use client";

import SearchBar from "@/components/searchBar";
import WeatherCard from "@/components/WeatherCard";
import { useWeather } from "@/hooks/useWeather";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [city, setCity] = useState("Mukalla");
  const { weather, error } = useWeather(city);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-indigo-600 text-white p-6">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🌤️ Weather App
      </motion.h1>

      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SearchBar onCahnge={setCity} />
      </motion.div>

      {error && (
        <motion.h1 
          className="mt-4 text-red-600 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ⚠️ {error}
        </motion.h1>
      )}

      {weather && (
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WeatherCard weather={weather} />
        </motion.div>
      )}
    </div>
  );
}
