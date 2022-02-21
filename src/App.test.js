import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders carbon button", () => {
  render(<App />);
  const linkElement = screen.getByText(/carbon/i);
  expect(linkElement).toBeInTheDocument();
});
