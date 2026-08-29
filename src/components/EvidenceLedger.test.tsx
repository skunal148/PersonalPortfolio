import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import { portfolio } from "../data/portfolio";
import "../styles/tokens.css";
import "../styles/global.css";
import { EvidenceLedger } from "./EvidenceLedger";

function relativeLuminance([red, green, blue]: number[]) {
  const [r, g, b] = [red, green, blue].map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function parseRgb(color: string) {
  if (/^#[\da-f]{6}$/i.test(color)) {
    return [1, 3, 5].map((index) => Number.parseInt(color.slice(index, index + 2), 16));
  }

  const channels = color.match(/\d+(?:\.\d+)?/g)?.slice(0, 3).map(Number);

  if (!channels || channels.length !== 3) {
    throw new Error(`Expected a computed RGB color, received: ${color}`);
  }

  return channels;
}

function resolveCustomColor(color: string) {
  const customProperty = color.match(/^var\((--[^)]+)\)$/)?.[1];

  return customProperty
    ? getComputedStyle(document.documentElement).getPropertyValue(customProperty).trim()
    : color;
}

function contrastRatio(foreground: string, background: string) {
  const foregroundLuminance = relativeLuminance(parseRgb(foreground));
  const backgroundLuminance = relativeLuminance(parseRgb(background));
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

describe("EvidenceLedger", () => {
  it("renders ordered problem, intervention, and outcome evidence", () => {
    render(<EvidenceLedger caseStudy={portfolio.caseStudies[0]} />);
    const ledger = screen.getByRole("region", {
      name: /vulnerability workflow automation evidence/i,
    });
    const headings = within(ledger).getAllByRole("heading", { level: 3 });

    expect(headings.map((heading) => heading.textContent)).toEqual([
      "Problem",
      "Intervention",
      "Outcome",
    ]);
    expect(within(ledger).getByText("Conceptual workflow")).toBeInTheDocument();
  });

  it("keeps the workflow labels and redaction note accessible as text", () => {
    render(<EvidenceLedger caseStudy={portfolio.caseStudies[0]} />);
    const ledger = screen.getAllByRole("region", {
      name: /vulnerability workflow automation evidence/i,
    }).at(-1)!;

    const steps = within(ledger).getByRole("list", { name: /conceptual workflow steps/i });
    expect(within(steps).getAllByRole("listitem").map((step) => step.textContent)).toEqual([
      "01Nessus",
      "02Ingest",
      "03Normalize and contextualize",
      "04GLPI ticket",
      "05Remediation tracking",
    ]);
    expect(
      within(ledger).getByText("Conceptual workflow · organizational details omitted"),
    ).toBeVisible();
    expect(
      within(ledger).getByTitle("Nessus-to-GLPI conceptual workflow route"),
    ).toBeInTheDocument();
  });

  it("integrates the flagship case with ruled annotations and separate program proof", () => {
    const { container } = render(<App />);
    const page = within(container);

    const flagship = page.getByRole("region", { name: /flagship case study/i });
    expect(within(flagship).getByRole("heading", { level: 2 })).toHaveTextContent(
      "Vulnerability Workflow Automation",
    );
    expect(
      within(within(flagship).getByRole("list", { name: /technology annotations/i }))
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(["Nessus", "GLPI", "Python", "APIs", "CVSS"]);

    const separateProof = within(flagship).getByLabelText(
      "Independent vulnerability-management evidence",
    );
    expect(within(separateProof).getByText("185+ vulnerability-remediation program")).toBeVisible();
    expect(separateProof).toHaveTextContent("Separate from the automation workflow");
  });

  it("keeps the small outcome step label readable against the blueprint field", () => {
    const { container } = render(<App />);
    const page = within(container);
    const steps = page.getByRole("list", { name: /conceptual workflow steps/i });
    const outcomeStep = within(steps).getAllByRole("listitem").at(-1)!;
    const outcomeNumber = outcomeStep.querySelector("span")!;
    const blueprint = outcomeStep.closest(".blueprint-texture")!;

    expect(
      contrastRatio(
        resolveCustomColor(getComputedStyle(outcomeNumber).color),
        resolveCustomColor(getComputedStyle(blueprint).backgroundColor),
      ),
    ).toBeGreaterThanOrEqual(4.5);
  });
});
