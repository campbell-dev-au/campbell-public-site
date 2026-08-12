import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a project or a codebase you're not sure about.",
};

// Phone number from the CV is intentionally omitted pending confirmation
// from Campbell on whether it should be public. Add it here once confirmed.

export default function ContactPage() {
  return (
    <div className="px-6 py-12 sm:px-10 sm:py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Have a project in mind, or a codebase you&rsquo;re not sure about?
        Let&rsquo;s talk.
      </p>

      <div className="mt-10 lg:grid lg:grid-cols-[1fr_320px] lg:gap-12">
        <ContactForm />

        <div className="mt-10 flex h-fit flex-col gap-6 lg:mt-0">
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 dark:border-indigo-500/20 dark:bg-indigo-500/5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
              Other ways to reach me
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm font-medium">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 p-5 dark:border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              What to include
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-3">
                <span aria-hidden className="text-indigo-400">
                  ·
                </span>
                A short description of the project or codebase
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="text-indigo-400">
                  ·
                </span>
                Rough timeline or urgency
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="text-indigo-400">
                  ·
                </span>
                Budget range, if you have one
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
