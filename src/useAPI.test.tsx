import { afterAll, afterEach, beforeAll, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useAPI from "./useAPI";
import { rest } from "msw";
import { setupServer } from "msw/node";

// const server = setupServer(
//   rest.get("/api", (_req, res, ctx) => {
//     console.log("first");
//     return res(ctx.json({ name: "shammael" }));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
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

it("should check the useAPI hooks", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI());

  await waitForNextUpdate();

  expect(result.current.data).toEqual({ name: "shammael" });
});

renderHook;
