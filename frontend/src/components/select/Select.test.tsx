import React from "react";
import {
  render,
  fireEvent,
  screen,
  getByLabelText,
  within,
} from "@testing-library/react";
import Select from "./Select";

describe("Select Component", () => {
  it("renders with options", async () => {
    const title = "Select Options";
    const names = ["Option 1", "Option 2", "Option 3"];
    const labelId = "select-label";
    const id = "select-id";
    const value = ["Option 1"];
    const setValue = jest.fn();
    const hasError = false;

    const { getByRole } = render(
      <Select
        title={title}
        names={names}
        id={id}
        labelId={labelId}
        value={value}
        setValue={setValue}
        hasError={hasError}
      />
    );
    fireEvent.mouseDown(getByRole("button"));
    const listbox = within(getByRole("listbox"));
    names.forEach(name => {
      expect(listbox.getByText(name)).toBeInTheDocument();
    });
  });
});
