"use client"
import SearchBar from "@/components/searchBar";
import WeatherCard from "@/components/WeatherCard";
import { useWeather } from "@/hooks/useWeather";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("Mukalla")
  const { weather,error } = useWeather(city)
  
  return (
    <div>
      <SearchBar onCahnge={setCity} />
      {error && <h1>{error}</h1>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
