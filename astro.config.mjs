import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://rainbow-lollipop-cff8b1.netlify.app",
  integrations: [preact()]
});