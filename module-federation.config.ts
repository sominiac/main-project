import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "main-project",
  manifest: true,
  remotes: {
    calendar: "calendar@https://localhost:2001/mf-manifest.json",
  },
  shared: {
    react: {
      singleton: true,
    },
    "react/": {
      singleton: true,
    },
  },
});
