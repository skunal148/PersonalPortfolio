# Cybersecurity Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Kunal Shinde's evidence-led cybersecurity portfolio as an accessible, responsive React site that deploys statically to GitHub Pages.

**Architecture:** A single Vite/React document renders typed portfolio data through focused presentational components. The approved Evidence Docket composition is reproduced with semantic HTML, authored SVG, local raster textures, and progressive CSS/Intersection Observer motion; anchors provide navigation without a router or backend.

**Tech Stack:** React 19.2.8, React DOM 19.2.8, Vite 8.2.2, TypeScript 6.1.1, Vitest 4.1.11, Testing Library, Playwright 1.62.1, `@axe-core/playwright` 4.13.0, CSS, SVG, and GitHub Actions Pages.

**Spec:** `docs/superpowers/specs/2026-08-30-cybersecurity-portfolio-design.md`

## Global Constraints

- Use the approved Change-Control Folio world and Evidence Docket composition recorded in `.impeccable/surfaces/src-app-tsx.md`.
- Preserve the factual source of truth in `PRODUCT.md`; never invent employers, clients, dates, certifications, testimonials, adoption, confidential details, or additional metrics.
- Describe the flagship metric only as vulnerability-remediation ticket-creation turnaround from approximately five days to under five minutes.
- Keep résumé, headshot, email, LinkedIn, GitHub, Fiverr, and Upwork in an explicit non-interactive replacement state until real values are supplied.
- Separate current freelance capabilities from AppSec, Product Security, threat modeling, advanced offensive work, and OSCP status still being developed or confirmed.
- Support keyboard navigation, semantic landmarks, visible focus, WCAG-compliant contrast, responsive reading, and `prefers-reduced-motion`.
- Use a single static route with anchor navigation; do not add React Router, backend APIs, CMS, analytics, or a nonfunctional form.
- Configure all assets for both `username.github.io` and `username.github.io/repository-name/` deployments.
- Compare implementation against `.impeccable/mocks/comp-c-evidence-docket.webp`; do not rasterize core text, controls, evidence rows, or diagrams.

## File Structure

```text
.
├── .github/workflows/deploy-pages.yml
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── scripts/verify-dist.mjs
├── e2e/portfolio.spec.ts
├── src/
│   ├── assets/
│   │   ├── social/og-card.webp
│   │   └── textures/
│   │       ├── blueprint-grain.webp
│   │       └── paper-grain.webp
│   ├── components/
│   │   ├── BlueprintHeader.tsx
│   │   ├── CareerTrace.tsx
│   │   ├── CaseArchive.tsx
│   │   ├── ContactDocket.tsx
│   │   ├── DraftedIcons.tsx
│   │   ├── EvidenceDocketHero.tsx
│   │   ├── EvidenceLedger.tsx
│   │   ├── OperationalRegister.tsx
│   │   ├── OutcomeStamp.tsx
│   │   ├── SectionIndex.tsx
│   │   ├── ServicesDocket.tsx
│   │   └── WorkflowDiagram.tsx
│   ├── data/portfolio.ts
│   ├── hooks/useInView.ts
│   ├── styles/global.css
│   ├── styles/tokens.css
│   ├── test/setup.ts
│   ├── types/portfolio.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── playwright.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

Each component owns one visible section or reusable design primitive. `src/data/portfolio.ts` owns every substantive claim; components must not duplicate factual prose.

---

### Task 1: Static React Foundation and Test Harness

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/App.test.tsx`
- Create: `src/test/setup.ts`

**Interfaces:**
- Produces: the `App(): JSX.Element` root, Vitest `jsdom` environment, and repository-safe Vite base used by every later task.
- Consumes: `PRODUCT.md` and the approved design spec; no earlier code interface.

- [ ] **Preflight: Load the Impeccable craft floor before any UI edit**

Read `/Users/kunal/.agents/skills/impeccable/reference/craft-floor.md` completely and keep its bans and quality checks active through all UI tasks. Do this once, immediately before editing UI files.

- [ ] **Step 1: Create the package manifest and TypeScript/Vite configuration**

Create `package.json` with exact scripts and current dependency versions:

```json
{
  "name": "kunal-shinde-security-portfolio",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "verify:dist": "node scripts/verify-dist.mjs"
  },
  "dependencies": {
    "@fontsource/atkinson-hyperlegible-next": "5.3.0",
    "@fontsource/barlow-condensed": "5.3.0",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@axe-core/playwright": "4.13.0",
    "@playwright/test": "1.62.1",
    "@testing-library/jest-dom": "7.0.1",
    "@testing-library/react": "16.3.3",
    "@testing-library/user-event": "14.6.6",
    "@types/node": "26.4.0",
    "@types/react": "19.2.18",
    "@types/react-dom": "19.2.5",
    "@vitejs/plugin-react": "6.1.1",
    "jsdom": "30.0.1",
    "typescript": "7.0.2",
    "vite": "8.2.2",
    "vitest": "4.1.11"
  }
}
```

Use `base: "./"` in `vite.config.ts` so emitted URLs remain valid under a GitHub Pages repository subpath. Configure Vitest with `environment: "jsdom"`, `setupFiles: "./src/test/setup.ts"`, and CSS enabled. Configure `tsconfig.app.json` for `ES2023`, `DOM`, `DOM.Iterable`, `react-jsx`, strict type-checking, and bundler module resolution; configure `tsconfig.node.json` for Vite and Node scripts.

- [ ] **Step 2: Install dependencies and write the failing root test**

Run:

```bash
npm install
```

Create `src/App.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the portfolio identity and primary landmark", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /security engineering, made operational/i,
      }),
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run the root test and verify failure**

Run: `npm test -- src/App.test.tsx`

Expected: FAIL because the scaffolded `App` does not yet render the required `main` landmark and heading.

- [ ] **Step 4: Implement the minimal semantic root**

Create `src/App.tsx`:

```tsx
export default function App() {
  return (
    <main id="main-content">
      <h1>Security engineering, made operational.</h1>
    </main>
  );
}
```

Create `src/main.tsx` with `createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>)`. Add `@testing-library/jest-dom/vitest` to `src/test/setup.ts`. Create an `index.html` whose root element is `<div id="root"></div>` and whose title is `Kunal Shinde — Security Engineering & Automation`.

- [ ] **Step 5: Run tests and build**

Run:

```bash
npm test -- src/App.test.tsx
npm run build
```

Expected: both commands succeed and `dist/index.html` exists.

- [ ] **Step 6: Commit the working foundation**

```bash
git add package.json package-lock.json vite.config.ts tsconfig*.json index.html src/main.tsx src/App.tsx src/App.test.tsx src/test/setup.ts
git commit -m "build: scaffold static React portfolio"
```

---

### Task 2: Typed Portfolio Truth and Replacement States

**Files:**
- Create: `src/types/portfolio.ts`
- Create: `src/data/portfolio.ts`
- Create: `src/data/portfolio.test.ts`

**Interfaces:**
- Produces: `PortfolioContent`, `CaseStudy`, `CapabilityGroup`, `Service`, `ExternalDestination`, and exported `portfolio` data consumed by every page section.
- Consumes: no runtime interface from Task 1 beyond TypeScript and Vitest.

- [ ] **Step 1: Write failing data-integrity tests**

Create `src/data/portfolio.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { portfolio } from "./portfolio";

describe("portfolio content", () => {
  it("keeps the flagship outcome scoped to ticket creation", () => {
    const flagship = portfolio.caseStudies[0];

    expect(flagship.slug).toBe("vulnerability-workflow-automation");
    expect(flagship.outcome).toMatch(/ticket-creation turnaround/i);
    expect(flagship.outcome).toMatch(/under five minutes/i);
    expect(flagship.outcome).not.toMatch(/triage|full remediation|scan time/i);
  });

  it("keeps missing external destinations non-interactive", () => {
    expect(portfolio.destinations).toHaveLength(6);
    expect(
      portfolio.destinations.every((destination) =>
        destination.status === "placeholder" && !("href" in destination),
      ),
    ).toBe(true);
  });

  it("separates current services from developing capabilities", () => {
    expect(portfolio.services.some((service) => service.status === "current")).toBe(true);
    expect(portfolio.services.some((service) => service.status === "building-next")).toBe(true);
  });
});
```

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test -- src/data/portfolio.test.ts`

Expected: FAIL because `portfolio`, its types, and the module do not exist.

- [ ] **Step 3: Define exact types**

Create `src/types/portfolio.ts`:

```ts
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
```

- [ ] **Step 4: Create the source-of-truth record**

Create `src/data/portfolio.ts` exporting `portfolio satisfies PortfolioContent`. Use the exact hero copy from the design spec, three case studies, six capability groups, the confirmed career trace, the three current commercial pillars, and these building-next entries: manual web/API penetration testing, secure SDLC and threat modeling, Product Security, and advanced offensive work. Do not place OSCP on the public page until Kunal supplies its real status; keep that fact only in the README replacement checklist.

For the flagship case, use these exact evidence rows:

```ts
[
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
]
```

Create exactly six replacement destinations: Résumé PDF, Email, LinkedIn, GitHub, Fiverr, and Upwork. Each uses `{ status: "placeholder", replacement: "Add …" }` and contains no `href`.

Add `profileImage: { status: "placeholder", label: "Professional headshot", replacement: "Add image" }` so the absent headshot is visible and replaceable without inventing a portrait.

- [ ] **Step 5: Run data tests and TypeScript build**

Run:

```bash
npm test -- src/data/portfolio.test.ts
npm run build
```

Expected: PASS with no type errors.

- [ ] **Step 6: Commit the product truth**

```bash
git add src/types/portfolio.ts src/data/portfolio.ts src/data/portfolio.test.ts
git commit -m "feat: model evidence-led portfolio content"
```

---

### Task 3: Visual Tokens, Local Textures, and Drafting Primitives

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/assets/textures/paper-grain.webp`
- Create: `src/assets/textures/blueprint-grain.webp`
- Create: `src/components/DraftedIcons.tsx`
- Create: `src/components/OutcomeStamp.tsx`
- Create: `src/components/OutcomeStamp.test.tsx`
- Modify: `src/main.tsx`

**Interfaces:**
- Produces: CSS tokens, global material classes, `DraftedIcon({ name, title })`, and `OutcomeStamp({ before, after, scope, active? })`.
- Consumes: `portfolio.flagshipMetric` from Task 2.

- [ ] **Step 1: Run the designated asset-producer inventory pass**

Spawn `impeccable-asset-producer` with the approved comp `.impeccable/mocks/comp-c-evidence-docket.webp`, the inventory in the design spec, the two required texture output paths, 1024×1024 dimensions, WebP format, no transparency, seamless crop, and the explicit boundary that core type, stamps, routes, diagrams, perforations, and controls remain semantic code or authored SVG. Save its media decision manifest to `.impeccable/assets/manifest.json` and read its prompt guidance before generation.

- [ ] **Step 2: Produce the two texture assets**

Use the approved comp as reference and the image-generation workflow to create two seamless, text-free, low-contrast raster tiles:

1. `paper-grain.webp`: warm fibrous archival paper at `1024×1024`, matte, subtle fold wear, no holes, stamps, writing, or directional lighting.
2. `blueprint-grain.webp`: deep navy diazo paper at `1024×1024`, subtle fiber and print variation, no grid, writing, diagrams, or light bloom.

Convert to WebP at quality 82–88. Inspect each tile before use. Keep the grain quiet enough that a flat fallback color preserves the full design.

- [ ] **Step 3: Write the failing OutcomeStamp test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OutcomeStamp } from "./OutcomeStamp";

describe("OutcomeStamp", () => {
  it("announces the metric scope without duplicating decorative text", () => {
    render(
      <OutcomeStamp
        before="5 DAYS"
        after="<5 MIN"
        scope="Vulnerability-remediation ticket-creation turnaround"
      />,
    );

    expect(
      screen.getByText(/vulnerability-remediation ticket-creation turnaround/i),
    ).toBeInTheDocument();
    expect(screen.getByText("<5 MIN")).toBeInTheDocument();
  });
});
```

- [ ] **Step 4: Run the test and verify failure**

Run: `npm test -- src/components/OutcomeStamp.test.tsx`

Expected: FAIL because `OutcomeStamp` does not exist.

- [ ] **Step 5: Implement tokens and primitives**

Define these root tokens in `tokens.css`:

```css
:root {
  --ink-blueprint: #0b1c2d;
  --paper: #f1eadb;
  --copper: #b66a3c;
  --verified: #44c0c9;
  --vermilion: #df4a39;
  --ink: #152538;
  --paper-muted: #d8cfbd;
  --focus: #79e6eb;
  --display: "Barlow Condensed", "Arial Narrow", sans-serif;
  --body: "Atkinson Hyperlegible Next", "Segoe UI", sans-serif;
  --page-gutter: clamp(1rem, 4vw, 4rem);
  --section-space: clamp(5rem, 10vw, 9rem);
  --rule: 1px;
  --stamp-time: 380ms;
}
```

Import `@fontsource/barlow-condensed/500.css`, `@fontsource/barlow-condensed/700.css`, `@fontsource/atkinson-hyperlegible-next/400.css`, and `@fontsource/atkinson-hyperlegible-next/700.css` in `src/main.tsx`. `global.css` must include box sizing, body colors, skip-link styling, focus-visible styling, paper/blueprint texture classes, reduced-motion overrides, and no global `transition: all`.

Implement `OutcomeStamp` with one semantic `<figure>` and `<figcaption>`. Render `before` once as `aria-hidden="true"`, render `after` as visible semantic text, and include the scope in the caption. Build the stamp border and wear with authored SVG/CSS masks, not a raster containing the metric.

- [ ] **Step 6: Run tests and check asset imports**

Run:

```bash
npm test -- src/components/OutcomeStamp.test.tsx
npm run build
```

Expected: PASS; Vite emits both texture assets with hashed file names.

- [ ] **Step 7: Commit the material foundation**

```bash
git add .impeccable/assets/manifest.json src/styles src/assets/textures src/components/DraftedIcons.tsx src/components/OutcomeStamp.tsx src/components/OutcomeStamp.test.tsx src/main.tsx
git commit -m "feat: establish change-control visual system"
```

---

### Task 4: Blueprint Masthead and Evidence-Docket Hero

**Files:**
- Create: `src/components/BlueprintHeader.tsx`
- Create: `src/components/SectionIndex.tsx`
- Create: `src/components/EvidenceDocketHero.tsx`
- Create: `src/components/EvidenceDocketHero.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/global.css`
- Modify: `index.html`

**Interfaces:**
- Produces: `BlueprintHeader()`, `SectionIndex({ items, activeId? })`, and `EvidenceDocketHero({ content })`.
- Consumes: `PortfolioContent["identity"]`, `PortfolioContent["flagshipMetric"]`, and `OutcomeStamp`.

- [ ] **Step 1: Write the failing hero behavior test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { portfolio } from "../data/portfolio";
import { EvidenceDocketHero } from "./EvidenceDocketHero";

describe("EvidenceDocketHero", () => {
  it("presents identity, quantified proof, and both visitor actions", () => {
    render(<EvidenceDocketHero content={portfolio} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Security engineering, made operational.",
    );
    expect(screen.getByText("<5 MIN")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore the evidence" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByRole("link", { name: "Start a conversation" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });
});
```

- [ ] **Step 2: Run the hero test and verify failure**

Run: `npm test -- src/components/EvidenceDocketHero.test.tsx`

Expected: FAIL because the hero component does not exist.

- [ ] **Step 3: Implement the masthead, case index, and hero**

The header must render `Work`, `Experience`, `Services`, and `Contact` anchors and a skip link before navigation. On small screens, use a real button with `aria-expanded` to reveal the index inside document flow.

Build the hero structure in this exact order:

```tsx
<section className="docket-hero" aria-labelledby="hero-title">
  <div className="docket-hero__statement paper-field">
    <p className="eyebrow">…</p>
    <h1 id="hero-title">…</h1>
    <p className="docket-hero__lede">…</p>
    <div className="docket-hero__actions">…</div>
  </div>
  <div className="docket-hero__outcome paper-field">
    <OutcomeStamp … />
    <dl className="docket-hero__callouts">…</dl>
  </div>
  <SectionIndex items={[…]} />
</section>
```

Use the comp's asymmetry at desktop: statement 42%, outcome 58%, punched index at the far edge. Do not put either half in a floating rounded card.

- [ ] **Step 4: Integrate into App and reproduce the approved first viewport**

Place the direction contract directly in `index.html` as the first child of `<body>`, before `<div id="root">`. This guarantees that Vite preserves the literal HTML comment in the production artifact. Use seed key `4a2bc724` and the five required blocks:

```text
THESIS: Evidence behaves as a change-control dossier; the page refuses hacker-terminal spectacle and generic résumé cards.
OWN-WORLD: Blueprint navy, warm carbon paper, cyan routes, vermilion inspection stamps, square ledgers, perforation and registration marks.
STORY: Kunal finds operational security bottlenecks, engineers integrated systems, proves outcomes, and offers employment or client paths.
FIRST VIEWPORT: A full-width blueprint masthead opens onto a 42/58 folded dossier; statement and dual actions left, five-day ghost and under-five-minute stamp right, punched case index at the edge.
FORM: Evidence Docket, third approved composition, direction seed 4a2bc724.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
```

Render `BlueprintHeader` and `EvidenceDocketHero` before empty anchor sections for later tasks. Match the approved comp's scale at 1536×1024 before expanding later sections.

- [ ] **Step 5: Run focused tests and build**

Run:

```bash
npm test -- src/components/EvidenceDocketHero.test.tsx src/App.test.tsx
npm run build
rg -n "direction seed 4a2bc724" dist/index.html
```

Expected: tests pass, build succeeds, and the direction contract is present in built HTML.

- [ ] **Step 6: Commit the approved opening**

```bash
git add src/components/BlueprintHeader.tsx src/components/SectionIndex.tsx src/components/EvidenceDocketHero.tsx src/components/EvidenceDocketHero.test.tsx src/App.tsx src/styles/global.css index.html
git commit -m "feat: build evidence docket opening"
```

---

### Task 5: Flagship Ledger and Conceptual Workflow

**Files:**
- Create: `src/components/EvidenceLedger.tsx`
- Create: `src/components/WorkflowDiagram.tsx`
- Create: `src/components/EvidenceLedger.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: `EvidenceLedger({ caseStudy })` and `WorkflowDiagram({ steps, note })`.
- Consumes: `CaseStudy`, `EvidenceRow`, and `portfolio.caseStudies[0]`.

- [ ] **Step 1: Write failing semantic-ledger tests**

```tsx
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { portfolio } from "../data/portfolio";
import { EvidenceLedger } from "./EvidenceLedger";

describe("EvidenceLedger", () => {
  it("renders ordered problem, intervention, and outcome evidence", () => {
    render(<EvidenceLedger caseStudy={portfolio.caseStudies[0]} />);
    const ledger = screen.getByRole("region", { name: /vulnerability workflow automation evidence/i });
    const headings = within(ledger).getAllByRole("heading", { level: 3 });

    expect(headings.map((heading) => heading.textContent)).toEqual([
      "Problem",
      "Intervention",
      "Outcome",
    ]);
    expect(within(ledger).getByText(/conceptual workflow/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the ledger test and verify failure**

Run: `npm test -- src/components/EvidenceLedger.test.tsx`

Expected: FAIL because the ledger component does not exist.

- [ ] **Step 3: Implement semantic ledger and workflow diagram**

Render evidence rows as an ordered list with each label as an `h3`. `WorkflowDiagram` uses an SVG for routes and pictograms, but each step label is ordinary accessible text. Include a visually present and screen-reader-visible note: `Conceptual workflow · organizational details omitted`.

The workflow steps are exactly `Nessus`, `Ingest`, `Normalize and contextualize`, `GLPI ticket`, and `Remediation tracking`. Use a cyan line until ticket creation and vermilion for the outcome route. Provide an SVG `<title>` and a concise textual sequence below the graphic.

- [ ] **Step 4: Integrate the flagship section**

Add `<section id="work">` after the hero. Use a full-width blueprint field with a torn warm-paper title strip. Include the evidence ledger, workflow diagram, technology tags as ruled annotations, and the separate `185+ vulnerability-remediation program` proof note without implying that all 185 items flowed through the automation.

- [ ] **Step 5: Run tests and build**

Run:

```bash
npm test -- src/components/EvidenceLedger.test.tsx
npm run build
```

Expected: PASS with no invalid SVG or heading errors.

- [ ] **Step 6: Commit the flagship evidence system**

```bash
git add src/components/EvidenceLedger.tsx src/components/WorkflowDiagram.tsx src/components/EvidenceLedger.test.tsx src/App.tsx src/styles/global.css
git commit -m "feat: add auditable vulnerability case study"
```

---

### Task 6: Case Archive and Operational Register

**Files:**
- Create: `src/components/CaseArchive.tsx`
- Create: `src/components/OperationalRegister.tsx`
- Create: `src/components/CaseArchive.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: `CaseArchive({ cases })` and `OperationalRegister({ groups })`.
- Consumes: `CaseStudy[]` and `CapabilityGroup[]` from Task 2.

- [ ] **Step 1: Write the failing archive test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { portfolio } from "../data/portfolio";
import { CaseArchive } from "./CaseArchive";

describe("CaseArchive", () => {
  it("renders all selected systems without invented metrics", () => {
    render(<CaseArchive cases={portfolio.caseStudies} />);

    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(screen.getByText(/security ticket-gap automation/i)).toBeInTheDocument();
    expect(screen.getByText(/microsoft sso \+ scim portal/i)).toBeInTheDocument();
    expect(screen.queryByText(/%|clients served|users onboarded/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test and verify failure**

Run: `npm test -- src/components/CaseArchive.test.tsx`

Expected: FAIL because `CaseArchive` does not exist.

- [ ] **Step 3: Implement the archive and register**

The archive uses three full-width ruled entries with a number, title, summary, outcome, and technology annotations. Do not use a three-card bento grid. The active/focused entry may expose additional details through `<details>` so keyboard and no-JavaScript behavior remain intact.

The operational register renders six domain rows. Each row uses a drafted icon, domain heading, and inline list of evidence. The body copy remains in the humanist face, not the condensed display face.

- [ ] **Step 4: Integrate sections and anchor targets**

Place the selected systems archive after the flagship ledger. Add `<section id="experience">` containing the operational register. Update the masthead anchor tests if their targets are not yet present.

- [ ] **Step 5: Run tests and build**

Run:

```bash
npm test -- src/components/CaseArchive.test.tsx src/App.test.tsx
npm run build
```

Expected: PASS; all header anchor targets exist in the rendered document.

- [ ] **Step 6: Commit case and capability evidence**

```bash
git add src/components/CaseArchive.tsx src/components/OperationalRegister.tsx src/components/CaseArchive.test.tsx src/App.tsx src/styles/global.css
git commit -m "feat: add selected systems and operating evidence"
```

---

### Task 7: Career Trace, Services, and Contact Conversion

**Files:**
- Create: `src/components/CareerTrace.tsx`
- Create: `src/components/ServicesDocket.tsx`
- Create: `src/components/ContactDocket.tsx`
- Create: `src/components/ConversionSections.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: `CareerTrace({ stages })`, `ServicesDocket({ services })`, and `ContactDocket({ destinations, profileImage })`.
- Consumes: `string[]`, `Service[]`, `ExternalDestination[]`, and `AssetPlaceholder`.

- [ ] **Step 1: Write failing conversion-state tests**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { portfolio } from "../data/portfolio";
import { ContactDocket } from "./ContactDocket";
import { ServicesDocket } from "./ServicesDocket";

describe("conversion sections", () => {
  it("labels developing services separately", () => {
    render(<ServicesDocket services={portfolio.services} />);
    expect(screen.getByRole("heading", { name: /current capability/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /building next/i })).toBeInTheDocument();
  });

  it("does not render replacement destinations as links", () => {
    render(
      <ContactDocket
        destinations={portfolio.destinations}
        profileImage={portfolio.profileImage}
      />,
    );
    expect(screen.queryAllByRole("link")).toHaveLength(0);
    expect(screen.getByText(/résumé pdf/i)).toHaveAttribute("aria-disabled", "true");
    expect(screen.getByText(/professional headshot/i)).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });
});
```

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test -- src/components/ConversionSections.test.tsx`

Expected: FAIL because the components do not exist.

- [ ] **Step 3: Implement the career and services sections**

`CareerTrace` renders the five confirmed stages as a semantic ordered list joined by an authored SVG route. The final stage is marked `Direction of growth`. Do not claim an architect or product-security title.

`ServicesDocket` separates current and building-next arrays before render. Current services use a cyan `Current capability` status; developing entries use copper `Building next` and contain no inquiry link. Add authorized-scope copy: `Security assessments and testing are performed only with explicit authorization and agreed boundaries.`

- [ ] **Step 4: Implement the contact docket**

Render two text paths, `Hiring conversation` and `Project inquiry`, followed by the six destinations. For a placeholder destination, render:

```tsx
<span className="destination destination--placeholder" aria-disabled="true">
  <span>{destination.label}</span>
  <small>{destination.replacement}</small>
</span>
```

For a future ready destination, render a normal `<a>` with `target="_blank"` and `rel="noreferrer"` only when its typed state contains `href`.

Render `profileImage` as a square perforated-paper replacement field labeled `Professional headshot · Add image`, with `aria-disabled="true"`, no generated person, and no `<img>` until a real local asset is supplied.

- [ ] **Step 5: Integrate and verify conversion sections**

Add the career trace after the operational register, `<section id="services">`, and `<section id="contact">`. Run:

```bash
npm test -- src/components/ConversionSections.test.tsx src/App.test.tsx
npm run build
```

Expected: PASS; no placeholder destination appears as an anchor.

- [ ] **Step 6: Commit dual-audience conversion**

```bash
git add src/components/CareerTrace.tsx src/components/ServicesDocket.tsx src/components/ContactDocket.tsx src/components/ConversionSections.test.tsx src/App.tsx src/styles/global.css
git commit -m "feat: add career services and contact paths"
```

---

### Task 8: Responsive Composition, Motion, and Accessibility

**Files:**
- Create: `src/hooks/useInView.ts`
- Create: `playwright.config.ts`
- Create: `e2e/portfolio.spec.ts`
- Modify: `src/components/OutcomeStamp.tsx`
- Modify: `src/components/EvidenceLedger.tsx`
- Modify: `src/components/SectionIndex.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: `useInView<T extends Element>(options): { ref, inView }` and end-to-end guarantees at desktop/mobile/reduced-motion viewports.
- Consumes: the complete page from Tasks 4–7.

- [ ] **Step 1: Add Playwright configuration and failing end-to-end checks**

Configure Playwright with `webServer.command: "npm run dev -- --host 127.0.0.1"`, `webServer.url: "http://127.0.0.1:5173"`, Chromium only, and screenshot capture on failure.

Create `e2e/portfolio.spec.ts` with tests that:

```ts
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("desktop opening exposes proof and both actions", async ({ page }) => {
  await page.setViewportSize({ width: 1536, height: 1024 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Security engineering, made operational.",
  );
  await expect(page.getByText("<5 MIN")).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore the evidence" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Start a conversation" })).toBeVisible();
});

test("mobile page has no horizontal document overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const widths = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth,
  }));
  expect(widths.scroll).toBe(widths.client);
});

test("page has no serious or critical axe violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter(({ impact }) => impact === "serious" || impact === "critical"),
  ).toEqual([]);
});
```

- [ ] **Step 2: Install Chromium and run tests to expose current gaps**

Run:

```bash
npx playwright install chromium
npm run test:e2e
```

Expected: at least the overflow, mobile navigation, or accessibility checks fail before the responsive and a11y pass.

- [ ] **Step 3: Implement responsive layout**

Add desktop, tablet, and mobile rules:

- At `max-width: 900px`, move the outcome beside/below the statement and turn the vertical index into a horizontal strip.
- At `max-width: 640px`, use one column, full-width actions, stacked ledger rows, simplified route bends, and at least 44×44 px interactive targets.
- Use `overflow: clip` only on decorative wrappers; never hide overflow on the entire `body` as a substitute for fixing width.
- Keep section headings below roughly 4 lines at 390 px and body measure between 45–75 characters where practical.

- [ ] **Step 4: Add bounded motion with reduced-motion behavior**

Implement `useInView` with one `IntersectionObserver` per component instance, disconnect after first entry, and return visible content when `IntersectionObserver` is unavailable. Add a `data-visible` state to the stamp, workflow, and grouped ledger only.

Use the approved timing tokens: 380 ms stamp, 700 ms route, 320 ms grouped ledger reveal. Under `prefers-reduced-motion: reduce`, set animation duration to `0.01ms`, remove transforms, and render all routes at full stroke length.

- [ ] **Step 5: Run component, e2e, and build checks**

Run:

```bash
npm test
npm run test:e2e
npm run build
```

Expected: all tests pass with zero serious or critical Axe violations and no mobile document overflow.

- [ ] **Step 6: Commit responsive accessibility and motion**

```bash
git add src/hooks/useInView.ts playwright.config.ts e2e/portfolio.spec.ts src/components src/styles/global.css
git commit -m "feat: add responsive accessible portfolio motion"
```

---

### Task 9: Metadata, GitHub Pages Deployment, and Release Verification

**Files:**
- Create: `public/favicon.svg`
- Create: `public/robots.txt`
- Create: `public/site.webmanifest`
- Create: `src/assets/social/og-card.webp`
- Create: `scripts/verify-dist.mjs`
- Create: `.github/workflows/deploy-pages.yml`
- Create: `README.md`
- Modify: `index.html`
- Modify: `package.json`

**Interfaces:**
- Produces: deployable `dist/`, Pages workflow, local SEO assets, and replacement instructions.
- Consumes: final built App, design tokens, and approved visual world.

- [ ] **Step 1: Write the failing distribution verifier**

Create `scripts/verify-dist.mjs` that reads `dist/index.html` and fails unless:

- all `src` and stylesheet `href` URLs are relative (`./assets/…`);
- title and description metadata exist;
- the direction seed `4a2bc724` survives the production build;
- `dist/robots.txt`, `dist/site.webmanifest`, and `dist/favicon.svg` exist;
- no `href="#"`, `example.com`, or fake email address appears.

Run:

```bash
npm run build
npm run verify:dist
```

Expected: FAIL until metadata and public assets are complete.

- [ ] **Step 2: Add exact metadata and public assets**

Use this title and description in `index.html`:

```html
<title>Kunal Shinde — Security Engineering &amp; Automation</title>
<meta name="description" content="Security engineering portfolio focused on vulnerability management, identity, incident response, and workflow automation." />
<meta name="theme-color" content="#0B1C2D" />
```

Add Open Graph and Twitter metadata pointing to `./assets/og-card.webp`. Generate the local social preview from the finished hero composition with only `Kunal Shinde`, `Security engineering, made operational.`, and the `5 days → under 5 min` ticket-creation result. Add a local authored blueprint-registration favicon. `robots.txt` allows indexing but does not hardcode a sitemap until the final hostname is known; README explains the one-line replacement.

- [ ] **Step 3: Add the GitHub Pages workflow**

Create `.github/workflows/deploy-pages.yml` with:

- trigger on pushes to `main` and manual dispatch;
- permissions `contents: read`, `pages: write`, `id-token: write`;
- concurrency group `pages`;
- `actions/checkout@v7` and Node 24 through `actions/setup-node@v7` with npm cache;
- `npm ci`, `npm test`, `npm run build`, and `npm run verify:dist`;
- `actions/configure-pages@v6`, `actions/upload-pages-artifact@v5` using `./dist`, and `actions/deploy-pages@v5`.

The workflow must not assume a custom domain or repository name.

- [ ] **Step 4: Document local and deployment usage**

README sections:

- `Development`: `npm install`, `npm run dev`, `npm test`, `npm run test:e2e`.
- `GitHub Pages`: enable Pages with GitHub Actions as the source, push `main`, and use the workflow output URL.
- `Replace before publishing`: exact fields in `src/data/portfolio.ts`, résumé/headshot paths, six destinations, final public hostname, OSCP status, and any confidential case-study review.
- `Content truth`: do not add claims without evidence.

- [ ] **Step 5: Run the release verification suite**

Run:

```bash
npm test
npm run test:e2e
npm run build
npm run verify:dist
git status --short
```

Expected: tests and build pass; verifier passes; only intended release files are modified.

- [ ] **Step 6: Commit deployable release infrastructure**

```bash
git add public src/assets/social scripts/verify-dist.mjs .github/workflows/deploy-pages.yml README.md index.html package.json package-lock.json
git commit -m "build: prepare portfolio for GitHub Pages"
```

---

### Task 10: Visual QA, Mechanical Detection, Finish Review, and Design Documentation

**Files:**
- Modify: UI files named by the bounded defect batch only
- Create: `artifacts/portfolio-desktop.png`
- Create: `artifacts/portfolio-mobile.png`
- Create: `DESIGN.md`
- Create: `.impeccable/design.json`

**Interfaces:**
- Produces: verified screenshots, final reviewer verdict, `DESIGN.md`, and recorded system sidecar.
- Consumes: the original request, approved comp, finished app, craft-floor reference, tests, and detector output.

- [ ] **Step 1: Start the built site and capture one batched inspection round**

Run the production preview and capture:

- Desktop: 1536×1024, including hero and legible crops of each major section.
- Mobile: 390×844, including hero and legible crops of each major section.

Save full-page screenshots as `artifacts/portfolio-desktop.png` and `artifacts/portfolio-mobile.png`. Compare the masthead, statement/outcome split, stamp scale, punched index, and first evidence ledger directly with `.impeccable/mocks/comp-c-evidence-docket.webp`.

- [ ] **Step 2: Apply one batched visual defect fix**

List all material mismatches found in the batched desktop/mobile comparison. Fix them together without changing the approved direction. Recapture the same two viewports once to confirm layout, overflow, loading, and positions. This is the second and final build-thread screenshot round.

- [ ] **Step 3: Run the Impeccable detector once**

Run:

```bash
node /Users/kunal/.agents/skills/impeccable/scripts/detect.mjs --json src/App.tsx src/components src/styles/global.css src/styles/tokens.css
```

Fix mechanical findings in one batch. Do not run the detector a second time.

- [ ] **Step 4: Run the designated finish reviewer**

Spawn `impeccable-finish-reviewer` with no inherited conversation history. Pass:

- original request and confirmed answers;
- `src/App.tsx` and related components/styles;
- both screenshot paths;
- direction contract and seed `4a2bc724`;
- approved direction sketch and Evidence Docket comp;
- detector findings;
- `/Users/kunal/.agents/skills/impeccable/reference/craft-floor.md`.

Apply one material-fix batch from the reviewer, recapture the same viewports, and request the reviewer verdict. If the second verdict still has material findings, present them to the user rather than starting an unbounded polish loop.

- [ ] **Step 5: Run the designated documenter**

Spawn `impeccable-documenter` with project root, `src/App.tsx`, the final direction contract, `PRODUCT.md`, `/Users/kunal/.agents/skills/impeccable/reference/document.md`, and the project-wide design-system boundary. Verify it creates `DESIGN.md` and `.impeccable/design.json` based on the shipped implementation.

- [ ] **Step 6: Run final verification and commit documentation**

Run:

```bash
npm test
npm run test:e2e
npm run build
npm run verify:dist
git status --short
```

Commit only after every command succeeds:

```bash
git add src artifacts DESIGN.md .impeccable/design.json
git commit -m "docs: record verified portfolio design system"
```

Record the final reviewer disposition and any user-accepted open items in the handoff.
