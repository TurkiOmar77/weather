"use client"
import SearchBar from "@/components/searchBar";
import { useWeather } from "@/hooks/useWeather";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("Mukalla")
  const { weather } = useWeather(city)
  return (
    <div>
      <SearchBar onCahnge={setCity} />
      <h1>{weather?.name}</h1>
      <h1>{weather?.sys.country}</h1>
      <h1>{weather?.main.temp}</h1>
      <h1>{weather?.weather[0].description}</h1>
      <h1>{city}</h1>
    </div>
  );
}
