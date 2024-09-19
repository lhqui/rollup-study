// rollup.config.mjs
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import autoPreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/main.ts",
  output: [
    {
      file: "public/dist/bundle.js",
      name: "app",
      format: "iife",
      plugins: [terser()],
    },
  ],
  plugins: [
    json(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    svelte({
      include: ["src/**/*.svelte", "node_modules/svelte-routing/**/*.svelte"],
      preprocess: autoPreprocess(),
      onwarn: (warning, handler) => {
        // Enforces that no distracting elements are used.
        // Elements that can be visually distracting can cause accessibility issues with visually impaired users.
        //Such elements are most likely deprecated, and should be avoided.
        if (warning.code === "a11y-distracting-elements") return;

        // let Rollup handle all other warnings normally
        handler(warning);
      },
      compilerOptions: {
        //If "dom", Svelte emits a JavaScript class for mounting to the DOM.
        //If "ssr", Svelte emits an object with a render method suitable for server-side rendering.
        //If false, no JavaScript or CSS is returned; just metadata.
        generate: "dom",
        hydratable: true,
      },
    }),
    resolve(),
    serve({
      port: 5000,
      contentBase: ["public", "dist"],
    }),
    postcss({
      extract: true,
      extract: "style.css",
    }),
  ],
};
