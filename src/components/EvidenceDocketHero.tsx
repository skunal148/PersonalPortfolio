import type { PortfolioContent } from "../types/portfolio";
import { OutcomeStamp } from "./OutcomeStamp";
import { SectionIndex, type SectionIndexItem } from "./SectionIndex";

type EvidenceDocketHeroProps = {
  content: Pick<PortfolioContent, "identity" | "flagshipMetric">;
};

const caseIndex: SectionIndexItem[] = [
  {
    id: "automation",
    number: "01",
    label: "Automation",
    href: "#vulnerability-workflow-automation",
  },
  {
    id: "operations",
    number: "02",
    label: "Operations",
    href: "#security-ticket-gap-automation",
  },
  {
    id: "identity",
    number: "03",
    label: "Identity",
    href: "#microsoft-sso-scim-portal",
  },
];

export function EvidenceDocketHero({ content }: EvidenceDocketHeroProps) {
  const { identity, flagshipMetric } = content;
  const routeStart = flagshipMetric.route[0];
  const routeDestination = flagshipMetric.route[3].replace(/ ticket$/i, "");
  const headlineParts = identity.headline.split(/(?<=,)\s+/, 2);

  return (
    <section id="top" className="docket-hero" aria-labelledby="hero-title">
      <div className="docket-hero__statement paper-field">
        <p className="eyebrow visually-hidden">{identity.eyebrow}</p>
        <h1 id="hero-title" aria-label={identity.headline}>
          {headlineParts.map((part, index) => (
            <span key={part}>
              {part}
              {index === 0 ? " " : null}
            </span>
          ))}
        </h1>
        <p className="docket-hero__lede">{identity.statement}</p>
        <div className="docket-hero__actions">
          <a className="docket-action docket-action--primary" href="#work">
            Explore the evidence
          </a>
          <a className="docket-action docket-action--secondary" href="#contact">
            Start a conversation
          </a>
        </div>
        <div className="docket-hero__approval" aria-hidden="true">
          <span>Verified by design</span>
          <span>KS</span>
        </div>
      </div>

      <div className="docket-hero__outcome paper-field">
        <div className="docket-hero__registration docket-hero__registration--top" aria-hidden="true" />
        <div
          className="docket-hero__registration docket-hero__registration--bottom"
          aria-hidden="true"
        />
        <OutcomeStamp
          before="5 DAYS"
          after="<5 MIN"
          scope={flagshipMetric.scope}
          active
        />
        <dl className="docket-hero__callouts">
          <div className="docket-hero__callout docket-hero__callout--route">
            <dt>01</dt>
            <dd>
              {routeStart} → {routeDestination}
            </dd>
          </div>
          <div className="docket-hero__callout docket-hero__callout--scope">
            <dt>02</dt>
            <dd>Ticket creation</dd>
          </div>
          <div className="docket-hero__callout docket-hero__callout--outcome">
            <dt>03</dt>
            <dd>
              {flagshipMetric.before} → {flagshipMetric.after}
            </dd>
          </div>
        </dl>
      </div>

      <SectionIndex items={caseIndex} activeId="automation" />
    </section>
  );
}
