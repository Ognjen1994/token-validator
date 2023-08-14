import React from "react";
import { render } from "@testing-library/react";
import List from "./List";

describe("List Component", () => {
  it("renders with title and items", () => {
    const title = "My List";
    const items = ["Item 1", "Item 2", "Item 3"];

    const { getByLabelText, getByText } = render(
      <List title={title} items={items} />
    );

    const listElement = getByLabelText(title);
    expect(listElement).toBeInTheDocument();

    items.forEach(item => {
      const itemElement = getByText(item);
      expect(itemElement).toBeInTheDocument();
    });
  });
});
