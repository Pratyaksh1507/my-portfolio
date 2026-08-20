import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    target: "es2022",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-icons")) {
              return "vendor-icons";
            }
            if (id.includes("framer-motion")) {
              return "vendor-motion";
            }
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor-react";
            }
            return "vendor-other";
          }
        },
      },
    },
  },
});

