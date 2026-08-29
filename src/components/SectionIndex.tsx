export type SectionIndexItem = {
  id: string;
  number: string;
  label: string;
  href: string;
};

type SectionIndexProps = {
  items: SectionIndexItem[];
  activeId?: string;
};

export function SectionIndex({ items, activeId }: SectionIndexProps) {
  return (
    <nav className="section-index paper-field" aria-label="Case index">
      <ol>
        {items.map((item) => (
          <li key={item.id} className={activeId === item.id ? "is-active" : undefined}>
            <a href={item.href} aria-current={activeId === item.id ? "location" : undefined}>
              <span className="section-index__number">{item.number}</span>
              <span className="section-index__label">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
