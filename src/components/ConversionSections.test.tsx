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

  it("labels developing services separately from current capabilities", () => {
    render(<ServicesDocket services={portfolio.services} />);

    const current = screen.getByRole("region", { name: /current capability/i });
    const developing = screen.getByRole("region", { name: /building next/i });

    expect(within(current).getByText(/microsoft security/i)).toBeInTheDocument();
    expect(
      within(developing).getByRole("heading", { level: 4, name: "Product Security" }),
    ).toBeInTheDocument();
    expect(within(developing).queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText(/only with explicit authorization and agreed boundaries/i)).toBeInTheDocument();
  });

  it("does not render replacement destinations as links", () => {
    render(
      <ContactDocket
        destinations={portfolio.destinations}
        profileImage={portfolio.profileImage}
      />,
    );

    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.getByText("Résumé PDF").closest(".destination")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(screen.getByText("Professional headshot").closest(".contact-docket__portrait")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
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
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute("rel", "noreferrer");
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
