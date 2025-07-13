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
      },
      {
        provider: fontProviders.fontshare(),
        name: "Neco",
        cssVariable: "--font-body",
      },
    ],
  },
});
