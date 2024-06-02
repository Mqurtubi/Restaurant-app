// eslint.config.mjs
import globals from "globals";
import js from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // Jika menggunakan Jest
        ...globals.commonjs, // Untuk variabel global CommonJS seperti require dan module
        // Tambahkan variabel global untuk CodeceptJS
        Feature: "readonly",
        Scenario: "readonly",
        locate: "readonly",
        actor: "readonly",
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
  js.configs.recommended,
];
