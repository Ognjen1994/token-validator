import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders with children", () => {
    const { getByText } = render(<Button onClick={() => {}}>Hello</Button>);
    const buttonElement = getByText("Hello");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button onClick={mockOnClick}>Click Me</Button>
    );
    const buttonElement = getByText("Click Me");

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
