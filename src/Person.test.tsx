import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Person from "./Person";

it("should render a name", () => {
  render(<Person name="Shammael" />);
  const element = screen.getByTestId("name");
  expect(element.textContent).toBe("Name is Shammael");
  expect(element.getAttribute("id")).toBe("test");
});
