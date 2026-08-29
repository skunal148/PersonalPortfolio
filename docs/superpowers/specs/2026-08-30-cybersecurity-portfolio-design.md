# Cybersecurity Portfolio Design Specification

**Date:** 2026-08-30  
**Owner:** Kunal Shinde  
**Platform:** React, Vite, and TypeScript; static GitHub Pages deployment  
**Status:** Design ready for user review

## 1. Summary

Build a single-page cybersecurity portfolio that supports two outcomes without splitting Kunal into two brands:

1. Hiring managers and recruiters can evaluate Kunal for senior-track security engineering roles.
2. Prospective clients can evaluate and inquire about clearly scoped freelance security work.

The portfolio's central position is not “I know many security tools.” It is:

> Kunal understands security across infrastructure, identity, endpoints, vulnerability management, and incident response, then engineers automation and internal systems that make those controls operate better at organizational scale.

The repeated proof pattern is **Problem → Intervention → Evidence → Outcome**. The flagship example is the Nessus-to-GLPI vulnerability workflow that reduced ticket-creation turnaround from approximately five days to under five minutes.

The approved visual direction is **Change-Control Folio**. The approved page composition is **Evidence Docket**. The page should feel like an auditable engineering dossier made from blueprint plans, carbon-copy work orders, routed system diagrams, and inspection stamps—not like a hacker terminal, conventional SOC dashboard, or generic résumé template.

## 2. Goals and Non-Goals

### Goals

- Make Kunal's role and differentiator understandable within the first viewport.
- Lead with measurable engineering impact and support it with an auditable explanation.
- Give employers and clients distinct next actions while keeping the evidence shared.
- Demonstrate breadth without reducing the page to a tool-logo collection.
- Separate proven capabilities from areas still being developed.
- Provide a polished static site that remains functional on GitHub Pages.
- Make future replacement of placeholder links and assets straightforward and centralized.

### Non-goals

- Do not publish salary targets, marketplace pricing, or career-strategy research.
- Do not invent employers, clients, testimonials, dates, certifications, adoption numbers, screenshots, repositories, or confidential organizational details.
- Do not describe OSCP as completed unless Kunal later confirms completion.
- Do not advertise advanced red-team, deep AppSec, or Product Security work as presently proven.
- Do not build a backend, CMS, account system, analytics pipeline, or pretend that a static contact form can submit.
- Do not turn the portfolio into an exhaustive biography or a catalog of every security tool.

## 3. Audience and Conversion Model

The first viewport contains two clear paths:

- **Explore the evidence** leads employers and technically minded visitors into the case-study ledger.
- **Start a conversation** leads prospective clients toward services and the contact docket.

The paths are not different sites or modes. Both visitors first encounter the same outcome and can inspect the same proof. Later, a narrow “Choose your path” strip offers:

- **Hiring:** view relevant work, inspect experience evidence, and access the résumé placeholder.
- **Client work:** inspect services, understand engagement fit, and access the contact placeholder.

The site must never ask visitors to self-identify before they can see the work.

## 4. Page Architecture and Content

### 4.1 Blueprint Masthead

A full-width navy masthead contains:

- `Kunal Shinde` as the primary identity.
- Anchors for `Work`, `Experience`, `Services`, and `Contact`.
- A compact availability/status field using placeholder-safe copy such as `Open to relevant conversations` without inventing a location, notice period, or contract status.
- A mobile menu that expands as a flat blueprint index rather than a floating rounded panel.

The masthead becomes compact and sticky after the opening viewport. Keyboard focus must remain visible against the navy field.

### 4.2 Evidence-Docket Hero

The hero is an asymmetrical folded dossier.

Left side:

- Eyebrow: `Security engineer · automation · identity · vulnerability management`
- Headline: `Security engineering, made operational.`
- Supporting statement: `I design security workflows that move from detection to accountable action.`
- Primary action: `Explore the evidence`
- Secondary action: `Start a conversation`

Right side:

- A large vermilion `<5 MIN` inspection stamp.
- A faint, offset `5 DAYS` carbon impression behind it.
- Three truthful callouts connected with drafted leader lines:
  - `Nessus → GLPI`
  - `Ticket creation`
  - `Approximately five days → under five minutes`
- A punched vertical case index: `01 Automation`, `02 Operations`, `03 Identity`.

The quantified result must always be explained as vulnerability-remediation **ticket-creation turnaround**. It must not be mislabeled as scan time, triage time, total remediation time, or SLA resolution.

### 4.3 Flagship Evidence Ledger

Immediately below the hero, a full-width navy ledger explains the vulnerability automation as three rows:

1. **Problem:** Vulnerability discovery was fast, but turning findings into owned, trackable GLPI tickets could take approximately five days.
2. **Intervention:** Kunal engineered an integrated Nessus-to-GLPI workflow for finding ingestion, processing, and automated ticket creation.
3. **Outcome:** Ticket-creation turnaround fell to under five minutes, creating a faster path to accountable remediation.

The ledger also includes a compact, clearly labeled conceptual system diagram:

`Nessus → ingest → normalize/contextualize → GLPI ticket → remediation tracking`

The diagram is explanatory, not a claim about every internal implementation detail. A label states `Conceptual workflow · organizational details omitted`.

Supporting evidence may include `185+ vulnerability-remediation program`, because that figure appears in the source conversation. It must not be visually attached to the SSO/SCIM project or presented as the number processed by this automation unless Kunal later confirms that relationship.

### 4.4 Selected Systems Archive

Three numbered docket entries expand or navigate within the same page:

#### 01 — Vulnerability Workflow Automation

The flagship case remains the most detailed. It uses the full Problem / Intervention / Outcome ledger and the conceptual workflow diagram.

#### 02 — Security Ticket-Gap Automation

Truthful summary:

- Cross-checks Security Onion detections, pfSense blocking, and GLPI ticketing.
- Identifies attacker IPs that remain unblocked or unticketed.
- Demonstrates security operations, integration thinking, and Python automation.

No unconfirmed reduction metric, volume, or adoption claim is added.

#### 03 — Microsoft SSO + SCIM Portal

Truthful summary:

- An internal Rewards & Recognition portal.
- Microsoft SSO and SCIM integration.
- Demonstrates the career thread from software development through identity and security engineering.

The project is framed as identity-enabled internal application engineering, not as a standalone cybersecurity product.

### 4.5 Operational Evidence

A dense-but-readable blueprint register groups supporting evidence into six domains:

- **Security operations and incident response:** Security Onion, Suricata, Zeek, Elastic, BEC investigation and containment.
- **Vulnerability management:** Nessus, Nmap, CVSS, VAPT ownership, and a 185+ vulnerability-remediation program.
- **Identity and endpoint:** Microsoft Entra ID, Intune, Conditional Access, MFA, SSO, SCIM, CrowdStrike, Bitdefender, DLP, and CyberArk.
- **Network security:** pfSense, Zscaler, VPN, IDS/IPS, and hardening.
- **Security engineering:** Python, APIs, workflow automation, and security-platform integration.
- **Governance:** risk registers, NIST CSF, ISO 27001, procedures, POCs, and security awareness.

This section uses text and small authored diagrams. It does not show an indiscriminate cloud of logos.

### 4.6 Career Trace

A restrained routed timeline explains the meaningful progression:

`Software development → infrastructure and networking → cybersecurity operations → security engineering and automation → identity, cloud, product, and architecture trajectory`

The final destinations are labeled as `direction of growth`, not completed senior titles. OSCP appears only in a `Building next` line and only as `planned` or `in progress` once Kunal supplies the correct status.

### 4.7 Services Docket

Services are grouped around the same three commercial pillars identified in the source conversation:

1. **Microsoft security:** Entra ID, Intune, Conditional Access, MFA, SSO, and SCIM.
2. **Vulnerability and security engineering:** Nessus/OpenVAS assessments, remediation workflows, pfSense review, and security hardening.
3. **Security automation:** Python/API integrations, GLPI workflows, and security-tool process automation.

Available-now services receive a `Current capability` stamp. Developing services—manual web/API penetration testing, secure SDLC, threat modeling, Product Security, and advanced offensive work—appear in a separate `Building next` strip and are not given inquiry buttons.

No public prices are shown. Every service description emphasizes authorized, scoped security work.

### 4.8 Contact Docket

The close reiterates the two paths:

- `Hiring conversation`
- `Project inquiry`

Because real links are not yet supplied, each external destination is represented by a deliberate disabled replacement field:

- `Résumé PDF · add file`
- `Email · add address`
- `LinkedIn · add URL`
- `GitHub · add URL`
- `Fiverr · add URL`
- `Upwork · add URL`

These are visually complete but semantically non-interactive. They must not use `href="#"`, fake `mailto:` values, or dead download buttons. A source comment and typed content record make replacement locations obvious.

## 5. Visual System

### Color strategy

Use a full five-role palette:

- Blueprint navy: `#0B1C2D` — navigation, evidence ledgers, dense technical passages.
- Warm paper: `#F1EADB` — primary reading fields and dossier sheets.
- Oxidized copper: `#B66A3C` — secondary marks, archival labels, and restrained emphasis.
- Verified cyan: `#44C0C9` — routed automation, successful linkage, and focus-adjacent states.
- Vermilion: `#DF4A39` — decisive outcomes, inspection stamps, and primary conversion.

Text colors must be separately calibrated for WCAG contrast; decorative faded impressions may not carry required information.

### Typography

- Display: **Barlow Condensed**, used at heavy weights for dossier titles, outcome numerals, and navigation labels.
- Body: **Atkinson Hyperlegible Next**, used for paragraphs, service descriptions, evidence details, and controls.
- Annotation handwriting is represented sparingly by a raster/textural layer or authored SVG marks, never by illegible body text.

Fonts should be self-hosted or loaded in a way compatible with GitHub Pages and resilient fallbacks. The page must not rely on monospace type as a generic signal for cybersecurity.

### Geometry and material

- Corners are square or minimally clipped; avoid stock rounded cards.
- Grouping comes from paper overlap, ruled ledgers, perforation, ink field, and alignment rather than generic containers.
- Elevation is flat and physical: small paper offsets and contact shadows only where sheets overlap.
- Blueprint grids, routing lines, perforations, stamps, and technical diagrams are authored SVG or CSS geometry.
- Warm-paper and blueprint grain are produced raster textures; CSS gradients are not used as substitutes for paper.

## 6. Components and Data Boundaries

Suggested component boundaries:

- `BlueprintHeader` — navigation and compact status.
- `EvidenceDocketHero` — opening statement, CTAs, outcome composition, case index.
- `OutcomeStamp` — accessible visual representation of the five-day-to-under-five-minute result.
- `EvidenceLedger` — reusable Problem / Intervention / Outcome rows.
- `WorkflowDiagram` — semantic Nessus-to-GLPI conceptual system flow.
- `CaseArchive` and `CaseEntry` — three selected engineering projects.
- `OperationalRegister` — evidence grouped by security domain.
- `CareerTrace` — progression and developing directions.
- `ServicesDocket` — current services and building-next separation.
- `ContactDocket` — disabled placeholder destinations and replacement guidance.
- `SectionIndex` — desktop punched-edge index and mobile horizontal case strip.

All factual content lives in a typed `src/data/portfolio.ts` record. Components render the record and should not duplicate substantive claims in JSX. Placeholder assets and links use a typed discriminated state such as `{ status: "placeholder", label: "LinkedIn" }`, making it impossible to accidentally render them as functional anchors.

No remote runtime data is required. There is no loading spinner, error boundary for network content, or server state.

## 7. Interaction and Motion

Motion is purposeful and appears in one orchestrated sequence:

- The `5 DAYS` carbon impression shifts slightly out of registration.
- The `<5 MIN` inspection stamp lands once with a brief physical settle.
- Drafted leader lines and the conceptual workflow route reveal in reading order.
- Evidence-ledger rows unroll or wipe open as they enter.

Recommended timings:

- Route drawing: approximately 650–800 ms.
- Stamp landing: approximately 320–420 ms with a short overshoot.
- Ledger reveal: approximately 260–360 ms per grouped sequence, not per individual line.
- Hover/focus feedback: 120–180 ms.

Use CSS transitions, SVG stroke animation, and a small Intersection Observer hook. Avoid a heavy animation dependency unless implementation evidence shows it materially improves interruption handling. Content is visible by default; JavaScript enhances rather than unlocks it.

With `prefers-reduced-motion: reduce`, final states render immediately and smooth scrolling is disabled.

## 8. Responsive Behavior

Desktop composition follows the approved 1536×1024 Evidence Docket comp.

At tablet and mobile sizes:

- The masthead becomes a compact top index.
- The hero becomes one column: statement first, outcome stamp second.
- The vertical punched case index becomes a horizontal scrollable index with visible text labels and no hidden required navigation.
- Evidence-ledger rows stack as label, content, and optional diagram while preserving Problem → Intervention → Outcome order.
- Service and operational registers become ruled list rows, not generic cards.
- Route diagrams simplify to fewer bends and maintain readable labels.
- Decorative paper overflow is clipped without causing horizontal page scrolling.
- Primary actions remain at least 44×44 CSS pixels.

The mobile version is a recomposition inside the same world, not a scaled-down desktop screenshot.

## 9. Accessibility

- Use semantic landmarks, one `h1`, ordered headings, lists, buttons, and anchors.
- Provide a skip link and stable anchor targets.
- Give SVG diagrams titles and concise textual equivalents.
- Do not use color alone to distinguish Problem, Intervention, Outcome, current capability, or building-next states.
- Maintain visible `:focus-visible` treatment in both navy and paper regions.
- Keep body text comfortably readable and avoid using condensed display type for paragraphs.
- Preserve content and navigation without motion.
- Placeholder destinations must announce their unavailable state without pretending to be active controls.
- Decorative grain and blueprint marks are ignored by assistive technology.

## 10. GitHub Pages and Technical Architecture

- Scaffold with React, Vite, and TypeScript.
- Use a single document with anchor navigation; React Router is unnecessary.
- Configure Vite with a relative or repository-safe base so assets work at both a user site and a repository subpath.
- Add a GitHub Actions Pages workflow that installs dependencies, runs tests, builds, uploads `dist`, and deploys on the configured default branch.
- Keep all runtime assets local to the repository. Avoid fragile hotlinked images.
- Provide `robots.txt`, a sitemap suitable for the eventual public URL, and clear placeholder notes where the final hostname is required.
- Add descriptive page title, meta description, theme color, Open Graph fields, and a local social preview image.
- Do not add SPA fallback routing because the site has one static route.

## 11. Asset and Fidelity Inventory

| Visible ingredient | Required medium | Implementation requirement |
|---|---|---|
| Warm folded dossier field | Generated raster texture | Produce a seamless, low-contrast, locally stored texture without embedded text. |
| Blueprint paper grain | Generated raster texture | Produce a dark, subtle local texture; ensure contrast does not rely on it. |
| `<5 MIN` inspection stamp | Authored SVG + semantic text | Keep the metric selectable/readable; animate the stamp group, not rasterized copy. |
| Ghosted `5 DAYS` impression | Semantic text + CSS/SVG texture mask | Decorative duplicate is hidden from accessibility; textual case study explains the metric. |
| Punched case index | CSS/SVG geometry + semantic anchors | Keyboard accessible and recomposed horizontally on mobile. |
| Leader lines and workflow routes | Authored SVG | Paths scale responsively; labels remain HTML or accessible SVG text. |
| Evidence ledger | Semantic HTML + CSS | Rows are structured headings and prose, never flattened into an image. |
| Project/system pictograms | Small authored SVG set | Use a consistent drafting grammar; do not import a generic icon tile set. |
| Overlap and contact shadow | CSS | Minimal physical separation, no floating digital-card shadows. |
| Typography | Local web fonts | Barlow Condensed + Atkinson Hyperlegible Next with resilient fallbacks. |
| Social preview | Generated/exported raster | Produced from the finished visual world after implementation. |

## 12. Testing and Verification

### Automated

- Component tests verify the three cases and evidence rows render from typed data.
- Tests verify placeholder destinations are not interactive anchors.
- Tests verify service items correctly separate current capability from building-next items.
- Accessibility checks cover heading order, landmark presence, labels, and primary contrast-sensitive states.
- `npm run build` must produce a successful static bundle.
- A base-path check loads the built site from a nested path matching GitHub Pages behavior.

### Manual and visual

- Inspect one desktop and one mobile viewport in a single bounded review round.
- Confirm the first viewport explains who Kunal is, the quantified result, and both next actions within seconds.
- Confirm no horizontal overflow, clipped interactive elements, or unreadable condensed body copy.
- Confirm keyboard traversal, visible focus, skip link, reduced-motion behavior, and disabled placeholders.
- Compare the opening, outcome stamp, punched index, and evidence ledger directly with the approved comp.
- Run the Impeccable mechanical detector once after UI work, fix mechanical issues in one batch, and complete the designated finish review.

## 13. Acceptance Criteria

The implementation is ready when:

- The React site builds and runs entirely as static GitHub Pages content.
- The Evidence Docket composition is recognizable in desktop and intentionally recomposed on mobile.
- The opening truthfully states the ticket-creation metric and does not overclaim its meaning.
- Employers and clients have distinct, understandable paths supported by the same proof.
- All three selected systems and the operational evidence register are present.
- Current services and developing capabilities are visually and semantically distinct.
- Every absent personal asset or URL appears as an explicit non-interactive placeholder.
- No fabricated claims, private salary data, or unverified marketplace statistics appear.
- Keyboard, contrast, semantic structure, responsive behavior, and reduced-motion support pass verification.
- The final build is compared against the approved comp, reviewed, documented in `DESIGN.md`, and prepared for GitHub Pages deployment.
