import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PhotoFrame from "@/components/PhotoFrame";
import { services, serviceGroups } from "@/lib/services";
import { serviceIcons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, business process improvement, bespoke software, and Vibe-Code Health Checks — five ways I can help.",
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
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
        Start with the problem that brought you here, and I&rsquo;ll point you to
        the right service.
      </p>

      <div className="mt-16 flex flex-col gap-16">
        {serviceGroups.map((group) => {
          const groupServices = services.filter(
            (service) => service.group === group.key
          );
          return (
            <div key={group.key}>
              <div className="sticky top-16 z-10 -mx-1 bg-zinc-900/95 px-1 py-3 backdrop-blur-sm">
                <p className="font-mono text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  The situation
                </p>
                <h2 className="mt-1 text-xl font-medium tracking-tight text-balance text-zinc-400">
                  {group.heading}
                </h2>
              </div>
              <div className="mt-8 flex flex-col gap-16">
                {groupServices.map((service) => {
                  const Icon = serviceIcons[service.icon];
                  return (
                    <section
                      key={service.slug}
                      id={service.slug}
                      className="scroll-mt-36 border-l-2 border-indigo-500/20 pl-6 lg:grid lg:grid-cols-[1fr_320px] lg:gap-12"
                    >
                      <div>
                        <p className="font-mono text-xs font-semibold uppercase tracking-wide text-indigo-400">
                          Service
                        </p>
                        <div className="mt-2 flex items-center gap-4">
                          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-box bg-indigo-500/10 text-indigo-400">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="flex flex-wrap items-center gap-2 text-2xl font-semibold tracking-tight">
                            {service.title}
                          </h3>
                        </div>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
                          {service.description}
                        </p>
                        {service.link && (
                          <Link
                            href={service.link.href}
                            className="mt-5 inline-flex items-center text-sm font-medium text-indigo-400 underline underline-offset-4"
                          >
                            {service.link.label} →
                          </Link>
                        )}
                      </div>
                      <div className="mt-6 h-fit rounded-box border border-black/30 bg-indigo-500/10 p-5 lg:mt-0">
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
                          What you get
                        </h4>
                        <ul className="mt-3 flex flex-col gap-2">
                          {service.whatYouGet.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-zinc-300"
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
            </div>
          );
        })}
      </div>

      <div className="mt-24">
        <CTASection />
      </div>
    </div>
  );
}
