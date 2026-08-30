import type { Service } from "../types/portfolio";

type ServicesDocketProps = {
  services: Service[];
};

export function ServicesDocket({ services }: ServicesDocketProps) {
  return (
    <section id="services" className="services-docket blueprint-texture" aria-labelledby="services-title">
      <header className="services-docket__header">
        <h2 id="services-title">Scoped security services</h2>
        <p>
          Practical security engineering for teams that need controls connected to accountable,
          maintainable operations.
        </p>
      </header>

      <div
        className="services-docket__current"
        role="region"
        aria-labelledby="current-capability-title"
      >
        <h3 id="current-capability-title">Current capability</h3>
        <ol>
          {services.map((service) => (
            <li key={service.title}>
              <span className="services-docket__status services-docket__status--current">
                Current capability
              </span>
              <div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="services-docket__authorization">
        Security assessments and testing are performed only with explicit authorization and agreed
        boundaries.
      </p>
    </section>
  );
}
