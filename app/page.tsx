import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Software development that ships — from vibe-coded prototypes to
          production-grade systems.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I&rsquo;m Campbell Davis, a freelance web and software developer
          based in Adelaide, working with businesses across Australia. Over a
          decade building, integrating, and rescuing software — including the
          new wave of AI-generated prototypes that need a professional eye
          before they can be trusted.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Book a Vibe-Code Health Check
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition-colors hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
          >
            See my work
          </Link>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          What I do
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="mt-24 rounded-2xl border border-black/10 p-8 dark:border-white/10 sm:p-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Case study
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8">
          35,000 lines, 190 classes, and a WordPress plugin that needed a
          second opinion before going live. See how a structured health check
          turned an AI-built integration into a clear, prioritized action
          plan.
        </p>
        <Link
          href="/case-studies/mockproject"
          className="mt-5 inline-flex items-center text-sm font-medium underline underline-offset-4"
        >
          Read the case study →
        </Link>
      </section>

      <section className="mt-24">
        <CTASection />
      </section>
    </div>
  );
}
