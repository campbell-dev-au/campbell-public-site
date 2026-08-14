import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 py-12 sm:px-10 sm:py-16">
      <div className="relative overflow-hidden rounded-box">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-violet-700/10 blur-3xl"
        />
        <section className="relative flex flex-col-reverse items-start gap-10 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
              Freelance developer | Adelaide
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Software you can trust... including the parts an AI wrote.
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I&rsquo;m Campbell Davis. I build new software, and I fix the
              AI-generated kind nobody&rsquo;s checked yet. One person, full
              accountability, and over a decade spent building software that works.
            </p>
            <p className="mt-6 text-sm text-zinc-500">
              Recently: found the gaps in a 35,000-line AI-built plugin before
              it shipped.{" "}
              <Link
                href="/case-studies/wordpress-integration-review"
                className="font-medium text-indigo-400 underline underline-offset-4"
              >
                Read the case study →
              </Link>
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-70 blur-md"
            />
            <Image
              src="/images/campbell-davis.jpg"
              alt="Campbell Davis"
              width={192}
              height={192}
              priority
              className="relative h-32 w-32 rounded-full object-cover ring-4 ring-zinc-950 sm:h-48 sm:w-48"
            />
          </div>
        </section>
      </div>

      <section className="mt-24">
        <p className="text-sm text-zinc-400">
          Where is your project right now?
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-box border border-black/30 bg-gradient-to-br from-indigo-500/10 to-transparent p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Already built something
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-balance">
              AI got you to a demo.
            </h2>
            <p className="text-sm leading-6 text-zinc-400">
              Now you need to know if it&rsquo;s safe to run the business on.
              A structured health check tells you exactly what&rsquo;s solid,
              what isn&rsquo;t, and what to do next.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex w-fit items-center justify-center rounded-box bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Book a Health Check
            </Link>
          </div>
          <div className="flex flex-col gap-4 rounded-box border border-black/30 bg-gradient-to-br from-fuchsia-500/10 to-transparent p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Starting from scratch
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-balance">
              Still on the whiteboard.
            </h2>
            <p className="text-sm leading-6 text-zinc-400">
              I design and build software with care: websites,
              internal tools, custom integrations. Modern tooling,
              handover-ready code, nothing only I can maintain.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex w-fit items-center justify-center rounded-box bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 rounded-box border border-dashed border-white/15 p-5 text-sm text-zinc-400">
          <span className="font-semibold text-zinc-100">
            Or maybe it&rsquo;s not a code problem at all.
          </span>
          <span>
            If your team&rsquo;s buried in manual steps and spreadsheets,
            that&rsquo;s a process problem before it&rsquo;s a software one.
            I help here too.
          </span>
          <Link
            href="/services#business-process-improvement"
            className="font-semibold text-indigo-400 hover:underline"
          >
            See how →
          </Link>
        </div>
      </section>
    </div>
  );
}
