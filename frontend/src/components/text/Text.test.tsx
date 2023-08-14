import React from "react";
import { render } from "@testing-library/react";
import Text from "./Text";

describe("Text Component", () => {
  it("renders children", () => {
    const { getByText } = render(<Text>Regular Text</Text>);
    const textElement = getByText("Regular Text");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("regular");
  });

  it("renders with 'error' variant when specified", () => {
    const { getByText } = render(<Text variant="error">Error Text</Text>);
    const textElement = getByText("Error Text");
    expect(textElement).toHaveClass("error");
  });
});
