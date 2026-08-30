import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const distDirectory = path.resolve(process.cwd(), "dist");
const indexPath = path.join(distDirectory, "index.html");
const requiredPublicFiles = [
  "robots.txt",
  "site.webmanifest",
  "favicon.svg",
  "assets/kunal-shinde-resume.pdf",
  "assets/kunal-shinde.webp",
];
const approvedEmailAddress = "skunal148@gmail.com";
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

const checkEmailAddresses = (html) => {
  const emailAddresses = [...html.matchAll(/[\w.+-]+@[\w-]+\.[\w.-]+/gi)].map(
    (match) => match[0].toLowerCase(),
  );

  for (const emailAddress of emailAddresses) {
    if (emailAddress !== approvedEmailAddress) {
      fail(`Built HTML contains an unapproved email address: ${emailAddress}`);
    }
  }
};

try {
  const html = await readFile(indexPath, "utf8");

  checkRelativeAssets(html);
  checkEmailAddresses(html);
  requireMatch(html, /<title>Kunal Shinde — Security Engineering &amp; Automation<\/title>/, "Missing required document title.");
  requireMatch(
    html,
    /<meta\s+name=(?:"description"|'description')\s+content=(?:"Security engineering portfolio focused on vulnerability management, identity, incident response, and workflow automation\."|'Security engineering portfolio focused on vulnerability management, identity, incident response, and workflow automation\.')\s*\/?\s*>/,
    "Missing required document description.",
  );
  requireMatch(html, /4a2bc724/, "Direction seed 4a2bc724 did not survive the production build.");
  requireMatch(
    html,
    /<body>\s*<!--[\s\S]*?4a2bc724[\s\S]*?-->\s*<div id="root">/,
    "Direction comment must remain the first body child before the prerendered root.",
  );
  requireMatch(
    html,
    /<div id="root">[\s\S]*?<main id="main-content">/,
    "Production HTML is missing prerendered main portfolio content.",
  );
  requireMatch(
    html,
    /Security engineering,[\s\S]*?made operational\./,
    "Production HTML is missing the prerendered portfolio identity.",
  );
  requireMatch(
    html,
    /Vulnerability-remediation ticket-creation turnaround/,
    "Production HTML is missing the scoped flagship metric.",
  );
  requireMatch(
    html,
    /href="#work">Explore the evidence<\/a>[\s\S]*?href="#contact">Start a conversation<\/a>/,
    "Production HTML is missing usable primary anchor actions.",
  );
  requireMatch(
    html,
    /href="mailto:skunal148@gmail\.com"/,
    "Production HTML is missing the approved email destination.",
  );
  requireMatch(
    html,
    /href="\.\/assets\/kunal-shinde-resume\.pdf"/,
    "Production HTML is missing the hosted resume destination.",
  );

  for (const forbiddenValue of [/href=(?:"#"|'#')/i, /example\.com/i]) {
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
