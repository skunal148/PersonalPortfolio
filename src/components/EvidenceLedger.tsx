import type { CaseStudy } from "../types/portfolio";
import { DraftedIcon, type DraftedIconName } from "./DraftedIcons";
import { WorkflowDiagram } from "./WorkflowDiagram";

type EvidenceLedgerProps = {
  caseStudy: CaseStudy;
};

const workflowSteps = [
  "Nessus",
  "Ingest",
  "Normalize and contextualize",
  "GLPI ticket",
  "Remediation tracking",
] as const;

const evidenceIcons: Record<CaseStudy["evidence"][number]["label"], DraftedIconName> = {
  Problem: "vulnerability",
  Intervention: "engineering",
  Outcome: "operations",
};

export function EvidenceLedger({ caseStudy }: EvidenceLedgerProps) {
  const conceptualNote =
    caseStudy.conceptualNote ?? "Conceptual workflow · organizational details omitted";

  return (
    <section
      className="evidence-ledger"
      aria-label={`${caseStudy.title} evidence`}
    >
      <div className="evidence-ledger__register" aria-hidden="true">
        <span>Evidence ledger</span>
        <span>Case file C—03—A</span>
      </div>

      <ol className="evidence-ledger__rows">
        {caseStudy.evidence.map((row, index) => (
          <li key={row.label} className={`evidence-ledger__row evidence-ledger__row--${row.label.toLowerCase()}`}>
            <div className="evidence-ledger__index" aria-hidden="true">
              <DraftedIcon name={evidenceIcons[row.label]} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="evidence-ledger__label">
              <h3>{row.label}</h3>
            </div>
            <p>{row.copy}</p>
          </li>
        ))}
      </ol>

      <WorkflowDiagram steps={workflowSteps} note={conceptualNote} />
    </section>
  );
}
