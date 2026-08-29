import { describe, expect, it } from "vitest";
import { portfolio } from "./portfolio";

describe("portfolio content", () => {
  it("keeps the flagship outcome scoped to ticket creation", () => {
    const flagship = portfolio.caseStudies[0];

    expect(flagship.slug).toBe("vulnerability-workflow-automation");
    expect(flagship.outcome).toMatch(/ticket-creation turnaround/i);
    expect(flagship.outcome).toMatch(/under five minutes/i);
    expect(flagship.outcome).not.toMatch(/triage|full remediation|scan time/i);
  });

  it("keeps missing external destinations non-interactive", () => {
    expect(portfolio.destinations).toHaveLength(6);
    expect(
      portfolio.destinations.every(
        (destination) =>
          destination.status === "placeholder" && !("href" in destination),
      ),
    ).toBe(true);
  });

  it("separates current services from developing capabilities", () => {
    expect(
      portfolio.services.some((service) => service.status === "current"),
    ).toBe(true);
    expect(
      portfolio.services.some((service) => service.status === "building-next"),
    ).toBe(true);
  });
});
