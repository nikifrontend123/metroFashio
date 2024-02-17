import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 3000, // Optional: You can specify a port number, e.g., 3000
    open: true, // Optional: Open the app in the default browser
  },
});