import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    settings: {
      react: {
        version: "detect" // ✅ Fix for React version warning
      }
    },
    ignores: ["node_modules/", "dist/", "build/"] // ✅ Moved inside the object
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended
];
