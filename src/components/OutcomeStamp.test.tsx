import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OutcomeStamp } from "./OutcomeStamp";

describe("OutcomeStamp", () => {
  it("announces the metric scope without duplicating decorative text", () => {
    render(
      <OutcomeStamp
        before="5 DAYS"
        after="<5 MIN"
        scope="Vulnerability-remediation ticket-creation turnaround"
      />,
    );

    expect(
      screen.getByText(/vulnerability-remediation ticket-creation turnaround/i),
    ).toBeInTheDocument();
    expect(screen.getByText("<5 MIN")).toBeInTheDocument();
  });
});
