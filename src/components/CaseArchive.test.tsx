import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { portfolio } from "../data/portfolio";
import { CaseArchive } from "./CaseArchive";
import { OperationalRegister } from "./OperationalRegister";

describe("CaseArchive", () => {
  it("renders all selected systems without invented metrics", () => {
    render(<CaseArchive cases={portfolio.caseStudies} />);

    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(screen.getByText(/security ticket-gap automation/i)).toBeInTheDocument();
    expect(screen.getByText(/microsoft sso \+ scim portal/i)).toBeInTheDocument();
    expect(screen.queryByText(/%|clients served|users onboarded/i)).not.toBeInTheDocument();
  });

  it("renders all six demonstrated capability domains from the typed record", () => {
    const { container } = render(<OperationalRegister groups={portfolio.capabilities} />);

    expect(container.querySelectorAll("h3")).toHaveLength(6);
    expect(screen.getByText(/bec investigation and containment/i)).toBeInTheDocument();
    expect(screen.getByText(/185\+ vulnerability-remediation program/i)).toBeInTheDocument();
  });
});
