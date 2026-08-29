export type EvidenceRow = {
  label: "Problem" | "Intervention" | "Outcome";
  copy: string;
};

export type CaseStudy = {
  number: "01" | "02" | "03";
  slug: string;
  title: string;
  summary: string;
  evidence: EvidenceRow[];
  outcome: string;
  technologies: string[];
  conceptualNote?: string;
};

export type CapabilityGroup = {
  title: string;
  items: string[];
};

export type Service = {
  title: string;
  description: string;
  status: "current" | "building-next";
};

export type ExternalDestination =
  | { status: "ready"; label: string; href: string }
  | { status: "placeholder"; label: string; replacement: string };

export type AssetPlaceholder = {
  status: "placeholder";
  label: string;
  replacement: string;
};

export type PortfolioContent = {
  identity: {
    name: string;
    eyebrow: string;
    headline: string;
    statement: string;
  };
  flagshipMetric: {
    before: string;
    after: string;
    scope: string;
    route: string[];
  };
  caseStudies: CaseStudy[];
  capabilities: CapabilityGroup[];
  careerTrace: string[];
  services: Service[];
  destinations: ExternalDestination[];
  profileImage: AssetPlaceholder;
};
