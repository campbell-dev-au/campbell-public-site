import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.location}.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            GitHub
          </a>
          <Link
            href="/contact"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
