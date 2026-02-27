import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // ✅ Правила FSD для контроля зависимостей между слоями
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // shared не может импортировать другие слои
            {
              target: "./src/shared",
              from: "./src/{app,pages,widgets,features,entities}",
              message: "Shared layer cannot import from other layers",
            },
            // entities может импортировать только shared
            {
              target: "./src/entities",
              from: "./src/{app,pages,widgets,features}",
              message: "Entities can only import from shared",
            },
            // features может импортировать entities и shared
            {
              target: "./src/features",
              from: "./src/{app,pages,widgets}",
              message: "Features cannot import from app, pages, or widgets",
            },
            // widgets может импортировать features, entities, shared
            {
              target: "./src/widgets",
              from: "./src/{app,pages}",
              message: "Widgets cannot import from app or pages",
            },
            // pages может импортировать widgets, features, entities, shared
            {
              target: "./src/pages",
              from: "./src/app",
              message: "Pages cannot import from app",
            },
          ],
        },
      ],

      // Запрещает импорты из внутренних модулей (не через index.ts)
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "*/entities/*/*",
                "*/features/*/*",
                "*/widgets/*/*",
                "*/pages/*/*",
              ],
              message: "Import only through public API (index.ts)",
            },
          ],
        },
      ],
    },
  },
]);
