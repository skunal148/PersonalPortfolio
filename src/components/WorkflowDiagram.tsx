import { useId } from "react";

type WorkflowDiagramProps = {
  steps: readonly string[];
  note: string;
};

export function WorkflowDiagram({ steps, note }: WorkflowDiagramProps) {
  const titleId = `workflow-title-${useId().replace(/:/g, "")}`;
  const captionId = `workflow-caption-${useId().replace(/:/g, "")}`;

  return (
    <figure className="workflow-diagram" aria-labelledby={captionId}>
      <figcaption id={captionId} className="workflow-diagram__caption">
        <strong>Conceptual workflow</strong>
        <span>{note}</span>
      </figcaption>

      <svg
        className="workflow-diagram__route"
        viewBox="0 0 1000 164"
        role="img"
        aria-labelledby={titleId}
      >
        <title id={titleId}>Nessus-to-GLPI conceptual workflow route</title>
        <path className="workflow-diagram__rule" d="M28 84H972" />
        <path className="workflow-diagram__route-to-ticket" d="M28 84H718" />
        <path className="workflow-diagram__route-to-outcome" d="M718 84H972" />
        <g className="workflow-diagram__nodes" aria-hidden="true">
          <circle cx="28" cy="84" r="10" />
          <circle cx="264" cy="84" r="10" />
          <circle cx="500" cy="84" r="10" />
          <rect x="706" y="72" width="24" height="24" />
          <circle cx="972" cy="84" r="10" />
          <path d="M38 84h19m-7-7 7 7-7 7" />
          <path d="M274 84h19m-7-7 7 7-7 7" />
          <path d="M510 84h19m-7-7 7 7-7 7" />
          <path d="M730 84h19m-7-7 7 7-7 7" />
        </g>
      </svg>

      <ol className="workflow-diagram__steps" aria-label="Conceptual workflow steps">
        {steps.map((step, index) => (
          <li key={step}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>

      <p className="workflow-diagram__sequence">{steps.join(" → ")}</p>
    </figure>
  );
}
