import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { caseStudies } from "@/lib/case-studies";

// Static top-level routes; there's no CMS to enumerate these from, so this list
// is a manual step — add new page routes here as they're created.
const staticRoutes = ["", "/services", "/case-studies", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...caseStudies.map((cs) => `/case-studies/${cs.slug}`),
  ];

  // No lastModified: this is static, hand-edited content with no per-page
  // "last changed" data available, and a build-time timestamp on every
  // route would falsely claim every page changed on every deploy.
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
  }));
}
