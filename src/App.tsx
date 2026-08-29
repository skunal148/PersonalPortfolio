import { BlueprintHeader } from "./components/BlueprintHeader";
import { CaseArchive } from "./components/CaseArchive";
import { EvidenceDocketHero } from "./components/EvidenceDocketHero";
import { EvidenceLedger } from "./components/EvidenceLedger";
import { OperationalRegister } from "./components/OperationalRegister";
import { portfolio } from "./data/portfolio";

export default function App() {
  const flagshipCase = portfolio.caseStudies[0];
  const independentProgramProof = portfolio.capabilities
    .find((capability) => capability.title === "Vulnerability management")
    ?.items.find((item) => item === "185+ vulnerability-remediation program");

  return (
    <>
      <BlueprintHeader />
      <main id="main-content">
        <EvidenceDocketHero content={portfolio} />
        <section
          id="work"
          className="flagship-case blueprint-texture"
          aria-label="Flagship case study"
        >
          <article id={flagshipCase.slug} className="flagship-case__docket">
            <header className="flagship-case__title-strip paper-field">
              <span className="flagship-case__number" aria-hidden="true">
                {flagshipCase.number}
              </span>
              <div>
                <h2>{flagshipCase.title}</h2>
                <p>{flagshipCase.summary}</p>
              </div>
            </header>

            <EvidenceLedger caseStudy={flagshipCase} />

            <footer className="flagship-case__annotations">
              <div className="flagship-case__technology-register">
                <p>Systems in scope</p>
                <ul aria-label="Technology annotations">
                  {flagshipCase.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>

              {independentProgramProof ? (
                <aside
                  className="flagship-case__separate-proof"
                  aria-label="Independent vulnerability-management evidence"
                >
                  <strong>{independentProgramProof}</strong>
                  <span>Separate from the automation workflow; shown as broader program evidence.</span>
                </aside>
              ) : null}
            </footer>
          </article>
        </section>
        <CaseArchive cases={portfolio.caseStudies} />
        <section
          id="experience"
          className="operational-evidence blueprint-texture"
          aria-labelledby="operational-register-title"
        >
          <OperationalRegister groups={portfolio.capabilities} />
        </section>
        <section id="services" className="future-anchor" aria-hidden="true" />
        <section id="contact" className="future-anchor" aria-hidden="true" />
      </main>
    </>
  );
}
