import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the portfolio identity and primary landmark", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /security engineering, made operational/i,
      }),
    ).toBeInTheDocument();
  });

  it("provides a rendered target for every masthead anchor", () => {
    const { container } = render(<App />);
    const navigation = container.querySelector<HTMLElement>('nav[aria-label="Primary"]');

    expect(navigation).not.toBeNull();

    for (const link of within(navigation!).getAllByRole("link")) {
      const target = link.getAttribute("href");

      expect(target).toMatch(/^#/);
      expect(container.querySelector(target!)).toBeInTheDocument();
    }
  });
});
