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
    <div className="px-6 py-12 sm:px-10 sm:py-16">
      <div className="relative overflow-hidden rounded-box border border-black/10 bg-indigo-50/40 shadow-sm dark:border-black/30 dark:bg-indigo-500/10">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70 dark:opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(var(--dot-color) 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-300/50 to-fuchsia-300/30 blur-3xl dark:from-indigo-600/20 dark:to-fuchsia-600/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-700/10"
        />
        <div className="relative flex items-center gap-6 p-8 sm:p-10">
          <div className="relative flex-shrink-0">
            <div
              aria-hidden
              className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-70 blur-sm"
            />
            <Image
              src="/images/campbell-davis.jpg"
              alt="Campbell Davis"
              width={112}
              height={112}
              priority
              className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white dark:ring-zinc-950"
            />
          </div>
          <h1 className="text-4xl font-semibold tracking-tight">About Campbell</h1>
        </div>
      </div>

      <div className="mt-8 lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
        <div className="flex flex-col gap-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          <p>
            I&rsquo;m a software engineer with over a decade of experience
            building and maintaining web-based systems. I cut my teeth
            as part of a tech startup in Adelaide, where my responsibilities
            included requirements gathering, scope-writing, solution-design,
            programming, project management, quality assurance, change management...
            and basically anything else that might be needed to make sure a
            given software project was successful.
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
            Before software, I studied Law (1st Class Honours) and
            International Studies, an unusual background, but one which helped
            me understand that good code is only a small part of a successful
            project.
          </p>
          <p>
            I use AI coding tools daily in my own work, which is why my
            health-check offering exists. I have hands-on familiarity with
            both what these tools are good at, and where they leave gaps.
          </p>
        </div>

        <div className="mt-8 h-fit rounded-box border border-indigo-100 bg-indigo-50/50 p-5 dark:border-black/30 dark:bg-indigo-500/10 lg:mt-0">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            Quick facts
          </h2>
          <dl className="mt-3 flex flex-col gap-3 text-sm">
            <div>
              <dt className="text-zinc-500">Based in</dt>
              <dd className="text-zinc-800 dark:text-zinc-200">
                {siteConfig.location} · remote across Australia
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Experience</dt>
              <dd className="text-zinc-800 dark:text-zinc-200">
                11+ years in software engineering
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Availability</dt>
              <dd className="text-zinc-800 dark:text-zinc-200">
                Freelance &amp; contract work
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Background</dt>
              <dd className="text-zinc-800 dark:text-zinc-200">
                Law (1st Class Hons) &amp; International Studies
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Skills
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-box border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-sm text-indigo-900 dark:border-black/30 dark:bg-indigo-500/10 dark:text-indigo-200"
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
  );
}
