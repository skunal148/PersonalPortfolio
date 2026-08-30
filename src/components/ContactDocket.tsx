import type { ExternalDestination, ProfileImage } from "../types/portfolio";

type ContactDocketProps = {
  destinations: ExternalDestination[];
  profileImage: ProfileImage;
};

export function ContactDocket({ destinations, profileImage }: ContactDocketProps) {
  return (
    <section id="contact" className="contact-docket paper-texture" aria-labelledby="contact-title">
      <div className="contact-docket__sheet">
        <header className="contact-docket__header">
          <h2 id="contact-title">Choose the right path forward.</h2>
          <p>
            The same evidence supports two conversations. Select the context that fits once a real
            destination is supplied.
          </p>
        </header>

        <div className="contact-docket__paths" aria-label="Conversation paths">
          <article>
            <h3>Hiring conversation</h3>
            <p>Discuss security engineering roles, operating scope, and the evidence behind the work.</p>
          </article>
          <article>
            <h3>Project inquiry</h3>
            <p>Discuss an authorized, bounded security engineering or automation engagement.</p>
          </article>
        </div>

        <div className="contact-docket__register">
          <div className="contact-docket__destinations" aria-label="Contact destinations">
            {destinations.map((destination) =>
              destination.status === "ready" ? (
                <a
                  className="destination destination--ready"
                  href={destination.href}
                  target="_blank"
                  rel="noreferrer"
                  key={destination.label}
                >
                  <span>{destination.label}</span>
                  <small>Open destination</small>
                </a>
              ) : (
                <span
                  className="destination destination--placeholder"
                  aria-disabled="true"
                  key={destination.label}
                >
                  <span>{destination.label}</span>
                  <small>{destination.replacement}</small>
                </span>
              ),
            )}
          </div>

          {profileImage.status === "ready" ? (
            <span className="contact-docket__portrait contact-docket__portrait--ready">
              <img
                src={profileImage.src}
                alt={profileImage.alt}
                width={profileImage.width}
                height={profileImage.height}
              />
            </span>
          ) : (
            <span className="contact-docket__portrait" aria-disabled="true">
              <span>{profileImage.label}</span>
              <small>{profileImage.replacement}</small>
            </span>
          )}
        </div>

        <footer className="contact-docket__footer">
          <p>Claims source-backed. Developing directions labeled. Contact fields awaiting real destinations.</p>
          <span>Evidence docket closed</span>
        </footer>
      </div>
    </section>
  );
}
