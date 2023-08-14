import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

describe("Box Component", () => {
  it("renders children", () => {
    const { getByText } = render(<Box>Box Content</Box>);
    const boxElement = getByText("Box Content");
    expect(boxElement).toBeInTheDocument();
  });
});
