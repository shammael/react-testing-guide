import { expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

it("should render a Counter", () => {
  render(<Counter />);
  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(divElement.textContent).toBe("Count is 1");
});
