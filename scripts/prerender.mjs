import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

const projectDirectory = process.cwd();
const prerenderDirectory = path.join(projectDirectory, ".prerender");
const serverEntryPath = path.join(prerenderDirectory, "entry-server.js");
const indexPath = path.join(projectDirectory, "dist", "index.html");
const emptyRoot = '<div id="root"></div>';

try {
  const [{ render }, template] = await Promise.all([
    import(pathToFileURL(serverEntryPath).href),
    readFile(indexPath, "utf8"),
  ]);

  if (!template.includes(emptyRoot)) {
    throw new Error("Built HTML is missing the empty portfolio root marker.");
  }

  const renderedApp = render();
  if (!renderedApp.includes("Security engineering, made operational.")) {
    throw new Error("Server render did not produce the portfolio identity.");
  }

  await writeFile(
    indexPath,
    template.replace(emptyRoot, `<div id="root">${renderedApp}</div>`),
  );
} finally {
  await rm(prerenderDirectory, { recursive: true, force: true });
}
