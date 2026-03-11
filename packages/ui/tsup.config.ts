import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  // CSS theme files are exported as source — apps handle Tailwind compilation
  external: ["react", "react-dom", "react-aria-components"],
  jsx: "react-jsx",
  clean: true,
})
