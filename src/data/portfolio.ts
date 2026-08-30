import type { PortfolioContent } from "../types/portfolio";

/** The sole public-content record for the portfolio. */
export const portfolio = {
  identity: {
    name: "Kunal Shinde",
    eyebrow: "Security engineer · automation · identity · vulnerability management",
    headline: "Security engineering, made operational.",
    statement:
      "I design security workflows that move from detection to accountable action.",
  },
  flagshipMetric: {
    before: "Approximately five days",
    after: "Under five minutes",
    scope: "Vulnerability-remediation ticket-creation turnaround",
    route: ["Nessus", "ingest", "normalize/contextualize", "GLPI ticket", "remediation tracking"],
  },
  caseStudies: [
    {
      number: "01",
      slug: "vulnerability-workflow-automation",
      title: "Vulnerability Workflow Automation",
      summary:
        "An integrated Nessus-to-GLPI workflow made vulnerability findings easier to turn into owned, trackable remediation work.",
      evidence: [
        {
          label: "Problem",
          copy: "Vulnerability discovery was fast, but turning findings into owned, trackable GLPI tickets could take approximately five days.",
        },
        {
          label: "Intervention",
          copy: "Engineered an integrated Nessus-to-GLPI workflow for finding ingestion, processing, and automated ticket creation.",
        },
        {
          label: "Outcome",
          copy: "Reduced vulnerability-remediation ticket-creation turnaround from approximately five days to under five minutes.",
        },
      ],
      outcome:
        "Reduced vulnerability-remediation ticket-creation turnaround from approximately five days to under five minutes.",
      technologies: ["Nessus", "GLPI", "Python", "APIs", "CVSS"],
      conceptualNote: "Conceptual workflow · organizational details omitted",
    },
    {
      number: "02",
      slug: "security-ticket-gap-automation",
      title: "Security Ticket-Gap Automation",
      summary:
        "Cross-checks Security Onion detections, pfSense blocking, and GLPI ticketing to surface attacker IPs that remain unblocked or unticketed.",
      evidence: [
        {
          label: "Problem",
          copy: "Security detections, network blocks, and ticketing signals can diverge across operational systems.",
        },
        {
          label: "Intervention",
          copy: "Built Python automation to compare Security Onion detections, pfSense blocks, and GLPI tickets.",
        },
        {
          label: "Outcome",
          copy: "Identifies attacker IPs that remain unblocked or unticketed for security-operations follow-up.",
        },
      ],
      outcome:
        "Identifies attacker IPs that remain unblocked or unticketed for security-operations follow-up.",
      technologies: ["Security Onion", "pfSense", "GLPI", "Python"],
    },
    {
      number: "03",
      slug: "microsoft-sso-scim-portal",
      title: "Microsoft SSO + SCIM Portal",
      summary:
        "Identity-enabled internal application engineering for a Rewards & Recognition portal with Microsoft SSO and SCIM integration.",
      evidence: [
        {
          label: "Problem",
          copy: "An internal Rewards & Recognition portal needed identity-aware access and lifecycle integration.",
        },
        {
          label: "Intervention",
          copy: "Developed the portal with Microsoft SSO and SCIM integration.",
        },
        {
          label: "Outcome",
          copy: "Demonstrates the career thread from software development through identity and security engineering.",
        },
      ],
      outcome:
        "Demonstrates the career thread from software development through identity and security engineering.",
      technologies: ["Microsoft SSO", "SCIM", "Identity integration"],
    },
  ],
  capabilities: [
    {
      title: "Security operations and incident response",
      items: ["Security Onion", "Suricata", "Zeek", "Elastic", "BEC investigation and containment"],
    },
    {
      title: "Vulnerability management",
      items: ["Nessus", "Nmap", "CVSS", "VAPT ownership", "185+ vulnerability-remediation program"],
    },
    {
      title: "Identity and endpoint",
      items: ["Microsoft Entra ID", "Intune", "Conditional Access", "MFA", "SSO", "SCIM", "CrowdStrike", "Bitdefender", "DLP", "CyberArk"],
    },
    {
      title: "Network security",
      items: ["pfSense", "Zscaler", "VPN", "IDS/IPS", "hardening"],
    },
    {
      title: "Security engineering",
      items: ["Python", "APIs", "workflow automation", "security-platform integration"],
    },
    {
      title: "Governance",
      items: ["risk registers", "NIST CSF", "ISO 27001", "procedures", "POCs", "security awareness"],
    },
  ],
  careerTrace: [
    "Software development",
    "Infrastructure and networking",
    "Cybersecurity operations",
    "Security engineering and automation",
    "Identity, cloud, product, and architecture trajectory",
  ],
  services: [
    {
      title: "Microsoft security",
      description:
        "Authorized, scoped identity and endpoint security work across Entra ID, Intune, Conditional Access, MFA, SSO, and SCIM.",
      status: "current",
    },
    {
      title: "Vulnerability and security engineering",
      description:
        "Authorized, scoped Nessus/OpenVAS assessments, remediation workflows, pfSense review, and security hardening.",
      status: "current",
    },
    {
      title: "Security automation",
      description:
        "Authorized, scoped Python/API integrations, GLPI workflows, and security-tool process automation.",
      status: "current",
    },
  ],
  destinations: [
    {
      status: "ready",
      label: "Resume PDF",
      href: "./assets/kunal-shinde-resume.pdf",
    },
    {
      status: "ready",
      label: "Email",
      href: "mailto:skunal148@gmail.com",
    },
    {
      status: "ready",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kunal-shinde-5a91211b5/",
    },
    {
      status: "ready",
      label: "GitHub",
      href: "https://github.com/skunal148",
    },
    {
      status: "ready",
      label: "Fiverr",
      href: "https://www.fiverr.com/sellers/kunalshinde31/",
    },
    {
      status: "ready",
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01865c7222af99e067?mp_source=share",
    },
  ],
  profileImage: {
    status: "ready",
    src: "./assets/kunal-shinde.webp",
    alt: "Kunal Shinde, security engineer",
    width: 1254,
    height: 1254,
  },
} satisfies PortfolioContent;
