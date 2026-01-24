import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@juscash/ui": path.resolve(__dirname, "../../packages/ui/dist"),
      "packages/ui/src/lib/utils": path.resolve(__dirname, "../../packages/ui/src/lib/utils.ts"),
      "packages/ui/src/components": path.resolve(__dirname, "../../packages/ui/src/components")
    }
  },
  base: "/design-shadcn/",
  server: {
    port: 3000,
    open: true
  }
})
