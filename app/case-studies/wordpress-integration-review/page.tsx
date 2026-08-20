import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PhotoFrame from "@/components/PhotoFrame";

export const metadata: Metadata = {
  title: "Vibe-Code Health Check: An AI-Built WordPress/WooCommerce Integration",
  description:
    "How a structured health check turned a 35,000-line AI-generated WordPress plugin into a clear, prioritized action plan.",
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-box border border-black/30 bg-indigo-500/10 p-5">
      <p className="text-3xl font-semibold tracking-tight text-indigo-400">
        {value}
      </p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
        {title}
      </h2>
      <div className="mt-3 max-w-2xl text-base leading-7 text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export default function WordpressIntegrationReviewCaseStudy() {
  return (
    <div className="px-6 py-12 sm:px-10 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
        Case Study — Vibe-Code Health Check
      </p>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
        An AI-Built WordPress/WooCommerce Integration
      </h1>

      <PhotoFrame
        src="/images/casestudy-pos-system.jpg"
        alt="An overhead view of hands ringing up a sale on a point-of-sale tablet in a small shop"
        className="mt-8 aspect-[21/9]"
        priority
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Stat value="35,000" label="lines of code" />
        <Stat value="190" label="classes" />
        <Stat value="4" label="priority actions" />
      </div>

      <Section title="The situation">
        <p>
          A business had an AI-generated WordPress plugin syncing product
          data from an ERP system into WooCommerce, and wanted to know if it
          was safe to rely on before treating it as production
          infrastructure.
        </p>
      </Section>

      <Section title="The approach">
        <ul className="flex flex-col gap-2">
          <li className="flex gap-3">
            <span aria-hidden className="text-indigo-400">
              ·
            </span>
            <span>Architecture review</span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-indigo-400">
              ·
            </span>
            <span>Automated complexity/quality scanning</span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-indigo-400">
              ·
            </span>
            <span>Security/standards check</span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-indigo-400">
              ·
            </span>
            <span>Review of existing automated test coverage</span>
          </li>
        </ul>
      </Section>

      <Section title="What was found">
        <p>
          A surprisingly large codebase (35,000 lines across 190 classes)
          for the problem it solved. That&rsquo;s typical of AI-generated
          code, which favours duplication over abstraction and rarely cleans
          up dead code. Test coverage told a similar story: strong unit test
          coverage, but no functional or business-facing tests. Several
          security concerns were also flagged.
        </p>
      </Section>

      <Section title="The recommendation">
        <ul className="flex flex-col gap-3">
          <li className="flex gap-3">
            <span aria-hidden className="text-indigo-400">
              ·
            </span>
            <span>
              Keep the current architecture unless significant further feature
              growth is planned, in which case a more decoupled architecture was recommended.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-indigo-400">
              ·
            </span>
            <span>
              Add human-readable functional tests so business requirements are
              captured in plain language, alongside the existing unit tests.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-indigo-400">
              ·
            </span>
            <span>
              Adopt automated quality and standards scanning as an ongoing
              gate before each release.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-indigo-400">
              ·
            </span>
            <span>Fix flagged security issues before any production release.</span>
          </li>
        </ul>
      </Section>

      <Section title="The outcome">
        <p>
          The client walked away with clarity and a prioritised, cost-aware
          action plan — not a rewrite they didn&rsquo;t need. That&rsquo;s
          the approach of the Health Check and Vibe-to-Production offerings:
          honest assessment first, then targeted improvements to maximise impact.
        </p>
      </Section>

      <div className="mt-16">
        <CTASection
          heading="Not sure where your own project stands?"
          body="A health check gives you a clear, honest picture before you rely on it."
          buttonLabel="Book a health check"
        />
      </div>
    </div>
  );
}
