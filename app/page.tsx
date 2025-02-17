"use client"
import SearchBar from "@/components/searchBar";
import { useState } from "react";

export default function Home() {
  const [city,setCity] = useState("Mukalla")
  return (
    <div>
      <SearchBar onCahnge={setCity} /> 
      <h1>{city}</h1>
    </div>
  );
}
