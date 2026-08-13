import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real engagements, including a full vibe-code health check.",
};

const caseStudies = [
  {
    slug: "mockproject",
    title: "Vibe-Code Health Check: An AI-Built WordPress/WooCommerce Integration",
    summary:
      "A structured assessment of a 35,000-line AI-generated plugin — architecture, testing strategy, and security recommendations.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="px-6 py-12 sm:px-10 sm:py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Case Studies</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        A look at how engagements actually play out.
      </p>

      <div className="mt-12 flex flex-col gap-6">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="group rounded-lg border border-black/10 bg-white/80 p-6 backdrop-blur-sm transition-colors hover:border-indigo-300 hover:shadow-sm dark:border-white/10 dark:bg-zinc-950/60 dark:hover:border-indigo-400/40"
          >
            <h2 className="text-xl font-semibold tracking-tight">
              {cs.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {cs.summary}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-indigo-600 group-hover:underline dark:text-indigo-400">
              Read the case study →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
