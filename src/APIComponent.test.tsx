import { expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import APIComponent from "./APIComponent";

const testResponseData = { name: "shammael" };

const mockFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };

    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", mockFetch);

it("should check the APIComponent", async () => {
  render(<APIComponent />);
  const out = await waitFor(() => screen.getByRole("contentinfo"));
  expect(out.textContent).toBe("Name is shammael");
});
