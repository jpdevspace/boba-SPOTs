import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Button from "../components/Button";

test("Displays button's default label", async () => {
  const button = render(<Button />);

  const buttonTextContent = await button.getByText("Label");
  expect(buttonTextContent).toBeDefined();
  button.unmount();
});

test("Displays button's custom label", async () => {
  const button = render(<Button label="My Custom Label" />);

  const buttonTextContent = await button.getByText("My Custom Label");
  expect(buttonTextContent).toBeDefined();
  button.unmount();
});

test("Button has 'button-active' when isActive", async () => {
  const button = render(<Button isActive={true} />);

  const buttonEl = await button.findByTestId("button");
  expect(Array.from(buttonEl.classList)).toContain("button-active");
  button.unmount();
});
