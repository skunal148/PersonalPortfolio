import type { CapabilityGroup } from "../types/portfolio";
import { DraftedIcon, type DraftedIconName } from "./DraftedIcons";

type OperationalRegisterProps = {
  groups: CapabilityGroup[];
};

const capabilityIcons: DraftedIconName[] = [
  "operations",
  "vulnerability",
  "identity",
  "network",
  "engineering",
  "governance",
];

export function OperationalRegister({ groups }: OperationalRegisterProps) {
  return (
    <div className="operational-register">
      <header className="operational-register__header">
        <h2 id="operational-register-title">Demonstrated operating evidence</h2>
        <p>
          Current, source-backed experience only. Developing directions are intentionally excluded
          from this register.
        </p>
      </header>

      <ol className="operational-register__rows">
        {groups.map((group, index) => (
          <li className="operational-register__row" key={group.title}>
            <div className="operational-register__index" aria-hidden="true">
              <DraftedIcon name={capabilityIcons[index] ?? "engineering"} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{group.title}</h3>
            <ul aria-label={`${group.title} evidence`}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
