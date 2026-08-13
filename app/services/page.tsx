import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PhotoFrame from "@/components/PhotoFrame";
import { services } from "@/lib/services";
import { serviceIcons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, business process improvement, bespoke software, and vibe-code health checks — five ways I can help.",
};

export default function ServicesPage() {
  return (
    <div className="px-6 py-12 sm:px-10 sm:py-16">
      <PhotoFrame
        src="/images/services-chart-laptop.jpg"
        alt="A hand pointing a stylus at a business growth chart on a tablet screen"
        className="aspect-[4/1]"
        objectPosition="50% 50%"
        priority
      />
      <h1 className="mt-8 text-4xl font-semibold tracking-tight">Services</h1>
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
            className="scroll-mt-24 border-t border-black/10 pt-10 dark:border-black first:border-t-0 first:pt-0 lg:grid lg:grid-cols-[1fr_320px] lg:gap-12"
          >
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-box bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h2>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
              {service.link && (
                <Link
                  href={service.link.href}
                  className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
                >
                  {service.link.label} →
                </Link>
              )}
            </div>
            <div className="mt-6 h-fit rounded-box border border-indigo-100 bg-indigo-50/50 p-5 dark:border-black dark:bg-indigo-500/10 lg:mt-0">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                What you get
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {service.whatYouGet.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300"
                  >
                    <span aria-hidden className="text-indigo-400">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
