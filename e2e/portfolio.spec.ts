import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("production remains meaningful and navigable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    reducedMotion: "reduce",
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();
  await page.goto("/");

  await expect(page.getByText("Kunal Shinde", { exact: true }).first()).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("heading", {
      level: 1,
      name: "Security engineering, made operational.",
    }),
  ).toBeVisible();
  await expect(
    page.getByText("Vulnerability-remediation ticket-creation turnaround", { exact: true }),
  ).toBeVisible();

  const evidenceAction = page.getByRole("link", { name: "Explore the evidence" });
  const contactAction = page.getByRole("link", { name: "Start a conversation" });
  await expect(evidenceAction).toHaveAttribute("href", "#work");
  await expect(contactAction).toHaveAttribute("href", "#contact");
  await evidenceAction.click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeVisible();
  await contactAction.click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator("#contact")).toBeVisible();

  await context.close();
});

test("production hydrates prerendered markup without console integrity errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Security engineering, made operational.",
  );
  await page.getByRole("button", { name: "Open section index" }).click();
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();

  const missingLabelReferences = await page.locator("[aria-labelledby]").evaluateAll((elements) =>
    elements.flatMap((element) =>
      (element.getAttribute("aria-labelledby") ?? "")
        .split(/\s+/)
        .filter((id) => id && !document.getElementById(id)),
    ),
  );

  expect(missingLabelReferences).toEqual([]);
  expect(errors).toEqual([]);
});

test("desktop opening exposes proof and both actions", async ({ page }) => {
  await page.setViewportSize({ width: 1536, height: 1024 });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Security engineering, made operational.",
  );
  await expect(page.getByText("<5 MIN", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore the evidence" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Start a conversation" })).toBeVisible();
});

test("desktop career timeline is flat and stays clear of every stage label", async ({ page }) => {
  await page.setViewportSize({ width: 1459, height: 900 });
  await page.goto("/");
  await page.locator(".career-trace").scrollIntoViewIfNeeded();

  const timeline = await page.evaluate(() => {
    const path = document.querySelector<SVGPathElement>(".career-trace__route-line");
    const labels = Array.from(
      document.querySelectorAll<HTMLElement>(".career-trace__stage strong"),
    );
    const nodes = Array.from(
      document.querySelectorAll<SVGCircleElement>(".career-trace__route-nodes circle"),
    );
    const matrix = path?.getScreenCTM();
    if (!path || !matrix) throw new Error("Expected the desktop career route");

    const routePoints = Array.from({ length: Math.ceil(path.getTotalLength()) + 1 }, (_, distance) => {
      const point = path.getPointAtLength(distance);
      return new DOMPoint(point.x, point.y).matrixTransform(matrix);
    });
    const yPositions = routePoints.map(({ y }) => y);

    const collisions = labels.flatMap((label, index) => {
      const rect = label.getBoundingClientRect();

      for (const screenPoint of routePoints) {
        if (
          screenPoint.x >= rect.left - 2 &&
          screenPoint.x <= rect.right + 2 &&
          screenPoint.y >= rect.top - 2 &&
          screenPoint.y <= rect.bottom + 2
        ) {
          return [{ stage: index + 1, label: label.textContent?.trim() ?? "" }];
        }
      }

      return [];
    });

    return {
      collisions,
      nodeCount: nodes.length,
      verticalSpread: Math.max(...yPositions) - Math.min(...yPositions),
    };
  });

  expect(timeline.collisions).toEqual([]);
  expect(timeline.nodeCount).toBe(5);
  expect(timeline.verticalSpread).toBeLessThan(1);
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

test("640px composition uses full-width actions and simplified evidence routes", async ({ page }) => {
  await page.setViewportSize({ width: 640, height: 900 });
  await page.goto("/");

  const homeTarget = await page.locator(".blueprint-header__identity").boundingBox();
  expect(homeTarget).not.toBeNull();
  expect(homeTarget!.width).toBeGreaterThanOrEqual(44);
  expect(homeTarget!.height).toBeGreaterThanOrEqual(44);

  const actionWidths = await page.locator(".docket-hero__actions").evaluate((actions) => {
    const parentWidth = actions.getBoundingClientRect().width;
    return {
      parentWidth,
      children: Array.from(actions.children, (child) => child.getBoundingClientRect().width),
    };
  });
  expect(actionWidths.children.every((width) => Math.abs(width - actionWidths.parentWidth) < 1)).toBe(
    true,
  );

  await page.locator(".evidence-ledger").scrollIntoViewIfNeeded();
  await expect(page.locator(".workflow-diagram__route")).toBeHidden();
  await expect(page.getByRole("list", { name: "Conceptual workflow steps" })).toBeVisible();

  const firstRow = page.locator(".evidence-ledger__row").first();
  const stacked = await firstRow.evaluate((row) => {
    const label = row.querySelector<HTMLElement>(".evidence-ledger__label");
    const copy = row.querySelector<HTMLElement>(":scope > p");
    if (!label || !copy) throw new Error("Expected evidence label and copy");
    return copy.getBoundingClientRect().top >= label.getBoundingClientRect().bottom - 1;
  });
  expect(stacked).toBe(true);
});

test("mobile navigation is keyboard operable with accessible targets and clear anchors", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.getByRole("button", { name: "Open section index" });
  await menu.focus();
  await expect(menu).toBeFocused();
  await expect(menu).toHaveCSS("outline-style", "solid");
  await page.keyboard.press("Enter");

  const workLink = page.getByRole("navigation", { name: "Primary" }).getByRole("link", {
    name: "Work",
  });
  await expect(workLink).toBeVisible();

  const targetSizes = await page
    .locator(
      ".blueprint-header__identity, .blueprint-header__toggle, .blueprint-header__navigation a, .docket-action, .section-index a",
    )
    .evaluateAll((elements) =>
      elements.map((element) => {
        const { width, height } = element.getBoundingClientRect();
        return { width, height };
      }),
    );
  expect(targetSizes.every(({ width, height }) => width >= 44 && height >= 44)).toBe(true);

  await workLink.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "false");

  const clearance = await page.evaluate(() => {
    const header = document.querySelector<HTMLElement>(".blueprint-header");
    const target = document.querySelector<HTMLElement>("#work");
    if (!header || !target) throw new Error("Expected header and work anchor");
    return {
      headerBottom: header.getBoundingClientRect().bottom,
      targetTop: target.getBoundingClientRect().top,
    };
  });
  expect(clearance.targetTop).toBeGreaterThanOrEqual(clearance.headerBottom - 1);
});

test("reduced motion exposes final stamp, workflow, and ledger states", async ({ browser }) => {
  const context = await browser.newContext({
    reducedMotion: "reduce",
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();
  await page.goto("/");

  const finalState = await page.evaluate(() => {
    for (const selector of [".outcome-stamp", ".workflow-diagram", ".evidence-ledger"]) {
      document.querySelector(selector)?.setAttribute("data-visible", "false");
    }

    const stamp = document.querySelector<HTMLElement>(".outcome-stamp__mark");
    const carbon = document.querySelector<HTMLElement>(".outcome-stamp__before");
    const route = document.querySelector<SVGPathElement>(".workflow-diagram__route-to-ticket");
    const rows = document.querySelector<HTMLElement>(".evidence-ledger__rows");
    if (!stamp || !carbon || !route || !rows) {
      throw new Error("Expected animated evidence elements");
    }

    const carbonStyle = getComputedStyle(carbon);
    const carbonMatrix = new DOMMatrix(carbonStyle.transform);

    return {
      stampOpacity: getComputedStyle(stamp).opacity,
      stampTransform: getComputedStyle(stamp).transform,
      carbonOpacity: carbonStyle.opacity,
      carbonAngle: (Math.atan2(carbonMatrix.b, carbonMatrix.a) * 180) / Math.PI,
      carbonXRegistration: carbonMatrix.e / carbon.offsetWidth,
      carbonYRegistration: carbonMatrix.f / carbon.offsetHeight,
      routeDashOffset: getComputedStyle(route).strokeDashoffset,
      rowsOpacity: getComputedStyle(rows).opacity,
      rowsTransform: getComputedStyle(rows).transform,
    };
  });

  expect(finalState.stampOpacity).toBe("1");
  expect(finalState.stampTransform).toBe("none");
  expect(finalState.carbonOpacity).toBe("0.16");
  expect(finalState.carbonAngle).toBeCloseTo(-7, 1);
  expect(finalState.carbonXRegistration).toBeCloseTo(-0.54, 2);
  expect(finalState.carbonYRegistration).toBeCloseTo(-0.54, 2);
  expect(Number.parseFloat(finalState.routeDashOffset || "0")).toBe(0);
  expect(finalState.rowsOpacity).toBe("1");
  expect(finalState.rowsTransform).toBe("none");
  await context.close();
});

test("page has no serious or critical axe violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();

  expect(
    results.violations.filter(({ impact }) => impact === "serious" || impact === "critical"),
  ).toEqual([]);
});
