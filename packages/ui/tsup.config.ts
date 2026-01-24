import { defineConfig } from "tsup"

export default defineConfig({
  entry: [
    "src/index.ts", 
    "src/components/index.ts", 
    "src/lib/utils.ts", 
    "src/components/button/button.tsx",
    "src/components/button/index.ts"
  ],
  format: ["esm"],
  dts: {
    resolve: true
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
  treeshake: true,
  bundle: false,
  outDir: 'dist'
})
