import type { ServiceIconKey } from "@/components/icons";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  whatYouGet: string[];
  icon: ServiceIconKey;
  link?: { href: string; label: string };
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    icon: "website",
    summary:
      "Fast, modern, maintainable websites built with the same care I'd want for my own business — from marketing sites to internal portals.",
    description:
      "Whether it's a marketing site, a customer portal, or an internal tool, I build websites using modern tooling that's fast to load and straightforward to maintain — not a bespoke framework only I understand.",
    whatYouGet: [
      "A responsive, fast-loading site",
      "Built with modern tooling (React/Next.js, or the right fit for the project)",
      "Handover-ready code, not a black box",
    ],
  },
  {
    slug: "business-process-improvement",
    title: "Business Process Analysis & Improvement",
    icon: "process",
    summary:
      "I work with your team to understand how you actually operate, then build the software that removes the manual work.",
    description:
      "Before writing any code, I spend time understanding how your team actually works — the workarounds, the spreadsheets, the manual steps nobody loves. Then I build software that fits that reality, rather than forcing you into a generic template.",
    whatYouGet: [
      "On-site or remote stakeholder consultation",
      "A plain-language requirements spec",
      "Software that fits how your team actually works",
    ],
  },
  {
    slug: "bespoke-software-development",
    title: "Bespoke Software Development",
    icon: "code",
    summary:
      "Custom systems and integrations, from ERP-to-scheduling data pipelines to full internal platforms.",
    description:
      "Some problems don't have an off-the-shelf answer. I design and build custom systems and integrations — including connecting existing tools that were never meant to talk to each other — with an emphasis on security and long-term supportability.",
    whatYouGet: [
      "Custom-built systems and integrations",
      "Secure, supportable data exchange between existing tools",
      "Technical documentation so the system outlives any one developer",
    ],
  },
  {
    slug: "vibe-code-health-check",
    title: "Vibe-Coded Prototype Review & Health Check Report",
    icon: "healthcheck",
    summary:
      "A structured, professional review of your AI-generated codebase: architecture, security, testing, and a clear path to production.",
    description:
      "If you or your team have built something with AI coding tools, a health check gives you an honest, structured picture of where it stands before you rely on it — or before you ask another developer to take it over.",
    whatYouGet: [
      "Architecture review — is the current structure viable, or should it evolve?",
      "Testing strategy assessment",
      "Security & tooling recommendations",
      "A written report with an executive summary and prioritized recommendations — no jargon, no push toward an unnecessary rewrite",
    ],
    link: { href: "/case-studies/mockproject", label: "See a real example" },
  },
  {
    slug: "vibe-to-production",
    title: "Vibe-to-Production Development",
    icon: "rocket",
    summary:
      "I take the prototype your team built with AI tools and turn it into something you can safely run your business on.",
    description:
      "The natural next step after a health check — I do the work the report recommends: closing security gaps, adding the tests that actually matter, and refactoring the parts that won't scale.",
    whatYouGet: [
      "Fixes prioritized by risk, not just by what's easiest",
      "Functional/BDD-style tests that reflect real business requirements",
      "A codebase a future developer — human or AI — can safely keep building on",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
