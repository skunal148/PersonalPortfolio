import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { portfolio } from "../data/portfolio";
import { BlueprintHeader } from "./BlueprintHeader";
import { EvidenceDocketHero } from "./EvidenceDocketHero";

describe("EvidenceDocketHero", () => {
  it("presents identity, quantified proof, and both visitor actions", () => {
    render(<EvidenceDocketHero content={portfolio} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Security engineering, made operational.",
    );
    expect(screen.getByText("<5 MIN")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore the evidence" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByRole("link", { name: "Start a conversation" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("keeps the masthead index keyboard-operable in document flow", async () => {
    const user = userEvent.setup();
    render(<BlueprintHeader />);

    const skipLink = screen.getByRole("link", { name: "Skip to content" });
    const navigation = screen.getByRole("navigation", { name: "Primary" });
    const toggle = screen.getByRole("button", { name: "Open section index" });

    expect(skipLink.compareDocumentPosition(navigation) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute(
      "href",
      "#experience",
    );
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute(
      "href",
      "#services",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });
});
