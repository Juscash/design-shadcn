import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.test.{js,jsx,ts,tsx}"],
    exclude: ["node_modules", "dist", ".storybook", "storybook-static"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./apps/web/src"),
      "@juscash/ui": path.resolve(__dirname, "./packages/ui/src")
    }
  }
})
