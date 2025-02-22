import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./searchBar";
import { jest } from "@jest/globals";

describe("SearchBar Component", () => {
  it("should contain an input field and a button", () => {
    render(<SearchBar onChange={() => {}} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "search" })).toBeInTheDocument(); 
  });

  it("should call onChange when searching for a city", () => {
    const mockOnChange = jest.fn();
    render(<SearchBar onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Riyadh" } });

    const button = screen.getByRole("button", { name: "search" });
    fireEvent.click(button);

    expect(mockOnChange).toHaveBeenCalledWith("Riyadh"); 
  });
});
