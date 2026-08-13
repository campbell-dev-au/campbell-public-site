import type { ServiceIconKey } from "@/components/icons";

export type ServiceGroup = "fragile-ai" | "need-something-built" | "manual-work";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  whatYouGet: string[];
  icon: ServiceIconKey;
  group: ServiceGroup;
  link?: { href: string; label: string };
};

export const serviceGroups: { key: ServiceGroup; heading: string }[] = [
  {
    key: "fragile-ai",
    heading: "Your AI-built prototype needs to hold up under real use",
  },
  {
    key: "need-something-built",
    heading: "You need something built — and there's no AI shortcut for that",
  },
  { key: "manual-work", heading: "Your team is buried in manual work" },
];

export const services: Service[] = [
  {
    slug: "vibe-code-health-check",
    title: "Vibe-Code Health Check",
    icon: "healthcheck",
    group: "fragile-ai",
    summary:
      "Get an honest, structured picture of where the prototype actually stands: architecture, security, testing, and a clear path to production.",
    description:
      "Get an honest, structured picture of where the prototype actually stands — before you rely on it, or before you hand it to another developer.",
    whatYouGet: [
      "Architecture review — is the current structure viable, or should it evolve?",
      "Testing strategy assessment",
      "Security & tooling recommendations",
      "A written report with an executive summary and prioritized recommendations — no jargon, no push toward an unnecessary rewrite",
    ],
    link: { href: "/case-studies/wordpress-integration-review", label: "See a real example" },
  },
  {
    slug: "vibe-to-production",
    title: "Vibe-to-Production Development",
    icon: "rocket",
    group: "fragile-ai",
    summary:
      "I turn the prototype into something you can safely run your business on — closing the gaps a prototype leaves open.",
    description:
      "The natural next step after a health check — I do the work the report recommends: closing security gaps, adding the tests that actually matter, and refactoring the parts that won't scale.",
    whatYouGet: [
      "Fixes prioritized by risk, not just by what's easiest",
      "Functional/BDD-style tests that reflect real business requirements",
      "A codebase a future developer — human or AI — can safely keep building on",
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: "website",
    group: "need-something-built",
    summary:
      "I build it fast-loading and maintainable — from marketing sites to internal portals — so it's ready to grow with the business, not just launch.",
    description:
      "I'll build it using modern tooling that's fast to load and straightforward to maintain — whether that's a marketing site, a customer portal, or an internal tool — not a bespoke framework only I understand.",
    whatYouGet: [
      "A responsive, fast-loading site",
      "Built with modern tooling (React/Next.js, or the right fit for the project)",
      "Handover-ready code, not a black box",
    ],
  },
  {
    slug: "bespoke-software-development",
    title: "Bespoke Software Development",
    icon: "code",
    group: "need-something-built",
    summary:
      "When there's no off-the-shelf answer, I design and build custom systems and integrations — connecting the tools you already use into one that actually fits how you work.",
    description:
      "When there's no off-the-shelf answer, I design and build custom systems and integrations — including connecting existing tools that were never meant to talk to each other — with an emphasis on security and long-term supportability.",
    whatYouGet: [
      "Custom-built systems and integrations",
      "Secure, supportable data exchange between existing tools",
      "Technical documentation so the system outlives any one developer",
    ],
  },
  {
    slug: "business-process-improvement",
    title: "Business Process Analysis & Improvement",
    icon: "process",
    group: "manual-work",
    summary:
      "I get to know how your team actually works, then build the software that removes the manual steps — not a generic template.",
    description:
      "I spend time understanding how your team actually works — the workarounds, the spreadsheets, the manual steps nobody loves — before writing any code. Then I build software that fits that reality, not a generic template.",
    whatYouGet: [
      "On-site or remote stakeholder consultation",
      "A plain-language requirements spec",
      "Software that fits how your team actually works",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
