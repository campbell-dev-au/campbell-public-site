import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";
import { serviceIcons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, business process improvement, bespoke software, and vibe-code health checks — five ways I can help.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Five ways I can help — pick a starting point, or we can figure out
        the right one together.
      </p>

      <div className="mt-16 flex flex-col gap-16">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];
          return (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 border-t border-black/10 pt-10 dark:border-white/10 first:border-t-0 first:pt-0"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">
              What you get
            </h3>
            <ul className="mt-3 flex max-w-2xl flex-col gap-2">
              {service.whatYouGet.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-7 text-zinc-700 dark:text-zinc-300"
                >
                  <span aria-hidden className="text-zinc-400">
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            {service.link && (
              <Link
                href={service.link.href}
                className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
              >
                {service.link.label} →
              </Link>
            )}
          </section>
          );
        })}
      </div>

      <div className="mt-24">
        <CTASection />
      </div>
    </div>
  );
}
