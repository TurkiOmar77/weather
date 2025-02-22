import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "./page"; 
import { useWeather } from "@/hooks/useWeather";
import "@testing-library/jest-dom";

jest.mock("@/hooks/useWeather");

const mockUseWeather = useWeather as jest.MockedFunction<typeof useWeather>;

describe("Home Page", () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it("should display weather data when the page loads", async () => {
    mockUseWeather.mockReturnValue({
      weather: {
        name: "Mukalla",
        sys: { country: "YE" },
        weather: [{ description: "Sunny", icon: "01d" }],
        main: { temp: 30, humidity: 40 },
        wind: { speed: 3 },
      },
      error: null,
    });

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText("Mukalla, YE")).toBeInTheDocument();
      expect(screen.getByText("Sunny")).toBeInTheDocument();
      expect(screen.getByText(/30\s*°C/)).toBeInTheDocument();
    });
  });

  it("should update weather when searching using the search bar", async () => {
    mockUseWeather.mockReturnValue({
      weather: {
        name: "Mukalla",
        sys: { country: "YE" },
        weather: [{ description: "Sunny", icon: "01d" }],
        main: { temp: 30, humidity: 40 },
        wind: { speed: 3 },
      },
      error: null,
    });

    const { rerender } = render(<Home />);

    await waitFor(() => {
      expect(screen.getByText("Mukalla, YE")).toBeInTheDocument();
    });

    mockUseWeather.mockReturnValue({
      weather: null,
      error: "Please make sure to enter the city name correctly",
    });

    const input = screen.getByPlaceholderText("Enter city name...");
    fireEvent.change(input, { target: { value: "InvalidCity" } });
    fireEvent.blur(input); 

    rerender(<Home />);

    await waitFor(() => {
      expect(screen.getByText("⚠️ Please make sure to enter the city name correctly")).toBeInTheDocument();
    });
  });
});
