import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import mfConfig from "./module-federation.config.ts";

// https://vite.dev/config/
export default defineConfig({
  base: "https://localhost:2000",
  server: {
    origin: "https://localhost:2000",
    port: 2000,
  },
  plugins: [basicSsl(), react(), federation(mfConfig)],
});
