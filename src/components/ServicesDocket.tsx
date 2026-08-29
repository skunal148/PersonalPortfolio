import type { Service } from "../types/portfolio";

type ServicesDocketProps = {
  services: Service[];
};

export function ServicesDocket({ services }: ServicesDocketProps) {
  const currentServices = services.filter((service) => service.status === "current");
  const developingServices = services.filter((service) => service.status === "building-next");

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
          {currentServices.map((service) => (
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

      <aside
        className="services-docket__developing paper-field"
        role="region"
        aria-labelledby="building-next-title"
      >
        <div className="services-docket__developing-heading">
          <h3 id="building-next-title">Building next</h3>
          <p>Developing directions are recorded here without presenting them as available services.</p>
        </div>
        <ul>
          {developingServices.map((service) => (
            <li key={service.title}>
              <span className="services-docket__status services-docket__status--developing">
                Building next
              </span>
              <div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <p className="services-docket__authorization">
        Security assessments and testing are performed only with explicit authorization and agreed
        boundaries.
      </p>
    </section>
  );
}
