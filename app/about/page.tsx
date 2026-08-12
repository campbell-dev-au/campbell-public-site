import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Over a decade of software engineering experience, now working independently as a freelance developer based in Adelaide.",
};

const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: [
      "PHP 8+",
      "Symfony",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "Python",
      "HTML/CSS",
    ],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "Redis", "Schema design", "Query optimisation"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Linux", "RESTful APIs"],
  },
  {
    title: "AI-Assisted Development",
    items: ["Cursor", "Claude", "Gemini"],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="flex items-center gap-6">
        <Image
          src="/images/campbell-davis.jpg"
          alt="Campbell Davis"
          width={112}
          height={112}
          className="h-28 w-28 flex-shrink-0 rounded-full object-cover"
        />
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      </div>

      <div className="mt-8 flex max-w-2xl flex-col gap-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        <p>
          I&rsquo;m a software engineer with over a decade of experience
          building and maintaining web-based systems. Most recently, I spent
          around 11 years at FOUR in Adelaide, where I acted as lead engineer
          on a bespoke integration engine mapping data between an ERP and a
          scheduling system, led stakeholder-facing requirements work on a
          business management solution, built an internal &ldquo;Dashboard
          Builder&rdquo; tool, led testing and QA practices as the support
          team&rsquo;s lead engineer, and maintained the technical
          documentation that keeps a system supportable long after it ships.
        </p>
        <p>
          Before that, I worked as a web developer, including a full UI/UX
          overhaul of a customer-facing portal.
        </p>
        <p>
          I&rsquo;m now working independently, based in{" "}
          {siteConfig.location}, and open to remote engagements across
          Australia.
        </p>
        <p>
          Before software, I studied law (1st Class Honours) and
          international studies — it&rsquo;s part of why I care about clear
          requirements, clean documentation, and not overselling a fix
          nobody asked for.
        </p>
        <p>
          I also use AI coding tools daily in my own work — Cursor, Claude,
          Gemini — which is exactly why the health-check offering exists:
          hands-on familiarity with both what these tools are good at, and
          where they leave gaps.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Skills
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-black/10 px-3 py-1 text-sm text-zinc-700 dark:border-white/10 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex gap-6 text-sm font-medium">
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
  );
}
