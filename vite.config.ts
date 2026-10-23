import path from "path";

import { defineConfig } from "vite";

import mfConfig from "./module-federation.config.ts";

import { federation } from "@module-federation/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://localhost:2000",
  server: {
    origin: "https://localhost:2000",
    port: 2000,
  },
  plugins: [basicSsl(), react(), federation(mfConfig)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
