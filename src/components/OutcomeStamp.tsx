import { useId } from "react";

type OutcomeStampProps = {
  before: string;
  after: string;
  scope: string;
  active?: boolean;
};

export function OutcomeStamp({ before, after, scope, active = false }: OutcomeStampProps) {
  const wearMaskId = `stamp-wear-${useId().replace(/:/g, "")}`;

  return (
    <figure className={`outcome-stamp${active ? " outcome-stamp--active" : ""}`}>
      <span className="outcome-stamp__before" aria-hidden="true">
        {before}
      </span>

      <span className="outcome-stamp__mark">
        <svg
          className="outcome-stamp__border"
          viewBox="0 0 352 228"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <mask id={wearMaskId} maskUnits="userSpaceOnUse" x="0" y="0" width="352" height="228">
              <rect width="352" height="228" fill="white" />
              <path
                d="M19 28h39M83 19h22M145 24h56M254 18h31M301 31h34M23 201h26M74 211h69M177 204h31M249 211h80M16 68v29M25 126v47M328 55v35M337 116v43"
                stroke="black"
                strokeWidth="6"
              />
              <rect x="114" y="17" width="9" height="5" fill="black" />
              <rect x="218" y="205" width="15" height="6" fill="black" />
              <rect x="18" y="181" width="6" height="10" fill="black" />
              <rect x="329" y="94" width="6" height="14" fill="black" />
            </mask>
          </defs>

          <g mask={`url(#${wearMaskId})`} fill="none" stroke="currentColor">
            <rect x="8" y="8" width="336" height="212" strokeWidth="7" />
            <rect x="19" y="19" width="314" height="190" strokeWidth="2" />
            <path d="M34 48h284M34 180h284" strokeWidth="2" strokeDasharray="31 7 3 6" />
          </g>
        </svg>

        <strong className="outcome-stamp__after">{after}</strong>
      </span>

      <figcaption className="outcome-stamp__caption">{scope}</figcaption>
    </figure>
  );
}
