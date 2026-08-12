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
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Have a project in mind, or a codebase you&rsquo;re not sure about?
        Let&rsquo;s talk.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-black/10 pt-8 dark:border-white/10">
        <p className="text-sm text-zinc-500">Prefer email or social?</p>
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <a href={`mailto:${siteConfig.email}`} className="text-indigo-600 underline underline-offset-4 dark:text-indigo-400">
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
    </div>
  );
}
