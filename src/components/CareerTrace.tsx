type CareerTraceProps = {
  stages: string[];
};

export function CareerTrace({ stages }: CareerTraceProps) {
  return (
    <section className="career-trace paper-texture" aria-labelledby="career-trace-title">
      <header className="career-trace__header">
        <h2 id="career-trace-title">Career trace</h2>
        <p>
          One engineering thread, moving from building systems to making security controls work
          together. The final route is a direction being developed, not a claimed title.
        </p>
      </header>

      <div className="career-trace__drawing">
        <ol className="career-trace__stages" aria-label="Career progression">
          {stages.map((stage, index) => {
            const isGrowthDirection = index === stages.length - 1;

            return (
              <li
                className={isGrowthDirection ? "career-trace__stage career-trace__stage--growth" : "career-trace__stage"}
                key={stage}
              >
                <span className="career-trace__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{stage}</strong>
                {isGrowthDirection ? <span className="career-trace__status">Direction of growth</span> : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
