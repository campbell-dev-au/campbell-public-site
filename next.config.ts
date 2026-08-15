import type { NextConfig } from "next";

// Static CSP, not nonce-based: nonces force every page into dynamic
// rendering, which kills SSG/CDN caching on a site that is 100% static
// pages with zero third-party scripts. style-src needs 'unsafe-inline'
// until the inline `style` attributes in PhotoFrame.tsx and
// app/about/page.tsx move into classes. script-src needs 'unsafe-inline'
// too, for the same SSG-without-nonces reason (see Next's CSP guide,
// "Without Nonces"): Next inlines the RSC hydration payload as
// `<script>self.__next_f.push(...)</script>` on every page, and without
// this it's blocked outright, breaking hydration (and therefore all
// client interactivity, e.g. the contact form) site-wide.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "browsing-topics=()",
    ].join(", "),
  },
];

const nextConfig: NextConfig = {
  // devDependencies alias `typescript` to the TS 6 API package (per
  // https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0)
  // so typescript-eslint keeps working, with the real TS 7 compiler under
  // `@typescript/native`. Next's default TypeScript-CLI mode expects the
  // `typescript` package itself to expose `bin/tsc`, which this scheme
  // doesn't provide, so fall back to Next's TypeScript-API type checking.
  experimental: {
    useTypeScriptCli: false,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
