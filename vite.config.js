import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/Tic-Tac-Toe-Game",
  
  plugins: [react()],
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  server: {
    port: 2000,
  },
});
