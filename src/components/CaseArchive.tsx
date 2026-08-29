import type { CaseStudy } from "../types/portfolio";
import { DraftedIcon, type DraftedIconName } from "./DraftedIcons";

type CaseArchiveProps = {
  cases: CaseStudy[];
};

const caseIcons: Record<CaseStudy["number"], DraftedIconName> = {
  "01": "vulnerability",
  "02": "operations",
  "03": "identity",
};

function archiveTarget(caseStudy: CaseStudy) {
  return caseStudy.number === "01" ? `${caseStudy.slug}-archive` : caseStudy.slug;
}

export function CaseArchive({ cases }: CaseArchiveProps) {
  return (
    <section className="case-archive paper-texture" aria-labelledby="selected-systems-title">
      <header className="case-archive__header">
        <h2 id="selected-systems-title">Selected systems</h2>
        <p>
          Three engineering records, documented as systems and operating outcomes rather than
          unverified scale claims.
        </p>
      </header>

      <div className="case-archive__entries">
        {cases.map((caseStudy) => (
          <article
            id={archiveTarget(caseStudy)}
            className="case-entry"
            key={caseStudy.slug}
          >
            <div className="case-entry__index" aria-hidden="true">
              <DraftedIcon name={caseIcons[caseStudy.number]} />
              <span>{caseStudy.number}</span>
            </div>

            <div className="case-entry__identity">
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.summary}</p>
            </div>

            <div className="case-entry__outcome">
              <span>Recorded outcome</span>
              <p>{caseStudy.outcome}</p>
            </div>

            <div className="case-entry__annotations">
              <span>Systems in scope</span>
              <ul aria-label={`${caseStudy.title} technology annotations`}>
                {caseStudy.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
