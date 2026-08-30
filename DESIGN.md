---
name: "Kunal Shinde Security Portfolio"
description: "An evidence-led Change-Control Folio built from paper records and blueprint ledgers."
colors:
  blueprint: "#0b1c2d"
  blueprint-deep: "#07131f"
  paper: "#f1eadb"
  paper-muted: "#d8cfbd"
  ink: "#152538"
  copper: "#b66a3c"
  copper-deep: "#8f492f"
  verified: "#44c0c9"
  verified-deep: "#147f88"
  verified-soft: "#87e2e6"
  vermilion: "#df4a39"
  focus: "#79e6eb"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.7rem, 4.3vw, 4.3rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 5.5vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 3vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.012em"
  body:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.075em"
rounded:
  square: "0px"
  circle: "50%"
spacing:
  page-gutter: "clamp(1rem, 4vw, 4rem)"
  section-space: "clamp(5rem, 10vw, 9rem)"
components:
  docket-action-primary:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.blueprint-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.85rem 3.25rem 0.75rem 1.35rem"
    height: "3.25rem"
  docket-action-primary-hover:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.85rem 3.25rem 0.75rem 1.35rem"
    height: "3.25rem"
  docket-action-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.85rem 3.25rem 0.75rem 1.35rem"
    height: "3.25rem"
  docket-action-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.85rem 3.25rem 0.75rem 1.35rem"
    height: "3.25rem"
  blueprint-navigation-link:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 0.25rem"
    height: "2.75rem"
  blueprint-index-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.45rem 0.6rem"
    width: "4.75rem"
    height: "2.75rem"
  section-index-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "1.4rem 0.75rem 1rem"
  destination-ready:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    padding: "1.4rem 1.75rem"
    height: "7.5rem"
  destination-ready-hover:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    padding: "1.4rem 1.75rem"
    height: "7.5rem"
  evidence-ledger-row:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "0"
    height: "8.25rem"
  outcome-stamp:
    backgroundColor: "transparent"
    textColor: "{colors.vermilion}"
    typography: "{typography.display}"
    rounded: "{rounded.square}"
    padding: "0"
    width: "22rem"
    height: "14.2rem"
---

# Design System: Kunal Shinde Security Portfolio

## Overview

**Creative North Star: "Change-Control Folio"**

Change-Control Folio treats the interface as a working record: warm paper sheets, navy blueprint fields, carbon-copy annotations, routed diagrams, and inspection marks. The system feels technical, accountable, and handled by people—not theatrical, glossy, or terminal-themed.

Evidence Docket is the composition grammar inside that world. Information is organized as ruled registers, numbered rows, edge indexes, annotations, and flat overlapping sheets; the visitor should be able to trace each visual claim through a clear sequence.

Density is deliberate but never cramped. Condensed display type carries labels and headings while a hyperlegible sans serif handles proof, with cyan reserved for verified routes and vermilion reserved for consequential outcomes.

**Key Characteristics:**

- Sharp, square folio sheets with one-pixel ruled construction.
- Warm paper alternating with blueprint navy ledgers.
- Condensed industrial hierarchy paired with hyperlegible body copy.
- Cyan verification routes, vermilion outcome marks, and copper annotation traces.
- Flat overlap and paper grain instead of generic digital-card elevation.
- Responsive reflow that preserves evidence order and physical-document cues.

## Colors

The palette is a controlled exchange between archival paper and technical blueprint fields, with small, functional accents that behave like routing ink and inspection marks.

### Primary

- **Blueprint Navy:** The structural field for headers, evidence ledgers, operational registers, and other high-authority surfaces. Its deeper companion is reserved for strong contrast inside vermilion actions.

### Secondary

- **Verified Cyan:** The route, index, active-evidence, and validation color on blueprint surfaces. The deep and soft variants preserve readable contrast at small sizes and in outcome copy.
- **Annotation Copper:** The drafting-pencil voice for leaders, chronology, rules, and restrained metadata. Its deeper variant carries small labels on paper.

### Tertiary

- **Inspection Vermilion:** The rare outcome and action color for consequential states, active edges, growth nodes, and inspection stamps.

### Neutral

- **Warm Paper:** The primary reading field and physical-sheet surface.
- **Muted Paper:** Secondary copy on blueprint fields, never a low-contrast body-text substitute on paper.
- **Folio Ink:** The default text, rule, and diagram color on paper.
- **Focus Cyan:** The accessibility highlight used for the global keyboard-focus outline.

### Named Rules

**The Evidence Ink Rule.** Cyan means verified route, active evidence, or system connection; it is not ambient decoration.

**The Vermilion Rarity Rule.** Reserve vermilion for consequential actions, outcomes, and state changes so every mark retains authority.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)

**Body Font:** Atkinson Hyperlegible Next (with Segoe UI and sans-serif fallbacks)

**Label Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)

**Character:** The display voice feels stamped, drafted, and operational; the body voice stays unusually legible at the dense sizes required by evidence records. Display roles are predominantly uppercase, while body prose remains sentence case.

### Hierarchy

- **Display** (700, `clamp(3.7rem, 4.3vw, 4.3rem)`, 0.88): opening statements and singular high-impact declarations.
- **Headline** (700, `clamp(3rem, 5.5vw, 5.5rem)`, 0.88): major section headings, normally uppercase and tightly tracked.
- **Title** (700, `clamp(2rem, 3vw, 3.1rem)`, 0.95): record titles and strong component headings.
- **Body** (400, `1rem`, 1.55): readable evidence copy; long passages stay near 54–76 characters per line.
- **Label** (700, `0.9rem`, `0.075em`, uppercase): register titles, statuses, indexes, and navigation.

### Named Rules

**The Two-Voice Rule.** Condensed type names the record; hyperlegible type explains the evidence. Do not use the display face for paragraphs or the body face for oversized spectacle.

## Layout

The system uses a wide folio frame with a maximum content width of 92rem, fluid page gutters, and generous section intervals. Within that frame, content is organized as asymmetrical sheets and ruled registers rather than independent cards. Repeating rows use explicit index, label, and proof columns so the hierarchy is visible before the copy is read.

Wide layouts may place paper and blueprint fields side by side, but the overlap stays planar: shared rules, aligned baselines, and physical edges define the relationship. Fine three-rem blueprint grids can sit behind ledgers; page-level paper grain and blueprint grain provide material continuity without replacing semantic structure.

At 75rem and below, secondary header metadata may recede. At 56.25rem and below, multi-column folios become a single reading sequence, vertical case indexes become horizontal strips, and ledgers retain index-before-label-before-proof order in compact two-column rows. At 40rem and below, actions become full width, destination registers become one column, and dense technology lists simplify without removing evidence.

### Named Rules

**The Evidence Order Rule.** Responsive reflow may change orientation and column count, but it never changes the logical sequence of index, label, evidence, and outcome.

## Elevation & Depth

Depth is structural and restrained. Most surfaces are flat and separated by tonal fields, one-pixel rules, texture, clipped paper edges, and overlap. Shadows appear only where one physical sheet passes over another, where an index sits on top of a folio, or where focus must be unmistakable; there are no soft floating-card clouds.

### Shadow Vocabulary

- **Folio Fold** (`0.75rem 0 1.4rem rgb(21 37 56 / 9%)`): a paper sheet overlapping the adjoining outcome field.
- **Index Edge** (`-0.5rem 0 1rem rgb(21 37 56 / 10%)`): the punched index sitting above the folio edge.
- **Title Strip Lift** (`0 0.5rem 1rem rgb(0 0 0 / 11%)`): a torn title strip placed over a blueprint ledger.
- **Developing Sheet Lift** (`0 0.65rem 1.25rem rgb(0 0 0 / 13%)`): a distinct paper insert within a dark register.
- **Punched Recess** (`inset 0 0.15rem 0.25rem rgb(0 0 0 / 35%)`): the physical depth inside a punched hole.
- **Keyboard Focus Halo** (`0 0 0 5px var(--ink-blueprint)`): the dark outer support behind the cyan focus outline.

### Named Rules

**The Flat-By-Default Rule.** Use rules, tonal changes, and sheet overlap first; add a shadow only when it explains a physical layer or an interaction state.

## Shapes

Square corners are the default. Buttons, sheets, registers, and navigation controls use a zero radius; circles are reserved for drafted nodes, registration targets, icon enclosures, and punched holes. Torn or deckled paper edges are authored as shallow clipped irregularities, never as decorative blobs.

Rules are usually one pixel. Two-pixel strokes identify routes and status marks; three-pixel bars identify active edges; the three-pixel keyboard outline sits three pixels away from the target. Drafted icons use square line caps and mitered joins so they feel drawn into the register rather than imported from a rounded app-icon library.

### Named Rules

**The Ruled Edge Rule.** If a shape does not communicate paper construction, routing, registration, or status, keep it square and let the grid carry the form.

## Components

Components behave like parts of one accountable document, not reusable cards dropped onto a canvas.

### Docket Actions

- **Shape:** Square, bordered, and horizontally directed; the arrow is drawn from one-pixel rules.
- **Primary:** Vermilion fill with deep blueprint text and asymmetrical action padding.
- **Secondary:** Transparent paper with an ink border; it inverts to ink on hover.
- **Hover / Focus:** Hover lifts by two pixels over 160ms. Keyboard focus uses a three-pixel cyan outline, three-pixel offset, and five-pixel navy halo.

### Navigation and Indexes

- **Blueprint Navigation:** Condensed uppercase links sit directly on the navy field and reveal a one-pixel cyan underline from the left on hover or focus.
- **Mobile Index Toggle:** A square, cyan-ruled control uses two one-pixel lines that rotate into a close mark; the mobile register opens over 220ms.
- **Case Index:** Desktop labels read vertically from a punched paper edge; compact layouts turn the same sequence into a horizontal strip. The active edge is always vermilion.

### Outcome Stamp

- **Character:** Oversized vermilion display type sits inside a visibly worn double-rule inspection frame over a faint copper carbon impression.
- **Motion:** The mark lands over 380ms with a small overshoot; the carbon copy registers in the same bounded beat. It is immediately legible without animation.

### Evidence Ledgers and Routes

- **Rows:** Blueprint registers use cyan indexes and labels, paper evidence copy, and one-pixel cyan rules. Outcome copy may use the softer verified cyan.
- **Routes:** Semantic SVG paths use cyan for process and vermilion for the consequential destination. Route drawing is bounded to 700ms; the complete route remains visible with reduced motion.
- **Annotations:** Technology scopes use ruled cells or slash-separated registers, never pills.

### Paper Registers

- **Archive and Capability Rows:** Reuse the index, label, and proof order on both paper and blueprint materials. Drafted icons remain thin, square-capped, and subordinate to the evidence.
- **Destinations:** Ready destinations invert from paper to blueprint on hover and focus. Placeholder destinations remain non-interactive and visibly muted; they never mimic enabled links.

### Named Rules

**The Bounded Motion Rule.** Motion confirms a route, stamp, menu, or visibility change once; it never loops, blocks reading, or carries required meaning.

**The Blueprint Focus Rule.** Every interactive element receives the same high-contrast cyan outline and navy halo, including paper-surface controls.

## Do's and Don'ts

### Do:

- Do alternate warm paper and blueprint ledgers to establish section authority.
- Do use one-pixel rules, numbered indexes, leaders, and registration marks to make relationships explicit.
- Do preserve Problem → Intervention → Outcome and equivalent evidence sequences at every breakpoint.
- Do reserve cyan for verified routes and vermilion for consequential outcomes or actions.
- Do keep body copy in the hyperlegible face and display copy short, condensed, and operational.
- Do honor `prefers-reduced-motion` by presenting every component in its final readable state.

### Don't:

- Don't introduce generic rounded cards, pill chips, glass panels, gradient glows, or hacker-terminal spectacle.
- Don't use paper texture or blueprint grid as a substitute for semantic grouping and real rules.
- Don't scatter vermilion or cyan as decorative color; each accent must communicate a system role.
- Don't add floating elevation to ordinary containers or round the square folio controls.
- Don't animate continuously, reorder evidence for visual novelty, or hide required information behind motion.
- Don't fabricate enabled states for unavailable destinations; placeholders remain explicit and inert.
