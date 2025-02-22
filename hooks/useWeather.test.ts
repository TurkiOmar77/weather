import { renderHook, act, waitFor } from "@testing-library/react";
import { useWeather } from "../hooks/useWeather";
import { fetchWeather } from "../services/weatherService";
import { weatherData } from "../types/weatherType";

jest.mock("../services/weatherService");

const mockFetchWeather = fetchWeather as jest.MockedFunction<typeof fetchWeather>;

describe("useWeather Hook", () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it("should fetch and return weather data successfully", async () => {
    const mockWeatherData: weatherData = {
      name: "Mukalla",
      sys: { country: "YE" },
      weather: [{ description: "Sunny", icon: "01d" }],
      main: { temp: 30, humidity: 40 },
      wind: { speed: 3 },
    };

    
    mockFetchWeather.mockResolvedValue(mockWeatherData);

    const { result } = renderHook(() => useWeather("Mukalla"));

    
    await waitFor(() => expect(result.current.weather).toEqual(mockWeatherData));

    expect(result.current.error).toBeNull();
  });

  it("should handle errors when fetching weather fails", async () => {
    
    mockFetchWeather.mockRejectedValue(new Error("City not found"));

    const { result } = renderHook(() => useWeather("InvalidCity"));

    await waitFor(() => expect(result.current.error).toBe("Please make sure to enter the city name correctly"));

    expect(result.current.weather).toBeNull();
  });

  it("should not fetch weather if the city is an empty string", async () => {
    const { result } = renderHook(() => useWeather(""));

    expect(result.current.weather).toBeNull();
    expect(result.current.error).toBeNull();
    expect(mockFetchWeather).not.toHaveBeenCalled();
  });
});
