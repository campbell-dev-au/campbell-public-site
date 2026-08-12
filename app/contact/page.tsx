import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a project or a codebase you're not sure about.",
};

// Phone number from the CV is intentionally omitted pending confirmation
// from Campbell on whether it should be public. Add it here once confirmed.

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Have a project in mind, or a codebase you&rsquo;re not sure about?
        Let&rsquo;s talk.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          {siteConfig.email}
        </a>
        <div className="flex gap-6 text-sm font-medium">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
