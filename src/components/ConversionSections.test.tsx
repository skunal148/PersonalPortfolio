import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { portfolio } from "../data/portfolio";
import type { ExternalDestination } from "../types/portfolio";
import { CareerTrace } from "./CareerTrace";
import { ContactDocket } from "./ContactDocket";
import { ServicesDocket } from "./ServicesDocket";

afterEach(cleanup);

describe("conversion sections", () => {
  it("renders the career progression as an ordered trace with an honest growth direction", () => {
    render(<CareerTrace stages={portfolio.careerTrace} />);

    const trace = screen.getByRole("list", { name: /career progression/i });

    expect(within(trace).getAllByRole("listitem")).toHaveLength(5);
    expect(within(trace).getByText(/identity, cloud, product, and architecture trajectory/i)).toBeInTheDocument();
    expect(within(trace).getByText(/direction of growth/i)).toBeInTheDocument();
  });

  it("renders only the verified current services and authorization boundary", () => {
    render(<ServicesDocket services={portfolio.services} />);

    const current = screen.getByRole("region", { name: /current capability/i });

    expect(within(current).getByText(/microsoft security/i)).toBeInTheDocument();
    expect(within(current).getAllByRole("listitem")).toHaveLength(3);
    expect(screen.queryByRole("region", { name: /building next/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/manual web\/api penetration testing/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/product security/i)).not.toBeInTheDocument();
    expect(screen.getByText(/only with explicit authorization and agreed boundaries/i)).toBeInTheDocument();
  });

  it("keeps explicitly unavailable destinations non-interactive", () => {
    const destinations: ExternalDestination[] = [
      { status: "placeholder", label: "Unavailable", replacement: "Not supplied" },
    ];

    render(
      <ContactDocket
        destinations={destinations}
        profileImage={{
          status: "placeholder",
          label: "Professional headshot",
          replacement: "Add image",
        }}
      />,
    );

    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.getByText("Unavailable").closest(".destination")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(screen.getByText("Professional headshot").closest(".contact-docket__portrait")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders the completed footer with resume, contact links, and portrait", () => {
    render(
      <ContactDocket
        destinations={portfolio.destinations}
        profileImage={portfolio.profileImage}
      />,
    );

    expect(screen.getAllByRole("link")).toHaveLength(6);
    expect(screen.getByRole("link", { name: /resume pdf/i })).toHaveAttribute(
      "href",
      "./assets/kunal-shinde-resume.pdf",
    );
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:skunal148@gmail.com",
    );
    expect(screen.getByRole("link", { name: /email/i })).not.toHaveAttribute("target");
    expect(screen.getByRole("link", { name: /upwork/i })).toHaveAttribute(
      "href",
      "https://www.upwork.com/freelancers/~01865c7222af99e067?mp_source=share",
    );
    expect(screen.getByRole("link", { name: /upwork/i })).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link", { name: /upwork/i })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
    expect(
      screen.getByRole("img", { name: "Kunal Shinde, security engineer" }),
    ).toHaveAttribute("src", "./assets/kunal-shinde.webp");
    expect(screen.getByText(/contact destinations are active/i)).toBeInTheDocument();
  });

  it("renders only typed ready destinations as external links", () => {
    const destinations: ExternalDestination[] = [
      { status: "ready", label: "LinkedIn", href: "https://example.com/kunal" },
      { status: "placeholder", label: "GitHub", replacement: "Add GitHub URL" },
    ];

    render(
      <ContactDocket
        destinations={destinations}
        profileImage={portfolio.profileImage}
      />,
    );

    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://example.com/kunal",
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
    expect(screen.getByText("GitHub").closest(".destination")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });

  it("renders a ready local profile image with useful intrinsic metadata", () => {
    render(
      <ContactDocket
        destinations={portfolio.destinations}
        profileImage={{
          status: "ready",
          src: "./assets/kunal-shinde.webp",
          alt: "Kunal Shinde, security engineer",
          width: 720,
          height: 900,
        }}
      />,
    );

    expect(
      screen.getByRole("img", { name: "Kunal Shinde, security engineer" }),
    ).toHaveAttribute("src", "./assets/kunal-shinde.webp");
    expect(screen.getByRole("img")).toHaveAttribute("width", "720");
    expect(screen.getByRole("img")).toHaveAttribute("height", "900");
    expect(screen.getByRole("img").closest(".contact-docket__portrait")).not.toHaveAttribute(
      "aria-disabled",
    );
  });
});
