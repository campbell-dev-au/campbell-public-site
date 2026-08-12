import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <div className="px-6 py-12 sm:px-10 sm:py-16">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-300/50 to-fuchsia-300/30 blur-3xl dark:from-indigo-600/20 dark:to-fuchsia-600/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-700/10"
        />
        <section className="relative flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Software development that ships — from vibe-coded prototypes to
            production-grade systems.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&rsquo;m Campbell Davis, a freelance web and software developer
            based in Adelaide, working with businesses across Australia. Over
            a decade building, integrating, and rescuing software — including
            the new wave of AI-generated prototypes that need a professional
            eye before they can be trusted.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
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
        </div>
        <div className="relative flex-shrink-0">
          <div
            aria-hidden
            className="absolute -inset-2 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-70 blur-md"
          />
          <Image
            src="/images/campbell-davis.jpg"
            alt="Campbell Davis"
            width={192}
            height={192}
            priority
            className="relative h-32 w-32 rounded-full object-cover ring-4 ring-white sm:h-48 sm:w-48 dark:ring-zinc-950"
          />
        </div>
        </section>
      </div>

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

      <section className="mt-24 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-8 dark:border-indigo-500/20 dark:bg-indigo-500/5 sm:p-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
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
          className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
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
