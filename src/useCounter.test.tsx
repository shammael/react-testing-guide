import { expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

it("should check the counterHook", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.counter).toBe(1);
});

renderHook;
