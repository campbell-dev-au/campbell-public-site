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
    <section className="rounded-2xl bg-zinc-950 px-8 py-12 text-center dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-zinc-400">{body}</p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
