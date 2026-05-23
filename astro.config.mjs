import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  i18n: {
    locales: ["en", "bn"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
