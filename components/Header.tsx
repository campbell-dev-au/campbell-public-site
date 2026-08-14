"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, siteConfig } from "@/lib/site";
import { CloseIcon, MenuIcon } from "@/components/icons";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/75 backdrop-blur-md dark:border-black/30 dark:bg-zinc-900/80">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="rounded-box text-lg font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:focus-visible:outline-indigo-400"
          onClick={() => setIsMenuOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-box p-2 text-zinc-600 hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 sm:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute inset-x-0 top-full flex-col gap-4 border-b border-black/10 bg-white/95 px-6 py-4 text-sm font-medium text-zinc-600 backdrop-blur-md dark:border-black/30 dark:bg-zinc-900/95 dark:text-zinc-400 sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none`}
        >
          {nav.map((item) => {
            const isCurrent = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-box transition-colors hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-400 ${
                  isCurrent ? "text-indigo-600 dark:text-indigo-400" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
