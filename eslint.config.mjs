import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  // Базовые игноры
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
      "dist/**",
      "*.min.js",
    ],
  },

  // Основные правила
  {
    extends: [...nextVitals, ...nextTs],
    rules: {
      "@typescript-eslint/no-require-imports": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-in modules
            "external", // External packages (react, next, etc)
            "internal", // Internal aliases (@/, @app/, etc)
            "parent", // Relative parent imports
            "sibling", // Relative sibling imports
            "index", // Index imports
            "object", // Object imports
            "type", // Type imports
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
            {
              pattern: "@app/**",
              group: "internal",
            },
            {
              pattern: "@shared/**",
              group: "internal",
            },
            {
              pattern: "@entities/**",
              group: "internal",
            },
            {
              pattern: "@features/**",
              group: "internal",
            },
            {
              pattern: "@widgets/**",
              group: "internal",
            },
            {
              pattern: "@pages/**",
              group: "internal",
            },
            {
              pattern: "@processes/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/newline-after-import": ["error", { count: 1 }],
      "no-duplicate-imports": "error",
      "import/no-duplicates": "error",
      "@typescript-eslint/no-explicit-any": 'off'
    },
  },
]);
