import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // ESLint 10 removed context.getFilename(), which eslint-plugin-react's
  // React-version auto-detection still calls when settings.react.version
  // is left at eslint-config-next's default "detect" — crashing every run.
  // Pinning the version explicitly skips that code path.
  // https://github.com/vercel/next.js/issues/89764
  { settings: { react: { version: "19.2.8" } } },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    "next-env.d.ts",
    // Nested git worktrees (each has its own source tree + build output,
    // linted independently — not part of this checkout's source).
    ".claude/worktrees/**",
  ]),
]);

export default eslintConfig;
