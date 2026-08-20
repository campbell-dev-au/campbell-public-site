export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "simple-gift-registry",
    title: "Story-First AI Development: Shipping a Production Web App in Four Days",
    summary:
      "How a story-first, test-driven workflow kept an AI-assisted build honest — from first commit to a live, hardened product in four days.",
  },
  {
    slug: "wordpress-integration-review",
    title: "Vibe-Code Health Check: An AI-Built WordPress/WooCommerce Integration",
    summary:
      "A structured assessment of a 35,000-line AI-generated plugin, including architecture, testing strategy, and security recommendations.",
  },
];
