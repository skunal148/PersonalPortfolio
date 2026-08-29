import { defineConfig } from "vitest/config";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    {
      name: "emit-social-preview",
      apply: "build",
      buildStart() {
        this.emitFile({
          type: "asset",
          fileName: "assets/og-card.webp",
          source: readFileSync(resolve(process.cwd(), "src/assets/social/og-card.webp")),
        });
      },
    },
  ],
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
});
