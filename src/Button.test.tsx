import { expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

it("should render a button", () => {
  const onClick = vi.fn();
  render(<Button title="Submit" onClick={onClick} />);
  const buttonElem = screen.getByRole("button");
  fireEvent.click(buttonElem);
  expect(onClick).toHaveBeenCalledOnce();
});
