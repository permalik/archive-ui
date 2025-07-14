// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontshare(),
        name: "Amulya",
        cssVariable: "--font-header",
        weights: [400, 500, 600, 700, 800, 900],
        fallbacks: ["sans-serif"],
      },
      {
        provider: fontProviders.fontshare(),
        name: "Neco",
        cssVariable: "--font-body",
        weights: [400, 500, 600, 700, 800, 900],
        fallbacks: ["serif"],
      },
    ],
  },
});
