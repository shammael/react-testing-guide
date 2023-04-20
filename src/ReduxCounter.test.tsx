import { expect, it, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ReduxCounter from "./ReduxCounter";
import { Provider } from "react-redux";
import store from "./store";

describe("should check ReduxCounter", () => {
  it("should increment", () => {
    render(
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    );

    const counterElement = screen.getByRole("contentinfo");
    expect(counterElement.textContent).toBe("0");

    const incrementButton = screen.getByTestId("increment");

    fireEvent.click(incrementButton);
    expect(counterElement.textContent).toBe("1");
  });
});
