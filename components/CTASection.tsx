import Link from "next/link";

export default function CTASection({
  heading = "Have a project in mind, or a codebase you're not sure about?",
  body = "I'm currently available for freelance and contract work.",
  buttonLabel = "Get in touch",
}: {
  heading?: string;
  body?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-box bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-8 py-12 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-fuchsia-300/20 blur-3xl"
      />
      <h2 className="relative text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {heading}
      </h2>
      <p className="relative mx-auto mt-3 max-w-xl text-indigo-100">{body}</p>
      <Link
        href="/contact"
        className="relative mt-6 inline-flex items-center justify-center rounded-box bg-white px-6 py-3 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-50"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
