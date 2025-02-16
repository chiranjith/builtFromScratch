import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/builtFromScratch/", // Replace with your repository name
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Moves dependencies to a separate file
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit (optional)
  },
});