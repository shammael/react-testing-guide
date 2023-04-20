import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

it("should check navigation", () => {
  const items = [{ href: "/test", name: "test" }];
  render(<Sidebar items={items} />);
  const anchorElements = screen.getAllByRole("navigation");
  expect(anchorElements[0].textContent).toBe(items[0].name);
  expect(anchorElements[0].getAttribute("href")).toBe(items[0].href);
});
