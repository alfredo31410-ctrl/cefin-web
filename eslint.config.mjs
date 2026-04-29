import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");
const nextTypescript = require("eslint-config-next/typescript");
const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "react/no-unescaped-entities": "warn",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
      "@next/next/no-img-element": "warn",
      "import/no-anonymous-default-export": "off",
    },
  },
];

export default config;
