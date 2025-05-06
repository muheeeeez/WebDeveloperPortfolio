import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const glsl = await import("vite-plugin-glsl");

  return {
    plugins: [vue(), glsl.default()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    assetsInclude: ["**/*.glb"],
    publicDir: "public",
    base: "./", // This ensures relative asset paths work correctly
  };
});
