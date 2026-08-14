import Link from "next/link";
import CopyrightYear from "@/components/CopyrightYear";
import { EmailIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/30 bg-zinc-900/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CopyrightYear /> {siteConfig.name}. {siteConfig.location}.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-indigo-400"
          >
            <EmailIcon className="h-4 w-4" />
            Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-indigo-400"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-indigo-400"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <Link
            href="/contact"
            className="transition-colors hover:text-indigo-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
