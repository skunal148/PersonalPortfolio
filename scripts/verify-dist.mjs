import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const distDirectory = path.resolve(process.cwd(), "dist");
const indexPath = path.join(distDirectory, "index.html");
const requiredPublicFiles = ["robots.txt", "site.webmanifest", "favicon.svg"];
const requiredTitle = "Kunal Shinde — Security Engineering & Automation";
const requiredDescription =
  "Security engineering portfolio focused on vulnerability management, identity, incident response, and workflow automation.";

const errors = [];

const fail = (message) => errors.push(message);

const requireMatch = (html, pattern, message) => {
  if (!pattern.test(html)) {
    fail(message);
  }
};

const checkRelativeAssets = (html) => {
  const sourceUrls = [...html.matchAll(/\bsrc=(?:"([^"]+)"|'([^']+)')/gi)].map(
    (match) => match[1] ?? match[2],
  );
  const stylesheetUrls = [...html.matchAll(/<link\b[^>]*\brel=(?:"stylesheet"|'stylesheet')[^>]*\bhref=(?:"([^"]+)"|'([^']+)')[^>]*>/gi)].map(
    (match) => match[1] ?? match[2],
  );

  for (const url of [...sourceUrls, ...stylesheetUrls]) {
    if (!url.startsWith("./assets/")) {
      fail(`Built asset URL must be relative and live under ./assets/: ${url}`);
    }
  }
};

try {
  const html = await readFile(indexPath, "utf8");

  checkRelativeAssets(html);
  requireMatch(html, /<title>Kunal Shinde — Security Engineering &amp; Automation<\/title>/, "Missing required document title.");
  requireMatch(
    html,
    /<meta\s+name=(?:"description"|'description')\s+content=(?:"Security engineering portfolio focused on vulnerability management, identity, incident response, and workflow automation\."|'Security engineering portfolio focused on vulnerability management, identity, incident response, and workflow automation\.')\s*\/?\s*>/,
    "Missing required document description.",
  );
  requireMatch(html, /4a2bc724/, "Direction seed 4a2bc724 did not survive the production build.");

  for (const forbiddenValue of [/href=(?:"#"|'#')/i, /example\.com/i, /(?:mailto:)?[\w.+-]+@[\w-]+\.[\w.-]+/i]) {
    if (forbiddenValue.test(html)) {
      fail(`Built HTML contains a prohibited placeholder or destination: ${forbiddenValue}`);
    }
  }

  await Promise.all(
    requiredPublicFiles.map(async (file) => {
      try {
        await access(path.join(distDirectory, file));
      } catch {
        fail(`Missing required public file: dist/${file}`);
      }
    }),
  );
} catch (error) {
  fail(`Unable to read dist/index.html. Run npm run build first. (${error.message})`);
}

if (errors.length > 0) {
  console.error("Distribution verification failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log("Distribution verification passed.");
}
