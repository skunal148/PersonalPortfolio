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

  it("publishes every supplied footer destination with its approved URL", () => {
    expect(portfolio.destinations).toHaveLength(6);
    expect(portfolio.destinations).toEqual([
      {
        status: "ready",
        label: "Resume PDF",
        href: "./assets/kunal-shinde-resume.pdf",
      },
      {
        status: "ready",
        label: "Email",
        href: "mailto:skunal148@gmail.com",
      },
      {
        status: "ready",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kunal-shinde-5a91211b5/",
      },
      {
        status: "ready",
        label: "GitHub",
        href: "https://github.com/skunal148",
      },
      {
        status: "ready",
        label: "Fiverr",
        href: "https://www.fiverr.com/sellers/kunalshinde31/",
      },
      {
        status: "ready",
        label: "Upwork",
        href: "https://www.upwork.com/freelancers/~01865c7222af99e067?mp_source=share",
      },
    ]);
  });

  it("publishes the supplied portrait with stable local metadata", () => {
    expect(portfolio.profileImage).toEqual({
      status: "ready",
      src: "./assets/kunal-shinde.webp",
      alt: "Kunal Shinde, security engineer",
      width: 1254,
      height: 1254,
    });
  });

  it("publishes only the three verified current services", () => {
    expect(portfolio.services).toHaveLength(3);
    expect(portfolio.services.every((service) => service.status === "current")).toBe(true);
  });
});
