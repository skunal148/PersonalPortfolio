import { BlueprintHeader } from "./components/BlueprintHeader";
import { EvidenceDocketHero } from "./components/EvidenceDocketHero";
import { portfolio } from "./data/portfolio";

export default function App() {
  return (
    <>
      <BlueprintHeader />
      <main id="main-content">
        <EvidenceDocketHero content={portfolio} />
        <section id="work" className="future-anchor" aria-hidden="true" />
        <section id="experience" className="future-anchor" aria-hidden="true" />
        <section id="services" className="future-anchor" aria-hidden="true" />
        <section id="contact" className="future-anchor" aria-hidden="true" />
      </main>
    </>
  );
}
