import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11y,
      react,
    },
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },
];
