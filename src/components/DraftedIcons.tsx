import { useId, type ReactNode } from "react";

export type DraftedIconName =
  | "operations"
  | "vulnerability"
  | "identity"
  | "network"
  | "engineering"
  | "governance";

type DraftedIconProps = {
  name: DraftedIconName;
  title?: string;
};

const iconGeometry: Record<DraftedIconName, ReactNode> = {
  operations: (
    <>
      <path d="M4 7.5 12 3l8 4.5v8L12 21l-8-5.5Z" />
      <path d="m8 13 2.4 2.4L16.5 9" />
    </>
  ),
  vulnerability: (
    <>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m14.6 14.6 5 5M10.5 7.5v3l2 1.5" />
      <path d="M3 4h5M3 4v5M21 20h-5M21 20v-5" />
    </>
  ),
  identity: (
    <>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 20v-2.2c0-3.1 2.9-5.3 6.5-5.3s6.5 2.2 6.5 5.3V20" />
      <path d="M3 4h4M17 4h4M3 20h4M17 20h4" />
    </>
  ),
  network: (
    <>
      <circle cx="5" cy="12" r="2.25" />
      <circle cx="19" cy="6" r="2.25" />
      <circle cx="19" cy="18" r="2.25" />
      <path d="m7.1 11.1 9.8-4.2M7.1 12.9l9.8 4.2M19 8.25v7.5" />
    </>
  ),
  engineering: (
    <>
      <path d="M3 7h9M3 12h6M3 17h9" />
      <path d="m14.5 14.5 2.2 2.2 4.3-5.2" />
      <path d="M15 4h6v5" />
    </>
  ),
  governance: (
    <>
      <path d="M12 3 4.5 6v5.2c0 4.3 2.7 7.7 7.5 9.8 4.8-2.1 7.5-5.5 7.5-9.8V6Z" />
      <path d="M8 9.5h8M8 13h8M8 16.5h4" />
    </>
  ),
};

export function DraftedIcon({ name, title }: DraftedIconProps) {
  const titleId = `drafted-icon-${useId().replace(/:/g, "")}`;

  return (
    <svg
      className="drafted-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      aria-labelledby={title ? titleId : undefined}
      focusable="false"
    >
      {title ? <title id={titleId}>{title}</title> : null}
      {iconGeometry[name]}
    </svg>
  );
}
