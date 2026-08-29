import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import { portfolio } from "../data/portfolio";
import { EvidenceLedger } from "./EvidenceLedger";

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
});
