import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  // GitHub Pages serve de https://<user>.github.io/<repo>/
  // Altere o valor abaixo se o repo tiver um nome diferente.
  base: "/portifolio_andre/",
});
