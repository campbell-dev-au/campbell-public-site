import Link from "next/link";
import { nav, siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/75 backdrop-blur-md dark:border-transparent dark:bg-zinc-900/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
