import { useState } from "react";

const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export function BlueprintHeader() {
  const [indexOpen, setIndexOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="blueprint-header blueprint-texture">
        <div className="blueprint-header__registration" aria-hidden="true" />
        <a className="blueprint-header__identity" href="#top" aria-label="Kunal Shinde, home">
          Kunal Shinde
        </a>
        <p className="blueprint-header__status">Open to relevant conversations</p>

        <button
          className="blueprint-header__toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={indexOpen}
          aria-label={`${indexOpen ? "Close" : "Open"} section index`}
          onClick={() => setIndexOpen((isOpen) => !isOpen)}
        >
          <span className="blueprint-header__toggle-label" aria-hidden="true">
            Index
          </span>
          <span className="blueprint-header__toggle-mark" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`blueprint-header__navigation${indexOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIndexOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
