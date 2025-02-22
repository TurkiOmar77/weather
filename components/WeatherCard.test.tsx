import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherCard from "../components/WeatherCard";
import { weatherData } from "../types/weatherType";

const mockWeather: weatherData = {
  name: "Riyadh",
  sys: { country: "SA" },
  weather: [{ description: "clear sky", icon: "01d" }],
  main: { temp: 30, humidity: 50 },
  wind: { speed: 3.5 },
};

describe("WeatherCard Component", () => {
  it("renders correctly with given weather data", () => {
    render(<WeatherCard weather={mockWeather} />);

    expect(screen.getByText("Riyadh, SA")).toBeInTheDocument();
    expect(screen.getByText("clear sky")).toBeInTheDocument();
    expect(screen.getByText("30°C")).toBeInTheDocument();
    expect(screen.getByText(/Humidity: 50%/)).toBeInTheDocument();
    expect(screen.getByText(/Wind: 3.5 m\/s/)).toBeInTheDocument();
  });

  it("displays the correct weather icon", () => {
    render(<WeatherCard weather={mockWeather} />);

    const weatherIcon = screen.getByAltText("Weather Icon");
    expect(weatherIcon.getAttribute("src")).toMatch(/openweathermap.*01d/); 
  });
});
