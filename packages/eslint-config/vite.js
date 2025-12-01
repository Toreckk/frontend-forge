import { config as reactInternalConfig } from "./react-internal.js";
import reactRefresh from "eslint-plugin-react-refresh";

/**
 * A custom ESLint configuration for Vite React apps.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...reactInternalConfig,
  {
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
